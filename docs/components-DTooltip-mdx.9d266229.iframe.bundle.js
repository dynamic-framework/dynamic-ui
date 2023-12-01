"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[3392,203],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/DTooltip.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.5.1_@types+react-dom@18.2.14_@types+react@18.2.31_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_src_components_config__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/config.ts"),_DTooltip_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./stories/components/DTooltip.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2"},(0,_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tooltip",children:"Tooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Tooltip Component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To understand in more detail the aspects covered by this component, review the following documentation:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://floating-ui.com/docs/react",target:"_blank",rel:"nofollow noopener noreferrer",children:"Floating UI"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.UG,{children:`\n\n  | Variable                                   | Type             | Description                   |\n  |--------------------------------------------|------------------|-------------------------------|\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tooltip-bg\`               | css color unit   | Background and arrow color    |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tooltip-border-radius\`    | css length unit  | Border radius                 |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tooltip-color\`            | css color unit   | Text color                    |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tooltip-font-size\`        | css length unit  | Text font size                |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}tooltip-padding\`          | css length unit  | Padding                       |\n\n  `}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_DTooltip_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_DTooltip_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/config.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_o:function(){return ICON_FAMILY_CLASS},d2:function(){return ALERT_TYPE_ICON},k2:function(){return PREFIX_BS},yM:function(){return ICON_FAMILY_PREFIX}});const PREFIX_BS="bs-",ICON_FAMILY_CLASS="bi",ICON_FAMILY_PREFIX="bi-",ALERT_TYPE_ICON={warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",dark:"info-circle",light:"info-circle"}},"./stories/components/DTooltip.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bottom:function(){return Bottom},LargeBottom:function(){return LargeBottom},LargeLeft:function(){return LargeLeft},LargeRight:function(){return LargeRight},LargeText:function(){return LargeText},LargeTop:function(){return LargeTop},Left:function(){return Left},Right:function(){return Right},SmallBottom:function(){return SmallBottom},SmallLeft:function(){return SmallLeft},SmallRight:function(){return SmallRight},SmallTop:function(){return SmallTop},Top:function(){return Top},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DTooltip_stories}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),floating_ui_react=__webpack_require__("../../node_modules/.pnpm/@floating-ui+react@0.26.1_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),floating_ui_dom=__webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),floating_ui_core=__webpack_require__("../../node_modules/.pnpm/@floating-ui+core@1.5.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),floating_ui_react_dom=__webpack_require__("../../node_modules/.pnpm/@floating-ui+react-dom@2.0.2_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),config=__webpack_require__("./src/components/config.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const TOOLTIP_FONT_SIZE_BY_SIZE={sm:`var(--${config.k2}ref-fs-small)`,default:`var(--${config.k2}body-font-size)`,lg:`var(--${config.k2}ref-fs-6)`};function DTooltip({classNameContainer:classNameContainer,className:className,style:style,offSet:offSet=6,padding:padding,withFocus:withFocus=!1,withClick:withClick=!1,withHover:withHover=!0,open:open=!1,placement:placement="top",size:size,Component:Component,children:children}){const[isOpen,setIsOpen]=(0,react.useState)(open),styleVariables=(0,react.useMemo)((()=>{const defaultFontSize=size?TOOLTIP_FONT_SIZE_BY_SIZE[size]:TOOLTIP_FONT_SIZE_BY_SIZE.default;return{...style,background:`var(--${config.k2}tooltip-bg, var(--${config.k2}tooltip-component-bg, var(--${config.k2}secondary)))`,borderRadius:`var(--${config.k2}tooltip-border-radius, var(--${config.k2}tooltip-component-border-radius, var(--${config.k2}border-radius)))`,color:`var(--${config.k2}tooltip-color, var(--${config.k2}tooltip-component-color, var(--${config.k2}white)))`,fontSize:`var(--${config.k2}tooltip-font-size, var(--${config.k2}tooltip-component-font-size, ${defaultFontSize}))`,padding:`var(--${config.k2}tooltip-padding, var(--${config.k2}tooltip-component-padding, var(--${config.k2}ref-spacer-2)))`,maxWidth:`var(--${config.k2}tooltip-max-width, var(--${config.k2}tooltip-component-max-width, 300px))`}}),[size,style]),arrowRef=(0,react.useRef)(null),{refs:refs,context:context,floatingStyles:floatingStyles}=(0,floating_ui_react.YF)({open:isOpen,onOpenChange:setIsOpen,placement:placement,whileElementsMounted:floating_ui_dom.Me,middleware:[(0,floating_ui_core.cv)(offSet),(0,floating_ui_core.RR)(),(0,floating_ui_core.uY)({padding:padding}),(0,floating_ui_react_dom.x7)({element:arrowRef})]}),hover=(0,floating_ui_react.XI)(context,{move:!1}),focus=(0,floating_ui_react.KK)(context),dismiss=(0,floating_ui_react.bQ)(context),click=(0,floating_ui_react.eS)(context),role=(0,floating_ui_react.qs)(context,{role:"tooltip"}),{getReferenceProps:getReferenceProps,getFloatingProps:getFloatingProps}=(0,floating_ui_react.NI)([withHover?hover:void 0,withClick?click:void 0,withFocus?focus:void 0,dismiss,role]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:className,ref:refs.setReference,...getReferenceProps(),children:Component}),(0,jsx_runtime.jsx)(floating_ui_react.ll,{children:isOpen&&(0,jsx_runtime.jsxs)("div",{className:classNameContainer,ref:refs.setFloating,style:{...floatingStyles,...styleVariables},...getFloatingProps(),children:[(0,jsx_runtime.jsx)(floating_ui_react.Y$,{ref:arrowRef,context:context,style:{fill:styleVariables.background},width:8,height:4}),children]})})]})}try{DTooltip.displayName="DTooltip",DTooltip.__docgenInfo={description:"",displayName:"DTooltip",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},classNameContainer:{defaultValue:null,description:"",name:"classNameContainer",required:!1,type:{name:"string | undefined"}},offSet:{defaultValue:{value:"ARROW_HEIGHT + GAP"},description:"",name:"offSet",required:!1,type:{name:"number | undefined"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number | undefined"}},withHover:{defaultValue:{value:"true"},description:"",name:"withHover",required:!1,type:{name:"boolean | undefined"}},withFocus:{defaultValue:{value:"false"},description:"",name:"withFocus",required:!1,type:{name:"boolean | undefined"}},withClick:{defaultValue:{value:"false"},description:"",name:"withClick",required:!1,type:{name:"boolean | undefined"}},open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DTooltip/DTooltip.tsx#DTooltip"]={docgenInfo:DTooltip.__docgenInfo,name:"DTooltip",path:"src/components/DTooltip/DTooltip.tsx#DTooltip"})}catch(__react_docgen_typescript_loader_error){}var DTooltip_stories={title:"Design System/Components/Tooltip",component:DTooltip,argTypes:{placement:{control:"select",options:["top","left","bottom","right"],defaultValue:"bottom"},withHover:{type:"boolean",control:"boolean",defaultValue:!0},withClick:{type:"boolean",control:"boolean",defaultValue:!1},withFocus:{type:"boolean",control:"boolean",defaultValue:!1},classNameContainer:{type:"string",control:"text"},className:{type:"string",control:"text"},Component:{defaultValue:"Link",type:"string",control:"text"},children:{control:"text",type:"string"},offSet:{type:"number"},padding:{type:"number"}}};const Top={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0}},Right={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0}},Bottom={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0}},Left={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0}},SmallTop={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0,size:"sm"}},SmallRight={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0,size:"sm"}},SmallBottom={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0,size:"sm"}},SmallLeft={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0,size:"sm"}},LargeTop={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0,size:"lg"}},LargeRight={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0,size:"lg"}},LargeBottom={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0,size:"lg"}},LargeLeft={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0,size:"lg"}},LargeText={args:{placement:"left",Component:"Text",children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",withHover:!0,withClick:!1,withFocus:!1,open:!0,size:"lg"}};Top.parameters={...Top.parameters,docs:{...Top.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'top',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true\n  }\n}",...Top.parameters?.docs?.source}}},Right.parameters={...Right.parameters,docs:{...Right.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'right',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true\n  }\n}",...Right.parameters?.docs?.source}}},Bottom.parameters={...Bottom.parameters,docs:{...Bottom.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'bottom',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true\n  }\n}",...Bottom.parameters?.docs?.source}}},Left.parameters={...Left.parameters,docs:{...Left.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true\n  }\n}",...Left.parameters?.docs?.source}}},SmallTop.parameters={...SmallTop.parameters,docs:{...SmallTop.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'top',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true,\n    size: 'sm'\n  }\n}",...SmallTop.parameters?.docs?.source}}},SmallRight.parameters={...SmallRight.parameters,docs:{...SmallRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'right',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true,\n    size: 'sm'\n  }\n}",...SmallRight.parameters?.docs?.source}}},SmallBottom.parameters={...SmallBottom.parameters,docs:{...SmallBottom.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'bottom',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true,\n    size: 'sm'\n  }\n}",...SmallBottom.parameters?.docs?.source}}},SmallLeft.parameters={...SmallLeft.parameters,docs:{...SmallLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true,\n    size: 'sm'\n  }\n}",...SmallLeft.parameters?.docs?.source}}},LargeTop.parameters={...LargeTop.parameters,docs:{...LargeTop.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'top',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true,\n    size: 'lg'\n  }\n}",...LargeTop.parameters?.docs?.source}}},LargeRight.parameters={...LargeRight.parameters,docs:{...LargeRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'right',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true,\n    size: 'lg'\n  }\n}",...LargeRight.parameters?.docs?.source}}},LargeBottom.parameters={...LargeBottom.parameters,docs:{...LargeBottom.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'bottom',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true,\n    size: 'lg'\n  }\n}",...LargeBottom.parameters?.docs?.source}}},LargeLeft.parameters={...LargeLeft.parameters,docs:{...LargeLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    Component: 'Text',\n    children: 'Lorem Ipsum',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true,\n    size: 'lg'\n  }\n}",...LargeLeft.parameters?.docs?.source}}},LargeText.parameters={...LargeText.parameters,docs:{...LargeText.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    Component: 'Text',\n    children: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',\n    withHover: true,\n    withClick: false,\n    withFocus: false,\n    open: true,\n    size: 'lg'\n  }\n}",...LargeText.parameters?.docs?.source}}};const __namedExportsOrder=["Top","Right","Bottom","Left","SmallTop","SmallRight","SmallBottom","SmallLeft","LargeTop","LargeRight","LargeBottom","LargeLeft","LargeText"]}}]);