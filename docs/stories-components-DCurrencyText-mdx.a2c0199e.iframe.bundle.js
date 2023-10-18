/*! For license information please see stories-components-DCurrencyText-mdx.a2c0199e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[9353,2127],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/components/DCurrencyText.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_DCurrencyText_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/components/DCurrencyText.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"currency-text",children:"Currency Text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Component to format and display a currency value using a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LiquidContext"})," to get the config."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_DCurrencyText_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_DCurrencyText_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/contexts/LiquidContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L$:()=>useLiquidContext,Um:()=>LiquidContextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../dynamic-ui/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const LiquidContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."}});function LiquidContextProvider({children}){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({language:_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{site.language}}"),currency:{symbol:_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{vars.currency-symbol}}"),precision:parseInt(_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{vars.currency-precision}}"),10),separator:_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{vars.currency-separator}}"),decimal:_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{vars.currency-decimal}}")}})),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LiquidContext.Provider,{value,children})}function useLiquidContext(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LiquidContext);if(void 0===context)throw new Error("useLiquidContext was used outside of LiquidContextProvider");return context}LiquidContextProvider.displayName="LiquidContextProvider";try{LiquidContextProvider.displayName="LiquidContextProvider",LiquidContextProvider.__docgenInfo={description:"",displayName:"LiquidContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/LiquidContext.tsx#LiquidContextProvider"]={docgenInfo:LiquidContextProvider.__docgenInfo,name:"LiquidContextProvider",path:"src/contexts/LiquidContext.tsx#LiquidContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useFormatCurrency.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useFormatCurrency});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../dynamic-ui/dist/index.js"),_contexts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/contexts/LiquidContext.tsx");function useFormatCurrency(...args){const{currency}=(0,_contexts__WEBPACK_IMPORTED_MODULE_2__.L$)();return{format:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>(0,_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__.xG)(value,currency)),[currency]),values:(args||[]).map((value=>(0,_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__.xG)(value??0,currency)))}}},"./src/stories/config/liquidConfig.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);var dist=__webpack_require__("../dynamic-ui/dist/index.js");const liquid_namespaceObject=JSON.parse('{"vars":{"currency-symbol":"$","currency-precision":2,"currency-separator":".","currency-decimal":","}}');dist.tj.init(liquid_namespaceObject,window.liquidjs)},"./src/stories/components/DCurrencyText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DCurrencyText_stories});var useFormatCurrency=__webpack_require__("./src/hooks/useFormatCurrency.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DCurrencyText({value,className}){const{values:[valueFormatted]}=(0,useFormatCurrency.Z)(value);return(0,jsx_runtime.jsx)("span",{className,children:valueFormatted})}DCurrencyText.displayName="DCurrencyText";try{DCurrencyText.displayName="DCurrencyText",DCurrencyText.__docgenInfo={description:"",displayName:"DCurrencyText",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DCurrencyText.tsx#DCurrencyText"]={docgenInfo:DCurrencyText.__docgenInfo,name:"DCurrencyText",path:"src/components/DCurrencyText.tsx#DCurrencyText"})}catch(__react_docgen_typescript_loader_error){}const DCurrencyText_stories={title:"Design System/Components/Currency Text",component:DCurrencyText},Default={decorators:[Story=>(__webpack_require__("./src/stories/config/liquidConfig.ts"),(0,jsx_runtime.jsx)(Story,{}))],args:{value:100}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => {\n    // eslint-disable-next-line global-require\n    require('../config/liquidConfig');\n    return <Story />;\n  }],\n  args: {\n    value: 100\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);