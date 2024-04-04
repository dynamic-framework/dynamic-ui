/*! For license information please see components-DContext-stories.bfb31263.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[7809],{"./src/contexts/DContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Fg:function(){return useDContext},oW:function(){return DContextProvider}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_DPortalContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/contexts/DPortalContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const defaultState={language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."},icon:{familyClass:"bi",familyPrefix:"bi-",materialStyle:!1},iconMap:{x:"x",xLg:"x-lg",chevronUp:"chevron-up",chevronDown:"chevron-down",chevronLeft:"chevron-left",chevronRight:"chevron-right",upload:"cloud-upload",calendar:"calendar",check:"check",alert:{warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",dark:"info-circle",light:"info-circle",primary:"info-circle",secondary:"info-circle"},input:{invalid:"exclamation-circle",valid:"check",search:"search",show:"eye",hide:"eye-slash",increase:"plus-square",decrease:"dash-square"}},setContext:()=>{},portalName:"d-portal"},DContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultState);function DContextProvider({language:language=defaultState.language,currency:currency=defaultState.currency,icon:icon=defaultState.icon,iconMap:iconMap=defaultState.iconMap,portalName:portalName=defaultState.portalName,availablePortals:availablePortals,children:children}){const[internalContext,setInternalContext]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({language:language,currency:currency,icon:icon,iconMap:iconMap}),setContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue=>setInternalContext((prevInternalContext=>({...prevInternalContext,...newValue})))),[]),value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...internalContext,setContext:setContext})),[internalContext,setContext]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DContext.Provider,{value:value,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DPortalContext__WEBPACK_IMPORTED_MODULE_2__.RC,{portalName:portalName,availablePortals:availablePortals,children:children})})}function useDContext(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DContext);if(void 0===context)throw new Error("useDContext was used outside of DContextProvider");return context}DContextProvider.displayName="DContextProvider";try{DContextProvider.displayName="DContextProvider",DContextProvider.__docgenInfo={description:"",displayName:"DContextProvider",props:{language:{defaultValue:{value:"en"},description:"",name:"language",required:!1,type:{name:"string | undefined"}},currency:{defaultValue:{value:"{\n    symbol: '$',\n    precision: 2,\n    separator: ',',\n    decimal: '.',\n  }"},description:"",name:"currency",required:!1,type:{name:"CurrencyProps | undefined"}},icon:{defaultValue:{value:"{\n    familyClass: 'bi',\n    familyPrefix: 'bi-',\n    materialStyle: false,\n  }"},description:"",name:"icon",required:!1,type:{name:"IconProps | undefined"}},iconMap:{defaultValue:{value:"{\n    x: 'x',\n    xLg: 'x-lg',\n    chevronUp: 'chevron-up',\n    chevronDown: 'chevron-down',\n    chevronLeft: 'chevron-left',\n    chevronRight: 'chevron-right',\n    upload: 'cloud-upload',\n    calendar: 'calendar',\n    check: 'check',\n    alert: {\n      warning: 'exclamation-circle',\n      danger: 'exclamation-triangle',\n      success: 'check-circle',\n      info: 'info-circle',\n      dark: 'info-circle',\n      light: 'info-circle',\n      primary: 'info-circle',\n      secondary: 'info-circle',\n    },\n    input: {\n      invalid: 'exclamation-circle',\n      valid: 'check',\n      search: 'search',\n      show: 'eye',\n      hide: 'eye-slash',\n      increase: 'plus-square',\n      decrease: 'dash-square',\n    },\n  }"},description:"",name:"iconMap",required:!1,type:{name:"IconMapProps | undefined"}},portalName:{defaultValue:{value:"d-portal"},description:"",name:"portalName",required:!1,type:{name:"string | undefined"}},availablePortals:{defaultValue:null,description:"",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/DContext.tsx#DContextProvider"]={docgenInfo:DContextProvider.__docgenInfo,name:"DContextProvider",path:"src/contexts/DContext.tsx#DContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/contexts/DPortalContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{RC:function(){return DPortalContextProvider},S0:function(){return useDPortalContext}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const DPortalContext=(0,react.createContext)(void 0);function DPortalContextProvider({portalName:portalName,children:children,availablePortals:availablePortals}){const{created:created}=function usePortal(portalName){const[hasPortal,setHasPortal]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const previousPortal=document.querySelector(`#${portalName}`);previousPortal&&previousPortal.remove();const portal=document.createElement("div");portal.id=portalName,portal.className="d-portal",document.body.appendChild(portal),setHasPortal(!0)}),[portalName]),{created:hasPortal}}(portalName),[stack,{push:push,pop:pop,isEmpty:isEmpty}]=function useStackState(initialList){const[list,setList]=(0,react.useState)(initialList),{length:length}=list,push=(0,react.useCallback)((item=>{setList((prevList=>[...prevList,item]))}),[]),pop=(0,react.useCallback)((()=>{setList((prevList=>prevList.slice(0,prevList.length-1)))}),[]),peek=(0,react.useCallback)((()=>list.at(-1)),[list]),isEmpty=(0,react.useCallback)((()=>0===list.length),[list]);return[list,{clear:()=>setList([]),isEmpty:isEmpty,length:length,peek:peek,pop:pop,push:push}]}([]);!function useDisableBodyScrollEffect(disable){(0,react.useEffect)((()=>{disable?(document.body.style.overflow="hidden",document.body.style.paddingRight="0"):(document.body.style.overflow="unset",document.body.style.paddingRight="unset")}),[disable])}(Boolean(stack.length));const openPortal=(0,react.useCallback)(((name,payload)=>{if(!availablePortals)throw new Error(`there is no component for portal ${name.toString()}`);const Component=availablePortals[name];if(!Component)throw new Error(`there is no component for portal ${name.toString()}`);push({name:name,Component:Component,payload:payload})}),[availablePortals,push]),closePortal=(0,react.useCallback)((()=>{isEmpty()||pop()}),[isEmpty,pop]),value=(0,react.useMemo)((()=>({stack:stack,openPortal:openPortal,closePortal:closePortal})),[stack,openPortal,closePortal]);return(0,jsx_runtime.jsxs)(DPortalContext.Provider,{value:value,children:[children,created&&(0,react_dom.createPortal)((0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:stack.map((({Component:Component,name:name,payload:payload})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"backdrop fade show"}),(0,jsx_runtime.jsx)(Component,{name:name,payload:payload})]})))}),document.getElementById(portalName))]})}function useDPortalContext(){const context=(0,react.useContext)(DPortalContext);if(void 0===context)throw new Error("usePortalContext was used outside of PortalContextProvider");return context}DPortalContextProvider.displayName="DPortalContextProvider";try{DPortalContextProvider.displayName="DPortalContextProvider",DPortalContextProvider.__docgenInfo={description:"",displayName:"DPortalContextProvider",props:{portalName:{defaultValue:null,description:"",name:"portalName",required:!0,type:{name:"string"}},availablePortals:{defaultValue:null,description:"",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/DPortalContext.tsx#DPortalContextProvider"]={docgenInfo:DPortalContextProvider.__docgenInfo,name:"DPortalContextProvider",path:"src/contexts/DPortalContext.tsx#DPortalContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./stories/components/DContext.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CurrencySettings:function(){return CurrencySettings},Default:function(){return Default},IconSettings:function(){return IconSettings},LanguageSettings:function(){return LanguageSettings},__namedExportsOrder:function(){return __namedExportsOrder}});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/contexts/DContext.tsx"),_config_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/config/constants.ts");const config={title:"Design System/Components/Context Provider",component:_src__WEBPACK_IMPORTED_MODULE_0__.oW,tags:["autodocs"],parameters:{docs:{description:{component:"Context Provider to share settings between components"}}}};__webpack_exports__.default=config;const Default={},LanguageSettings={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{language:"en"}},CurrencySettings={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{currency:{symbol:"$",precision:2,separator:",",decimal:"."}}},IconSettings={parameters:{docs:{canvas:{sourceState:"shown"}}},args:_config_constants__WEBPACK_IMPORTED_MODULE_1__.Hr};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source},description:{story:"Without arguments, it will take the default settings for:\n+ English language\n+ Boostrap icons\n+ Currencies with $1,000.00 format\n+ Default portal DOM id",...Default.parameters?.docs?.description}}},LanguageSettings.parameters={...LanguageSettings.parameters,docs:{...LanguageSettings.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  },\n  args: {\n    language: 'en'\n  }\n}",...LanguageSettings.parameters?.docs?.source},description:{story:"To share a different language configuration we only need to change the key language\n\n> This key only takes a string with the language in ISO 639 Set 1 (ISO 639-1)",...LanguageSettings.parameters?.docs?.description}}},CurrencySettings.parameters={...CurrencySettings.parameters,docs:{...CurrencySettings.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  },\n  args: {\n    currency: {\n      symbol: '$',\n      precision: 2,\n      separator: ',',\n      decimal: '.'\n    }\n  }\n}",...CurrencySettings.parameters?.docs?.source},description:{story:"To share a different currency format configuration we need to change the key currency\n\n> The configuration for currency format is given by the library [currency.js](https://currency.js.org/),\nparticularly we use the key precision, separator, decimal and not in all cases symbol.",...CurrencySettings.parameters?.docs?.description}}},IconSettings.parameters={...IconSettings.parameters,docs:{...IconSettings.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  },\n  args: CONTEXT_PROVIDER_CONFIG_MATERIAL\n}",...IconSettings.parameters?.docs?.source},description:{story:"To share a different icon configuration we need to change the key icon\n\nThis takes the settings needed to use bootstrap icons, which would\nbe `familyClass=bi`, `familyPrefix=bi-` and `materialStyle=false`\n\nSimilar settings can be used for any icon font.\n\nIn the particular case of material symbols, the materialStyle property was added\nto place the name of the icon in the children of `<i />` and not as a class.\nThis setting can be used with any icon font that uses a similar style.",...IconSettings.parameters?.docs?.description}}};const __namedExportsOrder=["Default","LanguageSettings","CurrencySettings","IconSettings"];try{Default.displayName="Default",Default.__docgenInfo={description:"Without arguments, it will take the default settings for:\n+ English language\n+ Boostrap icons\n+ Currencies with $1,000.00 format\n+ Default portal DOM id",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/DContext.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"stories/components/DContext.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{LanguageSettings.displayName="LanguageSettings",LanguageSettings.__docgenInfo={description:"To share a different language configuration we only need to change the key language\n\n> This key only takes a string with the language in ISO 639 Set 1 (ISO 639-1)",displayName:"LanguageSettings",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/DContext.stories.tsx#LanguageSettings"]={docgenInfo:LanguageSettings.__docgenInfo,name:"LanguageSettings",path:"stories/components/DContext.stories.tsx#LanguageSettings"})}catch(__react_docgen_typescript_loader_error){}try{CurrencySettings.displayName="CurrencySettings",CurrencySettings.__docgenInfo={description:"To share a different currency format configuration we need to change the key currency\n\n> The configuration for currency format is given by the library [currency.js](https://currency.js.org/),\nparticularly we use the key precision, separator, decimal and not in all cases symbol.",displayName:"CurrencySettings",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/DContext.stories.tsx#CurrencySettings"]={docgenInfo:CurrencySettings.__docgenInfo,name:"CurrencySettings",path:"stories/components/DContext.stories.tsx#CurrencySettings"})}catch(__react_docgen_typescript_loader_error){}try{IconSettings.displayName="IconSettings",IconSettings.__docgenInfo={description:"To share a different icon configuration we need to change the key icon\n\nThis takes the settings needed to use bootstrap icons, which would\nbe `familyClass=bi`, `familyPrefix=bi-` and `materialStyle=false`\n\nSimilar settings can be used for any icon font.\n\nIn the particular case of material symbols, the materialStyle property was added\nto place the name of the icon in the children of `<i />` and not as a class.\nThis setting can be used with any icon font that uses a similar style.",displayName:"IconSettings",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/DContext.stories.tsx#IconSettings"]={docgenInfo:IconSettings.__docgenInfo,name:"IconSettings",path:"stories/components/DContext.stories.tsx#IconSettings"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);