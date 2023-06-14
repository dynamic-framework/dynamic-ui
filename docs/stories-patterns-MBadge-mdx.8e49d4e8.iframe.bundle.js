"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[1296,3952],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/patterns/MBadge.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/blocks/dist/index.mjs"),_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../modyo-design-system/dist/index.js"),_MBadge_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/patterns/MBadge.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"// TODO"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.UG,{children:`\n\n  | Variable                                  | Type            | Description                   |\n  |-------------------------------------------|-----------------|-------------------------------|\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-badge-bg\`              | css color unit  | Background color              |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-badge-dot-height\`      | css length unit | Dot height                    |\n\n  `}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_MBadge_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_MBadge_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/patterns/MBadge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Dot:()=>Dot,Empty:()=>Empty,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/proxies.ts"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Patterns/Badge",component:_components__WEBPACK_IMPORTED_MODULE_0__.g6,argTypes:{text:{control:"text",type:"string",description:"Text of badge"},theme:{control:"select",type:"string",options:_constants__WEBPACK_IMPORTED_MODULE_1__.yU,table:{defaultValue:{summary:"primary"}},description:"The theme to use."},isDot:{control:"boolean",type:"boolean",description:"Enable dot mode"}}},Default={args:{theme:"primary",text:"Default"}},Dot={args:{theme:"primary",text:"+2",isDot:!0}},Empty={args:{theme:"primary",text:void 0,isDot:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'primary',\n    text: 'Default'\n  }\n}",...Default.parameters?.docs?.source}}},Dot.parameters={...Dot.parameters,docs:{...Dot.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'primary',\n    text: '+2',\n    isDot: true\n  }\n}",...Dot.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'primary',\n    text: undefined,\n    isDot: true\n  }\n}",...Empty.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Dot","Empty"]}}]);