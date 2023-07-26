"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[2483],{"./src/hooks/useStackState.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useStackState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useStackState(initialList){const[list,setList]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialList),{length}=list,push=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item=>{setList((prevList=>[...prevList,item]))}),[]),pop=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setList((prevList=>{if(0===prevList.length)return prevList;const[,...newList]=prevList;return newList}))}),[]),peek=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{if(list.length>0)return list[list.length-1]}),[list]),isEmpty=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>0===list.length),[list]);return[list,{clear:()=>setList([]),isEmpty,length,peek,pop,push}]}},"./src/stories/hooks/useOffcanvasContext.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>useOffcanvasContext_stories,useOffcanvasContext:()=>useOffcanvasContext_stories_useOffcanvasContext});var proxies=__webpack_require__("./src/components/proxies.ts"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),useStackState=__webpack_require__("./src/hooks/useStackState.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const OffcanvasContext=(0,react.createContext)(void 0);function OffcanvasContextProvider({portalName,children,availableOffcanvas}){const[hasPortal,setHasPortal]=(0,react.useState)(!1);(0,react.useEffect)((()=>{const previousPortal=document.querySelector(`#${portalName}`);previousPortal&&previousPortal.remove();const portal=document.createElement("div");portal.id=portalName,document.body.appendChild(portal),setHasPortal(!0)}),[portalName]);const[stack,{push,pop,peek}]=(0,useStackState.Z)([]);(0,react.useEffect)((()=>{stack.length?(document.body.style.overflow="hidden",document.body.style.paddingRight="0"):(document.body.style.overflow="unset",document.body.style.paddingRight="unset")}),[stack.length]);const openOffcanvas=(0,react.useCallback)(((offcanvasName,{payload,callbacks}={payload:{}})=>{const Component=availableOffcanvas[offcanvasName];if(!Component)throw new Error(`there is no component for offcanvas ${offcanvasName}`);const stackItem={offcanvasName,Component,payload,callbacks};callbacks?.onBeforeOpen&&callbacks.onBeforeOpen(payload),push(stackItem)}),[availableOffcanvas,push]),closeOffcanvas=(0,react.useCallback)(((context={fromOffcanvas:!1})=>{const stackItem=peek();stackItem&&(stackItem.callbacks?.onBeforeClose&&stackItem.callbacks.onBeforeClose(context,stackItem.payload),pop())}),[peek,pop]),value=(0,react.useMemo)((()=>({stack,openOffcanvas,closeOffcanvas})),[stack,openOffcanvas,closeOffcanvas]);return(0,jsx_runtime.jsxs)(OffcanvasContext.Provider,{value,children:[children,hasPortal&&(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[stack.map((({Component,offcanvasName,callbacks,payload})=>{const EnhancedComponent=function enhanceOffcanvas(Offcanvas,callbacks){return function EnhancedOffcanvas({name,payload,...otherProps}){return(0,react.useEffect)((()=>(callbacks?.onAfterOpen&&callbacks.onAfterOpen(payload),()=>{callbacks?.onAfterClose&&callbacks.onAfterClose({fromOffcanvas:!1},payload)})),[payload]),(0,jsx_runtime.jsx)(Offcanvas,{name,payload,...otherProps})}}(Component,callbacks);return(0,jsx_runtime.jsx)(EnhancedComponent,{name:offcanvasName,payload,openOffcanvas,closeOffcanvas},offcanvasName)})),!!stack.length&&(0,jsx_runtime.jsx)("div",{className:"offcanvas-backdrop fade show"})]}),document.getElementById(portalName))]})}OffcanvasContextProvider.displayName="OffcanvasContextProvider";try{OffcanvasContextProvider.displayName="OffcanvasContextProvider",OffcanvasContextProvider.__docgenInfo={description:"",displayName:"OffcanvasContextProvider",props:{portalName:{defaultValue:null,description:"",name:"portalName",required:!0,type:{name:"string"}},availableOffcanvas:{defaultValue:null,description:"",name:"availableOffcanvas",required:!0,type:{name:"OffcanvasAvailableList"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/OffcanvasContext.tsx#OffcanvasContextProvider"]={docgenInfo:OffcanvasContextProvider.__docgenInfo,name:"OffcanvasContextProvider",path:"src/contexts/OffcanvasContext.tsx#OffcanvasContextProvider"})}catch(__react_docgen_typescript_loader_error){}const ExampleOffcanvas=({closeOffcanvas})=>(0,jsx_runtime.jsxs)(proxies.FW,{name:"example",isStatic:!1,isScrollable:!1,showCloseButton:!0,openFrom:"end",onMClose:()=>closeOffcanvas(),children:[(0,jsx_runtime.jsx)("div",{slot:"header",children:(0,jsx_runtime.jsx)("h5",{className:"fw-bold",children:"Advanced filters"})}),(0,jsx_runtime.jsx)("div",{slot:"body",children:(0,jsx_runtime.jsx)("p",{children:"Offcanvas body"})}),(0,jsx_runtime.jsxs)("div",{slot:"footer",children:[(0,jsx_runtime.jsx)(proxies.G5,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",isPill:!0,onMClick:()=>closeOffcanvas()}),(0,jsx_runtime.jsx)(proxies.G5,{text:"ok",className:"d-grid",isPill:!0})]})]});ExampleOffcanvas.displayName="ExampleOffcanvas";const ExampleChildren=()=>{const{openOffcanvas}=function useOffcanvasContext(){const context=(0,react.useContext)(OffcanvasContext);if(void 0===context)throw new Error("useOffcanvasContext was used outside of OffcanvasContextProvider");return context}();return(0,jsx_runtime.jsx)(proxies.G5,{text:"Open Offcanvas",onClick:()=>openOffcanvas("example")})};ExampleChildren.displayName="ExampleChildren";const Example=()=>(0,jsx_runtime.jsx)(OffcanvasContextProvider,{portalName:"examplePortal",availableOffcanvas:{example:ExampleOffcanvas},children:(0,jsx_runtime.jsx)(ExampleChildren,{})});Example.displayName="Example";const useOffcanvasContext_stories={title:"Design System/Patterns/Offcanvas",component:Example},useOffcanvasContext_stories_useOffcanvasContext={render:()=>(0,jsx_runtime.jsx)(Example,{})};useOffcanvasContext_stories_useOffcanvasContext.parameters={...useOffcanvasContext_stories_useOffcanvasContext.parameters,docs:{...useOffcanvasContext_stories_useOffcanvasContext.parameters?.docs,source:{originalSource:"{\n  render: () => <Example />\n}",...useOffcanvasContext_stories_useOffcanvasContext.parameters?.docs?.source}}};const __namedExportsOrder=["useOffcanvasContext"]}}]);