/*! For license information please see components-DProgress-stories.ef4102ed.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[5067],{"./src/components/config.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_o:function(){return ICON_FAMILY_CLASS},k2:function(){return PREFIX_BS},yM:function(){return ICON_FAMILY_PREFIX}});const PREFIX_BS="bs-",ICON_FAMILY_CLASS="bi",ICON_FAMILY_PREFIX="bi-"},"./stories/components/DProgress.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},OneHundred:function(){return OneHundred},Stripped:function(){return Stripped},Two:function(){return Two},TwoValueless:function(){return TwoValueless},Valueless:function(){return Valueless},Zero:function(){return Zero},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DProgress_stories}});var classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DProgress({className:className,style:style,currentValue:currentValue,minValue:minValue=0,maxValue:maxValue=100,hideCurrentValue:hideCurrentValue=!1,enableStripedAnimation:enableStripedAnimation=!1,dataAttributes:dataAttributes}){const percentage=(0,react.useMemo)((()=>Math.round(100*currentValue/maxValue)),[currentValue,maxValue]),formatProgress=(0,react.useMemo)((()=>`${percentage}%`),[percentage]),generateClasses=(0,react.useMemo)((()=>({"progress-bar":!0,"progress-bar-striped progress-bar-animated":enableStripedAnimation})),[enableStripedAnimation]);return(0,jsx_runtime.jsx)("div",{className:classnames_default()("progress",className),...dataAttributes,children:(0,jsx_runtime.jsx)("div",{className:classnames_default()(generateClasses),role:"progressbar","aria-label":"Progress bar",style:{width:formatProgress,...style},"aria-valuenow":currentValue,"aria-valuemin":minValue,"aria-valuemax":maxValue,children:!hideCurrentValue&&formatProgress})})}DProgress.displayName="DProgress";try{DProgress.displayName="DProgress",DProgress.__docgenInfo={description:"",displayName:"DProgress",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},currentValue:{defaultValue:null,description:"",name:"currentValue",required:!0,type:{name:"number"}},minValue:{defaultValue:{value:"0"},description:"",name:"minValue",required:!1,type:{name:"number | undefined"}},maxValue:{defaultValue:{value:"100"},description:"",name:"maxValue",required:!1,type:{name:"number | undefined"}},hideCurrentValue:{defaultValue:{value:"false"},description:"",name:"hideCurrentValue",required:!1,type:{name:"boolean | undefined"}},enableStripedAnimation:{defaultValue:{value:"false"},description:"",name:"enableStripedAnimation",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DProgress/DProgress.tsx#DProgress"]={docgenInfo:DProgress.__docgenInfo,name:"DProgress",path:"src/components/DProgress/DProgress.tsx#DProgress"})}catch(__react_docgen_typescript_loader_error){}var DProgress_stories={title:"Design System/Components/Progress",parameters:{docs:{description:{component:`\nWrapper around Bootstrap Progress.\n\nTo understand in more detail the aspects covered by this component, review the following documentation:\n\n+ [Bootstrap Progress](https://getbootstrap.com/docs/5.3/components/progress/)\n\n## CSS Variables\nThe Bootstrap documentation provides details on the default [Progress CSS Variables](https://getbootstrap.com/docs/5.3/components/progress/#css)\n\n| Variable                               | Class     | Type            | Description      |\n|----------------------------------------|-----------|-----------------|------------------|\n| --${__webpack_require__("./src/components/config.ts").k2}progress-bar-font-weight | .progress | css length unit | Text font weight |\n        `}}},component:DProgress,argTypes:{style:{control:"object"},className:{control:"text",type:"string"},currentValue:{control:"number",type:"number",description:"Current progress value"},minValue:{control:"number",type:"number",description:"Minimum value of the bar"},maxValue:{control:"number",type:"number",description:"Maximum value of the bar"},hideCurrentValue:{control:"boolean",type:"boolean",description:"Hide current value",table:{defaultValue:{summary:!1}}},enableStripedAnimation:{control:"boolean",type:"boolean",description:"Enable striped animation",table:{defaultValue:{summary:!1}}}},tags:["autodocs"]};const Default={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(DProgress,{...args}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},Stripped={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(DProgress,{...args}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!0,hideCurrentValue:!1}},Valueless={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(DProgress,{...args}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0}},Zero={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(DProgress,{...args}),args:{currentValue:0,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},Two={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(DProgress,{...args}),args:{currentValue:2,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},TwoValueless={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(DProgress,{...args}),args:{currentValue:2,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0}},OneHundred={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(DProgress,{...args}),args:{currentValue:100,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DProgress {...args} />,\n  args: {\n    currentValue: 33,\n    minValue: 0,\n    maxValue: 100,\n    enableStripedAnimation: false,\n    hideCurrentValue: false\n  }\n}",...Default.parameters?.docs?.source}}},Stripped.parameters={...Stripped.parameters,docs:{...Stripped.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DProgress {...args} />,\n  args: {\n    currentValue: 33,\n    minValue: 0,\n    maxValue: 100,\n    enableStripedAnimation: true,\n    hideCurrentValue: false\n  }\n}",...Stripped.parameters?.docs?.source}}},Valueless.parameters={...Valueless.parameters,docs:{...Valueless.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DProgress {...args} />,\n  args: {\n    currentValue: 33,\n    minValue: 0,\n    maxValue: 100,\n    enableStripedAnimation: false,\n    hideCurrentValue: true\n  }\n}",...Valueless.parameters?.docs?.source}}},Zero.parameters={...Zero.parameters,docs:{...Zero.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DProgress {...args} />,\n  args: {\n    currentValue: 0,\n    minValue: 0,\n    maxValue: 100,\n    enableStripedAnimation: false,\n    hideCurrentValue: false\n  }\n}",...Zero.parameters?.docs?.source}}},Two.parameters={...Two.parameters,docs:{...Two.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DProgress {...args} />,\n  args: {\n    currentValue: 2,\n    minValue: 0,\n    maxValue: 100,\n    enableStripedAnimation: false,\n    hideCurrentValue: false\n  }\n}",...Two.parameters?.docs?.source}}},TwoValueless.parameters={...TwoValueless.parameters,docs:{...TwoValueless.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DProgress {...args} />,\n  args: {\n    currentValue: 2,\n    minValue: 0,\n    maxValue: 100,\n    enableStripedAnimation: false,\n    hideCurrentValue: true\n  }\n}",...TwoValueless.parameters?.docs?.source}}},OneHundred.parameters={...OneHundred.parameters,docs:{...OneHundred.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DProgress {...args} />,\n  args: {\n    currentValue: 100,\n    minValue: 0,\n    maxValue: 100,\n    enableStripedAnimation: false,\n    hideCurrentValue: false\n  }\n}",...OneHundred.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Stripped","Valueless","Zero","Two","TwoValueless","OneHundred"]},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);