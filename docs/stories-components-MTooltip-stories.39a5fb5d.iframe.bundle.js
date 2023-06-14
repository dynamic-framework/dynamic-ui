/*! For license information please see stories-components-MTooltip-stories.39a5fb5d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[9627],{"./src/stories/components/MTooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bottom:()=>Bottom,LargeBottom:()=>LargeBottom,LargeLeft:()=>LargeLeft,LargeRight:()=>LargeRight,LargeText:()=>LargeText,LargeTop:()=>LargeTop,Left:()=>Left,Right:()=>Right,SmallBottom:()=>SmallBottom,SmallLeft:()=>SmallLeft,SmallRight:()=>SmallRight,SmallTop:()=>SmallTop,Top:()=>Top,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MTooltip_stories});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),floating_ui_react_esm=__webpack_require__("../../node_modules/.pnpm/@floating-ui+react@0.24.1_knhnagtyfncgg2hpin7s37uixq/node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),floating_ui_dom_browser_min=__webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.2.8/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),floating_ui_core_browser_min=__webpack_require__("../../node_modules/.pnpm/@floating-ui+core@1.2.6/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),floating_ui_react_dom_esm=__webpack_require__("../../node_modules/.pnpm/@floating-ui+react-dom@2.0.0_biqbaboplfbrettd7655fr4n2y/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),dist=__webpack_require__("../modyo-design-system/dist/index.js"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const TOOLTIP_FONT_SIZE_BY_SIZE={sm:`var(--${dist.k2}ref-fs-subparagraph)`,default:`var(--${dist.k2}body-font-size)`,lg:`var(--${dist.k2}ref-fs-6)`};function MTooltip({classNameContainer,className,offSet=6,padding,withFocus=!1,withClick=!1,withHover=!0,isOpen=!1,placement="top",size,Component,children}){const[open,setOpen]=(0,react.useState)(isOpen),styleVariables=(0,react.useMemo)((()=>{const defaultFontSize=size?TOOLTIP_FONT_SIZE_BY_SIZE[size]:TOOLTIP_FONT_SIZE_BY_SIZE.default;return{background:`var(--${dist.k2}m-tooltip-bg, var(--${dist.k2}m-tooltip-component-bg, var(--${dist.k2}secondary)))`,borderRadius:`var(--${dist.k2}m-tooltip-border-radius, var(--${dist.k2}m-tooltip-component-border-radius, var(--${dist.k2}border-radius)))`,color:`var(--${dist.k2}m-tooltip-color, var(--${dist.k2}m-tooltip-component-color, var(--${dist.k2}white)))`,fontSize:`var(--${dist.k2}m-tooltip-font-size, var(--${dist.k2}m-tooltip-component-font-size, ${defaultFontSize}))`,padding:`var(--${dist.k2}m-tooltip-padding, var(--${dist.k2}m-tooltip-component-padding, var(--${dist.k2}ref-spacer-2)))`,maxWidth:`var(--${dist.k2}m-tooltip-max-width, var(--${dist.k2}m-tooltip-component-max-width, 300px))`}}),[size]),arrowRef=(0,react.useRef)(null),{refs,context,floatingStyles}=(0,floating_ui_react_esm.YF)({open,onOpenChange:setOpen,placement,whileElementsMounted:floating_ui_dom_browser_min.Me,middleware:[(0,floating_ui_core_browser_min.cv)(offSet),(0,floating_ui_core_browser_min.RR)(),(0,floating_ui_core_browser_min.uY)({padding}),(0,floating_ui_react_dom_esm.x7)({element:arrowRef})]}),hover=(0,floating_ui_react_esm.XI)(context,{move:!1}),focus=(0,floating_ui_react_esm.KK)(context),dismiss=(0,floating_ui_react_esm.bQ)(context),click=(0,floating_ui_react_esm.eS)(context),role=(0,floating_ui_react_esm.qs)(context,{role:"tooltip"}),{getReferenceProps,getFloatingProps}=(0,floating_ui_react_esm.NI)([withHover?hover:void 0,withClick?click:void 0,withFocus?focus:void 0,dismiss,role]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className,ref:refs.setReference,...getReferenceProps(),children:Component}),(0,jsx_runtime.jsx)(floating_ui_react_esm.ll,{children:open&&(0,jsx_runtime.jsxs)("div",{className:classNameContainer,ref:refs.setFloating,style:{...floatingStyles,...styleVariables},...getFloatingProps(),children:[(0,jsx_runtime.jsx)(floating_ui_react_esm.Y$,{ref:arrowRef,context,style:{fill:styleVariables.background},width:8,height:4}),children]})})]})}try{MTooltip.displayName="MTooltip",MTooltip.__docgenInfo={description:"",displayName:"MTooltip",props:{classNameContainer:{defaultValue:null,description:"",name:"classNameContainer",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},offSet:{defaultValue:{value:"ARROW_HEIGHT + GAP"},description:"",name:"offSet",required:!1,type:{name:"number | undefined"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number | undefined"}},withHover:{defaultValue:{value:"true"},description:"",name:"withHover",required:!1,type:{name:"boolean | undefined"}},withFocus:{defaultValue:{value:"false"},description:"",name:"withFocus",required:!1,type:{name:"boolean | undefined"}},withClick:{defaultValue:{value:"false"},description:"",name:"withClick",required:!1,type:{name:"boolean | undefined"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MTooltip.tsx#MTooltip"]={docgenInfo:MTooltip.__docgenInfo,name:"MTooltip",path:"src/components/MTooltip.tsx#MTooltip"})}catch(__react_docgen_typescript_loader_error){}const MTooltip_stories={title:"Design System/Components/Tooltip",component:MTooltip,argTypes:{placement:{control:"select",options:["top","left","bottom","right"],defaultValue:"bottom"},withHover:{type:"boolean",control:"boolean",defaultValue:!0},withClick:{type:"boolean",control:"boolean",defaultValue:!1},withFocus:{type:"boolean",control:"boolean",defaultValue:!1},classNameContainer:{type:"string",control:"text"},className:{type:"string",control:"text"},Component:{defaultValue:"Link",type:"string",control:"text"},children:{control:"text",type:"string"},offSet:{type:"number"},padding:{type:"number"}}},Top={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0}},Right={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0}},Bottom={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0}},Left={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0}},SmallTop={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0,size:"sm"}},SmallRight={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0,size:"sm"}},SmallBottom={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0,size:"sm"}},SmallLeft={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0,size:"sm"}},LargeTop={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0,size:"lg"}},LargeRight={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0,size:"lg"}},LargeBottom={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0,size:"lg"}},LargeLeft={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0,size:"lg"}},LargeText={args:{placement:"left",Component:"Text",children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",withHover:!0,withClick:!1,withFocus:!1,isOpen:!0,size:"lg"}};Top.parameters={...Top.parameters,docs:{...Top.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'top',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true\n  }\n}",...Top.parameters?.docs?.source}}},Right.parameters={...Right.parameters,docs:{...Right.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'right',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true\n  }\n}",...Right.parameters?.docs?.source}}},Bottom.parameters={...Bottom.parameters,docs:{...Bottom.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'bottom',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true\n  }\n}",...Bottom.parameters?.docs?.source}}},Left.parameters={...Left.parameters,docs:{...Left.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true\n  }\n}",...Left.parameters?.docs?.source}}},SmallTop.parameters={...SmallTop.parameters,docs:{...SmallTop.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'top',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true,\n    size: 'sm'\n  }\n}",...SmallTop.parameters?.docs?.source}}},SmallRight.parameters={...SmallRight.parameters,docs:{...SmallRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'right',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true,\n    size: 'sm'\n  }\n}",...SmallRight.parameters?.docs?.source}}},SmallBottom.parameters={...SmallBottom.parameters,docs:{...SmallBottom.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'bottom',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true,\n    size: 'sm'\n  }\n}",...SmallBottom.parameters?.docs?.source}}},SmallLeft.parameters={...SmallLeft.parameters,docs:{...SmallLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true,\n    size: 'sm'\n  }\n}",...SmallLeft.parameters?.docs?.source}}},LargeTop.parameters={...LargeTop.parameters,docs:{...LargeTop.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'top',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true,\n    size: 'lg'\n  }\n}",...LargeTop.parameters?.docs?.source}}},LargeRight.parameters={...LargeRight.parameters,docs:{...LargeRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'right',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true,\n    size: 'lg'\n  }\n}",...LargeRight.parameters?.docs?.source}}},LargeBottom.parameters={...LargeBottom.parameters,docs:{...LargeBottom.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'bottom',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true,\n    size: 'lg'\n  }\n}",...LargeBottom.parameters?.docs?.source}}},LargeLeft.parameters={...LargeLeft.parameters,docs:{...LargeLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true,\n    size: 'lg'\n  }\n}",...LargeLeft.parameters?.docs?.source}}},LargeText.parameters={...LargeText.parameters,docs:{...LargeText.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    Component: 'Text',\n    children: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    isOpen: true,\n    size: 'lg'\n  }\n}",...LargeText.parameters?.docs?.source}}};const __namedExportsOrder=["Top","Right","Bottom","Left","SmallTop","SmallRight","SmallBottom","SmallLeft","LargeTop","LargeRight","LargeBottom","LargeLeft","LargeText"]},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);