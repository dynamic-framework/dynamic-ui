"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[6397,9724],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/components/MInputCurrency.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/blocks/dist/index.mjs"),_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../modyo-design-system/dist/index.js"),_MInputCurrency_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/components/MInputCurrency.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"input-currency",children:"Input Currency"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"// TODO"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.UG,{children:`\n\n  | Variable                                              | Type            | Description                   |\n  |-------------------------------------------------------|-----------------|-------------------------------|\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-control-gap\`                 | css length unit | Space between layout elements |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-color\`                 | css color unit  | Label color                   |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-font-weight\`           | css font weight | Label font weight             |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-font-size\`             | css length unit | Label font size               |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-padding-x\`             | css length unit | Label horizontal padding      |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-padding-y\`             | css length unit | Label vertical padding        |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-gap\`                   | css length unit | Space between label elements  |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-focus-color\`           | css color unit  | Label focus color             |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-border-color\`          | css color unit  | Input border color            |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-border-width\`          | css length unit | Input border width            |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-border-radius\`         | css length unit | Input border radius           |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-hover-border-color\`    | css color unit  | Input hover border color      |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-focus-border-color\`    | css color unit  | Input focus border color      |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-focus-box-shadow\`      | css shadow      | Input focus box shadow        |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-form-text-padding\`           | css length unit | Hint padding                  |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-form-text-gap\`               | css length unit | Space between hint elements   |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-form-text-color\`             | css color unit  | Hint color                    |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-disabled-bg\`           | css color unit  | Input disable background      |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-disabled-color\`        | css color unit  | Input disable color           |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-disabled-border-color\` | css color unit  | Input disable border color    |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-form-control-text-align\`     | css text align  | Input text align              |\n  | \`--${_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-currency-symbol-color\`       | css color unit  | Color of the currency symbol  |\n\n`}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_MInputCurrency_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_MInputCurrency_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/contexts/LiquidContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L$:()=>useLiquidContext,Um:()=>LiquidContextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../modyo-design-system/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const LiquidContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({language:"en-US",currency:{symbol:"$",precision:2,separator:",",decimal:"."}});function LiquidContextProvider({children}){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({language:_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{site.language}}"),currency:{symbol:_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{vars.currency-symbol}}"),precision:parseInt(_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{vars.currency-precision}}"),10),separator:_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{vars.currency-separator}}"),decimal:_modyo_dynamic_modyo_design_system__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{vars.currency-decimal}}")}})),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LiquidContext.Provider,{value,children})}function useLiquidContext(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LiquidContext);if(void 0===context)throw new Error("useLiquidContext was used outside of LiquidContextProvider");return context}LiquidContextProvider.displayName="LiquidContextProvider";try{LiquidContextProvider.displayName="LiquidContextProvider",LiquidContextProvider.__docgenInfo={description:"",displayName:"LiquidContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/LiquidContext.tsx#LiquidContextProvider"]={docgenInfo:LiquidContextProvider.__docgenInfo,name:"LiquidContextProvider",path:"src/contexts/LiquidContext.tsx#LiquidContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/config/liquidConfig.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);var dist=__webpack_require__("../modyo-design-system/dist/index.js");const liquid_namespaceObject=JSON.parse('{"vars":{"currency-symbol":"$","currency-precision":2,"currency-separator":".","currency-decimal":","}}');dist.tj.init(liquid_namespaceObject,window.liquidjs)},"./src/stories/components/MInputCurrency.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Confirm:()=>Confirm,Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Value:()=>Value,WithCurrencyCode:()=>WithCurrencyCode,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MInputCurrency_stories});var proxies=__webpack_require__("./src/components/proxies.ts"),LiquidContext=__webpack_require__("./src/contexts/LiquidContext.tsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function MInputCurrency({onChange,...otherProps}){const{currency}=(0,LiquidContext.L$)();return(0,jsx_runtime.jsx)(proxies.iq,{currencyOptions:currency,onMChange:({detail})=>onChange(detail),...otherProps})}MInputCurrency.displayName="MInputCurrency";try{MInputCurrency.displayName="MInputCurrency",MInputCurrency.__docgenInfo={description:"",displayName:"MInputCurrency",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number) => void"}},name:{defaultValue:null,description:"The name of the input",name:"name",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ [key: string]: any; } | undefined"}},placeholder:{defaultValue:null,description:"Placeholder for the input",name:"placeholder",required:!1,type:{name:"string | undefined"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"string | undefined"}},iconFamilyClass:{defaultValue:null,description:"Right icon family class",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"Right icon family class",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},hint:{defaultValue:null,description:"Hint to display",name:"hint",required:!1,type:{name:"string | undefined"}},isDisabled:{defaultValue:null,description:"The input is disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"The label text",name:"label",required:!1,type:{name:"string | undefined"}},mId:{defaultValue:null,description:"The id of the input",name:"mId",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"The value of the input",name:"value",required:!1,type:{name:"number | undefined"}},maxValue:{defaultValue:null,description:"* The max value of the input",name:"maxValue",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"* The min value of the input",name:"minValue",required:!1,type:{name:"number | undefined"}},iconEnd:{defaultValue:null,description:"Icon for the end",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"Right icon family class",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"Right icon family class",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStart:{defaultValue:null,description:"Icon for the left",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"Left icon family class",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"Left icon family class",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},isLoading:{defaultValue:null,description:"Flag for loading state.",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},labelIcon:{defaultValue:null,description:"Icon for the label text",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"Icon label family class",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"Icon label family class",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},isInvalid:{defaultValue:null,description:"Add is-invalid class",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:"Flag to read only the input",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isValid:{defaultValue:null,description:"Add is-valid class",name:"isValid",required:!1,type:{name:"boolean | undefined"}},currencyCode:{defaultValue:null,description:"Currency code",name:"currencyCode",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MInputCurrency.tsx#MInputCurrency"]={docgenInfo:MInputCurrency.__docgenInfo,name:"MInputCurrency",path:"src/components/MInputCurrency.tsx#MInputCurrency"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./src/stories/constants.ts");const MInputCurrency_stories={title:"Design System/Components/Input Currency",component:MInputCurrency,argTypes:{mId:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},label:{control:"text",type:"string"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},placeholder:{control:"text",type:"string"},value:{control:"number",type:"number",description:"The value of the input"},isDisabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},isReadOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},isLoading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},currencyCode:{control:"string",type:"string"},isInvalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},isValid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},minValue:{control:"number",type:"number"},maxValue:{control:"number",type:"number"},onChange:{action:"onMChange"}}},Default={render:args=>(__webpack_require__("./src/stories/config/liquidConfig.ts"),(0,jsx_runtime.jsx)(LiquidContext.Um,{children:(0,jsx_runtime.jsx)(MInputCurrency,{...args})})),args:{mId:"componentId",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5}},Value={render:args=>(__webpack_require__("./src/stories/config/liquidConfig.ts"),(0,jsx_runtime.jsx)(LiquidContext.Um,{children:(0,jsx_runtime.jsx)(MInputCurrency,{...args})})),args:{mId:"componentId",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:1e3,minValue:0,maxValue:1e5}},Error={render:args=>(__webpack_require__("./src/stories/config/liquidConfig.ts"),(0,jsx_runtime.jsx)(LiquidContext.Um,{children:(0,jsx_runtime.jsx)(MInputCurrency,{...args})})),args:{mId:"componentId",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,isInvalid:!0}},Confirm={render:args=>(__webpack_require__("./src/stories/config/liquidConfig.ts"),(0,jsx_runtime.jsx)(LiquidContext.Um,{children:(0,jsx_runtime.jsx)(MInputCurrency,{...args})})),args:{mId:"componentId",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,isValid:!0}},Disabled={render:args=>(__webpack_require__("./src/stories/config/liquidConfig.ts"),(0,jsx_runtime.jsx)(LiquidContext.Um,{children:(0,jsx_runtime.jsx)(MInputCurrency,{...args})})),args:{mId:"componentId",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,isDisabled:!0}},WithCurrencyCode={args:{mId:"componentId",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyCode:"CLP"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: (args: ComponentProps<typeof MInputCurrency>) => {\n    // eslint-disable-next-line global-require\n    require('../config/liquidConfig');\n    return <LiquidContextProvider>\n        <MInputCurrency {...args} />\n      </LiquidContextProvider>;\n  },\n  args: {\n    mId: 'componentId',\n    label: 'Label',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    value: undefined,\n    minValue: 0,\n    maxValue: 100000\n  }\n}",...Default.parameters?.docs?.source}}},Value.parameters={...Value.parameters,docs:{...Value.parameters?.docs,source:{originalSource:"{\n  render: (args: ComponentProps<typeof MInputCurrency>) => {\n    // eslint-disable-next-line global-require\n    require('../config/liquidConfig');\n    return <LiquidContextProvider>\n        <MInputCurrency {...args} />\n      </LiquidContextProvider>;\n  },\n  args: {\n    mId: 'componentId',\n    label: 'Label',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    value: 1000,\n    minValue: 0,\n    maxValue: 100000\n  }\n}",...Value.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  render: (args: ComponentProps<typeof MInputCurrency>) => {\n    // eslint-disable-next-line global-require\n    require('../config/liquidConfig');\n    return <LiquidContextProvider>\n        <MInputCurrency {...args} />\n      </LiquidContextProvider>;\n  },\n  args: {\n    mId: 'componentId',\n    label: 'Label',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    value: undefined,\n    minValue: 0,\n    maxValue: 100000,\n    isInvalid: true\n  }\n}",...Error.parameters?.docs?.source}}},Confirm.parameters={...Confirm.parameters,docs:{...Confirm.parameters?.docs,source:{originalSource:"{\n  render: (args: ComponentProps<typeof MInputCurrency>) => {\n    // eslint-disable-next-line global-require\n    require('../config/liquidConfig');\n    return <LiquidContextProvider>\n        <MInputCurrency {...args} />\n      </LiquidContextProvider>;\n  },\n  args: {\n    mId: 'componentId',\n    label: 'Label',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    value: undefined,\n    minValue: 0,\n    maxValue: 100000,\n    isValid: true\n  }\n}",...Confirm.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: (args: ComponentProps<typeof MInputCurrency>) => {\n    // eslint-disable-next-line global-require\n    require('../config/liquidConfig');\n    return <LiquidContextProvider>\n        <MInputCurrency {...args} />\n      </LiquidContextProvider>;\n  },\n  args: {\n    mId: 'componentId',\n    label: 'Label',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    value: undefined,\n    minValue: 0,\n    maxValue: 100000,\n    isDisabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},WithCurrencyCode.parameters={...WithCurrencyCode.parameters,docs:{...WithCurrencyCode.parameters?.docs,source:{originalSource:"{\n  args: {\n    mId: 'componentId',\n    label: 'Label',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    value: undefined,\n    minValue: 0,\n    maxValue: 100000,\n    currencyCode: 'CLP'\n  }\n}",...WithCurrencyCode.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Value","Error","Confirm","Disabled","WithCurrencyCode"]}}]);