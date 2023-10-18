"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[8784],{"./src/stories/patterns/DAlert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,DangerClose:()=>DangerClose,DangerIcon:()=>DangerIcon,Dark:()=>Dark,DarkClose:()=>DarkClose,DarkIcon:()=>DarkIcon,Info:()=>Info,InfoClose:()=>InfoClose,InfoIcon:()=>InfoIcon,Light:()=>Light,LightClose:()=>LightClose,LightIcon:()=>LightIcon,Success:()=>Success,SuccessClose:()=>SuccessClose,SuccessIcon:()=>SuccessIcon,Warning:()=>Warning,WarningClose:()=>WarningClose,WarningIcon:()=>WarningIcon,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/proxies.ts"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Patterns/Alert",component:_components__WEBPACK_IMPORTED_MODULE_0__.Ff,argTypes:{type:{control:"select",type:"string",options:_constants__WEBPACK_IMPORTED_MODULE_1__.yU,table:{defaultValue:{summary:"light"}},description:"Alert type"},icon:{control:"select",type:"string",options:_constants__WEBPACK_IMPORTED_MODULE_1__.UZ,description:"Name of icon to use (in kebab-case)"},showClose:{control:"boolean",type:"boolean",description:"Show close button"},showIcon:{control:"boolean",type:"boolean",description:"Show alert icon"},onEventClose:{action:"onEventClose"}}},Light={args:{showIcon:!1,children:"Default alert"}},Dark={args:{showIcon:!1,children:"Default alert",type:"dark"}},Success={args:{showIcon:!1,children:"Default alert",type:"success"}},Danger={args:{showIcon:!1,children:"Default alert",type:"danger"}},Info={args:{showIcon:!1,children:"Default alert",type:"info"}},Warning={args:{showIcon:!1,children:"Default alert",type:"warning"}},LightIcon={args:{showIcon:!0,children:"Default alert"}},DarkIcon={args:{showIcon:!0,children:"Default alert",type:"dark"}},SuccessIcon={args:{showIcon:!0,children:"Default alert",type:"success"}},DangerIcon={args:{showIcon:!0,children:"Default alert",type:"danger"}},InfoIcon={args:{showIcon:!0,children:"Default alert",type:"info"}},WarningIcon={args:{showIcon:!0,children:"Default alert",type:"warning"}},LightClose={args:{showIcon:!0,children:"Default alert",showClose:!0}},DarkClose={args:{showIcon:!0,children:"Default alert",showClose:!0,type:"dark"}},SuccessClose={args:{showIcon:!0,children:"Default alert",type:"success",showClose:!0}},DangerClose={args:{showIcon:!0,children:"Default alert",type:"danger",showClose:!0}},InfoClose={args:{showIcon:!0,children:"Default alert",type:"info",showClose:!0}},WarningClose={args:{showIcon:!0,children:"Default alert",type:"warning",showClose:!0}},WithIcon={args:{icon:"clock",children:"Default alert",type:"warning",showClose:!0}};Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: false,\n    children: 'Default alert'\n  }\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: false,\n    children: 'Default alert',\n    type: 'dark'\n  }\n}",...Dark.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: false,\n    children: 'Default alert',\n    type: 'success'\n  }\n}",...Success.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: false,\n    children: 'Default alert',\n    type: 'danger'\n  }\n}",...Danger.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: false,\n    children: 'Default alert',\n    type: 'info'\n  }\n}",...Info.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: false,\n    children: 'Default alert',\n    type: 'warning'\n  }\n}",...Warning.parameters?.docs?.source}}},LightIcon.parameters={...LightIcon.parameters,docs:{...LightIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: true,\n    children: 'Default alert'\n  }\n}",...LightIcon.parameters?.docs?.source}}},DarkIcon.parameters={...DarkIcon.parameters,docs:{...DarkIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: true,\n    children: 'Default alert',\n    type: 'dark'\n  }\n}",...DarkIcon.parameters?.docs?.source}}},SuccessIcon.parameters={...SuccessIcon.parameters,docs:{...SuccessIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: true,\n    children: 'Default alert',\n    type: 'success'\n  }\n}",...SuccessIcon.parameters?.docs?.source}}},DangerIcon.parameters={...DangerIcon.parameters,docs:{...DangerIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: true,\n    children: 'Default alert',\n    type: 'danger'\n  }\n}",...DangerIcon.parameters?.docs?.source}}},InfoIcon.parameters={...InfoIcon.parameters,docs:{...InfoIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: true,\n    children: 'Default alert',\n    type: 'info'\n  }\n}",...InfoIcon.parameters?.docs?.source}}},WarningIcon.parameters={...WarningIcon.parameters,docs:{...WarningIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: true,\n    children: 'Default alert',\n    type: 'warning'\n  }\n}",...WarningIcon.parameters?.docs?.source}}},LightClose.parameters={...LightClose.parameters,docs:{...LightClose.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: true,\n    children: 'Default alert',\n    showClose: true\n  }\n}",...LightClose.parameters?.docs?.source}}},DarkClose.parameters={...DarkClose.parameters,docs:{...DarkClose.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: true,\n    children: 'Default alert',\n    showClose: true,\n    type: 'dark'\n  }\n}",...DarkClose.parameters?.docs?.source}}},SuccessClose.parameters={...SuccessClose.parameters,docs:{...SuccessClose.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: true,\n    children: 'Default alert',\n    type: 'success',\n    showClose: true\n  }\n}",...SuccessClose.parameters?.docs?.source}}},DangerClose.parameters={...DangerClose.parameters,docs:{...DangerClose.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: true,\n    children: 'Default alert',\n    type: 'danger',\n    showClose: true\n  }\n}",...DangerClose.parameters?.docs?.source}}},InfoClose.parameters={...InfoClose.parameters,docs:{...InfoClose.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: true,\n    children: 'Default alert',\n    type: 'info',\n    showClose: true\n  }\n}",...InfoClose.parameters?.docs?.source}}},WarningClose.parameters={...WarningClose.parameters,docs:{...WarningClose.parameters?.docs,source:{originalSource:"{\n  args: {\n    showIcon: true,\n    children: 'Default alert',\n    type: 'warning',\n    showClose: true\n  }\n}",...WarningClose.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: 'clock',\n    children: 'Default alert',\n    type: 'warning',\n    showClose: true\n  }\n}",...WithIcon.parameters?.docs?.source}}};const __namedExportsOrder=["Light","Dark","Success","Danger","Info","Warning","LightIcon","DarkIcon","SuccessIcon","DangerIcon","InfoIcon","WarningIcon","LightClose","DarkClose","SuccessClose","DangerClose","InfoClose","WarningClose","WithIcon"]}}]);