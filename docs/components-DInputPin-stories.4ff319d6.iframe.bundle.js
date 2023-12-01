/*! For license information please see components-DInputPin-stories.4ff319d6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[8885],{"./src/components/DIcon/DIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return DIcon}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_config__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/config.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DIcon({icon:icon,theme:theme,style:style,className:className,size:size="1.5rem",loading:loading=!1,loadingDuration:loadingDuration=1.8,hasCircle:hasCircle=!1,circleSize:circleSize=`calc(var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-size) * 1)`,color:color,backgroundColor:backgroundColor,familyClass:familyClass="bi",familyPrefix:familyPrefix="bi-"}){const colorStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>color?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}component-color`]:color}:theme?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-color`]:`var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}${theme})`}:{}),[color,theme]),backgroundStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>backgroundColor?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-bg-color`]:backgroundColor}:hasCircle?theme?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-bg-color`]:`rgba(var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}${theme}-rgb), 0.1)`}:{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-bg-color`]:`rgba(var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}body-color-rgb), 0.1)`}:{}),[backgroundColor,hasCircle,theme]),circleSizeStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>hasCircle?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-padding`]:circleSize}:{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-padding`]:"0"}),[circleSize,hasCircle]),generateStyleVariables=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-size`]:size,[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-loading-duration`]:`${loadingDuration}s`,...colorStyle,...backgroundStyle,...circleSizeStyle,...style})),[size,loadingDuration,colorStyle,backgroundStyle,circleSizeStyle,style]),generateClasses=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({"d-icon":!0,[familyClass]:!0,[`${familyPrefix}${icon}`]:!0,"d-icon-loading":loading,...className&&{[className]:!0}})),[familyClass,familyPrefix,icon,className,loading]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(generateClasses),style:generateStyleVariables})}DIcon.displayName="DIcon";try{DIcon.displayName="DIcon",DIcon.__docgenInfo={description:"",displayName:"DIcon",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"1.5rem"},description:"",name:"size",required:!1,type:{name:"string | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingDuration:{defaultValue:{value:"1.8"},description:"",name:"loadingDuration",required:!1,type:{name:"number | undefined"}},hasCircle:{defaultValue:{value:"false"},description:"",name:"hasCircle",required:!1,type:{name:"boolean | undefined"}},circleSize:{defaultValue:{value:"`calc(var(--${PREFIX_BS}icon-component-size) * 1)`"},description:"",name:"circleSize",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},familyClass:{defaultValue:{value:"bi"},description:"",name:"familyClass",required:!1,type:{name:"string | undefined"}},familyPrefix:{defaultValue:{value:"bi-"},description:"",name:"familyPrefix",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DIcon/DIcon.tsx#DIcon"]={docgenInfo:DIcon.__docgenInfo,name:"DIcon",path:"src/components/DIcon/DIcon.tsx#DIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DIcon/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _DIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DIcon/DIcon.tsx");__webpack_exports__.Z=_DIcon__WEBPACK_IMPORTED_MODULE_0__.Z},"./src/components/config.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_o:function(){return ICON_FAMILY_CLASS},d2:function(){return ALERT_TYPE_ICON},k2:function(){return PREFIX_BS},yM:function(){return ICON_FAMILY_PREFIX}});const PREFIX_BS="bs-",ICON_FAMILY_CLASS="bi",ICON_FAMILY_PREFIX="bi-",ALERT_TYPE_ICON={warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",dark:"info-circle",light:"info-circle"}},"./stories/components/DInputPin.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Confirm:function(){return Confirm},Default:function(){return Default},Disabled:function(){return Disabled},Error:function(){return Error},WithoutLabel:function(){return WithoutLabel},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DInputPin_stories}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),DIcon=__webpack_require__("./src/components/DIcon/index.ts"),config=__webpack_require__("./src/components/config.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DInputPin({id:id,label:label="",labelIcon:labelIcon,labelIconFamilyClass:labelIconFamilyClass,labelIconFamilyPrefix:labelIconFamilyPrefix,placeholder:placeholder,type:type="text",disabled:disabled=!1,loading:loading=!1,secret:secret=!1,iconFamilyClass:iconFamilyClass,iconFamilyPrefix:iconFamilyPrefix,characters:characters=4,innerInputMode:innerInputMode="text",hint:hint,invalid:invalid=!1,valid:valid=!1,className:className,style:style,onChange:onChange}){const[pattern,setPattern]=(0,react.useState)("");(0,react.useEffect)((()=>{setPattern("number"===type?"[0-9]+":"^[a-zA-Z0-9]+$")}),[type]);const nextInput=(0,react.useCallback)((event=>{const input=event.target;new RegExp(pattern).test(input.value)||(input.value=""),""!==input.value&&(input.nextSibling?input.nextSibling?.focus():input.blur())}),[pattern]),prevInput=(0,react.useCallback)((event=>{if("Backspace"===event.key){const{value:value}=event.currentTarget;event.currentTarget.previousSibling&&""===value?event.currentTarget.previousSibling?.focus():(event.currentTarget.blur(),event.currentTarget.focus())}}),[]),focusInput=(0,react.useCallback)((event=>{event.currentTarget.value=""}),[]),wheelInput=(0,react.useCallback)((event=>{event.currentTarget.blur()}),[]),formChange=(0,react.useCallback)((event=>{const formData=new FormData(event.currentTarget),values=Array.from(formData.values()).join("");onChange?.(values)}),[onChange]),preventDefaultEvent=(0,react.useCallback)((event=>{event.preventDefault()}),[]);return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("d-input-pin",className),style:style,children:[label&&(0,jsx_runtime.jsxs)("label",{htmlFor:"pinIndex0",children:[label,labelIcon&&(0,jsx_runtime.jsx)(DIcon.Z,{className:"d-input-pin-icon",icon:labelIcon,size:`var(--${config.k2}input-label-font-size)`,familyClass:labelIconFamilyClass,familyPrefix:labelIconFamilyPrefix})]}),(0,jsx_runtime.jsxs)("form",{id:id,className:"d-input-pin-controls",onInput:formChange,onSubmit:preventDefaultEvent,children:[Array.from({length:characters}).map(((_,index)=>(0,jsx_runtime.jsx)("input",{className:classnames_default()({"form-control":!0,"is-invalid":invalid,"is-valid":valid}),type:secret?"password":type,"aria-describedby":`${id}State`,inputMode:innerInputMode,id:`pinIndex${index}`,name:`pin-${index}`,maxLength:1,onChange:nextInput,onKeyDown:prevInput,onFocus:focusInput,onWheel:wheelInput,onClick:preventDefaultEvent,autoComplete:"off",placeholder:placeholder,disabled:disabled||loading,required:!0,..."number"===type&&{min:0,max:9}},index))),(invalid||valid)&&!loading&&(0,jsx_runtime.jsx)("span",{className:"input-group-text",id:`${id}State`,children:(0,jsx_runtime.jsx)(DIcon.Z,{className:"d-input-pin-validation-icon",icon:invalid?"exclamation-circle":"check",familyClass:iconFamilyClass,familyPrefix:iconFamilyPrefix})}),loading&&(0,jsx_runtime.jsx)("div",{className:"input-group-text d-input-pin-icon",children:(0,jsx_runtime.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true",children:(0,jsx_runtime.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})]}),hint&&(0,jsx_runtime.jsx)("div",{className:"form-text",id:`${id}Hint`,children:hint})]})}DInputPin.displayName="DInputPin";try{DInputPin.displayName="DInputPin",DInputPin.__docgenInfo={description:"",displayName:"DInputPin",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},labelIcon:{defaultValue:null,description:"",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"text"'},{value:'"tel"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},secret:{defaultValue:{value:"false"},description:"",name:"secret",required:!1,type:{name:"boolean | undefined"}},characters:{defaultValue:{value:"4"},description:"",name:"characters",required:!1,type:{name:"number | undefined"}},innerInputMode:{defaultValue:{value:"text"},description:"",name:"innerInputMode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"text"'},{value:'"tel"'},{value:'"numeric"'}]}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:{value:"false"},description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DInputPin/DInputPin.tsx#DInputPin"]={docgenInfo:DInputPin.__docgenInfo,name:"DInputPin",path:"src/components/DInputPin/DInputPin.tsx#DInputPin"})}catch(__react_docgen_typescript_loader_error){}var DInputPin_stories={title:"Design System/Components/Input Pin",component:DInputPin,argTypes:{id:{control:"text",type:"string",description:"The id of the input"},label:{control:"text",type:"string"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...__webpack_require__("./stories/config/constants.ts").UZ]},placeholder:{control:"text",type:"string"},type:{control:"select",options:["number","text","tel"],type:"string",description:"Type of the inputs"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},secret:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}},description:"Hide the characters"},characters:{control:"number",type:"number",description:"Number of characters of the pin"},innerInputMode:{control:"select",options:["number","text","tel"],type:"string",description:"Keyboard style"},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},onChange:{action:"onChange"}}};const Default={args:{id:"componentId1",label:"Label",characters:4,type:"text",hint:"Assistive text",disabled:!1,loading:!1,secret:!1,invalid:!1,valid:!1}},WithoutLabel={args:{id:"componentId2",characters:4,type:"text",disabled:!1,loading:!1,secret:!1,invalid:!1,valid:!1}},Error={args:{id:"componentId3",label:"Label",characters:4,type:"text",hint:"Assistive text",disabled:!1,loading:!1,secret:!1,invalid:!0,valid:!1}},Confirm={args:{id:"componentId4",label:"Label",characters:4,type:"text",hint:"Assistive text",disabled:!1,loading:!1,secret:!1,invalid:!1,valid:!0}},Disabled={args:{id:"componentId5",label:"Label",characters:4,type:"text",hint:"Assistive text",disabled:!0,loading:!1,secret:!1,invalid:!1,valid:!1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId1',\n    label: 'Label',\n    characters: 4,\n    type: 'text',\n    hint: 'Assistive text',\n    disabled: false,\n    loading: false,\n    secret: false,\n    invalid: false,\n    valid: false\n  }\n}",...Default.parameters?.docs?.source}}},WithoutLabel.parameters={...WithoutLabel.parameters,docs:{...WithoutLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId2',\n    characters: 4,\n    type: 'text',\n    disabled: false,\n    loading: false,\n    secret: false,\n    invalid: false,\n    valid: false\n  }\n}",...WithoutLabel.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId3',\n    label: 'Label',\n    characters: 4,\n    type: 'text',\n    hint: 'Assistive text',\n    disabled: false,\n    loading: false,\n    secret: false,\n    invalid: true,\n    valid: false\n  }\n}",...Error.parameters?.docs?.source}}},Confirm.parameters={...Confirm.parameters,docs:{...Confirm.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId4',\n    label: 'Label',\n    characters: 4,\n    type: 'text',\n    hint: 'Assistive text',\n    disabled: false,\n    loading: false,\n    secret: false,\n    invalid: false,\n    valid: true\n  }\n}",...Confirm.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId5',\n    label: 'Label',\n    characters: 4,\n    type: 'text',\n    hint: 'Assistive text',\n    disabled: true,\n    loading: false,\n    secret: false,\n    invalid: false,\n    valid: false\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithoutLabel","Error","Confirm","Disabled"]},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);