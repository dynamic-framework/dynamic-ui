/*! For license information please see stories-components-DCardAccount-stories.84eaa5e1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[9130],{"./src/components/DCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>DCard});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DCard({className,style,children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("card",className),children})}DCard.displayName="DCard";try{DCard.displayName="DCard",DCard.__docgenInfo={description:"",displayName:"DCard",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DCard.tsx#DCard"]={docgenInfo:DCard.__docgenInfo,name:"DCard",path:"src/components/DCard.tsx#DCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DCardBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>DCardBody});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DCardBody({className,children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("card-body",className),children})}DCardBody.displayName="DCardBody";try{DCardBody.displayName="DCardBody",DCardBody.__docgenInfo={description:"",displayName:"DCardBody",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DCardBody.tsx#DCardBody"]={docgenInfo:DCardBody.__docgenInfo,name:"DCardBody",path:"src/components/DCardBody.tsx#DCardBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/components/DCardAccount.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DCardAccount_stories});var classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),proxies=__webpack_require__("./src/components/proxies.ts"),DCard=__webpack_require__("./src/components/DCard.tsx"),DCardBody=__webpack_require__("./src/components/DCardBody.tsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DCardAccount({className,icon,theme,name,number,balance,balanceText,onEventClick,actionText}){return(0,jsx_runtime.jsx)(DCard.Z,{className:classnames_default()("d-card-account",className),children:(0,jsx_runtime.jsxs)(DCardBody.Z,{children:[(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-3 align-items-center",children:[(0,jsx_runtime.jsx)(proxies.UP,{icon,hasCircle:!0,theme,size:"1.5rem"}),(0,jsx_runtime.jsxs)("div",{className:"d-block flex-grow-1",children:[(0,jsx_runtime.jsx)("p",{className:"text-gray-700",children:name}),(0,jsx_runtime.jsx)("small",{className:"text-gray-500",children:number})]})]}),(0,jsx_runtime.jsxs)("div",{className:"d-block",children:[(0,jsx_runtime.jsx)("p",{className:"fw-bold fs-6 text-body",children:balance}),(0,jsx_runtime.jsx)("small",{className:"text-gray-700",children:balanceText})]}),(0,jsx_runtime.jsx)("div",{className:"d-flex justify-content-end",children:(0,jsx_runtime.jsx)(proxies.IV,{text:actionText,variant:"link",size:"sm",theme:"secondary",iconEnd:"chevron-right",onEventClick})})]})})}DCardAccount.displayName="DCardAccount";try{DCardAccount.displayName="DCardAccount",DCardAccount.__docgenInfo={description:"",displayName:"DCardAccount",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"string"}},balance:{defaultValue:null,description:"",name:"balance",required:!0,type:{name:"string"}},balanceText:{defaultValue:null,description:"",name:"balanceText",required:!0,type:{name:"string"}},onEventClick:{defaultValue:null,description:"",name:"onEventClick",required:!0,type:{name:"() => void"}},actionText:{defaultValue:null,description:"",name:"actionText",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DCardAccount.tsx#DCardAccount"]={docgenInfo:DCardAccount.__docgenInfo,name:"DCardAccount",path:"src/components/DCardAccount.tsx#DCardAccount"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./src/stories/constants.ts");const DCardAccount_stories={title:"Design System/Components/Card Account",component:DCardAccount,argTypes:{name:{control:"text",type:"string"},number:{control:"text",type:"string"},theme:{control:"select",options:constants.yU,type:"string"},icon:{control:"select",options:constants.UZ,type:"string"},balance:{control:"text",type:"string"},balanceText:{control:"text",type:"string"},actionText:{control:"text",type:"string"},onEventClick:{action:"onClick"},className:{control:"text",type:"string"}}},Default={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"300px"},children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(DCardAccount,{...args}),args:{name:"Credit Card",number:"**** 456",theme:"secondary",icon:"credit-card",balance:"$50.000.000",balanceText:"Available balance",actionText:"Details"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '300px'\n  }}>\n        <Story />\n      </div>],\n  render: args => <DCardAccount {...args} />,\n  args: {\n    name: 'Credit Card',\n    number: '**** 456',\n    theme: 'secondary',\n    icon: 'credit-card',\n    balance: '$50.000.000',\n    balanceText: 'Available balance',\n    actionText: 'Details'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);