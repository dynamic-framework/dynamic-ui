"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[3398],{"./src/stories/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UZ:()=>ICONS,dD:()=>INPUT_STATE,yU:()=>THEMES});const THEMES=["primary","secondary","success","info","warning","danger","light","dark"],ICONS=["emoji-smile","emoji-smile-upside-down","emoji-dizzy","emoji-expressionless"],INPUT_STATE=["focus","hover","active","disabled"]},"./src/stories/components/MIcon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/proxies.ts"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Stencil/Icon",component:_components__WEBPACK_IMPORTED_MODULE_0__.Ou,argTypes:{icon:{control:"select",options:_constants__WEBPACK_IMPORTED_MODULE_1__.UZ},theme:{control:"select",options:_constants__WEBPACK_IMPORTED_MODULE_1__.yU,table:{defaultValue:{summary:"primary"}}},size:{control:"text"},isLoading:{control:"boolean"},duration:{control:"number"}}},Default={args:{icon:_constants__WEBPACK_IMPORTED_MODULE_1__.UZ[0],theme:"info"}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: ICONS[0],\n    theme: 'info'\n  }\n}",...Default.parameters?.docs?.source}}}}}]);