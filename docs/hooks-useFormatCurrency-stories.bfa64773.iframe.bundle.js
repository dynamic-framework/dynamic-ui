/*! For license information please see hooks-useFormatCurrency-stories.bfa64773.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[811],{"./src/contexts/DContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Fg:function(){return useDContext},oW:function(){return DContextProvider}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const defaultState={language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."}},DContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultState);function DContextProvider({language:language=defaultState.language,currency:currency=defaultState.currency,children:children}){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({language:language,currency:currency})),[language,currency]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DContext.Provider,{value:value,children:children})}function useDContext(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DContext);if(void 0===context)throw new Error("useDContext was used outside of DContextProvider");return context}DContextProvider.displayName="DContextProvider";try{DContextProvider.displayName="DContextProvider",DContextProvider.__docgenInfo={description:"",displayName:"DContextProvider",props:{language:{defaultValue:{value:"en"},description:"",name:"language",required:!1,type:{name:"string | undefined"}},currency:{defaultValue:{value:"{\n    symbol: '$',\n    precision: 2,\n    separator: ',',\n    decimal: '.',\n  }"},description:"",name:"currency",required:!1,type:{name:"{ symbol: string; precision: number; separator: string; decimal: string; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/DContext.tsx#DContextProvider"]={docgenInfo:DContextProvider.__docgenInfo,name:"DContextProvider",path:"src/contexts/DContext.tsx#DContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useFormatCurrency.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return useFormatCurrency}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),DContext=__webpack_require__("./src/contexts/DContext.tsx"),currency_min=__webpack_require__("../../node_modules/.pnpm/currency.js@2.0.4/node_modules/currency.js/dist/currency.min.js"),currency_min_default=__webpack_require__.n(currency_min);function formatCurrency(amount,options){return currency_min_default()(amount,options).format()}function useFormatCurrency(...args){const{currency:currency}=(0,DContext.Fg)();return{format:(0,react.useCallback)((value=>formatCurrency(value,currency)),[currency]),values:(args||[]).map((value=>formatCurrency(value??0,currency)))}}},"./stories/hooks/useFormatCurrency.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _src_hooks_useFormatCurrency__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useFormatCurrency.ts"),_src_contexts_DContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/contexts/DContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ExampleChildren=()=>{const{values:values}=(0,_src_hooks_useFormatCurrency__WEBPACK_IMPORTED_MODULE_1__.Z)(100,234.12,-233);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:values.map((value=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre",{children:value},value)))})},Example=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_contexts_DContext__WEBPACK_IMPORTED_MODULE_2__.oW,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExampleChildren,{})});Example.displayName="Example";const config={title:"Hooks/useFormatCurrency",component:Example};__webpack_exports__.default=config;const Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/currency.js@2.0.4/node_modules/currency.js/dist/currency.min.js":function(module){module.exports=function(){function e(b,a){if(!(this instanceof e))return new e(b,a);a=Object.assign({},m,a);var d=Math.pow(10,a.precision);this.intValue=b=g(b,a),this.value=b/d,a.increment=a.increment||1/d,a.groups=a.useVedic?n:p,this.s=a,this.p=d}function g(b,a){var d=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],c=a.decimal,h=a.errorOnInvalid,k=a.fromCents,l=Math.pow(10,a.precision),f=b instanceof e;if(f&&k)return b.intValue;if("number"==typeof b||f)c=f?b.value:b;else if("string"==typeof b)h=new RegExp("[^-\\d"+c+"]","g"),c=new RegExp("\\"+c,"g"),c=(c=b.replace(/\((.*)\)/,"-$1").replace(h,"").replace(c,"."))||0;else{if(h)throw Error("Invalid Input");c=0}return k||(c=(c*l).toFixed(4)),d?Math.round(c):c}var m={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:function(b,a){var d=a.pattern,c=a.negativePattern,h=a.symbol,k=a.separator,l=a.decimal;a=a.groups;var f=(""+b).replace(/^-/,"").split("."),q=f[0];return f=f[1],(0<=b.value?d:c).replace("!",h).replace("#",q.replace(a,"$1"+k)+(f?l+f:""))},fromCents:!1},p=/(\d)(?=(\d{3})+\b)/g,n=/(\d)(?=(\d\d)+\d\b)/g;return e.prototype={add:function(b){var a=this.s,d=this.p;return e((this.intValue+g(b,a))/(a.fromCents?1:d),a)},subtract:function(b){var a=this.s,d=this.p;return e((this.intValue-g(b,a))/(a.fromCents?1:d),a)},multiply:function(b){var a=this.s;return e(this.intValue*b/(a.fromCents?1:Math.pow(10,a.precision)),a)},divide:function(b){var a=this.s;return e(this.intValue/g(b,a,!1),a)},distribute:function(b){var a=this.intValue,d=this.p,c=this.s,h=[],k=Math[0<=a?"floor":"ceil"](a/b),l=Math.abs(a-k*b);for(d=c.fromCents?1:d;0!==b;b--){var f=e(k/d,c);0<l--&&(f=f[0<=a?"add":"subtract"](1/d)),h.push(f)}return h},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(b){var a=this.s;return"function"==typeof b?b(this,a):a.format(this,Object.assign({},a,b))},toString:function(){var b=this.s,a=b.increment;return(Math.round(this.intValue/this.p/a)*a).toFixed(b.precision)},toJSON:function(){return this.value}},e}()},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);