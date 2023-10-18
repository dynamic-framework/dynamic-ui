"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[5041,940],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/components/DQuickActionButton.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../dynamic-ui/dist/index.js"),_DQuickActionButton_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/components/DQuickActionButton.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"quick-action-button",children:"Quick Action Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.UG,{children:`\n\n  | Variable                                                                    | Type              | Description                           |\n  |-----------------------------------------------------------------------------|-------------------|---------------------------------------|\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-gap\`                                   | css length unit   | Content gap                           |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-padding\`                               | css length unit   | Content padding                       |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-bg\`                                    | css color unit    | Content background color              |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-border-color\`                          | css color unit    | Quick action border color             |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-border-style\`                          | css border style  | Quick action border style             |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-border-with\`                           | css length unit   | Quick action border width             |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-border-top\`                            | css border        | Quick action border top               |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-border-right\`                          | css border        | Quick action border right             |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-border-bottom\`                         | css border        | Quick action border bottom            |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-border-end\`                            | css border        | Quick action border left              |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-border-radius\`                         | css length unit   | Quick action border radius            |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-box-shadow\`                            | css box shadow    | Quick action box shadow               |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-line1-font-size\`                       | css length unit   | First line font size                  |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-line1-font-weight\`                     | css font weight   | First line font weight                |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-line1-color\`                           | css color unit    | First line color                      |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-line2-font-size\`                       | css length unit   | Second line font size                 |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-line2-font-weight\`                     | css length unit   | Second line font weight               |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-line2-color\`                           | css color unit    | Second line color                     |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-representative-image-size\`             | css length unit   | Representative image size             |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-representative-image-border-radius\`    | css length unit   | Representative image border-radius             |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-representative-icon-size\`              | css length unit   | Representative icon size              |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-action-icon-color\`                     | css color unit    | Action icon color                     |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-hover-bg\`                              | css color unit    | Content hover background              |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-hover-border-color\`                    | css color unit    | Content hover border color            |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-hover-action-icon-color\`               | css color unit    | Content action icon hover color       |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-hover-box-shadow\`                      | css box shadow    | Content hover box shadow              |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-active-bg\`                             | css color unit    | Content active background             |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-active-border-color\`                   | css color unit    | Content active border color           |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-active-action-icon-color\`              | css color unit    | Content action icon active color      |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}quick-action-button-active-box-shadow\`                     | css box shadow    | Content active color box shadow       |\n\n  `}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_DQuickActionButton_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_DQuickActionButton_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/components/DQuickActionButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccountBox:()=>AccountBox,ButtonDoubleAction:()=>ButtonDoubleAction,Info:()=>Info,PersonList:()=>PersonList,PersonalInfo:()=>PersonalInfo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../dynamic-ui/dist/index.js"),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/proxies.ts"),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Components/Quick Action Button",component:_components__WEBPACK_IMPORTED_MODULE_2__.$3,argTypes:{line1:{control:"text",type:"string",description:"The title"},line2:{control:"text",type:"string",description:"The subtitle"},secondaryActionIcon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,..._constants__WEBPACK_IMPORTED_MODULE_3__.UZ],description:"The second action icon",table:{defaultValue:{summary:"chevron-left"}}},actionLinkText:{control:"text",type:"string",description:"The action link text"},actionIcon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,..._constants__WEBPACK_IMPORTED_MODULE_3__.UZ],description:"The action icon",table:{defaultValue:{summary:"chevron-right"}}},actionLinkTheme:{control:{type:"select",labels:{undefined:"empty"}},options:_constants__WEBPACK_IMPORTED_MODULE_3__.Ef,type:"string",description:"Theme of the action link",table:{defaultValue:{summary:"secondary"}}},representativeImage:{control:"text",type:"string"},representativeIcon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,..._constants__WEBPACK_IMPORTED_MODULE_3__.UZ],description:"The representative icon"},representativeIconTheme:{control:{type:"select",labels:{undefined:"empty"}},options:_constants__WEBPACK_IMPORTED_MODULE_3__.Ef,type:"string",description:"Theme of the representative icon",table:{defaultValue:{summary:"secondary"}}},representativeIconHasCircle:{type:"boolean",control:"boolean",description:"Add circle around the representative icon",table:{defaultValue:{summary:!1}}},onEventClick:{action:"onEventClick"},onEventClickSecondary:{action:"onEventClickSecondary"}}},PersonalInfo={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.$3,{...args}),args:{line1:"Jessica Rabit",line2:"Toon Bank **** 721",representativeImage:"https://i.pravatar.cc/150?img=2",actionIcon:"chevron-right"}},ButtonDoubleAction={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.$3,{...args})}),args:{line1:"Jessica Rabit",line2:"Toon Bank **** 721",secondaryActionIcon:"star",representativeImage:"https://i.pravatar.cc/150?img=2"}},AccountBox={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.$3,{...args}),args:{line1:"Checking account",line2:"HISA ··· 665",representativeIcon:"piggy-bank",representativeIconTheme:"info",representativeIconHasCircle:!0,actionLinkText:"Change"}},Info={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.$3,{...args}),args:{line1:"Alternativas de pago",line2:"Si no puedes pagar en este momento",representativeIcon:"shuffle",representativeIconTheme:"secondary",actionIcon:"chevron-right"}},PersonList={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})],render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.$3,{...args,style:{[`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_0__.k2}quick-action-button-component-border-radius`]:0,[`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_0__.k2}quick-action-button-component-border-right`]:0,[`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_0__.k2}quick-action-button-component-border-left`]:0,[`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_0__.k2}quick-action-button-component-border-bottom`]:0}}),args:{line1:"Jessica Rabit",line2:"Toon Bank  **** 721",representativeImage:"https://i.pravatar.cc/150?img=2",actionIcon:"chevron-right"}};PersonalInfo.parameters={...PersonalInfo.parameters,docs:{...PersonalInfo.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DQuickActionButton {...args} />,\n  args: {\n    line1: 'Jessica Rabit',\n    line2: 'Toon Bank **** 721',\n    representativeImage: 'https://i.pravatar.cc/150?img=2',\n    actionIcon: 'chevron-right'\n  }\n}",...PersonalInfo.parameters?.docs?.source}}},ButtonDoubleAction.parameters={...ButtonDoubleAction.parameters,docs:{...ButtonDoubleAction.parameters?.docs,source:{originalSource:"{\n  render: args => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center\">\n      <DQuickActionButton {...args} />\n    </div>,\n  args: {\n    line1: 'Jessica Rabit',\n    line2: 'Toon Bank **** 721',\n    secondaryActionIcon: 'star',\n    representativeImage: 'https://i.pravatar.cc/150?img=2'\n  }\n}",...ButtonDoubleAction.parameters?.docs?.source}}},AccountBox.parameters={...AccountBox.parameters,docs:{...AccountBox.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DQuickActionButton {...args} />,\n  args: {\n    line1: 'Checking account',\n    line2: 'HISA ··· 665',\n    representativeIcon: 'piggy-bank',\n    representativeIconTheme: 'info',\n    representativeIconHasCircle: true,\n    actionLinkText: 'Change'\n  }\n}",...AccountBox.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DQuickActionButton {...args} />,\n  args: {\n    line1: 'Alternativas de pago',\n    line2: 'Si no puedes pagar en este momento',\n    representativeIcon: 'shuffle',\n    representativeIconTheme: 'secondary',\n    actionIcon: 'chevron-right'\n  }\n}",...Info.parameters?.docs?.source}}},PersonList.parameters={...PersonList.parameters,docs:{...PersonList.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }} className=\"d-flex flex-column align-items-stretch justify-content-center gap-3\">\n        <Story />\n      </div>],\n  render: args => <DQuickActionButton {...args} style={{\n    [`--${PREFIX_BS}quick-action-button-component-border-radius`]: 0,\n    [`--${PREFIX_BS}quick-action-button-component-border-right`]: 0,\n    [`--${PREFIX_BS}quick-action-button-component-border-left`]: 0,\n    [`--${PREFIX_BS}quick-action-button-component-border-bottom`]: 0\n  }} />,\n  args: {\n    line1: 'Jessica Rabit',\n    line2: 'Toon Bank  **** 721',\n    representativeImage: 'https://i.pravatar.cc/150?img=2',\n    actionIcon: 'chevron-right'\n  }\n}",...PersonList.parameters?.docs?.source}}};const __namedExportsOrder=["PersonalInfo","ButtonDoubleAction","AccountBox","Info","PersonList"]}}]);