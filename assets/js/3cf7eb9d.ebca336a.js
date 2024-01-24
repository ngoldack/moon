"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80925],{77552:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=o(24246),r=o(71670);const i={slug:"proto-v0.29",title:"proto v0.29 - Better environment support",authors:["milesj"],tags:["proto","environment"]},s=void 0,l={permalink:"/blog/proto-v0.29",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2024-01-23_proto-v0.29.mdx",source:"@site/blog/2024-01-23_proto-v0.29.mdx",title:"proto v0.29 - Better environment support",description:"In this release, we focused heavily on environment interoperability.",date:"2024-01-23T00:00:00.000Z",formattedDate:"January 23, 2024",tags:[{label:"proto",permalink:"/blog/tags/proto"},{label:"environment",permalink:"/blog/tags/environment"}],readingTime:.915,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"proto-v0.29",title:"proto v0.29 - Better environment support",authors:["milesj"],tags:["proto","environment"]},unlisted:!1,nextItem:{title:"proto v0.28 - Upgraded WASM runtime",permalink:"/blog/proto-v0.28"}},a={authorsImageUrls:[void 0]},c=[{value:"New environment aware configuration",id:"new-environment-aware-configuration",level:2},{value:"New <code>[env]</code> and <code>[tools.*.env]</code> settings",id:"new-env-and-toolsenv-settings",level:2},{value:"Other changes",id:"other-changes",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In this release, we focused heavily on environment interoperability."}),"\n",(0,t.jsx)(n.h2,{id:"new-environment-aware-configuration",children:"New environment aware configuration"}),"\n",(0,t.jsxs)(n.p,{children:["We've made a small but useful improvement to ",(0,t.jsx)(n.code,{children:".prototools"}),", environment aware files! When the\n",(0,t.jsx)(n.code,{children:"PROTO_ENV"})," environment variable is set, proto will look for an additional ",(0,t.jsx)(n.code,{children:".prototools.{env}"})," file\nand merge it with the base configuration."]}),"\n",(0,t.jsx)(n.p,{children:"This is useful for certain deploy scenarios where you need different versions of tools, environment\nvariables, or settings!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title=".prototools"',children:'node = "21.0.0"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title=".prototools.production"',children:'node = "20.0.0"\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"new-env-and-toolsenv-settings",children:["New ",(0,t.jsx)(n.code,{children:"[env]"})," and ",(0,t.jsx)(n.code,{children:"[tools.*.env]"})," settings"]}),"\n",(0,t.jsxs)(n.p,{children:["We're also introducing 2 new settings to the ",(0,t.jsx)(n.code,{children:".prototools"})," file, ",(0,t.jsx)(n.a,{href:"/docs/proto/config#env",children:(0,t.jsx)(n.code,{children:"[env]"})}),"\nand ",(0,t.jsx)(n.a,{href:"/docs/proto/config#toolsenv",children:(0,t.jsx)(n.code,{children:"[tools.*.env]"})}),", both of which configure environment variables\nthat'll be applied when the tool is executed. This is useful for defining directory-level and\ntool-specific variables."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title=".prototools"',children:'[env]\nDEBUG = "*"\n\n[tools.node.env]\nNODE_ENV = "production"\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"/docs/proto/config",children:"configuration documentation"})," for more information on how these work!"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/proto/releases/tag/v0.29.0",children:"official release"})," for a full list\nof changes."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Updated ",(0,t.jsx)(n.code,{children:"proto tool info"})," to display aliases and environment variables."]}),"\n",(0,t.jsxs)(n.li,{children:["Updated WASM logs to be shown alongside proto's ",(0,t.jsx)(n.code,{children:"--log"})," output (under the ",(0,t.jsx)(n.code,{children:"extism::pdk"}),"\nnamespace)."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},71670:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>s});var t=o(27378);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);