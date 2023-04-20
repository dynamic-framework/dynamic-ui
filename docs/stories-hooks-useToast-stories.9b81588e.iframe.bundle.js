"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[6154],{"./src/stories/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UZ:()=>ICONS,dD:()=>INPUT_STATE,yU:()=>THEMES});const THEMES=["primary","secondary","success","info","warning","danger","light","dark"],ICONS=["emoji-smile","emoji-smile-upside-down","emoji-dizzy","emoji-expressionless"],INPUT_STATE=["focus","hover","active","disabled"]},"./src/stories/hooks/useToast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useToast_stories});var proxies=__webpack_require__("./src/components/proxies.ts"),react_toastify_esm=__webpack_require__("../../node_modules/.pnpm/react-toastify@9.0.8_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs"),jsx_runtime=(__webpack_require__("../../node_modules/.pnpm/react-toastify@9.0.8_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/ReactToastify.css"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));function MToastContainer({style}){return(0,jsx_runtime.jsx)(react_toastify_esm.Ix,{toastClassName:()=>"shadow-none p-0 cursor-default",position:"bottom-center",autoClose:!1,hideProgressBar:!0,closeOnClick:!1,closeButton:!1,transition:react_toastify_esm.LG,style})}MToastContainer.displayName="MToastContainer";try{MToastContainer.displayName="MToastContainer",MToastContainer.__docgenInfo={description:"",displayName:"MToastContainer",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"(CSSProperties & { [index: string]: any; '--toastify-toast-width': any; }) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MToastContainer.tsx#MToastContainer"]={docgenInfo:MToastContainer.__docgenInfo,name:"MToastContainer",path:"src/components/MToastContainer.tsx#MToastContainer"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const useToast_stories={title:"React/hooks/useToast",component:({message,theme,showClose})=>{const{toast}=function useToast(){return{toast:(0,react.useCallback)(((message,{theme="info",showClose=!0}={})=>{(0,react_toastify_esm.Am)((({closeToast})=>(0,jsx_runtime.jsx)(proxies.n7,{theme,showClose,onMClose:closeToast,children:message})))}),[])}}();return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(proxies.G5,{text:"Show Toast",onClick:()=>toast(message,{theme,showClose})}),(0,jsx_runtime.jsx)(MToastContainer,{})]})},argTypes:{theme:{control:"select",options:__webpack_require__("./src/stories/constants.ts").yU},showClose:{control:"boolean"}}},Default={args:{message:"the default message",theme:"primary",showClose:!1}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    message: 'the default message',\n    theme: 'primary',\n    showClose: false\n  }\n}",...Default.parameters?.docs?.source}}}}}]);