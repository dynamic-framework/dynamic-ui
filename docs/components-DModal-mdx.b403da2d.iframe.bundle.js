"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[9765],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/DModal.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.5.1_@types+react-dom@18.2.14_@types+react@18.2.31_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_src_components_config__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/config.ts"),_DModal_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./stories/components/DModal.stories.tsx"),_hooks_useModalContext_stories__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./stories/hooks/useModalContext.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",h3:"h3",code:"code"},(0,_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"modal",children:"Modal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.UG,{children:`\n\n  | Variable                                     | Type              | Description                                 |\n  |----------------------------------------------|-------------------|---------------------------------------------|\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}modal-header-gap\`           | css length unit   | Space between header items                  |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}modal-body-padding\`         | css length unit   | Body padding                                |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}modal-footer-padding\`       | css length unit   | Footer padding                              |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}modal-separator-margin-x\`   | css length unit   | Separator horizontal padding                |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}modal-separator-height\`     | css length unit   | Separator height (size)                     |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}modal-separator-bg\`         | css color unit    | Separator background (color)                |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}modal-fade-transform\`       | css transform     | Fade transform animation                    |\n\n  `}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_DModal_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_DModal_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{of:_hooks_useModalContext_stories__WEBPACK_IMPORTED_MODULE_6__.useModalContext}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"context-setup---type-with-all-modal-payloads",children:"Context Setup - type with all modal payloads`"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{code:"\ntype ModalPayload = {\n  example: {\n    description: string;\n  };\n};\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h3,{id:"context-setup---render-of-bootstraptsx",children:["Context Setup - render of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Bootstrap.tsx"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{code:'\n<DModalContextProvider<ModalPayload>\n  portalName="examplePortal"\n  availableModals={{\n    example: ExampleModal,\n  }}\n>\n  <ExampleChildren />\n</DModalContextProvider>\n  '}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h3,{id:"modal-definition---render-of-examplemodaltsx",children:["Modal Definition - render of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ExampleModal.tsx"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{code:'\n<DModal\n  name="example"\n  centered\n  staticBackdrop\n  className="d-block"\n>\n  <DModal.Header onClose={closeModal} showCloseButton>\n    <h5 className="fw-bold">Do you want to reject the offer?</h5>\n  </DModal.Header>\n  <DModal.Body className="py-3 px-5">\n    <p>Modal body</p>\n    <small>{payload.description}</small>\n  </DModal.Body>\n  <DModal.Footer>\n    <DButton\n      text="cancel"\n      theme="secondary"\n      variant="outline"\n      className="d-grid"\n      pill\n      onClick={() => closeModal()}\n    />\n    <DButton text="ok" className="d-grid" pill />\n  </DModal.Footer>\n</DModal>\n  '}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h3,{id:"modal-usage-render-of-apptsx",children:["Modal Usage render of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"App.tsx"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{code:"\n<DButton text=\"Open Modal\" onClick={() => openModal('example')} />\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./stories/components/DModal.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActionsPlacementEnd:function(){return ActionsPlacementEnd},ActionsPlacementStart:function(){return ActionsPlacementStart},CloseIcon:function(){return CloseIcon},Default:function(){return Default},MaterialStyleCloseIcon:function(){return MaterialStyleCloseIcon},OnlyBody:function(){return OnlyBody},WithoutActions:function(){return WithoutActions},WithoutCancelX:function(){return WithoutCancelX},WithoutHeader:function(){return WithoutHeader},__namedExportsOrder:function(){return __namedExportsOrder}});var _src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/DModal/DModal.tsx"),_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/DButton/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const config={title:"Design System/Patterns/Modal",component:_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{name:{control:"text",type:{name:"string",required:!0}},staticBackdrop:{control:"boolean",type:"boolean"},scrollable:{control:"boolean",type:"boolean"},centered:{control:"boolean",type:"boolean"},fullScreen:{control:"boolean",type:"boolean"},fullScreenFrom:{control:"select",type:"string",options:["sm","md","lg","xl","xxl"]},size:{control:"radio",type:"string",options:["sm","lg","xl"]}},parameters:{layout:"fullscreen"}};__webpack_exports__.default=config;const Default={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{showCloseButton:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},CloseIcon={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{icon:"x-circle",showCloseButton:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},MaterialStyleCloseIcon={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{icon:"disabled_by_default",iconFamilyClass:"material-symbols-outlined",materialStyle:!0,showCloseButton:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},ActionsPlacementStart={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{showCloseButton:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{actionPlacement:"start",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},ActionsPlacementEnd={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{showCloseButton:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{actionPlacement:"end",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},WithoutHeader={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},WithoutActions={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{showCloseButton:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},OnlyBody={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{showCloseButton:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},WithoutCancelX={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Header,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"py-3 px-5",children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_DModal_DModal__WEBPACK_IMPORTED_MODULE_1__.Z.Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"ok",className:"d-grid",pill:!0})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header showCloseButton>\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p className="py-3 px-5">Modal body</p>\n      </DModal.Body>\n      <DModal.Footer>\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...Default.parameters?.docs?.source}}},CloseIcon.parameters={...CloseIcon.parameters,docs:{...CloseIcon.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header icon="x-circle" showCloseButton>\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p className="py-3 px-5">Modal body</p>\n      </DModal.Body>\n      <DModal.Footer>\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...CloseIcon.parameters?.docs?.source}}},MaterialStyleCloseIcon.parameters={...MaterialStyleCloseIcon.parameters,docs:{...MaterialStyleCloseIcon.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header icon="disabled_by_default" iconFamilyClass="material-symbols-outlined" materialStyle showCloseButton>\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p className="py-3 px-5">Modal body</p>\n      </DModal.Body>\n      <DModal.Footer>\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...MaterialStyleCloseIcon.parameters?.docs?.source}}},ActionsPlacementStart.parameters={...ActionsPlacementStart.parameters,docs:{...ActionsPlacementStart.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header showCloseButton>\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p className="py-3 px-5">Modal body</p>\n      </DModal.Body>\n      <DModal.Footer actionPlacement="start">\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...ActionsPlacementStart.parameters?.docs?.source}}},ActionsPlacementEnd.parameters={...ActionsPlacementEnd.parameters,docs:{...ActionsPlacementEnd.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header showCloseButton>\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p className="py-3 px-5">Modal body</p>\n      </DModal.Body>\n      <DModal.Footer actionPlacement="end">\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...ActionsPlacementEnd.parameters?.docs?.source}}},WithoutHeader.parameters={...WithoutHeader.parameters,docs:{...WithoutHeader.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Body>\n        <p className="py-3 px-5">Modal body</p>\n      </DModal.Body>\n      <DModal.Footer>\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...WithoutHeader.parameters?.docs?.source}}},WithoutActions.parameters={...WithoutActions.parameters,docs:{...WithoutActions.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    height: '400px'\n  }} className=\"position-relative\">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header showCloseButton>\n        <h5 className=\"fw-bold\">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p className=\"py-3 px-5\">Modal body</p>\n      </DModal.Body>\n    </DModal>,\n  args: {\n    name: 'exampleModal',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: 'sm',\n    className: 'd-block'\n  }\n}",...WithoutActions.parameters?.docs?.source}}},OnlyBody.parameters={...OnlyBody.parameters,docs:{...OnlyBody.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    height: '400px'\n  }} className=\"position-relative\">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header showCloseButton />\n      <DModal.Body>\n        <p className=\"py-3 px-5\">Modal body</p>\n      </DModal.Body>\n    </DModal>,\n  args: {\n    name: 'exampleModal',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: 'sm',\n    className: 'd-block'\n  }\n}",...OnlyBody.parameters?.docs?.source}}},WithoutCancelX.parameters={...WithoutCancelX.parameters,docs:{...WithoutCancelX.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: \'400px\'\n  }} className="position-relative">\n        <Story />\n      </div>],\n  render: args => <DModal {...args}>\n      <DModal.Header>\n        <h5 className="fw-bold">Do you want to reject the offer?</h5>\n      </DModal.Header>\n      <DModal.Body>\n        <p className="py-3 px-5">Modal body</p>\n      </DModal.Body>\n      <DModal.Footer>\n        <DButton text="cancel" theme="secondary" variant="outline" className="d-grid" pill />\n        <DButton text="ok" className="d-grid" pill />\n      </DModal.Footer>\n    </DModal>,\n  args: {\n    name: \'exampleModal\',\n    staticBackdrop: false,\n    scrollable: false,\n    centered: true,\n    fullScreen: false,\n    size: \'sm\',\n    className: \'d-block\'\n  }\n}',...WithoutCancelX.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CloseIcon","MaterialStyleCloseIcon","ActionsPlacementStart","ActionsPlacementEnd","WithoutHeader","WithoutActions","OnlyBody","WithoutCancelX"]}}]);