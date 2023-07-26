"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[6154],{"./src/stories/hooks/useToast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>useToast_stories,useToast:()=>useToast_stories_useToast});var proxies=__webpack_require__("./src/components/proxies.ts"),react_toastify_esm=__webpack_require__("../../node_modules/.pnpm/react-toastify@9.0.8_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs"),jsx_runtime=(__webpack_require__("../../node_modules/.pnpm/react-toastify@9.0.8_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/ReactToastify.css"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));function MToastContainer({style,position="bottom-center"}){return(0,jsx_runtime.jsx)(react_toastify_esm.Ix,{toastClassName:()=>"shadow-none p-0 cursor-default",position,autoClose:!1,hideProgressBar:!0,closeOnClick:!1,closeButton:!1,transition:react_toastify_esm.Mi,style})}MToastContainer.displayName="MToastContainer";try{MToastContainer.displayName="MToastContainer",MToastContainer.__docgenInfo={description:"",displayName:"MToastContainer",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"(CSSProperties & { [index: string]: any; '--toastify-toast-width': any; }) | undefined"}},position:{defaultValue:{value:"bottom-center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-right"'},{value:'"top-center"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-center"'},{value:'"bottom-left"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MToastContainer.tsx#MToastContainer"]={docgenInfo:MToastContainer.__docgenInfo,name:"MToastContainer",path:"src/components/MToastContainer.tsx#MToastContainer"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const useToast_stories={title:"Design System/Patterns/Alert",component:({message,type,showClose})=>{const{toast}=function useToast(){return{toast:(0,react.useCallback)(((message,{position="bottom-center",type="info",showClose=!0,autoClose=!1}={})=>{(0,react_toastify_esm.Am)((({closeToast})=>(0,jsx_runtime.jsx)(proxies.n7,{type,showClose,onMClose:closeToast,children:message})),{transition:react_toastify_esm.Mi,position,autoClose})}),[])}}();return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(proxies.G5,{text:"Show Toast",onClick:()=>toast(message,{type,showClose})}),(0,jsx_runtime.jsx)(MToastContainer,{})]})},argTypes:{type:{control:"select",type:"string",options:__webpack_require__("./src/stories/constants.ts").CH},showClose:{control:"boolean",type:"boolean"}}},useToast_stories_useToast={args:{message:"the default message",type:"info",showClose:!1}};useToast_stories_useToast.parameters={...useToast_stories_useToast.parameters,docs:{...useToast_stories_useToast.parameters?.docs,source:{originalSource:"{\n  args: {\n    message: 'the default message',\n    type: 'info',\n    showClose: false\n  }\n}",...useToast_stories_useToast.parameters?.docs?.source}}};const __namedExportsOrder=["useToast"]}}]);