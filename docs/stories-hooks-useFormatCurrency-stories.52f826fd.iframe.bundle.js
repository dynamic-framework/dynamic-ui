"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[326],{"./src/stories/hooks/useFormatCurrency.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useFormatCurrency_stories});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dist=__webpack_require__("../modyo-design-system/dist/index.js"),LiquidContext=__webpack_require__("./src/contexts/LiquidContext.tsx");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Example=({valuesToFormat})=>{const{values}=function useFormatCurrency(...args){const{currency}=(0,LiquidContext.L$)();return{format:(0,react.useCallback)((value=>(0,dist.xG)(value,currency)),[currency]),values:(args||[]).map((value=>(0,dist.xG)(value??0,currency)))}}(...valuesToFormat);return(0,jsx_runtime.jsx)(LiquidContext.Um,{children:values.map((value=>(0,jsx_runtime.jsx)("pre",{children:value},value)))})};Example.displayName="Example";const useFormatCurrency_stories={title:"React/hooks/useFormatCurrency",component:Example},Default={args:{valuesToFormat:[100,234.12,-233]}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    valuesToFormat: [100, 234.12, -233]\n  }\n}",...Default.parameters?.docs?.source}}}}}]);