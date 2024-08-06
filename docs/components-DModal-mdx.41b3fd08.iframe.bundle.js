"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[9765,2852],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/DModal.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_encoding_0_1_13_rea_iam5qrtz4ql5qbtbejvvuypneu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.5.1_@types+react-dom@18.2.14_@types+react@18.2.31_encoding@0.1.13_react-d_l35q4xusgbdqni7di6kmyf4vqa/node_modules/@storybook/blocks/dist/index.mjs"),_DModal_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./stories/components/DModal.stories.tsx"),_src_components_config__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/config.ts"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/DAlert/index.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",a:"a",h2:"h2"},(0,_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_encoding_0_1_13_rea_iam5qrtz4ql5qbtbejvvuypneu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_DModal_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"modal",children:"Modal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This section provides guidance specifically for using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DModal"})," in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"inline"})," scenarios."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Z,{soft:!0,type:"warning",className:"py-1 mb-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To achieve the behavior of a modal it is necessary to use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DContextProvider"})})," and the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useDPortalContext"})})," hook.\nFor detailed guidance on the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"correct usage"})," of modals, please refer to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/design-system-patterns-modal--docs",children:"Modal pattern section"})," in our documentation."]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.UG,{children:`\n| Variable                               | Class  | Type            | Description                  |\n|----------------------------------------|--------|-----------------|------------------------------|\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_6__.k2}modal-header-gap         | .modal | css length unit | Space between header items   |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_6__.k2}modal-footer-padding     | .modal | css length unit | Footer padding               |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_6__.k2}modal-separator-margin-x | .modal | css length unit | Separator horizontal padding |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_6__.k2}modal-separator-height   | .modal | css length unit | Separator height (size)      |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_6__.k2}modal-separator-bg       | .modal | css color unit  | Separator background (color) |\n  `}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_DModal_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.ZX,{of:_DModal_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_encoding_0_1_13_rea_iam5qrtz4ql5qbtbejvvuypneu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/DAlert/DAlert.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return DAlert}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_DIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DIcon/index.ts"),_contexts__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/contexts/DContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DAlert({theme:theme="success",icon:iconProp,iconFamilyClass:iconFamilyClass,iconFamilyPrefix:iconFamilyPrefix,iconMaterialStyle:iconMaterialStyle=!1,iconClose:iconCloseProp,iconCloseFamilyClass:iconCloseFamilyClass,iconCloseFamilyPrefix:iconCloseFamilyPrefix,iconCloseMaterialStyle:iconCloseMaterialStyle=!1,showClose:showClose,onClose:onClose,children:children,id:id,className:className,style:style}){const{iconMap:{alert:alert,xLg:xLg}}=(0,_contexts__WEBPACK_IMPORTED_MODULE_3__.Fg)(),icon=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>iconProp||alert[theme]),[alert,iconProp,theme]),iconClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>iconCloseProp||xLg),[iconCloseProp,xLg]),generateClasses=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({alert:!0,[`alert-${theme}`]:!0,"fade show":!!showClose,...className&&{[className]:!0}})),[theme,showClose,className]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(generateClasses),style:style,role:"alert",id:id,children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DIcon__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"alert-icon",icon:icon,familyClass:iconFamilyClass,familyPrefix:iconFamilyPrefix,materialStyle:iconMaterialStyle}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"alert-text",children:children}),showClose&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",className:"d-close","aria-label":"Close",onClick:onClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DIcon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:iconClose,familyClass:iconCloseFamilyClass,familyPrefix:iconCloseFamilyPrefix,materialStyle:iconCloseMaterialStyle})})]})}DAlert.displayName="DAlert";try{DAlert.displayName="DAlert",DAlert.__docgenInfo={description:"",displayName:"DAlert",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},theme:{defaultValue:{value:"success"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"primary"'},{value:'"secondary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:{value:"false"},description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},showClose:{defaultValue:null,description:"",name:"showClose",required:!1,type:{name:"boolean | undefined"}},iconClose:{defaultValue:null,description:"",name:"iconClose",required:!1,type:{name:"string | undefined"}},iconCloseFamilyClass:{defaultValue:null,description:"",name:"iconCloseFamilyClass",required:!1,type:{name:"string | undefined"}},iconCloseFamilyPrefix:{defaultValue:null,description:"",name:"iconCloseFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconCloseMaterialStyle:{defaultValue:{value:"false"},description:"",name:"iconCloseMaterialStyle",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DAlert/DAlert.tsx#DAlert"]={docgenInfo:DAlert.__docgenInfo,name:"DAlert",path:"src/components/DAlert/DAlert.tsx#DAlert"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DAlert/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _DAlert__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DAlert/DAlert.tsx");__webpack_exports__.Z=_DAlert__WEBPACK_IMPORTED_MODULE_0__.Z},"./stories/components/DModal.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActionsPlacementEnd:function(){return ActionsPlacementEnd},ActionsPlacementStart:function(){return ActionsPlacementStart},CloseIcon:function(){return CloseIcon},Default:function(){return Default},MaterialStyleCloseIcon:function(){return MaterialStyleCloseIcon},OnlyBody:function(){return OnlyBody},WithoutActions:function(){return WithoutActions},WithoutCancelX:function(){return WithoutCancelX},WithoutHeader:function(){return WithoutHeader},__namedExportsOrder:function(){return __namedExportsOrder}});var _src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/contexts/DContext.tsx"),_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/DModal/DModal.tsx"),_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/DButton/index.ts"),_config_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./stories/config/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const config={title:"Design System/Components/Modal",component:_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{layout:"fullscreen"},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},name:{control:"text",type:{name:"string",required:!0}},staticBackdrop:{control:"boolean",type:"boolean"},scrollable:{control:"boolean",type:"boolean"},centered:{control:"boolean",type:"boolean"},fullScreen:{control:"boolean",type:"boolean"},fullScreenFrom:{control:"select",type:"string",options:["sm","md","lg","xl","xxl"]},size:{control:"radio",type:"string",options:["sm","lg","xl"]}}};__webpack_exports__.default=config;const Default={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{showCloseButton:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},CloseIcon={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{icon:"x-circle",showCloseButton:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},ActionsPlacementStart={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{showCloseButton:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{actionPlacement:"start",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},ActionsPlacementEnd={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{showCloseButton:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{actionPlacement:"end",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},WithoutHeader={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},WithoutActions={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{showCloseButton:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Modal body"})})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},OnlyBody={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{showCloseButton:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Modal body"})})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},WithoutCancelX={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},MaterialStyleCloseIcon={parameters:{docs:{canvas:{sourceState:"shown"}}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.oW,{..._config_constants__WEBPACK_IMPORTED_MODULE_4__.Hr,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{showCloseButton:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]})}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header showCloseButton>\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p>Modal body</p>\n      </DModal.Body>\n      <DModal.Footer>\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...Default.parameters?.docs?.source}}},CloseIcon.parameters={...CloseIcon.parameters,docs:{...CloseIcon.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header icon="x-circle" showCloseButton>\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p>Modal body</p>\n      </DModal.Body>\n      <DModal.Footer>\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...CloseIcon.parameters?.docs?.source}}},ActionsPlacementStart.parameters={...ActionsPlacementStart.parameters,docs:{...ActionsPlacementStart.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header showCloseButton>\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p>Modal body</p>\n      </DModal.Body>\n      <DModal.Footer actionPlacement="start">\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...ActionsPlacementStart.parameters?.docs?.source}}},ActionsPlacementEnd.parameters={...ActionsPlacementEnd.parameters,docs:{...ActionsPlacementEnd.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header showCloseButton>\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p>Modal body</p>\n      </DModal.Body>\n      <DModal.Footer actionPlacement="end">\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...ActionsPlacementEnd.parameters?.docs?.source}}},WithoutHeader.parameters={...WithoutHeader.parameters,docs:{...WithoutHeader.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Body>\n        <p>Modal body</p>\n      </DModal.Body>\n      <DModal.Footer>\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...WithoutHeader.parameters?.docs?.source}}},WithoutActions.parameters={...WithoutActions.parameters,docs:{...WithoutActions.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    height: '400px'\n  }} className=\"position-relative\">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header showCloseButton>\n        <h5 className=\"fw-bold\">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p>Modal body</p>\n      </DModal.Body>\n    </DModal>,\n  args: {\n    name: 'exampleModal',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: 'sm',\n    className: 'd-block'\n  }\n}",...WithoutActions.parameters?.docs?.source}}},OnlyBody.parameters={...OnlyBody.parameters,docs:{...OnlyBody.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    height: '400px'\n  }} className=\"position-relative\">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header showCloseButton />\n      <DModal.Body>\n        <p>Modal body</p>\n      </DModal.Body>\n    </DModal>,\n  args: {\n    name: 'exampleModal',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: 'sm',\n    className: 'd-block'\n  }\n}",...OnlyBody.parameters?.docs?.source}}},WithoutCancelX.parameters={...WithoutCancelX.parameters,docs:{...WithoutCancelX.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header>\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p>Modal body</p>\n      </DModal.Body>\n      <DModal.Footer>\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...WithoutCancelX.parameters?.docs?.source}}},MaterialStyleCloseIcon.parameters={...MaterialStyleCloseIcon.parameters,docs:{...MaterialStyleCloseIcon.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: \'shown\'\n      }\n    }\n  },\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>\n      <DModal {...args}>\n        <DModal.Header showCloseButton>\n          <h5 className="fw-bold">Do you want to reject the offer?</h5>\n        </DModal.Header>\n        <DModal.Body>\n          <p>Modal body</p>\n        </DModal.Body>\n        <DModal.Footer>\n          <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n          <DButton text="ok" className="d-grid" pill />\n        </DModal.Footer>\n      </DModal>\n    </DContextProvider>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...MaterialStyleCloseIcon.parameters?.docs?.source},description:{story:"To use material symbols or any other material symbols style icon suite you can\nuse a `DContextProvider` to achieve global configuration or use the same configuration\nvariables on the `DModal`, in this case, for the close icon on the\n`DModal.Header` or `DModalHeader`.",...MaterialStyleCloseIcon.parameters?.docs?.description}}};const __namedExportsOrder=["Default","CloseIcon","ActionsPlacementStart","ActionsPlacementEnd","WithoutHeader","WithoutActions","OnlyBody","WithoutCancelX","MaterialStyleCloseIcon"];try{MaterialStyleCloseIcon.displayName="MaterialStyleCloseIcon",MaterialStyleCloseIcon.__docgenInfo={description:"To use material symbols or any other material symbols style icon suite you can\nuse a `DContextProvider` to achieve global configuration or use the same configuration\nvariables on the `DModal`, in this case, for the close icon on the\n`DModal.Header` or `DModalHeader`.",displayName:"MaterialStyleCloseIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/DModal.stories.tsx#MaterialStyleCloseIcon"]={docgenInfo:MaterialStyleCloseIcon.__docgenInfo,name:"MaterialStyleCloseIcon",path:"stories/components/DModal.stories.tsx#MaterialStyleCloseIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);