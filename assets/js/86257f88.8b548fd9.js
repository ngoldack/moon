"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1795],{65530:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>L,contentTitle:()=>J,default:()=>W,frontMatter:()=>P,metadata:()=>q,toc:()=>O});var n=o(25773),r=o(27378),a=o(35318),s=o(97279);const i="\ud83d\udfe9",p="\ud83d\udfe8",u="\ud83d\udfe6",l="\ud83d\udfe5",m=["moon","nx","turborepo"],c=[{feature:"Written in",support:{moon:"Rust",nx:"Node.js",turborepo:"Go (being rewritten in Rust)"}},{feature:"Workspace configured with",support:{moon:"`.moon/workspace.yml`",nx:"`nx.json`",turborepo:"`turbo.json`"}},{feature:"Project list configured in",support:{moon:"`.moon/workspace.yml`",nx:"`workspace.json`",turborepo:"`package.json` workspaces"}},{feature:"Repo / folder structure",support:{moon:"loose",nx:"strict",turborepo:"loose"}},{feature:"Ignore file support",support:{moon:[i,"via `hasher.ignorePatterns`"],nx:[i,".nxignore"]}},{feature:"Supports dependencies inherited by all tasks",support:{moon:[i,"via `implicitDeps`"]}},{feature:"Supports inputs inherited by all tasks",support:{moon:[i,"via `implicitInputs`"],nx:[i,"via `implicitDependencies`"],turborepo:[i,"via `globalDependencies`"]}},{feature:"Supports tasks inherited by all projects",support:{moon:i}},{feature:"Integrates with a version control system",support:{moon:[i,"git"],nx:[i,"git"],turborepo:[i,"git"]}},{feature:"Supports scaffolding / generators",support:{moon:i,nx:i,turborepo:i}}],d=[{feature:"Supported languages",support:{moon:"Bash, Batch, Bun, Deno, Go, Node, JavaScript, TypeScript, PHP, Ruby, Rust, Python",nx:"JavaScript, TypeScript",turborepo:"JavaScript, TypeScript"}},{feature:"Supported dependency managers",support:{moon:"npm, pnpm, yarn",nx:"npm, pnpm, yarn",turborepo:"npm, pnpm, yarn"}},{feature:"Has a built-in toolchain",support:{moon:i}},{feature:"Downloads and installs languages (when applicable)",support:{moon:i}},{feature:"Configures explicit language/dependency manager versions",support:{moon:i}}],f=[{feature:"Dependencies on other projects",support:{moon:[i,"implicit from `package.json` or explicit in `moon.yml`"],nx:[i,"implicit from `package.json` or explicit in `project.json`"],turborepo:[i,"implicit from `package.json`"]}},{feature:"Ownership metadata",support:{moon:i}},{feature:"Primary programming language",support:{moon:i}},{feature:"Project type (app, lib, etc)",support:{moon:[i,"app, lib, tool"],nx:[i,"app, lib"]}},{feature:"Project-level file groups",support:{moon:i,nx:[i,"via `namedInputs`"]}},{feature:"Project-level tasks",support:{moon:i,nx:i,turborepo:i}},{feature:"Tags and scopes (boundaries)",support:{moon:[i,"native for all languages"],nx:[i,"via ESLint (JavaScript only)"]}}],h=[{feature:"Known as",support:{moon:"tasks",nx:"targets, executors",turborepo:"tasks"}},{feature:"Defines tasks in",support:{moon:"`moon.yml` or `package.json` scripts",nx:"`project.json` or `package.json` scripts",turborepo:"`package.json` scripts"}},{feature:"Run a single task with",support:{moon:"`moon run project:task`",nx:"`nx run project:target`",turborepo:"`turbo run task --filter=project`"}},{feature:"Run multiple tasks with",support:{moon:"`moon run :task` or `moon run a:task b:task` or `moon check`",nx:"`nx run-many --target=target`",turborepo:"`turbo run task` or `turbo run a b c`"}},{feature:"Run tasks based on a query/filter",support:{moon:'`moon run :task --query "..."`'}},{feature:"Can define tasks globally",support:{moon:[i,"with `.moon/tasks.yml`"]}},{feature:"Merges or overrides global tasks",support:{moon:i}},{feature:"Runs a command with args",support:{moon:i,nx:[u,"behind an executor abstraction"],turborepo:[p,"within the script"]}},{feature:"Runs commands from",support:{moon:"project or workspace root",nx:"workspace root",turborepo:"project root"}},{feature:"Supports pipes, redirects, etc",support:{moon:[p,"encapsulated in a file"],nx:[p,"within the executor or script"],turborepo:[p,"within the script"]}},{feature:"Dependencies on other tasks",support:{moon:[i,"via `deps`"],nx:[i,"via `dependsOn`"],turborepo:[i,"via `dependsOn`"]}},{feature:"Can depend on arbitrary or unrelated tasks",support:{moon:i,nx:[l,"dependent projects only"],turborepo:[l,"dependent projects only"]}},{feature:"Runs task dependencies in parallel",support:{moon:i,nx:i,turborepo:i}},{feature:"Can run task dependencies in serial",support:{moon:i}},{feature:"File groups",support:{moon:i,nx:[u,"via `namedInputs`"]}},{feature:"Environment variables",support:{moon:[i,"via `env`"],nx:[p,"within the executor or script"],turborepo:[p,"within the script"]}},{feature:"Inputs",support:{moon:[i,"files, globs, env vars"],nx:[i,"files, globs, env vars, runtime"],turborepo:[i,"files, globs"]}},{feature:"Outputs",support:{moon:[i,"files"],nx:[i,"files, globs"],turborepo:[i,"files"]}},{feature:"Output logging style",support:{moon:[i,"via `outputStyle`"],nx:[i,"via `--output-style`"],turborepo:[i,"via `outputMode`"]}},{feature:"Custom hash inputs",support:{nx:[i,"via `runtimeCacheInputs`"],turborepo:[i,"via `globalDependencies`"]}},{feature:"Token substitution",support:{moon:i}},{feature:"Configuration presets",support:{nx:[i,"via `configurations`"]}},{feature:"Configurable options",support:{moon:i,nx:i,turborepo:i}}],g=[{feature:"Known as",support:{moon:"action pipeline",nx:"task runner",turborepo:"pipeline"}},{feature:"Generates a dependency graph",support:{moon:i,nx:i,turborepo:i}},{feature:"Runs in topological order",support:{moon:i,nx:i,turborepo:i}},{feature:"Automatically retries failed tasks",support:{moon:i}},{feature:"Caches task outputs via a unique hash",support:{moon:i,nx:i,turborepo:i}},{feature:"Can customize the underlying runner",support:{nx:i}},{feature:"Can profile running tasks",support:{moon:[i,"cpu, heap"],nx:[i,"cpu"],turborepo:[i,"cpu"]}},{feature:"Can generate run reports",support:{moon:i,turborepo:i}},{feature:"Continuous integration (CI) support",support:{moon:i,nx:p,turborepo:p}},{feature:"Continuous deployment (CD) support",support:{}},{feature:"Remote / cloud caching and syncing",support:{moon:[i,"with moonrepo.app (free / paid)"],nx:[i,"with Nx cloud (paid)"],turborepo:[i,"requires a Vercel account (free)"]}}],k=[{feature:"Known as",support:{moon:"generator",nx:"generator",turborepo:"generator"}},{feature:"Templates are configured with a schema",support:{moon:[i,"via `template.yml`"],nx:i}},{feature:"Template file extensions (optional)",support:{moon:[i,".tera, .twig"],turborepo:[i,".hbs"]}},{feature:"Template files support frontmatter",support:{moon:i}},{feature:"Creates/copies files to destination",support:{moon:i,nx:i,turborepo:i}},{feature:"Updates/merges with existing files",support:{moon:[i,"JSON/YAML only"],nx:[i,"using JavaScript"],turborepo:i}},{feature:"Renders with a template engine",support:{moon:[i,"via Tera"],nx:[i,"via EJS"],turborepo:[i,"via Handlebars"]}},{feature:"Variable interpolation in file content",support:{moon:i,nx:i,turborepo:i}},{feature:"Variable interpolation in file paths",support:{moon:i,nx:i,turborepo:i}},{feature:"Can define variable values via interactive prompts",support:{moon:i,nx:i,turborepo:i}},{feature:"Can define variable values via command line args",support:{moon:i,turborepo:i}},{feature:"Supports dry runs",support:{moon:i,nx:i}},{feature:"Supports render helpers, filters, and built-ins",support:{moon:i,nx:i,turborepo:i}},{feature:"Generators can compose other generators",support:{nx:[i,"using JavaScript"],turborepo:[i,"using JavaScript"]}}],b=[{feature:"Can send webhooks for critical pipeline events",support:{moon:i}},{feature:"Generates run reports with granular stats/metrics",support:{moon:i,turborepo:i}},{feature:"Can define and manage code owners",support:{moon:i}},{feature:"Can generate a `CODEOWNERS` file",support:{moon:i}},{feature:"Can define and manage VCS (git) hooks",support:{moon:i}},{feature:"Supports git worktrees",support:{moon:i}}],v=[{feature:"Will automatically install node modules when lockfile changes",support:{moon:i}},{feature:"Can automatically dedupe when lockfile changes",support:{moon:i}},{feature:"Can alias `package.json` names for projects",support:{moon:i}},{feature:"Can add `engines` constraint to root `package.json`",support:{moon:i}},{feature:"Can sync version manager configs (`.nvmrc`, etc)",support:{moon:i}},{feature:"Can sync cross-project dependencies to `package.json`",support:{moon:i}},{feature:"Can sync project references to applicable `tsconfig.json`",support:{moon:i}},{feature:"Can auto-create missing `tsconfig.json`",support:{moon:i}},{feature:"Can sync dependencies as `paths` to `tsconfig.json`",support:{moon:i}},{feature:"Can route `outDir` to a shared cached in `tsconfig.json`",support:{moon:i}}];function y(e){let{content:t}=e;if(!t)return r.createElement(r.Fragment,null,l);const o=Array.isArray(t)?t.join(" \xa0"):t;return o===i||o===p?r.createElement(r.Fragment,null,o):r.createElement(s.Markdown,{content:o})}function x(e){let{rows:t}=e;return r.createElement("table",{width:"100%"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null),m.map((e=>r.createElement("th",{key:e,align:"center"},e," (",t.filter((t=>{return!!(o=t.support[e])&&(o===i||o!==l&&o!==p&&o!==u||Array.isArray(o)&&o[0]===i);var o})).length,")"))))),r.createElement("tbody",null,t.map((e=>r.createElement("tr",{key:e.feature},r.createElement("td",null,r.createElement(s.Markdown,{content:e.feature})),m.map((t=>r.createElement("td",{key:e.feature+t,align:"center"},r.createElement(y,{content:e.support[t]})))))))))}function w(e){return()=>r.createElement(x,{rows:e})}const C=w([{feature:"Efficient scaffolding for Dockerfile layer caching",support:{moon:i,turborepo:i}},{feature:"Automatic production-only dependency installation",support:{moon:i}},{feature:"Environment pruning to reduce image/container sizes",support:{moon:i,turborepo:i}}]),T=w(k),j=w(v),N=w(b),S=w(f),E=w(h),I=w(g),D=w(d),R=w(c);function F(e){let{left:t,right:o}=e;return r.createElement("section",{className:"grid grid-cols-4 mb-4"},r.createElement("div",{className:"col-span-2 pr-2"},t),r.createElement("div",{className:"col-span-2 pl-2 border-0 border-l-2 border-solid border-slate-50"},o))}const P={title:"Feature comparison"},J=void 0,q={unversionedId:"comparison",id:"comparison",title:"Feature comparison",description:"The following comparisons are not an exhaustive list of features, and may be inaccurate or out of",source:"@site/docs/comparison.mdx",sourceDirName:".",slug:"/comparison",permalink:"/docs/comparison",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/comparison.mdx",tags:[],version:"current",frontMatter:{title:"Feature comparison"},sidebar:"docs",previous:{title:"Cheat sheet",permalink:"/docs/cheat-sheet"},next:{title:"Terminology",permalink:"/docs/terminology"}},L={},O=[{value:"Unique features",id:"unique-features",level:2},{value:"Comparison",id:"comparison",level:2},{value:"Turborepo",id:"turborepo",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Projects",id:"projects",level:4},{value:"Tasks",id:"tasks",level:4},{value:"CI",id:"ci",level:4},{value:"Long-term",id:"long-term",level:4},{value:"Lerna",id:"lerna",level:3},{value:"Comparison tables",id:"comparison-tables",level:2},{value:"Workspace",id:"workspace",level:3},{value:"Toolchain",id:"toolchain",level:3},{value:"Projects",id:"projects-1",level:3},{value:"Tasks",id:"tasks-1",level:3},{value:"Task runner",id:"task-runner",level:3},{value:"Generator",id:"generator",level:3},{value:"Other systems",id:"other-systems",level:3},{value:"JavaScript ecosystem",id:"javascript-ecosystem",level:3},{value:"Docker integration",id:"docker-integration",level:3}],A={toc:O};function W(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},A,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following comparisons are ",(0,a.kt)("em",{parentName:"p"},"not")," an exhaustive list of features, and may be inaccurate or out of\ndate, but represent a good starting point for investigation. If something is not correct, please\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/issues"},"create an issue")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/blob/master/website/src/components/ComparisonTable.tsx"},"submit a patch"),"."),(0,a.kt)("p",null,"Before diving into our comparisons below, we highly suggest reading\n",(0,a.kt)("a",{parentName:"p",href:"https://monorepo.tools/"},"monorepo.tools")," for a deeper insight into monorepos and available tooling.\nAlthough moon is not included, it's a great resource for learning about the current state of things\nand the ecosystem."),(0,a.kt)("h2",{id:"unique-features"},"Unique features"),(0,a.kt)("p",null,"Although moon is still in its infancy, we provide an array of powerful features that other frontend\ncentric task runners do not, such as..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"./concepts/toolchain"},"Integrated toolchain"))," - moon manages its own version of programming\nlanguages and dependency managers behind the scenes, so that every task is executed with the\n",(0,a.kt)("em",{parentName:"li"},"exact same version"),", across ",(0,a.kt)("em",{parentName:"li"},"all machines"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"./concepts/task-inheritance"},"Task inheritance"))," - Instead of defining the same tasks (lint,\ntest, etc) over and over again for ",(0,a.kt)("em",{parentName:"li"},"every")," project in the monorepo, moon supports a task\ninheritance model where it only needs to be defined once at the top-level. Projects can then merge\nwith, exclude, or override if need be."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"./guides/ci"},"Continuous integration"))," - By default, all moon tasks will run in CI, as we want\nto encourage every facet of a project or repository to be continually tested and verified. This\ncan be turned off on a per-task basis.")),(0,a.kt)("p",null,'Curious to learn more? Check out the "',(0,a.kt)("a",{parentName:"p",href:"./#why-use-moon"},"Why use moon?"),'" or "',(0,a.kt)("a",{parentName:"p",href:"./#features"},"Features"),'"\nsections for more information, or these wonderful articles provided by the community:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://azu.github.io/slide/2022/moa/moon-packemon.html"},"A review of moon + Packemon")," by\n",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/azu_re"},"azu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/improve-repo-management-moon/"},"Improve repo management with moon")," by\n",(0,a.kt)("a",{parentName:"li",href:"https://jamesinkala.com/"},"James Sinkala"))),(0,a.kt)("h2",{id:"comparison"},"Comparison"),(0,a.kt)("h3",{id:"turborepo"},"Turborepo"),(0,a.kt)("p",null,"At a high-level, Turborepo and moon seem very similar as they both claim to be task runners. They\nboth support incremental builds, content/smart hashing, local and remote caching",(0,a.kt)("sup",null,"1"),",\nparallel execution, and everything else you'd expect from a task runner. But that's where the\nsimilarities stop, because in the end, Turborepo is nothing more than a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," scripts\norchestrator with a caching layer. While moon also supports this, it\n",(0,a.kt)("a",{parentName:"p",href:"#unique-features"},"aims to be far more")," with a heavy focus on the developer experience."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Looking to migrate from Turborepo to moon? Use our\n",(0,a.kt)("a",{parentName:"p",href:"./commands/migrate/from-turborepo"},(0,a.kt)("inlineCode",{parentName:"a"},"moon migrate from-turborepo"))," command for a seamless migration!")),(0,a.kt)("p",null,"In the next section, we'll be talking about a few key areas that we deem important to consumers. If\nyou'd prefer a more granular comparison, jump down to the ",(0,a.kt)("a",{parentName:"p",href:"#comparison-tables"},"comparison tables"),"."),(0,a.kt)("h4",{id:"configuration"},"Configuration"),(0,a.kt)(F,{left:(0,a.kt)(r.Fragment,null,(0,a.kt)("p",null,"Turborepo only supports the Node.js ecosystem, so implicitly uses a conventions based approach. It\nprovides very little to no configuration for customizing Turborepo to your needs.")),right:(0,a.kt)(r.Fragment,null,(0,a.kt)("p",null,"moon is language agnostic, with initial support for Node.js and its ecosystem. Because of this, moon\nprovides a ton of configuration for customizing moon to your needs. It prefers a configuration over\nconventions approach, as every repository is different.")),mdxType:"ComparisonColumn"}),(0,a.kt)("h4",{id:"projects"},"Projects"),(0,a.kt)(F,{left:(0,a.kt)(r.Fragment,null,(0,a.kt)("p",null,"Turborepo infers projects from ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," workspaces, and does not support non-JavaScript based\nprojects.")),right:(0,a.kt)(r.Fragment,null,(0,a.kt)("p",null,"moon requires projects to be defined in ",(0,a.kt)("inlineCode",{parentName:"p"},".moon/workspace.yml"),", and supports any programming\nlanguage",(0,a.kt)("sup",null,"2"),".")),mdxType:"ComparisonColumn"}),(0,a.kt)("h4",{id:"tasks"},"Tasks"),(0,a.kt)(F,{left:(0,a.kt)(r.Fragment,null,(0,a.kt)("p",null,"Turborepo requires ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," scripts to be defined for every project. This results in the same\nscripts being repeated constantly.")),right:(0,a.kt)(r.Fragment,null,(0,a.kt)("p",null,"moon avoids this overhead by using ",(0,a.kt)("a",{parentName:"p",href:"#unique-features"},"task inheritance"),". No more repitition.")),mdxType:"ComparisonColumn"}),(0,a.kt)("h4",{id:"ci"},"CI"),(0,a.kt)(F,{left:(0,a.kt)(r.Fragment,null,(0,a.kt)("p",null,"Each pipeline in ",(0,a.kt)("inlineCode",{parentName:"p"},"turbo.json")," must be individually ran as a step in CI. Scripts not configured as\npipeline tasks are never ran.")),right:(0,a.kt)(r.Fragment,null,(0,a.kt)("p",null,"moon runs every task automatically using ",(0,a.kt)("inlineCode",{parentName:"p"},"moon ci"),", which also supports parallelism/sharding.")),mdxType:"ComparisonColumn"}),(0,a.kt)("h4",{id:"long-term"},"Long-term"),(0,a.kt)(F,{left:(0,a.kt)(r.Fragment,null,(0,a.kt)("p",null,"Turborepo is in the process of being rewritten in Rust, with its codebase being shared and coupled\nwith the new Turbopack library, a Rust based bundler."),(0,a.kt)("p",null,"Outside of this, there are no publicly available plans for Turborepo's future.")),right:(0,a.kt)(r.Fragment,null,(0,a.kt)("p",null,"moon plans to be so much more than a task runner, with one such facet being a repository management\ntool. This includes code ownership, dependency management and auditing, repository linting, in-repo\nsecrets, and anything else we deem viable."),(0,a.kt)("p",null,"We also plan to support additional languages as first-class citizens within our toolchain.")),mdxType:"ComparisonColumn"}),(0,a.kt)("small",null,(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Turborepo remote caching is powered by Vercel. moon provides its own paid service.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"moon projects may run commands for any language, but not all languages are supported in the\ntoolchain.")))),(0,a.kt)("h3",{id:"lerna"},"Lerna"),(0,a.kt)("p",null,"Lerna was a fantastic tool that helped the JavaScript ecosystem grow and excelled at package\nversioning and publishing (and still does), but it offered a very rudimentary task runner. While\nLerna was able to run scripts in parallel, it wasn't the most efficient, as it did not support\ncaching, hashing, or performant scheduling."),(0,a.kt)("p",null,"However, the reason Lerna is not compared in-depth, is that Lerna was unowned and unmaintained for\nquite some time, and has recently fallen under the Nx umbrella. Lerna is basically Nx lite now."),(0,a.kt)("h2",{id:"comparison-tables"},"Comparison tables"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"\ud83d\udfe9 Supported"),(0,a.kt)("td",null,"\ud83d\udfe8 Partially supported"),(0,a.kt)("td",null,"\ud83d\udfe6 Similarly supported"),(0,a.kt)("td",null,"\ud83d\udfe5 Not supported"))),(0,a.kt)("h3",{id:"workspace"},"Workspace"),(0,a.kt)(R,{mdxType:"WorkspaceTable"}),(0,a.kt)("h3",{id:"toolchain"},"Toolchain"),(0,a.kt)(D,{mdxType:"ToolchainTable"}),(0,a.kt)("h3",{id:"projects-1"},"Projects"),(0,a.kt)(S,{mdxType:"ProjectsTable"}),(0,a.kt)("h3",{id:"tasks-1"},"Tasks"),(0,a.kt)(E,{mdxType:"TasksTable"}),(0,a.kt)("h3",{id:"task-runner"},"Task runner"),(0,a.kt)(I,{mdxType:"TaskRunnerTable"}),(0,a.kt)("h3",{id:"generator"},"Generator"),(0,a.kt)(T,{mdxType:"GeneratorTable"}),(0,a.kt)("h3",{id:"other-systems"},"Other systems"),(0,a.kt)(N,{mdxType:"OtherSystemsTable"}),(0,a.kt)("h3",{id:"javascript-ecosystem"},"JavaScript ecosystem"),(0,a.kt)(j,{mdxType:"JavaScriptTable"}),(0,a.kt)("h3",{id:"docker-integration"},"Docker integration"),(0,a.kt)(C,{mdxType:"DockerTable"}))}W.isMDXComponent=!0}}]);