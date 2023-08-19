"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8282],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79022:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(27378),a=r(9619);function o(e){let{header:t,inline:r,updated:o,version:l}=e;return n.createElement(a.Z,{text:`v${l}`,variant:o?"success":"info",className:t?"absolute right-0 top-1.5":r?"inline-block":"ml-2"})}},9619:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(27378),a=r(38944),o=r(31792);const l={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:r,text:i,variant:s}=e;return n.createElement("span",{className:(0,a.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?l[s]:"bg-gray-100 text-gray-800",t)},r&&n.createElement(o.Z,{icon:r,className:"mr-1"}),i)}},70390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(25773),a=(r(27378),r(35318)),o=r(79022);const l={title:"query projects",sidebar_label:"projects"},i=void 0,s={unversionedId:"commands/query/projects",id:"commands/query/projects",title:"query projects",description:"Use the moon query projects sub-command to query information about all projects in the project",source:"@site/docs/commands/query/projects.mdx",sourceDirName:"commands/query",slug:"/commands/query/projects",permalink:"/docs/commands/query/projects",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/query/projects.mdx",tags:[],version:"current",frontMatter:{title:"query projects",sidebar_label:"projects"},sidebar:"docs",previous:{title:"hash-diff",permalink:"/docs/commands/query/hash-diff"},next:{title:"tasks",permalink:"/docs/commands/query/tasks"}},p={},c=[{value:"Affected projects",id:"affected-projects",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3},{value:"Filters",id:"filters",level:4}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"moon query projects")," sub-command to query information about all projects in the project\ngraph. The project list can be filtered by passing a ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/query-lang"},"query statement")," as\nan argument, or by using ",(0,a.kt)("a",{parentName:"p",href:"#options"},"options")," arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Find all projects\n$ moon query projects\n\n# Find all projects with an id that matches "react"\n$ moon query projects --id react\n$ moon query projects "project~react"\n\n# Find all projects with a `lint` or `build` task\n$ moon query projects --tasks "lint|build"\n$ moon query projects "task=[lint,build]"\n')),(0,a.kt)("p",null,"By default, this will output a list of projects in the format of\n",(0,a.kt)("inlineCode",{parentName:"p"},"<id> | <source> | <type> | <language>"),", separated by new lines."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"web | apps/web | application | typescript\n")),(0,a.kt)("p",null,"The projects can also be output in JSON (",(0,a.kt)("a",{parentName:"p",href:"/api/types/interface/Project"},"which contains all data"),") by\npassing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--json")," flag. The output has the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    projects: Project[],\n    options: QueryOptions,\n}\n")),(0,a.kt)("h3",{id:"affected-projects"},"Affected projects"),(0,a.kt)("p",null,"This command can also be used to query for affected projects, based on the state of the VCS working\ntree. For advanced control, you can also pass the results of ",(0,a.kt)("inlineCode",{parentName:"p"},"moon query touched-files")," to stdin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Find all affected projects\n$ moon query projects --affected\n\n# Find all affected projects using the results of another query\n$ moon query touched-files | moon query projects --affected\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[query]")," - An optional ",(0,a.kt)("a",{parentName:"li",href:"../../concepts/query-lang"},"query statement")," to filter projects with. When\nprovided, all ",(0,a.kt)("a",{parentName:"li",href:"#filters"},"filter options")," are ignored. ",(0,a.kt)(o.Z,{version:"1.4.0",mdxType:"VersionLabel"}))),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--affected")," - Filter projects that have been affected by touched files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--json")," - Display the projects in JSON format.")),(0,a.kt)("h4",{id:"filters"},"Filters"),(0,a.kt)("p",null,"All option values are case-insensitive regex patterns."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--alias <regex>")," - Filter projects that match this alias."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--id <regex>")," - Filter projects that match this ID/name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--language <regex>")," - Filter projects of this programming language."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--source <regex>")," - Filter projects that match this source path."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--tags <regex>")," - Filter projects that have the following tags."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--tasks <regex>")," - Filter projects that have the following tasks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--type <regex>")," - Filter project of this type.")))}m.isMDXComponent=!0}}]);