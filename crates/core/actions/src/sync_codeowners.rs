use moon_codeowners::{CodeownersGenerator, CodeownersHash};
use moon_config::CodeownersOrderBy;
use moon_project_graph::ProjectGraph;
use moon_workspace::Workspace;
use std::path::PathBuf;

pub async fn sync_codeowners(
    workspace: &Workspace,
    project_graph: &ProjectGraph,
    force: bool,
) -> miette::Result<PathBuf> {
    let mut generator = CodeownersGenerator::new(&workspace.root, workspace.config.vcs.provider)?;

    // Sort the projects based on config
    let mut projects = project_graph.get_all_unexpanded();
    let order_by = workspace.config.codeowners.order_by;

    projects.sort_by(|a, d| match order_by {
        CodeownersOrderBy::FileSource => a.source.cmp(&d.source),
        CodeownersOrderBy::ProjectName => a.id.cmp(&d.id),
    });

    // Generate a hash for the codeowners file
    let mut codeowners_hash = CodeownersHash::new(&workspace.config.codeowners);

    if !workspace.config.codeowners.global_paths.is_empty() {
        generator.add_workspace_entries(&workspace.config.codeowners)?;
    }

    for project in projects {
        if !project.config.owners.paths.is_empty() {
            codeowners_hash.add_project(&project.id, &project.config.owners);

            generator.add_project_entry(
                &project.id,
                project.source.as_str(),
                &project.config.owners,
            )?;
        }
    }

    let file_path = generator.file_path.clone();

    // Force run the generator and bypass cache
    if force {
        generator.generate()?;
    }
    // Only generate if the hash has changed
    else {
        workspace
            .cache_engine
            .execute_if_changed("codeowners.json", codeowners_hash, || async {
                generator.generate()
            })
            .await?;
    }

    Ok(file_path)
}

pub async fn unsync_codeowners(workspace: &Workspace) -> miette::Result<PathBuf> {
    let codeowners = CodeownersGenerator::new(&workspace.root, workspace.config.vcs.provider)?;
    let file_path = codeowners.file_path.clone();

    codeowners.cleanup()?;

    Ok(file_path)
}
