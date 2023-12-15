/*! For license information please see components-DTabs-mdx.70c34547.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[5387,2457],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/DTabs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.5.1_@types+react-dom@18.2.14_@types+react@18.2.31_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_src_components_config__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/config.ts"),_DTabs_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./stories/components/DTabs.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2"},(0,_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tabs",children:"Tabs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Wrapper around Bootstrap Nava & Tabs."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To understand in more detail the aspects covered by this component, review the following documentation:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://getbootstrap.com/docs/5.3/components/navs-tabs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Navs & Tabs"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.UG,{children:`\n\n  | Variable                                                  | Type              | Description                        |\n  |-----------------------------------------------------------|-------------------|------------------------------------|\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tabs-nav-gap\`                          | css length unit   | Space between nav links            |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tabs-nav-padding-x\`                    | css length unit   | Nav padding horizontal             |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tabs-nav-padding-y\`                    | css length unit   | Nav padding vertical               |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tabs-link-border-height\`               | css length unit   | Nav link border height             |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tabs-link-border-border-radius\`        | css length unit   | Nav link border radius             |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tabs-link-border-active-color\`         | css color unit    | Nav link border active color       |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tabs-link-border-active-font-weight\`   | css font weight   | Nav link border active font weight |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tabs-link-border-active-bg\`            | css color unit    | Nav link border active background  |\n\n  `}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://getbootstrap.com/docs/5.3/components/navs-tabs/#css",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap css variables"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_DTabs_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_DTabs_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/config.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_o:function(){return ICON_FAMILY_CLASS},d2:function(){return ALERT_TYPE_ICON},k2:function(){return PREFIX_BS},yM:function(){return ICON_FAMILY_PREFIX}});const PREFIX_BS="bs-",ICON_FAMILY_CLASS="bi",ICON_FAMILY_PREFIX="bi-",ALERT_TYPE_ICON={warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",dark:"info-circle",light:"info-circle",primary:"info-circle",secondary:"info-circle"}},"./stories/components/DTabs.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Vertical:function(){return Vertical},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DTabs_stories}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const TabContext=(0,react.createContext)(void 0);var DTabs_TabContext=TabContext,jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DTabContent({tab:tab,children:children,className:className,style:style}){const{isSelected:isSelected}=function useTabContext(){const context=(0,react.useContext)(TabContext);if(void 0===context)throw new Error("useTabContext was used outside of MTab");return context}();return isSelected(tab)?(0,jsx_runtime.jsx)("div",{className:classnames_default()("tab-pane fade show active",className),id:`${tab}Pane`,role:"tabpanel",tabIndex:0,"aria-labelledby":`${tab}Tab`,style:style,children:children}):null}DTabContent.displayName="DTabContent";try{DTabContent.displayName="DTabContent",DTabContent.__docgenInfo={description:"",displayName:"DTabContent",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},tab:{defaultValue:null,description:"",name:"tab",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DTabs/components/DTabContent.tsx#DTabContent"]={docgenInfo:DTabContent.__docgenInfo,name:"DTabContent",path:"src/components/DTabs/components/DTabContent.tsx#DTabContent"})}catch(__react_docgen_typescript_loader_error){}function DTabs({children:children,defaultSelected:defaultSelected,onChange:onChange,options:options,className:className,style:style,vertical:vertical}){const[selected,setSelected]=(0,react.useState)(defaultSelected),onSelect=(0,react.useCallback)((option=>{option.tab&&setSelected(option.tab),onChange(option)}),[onChange]);(0,react.useEffect)((()=>{setSelected(defaultSelected)}),[defaultSelected]);const isSelected=(0,react.useCallback)((tab=>selected===tab),[selected]),value=(0,react.useMemo)((()=>({isSelected:isSelected})),[isSelected]);return(0,jsx_runtime.jsx)(DTabs_TabContext.Provider,{value:value,children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()({"d-tabs":!0,"d-tabs-vertical":vertical},className),style:style,children:[(0,jsx_runtime.jsx)("nav",{className:"nav",children:options.map((option=>(0,jsx_runtime.jsx)("button",{id:`${option.tab}Tab`,className:classnames_default()("nav-link",{active:option.tab===selected},className),type:"button",role:"tab","aria-controls":`${option.tab}Pane`,"aria-selected":option.tab===selected,disabled:option.disabled,onClick:()=>onSelect(option),children:option.label},option.label)))}),(0,jsx_runtime.jsx)("div",{className:"tab-content",children:children})]})})}DTabs.displayName="DTabs";var DTabs_DTabs=Object.assign(DTabs,{Tab:DTabContent});try{DTabs.displayName="DTabs",DTabs.__docgenInfo={description:"",displayName:"DTabs",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(option: DTabOption) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DTabOption[]"}},defaultSelected:{defaultValue:null,description:"",name:"defaultSelected",required:!0,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DTabs/DTabs.tsx#DTabs"]={docgenInfo:DTabs.__docgenInfo,name:"DTabs",path:"src/components/DTabs/DTabs.tsx#DTabs"})}catch(__react_docgen_typescript_loader_error){}var DTabs_stories={title:"Design System/Patterns/Tabs",component:DTabs_DTabs,argTypes:{className:{type:"string",control:"string"},vertical:{type:"boolean",control:"boolean",table:{defaultValue:{summary:!1}}}}};const Default={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsxs)(DTabs_DTabs,{...args,children:[(0,jsx_runtime.jsx)(DTabContent,{tab:"tab1",children:"Tab content for Tab 1"}),(0,jsx_runtime.jsx)(DTabContent,{tab:"tab2",children:"Tab content for Tab 2"})]}),args:{defaultSelected:"tab2",options:[{label:"Tab 1",tab:"tab1"},{label:"Tab 2",tab:"tab2"},{label:"Tab w/o Content",tab:"empty"}],vertical:!1}},Vertical={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsxs)(DTabs_DTabs,{...args,children:[(0,jsx_runtime.jsx)(DTabContent,{tab:"tab1",children:"Tab content for Tab 1"}),(0,jsx_runtime.jsx)(DTabContent,{tab:"tab2",children:"Tab content for Tab 2"})]}),args:{defaultSelected:"tab2",options:[{label:"Tab 1",tab:"tab1"},{label:"Tab 2",tab:"tab2"},{label:"Tab w/o Content",tab:"empty"}],vertical:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DTabs {...args}>\n      <DTabContent tab=\"tab1\">Tab content for Tab 1</DTabContent>\n      <DTabContent tab=\"tab2\">Tab content for Tab 2</DTabContent>\n    </DTabs>,\n  args: {\n    defaultSelected: 'tab2',\n    options: [{\n      label: 'Tab 1',\n      tab: 'tab1'\n    }, {\n      label: 'Tab 2',\n      tab: 'tab2'\n    }, {\n      label: 'Tab w/o Content',\n      tab: 'empty'\n    }],\n    vertical: false\n  }\n}",...Default.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DTabs {...args}>\n      <DTabContent tab=\"tab1\">Tab content for Tab 1</DTabContent>\n      <DTabContent tab=\"tab2\">Tab content for Tab 2</DTabContent>\n    </DTabs>,\n  args: {\n    defaultSelected: 'tab2',\n    options: [{\n      label: 'Tab 1',\n      tab: 'tab1'\n    }, {\n      label: 'Tab 2',\n      tab: 'tab2'\n    }, {\n      label: 'Tab w/o Content',\n      tab: 'empty'\n    }],\n    vertical: true\n  }\n}",...Vertical.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Vertical"]},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);