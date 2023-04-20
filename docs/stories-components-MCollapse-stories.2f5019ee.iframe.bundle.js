/*! For license information please see stories-components-MCollapse-stories.2f5019ee.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[6743],{"./src/components/MCollapse.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MCollapse});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_proxies__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/proxies.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function MCollapse({id,Component,hasSeparator=!1,defaultCollapsed=!1,onChange,children}){const[toggle,setToggle]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultCollapsed),onChangeCollapse=()=>setToggle((prev=>!prev));return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{onChange&&onChange(toggle)}),[toggle,onChange]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{setToggle(defaultCollapsed)}),[defaultCollapsed]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{id,className:"m-collapse collapse-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"collapse-button",role:"button",tabIndex:0,onClick:onChangeCollapse,onKeyDown:({code})=>"Enter"===code?onChangeCollapse:{},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"flex-grow-1",children:Component}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_proxies__WEBPACK_IMPORTED_MODULE_3__.Ou,{icon:toggle?"chevron-up":"chevron-down"})]}),toggle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()({"collapse-body":!0,separator:hasSeparator}),children:[hasSeparator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"collapse-body-separator"}),children]})]})}MCollapse.displayName="MCollapse";try{MCollapse.displayName="MCollapse",MCollapse.__docgenInfo={description:"",displayName:"MCollapse",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"Element | ReactNode"}},hasSeparator:{defaultValue:{value:"false"},description:"",name:"hasSeparator",required:!1,type:{name:"boolean | undefined"}},defaultCollapsed:{defaultValue:{value:"false"},description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MCollapse.tsx#MCollapse"]={docgenInfo:MCollapse.__docgenInfo,name:"MCollapse",path:"src/components/MCollapse.tsx#MCollapse"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/stories/components/MCollapse.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/MCollapse.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"React/Components/Collapse",component:_components__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{Component:{options:["Text","Custom"],mapping:{Text:"Simple text",Custom:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex gap-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4",{className:"m-0 fw-bold",children:"Custom component"})})}},defaultCollapsed:{control:"boolean"},hasSeparator:{control:"boolean"}}},Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"row d-flex flex-column gap-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:"Text",defaultCollapsed:!1,hasSeparator:!0}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => /*#__PURE__*/_jsx(MCollapse, {\n    ...args,\n    children: /*#__PURE__*/_jsxs("div", {\n      className: "row d-flex flex-column gap-3",\n      children: [/*#__PURE__*/_jsx("div", {\n        className: "col-12",\n        children: "Lorem ipsum dolor sit amet consectetur."\n      }), /*#__PURE__*/_jsx("div", {\n        className: "col-12",\n        children: "Lorem ipsum dolor sit amet consectetur."\n      }), /*#__PURE__*/_jsx("div", {\n        className: "col-12",\n        children: "Lorem ipsum dolor sit amet consectetur."\n      })]\n    })\n  }),\n  args: {\n    Component: \'Text\',\n    defaultCollapsed: false,\n    hasSeparator: true\n  }\n}',...Default.parameters?.docs?.source}}}}}]);