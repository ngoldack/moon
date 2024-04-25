use moon_cache::CacheEngine;
use moon_config::{ProjectConfig, WorkspaceConfig};
use moon_task::{TargetError, TargetScope, Task};
use starbase_archive::tar::TarPacker;
use starbase_archive::Archiver;
use starbase_utils::glob;
use std::path::Path;

pub struct OutputArchiver<'task> {
    task: &'task Task,
    project_config: &'task ProjectConfig,
    workspace_config: &'task WorkspaceConfig,
    workspace_root: &'task Path,
}

impl<'task> OutputArchiver<'task> {
    pub fn is_archivable(&self) -> miette::Result<bool> {
        let task = self.task;

        if task.is_build_type() {
            return Ok(true);
        }

        for target in &self.workspace_config.runner.archivable_targets {
            let is_matching_task = task.target.task_id == target.task_id;

            match &target.scope {
                TargetScope::All => {
                    if is_matching_task {
                        return Ok(true);
                    }
                }
                TargetScope::Project(project_locator) => {
                    if let Some(owner_id) = task.target.get_project_id() {
                        if owner_id == project_locator && is_matching_task {
                            return Ok(true);
                        }
                    }
                }
                TargetScope::Tag(tag_id) => {
                    if self.project_config.tags.contains(tag_id) && is_matching_task {
                        return Ok(true);
                    }
                }
                TargetScope::Deps => return Err(TargetError::NoDepsInRunContext.into()),
                TargetScope::OwnSelf => return Err(TargetError::NoSelfInRunContext.into()),
            };
        }

        Ok(false)
    }

    pub fn has_outputs_been_created(&self, bypass_globs: bool) -> miette::Result<bool> {
        // If using globs, we have no way to truly determine if all outputs
        // exist on the current file system, so always hydrate...
        if bypass_globs && !self.task.output_globs.is_empty() {
            return Ok(false);
        }

        // Check paths first since they are literal
        for output in &self.task.output_files {
            if !output.to_path(&self.workspace_root).exists() {
                return Ok(false);
            }
        }

        // Check globs last, as they are costly
        if !self.task.output_globs.is_empty() {
            let outputs = glob::walk_files(&self.workspace_root, &self.task.output_globs)?;

            return Ok(!outputs.is_empty());
        }

        Ok(true)
    }

    pub fn create_archive(&self, hash: &str, cache_engine: &CacheEngine) -> miette::Result<bool> {
        let archive_file = cache_engine.hash.get_archive_path(hash);

        // If cache disabled or archive already exists, do nothing
        if !cache_engine.get_mode().is_writable() || archive_file.exists() {
            return Ok(false);
        }

        // Create the archiver instance based on task outputs
        let mut archive = Archiver::new(&self.workspace_root, &archive_file);

        for output_file in &self.task.output_files {
            archive.add_source_file(output_file.as_str(), None);
        }

        for output_glob in &self.task.output_globs {
            archive.add_source_glob(output_glob.as_str());
        }

        // Also include stdout/stderr logs at the root of the tarball
        let state_dir = cache_engine.state.get_target_dir(&self.task.target);

        archive.add_source_file(state_dir.join("stdout.log"), None);

        archive.add_source_file(state_dir.join("stderr.log"), None);

        archive.pack(TarPacker::new_gz)?;

        Ok(true)
    }
}
