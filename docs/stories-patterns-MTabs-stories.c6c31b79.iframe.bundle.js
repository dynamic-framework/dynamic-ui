/*! For license information please see stories-patterns-MTabs-stories.c6c31b79.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[6589],{"./src/stories/patterns/MTabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MTabs_stories});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const TabContext=(0,react.createContext)(void 0);function MTabs({children,defaultSelected,onChange,options,className,isVertical}){const[selected,setSelected]=(0,react.useState)(defaultSelected),onSelect=(0,react.useCallback)((option=>{option.tab&&setSelected(option.tab),onChange(option)}),[onChange]);(0,react.useEffect)((()=>{setSelected(defaultSelected)}),[defaultSelected]);const isSelected=(0,react.useCallback)((tab=>selected===tab),[selected]),value=(0,react.useMemo)((()=>({isSelected})),[isSelected]);return(0,jsx_runtime.jsx)(TabContext.Provider,{value,children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()({"m-tabs":!0,"m-tabs-vertical":isVertical}),children:[(0,jsx_runtime.jsx)("nav",{className:"nav",children:options.map((option=>(0,jsx_runtime.jsx)("button",{id:`${option.tab}Tab`,className:classnames_default()("nav-link",{active:option.tab===selected},className),type:"button",role:"tab","aria-controls":`${option.tab}Pane`,"aria-selected":option.tab===selected,disabled:option.isDisabled,onClick:()=>onSelect(option),children:option.label},option.label)))}),(0,jsx_runtime.jsx)("div",{className:"tab-content",children})]})})}MTabs.displayName="MTabs";try{MTabs.displayName="MTabs",MTabs.__docgenInfo={description:"",displayName:"MTabs",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(option: TabOption) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"TabOption[]"}},defaultSelected:{defaultValue:null,description:"",name:"defaultSelected",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},isVertical:{defaultValue:null,description:"",name:"isVertical",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MTabs.tsx#MTabs"]={docgenInfo:MTabs.__docgenInfo,name:"MTabs",path:"src/components/MTabs.tsx#MTabs"})}catch(__react_docgen_typescript_loader_error){}function MTabContent({tab,children}){const{isSelected}=function useTabContext(){const context=(0,react.useContext)(TabContext);if(void 0===context)throw new Error("useTabContext was used outside of MTab");return context}();return isSelected(tab)?(0,jsx_runtime.jsx)("div",{className:"tab-pane fade show active",id:`${tab}Pane`,role:"tabpanel",tabIndex:0,"aria-labelledby":`${tab}Tab`,children}):null}MTabContent.displayName="MTabContent";try{MTabContent.displayName="MTabContent",MTabContent.__docgenInfo={description:"",displayName:"MTabContent",props:{tab:{defaultValue:null,description:"",name:"tab",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MTabContent.tsx#MTabContent"]={docgenInfo:MTabContent.__docgenInfo,name:"MTabContent",path:"src/components/MTabContent.tsx#MTabContent"})}catch(__react_docgen_typescript_loader_error){}const MTabs_stories={title:"Design System/Patterns/Tabs",component:MTabs,argTypes:{className:{type:"string",control:"string"},isVertical:{type:"boolean",control:"boolean",table:{defaultValue:{summary:!1}}}}},Default={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsxs)(MTabs,{...args,children:[(0,jsx_runtime.jsx)(MTabContent,{tab:"tab1",children:"Tab content for Tab 1"}),(0,jsx_runtime.jsx)(MTabContent,{tab:"tab2",children:"Tab content for Tab 2"})]}),args:{defaultSelected:"tab2",options:[{label:"Tab 1",tab:"tab1"},{label:"Tab 2",tab:"tab2"},{label:"Tab w/o Content",tab:"empty"}],isVertical:!1}},Vertical={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsxs)(MTabs,{...args,children:[(0,jsx_runtime.jsx)(MTabContent,{tab:"tab1",children:"Tab content for Tab 1"}),(0,jsx_runtime.jsx)(MTabContent,{tab:"tab2",children:"Tab content for Tab 2"})]}),args:{defaultSelected:"tab2",options:[{label:"Tab 1",tab:"tab1"},{label:"Tab 2",tab:"tab2"},{label:"Tab w/o Content",tab:"empty"}],isVertical:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <MTabs {...args}>\n      <MTabContent tab=\"tab1\">Tab content for Tab 1</MTabContent>\n      <MTabContent tab=\"tab2\">Tab content for Tab 2</MTabContent>\n    </MTabs>,\n  args: {\n    defaultSelected: 'tab2',\n    options: [{\n      label: 'Tab 1',\n      tab: 'tab1'\n    }, {\n      label: 'Tab 2',\n      tab: 'tab2'\n    }, {\n      label: 'Tab w/o Content',\n      tab: 'empty'\n    }],\n    isVertical: false\n  }\n}",...Default.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <MTabs {...args}>\n      <MTabContent tab=\"tab1\">Tab content for Tab 1</MTabContent>\n      <MTabContent tab=\"tab2\">Tab content for Tab 2</MTabContent>\n    </MTabs>,\n  args: {\n    defaultSelected: 'tab2',\n    options: [{\n      label: 'Tab 1',\n      tab: 'tab1'\n    }, {\n      label: 'Tab 2',\n      tab: 'tab2'\n    }, {\n      label: 'Tab w/o Content',\n      tab: 'empty'\n    }],\n    isVertical: true\n  }\n}",...Vertical.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Vertical"]},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);