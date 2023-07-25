"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[13,974],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/components/MQuickActionSwitch.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/blocks/dist/index.mjs"),_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../dynamic-ui/dist/index.js"),_MQuickActionSwitch_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/components/MQuickActionSwitch.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"quick-action-switch",children:"Quick Action Switch"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.UG,{children:`\n\n  | Variable                                                            | Type              | Description                           |\n  |---------------------------------------------------------------------|-------------------|---------------------------------------|\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-gap\`                         | css length unit   | Space between content                 |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-padding\`                     | css length unit   | Content padding                       |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-bg\`                          | css color unit    | Content background color              |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-border-radius\`               | css length unit   | Quick action border radius            |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-content-gap\`                 | css length unit   | Space between switch content          |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-label-font-size\`             | css length unit   | Label font size                       |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-label-font-weight\`           | css font weight   | Label font weight                     |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-label-color\`                 | css color unit    | Label color                           |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-hint-font-size\`              | css length unit   | Hint font size                        |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-hint-font-weight\`            | css length unit   | Hint font weight                      |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-hint-color\`                  | css color unit    | Hint color                            |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-hover-bg\`                    | css color unit    | Content hover background              |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-checked-bg\`                  | css color unit    | Content checked background            |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-checked-label-color\`         | css color unit    | Content checked label color           |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-quick-action-switch-checked-hint-color\`          | css color unit    | Content checked hint color            |\n\n  `}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_MQuickActionSwitch_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_MQuickActionSwitch_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/components/MQuickActionSwitch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,CheckedDisabled:()=>CheckedDisabled,Default:()=>Default,DefaultDisabled:()=>DefaultDisabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/proxies.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Components/Quick Action Switch",component:_components__WEBPACK_IMPORTED_MODULE_1__.LK,argTypes:{mId:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},label:{control:"text",type:"string"},hint:{control:"text",type:"string"},isChecked:{control:"boolean",type:"boolean"},isDisabled:{control:"boolean",type:"boolean"}}},Default={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],args:{mId:"componentId1",label:"Program",hint:"This payment is applied with the periodicity and date that you define",isChecked:!1}},Checked={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],args:{mId:"componentId2",label:"Program",hint:"This payment is applied with the periodicity and date that you define",isChecked:!0}},DefaultDisabled={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],args:{mId:"componentId3",label:"Program",hint:"This payment is applied with the periodicity and date that you define",isChecked:!1,isDisabled:!0}},CheckedDisabled={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],args:{mId:"componentId4",label:"Program",hint:"This payment is applied with the periodicity and date that you define",isChecked:!0,isDisabled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  args: {\n    mId: 'componentId1',\n    label: 'Program',\n    hint: 'This payment is applied with the periodicity and date that you define',\n    isChecked: false\n  }\n}",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  args: {\n    mId: 'componentId2',\n    label: 'Program',\n    hint: 'This payment is applied with the periodicity and date that you define',\n    isChecked: true\n  }\n}",...Checked.parameters?.docs?.source}}},DefaultDisabled.parameters={...DefaultDisabled.parameters,docs:{...DefaultDisabled.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  args: {\n    mId: 'componentId3',\n    label: 'Program',\n    hint: 'This payment is applied with the periodicity and date that you define',\n    isChecked: false,\n    isDisabled: true\n  }\n}",...DefaultDisabled.parameters?.docs?.source}}},CheckedDisabled.parameters={...CheckedDisabled.parameters,docs:{...CheckedDisabled.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  args: {\n    mId: 'componentId4',\n    label: 'Program',\n    hint: 'This payment is applied with the periodicity and date that you define',\n    isChecked: true,\n    isDisabled: true\n  }\n}",...CheckedDisabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Checked","DefaultDisabled","CheckedDisabled"]}}]);