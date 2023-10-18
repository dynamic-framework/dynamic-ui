/*! For license information please see stories-components-DQuickActionSelect-stories.a48bda6f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[9314],{"./src/stories/components/DQuickActionSelect.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Example:function(){return Example},Selected:function(){return Selected},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DQuickActionSelect_stories}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DQuickActionSelect({id:id,name:name,value:value,line1:line1,line2:line2,className:className,isSelected:isSelected=!1,onChange:onChange}){const innerRef=(0,react.useRef)(null),changeHandler=(0,react.useCallback)((event=>{event.stopPropagation(),onChange?.(event)}),[onChange]);return(0,react.useEffect)((()=>{innerRef.current&&(innerRef.current.checked=isSelected)}),[isSelected]),(0,jsx_runtime.jsxs)("label",{className:classnames_default()("d-quick-action-select",className),htmlFor:id,children:[(0,jsx_runtime.jsx)("input",{ref:innerRef,id:id,type:"radio",name:name,value:value,onChange:changeHandler}),(0,jsx_runtime.jsx)("span",{className:"d-quick-action-select-line1",children:line1}),(0,jsx_runtime.jsx)("span",{className:"d-quick-action-select-line2",children:line2})]})}DQuickActionSelect.displayName="DQuickActionSelect";try{DQuickActionSelect.displayName="DQuickActionSelect",DQuickActionSelect.__docgenInfo={description:"",displayName:"DQuickActionSelect",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},line1:{defaultValue:null,description:"",name:"line1",required:!0,type:{name:"string"}},line2:{defaultValue:null,description:"",name:"line2",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},isSelected:{defaultValue:{value:"false"},description:"",name:"isSelected",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DQuickActionSelect.tsx#DQuickActionSelect"]={docgenInfo:DQuickActionSelect.__docgenInfo,name:"DQuickActionSelect",path:"src/components/DQuickActionSelect.tsx#DQuickActionSelect"})}catch(__react_docgen_typescript_loader_error){}var DQuickActionSelect_stories={title:"Design System/Components/Quick Action Select",component:DQuickActionSelect,argTypes:{id:{control:"text",type:"string"},name:{control:"text",type:"string"},value:{control:"text",type:"string"},line1:{control:"text",type:"string",description:"The title"},line2:{control:"text",type:"string",description:"The subtitle"},className:{control:"text",type:"string"},isSelected:{control:"boolean",type:"boolean"},onChange:{action:"onChange"}}};const Default={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],args:{id:"componentId1",name:"name",line1:"total",line2:"$ 7.432.450"}},Example={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:({id:id,...args})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(DQuickActionSelect,{id:`${id}2`,...args}),(0,jsx_runtime.jsx)(DQuickActionSelect,{id:`${id}3`,...args}),(0,jsx_runtime.jsx)(DQuickActionSelect,{id:`${id}4`,...args})]}),args:{id:"componentId",name:"name",line1:"total",line2:"$ 7.432.450"}},Selected={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],args:{id:"componentId5",name:"name",line1:"total",line2:"$ 7.432.450",isSelected:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  args: {\n    id: 'componentId1',\n    name: 'name',\n    line1: 'total',\n    line2: '$ 7.432.450'\n  }\n}",...Default.parameters?.docs?.source}}},Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: ({\n    id,\n    ...args\n  }: ComponentProps<typeof DQuickActionSelect>) => <>\n      <DQuickActionSelect id={`${id}2`} {...args} />\n      <DQuickActionSelect id={`${id}3`} {...args} />\n      <DQuickActionSelect id={`${id}4`} {...args} />\n    </>,\n  args: {\n    id: 'componentId',\n    name: 'name',\n    line1: 'total',\n    line2: '$ 7.432.450'\n  }\n}",...Example.parameters?.docs?.source}}},Selected.parameters={...Selected.parameters,docs:{...Selected.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  args: {\n    id: 'componentId5',\n    name: 'name',\n    line1: 'total',\n    line2: '$ 7.432.450',\n    isSelected: true\n  }\n}",...Selected.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Example","Selected"]},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);