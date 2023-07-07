"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2334],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,d=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(d,i(i({ref:t},m),{},{components:n})):o.createElement(d,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(25773),a=(n(27378),n(35318));const r={slug:"moon-v1.9",title:"moon v1.9 - VCS hooks management and improved task inheritance",authors:["milesj"],tags:["vcs","git","hooks","task","inheritance"],image:"./img/moon/v1.9.png"},i=void 0,s={permalink:"/blog/moon-v1.9",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-06-26_moon-v1.9.mdx",source:"@site/blog/2023-06-26_moon-v1.9.mdx",title:"moon v1.9 - VCS hooks management and improved task inheritance",description:"In this release, we're introducing a long requested feature, VCS hooks! As well as a complete",date:"2023-06-26T00:00:00.000Z",formattedDate:"June 26, 2023",tags:[{label:"vcs",permalink:"/blog/tags/vcs"},{label:"git",permalink:"/blog/tags/git"},{label:"hooks",permalink:"/blog/tags/hooks"},{label:"task",permalink:"/blog/tags/task"},{label:"inheritance",permalink:"/blog/tags/inheritance"}],readingTime:2.625,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"moon-v1.9",title:"moon v1.9 - VCS hooks management and improved task inheritance",authors:["milesj"],tags:["vcs","git","hooks","task","inheritance"],image:"./img/moon/v1.9.png"},prevItem:{title:"proto v0.12 - Experimental WASM plugins",permalink:"/blog/proto-v0.12"},nextItem:{title:"proto v0.11 - New shims and better logging",permalink:"/blog/proto-v0.11"}},l={image:n(1269).Z,authorsImageUrls:[void 0]},c=[{value:"Support for VCS hooks",id:"support-for-vcs-hooks",level:2},{value:"New <code>vcs</code> settings",id:"new-vcs-settings",level:3},{value:"New <code>moon sync hooks</code> command",id:"new-moon-sync-hooks-command",level:3},{value:"Rewritten task inheritance",id:"rewritten-task-inheritance",level:2},{value:"Other changes",id:"other-changes",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this release, we're introducing a long requested feature, VCS hooks! As well as a complete\nrewrite of our task inheritance layer."),(0,a.kt)("h2",{id:"support-for-vcs-hooks"},"Support for VCS hooks"),(0,a.kt)("p",null,"In our last release, we added support for ",(0,a.kt)("a",{parentName:"p",href:"./moon-v1.8"},"code ownership"),", to better help teams manage\ntheir code review and approval workflows. To continue this trend of \"features all companies require\nbut don't have a good solution for\", we're adding support for VCS hooks,\n",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/githooks"},"starting with Git"),"."),(0,a.kt)("p",null,"If you're unfamiliar with Git hooks, they're a mechanism for running scripts before or after certain\nGit events. For example, before a commit is added, before pushing, or after merging. Hooks can be\nused for such situations as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensuring commit messages abide by a certain format."),(0,a.kt)("li",{parentName:"ul"},"Ensuring affected project's source code pass linting and formatting checks."),(0,a.kt)("li",{parentName:"ul"},"Validating configuration files."),(0,a.kt)("li",{parentName:"ul"},"And much more!")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more information, view our official in-depth ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/vcs-hooks"},"VCS hooks guide"),"!")),(0,a.kt)("h3",{id:"new-vcs-settings"},"New ",(0,a.kt)("inlineCode",{parentName:"h3"},"vcs")," settings"),(0,a.kt)("p",null,"To support hooks, we're introducing the ",(0,a.kt)("inlineCode",{parentName:"p"},"vcs.hooks")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"vcs.syncHooks")," settings to\n",(0,a.kt)("a",{parentName:"p",href:"/docs/config/workspace"},(0,a.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),". The former is where you configure the list of\ncommands to run, grouped by hook type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"vcs:\n  hooks:\n    pre-commit:\n      - 'pre-commit run'\n      - 'moon run :lint --affected'\n")),(0,a.kt)("p",null,"The latter will automatically create and sync hooks with the local VCS checkout, enabling them going\nforward. ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/vcs-hooks#enabling-hooks"},"Learn more about enabling hooks"),", and choosing the\napproach that works best for you or your team!"),(0,a.kt)("h3",{id:"new-moon-sync-hooks-command"},"New ",(0,a.kt)("inlineCode",{parentName:"h3"},"moon sync hooks")," command"),(0,a.kt)("p",null,"Although moon can ",(0,a.kt)("a",{parentName:"p",href:"/docs/config/workspace#synchooksonrun"},"automatically create")," hooks when running a\ntarget, this may be undesirable or abrasive for some developers. Instead, we also support an opt-in\nsolution through the ",(0,a.kt)("a",{parentName:"p",href:"/docs/commands/sync/hooks"},(0,a.kt)("inlineCode",{parentName:"a"},"moon sync hooks"))," command, which will manually\ncreate the hooks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon sync hooks\n")),(0,a.kt)("h2",{id:"rewritten-task-inheritance"},"Rewritten task inheritance"),(0,a.kt)("p",null,'One of the most complicated systems in moon is the task inheritance layer. On the surface, it sounds\nrather simple, but internally it was very complicated. For common use cases, it worked very well,\nbut for advanced use cases, how a task was "inherited and merged" was sometimes undefined behavior.'),(0,a.kt)("p",null,"Over the past year, we've introduced many new features, such as\n",(0,a.kt)("a",{parentName:"p",href:"./v0.23"},"implicit dependencies and inputs"),", ",(0,a.kt)("a",{parentName:"p",href:"./moon-v1.2"},"tag-based task inheritance"),",\n",(0,a.kt)("a",{parentName:"p",href:"./v0.23#project-level-environment-variables"},"project-level environment variables"),",\n",(0,a.kt)("a",{parentName:"p",href:"./v0.25#custom-project-language"},"custom languages")," and\n",(0,a.kt)("a",{parentName:"p",href:"./v0.24#project-level-task-platform"},"platforms"),", and so much more. Each of these new features would\nthrow yet another facet to be aware of during the task inheritance model, and over the past year, it\nhas become rather unwieldy."),(0,a.kt)("p",null,"To rectify this situation before it becomes worse, we rewrote our\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/pull/921"},"project, task"),", and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/pull/939"},"task inheritance")," layers from the ground-up using a new\nbuilder pattern, including writing all new unit tests, to properly and efficiently account for all\nedge cases."),(0,a.kt)("p",null,"Going forward, tasks should be far more accurate and deterministic. If you encounter any weirdness,\nit's either a bug/edge case that was rectified (and is no longer allowed), or a bug/edge case not\naccounted for in our current unit test suite. Please report them either way!"),(0,a.kt)("h2",{id:"other-changes"},"Other changes"),(0,a.kt)("p",null,"View the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/v1.9.0"},"official release")," for a full list of\nchanges."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"--clean")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"--force")," flags to ",(0,a.kt)("inlineCode",{parentName:"li"},"moon sync codeowners")," command."),(0,a.kt)("li",{parentName:"ul"},"Updated ",(0,a.kt)("inlineCode",{parentName:"li"},"moon init")," to detect VCS providers and resolve fully-qualified tool versions."),(0,a.kt)("li",{parentName:"ul"},"Improved VCS file handling, caching, and performance.")))}p.isMDXComponent=!0},1269:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/v1.9-0b831cf2af6e85b7dc549d1966de7775.png"}}]);