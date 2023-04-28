"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5649],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(25773),o=(n(27378),n(35318));const i={title:"Plugins",toc_max_heading_level:4},l=void 0,r={unversionedId:"proto/plugins",id:"proto/plugins",title:"Plugins",description:"proto supports a pluggable architecture as a means for consumers to integrate and manage custom",source:"@site/docs/proto/plugins.mdx",sourceDirName:"proto",slug:"/proto/plugins",permalink:"/docs/proto/plugins",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/plugins.mdx",tags:[],version:"current",frontMatter:{title:"Plugins",toc_max_heading_level:4},sidebar:"proto",previous:{title:"Supported tools",permalink:"/docs/proto/tools"},next:{title:"FAQ",permalink:"/docs/proto/faq"}},s={},p=[{value:"Enabling plugins",id:"enabling-plugins",level:2},{value:"Creating a plugin",id:"creating-a-plugin",level:2},{value:"TOML plugin",id:"toml-plugin",level:3},{value:"Platform variations",id:"platform-variations",level:4},{value:"Downloading and installing",id:"downloading-and-installing",level:4},{value:"Resolving versions",id:"resolving-versions",level:4},{value:"Git tags",id:"git-tags",level:6},{value:"JSON manifest",id:"json-manifest",level:6},{value:"Detecting versions",id:"detecting-versions",level:4},{value:"WASM plugin",id:"wasm-plugin",level:3}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"proto supports a pluggable architecture as a means for consumers to integrate and manage custom\ntools (languages, CLIs, etc) within proto's toolchain. It's not possible for proto to support\n",(0,o.kt)("em",{parentName:"p"},"everything")," in core directly, so plugins are a way for the community to extend the toolchain to\ntheir needs."),(0,o.kt)("h2",{id:"enabling-plugins"},"Enabling plugins"),(0,o.kt)("p",null,"Plugins can be enabled by configuring them in\n",(0,o.kt)("a",{parentName:"p",href:"./config#plugins"},(0,o.kt)("inlineCode",{parentName:"a"},".prototools")," or ",(0,o.kt)("inlineCode",{parentName:"a"},"~/.proto/config.toml"))," files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title=".prototools"',title:'".prototools"'},'[plugins]\nmy-tool = "schema:https://raw.githubusercontent.com/my/tool/master/proto-plugin.toml"\n')),(0,o.kt)("h2",{id:"creating-a-plugin"},"Creating a plugin"),(0,o.kt)("p",null,"To ease the plugin development process, proto supports 2 types of plugins, a TOML based plugin, and\na WASM based plugin."),(0,o.kt)("h3",{id:"toml-plugin"},"TOML plugin"),(0,o.kt)("p",null,"The TOML plugin is by design, very simple. It's a TOML file that describes a schema for the tool,\nhow it should be installed, and how it should be invoked. Since this is a static configuration file,\nit does not support any logic or complex behavior, and is merely for simple and common use cases,\nlike CLIs."),(0,o.kt)("p",null,"Let's start by creating a new schema plugin, and defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," fields. The type can\neither be ",(0,o.kt)("inlineCode",{parentName:"p"},"language"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dependency-manager"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"cli"),". For this example, we'll create a plugin for\nour fake product called Protostar, a CLI tool."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'name = "Protostar"\ntype = "cli"\n')),(0,o.kt)("h4",{id:"platform-variations"},"Platform variations"),(0,o.kt)("p",null,"Native tools are often platform specific, and proto supports this by allowing you to define\nvariations based on operating system using the ",(0,o.kt)("inlineCode",{parentName:"p"},"[platform]")," section. For non-native tools, this\nsection can typically be skipped."),(0,o.kt)("p",null,"This section requires a mapping of Rust\n",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/env/consts/constant.OS.html"},(0,o.kt)("inlineCode",{parentName:"a"},"OS")," strings")," to platform settings. The\nfollowing settings are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"archive-prefix")," - If the tool is distributed as an archive (zip, tar, etc), this is the name of\nthe direct folder within the archive that contains the tool, and will be removed when unpacking\nthe archive. If there is no prefix folder within the archive, this setting can be omitted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bin-path")," - The path to the executable binary within the archive (without the prefix). If the\ntool is distributed as a single binary, this setting can be typically omitted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"checksum-file")," - Name of the checksum file to verify the downloaded file with. If the tool does\nnot support checksum verification, this setting can be omitted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"download-file")," (required) - Name of the file to download.\n",(0,o.kt)("a",{parentName:"li",href:"#downloading-and-installing"},"Learn more about downloading"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'# ...\n\n[platform.linux]\narchive-prefix = "protostar-linux"\nbin-path = "bins/protostar"\nchecksum-file = "protostar-{arch}-unknown-linux-{libc}.sha256"\ndownload-file = "protostar-{arch}-unknown-linux-{libc}.tar.gz"\n\n[platform.macos]\narchive-prefix = "protostar-macos"\nbin-path = "bins/protostar"\nchecksum-file = "protostar-{arch}-apple-darwin.sha256"\ndownload-file = "protostar-{arch}-apple-darwin.tar.xz"\n\n[platform.windows]\narchive-prefix = "protostar-windows"\nbin-path = "bins/protostar.exe"\nchecksum-file = "protostar-{arch}-pc-windows-msvc.sha256"\ndownload-file = "protostar-{arch}-pc-windows-msvc.zip"\n')),(0,o.kt)("p",null,"You may have noticed tokens above, like ",(0,o.kt)("inlineCode",{parentName:"p"},"{arch}"),". These are special tokens that are replaced with a\ndynamic value at runtime, based on the current host machine executing the code. The following tokens\nare available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{version}")," - The currently resolved version, as a fully-qualifed semantic version:\n",(0,o.kt)("inlineCode",{parentName:"li"},"major.minor.patch"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{arch}")," - The architecture of the host machine, like ",(0,o.kt)("inlineCode",{parentName:"li"},"x86_64"),". These values map to Rust's\n",(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/env/consts/constant.ARCH.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ARCH")," constant"),", but can be\ncustomized with ",(0,o.kt)("a",{parentName:"li",href:"#downloading-and-installing"},(0,o.kt)("inlineCode",{parentName:"a"},"install.arch")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{libc}")," - For Linux machines, this is the current libc implementation, either ",(0,o.kt)("inlineCode",{parentName:"li"},"gnu")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"musl"),".")),(0,o.kt)("h4",{id:"downloading-and-installing"},"Downloading and installing"),(0,o.kt)("p",null,"A schema plugin ",(0,o.kt)("em",{parentName:"p"},"only")," supports downloading pre-built tools, typically as an archive, and does ",(0,o.kt)("em",{parentName:"p"},"not"),"\nsupport building from source. The ",(0,o.kt)("inlineCode",{parentName:"p"},"[install]")," section can be used to configure how the tool should\nbe downloaded and installed into the toolchain. The following settings are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arch")," - A mapping of Rust\n",(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/env/consts/constant.ARCH.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ARCH")," strings")," to custom values for\nthe ",(0,o.kt)("inlineCode",{parentName:"li"},"{arch}")," token. This is useful if the tool has different terminology."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"checksum-url")," - A secure URL to download the checksum file for verification. If the tool does not\nsupport checksum verification, this setting can be omitted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"download-url")," (required) - A secure URL to download the tool/archive.")),(0,o.kt)("p",null,"The URL settings support ",(0,o.kt)("inlineCode",{parentName:"p"},"{checksum_file}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"{download_file}")," tokens, which will be replaced with\nthe values from the ",(0,o.kt)("inlineCode",{parentName:"p"},"[platform]")," section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'# ...\n\n[install]\nchecksum-url = "https://github.com/moonrepo/protostar/releases/download/v{version}/{checksum_file}"\ndownload-url = "https://github.com/moonrepo/protostar/releases/download/v{version}/{download_file}"\n\n[install.arch]\naarch64 = "arm64"\nx86_64 = "x64"\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"[install]")," sections also supports the following settings that dictate the installation of\nglobal binaries for the tool. If the tool does not support globals (is not a programming language),\nthese settings can be omitted."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"globals-dir")," - A list of directories to locate and install the global binaries into. This setting\nsupports interpolating environment variables via the syntax ",(0,o.kt)("inlineCode",{parentName:"li"},"$ENV_VAR"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"global-args")," - A list of CLI arguments to pass to the tool to install a global binary. The name\nof the binary can be inserted using the ",(0,o.kt)("inlineCode",{parentName:"li"},"{dependency}")," token.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'# ...\n\n[install]\nglobals-dir = ["$PROTOSTAR_HOME/bin", "$HOME/.protostar/bin"]\nglobal-args = ["install", "--force", "{dependency}"]\n')),(0,o.kt)("h4",{id:"resolving-versions"},"Resolving versions"),(0,o.kt)("p",null,"Now that the tool can be downloaded and installed, we must configure how to resolve available\nversions. Resolving is configured through the ",(0,o.kt)("inlineCode",{parentName:"p"},"[resolve]")," section, which supports 2 patterns to\nresolve with: Git tags, or a JSON manifest."),(0,o.kt)("h6",{id:"git-tags"},"Git tags"),(0,o.kt)("p",null,"To resolve a list of available versions using Git tags, the following settings are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git-url")," - The remote URL to fetch tags from."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git-tag-pattern")," - A regular expression to filter and match with. Defaults to\n",(0,o.kt)("inlineCode",{parentName:"li"},"^v?((\\d+)\\.(\\d+)\\.(\\d+))"),". The capture group ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," will be extracted as the version.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'# ...\n\n[resolve]\ngit-url = "https://github.com/moonrepo/protostar"\ngit-tag-pattern = "^@protostar/cli@((\\d+)\\.(\\d+)\\.(\\d+))"\n')),(0,o.kt)("h6",{id:"json-manifest"},"JSON manifest"),(0,o.kt)("p",null,"To resolve a list of available versions using a JSON manifest, the following settings are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"manifest-url")," - A URL that returns a JSON response of all versions. This response ",(0,o.kt)("em",{parentName:"li"},"must be")," an\narray of strings, or an array of objects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"manifest-version-key")," - If the response is an array of objects, this is the key to extract the\nversion from. If the response is an array of strings, this setting can be omitted. Defaults to\n",(0,o.kt)("inlineCode",{parentName:"li"},"version"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'# ...\n\n[resolve]\nmanifest-url = "https://someregistry.com/protostar/versions.json"\nmanifest-version-key = "latest_version"\n')),(0,o.kt)("h4",{id:"detecting-versions"},"Detecting versions"),(0,o.kt)("p",null,"And lastly, we can configure how to ",(0,o.kt)("a",{parentName:"p",href:"./detection"},"detect a version")," contextually at runtime, using\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"[detect]")," setting. At this time, we only support 1 setting:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version-files")," - A list of version files to extract from. The contents of these files can ",(0,o.kt)("em",{parentName:"li"},"only"),"\nbe the version string itself.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'# ...\n\n[detect]\nversion-files = [".protostar-version", ".protostarrc"]\n')),(0,o.kt)("h3",{id:"wasm-plugin"},"WASM plugin"),(0,o.kt)("p",null,"Coming soon!"))}u.isMDXComponent=!0}}]);