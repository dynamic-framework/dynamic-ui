"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[2621,2814],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/components/MFormikInputCurrency.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../dynamic-ui/dist/index.js"),_MFormikInputCurrency_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/components/MFormikInputCurrency.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"formik-input-currency",children:"Formik Input Currency"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Component composition with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"m-input-currency"})," to make a currency input component that use\na ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LiquidContext"})," to get the currency config and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Formik"})," to get the behaviors."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.UG,{children:`\n\n  | Variable                                              | Type            | Description                   |\n  |-------------------------------------------------------|-----------------|-------------------------------|\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-control-gap\`                 | css length unit | Space between layout elements |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-color\`                 | css color unit  | Label color                   |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-font-weight\`           | css font weight | Label font weight             |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-font-size\`             | css length unit | Label font size               |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-padding-x\`             | css length unit | Label horizontal padding      |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-padding-y\`             | css length unit | Label vertical padding        |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-gap\`                   | css length unit | Space between label elements  |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-label-focus-color\`           | css color unit  | Label focus color             |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-border-color\`          | css color unit  | Input border color            |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-border-width\`          | css length unit | Input border width            |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-border-radius\`         | css length unit | Input border radius           |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-hover-border-color\`    | css color unit  | Input hover border color      |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-focus-border-color\`    | css color unit  | Input focus border color      |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-focus-box-shadow\`      | css shadow      | Input focus box shadow        |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-form-text-padding\`           | css length unit | Hint padding                  |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-form-text-gap\`               | css length unit | Space between hint elements   |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-form-text-color\`             | css color unit  | Hint color                    |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-disabled-bg\`           | css color unit  | Input disable background      |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-disabled-color\`        | css color unit  | Input disable color           |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-group-disabled-border-color\` | css color unit  | Input disable border color    |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-form-control-text-align\`     | css text align  | Input text align              |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}m-input-currency-symbol-color\`       | css color unit  | Color of the currency symbol  |\n\n`}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_MFormikInputCurrency_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_MFormikInputCurrency_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/MInputCurrency.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MInputCurrency});var _proxies__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/proxies.ts"),_contexts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contexts/LiquidContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function MInputCurrency({onChange,onBlur,onFocus,...otherProps}){const{currency}=(0,_contexts__WEBPACK_IMPORTED_MODULE_1__.L$)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_proxies__WEBPACK_IMPORTED_MODULE_2__.iq,{currencyOptions:currency,onMChange:({detail})=>onChange(detail),...onBlur&&{onMBlur:({detail})=>onBlur(detail)},...onFocus&&{onMFocus:({detail})=>onFocus(detail)},...otherProps})}MInputCurrency.displayName="MInputCurrency";try{MInputCurrency.displayName="MInputCurrency",MInputCurrency.__docgenInfo={description:"",displayName:"MInputCurrency",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(((value: number) => void) & FocusEventHandler<HTMLMInputCurrencyBaseElement>) | undefined"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(((value: number) => void) & FocusEventHandler<HTMLMInputCurrencyBaseElement>) | undefined"}},name:{defaultValue:null,description:"The name of the input",name:"name",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ [key: string]: any; } | undefined"}},placeholder:{defaultValue:null,description:"Placeholder for the input",name:"placeholder",required:!1,type:{name:"string | undefined"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"string | undefined"}},iconFamilyClass:{defaultValue:null,description:"Right icon family class",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"Right icon family class",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},hint:{defaultValue:null,description:"Hint to display",name:"hint",required:!1,type:{name:"string | undefined"}},isDisabled:{defaultValue:null,description:"The input is disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"The label text",name:"label",required:!1,type:{name:"string | undefined"}},mId:{defaultValue:null,description:"The id of the input",name:"mId",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"The value of the input",name:"value",required:!1,type:{name:"number | undefined"}},maxValue:{defaultValue:null,description:"* The max value of the input",name:"maxValue",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"* The min value of the input",name:"minValue",required:!1,type:{name:"number | undefined"}},iconEnd:{defaultValue:null,description:"Icon for the end",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"Right icon family class",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"Right icon family class",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStart:{defaultValue:null,description:"Icon for the left",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"Left icon family class",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"Left icon family class",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},isLoading:{defaultValue:null,description:"Flag for loading state.",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},labelIcon:{defaultValue:null,description:"Icon for the label text",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"Icon label family class",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"Icon label family class",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},onMBlur:{defaultValue:null,description:"Emitted when the inputs bur",name:"onMBlur",required:!1,type:{name:"((event: MInputCurrencyBaseCustomEvent<number>) => void) | undefined"}},isInvalid:{defaultValue:null,description:"Add is-invalid class",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:"Flag to read only the input",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isValid:{defaultValue:null,description:"Add is-valid class",name:"isValid",required:!1,type:{name:"boolean | undefined"}},currencyCode:{defaultValue:null,description:"Currency code",name:"currencyCode",required:!1,type:{name:"string | undefined"}},onMFocus:{defaultValue:null,description:"Emitted when the inputs focus",name:"onMFocus",required:!1,type:{name:"((event: MInputCurrencyBaseCustomEvent<number>) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MInputCurrency.tsx#MInputCurrency"]={docgenInfo:MInputCurrency.__docgenInfo,name:"MInputCurrency",path:"src/components/MInputCurrency.tsx#MInputCurrency"})}catch(__react_docgen_typescript_loader_error){}},"./src/contexts/LiquidContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L$:()=>useLiquidContext,Um:()=>LiquidContextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../dynamic-ui/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const LiquidContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."}});function LiquidContextProvider({children}){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({language:_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{site.language}}"),currency:{symbol:_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{vars.currency-symbol}}"),precision:parseInt(_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{vars.currency-precision}}"),10),separator:_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{vars.currency-separator}}"),decimal:_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_1__.tj.parse("{{vars.currency-decimal}}")}})),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LiquidContext.Provider,{value,children})}function useLiquidContext(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LiquidContext);if(void 0===context)throw new Error("useLiquidContext was used outside of LiquidContextProvider");return context}LiquidContextProvider.displayName="LiquidContextProvider";try{LiquidContextProvider.displayName="LiquidContextProvider",LiquidContextProvider.__docgenInfo={description:"",displayName:"LiquidContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/LiquidContext.tsx#LiquidContextProvider"]={docgenInfo:LiquidContextProvider.__docgenInfo,name:"LiquidContextProvider",path:"src/contexts/LiquidContext.tsx#LiquidContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/config/liquidConfig.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);var dist=__webpack_require__("../dynamic-ui/dist/index.js");const liquid_namespaceObject=JSON.parse('{"vars":{"currency-symbol":"$","currency-precision":2,"currency-separator":".","currency-decimal":","}}');dist.tj.init(liquid_namespaceObject,window.liquidjs)},"./src/stories/components/MFormikInputCurrency.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Empty:()=>Empty,WithErrors:()=>WithErrors,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MFormikInputCurrency_stories});var formik_esm=__webpack_require__("../../node_modules/.pnpm/formik@2.2.9_react@18.2.0/node_modules/formik/dist/formik.esm.js"),index_esm=__webpack_require__("../../node_modules/.pnpm/yup@1.2.0/node_modules/yup/index.esm.js"),MInputCurrency=__webpack_require__("./src/components/MInputCurrency.tsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function MFormikInputCurrency({name,hint,...props}){const[field,meta,helpers]=(0,formik_esm.U$)(name);return(0,jsx_runtime.jsx)(MInputCurrency.Z,{...props,name:field.name,value:field.value,onChange:value=>helpers.setValue(value),onMBlur:({detail})=>field.onBlur(detail),isInvalid:!!meta.error,hint:meta.error||hint})}MFormikInputCurrency.displayName="MFormikInputCurrency";try{MFormikInputCurrency.displayName="MFormikInputCurrency",MFormikInputCurrency.__docgenInfo={description:"",displayName:"MFormikInputCurrency",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number) => void"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ [key: string]: any; } | undefined"}},placeholder:{defaultValue:null,description:"Placeholder for the input",name:"placeholder",required:!1,type:{name:"string | undefined"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(((value: number) => void) & FocusEventHandler<HTMLMInputCurrencyBaseElement>) | undefined"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(((value: number) => void) & FocusEventHandler<HTMLMInputCurrencyBaseElement>) | undefined"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"string | undefined"}},iconFamilyClass:{defaultValue:null,description:"Right icon family class",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"Right icon family class",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},hint:{defaultValue:null,description:"Hint to display",name:"hint",required:!1,type:{name:"string | undefined"}},isDisabled:{defaultValue:null,description:"The input is disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"The label text",name:"label",required:!1,type:{name:"string | undefined"}},mId:{defaultValue:null,description:"The id of the input",name:"mId",required:!0,type:{name:"string"}},maxValue:{defaultValue:null,description:"* The max value of the input",name:"maxValue",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"* The min value of the input",name:"minValue",required:!1,type:{name:"number | undefined"}},iconEnd:{defaultValue:null,description:"Icon for the end",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"Right icon family class",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"Right icon family class",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStart:{defaultValue:null,description:"Icon for the left",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"Left icon family class",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"Left icon family class",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},isLoading:{defaultValue:null,description:"Flag for loading state.",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},labelIcon:{defaultValue:null,description:"Icon for the label text",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"Icon label family class",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"Icon label family class",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},onMBlur:{defaultValue:null,description:"Emitted when the inputs bur",name:"onMBlur",required:!1,type:{name:"((event: MInputCurrencyBaseCustomEvent<number>) => void) | undefined"}},isInvalid:{defaultValue:null,description:"Add is-invalid class",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:"Flag to read only the input",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isValid:{defaultValue:null,description:"Add is-valid class",name:"isValid",required:!1,type:{name:"boolean | undefined"}},currencyCode:{defaultValue:null,description:"Currency code",name:"currencyCode",required:!1,type:{name:"string | undefined"}},onMFocus:{defaultValue:null,description:"Emitted when the inputs focus",name:"onMFocus",required:!1,type:{name:"((event: MInputCurrencyBaseCustomEvent<number>) => void) | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MFormikInputCurrency.tsx#MFormikInputCurrency"]={docgenInfo:MFormikInputCurrency.__docgenInfo,name:"MFormikInputCurrency",path:"src/components/MFormikInputCurrency.tsx#MFormikInputCurrency"})}catch(__react_docgen_typescript_loader_error){}var proxies=__webpack_require__("./src/components/proxies.ts"),LiquidContext=__webpack_require__("./src/contexts/LiquidContext.tsx");const MFormikInputCurrency_stories={title:"Design System/Components/Formik Input Currency",component:MFormikInputCurrency},Default={decorators:[(Story,{args})=>(__webpack_require__("./src/stories/config/liquidConfig.ts"),(0,jsx_runtime.jsx)(formik_esm.J9,{initialValues:{field:1234},onSubmit:console.log,enableReinitialize:!0,children:({handleSubmit})=>(0,jsx_runtime.jsx)("form",{onSubmit:handleSubmit,children:(0,jsx_runtime.jsx)(Story,{...args})})}))],render:args=>(0,jsx_runtime.jsx)(LiquidContext.Um,{children:(0,jsx_runtime.jsx)(MFormikInputCurrency,{...args})}),args:{mId:"field1",label:"Label",name:"field",placeholder:"Placeholder",labelIcon:void 0,iconStart:"emoji-smile-upside-down",iconEnd:"emoji-smile-upside-down",hint:"Assistive text"}},Empty={decorators:[(Story,{args})=>(__webpack_require__("./src/stories/config/liquidConfig.ts"),(0,jsx_runtime.jsx)(formik_esm.J9,{initialValues:{field:void 0},onSubmit:console.log,enableReinitialize:!0,children:({handleSubmit})=>(0,jsx_runtime.jsx)("form",{onSubmit:handleSubmit,children:(0,jsx_runtime.jsx)(Story,{...args})})}))],render:args=>(0,jsx_runtime.jsx)(LiquidContext.Um,{children:(0,jsx_runtime.jsx)(MFormikInputCurrency,{...args})}),args:{mId:"field2",label:"Label",name:"field",placeholder:"Placeholder",labelIcon:void 0,iconStart:"emoji-smile-upside-down",iconEnd:"emoji-smile-upside-down",hint:"Assistive text"}},Schema=index_esm.Ry().shape({field:index_esm.Z_().required("this field is required")}),WithErrors={decorators:[(Story,{args})=>(__webpack_require__("./src/stories/config/liquidConfig.ts"),(0,jsx_runtime.jsx)(formik_esm.J9,{initialValues:{field:void 0},onSubmit:console.log,enableReinitialize:!0,validationSchema:Schema,children:({handleSubmit})=>(0,jsx_runtime.jsxs)("form",{onSubmit:handleSubmit,className:"d-flex flex-column gap-3",children:[(0,jsx_runtime.jsx)(Story,{...args}),(0,jsx_runtime.jsx)(proxies.G5,{onMClick:()=>handleSubmit(),text:"submit"})]})}))],render:args=>(0,jsx_runtime.jsx)(LiquidContext.Um,{children:(0,jsx_runtime.jsx)(MFormikInputCurrency,{...args})}),args:{mId:"field2",label:"Label",name:"field",placeholder:"Placeholder",labelIcon:void 0,iconStart:"emoji-smile-upside-down",iconEnd:"emoji-smile-upside-down",hint:"Assistive text"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [(Story: typeof MFormikInputCurrency, {\n    args\n  }) => {\n    // eslint-disable-next-line global-require\n    require('../config/liquidConfig');\n    return <Formik initialValues={{\n      field: 1234\n    }} onSubmit={console.log} enableReinitialize>\n          {({\n        handleSubmit\n      }) => <form onSubmit={handleSubmit}>\n              <Story {...args} />\n            </form>}\n        </Formik>;\n  }],\n  render: (args: ComponentProps<typeof MFormikInputCurrency>) => <LiquidContextProvider>\n      <MFormikInputCurrency {...args} />\n    </LiquidContextProvider>,\n  args: {\n    mId: 'field1',\n    label: 'Label',\n    name: 'field',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    iconStart: 'emoji-smile-upside-down',\n    iconEnd: 'emoji-smile-upside-down',\n    hint: 'Assistive text'\n  }\n}",...Default.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  decorators: [(Story: typeof MFormikInputCurrency, {\n    args\n  }) => {\n    // eslint-disable-next-line global-require\n    require('../config/liquidConfig');\n    return <Formik initialValues={{\n      field: undefined\n    }} onSubmit={console.log} enableReinitialize>\n          {({\n        handleSubmit\n      }) => <form onSubmit={handleSubmit}>\n              <Story {...args} />\n            </form>}\n        </Formik>;\n  }],\n  render: (args: ComponentProps<typeof MFormikInputCurrency>) => <LiquidContextProvider>\n      <MFormikInputCurrency {...args} />\n    </LiquidContextProvider>,\n  args: {\n    mId: 'field2',\n    label: 'Label',\n    name: 'field',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    iconStart: 'emoji-smile-upside-down',\n    iconEnd: 'emoji-smile-upside-down',\n    hint: 'Assistive text'\n  }\n}",...Empty.parameters?.docs?.source}}},WithErrors.parameters={...WithErrors.parameters,docs:{...WithErrors.parameters?.docs,source:{originalSource:"{\n  decorators: [(Story: typeof MFormikInputCurrency, {\n    args\n  }) => {\n    // eslint-disable-next-line global-require\n    require('../config/liquidConfig');\n    return <Formik initialValues={{\n      field: undefined\n    }} onSubmit={console.log} enableReinitialize validationSchema={Schema}>\n          {({\n        handleSubmit\n      }) => <form onSubmit={handleSubmit} className=\"d-flex flex-column gap-3\">\n              <Story {...args} />\n              <MButton onMClick={() => handleSubmit()} text=\"submit\" />\n            </form>}\n        </Formik>;\n  }],\n  render: (args: ComponentProps<typeof MFormikInputCurrency>) => <LiquidContextProvider>\n      <MFormikInputCurrency {...args} />\n    </LiquidContextProvider>,\n  args: {\n    mId: 'field2',\n    label: 'Label',\n    name: 'field',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    iconStart: 'emoji-smile-upside-down',\n    iconEnd: 'emoji-smile-upside-down',\n    hint: 'Assistive text'\n  }\n}",...WithErrors.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Empty","WithErrors"]}}]);