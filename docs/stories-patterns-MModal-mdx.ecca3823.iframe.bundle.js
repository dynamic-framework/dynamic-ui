"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[5261,9829,2291],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/patterns/MModal.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../dynamic-ui/dist/index.js"),_MModal_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/patterns/MModal.stories.tsx"),_hooks_useModalContext_stories__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/hooks/useModalContext.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",h3:"h3",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"modal",children:"Modal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.UG,{children:`\n\n  | Variable                                       | Type              | Description                                 |\n  |------------------------------------------------|-------------------|---------------------------------------------|\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-modal-body-padding\`         | css length unit   | Body padding                                |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-modal-footer-padding\`       | css length unit   | Footer padding                              |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-modal-separator-margin-x\`   | css length unit   | Separator horizontal padding                |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-modal-separator-height\`     | css length unit   | Separator height (size)                     |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-modal-separator-bg\`         | css color unit    | Separator background (color)                |\n\n  `}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_MModal_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_MModal_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_hooks_useModalContext_stories__WEBPACK_IMPORTED_MODULE_6__.useModalContext}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h3,{id:"context-setup---render-of-bootstraptsx",children:["Context Setup - render of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Bootstrap.tsx"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{code:'\n<ModalContextProvider\n  portalName="examplePortal"\n  availableModals={{\n    example: ExampleModal,\n  }}\n>\n  <App />\n</ModalContextProvider>\n  '}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h3,{id:"modal-definition---render-of-examplemodaltsx",children:["Modal Definition - render of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ExampleModal.tsx"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{code:'\n<MModal\n  name="example"\n  isCentered\n  isStatic\n  showCloseButton\n  onMClose={() => closeModal()}\n>\n  <div slot="header">\n    <h5 className="fw-bold">Do you want to reject the offer?</h5>\n  </div>\n  <div slot="body">\n    <p className="py-3 px-5">Modal body</p>\n  </div>\n  <div slot="footer">\n    <MButton\n      text="cancel"\n      theme="secondary"\n      variant="outline"\n      className="d-grid"\n      isPill\n      onMClick={() => closeModal()}\n    />\n    <MButton text="ok" className="d-grid" isPill />\n  </div>\n</MModal>\n  '}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h3,{id:"modal-usage-render-of-apptsx",children:["Modal Usage render of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"App.tsx"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{code:"\n<MButton text=\"Open Modal\" onMClick={() => openModal('example')} />\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/hooks/useStackState.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useStackState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useStackState(initialList){const[list,setList]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialList),{length}=list,push=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item=>{setList((prevList=>[...prevList,item]))}),[]),pop=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setList((prevList=>{if(0===prevList.length)return prevList;const[,...newList]=prevList;return newList}))}),[]),peek=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{if(list.length>0)return list[list.length-1]}),[list]),isEmpty=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>0===list.length),[list]);return[list,{clear:()=>setList([]),isEmpty,length,peek,pop,push}]}},"./src/stories/hooks/useModalContext.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>useModalContext_stories,useModalContext:()=>useModalContext_stories_useModalContext});var proxies=__webpack_require__("./src/components/proxies.ts"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),useStackState=__webpack_require__("./src/hooks/useStackState.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ModalContext=(0,react.createContext)(void 0);function ModalContextProvider({portalName,children,availableModals}){const[hasPortal,setHasPortal]=(0,react.useState)(!1);(0,react.useEffect)((()=>{const previousPortal=document.querySelector(`#${portalName}`);previousPortal&&previousPortal.remove();const portal=document.createElement("div");portal.id=portalName,document.body.appendChild(portal),setHasPortal(!0)}),[portalName]);const[stack,{push,pop,peek}]=(0,useStackState.Z)([]);(0,react.useEffect)((()=>{stack.length?(document.body.style.overflow="hidden",document.body.style.paddingRight="0"):(document.body.style.overflow="unset",document.body.style.paddingRight="unset")}),[stack.length]);const openModal=(0,react.useCallback)(((modalName,{payload,callbacks}={payload:{}})=>{const Component=availableModals[modalName];if(!Component)throw new Error(`there is no component for modal ${modalName}`);const stackItem={modalName,Component,payload,callbacks};callbacks?.onBeforeOpen&&callbacks.onBeforeOpen(payload),push(stackItem)}),[availableModals,push]),closeModal=(0,react.useCallback)(((context={fromModal:!1})=>{const stackItem=peek();stackItem&&(stackItem.callbacks?.onBeforeClose&&stackItem.callbacks.onBeforeClose(context,stackItem.payload),pop())}),[peek,pop]),value=(0,react.useMemo)((()=>({stack,openModal,closeModal})),[stack,openModal,closeModal]);return(0,jsx_runtime.jsxs)(ModalContext.Provider,{value,children:[children,hasPortal&&(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[stack.map((({Component,modalName,callbacks,payload})=>{const EnhancedComponent=function enhanceModal(Modal,callbacks){return function EnhancedModal({name,payload,...otherProps}){return(0,react.useEffect)((()=>(callbacks?.onAfterOpen&&callbacks.onAfterOpen(payload),()=>{callbacks?.onAfterClose&&callbacks.onAfterClose({fromModal:!1},payload)})),[payload]),(0,jsx_runtime.jsx)(Modal,{name,payload,...otherProps})}}(Component,callbacks);return(0,jsx_runtime.jsx)(EnhancedComponent,{name:modalName,payload,openModal,closeModal},modalName)})),!!stack.length&&(0,jsx_runtime.jsx)("div",{className:"modal-backdrop fade show"})]}),document.getElementById(portalName))]})}ModalContextProvider.displayName="ModalContextProvider";try{ModalContextProvider.displayName="ModalContextProvider",ModalContextProvider.__docgenInfo={description:"",displayName:"ModalContextProvider",props:{portalName:{defaultValue:null,description:"",name:"portalName",required:!0,type:{name:"string"}},availableModals:{defaultValue:null,description:"",name:"availableModals",required:!0,type:{name:"ModalAvailableList"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/ModalContext.tsx#ModalContextProvider"]={docgenInfo:ModalContextProvider.__docgenInfo,name:"ModalContextProvider",path:"src/contexts/ModalContext.tsx#ModalContextProvider"})}catch(__react_docgen_typescript_loader_error){}const ExampleModal=({closeModal})=>(0,jsx_runtime.jsxs)(proxies.x6,{name:"example",isCentered:!0,isStatic:!0,showCloseButton:!0,onMClose:()=>closeModal(),children:[(0,jsx_runtime.jsx)("div",{slot:"header",children:(0,jsx_runtime.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,jsx_runtime.jsx)("div",{slot:"body",children:(0,jsx_runtime.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,jsx_runtime.jsxs)("div",{slot:"footer",children:[(0,jsx_runtime.jsx)(proxies.G5,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",isPill:!0,onMClick:()=>closeModal()}),(0,jsx_runtime.jsx)(proxies.G5,{text:"ok",className:"d-grid",isPill:!0})]})]});ExampleModal.displayName="ExampleModal";const ExampleChildren=()=>{const{openModal}=function useModalContext(){const context=(0,react.useContext)(ModalContext);if(void 0===context)throw new Error("useModalContext was used outside of ModalContextProvider");return context}();return(0,jsx_runtime.jsx)(proxies.G5,{text:"Open Modal",onMClick:()=>openModal("example")})};ExampleChildren.displayName="ExampleChildren";const Example=()=>(0,jsx_runtime.jsx)(ModalContextProvider,{portalName:"examplePortal",availableModals:{example:ExampleModal},children:(0,jsx_runtime.jsx)(ExampleChildren,{})});Example.displayName="Example";const useModalContext_stories={title:"Design System/Patterns/Modal",component:Example},useModalContext_stories_useModalContext={args:{}};useModalContext_stories_useModalContext.parameters={...useModalContext_stories_useModalContext.parameters,docs:{...useModalContext_stories_useModalContext.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...useModalContext_stories_useModalContext.parameters?.docs?.source}}};const __namedExportsOrder=["useModalContext"]},"./src/stories/patterns/MModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActionsPlacementEnd:()=>ActionsPlacementEnd,ActionsPlacementStart:()=>ActionsPlacementStart,Default:()=>Default,OnlyBody:()=>OnlyBody,WithoutActions:()=>WithoutActions,WithoutCancelX:()=>WithoutCancelX,WithoutHeader:()=>WithoutHeader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/proxies.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Patterns/Modal",component:_components__WEBPACK_IMPORTED_MODULE_1__.x6,argTypes:{name:{control:"text",type:{name:"string",required:!0}},isStatic:{control:"boolean",type:"boolean"},isScrollable:{control:"boolean",type:"boolean"},isCentered:{control:"boolean",type:"boolean"},isFullScreen:{control:"boolean",type:"boolean"},fullScreenFrom:{control:"select",type:"string",options:["sm","md","lg","xl","xxl"]},modalSize:{control:"radio",type:"string",options:["sm","lg","xl"]},showCloseButton:{control:"boolean",type:"boolean"},footerActionPlacement:{control:"radio",type:"string",options:["fill","start","end"]}},parameters:{layout:"fullscreen"}},Default={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__.x6,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"body",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{slot:"footer",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.G5,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",isPill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.G5,{text:"ok",className:"d-grid",isPill:!0})]})]}),args:{name:"exampleModal",isStatic:!1,isScrollable:!1,isCentered:!0,isFullScreen:!1,modalSize:"sm",showCloseButton:!0,footerActionPlacement:"fill"}},ActionsPlacementStart={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__.x6,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"body",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{slot:"footer",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.G5,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",isPill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.G5,{text:"ok",className:"d-grid",isPill:!0})]})]}),args:{name:"exampleModal",isStatic:!1,isScrollable:!1,isCentered:!0,isFullScreen:!1,modalSize:"sm",showCloseButton:!0,footerActionPlacement:"start"}},ActionsPlacementEnd={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__.x6,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"body",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{slot:"footer",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.G5,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",isPill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.G5,{text:"ok",className:"d-grid",isPill:!0})]})]}),args:{name:"exampleModal",isStatic:!1,isScrollable:!1,isCentered:!0,isFullScreen:!1,modalSize:"sm",showCloseButton:!0,footerActionPlacement:"end"}},WithoutHeader={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__.x6,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"body",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{slot:"footer",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.G5,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",isPill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.G5,{text:"ok",className:"d-grid",isPill:!0})]})]}),args:{name:"exampleModal",isStatic:!1,isScrollable:!1,isCentered:!0,isFullScreen:!1,modalSize:"sm",showCloseButton:!0,footerActionPlacement:"fill"}},WithoutActions={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__.x6,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"body",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})})]}),args:{name:"exampleModal",isStatic:!1,isScrollable:!1,isCentered:!0,isFullScreen:!1,modalSize:"sm",showCloseButton:!0,footerActionPlacement:"fill"}},OnlyBody={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.x6,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"body",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})})}),args:{name:"exampleModal",isStatic:!1,isScrollable:!1,isCentered:!0,isFullScreen:!1,modalSize:"sm",showCloseButton:!0,footerActionPlacement:"fill"}},WithoutCancelX={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__.x6,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"body",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{slot:"footer",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.G5,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",isPill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.G5,{text:"ok",className:"d-grid",isPill:!0})]})]}),args:{name:"exampleModal",isStatic:!1,isScrollable:!1,isCentered:!0,isFullScreen:!1,modalSize:"sm",showCloseButton:!1,footerActionPlacement:"fill"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <MModal {...args}>\n      <div slot="header">\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </div>\n      <div slot="body">\n        <p className="py-3 px-5">Modal body</p>\n      </div>\n      <div slot="footer">\n        <MButton text="cancel" theme="secondary" variant="outline" className="d-grid" isPill />\n        <MButton text="ok" className="d-grid" isPill />\n      </div>\n    </MModal>,\n  args: {\n    name: \'exampleModal\',\n    isStatic: false,\n    isScrollable: false,\n    isCentered: true,\n    isFullScreen: false,\n    modalSize: \'sm\',\n    showCloseButton: true,\n    footerActionPlacement: \'fill\'\n  }\n}',...Default.parameters?.docs?.source}}},ActionsPlacementStart.parameters={...ActionsPlacementStart.parameters,docs:{...ActionsPlacementStart.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <MModal {...args}>\n      <div slot="header">\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </div>\n      <div slot="body">\n        <p className="py-3 px-5">Modal body</p>\n      </div>\n      <div slot="footer">\n        <MButton text="cancel" theme="secondary" variant="outline" className="d-grid" isPill />\n        <MButton text="ok" className="d-grid" isPill />\n      </div>\n    </MModal>,\n  args: {\n    name: \'exampleModal\',\n    isStatic: false,\n    isScrollable: false,\n    isCentered: true,\n    isFullScreen: false,\n    modalSize: \'sm\',\n    showCloseButton: true,\n    footerActionPlacement: \'start\'\n  }\n}',...ActionsPlacementStart.parameters?.docs?.source}}},ActionsPlacementEnd.parameters={...ActionsPlacementEnd.parameters,docs:{...ActionsPlacementEnd.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <MModal {...args}>\n      <div slot="header">\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </div>\n      <div slot="body">\n        <p className="py-3 px-5">Modal body</p>\n      </div>\n      <div slot="footer">\n        <MButton text="cancel" theme="secondary" variant="outline" className="d-grid" isPill />\n        <MButton text="ok" className="d-grid" isPill />\n      </div>\n    </MModal>,\n  args: {\n    name: \'exampleModal\',\n    isStatic: false,\n    isScrollable: false,\n    isCentered: true,\n    isFullScreen: false,\n    modalSize: \'sm\',\n    showCloseButton: true,\n    footerActionPlacement: \'end\'\n  }\n}',...ActionsPlacementEnd.parameters?.docs?.source}}},WithoutHeader.parameters={...WithoutHeader.parameters,docs:{...WithoutHeader.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <MModal {...args}>\n      <div slot="body">\n        <p className="py-3 px-5">Modal body</p>\n      </div>\n      <div slot="footer">\n        <MButton text="cancel" theme="secondary" variant="outline" className="d-grid" isPill />\n        <MButton text="ok" className="d-grid" isPill />\n      </div>\n    </MModal>,\n  args: {\n    name: \'exampleModal\',\n    isStatic: false,\n    isScrollable: false,\n    isCentered: true,\n    isFullScreen: false,\n    modalSize: \'sm\',\n    showCloseButton: true,\n    footerActionPlacement: \'fill\'\n  }\n}',...WithoutHeader.parameters?.docs?.source}}},WithoutActions.parameters={...WithoutActions.parameters,docs:{...WithoutActions.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <MModal {...args}>\n      <div slot="header">\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </div>\n      <div slot="body">\n        <p className="py-3 px-5">Modal body</p>\n      </div>\n    </MModal>,\n  args: {\n    name: \'exampleModal\',\n    isStatic: false,\n    isScrollable: false,\n    isCentered: true,\n    isFullScreen: false,\n    modalSize: \'sm\',\n    showCloseButton: true,\n    footerActionPlacement: \'fill\'\n  }\n}',...WithoutActions.parameters?.docs?.source}}},OnlyBody.parameters={...OnlyBody.parameters,docs:{...OnlyBody.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    height: '400px'\n  }} className=\"position-relative\">\n        <Story />\n      </div>],\n  render: args => <MModal {...args}>\n      <div slot=\"body\">\n        <p className=\"py-3 px-5\">Modal body</p>\n      </div>\n    </MModal>,\n  args: {\n    name: 'exampleModal',\n    isStatic: false,\n    isScrollable: false,\n    isCentered: true,\n    isFullScreen: false,\n    modalSize: 'sm',\n    showCloseButton: true,\n    footerActionPlacement: 'fill'\n  }\n}",...OnlyBody.parameters?.docs?.source}}},WithoutCancelX.parameters={...WithoutCancelX.parameters,docs:{...WithoutCancelX.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <MModal {...args}>\n      <div slot="header">\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </div>\n      <div slot="body">\n        <p className="py-3 px-5">Modal body</p>\n      </div>\n      <div slot="footer">\n        <MButton text="cancel" theme="secondary" variant="outline" className="d-grid" isPill />\n        <MButton text="ok" className="d-grid" isPill />\n      </div>\n    </MModal>,\n  args: {\n    name: \'exampleModal\',\n    isStatic: false,\n    isScrollable: false,\n    isCentered: true,\n    isFullScreen: false,\n    modalSize: \'sm\',\n    showCloseButton: false,\n    footerActionPlacement: \'fill\'\n  }\n}',...WithoutCancelX.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ActionsPlacementStart","ActionsPlacementEnd","WithoutHeader","WithoutActions","OnlyBody","WithoutCancelX"]}}]);