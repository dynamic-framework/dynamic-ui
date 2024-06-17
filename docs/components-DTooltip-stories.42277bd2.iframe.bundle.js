"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[203],{"./src/components/config.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_o:function(){return ICON_FAMILY_CLASS},k2:function(){return PREFIX_BS},yM:function(){return ICON_FAMILY_PREFIX}});const PREFIX_BS="bs-",ICON_FAMILY_CLASS="bi",ICON_FAMILY_PREFIX="bi-"},"./stories/components/DTooltip.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bottom:function(){return Bottom},LargeBottom:function(){return LargeBottom},LargeLeft:function(){return LargeLeft},LargeRight:function(){return LargeRight},LargeText:function(){return LargeText},LargeTop:function(){return LargeTop},Left:function(){return Left},Right:function(){return Right},SmallBottom:function(){return SmallBottom},SmallLeft:function(){return SmallLeft},SmallRight:function(){return SmallRight},SmallTop:function(){return SmallTop},Top:function(){return Top},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DTooltip_stories}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),floating_ui_react=__webpack_require__("../../node_modules/.pnpm/@floating-ui+react@0.26.1_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),floating_ui_dom=__webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),floating_ui_core=__webpack_require__("../../node_modules/.pnpm/@floating-ui+core@1.5.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),floating_ui_react_dom=__webpack_require__("../../node_modules/.pnpm/@floating-ui+react-dom@2.0.2_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DTooltip({className:className,childrenClassName:childrenClassName,style:style,offSet:offSet=6,padding:padding,withFocus:withFocus=!1,withClick:withClick=!1,withHover:withHover=!0,open:open=!1,theme:theme="primary",placement:placement="top",size:size,Component:Component,children:children}){const[isOpen,setIsOpen]=(0,react.useState)(open),arrowRef=(0,react.useRef)(null),{refs:refs,context:context,floatingStyles:floatingStyles}=(0,floating_ui_react.YF)({open:isOpen,onOpenChange:setIsOpen,placement:placement,whileElementsMounted:floating_ui_dom.Me,middleware:[(0,floating_ui_core.cv)(offSet),(0,floating_ui_core.RR)(),(0,floating_ui_core.uY)({padding:padding}),(0,floating_ui_react_dom.x7)({element:arrowRef})]}),hover=(0,floating_ui_react.XI)(context,{move:!1}),focus=(0,floating_ui_react.KK)(context),dismiss=(0,floating_ui_react.bQ)(context,{ancestorScroll:!0}),click=(0,floating_ui_react.eS)(context),role=(0,floating_ui_react.qs)(context,{role:"tooltip"}),{getReferenceProps:getReferenceProps,getFloatingProps:getFloatingProps}=(0,floating_ui_react.NI)([withHover?hover:void 0,withClick?click:void 0,withFocus?focus:void 0,dismiss,role]),generateClasses=(0,react.useMemo)((()=>({"tooltip show":!0,[`tooltip-${size}`]:!!size,[`tooltip-${theme}`]:!!theme,...className&&{[className]:!0}})),[size,theme,className]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:childrenClassName,ref:refs.setReference,...getReferenceProps(),children:Component}),(0,jsx_runtime.jsx)(floating_ui_react.ll,{children:isOpen&&(0,jsx_runtime.jsxs)("div",{className:classnames_default()(generateClasses),ref:refs.setFloating,style:{...floatingStyles,...style},...getFloatingProps(),children:[(0,jsx_runtime.jsx)(floating_ui_react.Y$,{ref:arrowRef,context:context,width:8,height:4}),(0,jsx_runtime.jsx)("div",{className:"tooltip-inner",children:children})]})})]})}try{DTooltip.displayName="DTooltip",DTooltip.__docgenInfo={description:"",displayName:"DTooltip",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},childrenClassName:{defaultValue:null,description:"",name:"childrenClassName",required:!1,type:{name:"string | undefined"}},offSet:{defaultValue:{value:"ARROW_HEIGHT + GAP"},description:"",name:"offSet",required:!1,type:{name:"number | undefined"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number | undefined"}},withHover:{defaultValue:{value:"true"},description:"",name:"withHover",required:!1,type:{name:"boolean | undefined"}},withFocus:{defaultValue:{value:"false"},description:"",name:"withFocus",required:!1,type:{name:"boolean | undefined"}},withClick:{defaultValue:{value:"false"},description:"",name:"withClick",required:!1,type:{name:"boolean | undefined"}},open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean | undefined"}},theme:{defaultValue:{value:"primary"},description:"",name:"theme",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DTooltip/DTooltip.tsx#DTooltip"]={docgenInfo:DTooltip.__docgenInfo,name:"DTooltip",path:"src/components/DTooltip/DTooltip.tsx#DTooltip"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./stories/config/constants.ts"),config=__webpack_require__("./src/components/config.ts");var DTooltip_stories={title:"Design System/Components/Tooltip",component:DTooltip,parameters:{docs:{description:{component:`\n![Shield Badge](https://img.shields.io/badge/Abstraction%20Component-4848b7)\n\nTo understand in more detail the aspects covered by this component, review the following documentation:\n\n+ [Floating UI](https://floating-ui.com/docs/react)\n\n## CSS Variables\nThe Bootstrap documentation provides details on the default [Tooltip CSS Variables](https://getbootstrap.com/docs/5.3/components/tooltips/#css)\n\n| Variable                           | Class    | Type            | Description                  |\n|------------------------------------|----------|-----------------|------------------------------|\n| --${config.k2}tooltip-sm-font-size | .tooltip | css length unit | Small tooltip text font size |\n| --${config.k2}tooltip-lg-font-size | .tooltip | css length unit | Small tooltip text font size |\n        `}}},argTypes:{placement:{control:"select",options:["top","left","bottom","right"],defaultValue:"bottom"},withHover:{type:"boolean",control:"boolean",defaultValue:!0},withClick:{type:"boolean",control:"boolean",defaultValue:!1},open:{type:"boolean",control:"boolean",defaultValue:!1},withFocus:{type:"boolean",control:"boolean",defaultValue:!1},className:{type:"string",control:"text"},childrenClassName:{type:"string",control:"text"},theme:{control:"select",type:"string",options:constants.yU,table:{defaultValue:{summary:"primary"}},description:"The theme to use."},Component:{defaultValue:"Link",type:"string",control:"text"},children:{control:"text",type:"string"},offSet:{type:"number"},padding:{type:"number"}},tags:["autodocs"]};const Top={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0,theme:"secondary"}},Right={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,theme:"secondary"}},Bottom={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,theme:"secondary"}},Left={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,theme:"secondary"}},SmallTop={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",theme:"secondary"}},SmallRight={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",theme:"secondary"}},SmallBottom={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",theme:"secondary"}},SmallLeft={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",theme:"secondary"}},LargeTop={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",theme:"secondary"}},LargeRight={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",theme:"secondary"}},LargeBottom={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",theme:"secondary"}},LargeLeft={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",theme:"secondary"}},LargeText={args:{placement:"left",Component:"Text",children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",theme:"secondary"}};Top.parameters={...Top.parameters,docs:{...Top.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'top',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true,\n    theme: 'secondary'\n  }\n}",...Top.parameters?.docs?.source}}},Right.parameters={...Right.parameters,docs:{...Right.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'right',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: false,\n    theme: 'secondary'\n  }\n}",...Right.parameters?.docs?.source}}},Bottom.parameters={...Bottom.parameters,docs:{...Bottom.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'bottom',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: false,\n    theme: 'secondary'\n  }\n}",...Bottom.parameters?.docs?.source}}},Left.parameters={...Left.parameters,docs:{...Left.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: false,\n    theme: 'secondary'\n  }\n}",...Left.parameters?.docs?.source}}},SmallTop.parameters={...SmallTop.parameters,docs:{...SmallTop.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'top',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: false,\n    size: 'sm',\n    theme: 'secondary'\n  }\n}",...SmallTop.parameters?.docs?.source}}},SmallRight.parameters={...SmallRight.parameters,docs:{...SmallRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'right',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: false,\n    size: 'sm',\n    theme: 'secondary'\n  }\n}",...SmallRight.parameters?.docs?.source}}},SmallBottom.parameters={...SmallBottom.parameters,docs:{...SmallBottom.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'bottom',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: false,\n    size: 'sm',\n    theme: 'secondary'\n  }\n}",...SmallBottom.parameters?.docs?.source}}},SmallLeft.parameters={...SmallLeft.parameters,docs:{...SmallLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: false,\n    size: 'sm',\n    theme: 'secondary'\n  }\n}",...SmallLeft.parameters?.docs?.source}}},LargeTop.parameters={...LargeTop.parameters,docs:{...LargeTop.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'top',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: false,\n    size: 'lg',\n    theme: 'secondary'\n  }\n}",...LargeTop.parameters?.docs?.source}}},LargeRight.parameters={...LargeRight.parameters,docs:{...LargeRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'right',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: false,\n    size: 'lg',\n    theme: 'secondary'\n  }\n}",...LargeRight.parameters?.docs?.source}}},LargeBottom.parameters={...LargeBottom.parameters,docs:{...LargeBottom.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'bottom',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: false,\n    size: 'lg',\n    theme: 'secondary'\n  }\n}",...LargeBottom.parameters?.docs?.source}}},LargeLeft.parameters={...LargeLeft.parameters,docs:{...LargeLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: false,\n    size: 'lg',\n    theme: 'secondary'\n  }\n}",...LargeLeft.parameters?.docs?.source}}},LargeText.parameters={...LargeText.parameters,docs:{...LargeText.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    Component: 'Text',\n    children: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: false,\n    size: 'lg',\n    theme: 'secondary'\n  }\n}",...LargeText.parameters?.docs?.source}}};const __namedExportsOrder=["Top","Right","Bottom","Left","SmallTop","SmallRight","SmallBottom","SmallLeft","LargeTop","LargeRight","LargeBottom","LargeLeft","LargeText"]}}]);