/*! For license information please see components-DInputSwitch-stories.3e9bfe11.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[3511],{"./src/components/DInputSwitch/DInputSwitch.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return DInputSwitch}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DInputSwitch({label:label,ariaLabel:ariaLabel,id:id,name:name,checked:checked,disabled:disabled,readonly:readonly,className:className,style:style,onChange:onChange}){const[internalIsChecked,setInternalIsChecked]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(checked);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setInternalIsChecked(checked)}),[checked]);const changeHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{const value=event.currentTarget.checked;setInternalIsChecked(value),onChange?.(value)}),[onChange]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"form-check form-switch",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{id:id,name:name,onChange:readonly?()=>!1:changeHandler,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-check-input",className),style:style,type:"checkbox",role:"switch",checked:internalIsChecked,disabled:disabled,"aria-label":ariaLabel}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{className:"form-check-label",htmlFor:id,children:label})]})}DInputSwitch.displayName="DInputSwitch";try{DInputSwitch.displayName="DInputSwitch",DInputSwitch.__docgenInfo={description:"",displayName:"DInputSwitch",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((isChecked: boolean) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DInputSwitch/DInputSwitch.tsx#DInputSwitch"]={docgenInfo:DInputSwitch.__docgenInfo,name:"DInputSwitch",path:"src/components/DInputSwitch/DInputSwitch.tsx#DInputSwitch"})}catch(__react_docgen_typescript_loader_error){}},"./stories/components/DInputSwitch.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:function(){return Checked},CheckedDisabled:function(){return CheckedDisabled},Default:function(){return Default},Disabled:function(){return Disabled},Readonly:function(){return Readonly},WithoutLabel:function(){return WithoutLabel},__namedExportsOrder:function(){return __namedExportsOrder}});const config={title:"Design System/Components/Input Switch",component:__webpack_require__("./src/components/DInputSwitch/DInputSwitch.tsx").Z,argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},label:{control:"text",type:"string"},checked:{control:"boolean",type:"boolean"},readonly:{control:"boolean",type:"boolean"},disabled:{control:"boolean",type:"boolean"},onChange:{action:"onChange"}}};__webpack_exports__.default=config;const WithoutLabel={args:{id:"componentId1",checked:!1,disabled:!1,ariaLabel:"Label"}},Default={args:{id:"componentId2",label:"Label",checked:!1,disabled:!1}},Checked={args:{id:"componentId3",label:"Label",checked:!0,disabled:!1}},Readonly={args:{id:"componentId4",label:"Label",checked:!1,readonly:!0}},Disabled={args:{id:"componentId5",label:"Label",checked:!1,disabled:!0}},CheckedDisabled={args:{id:"componentId6",label:"Label",checked:!0,disabled:!0}};WithoutLabel.parameters={...WithoutLabel.parameters,docs:{...WithoutLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId1',\n    checked: false,\n    disabled: false,\n    ariaLabel: 'Label'\n  }\n}",...WithoutLabel.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId2',\n    label: 'Label',\n    checked: false,\n    disabled: false\n  }\n}",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId3',\n    label: 'Label',\n    checked: true,\n    disabled: false\n  }\n}",...Checked.parameters?.docs?.source}}},Readonly.parameters={...Readonly.parameters,docs:{...Readonly.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId4',\n    label: 'Label',\n    checked: false,\n    readonly: true\n  }\n}",...Readonly.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId5',\n    label: 'Label',\n    checked: false,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},CheckedDisabled.parameters={...CheckedDisabled.parameters,docs:{...CheckedDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId6',\n    label: 'Label',\n    checked: true,\n    disabled: true\n  }\n}",...CheckedDisabled.parameters?.docs?.source}}};const __namedExportsOrder=["WithoutLabel","Default","Checked","Readonly","Disabled","CheckedDisabled"]},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);