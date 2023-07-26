/*! For license information please see stories-patterns-MCollapseIconText-mdx.32de4171.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[3757,8848],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/patterns/MCollapseIconText.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/blocks/dist/index.mjs"),_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../modyo-design-system/dist/index.js"),_MCollapseIconText_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/patterns/MCollapseIconText.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"collapse-icon-text",children:"Collapse Icon Text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.UG,{children:`\n\n  | Variable                                                    | Type              | Description                                 |\n  |-------------------------------------------------------------|-------------------|---------------------------------------------|\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-m-collapse-icon-text-header-gap\`         | css color unit    | Space between header items                  |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-collapse-icon-text-header-font-size\`     | css font unit     | Title font size                             |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-collapse-icon-text-header-font-weight\`   | css font weight   | Title font weight                           |\n\n  `}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_MCollapseIconText_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_MCollapseIconText_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/MCollapse.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MCollapse});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../modyo-design-system/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_proxies__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/proxies.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function MCollapse({id,className,Component,hasSeparator=!1,defaultCollapsed=!1,onChange,children}){const[toggle,setToggle]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultCollapsed);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{onChange&&onChange(toggle)}),[toggle,onChange]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{setToggle(defaultCollapsed)}),[defaultCollapsed]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("m-collapse collapse-container",className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{className:"collapse-button",type:"button",onClick:()=>setToggle((prev=>!prev)),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"flex-grow-1",children:Component}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_proxies__WEBPACK_IMPORTED_MODULE_4__.Ou,{color:`var(--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_1__.k2}gray)`,size:`var(--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_1__.k2}ref-fs-small)`,icon:toggle?"chevron-up":"chevron-down"})]}),toggle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()({"collapse-body":!0}),style:{[`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_1__.k2}m-collapse-separator-display`]:hasSeparator?"block":"none"},children})]})}MCollapse.displayName="MCollapse";try{MCollapse.displayName="MCollapse",MCollapse.__docgenInfo={description:"",displayName:"MCollapse",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ReactNode | Element"}},hasSeparator:{defaultValue:{value:"false"},description:"",name:"hasSeparator",required:!1,type:{name:"boolean | undefined"}},defaultCollapsed:{defaultValue:{value:"false"},description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MCollapse.tsx#MCollapse"]={docgenInfo:MCollapse.__docgenInfo,name:"MCollapse",path:"src/components/MCollapse.tsx#MCollapse"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/patterns/MCollapseIconText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MCollapseIconText_stories});var MCollapse=__webpack_require__("./src/components/MCollapse.tsx"),proxies=__webpack_require__("./src/components/proxies.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function MCollapseIconText({children,icon,iconSize="1.5rem",iconTheme="primary",title,iconFamilyClass,iconFamilyPrefix}){return(0,jsx_runtime.jsx)(MCollapse.Z,{defaultCollapsed:!0,className:"m-collapse-icon-text",Component:(0,jsx_runtime.jsxs)("div",{className:"m-collapse-icon-text-header",children:[(0,jsx_runtime.jsx)(proxies.Ou,{icon,size:iconSize,theme:iconTheme,familyClass:iconFamilyClass,familyPrefix:iconFamilyPrefix,hasCircle:!0}),(0,jsx_runtime.jsx)("span",{className:"m-collapse-icon-text-title",children:title})]}),children})}MCollapseIconText.displayName="MCollapseIconText";try{MCollapseIconText.displayName="MCollapseIconText",MCollapseIconText.__docgenInfo={description:"",displayName:"MCollapseIconText",props:{icon:{defaultValue:null,description:"Icon name",name:"icon",required:!0,type:{name:"string"}},iconTheme:{defaultValue:{value:"primary"},description:"Icon theme",name:"iconTheme",required:!1,type:{name:"string | undefined"}},iconSize:{defaultValue:{value:"1.5rem"},description:"Icon size",name:"iconSize",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"Title",name:"title",required:!0,type:{name:"string"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/banking/MCollapseIconText.tsx#MCollapseIconText"]={docgenInfo:MCollapseIconText.__docgenInfo,name:"MCollapseIconText",path:"src/components/banking/MCollapseIconText.tsx#MCollapseIconText"})}catch(__react_docgen_typescript_loader_error){}const MCollapseIconText_stories={title:"Design System/Patterns/Collapse Icon Text",component:MCollapseIconText},Default={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(MCollapseIconText,{...args,children:(0,jsx_runtime.jsxs)("div",{className:"row d-flex flex-column gap-3",children:[(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{title:"Credit cards",icon:"credit-card-2-back",iconSize:"1.5rem",iconTheme:"primary"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }}>\n        <Story />\n      </div>],\n  render: args => <MCollapseIconText {...args}>\n      <div className=\"row d-flex flex-column gap-3\">\n        <div className=\"col-12\">Lorem ipsum dolor sit amet consectetur.</div>\n        <div className=\"col-12\">Lorem ipsum dolor sit amet consectetur.</div>\n        <div className=\"col-12\">Lorem ipsum dolor sit amet consectetur.</div>\n      </div>\n    </MCollapseIconText>,\n  args: {\n    title: 'Credit cards',\n    icon: 'credit-card-2-back',\n    iconSize: '1.5rem',\n    iconTheme: 'primary'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);