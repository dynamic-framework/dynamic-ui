"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[3952],{"./src/stories/patterns/MBadge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Dot:()=>Dot,Empty:()=>Empty,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/proxies.ts"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Patterns/Badge",component:_components__WEBPACK_IMPORTED_MODULE_0__.g6,argTypes:{text:{control:"text",type:"string",description:"Text of badge"},theme:{control:"select",type:"string",options:_constants__WEBPACK_IMPORTED_MODULE_1__.yU,table:{defaultValue:{summary:"primary"}},description:"The theme to use."},isDot:{control:"boolean",type:"boolean",description:"Enable dot mode"}}},Default={args:{theme:"primary",text:"Default"}},Dot={args:{theme:"primary",text:"+2",isDot:!0}},Empty={args:{theme:"primary",text:void 0,isDot:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'primary',\n    text: 'Default'\n  }\n}",...Default.parameters?.docs?.source}}},Dot.parameters={...Dot.parameters,docs:{...Dot.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'primary',\n    text: '+2',\n    isDot: true\n  }\n}",...Dot.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'primary',\n    text: undefined,\n    isDot: true\n  }\n}",...Empty.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Dot","Empty"]}}]);