/*! For license information please see stories-components-DQuickActionCheck-stories.0a76af04.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[4680],{"./src/components/DInputCheck.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return DInputCheck}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DInputCheck({type:type,name:name,label:label,isChecked:isChecked=!1,id:id,isDisabled:isDisabled=!1,isIndeterminate:isIndeterminate,value:value,onChange:onChange}){const innerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{onChange?.(event)}),[onChange]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{innerRef.current&&(innerRef.current.indeterminate=Boolean(isIndeterminate))}),[isIndeterminate]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{innerRef.current&&(innerRef.current.checked=isChecked)}),[isChecked]),label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"form-check",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{ref:innerRef,onChange:handleChange,className:"form-check-input",id:id,disabled:isDisabled,type:type,name:name,value:value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{className:"form-check-label",htmlFor:id,children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{ref:innerRef,onChange:handleChange,className:"form-check-input",id:id,disabled:isDisabled,type:type,name:name,value:value})}DInputCheck.displayName="DInputCheck";try{DInputCheck.displayName="DInputCheck",DInputCheck.__docgenInfo={description:"",displayName:"DInputCheck",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},isChecked:{defaultValue:{value:"false"},description:"",name:"isChecked",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isIndeterminate:{defaultValue:null,description:"",name:"isIndeterminate",required:!1,type:{name:"boolean | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DInputCheck.tsx#DInputCheck"]={docgenInfo:DInputCheck.__docgenInfo,name:"DInputCheck",path:"src/components/DInputCheck.tsx#DInputCheck"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/components/DQuickActionCheck.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:function(){return Checked},Default:function(){return Default},Example:function(){return Example},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DQuickActionCheck_stories}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),DInputCheck=__webpack_require__("./src/components/DInputCheck.tsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DQuickActionCheck({id:id,name:name,value:value,line1:line1,line2:line2,line3:line3,isChecked:isChecked,onChange:onChange}){const changeHandler=(0,react.useCallback)((event=>{event.stopPropagation(),onChange?.(event)}),[onChange]);return(0,jsx_runtime.jsxs)("label",{className:"d-quick-action-check",htmlFor:id,children:[(0,jsx_runtime.jsx)(DInputCheck.Z,{id:id,type:"radio",name:name,value:value,isChecked:isChecked,onChange:changeHandler}),(0,jsx_runtime.jsxs)("div",{className:"d-quick-action-check-detail",children:[(0,jsx_runtime.jsx)("span",{className:"d-quick-action-check-line1",children:line1}),(0,jsx_runtime.jsx)("span",{className:"d-quick-action-check-line2",children:line2})]}),(0,jsx_runtime.jsx)("span",{className:"d-quick-action-check-line3",children:line3})]})}DQuickActionCheck.displayName="DQuickActionCheck";try{DQuickActionCheck.displayName="DQuickActionCheck",DQuickActionCheck.__docgenInfo={description:"",displayName:"DQuickActionCheck",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},line1:{defaultValue:null,description:"",name:"line1",required:!0,type:{name:"string"}},line2:{defaultValue:null,description:"",name:"line2",required:!0,type:{name:"string"}},line3:{defaultValue:null,description:"",name:"line3",required:!0,type:{name:"string"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DQuickActionCheck.tsx#DQuickActionCheck"]={docgenInfo:DQuickActionCheck.__docgenInfo,name:"DQuickActionCheck",path:"src/components/DQuickActionCheck.tsx#DQuickActionCheck"})}catch(__react_docgen_typescript_loader_error){}var DQuickActionCheck_stories={title:"Design System/Components/Quick Action Check",component:DQuickActionCheck,argTypes:{id:{control:"text",type:"string"},name:{control:"text",type:"string"},value:{control:"text",type:"string"},line1:{control:"text",type:"string",description:"The title"},line2:{control:"text",type:"string",description:"The subtitle"},line3:{control:"text",type:"string",description:"The text value"},isChecked:{control:"boolean",type:"boolean"},onChange:{action:"onChange"}}};const Default={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],args:{id:"componentId1",name:"name",line1:"total",line2:"$ 7.432.450"}},Example={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:({id:id,...args})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(DQuickActionCheck,{id:`${id}2`,...args}),(0,jsx_runtime.jsx)(DQuickActionCheck,{id:`${id}3`,...args}),(0,jsx_runtime.jsx)(DQuickActionCheck,{id:`${id}4`,...args})]}),args:{id:"componentId",name:"name",line1:"total",line2:"$ 7.432.450"}},Checked={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],args:{id:"componentId5",name:"name",line1:"total",line2:"$ 7.432.450",isChecked:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  args: {\n    id: 'componentId1',\n    name: 'name',\n    line1: 'total',\n    line2: '$ 7.432.450'\n  }\n}",...Default.parameters?.docs?.source}}},Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: ({\n    id,\n    ...args\n  }: ComponentProps<typeof DQuickActionCheck>) => <>\n      <DQuickActionCheck id={`${id}2`} {...args} />\n      <DQuickActionCheck id={`${id}3`} {...args} />\n      <DQuickActionCheck id={`${id}4`} {...args} />\n    </>,\n  args: {\n    id: 'componentId',\n    name: 'name',\n    line1: 'total',\n    line2: '$ 7.432.450'\n  }\n}",...Example.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  args: {\n    id: 'componentId5',\n    name: 'name',\n    line1: 'total',\n    line2: '$ 7.432.450',\n    isChecked: true\n  }\n}",...Checked.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Example","Checked"]},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);