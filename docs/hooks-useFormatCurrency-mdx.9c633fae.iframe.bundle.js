/*! For license information please see hooks-useFormatCurrency-mdx.9c633fae.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[8623],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/hooks/useFormatCurrency.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return hooks_useFormatCurrency}});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.5.1_@types+react-dom@18.2.14_@types+react@18.2.31_encoding@0.1.13_react-d_l35q4xusgbdqni7di6kmyf4vqa/node_modules/@storybook/blocks/dist/index.mjs"),useFormatCurrency=__webpack_require__("./src/hooks/useFormatCurrency.ts"),DContext=__webpack_require__("./src/contexts/DContext.tsx");function ExampleOfUse(){const{values:values}=(0,useFormatCurrency.Z)(100,234.12,-233);return(0,jsx_runtime.jsx)("div",{className:"p-3",children:values.map((value=>(0,jsx_runtime.jsx)("pre",{children:value},value)))})}function ExampleRoot(){return(0,jsx_runtime.jsx)(DContext.oW,{children:(0,jsx_runtime.jsx)(ExampleOfUse,{})})}function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Design System/Utils/Hooks/useFormatCurrency"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"useformatcurrency",children:"useFormatCurrency"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Currency formatting hook"}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"setup-apptsx",children:["Setup ",(0,jsx_runtime.jsx)(_components.code,{children:"App.tsx"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"It is necessary to use the hook inside a DContextProvider, because the hook takes the formatting configuration from that context"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:"\nimport {\n  DContextProvider,\n} from '@design-system/ui-react';\n\nimport ExampleOfUse from './ExampleOfUse';\n\nexport function App() {\n  return (\n    <DContextProvider>\n      <ExampleOfUse />\n    </DContextProvider>\n  );\n}\n    ",language:"tsx",dark:!0}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"example-of-use-exampleusagetsx",children:["Example of use ",(0,jsx_runtime.jsx)(_components.code,{children:"ExampleUsage.tsx"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Component that uses the hook"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:"\nimport {\n  useFormatCurrency,\n} from '@design-system/ui-react';\n\nexport function ExampleOfUse() {\n  const { values } = useFormatCurrency(100, 234.12, -233);\n  return (\n    <div className=\"p-3\">\n      {values.map((value) => (\n        <pre key={value}>{value}</pre>\n      ))}\n    </div>\n  );\n}\n    ",language:"tsx",dark:!0}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"setup-with-other-settings-apptsx",children:["Setup with other settings ",(0,jsx_runtime.jsx)(_components.code,{children:"App.tsx"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Formatting settings can be changed by changing the values of the currency property of the DContextProvider"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:"\nimport {\n  DContextProvider,\n} from '@design-system/ui-react';\n\nimport ExampleOfUse from './ExampleOfUse';\n\nexport function App() {\n  return (\n    <DContextProvider\n      currency={{\n        symbol: '$',\n        precision: 2,\n        separator: ',',\n        decimal: '.',\n      }}\n    >\n      <ExampleOfUse />\n    </DContextProvider>\n  );\n}\n    ",language:"tsx",dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"example-render",children:"Example Render"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(ExampleRoot,{})})]})}ExampleOfUse.displayName="ExampleOfUse",ExampleRoot.displayName="ExampleRoot";var hooks_useFormatCurrency=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/contexts/DContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Fg:function(){return useDContext},oW:function(){return DContextProvider}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_DPortalContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/contexts/DPortalContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const defaultState={language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."},icon:{familyClass:"bi",familyPrefix:"bi-",materialStyle:!1},iconMap:{x:"x",xLg:"x-lg",chevronUp:"chevron-up",chevronDown:"chevron-down",chevronLeft:"chevron-left",chevronRight:"chevron-right",upload:"cloud-upload",calendar:"calendar",check:"check",alert:{warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",dark:"info-circle",light:"info-circle",primary:"info-circle",secondary:"info-circle"},input:{invalid:"exclamation-circle",valid:"check",search:"search",show:"eye",hide:"eye-slash",increase:"plus-square",decrease:"dash-square"}},setContext:()=>{},portalName:"d-portal"},DContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultState);function DContextProvider({language:language=defaultState.language,currency:currency=defaultState.currency,icon:icon=defaultState.icon,iconMap:iconMap=defaultState.iconMap,portalName:portalName=defaultState.portalName,availablePortals:availablePortals,children:children}){const[internalContext,setInternalContext]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({language:language,currency:currency,icon:icon,iconMap:iconMap}),setContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue=>setInternalContext((prevInternalContext=>({...prevInternalContext,...newValue})))),[]),value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...internalContext,setContext:setContext})),[internalContext,setContext]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DContext.Provider,{value:value,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DPortalContext__WEBPACK_IMPORTED_MODULE_2__.RC,{portalName:portalName,availablePortals:availablePortals,children:children})})}function useDContext(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DContext);if(void 0===context)throw new Error("useDContext was used outside of DContextProvider");return context}DContextProvider.displayName="DContextProvider";try{DContextProvider.displayName="DContextProvider",DContextProvider.__docgenInfo={description:"",displayName:"DContextProvider",props:{language:{defaultValue:{value:"en"},description:"",name:"language",required:!1,type:{name:"string | undefined"}},currency:{defaultValue:{value:"{\n    symbol: '$',\n    precision: 2,\n    separator: ',',\n    decimal: '.',\n  }"},description:"",name:"currency",required:!1,type:{name:"CurrencyProps | undefined"}},icon:{defaultValue:{value:"{\n    familyClass: 'bi',\n    familyPrefix: 'bi-',\n    materialStyle: false,\n  }"},description:"",name:"icon",required:!1,type:{name:"IconProps | undefined"}},iconMap:{defaultValue:{value:"{\n    x: 'x',\n    xLg: 'x-lg',\n    chevronUp: 'chevron-up',\n    chevronDown: 'chevron-down',\n    chevronLeft: 'chevron-left',\n    chevronRight: 'chevron-right',\n    upload: 'cloud-upload',\n    calendar: 'calendar',\n    check: 'check',\n    alert: {\n      warning: 'exclamation-circle',\n      danger: 'exclamation-triangle',\n      success: 'check-circle',\n      info: 'info-circle',\n      dark: 'info-circle',\n      light: 'info-circle',\n      primary: 'info-circle',\n      secondary: 'info-circle',\n    },\n    input: {\n      invalid: 'exclamation-circle',\n      valid: 'check',\n      search: 'search',\n      show: 'eye',\n      hide: 'eye-slash',\n      increase: 'plus-square',\n      decrease: 'dash-square',\n    },\n  }"},description:"",name:"iconMap",required:!1,type:{name:"IconMapProps | undefined"}},portalName:{defaultValue:{value:"d-portal"},description:"",name:"portalName",required:!1,type:{name:"string | undefined"}},availablePortals:{defaultValue:null,description:"",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/DContext.tsx#DContextProvider"]={docgenInfo:DContextProvider.__docgenInfo,name:"DContextProvider",path:"src/contexts/DContext.tsx#DContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/contexts/DPortalContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{RC:function(){return DPortalContextProvider},S0:function(){return useDPortalContext}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const DPortalContext=(0,react.createContext)(void 0);function DPortalContextProvider({portalName:portalName,children:children,availablePortals:availablePortals}){const{created:created}=function usePortal(portalName){const[hasPortal,setHasPortal]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const previousPortal=document.querySelector(`#${portalName}`);previousPortal&&previousPortal.remove();const portal=document.createElement("div");portal.id=portalName,portal.className="d-portal",document.body.appendChild(portal),setHasPortal(!0)}),[portalName]),{created:hasPortal}}(portalName),[stack,{push:push,pop:pop,isEmpty:isEmpty}]=function useStackState(initialList=[]){const[list,setList]=(0,react.useState)(initialList),push=(0,react.useCallback)((item=>setList((prevList=>[...prevList,item]))),[]),pop=(0,react.useCallback)((()=>setList((prevList=>prevList.slice(0,prevList.length-1)))),[]),peek=(0,react.useCallback)((()=>list.at(-1)),[list]),clear=(0,react.useCallback)((()=>setList([])),[]),isEmpty=(0,react.useCallback)((()=>0===list.length),[list.length]),controls=(0,react.useMemo)((()=>({clear:clear,isEmpty:isEmpty,length:list.length,peek:peek,pop:pop,push:push})),[clear,isEmpty,list.length,peek,pop,push]);return[list,controls]}([]);!function useDisableBodyScrollEffect(disable){(0,react.useEffect)((()=>{disable?(document.body.style.overflow="hidden",document.body.style.paddingRight="0"):(document.body.style.overflow="unset",document.body.style.paddingRight="unset")}),[disable])}(Boolean(stack.length));const openPortal=(0,react.useCallback)(((name,payload)=>{if(!availablePortals)throw new Error(`there is no component for portal ${name.toString()}`);const Component=availablePortals[name];if(!Component)throw new Error(`there is no component for portal ${name.toString()}`);push({name:name,Component:Component,payload:payload})}),[availablePortals,push]),closePortal=(0,react.useCallback)((()=>{isEmpty()||pop()}),[isEmpty,pop]),value=(0,react.useMemo)((()=>({stack:stack,openPortal:openPortal,closePortal:closePortal})),[stack,openPortal,closePortal]),handleClose=(0,react.useCallback)((target=>{if(target instanceof HTMLDivElement)if(!target.classList.contains("portal")||"bsBackdrop"in target.dataset){if(target.classList.contains("backdrop")){const lastPortal=target.nextElementSibling;lastPortal&&lastPortal.classList.contains("portal")&&!("bsBackdrop"in lastPortal.dataset)&&closePortal()}}else closePortal()}),[closePortal]);return(0,react.useEffect)((()=>{const keyEvent=event=>{if("Escape"===event.key){const lastPortal=document.querySelector(`#${portalName} > div > div:last-child`);lastPortal&&handleClose(lastPortal)}};return 0!==stack.length&&window.addEventListener("keydown",keyEvent),()=>{window.removeEventListener("keydown",keyEvent)}}),[handleClose,portalName,stack.length]),(0,jsx_runtime.jsxs)(DPortalContext.Provider,{value:value,children:[children,created&&(0,react_dom.createPortal)((0,jsx_runtime.jsx)("div",{onClick:({target:target})=>handleClose(target),onKeyDown:()=>{},children:stack.map((({Component:Component,name:name,payload:payload})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"backdrop fade show"}),(0,jsx_runtime.jsx)(Component,{name:name,payload:payload})]},name)))}),document.getElementById(portalName))]})}function useDPortalContext(){const context=(0,react.useContext)(DPortalContext);if(void 0===context)throw new Error("usePortalContext was used outside of PortalContextProvider");return context}DPortalContextProvider.displayName="DPortalContextProvider";try{DPortalContextProvider.displayName="DPortalContextProvider",DPortalContextProvider.__docgenInfo={description:"",displayName:"DPortalContextProvider",props:{portalName:{defaultValue:null,description:"",name:"portalName",required:!0,type:{name:"string"}},availablePortals:{defaultValue:null,description:"",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/DPortalContext.tsx#DPortalContextProvider"]={docgenInfo:DPortalContextProvider.__docgenInfo,name:"DPortalContextProvider",path:"src/contexts/DPortalContext.tsx#DPortalContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useFormatCurrency.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return useFormatCurrency}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),DContext=__webpack_require__("./src/contexts/DContext.tsx"),currency_min=__webpack_require__("../../node_modules/.pnpm/currency.js@2.0.4/node_modules/currency.js/dist/currency.min.js"),currency_min_default=__webpack_require__.n(currency_min);function formatCurrency(amount,options){return currency_min_default()(amount,options).format()}function useFormatCurrency(...args){const{currency:currency}=(0,DContext.Fg)();return{format:(0,react.useCallback)(((value,currencyOptions)=>formatCurrency(value,currencyOptions||currency)),[currency]),values:(args||[]).map((value=>formatCurrency(value??0,currency)))}}},"../../node_modules/.pnpm/currency.js@2.0.4/node_modules/currency.js/dist/currency.min.js":function(module){module.exports=function(){function e(b,a){if(!(this instanceof e))return new e(b,a);a=Object.assign({},m,a);var d=Math.pow(10,a.precision);this.intValue=b=g(b,a),this.value=b/d,a.increment=a.increment||1/d,a.groups=a.useVedic?n:p,this.s=a,this.p=d}function g(b,a){var d=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],c=a.decimal,h=a.errorOnInvalid,k=a.fromCents,l=Math.pow(10,a.precision),f=b instanceof e;if(f&&k)return b.intValue;if("number"==typeof b||f)c=f?b.value:b;else if("string"==typeof b)h=new RegExp("[^-\\d"+c+"]","g"),c=new RegExp("\\"+c,"g"),c=(c=b.replace(/\((.*)\)/,"-$1").replace(h,"").replace(c,"."))||0;else{if(h)throw Error("Invalid Input");c=0}return k||(c=(c*l).toFixed(4)),d?Math.round(c):c}var m={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:function(b,a){var d=a.pattern,c=a.negativePattern,h=a.symbol,k=a.separator,l=a.decimal;a=a.groups;var f=(""+b).replace(/^-/,"").split("."),q=f[0];return f=f[1],(0<=b.value?d:c).replace("!",h).replace("#",q.replace(a,"$1"+k)+(f?l+f:""))},fromCents:!1},p=/(\d)(?=(\d{3})+\b)/g,n=/(\d)(?=(\d\d)+\d\b)/g;return e.prototype={add:function(b){var a=this.s,d=this.p;return e((this.intValue+g(b,a))/(a.fromCents?1:d),a)},subtract:function(b){var a=this.s,d=this.p;return e((this.intValue-g(b,a))/(a.fromCents?1:d),a)},multiply:function(b){var a=this.s;return e(this.intValue*b/(a.fromCents?1:Math.pow(10,a.precision)),a)},divide:function(b){var a=this.s;return e(this.intValue/g(b,a,!1),a)},distribute:function(b){var a=this.intValue,d=this.p,c=this.s,h=[],k=Math[0<=a?"floor":"ceil"](a/b),l=Math.abs(a-k*b);for(d=c.fromCents?1:d;0!==b;b--){var f=e(k/d,c);0<l--&&(f=f[0<=a?"add":"subtract"](1/d)),h.push(f)}return h},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(b){var a=this.s;return"function"==typeof b?b(this,a):a.format(this,Object.assign({},a,b))},toString:function(){var b=this.s,a=b.increment;return(Math.round(this.intValue/this.p/a)*a).toFixed(b.precision)},toJSON:function(){return this.value}},e}()},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);