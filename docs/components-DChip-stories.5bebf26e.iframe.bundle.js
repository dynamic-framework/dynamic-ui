/*! For license information please see components-DChip-stories.5bebf26e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[513],{"./src/components/DIcon/DIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return DIcon}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_config__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/config.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DIcon({icon:icon,theme:theme,style:style,className:className,size:size="1.5rem",loading:loading=!1,loadingDuration:loadingDuration=1.8,hasCircle:hasCircle=!1,circleSize:circleSize=`calc(var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-size) * 1)`,color:color,backgroundColor:backgroundColor,familyClass:familyClass="bi",familyPrefix:familyPrefix="bi-"}){const colorStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>color?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}component-color`]:color}:theme?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-color`]:`var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}${theme})`}:{}),[color,theme]),backgroundStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>backgroundColor?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-bg-color`]:backgroundColor}:hasCircle?theme?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-bg-color`]:`rgba(var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}${theme}-rgb), 0.1)`}:{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-bg-color`]:`rgba(var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}body-color-rgb), 0.1)`}:{}),[backgroundColor,hasCircle,theme]),circleSizeStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>hasCircle?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-padding`]:circleSize}:{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-padding`]:"0"}),[circleSize,hasCircle]),generateStyleVariables=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-size`]:size,[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-loading-duration`]:`${loadingDuration}s`,...colorStyle,...backgroundStyle,...circleSizeStyle,...style})),[size,loadingDuration,colorStyle,backgroundStyle,circleSizeStyle,style]),generateClasses=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({"d-icon":!0,[familyClass]:!0,[`${familyPrefix}${icon}`]:!0,"d-icon-loading":loading,...className&&{[className]:!0}})),[familyClass,familyPrefix,icon,className,loading]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(generateClasses),style:generateStyleVariables})}DIcon.displayName="DIcon";try{DIcon.displayName="DIcon",DIcon.__docgenInfo={description:"",displayName:"DIcon",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"1.5rem"},description:"",name:"size",required:!1,type:{name:"string | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingDuration:{defaultValue:{value:"1.8"},description:"",name:"loadingDuration",required:!1,type:{name:"number | undefined"}},hasCircle:{defaultValue:{value:"false"},description:"",name:"hasCircle",required:!1,type:{name:"boolean | undefined"}},circleSize:{defaultValue:{value:"`calc(var(--${PREFIX_BS}icon-component-size) * 1)`"},description:"",name:"circleSize",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},familyClass:{defaultValue:{value:"bi"},description:"",name:"familyClass",required:!1,type:{name:"string | undefined"}},familyPrefix:{defaultValue:{value:"bi-"},description:"",name:"familyPrefix",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DIcon/DIcon.tsx#DIcon"]={docgenInfo:DIcon.__docgenInfo,name:"DIcon",path:"src/components/DIcon/DIcon.tsx#DIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DIcon/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _DIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DIcon/DIcon.tsx");__webpack_exports__.Z=_DIcon__WEBPACK_IMPORTED_MODULE_0__.Z},"./src/components/config.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_o:function(){return ICON_FAMILY_CLASS},d2:function(){return ALERT_TYPE_ICON},k2:function(){return PREFIX_BS},yM:function(){return ICON_FAMILY_PREFIX}});const PREFIX_BS="bs-",ICON_FAMILY_CLASS="bi",ICON_FAMILY_PREFIX="bi-",ALERT_TYPE_ICON={warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",dark:"info-circle",light:"info-circle"}},"./stories/components/DChip.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Close:function(){return Close},Icon:function(){return Icon},Primary:function(){return Primary},Secondary:function(){return Secondary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DChip_stories}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),DIcon=__webpack_require__("./src/components/DIcon/index.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DChip({theme:theme="primary",text:text,icon:icon,iconFamilyClass:iconFamilyClass,iconFamilyPrefix:iconFamilyPrefix,showClose:showClose=!1,closeAriaLabel:closeAriaLabel="close",className:className,style:style,onClose:onClose}){const generateClasses=(0,react.useMemo)((()=>({"d-chip":!0,[`d-chip-${theme}`]:!!theme})),[theme]);return(0,jsx_runtime.jsxs)("span",{className:classnames_default()(generateClasses,className),style:style,children:[icon&&(0,jsx_runtime.jsx)("div",{className:"d-chip-icon-container",children:(0,jsx_runtime.jsx)(DIcon.Z,{icon:icon,familyClass:iconFamilyClass,familyPrefix:iconFamilyPrefix})}),(0,jsx_runtime.jsx)("span",{children:text}),showClose&&(0,jsx_runtime.jsx)("button",{type:"button",className:"d-chip-icon-container",onClick:onClose,"aria-label":closeAriaLabel,children:(0,jsx_runtime.jsx)(DIcon.Z,{icon:"x-lg"})})]})}DChip.displayName="DChip";try{DChip.displayName="DChip",DChip.__docgenInfo={description:"",displayName:"DChip",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},theme:{defaultValue:{value:"primary"},description:"",name:"theme",required:!1,type:{name:"string | undefined"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | undefined"}},showClose:{defaultValue:{value:"false"},description:"",name:"showClose",required:!1,type:{name:"boolean | undefined"}},closeAriaLabel:{defaultValue:{value:"close"},description:"",name:"closeAriaLabel",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DChip/DChip.tsx#DChip"]={docgenInfo:DChip.__docgenInfo,name:"DChip",path:"src/components/DChip/DChip.tsx#DChip"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./stories/config/constants.ts");var DChip_stories={title:"Design System/Components/Chip",component:DChip,argTypes:{text:{control:"text",type:"string",description:"Text of badge"},theme:{control:"select",type:"string",options:constants.yU,table:{defaultValue:{summary:"primary"}},description:"The theme to use."},icon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...constants.UZ]},showClose:{control:"boolean",table:{defaultValue:{summary:!1}},type:"boolean"},onClose:{action:"onClose"}}};const Primary={args:{theme:"primary",text:"Default"}},Secondary={args:{theme:"secondary",text:"Default"}},Icon={args:{theme:"secondary",text:"Default",icon:"fire"}},Close={args:{theme:"secondary",text:"Default",icon:"fire",showClose:!0}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'primary',\n    text: 'Default'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'secondary',\n    text: 'Default'\n  }\n}",...Secondary.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'secondary',\n    text: 'Default',\n    icon: 'fire'\n  }\n}",...Icon.parameters?.docs?.source}}},Close.parameters={...Close.parameters,docs:{...Close.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'secondary',\n    text: 'Default',\n    icon: 'fire',\n    showClose: true\n  }\n}",...Close.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Icon","Close"]},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);