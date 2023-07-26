"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[813],{"./src/stories/patterns/MPopover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Open:()=>Open,Plain:()=>Plain,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MPopover_stories});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),floating_ui_react_esm=__webpack_require__("../../node_modules/.pnpm/@floating-ui+react@0.24.1_knhnagtyfncgg2hpin7s37uixq/node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),floating_ui_core_browser_min=__webpack_require__("../../node_modules/.pnpm/@floating-ui+core@1.2.6/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),floating_ui_dom_browser_min=__webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.2.8/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function MPopover({children,renderComponent,isOpen,setIsOpen=()=>{}}){const[innerIsOpen,setInnerIsOpen]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setInnerIsOpen(isOpen)}),[isOpen]);const onOpenChange=(0,react.useCallback)((value=>{setInnerIsOpen(value),setIsOpen(value)}),[setIsOpen]),{refs,floatingStyles,context}=(0,floating_ui_react_esm.YF)({open:innerIsOpen,onOpenChange,middleware:[(0,floating_ui_core_browser_min.cv)(0),(0,floating_ui_core_browser_min.RR)({fallbackAxisSideDirection:"none"}),(0,floating_ui_core_browser_min.uY)()],whileElementsMounted:floating_ui_dom_browser_min.Me}),click=(0,floating_ui_react_esm.eS)(context),dismiss=(0,floating_ui_react_esm.bQ)(context),role=(0,floating_ui_react_esm.qs)(context),{getReferenceProps,getFloatingProps}=(0,floating_ui_react_esm.NI)([click,dismiss,role]),headingId=(0,floating_ui_react_esm.PC)();return(0,jsx_runtime.jsxs)("div",{className:"m-popover",children:[(0,jsx_runtime.jsx)("div",{ref:refs.setReference,...getReferenceProps(),children:renderComponent(innerIsOpen)}),innerIsOpen&&(0,jsx_runtime.jsx)(floating_ui_react_esm.wD,{context,modal:!1,children:(0,jsx_runtime.jsx)("div",{className:"m-popover-content",ref:refs.setFloating,style:floatingStyles,"aria-labelledby":headingId,...getFloatingProps(),children})})]})}MPopover.displayName="MPopover";try{MPopover.displayName="MPopover",MPopover.__docgenInfo={description:"",displayName:"MPopover",props:{renderComponent:{defaultValue:null,description:"",name:"renderComponent",required:!0,type:{name:"(isOpen: boolean) => Element"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:{value:"() => {}"},description:"",name:"setIsOpen",required:!1,type:{name:"((isOpen: boolean) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MPopover.tsx#MPopover"]={docgenInfo:MPopover.__docgenInfo,name:"MPopover",path:"src/components/MPopover.tsx#MPopover"})}catch(__react_docgen_typescript_loader_error){}var proxies=__webpack_require__("./src/components/proxies.ts");const MPopover_stories={title:"Design System/Patterns/Popover",component:MPopover},Default={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsxs)(MPopover,{...args,children:[(0,jsx_runtime.jsx)(proxies.ku,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"}),(0,jsx_runtime.jsx)(proxies.ku,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"}),(0,jsx_runtime.jsx)(proxies.ku,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"})]}),args:{renderComponent:toggle=>(0,jsx_runtime.jsx)(proxies.G5,{text:"Dropdown Component",iconEnd:""+(toggle?"chevron-up":"chevron-down"),className:"d-grid"})}},Open={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsxs)(MPopover,{...args,children:[(0,jsx_runtime.jsx)(proxies.ku,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"}),(0,jsx_runtime.jsx)(proxies.ku,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"}),(0,jsx_runtime.jsx)(proxies.ku,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"})]}),args:{renderComponent:toggle=>(0,jsx_runtime.jsx)(proxies.G5,{text:"Dropdown Component",iconEnd:""+(toggle?"chevron-up":"chevron-down"),className:"d-grid"}),isOpen:!0}},Plain={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(MPopover,{...args,children:"Ipsum"}),args:{renderComponent:()=>(0,jsx_runtime.jsx)("div",{children:"Lorem"})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    width: \'320px\',\n    height: \'320px\'\n  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">\n        <Story />\n      </div>],\n  render: args => <MPopover {...args}>\n      <MQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />\n      <MQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />\n      <MQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />\n    </MPopover>,\n  args: {\n    renderComponent: toggle => <MButton text="Dropdown Component" iconEnd={`${toggle ? \'chevron-up\' : \'chevron-down\'}`} className="d-grid" />\n  }\n}',...Default.parameters?.docs?.source}}},Open.parameters={...Open.parameters,docs:{...Open.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    width: \'320px\',\n    height: \'320px\'\n  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">\n        <Story />\n      </div>],\n  render: args => <MPopover {...args}>\n      <MQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />\n      <MQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />\n      <MQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />\n    </MPopover>,\n  args: {\n    renderComponent: toggle => <MButton text="Dropdown Component" iconEnd={`${toggle ? \'chevron-up\' : \'chevron-down\'}`} className="d-grid" />,\n    isOpen: true\n  }\n}',...Open.parameters?.docs?.source}}},Plain.parameters={...Plain.parameters,docs:{...Plain.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <MPopover {...args}>\n      Ipsum\n    </MPopover>,\n  args: {\n    renderComponent: () => <div>Lorem</div>\n  }\n}",...Plain.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Open","Plain"]}}]);