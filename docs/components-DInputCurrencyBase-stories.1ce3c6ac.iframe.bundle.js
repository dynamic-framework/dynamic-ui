(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[9616],{"./src/hooks/useInputCurrency.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return useInputCurrency}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),currency_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/currency.js@2.0.4/node_modules/currency.js/dist/currency.min.js"),currency_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(currency_js__WEBPACK_IMPORTED_MODULE_1__),_useProvidedRefOrCreate__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useProvidedRefOrCreate.ts"),_components_config__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/config.ts");function formatValue(value,currencyOptions){return void 0===value?"":currency_js__WEBPACK_IMPORTED_MODULE_1___default()(value,{...currencyOptions,symbol:""}).format()}function useInputCurrency(currencyOptions,value,onFocus,onChange,onBlur,ref){const inputRef=(0,_useProvidedRefOrCreate__WEBPACK_IMPORTED_MODULE_2__.Z)(ref),[innerType,setInnerType]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("text"),[innerNumber,setInnerNumber]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),[innerString,setInnerString]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(formatValue(value,currencyOptions)),handleOnFocus=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{event.stopPropagation(),setInnerType("number"),onFocus?.(event)}),[onFocus]),handleOnBlur=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{event.stopPropagation(),setInnerType("text"),onBlur?.(event)}),[onBlur]),generateStyleVariables=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`--${_components_config__WEBPACK_IMPORTED_MODULE_3__.k2}input-currency-component-symbol-color`]:`var(--${_components_config__WEBPACK_IMPORTED_MODULE_3__.k2}secondary)`,[`--${_components_config__WEBPACK_IMPORTED_MODULE_3__.k2}input-currency-symbol-color`]:`var(--${_components_config__WEBPACK_IMPORTED_MODULE_3__.k2}input-currency-component-symbol-color)`})),[]),generateSymbolStyleVariables=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({color:`var(--${_components_config__WEBPACK_IMPORTED_MODULE_3__.k2}input-currency-symbol-color)`})),[]),handleOnChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue=>{const newNumber=void 0===newValue||""===newValue?void 0:Number(newValue);setInnerNumber(newNumber),setInnerString(formatValue(newNumber,currencyOptions))}),[currencyOptions]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{onChange?.(innerNumber)}),[onChange,innerNumber]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setInnerNumber(value)}),[value]);return{inputRef:inputRef,innerValue:(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(void 0===value||""===value.toString())return"";return("number"===innerType?innerNumber?.toString():innerString)??""}),[value,innerType,innerNumber,innerString]),innerType:innerType,handleOnFocus:handleOnFocus,handleOnChange:handleOnChange,handleOnBlur:handleOnBlur,generateStyleVariables:generateStyleVariables,generateSymbolStyleVariables:generateSymbolStyleVariables}}},"./stories/components/DInputCurrencyBase.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Confirm:function(){return Confirm},Default:function(){return Default},Disabled:function(){return Disabled},Error:function(){return Error},Floating:function(){return Floating},WithCurrencyCode:function(){return WithCurrencyCode},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DInputCurrencyBase_stories}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),DInput=__webpack_require__("./src/components/DInput/index.ts"),useInputCurrency=__webpack_require__("./src/hooks/useInputCurrency.ts"),useDisableInputWheel=__webpack_require__("./src/hooks/useDisableInputWheel.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DInputCurrencyBase({value:value,minValue:minValue,maxValue:maxValue,currencyOptions:currencyOptions,currencyCode:currencyCode,onFocus:onFocus,onBlur:onBlur,onChange:onChange,...inputProps},ref){const{handleOnWheel:handleOnWheel}=(0,useDisableInputWheel.Z)(ref),{inputRef:inputRef,innerValue:innerValue,innerType:innerType,handleOnFocus:handleOnFocus,handleOnChange:handleOnChange,handleOnBlur:handleOnBlur,generateStyleVariables:generateStyleVariables,generateSymbolStyleVariables:generateSymbolStyleVariables}=(0,useInputCurrency.Z)(currencyOptions,value,onFocus,onChange,onBlur,ref);return(0,jsx_runtime.jsx)(DInput.Z,{ref:inputRef,value:innerValue,onChange:handleOnChange,style:generateStyleVariables,inputMode:"decimal",pattern:"^[0-9]",type:innerType,onFocus:handleOnFocus,onBlur:handleOnBlur,onWheel:handleOnWheel,inputStart:(0,jsx_runtime.jsx)("span",{slot:"input-start",style:generateSymbolStyleVariables,children:currencyCode||currencyOptions.symbol}),...inputProps})}DInputCurrencyBase.displayName="DInputCurrencyBase";const ForwardedDInputCurrencyBase=(0,react.forwardRef)(DInputCurrencyBase);ForwardedDInputCurrencyBase.displayName="DInputCurrencyBase";var DInputCurrencyBase_DInputCurrencyBase=ForwardedDInputCurrencyBase;try{DInputCurrencyBase.displayName="DInputCurrencyBase",DInputCurrencyBase.__docgenInfo={description:"",displayName:"DInputCurrencyBase",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},labelIcon:{defaultValue:null,description:"",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},labelIconMaterialStyle:{defaultValue:null,description:"",name:"labelIconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},invalidIcon:{defaultValue:null,description:"",name:"invalidIcon",required:!1,type:{name:"string | undefined"}},validIcon:{defaultValue:null,description:"",name:"validIcon",required:!1,type:{name:"string | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!1,type:{name:"number | undefined"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"number | undefined"}},currencyOptions:{defaultValue:null,description:"",name:"currencyOptions",required:!0,type:{name:"Options"}},currencyCode:{defaultValue:null,description:"",name:"currencyCode",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: number | undefined) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DInputCurrencyBase/DInputCurrencyBase.tsx#DInputCurrencyBase"]={docgenInfo:DInputCurrencyBase.__docgenInfo,name:"DInputCurrencyBase",path:"src/components/DInputCurrencyBase/DInputCurrencyBase.tsx#DInputCurrencyBase"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./stories/config/constants.ts"),config=__webpack_require__("./src/components/config.ts");var DInputCurrencyBase_stories={title:"Design System/Components/Input Currency Base",component:DInputCurrencyBase_DInputCurrencyBase,parameters:{docs:{description:{component:`\nComponent composition with \`d-input\` to make a currency input component.\n\n## CSS Variables\n| Variable                                         | Type            | Description                   |\n|--------------------------------------------------|-----------------|-------------------------------|\n| --${config.k2}label-color                        | css color unit  | Label color                   |\n| --${config.k2}label-font-weight                  | css font weight | Label font weight             |\n| --${config.k2}label-font-size                    | css length unit | Label font size               |\n| --${config.k2}label-padding-x                    | css length unit | Label horizontal padding      |\n| --${config.k2}label-padding-y                    | css length unit | Label vertical padding        |\n| --${config.k2}input-border-color                 | css color unit  | Input border color            |\n| --${config.k2}input-border-width                 | css length unit | Input border width            |\n| --${config.k2}input-border-radius                | css length unit | Input border radius           |\n| --${config.k2}input-focus-border-color           | css color unit  | Input focus border color      |\n| --${config.k2}input-focus-box-shadow             | css shadow      | Input focus box shadow        |\n| --${config.k2}input-disabled-bg                  | css color unit  | Input disable background      |\n| --${config.k2}input-disabled-color               | css color unit  | Input disable color           |\n| --${config.k2}input-disabled-border-color        | css color unit  | Input disable border color    |\n| --${config.k2}form-text-padding                  | css length unit | Hint padding                  |\n| --${config.k2}form-text-gap                      | css length unit | Space between hint elements   |\n| --${config.k2}form-text-color                    | css color unit  | Hint color                    |\n| --${config.k2}form-control-text-align            | css text align  | Input text align              |\n| --${config.k2}input-currency-symbol-color        | css color unit  | Color of the currency symbol  |\n        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},label:{control:"text",type:"string"},className:{control:"text",type:"string"},style:{control:"object"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},placeholder:{control:"text",type:"string"},value:{control:"number",type:"number",description:"The value of the input"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},iconStartAriaLabel:{control:"text",type:"string"},iconEndAriaLabel:{control:"text",type:"string"},validIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},invalidIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},currencyCode:{control:"text",type:"string"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},minValue:{control:"number",type:"number"},maxValue:{control:"number",type:"number"},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},onChange:{action:"onChange"}},tags:["autodocs"]};const Default={args:{id:"componentId1",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyOptions:{symbol:"$",precision:2,separator:",",decimal:"."}}},Error={args:{id:"componentId3",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyOptions:{symbol:"$",precision:2,separator:",",decimal:"."},invalid:!0}},Confirm={args:{id:"componentId4",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyOptions:{symbol:"$",precision:2,separator:",",decimal:"."},valid:!0}},Disabled={args:{id:"componentId5",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyOptions:{symbol:"$",precision:2,separator:",",decimal:"."},disabled:!0}},WithCurrencyCode={args:{id:"componentId6",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyCode:"CLP",currencyOptions:{symbol:"$",precision:2,separator:",",decimal:"."}}},Floating={args:{id:"componentId7",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyOptions:{symbol:"$",precision:2,separator:",",decimal:"."},floatingLabel:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId1',\n    label: 'Label',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    value: undefined,\n    minValue: 0,\n    maxValue: 100000,\n    currencyOptions: {\n      symbol: '$',\n      precision: 2,\n      separator: ',',\n      decimal: '.'\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId3',\n    label: 'Label',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    value: undefined,\n    minValue: 0,\n    maxValue: 100000,\n    currencyOptions: {\n      symbol: '$',\n      precision: 2,\n      separator: ',',\n      decimal: '.'\n    },\n    invalid: true\n  }\n}",...Error.parameters?.docs?.source}}},Confirm.parameters={...Confirm.parameters,docs:{...Confirm.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId4',\n    label: 'Label',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    value: undefined,\n    minValue: 0,\n    maxValue: 100000,\n    currencyOptions: {\n      symbol: '$',\n      precision: 2,\n      separator: ',',\n      decimal: '.'\n    },\n    valid: true\n  }\n}",...Confirm.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId5',\n    label: 'Label',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    value: undefined,\n    minValue: 0,\n    maxValue: 100000,\n    currencyOptions: {\n      symbol: '$',\n      precision: 2,\n      separator: ',',\n      decimal: '.'\n    },\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},WithCurrencyCode.parameters={...WithCurrencyCode.parameters,docs:{...WithCurrencyCode.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId6',\n    label: 'Label',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    value: undefined,\n    minValue: 0,\n    maxValue: 100000,\n    currencyCode: 'CLP',\n    currencyOptions: {\n      symbol: '$',\n      precision: 2,\n      separator: ',',\n      decimal: '.'\n    }\n  }\n}",...WithCurrencyCode.parameters?.docs?.source}}},Floating.parameters={...Floating.parameters,docs:{...Floating.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId7',\n    label: 'Label',\n    placeholder: 'Placeholder',\n    labelIcon: undefined,\n    value: undefined,\n    minValue: 0,\n    maxValue: 100000,\n    currencyOptions: {\n      symbol: '$',\n      precision: 2,\n      separator: ',',\n      decimal: '.'\n    },\n    floatingLabel: true\n  }\n}",...Floating.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Error","Confirm","Disabled","WithCurrencyCode","Floating"]},"../../node_modules/.pnpm/currency.js@2.0.4/node_modules/currency.js/dist/currency.min.js":function(module){module.exports=function(){function e(b,a){if(!(this instanceof e))return new e(b,a);a=Object.assign({},m,a);var d=Math.pow(10,a.precision);this.intValue=b=g(b,a),this.value=b/d,a.increment=a.increment||1/d,a.groups=a.useVedic?n:p,this.s=a,this.p=d}function g(b,a){var d=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],c=a.decimal,h=a.errorOnInvalid,k=a.fromCents,l=Math.pow(10,a.precision),f=b instanceof e;if(f&&k)return b.intValue;if("number"==typeof b||f)c=f?b.value:b;else if("string"==typeof b)h=new RegExp("[^-\\d"+c+"]","g"),c=new RegExp("\\"+c,"g"),c=(c=b.replace(/\((.*)\)/,"-$1").replace(h,"").replace(c,"."))||0;else{if(h)throw Error("Invalid Input");c=0}return k||(c=(c*l).toFixed(4)),d?Math.round(c):c}var m={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:function(b,a){var d=a.pattern,c=a.negativePattern,h=a.symbol,k=a.separator,l=a.decimal;a=a.groups;var f=(""+b).replace(/^-/,"").split("."),q=f[0];return f=f[1],(0<=b.value?d:c).replace("!",h).replace("#",q.replace(a,"$1"+k)+(f?l+f:""))},fromCents:!1},p=/(\d)(?=(\d{3})+\b)/g,n=/(\d)(?=(\d\d)+\d\b)/g;return e.prototype={add:function(b){var a=this.s,d=this.p;return e((this.intValue+g(b,a))/(a.fromCents?1:d),a)},subtract:function(b){var a=this.s,d=this.p;return e((this.intValue-g(b,a))/(a.fromCents?1:d),a)},multiply:function(b){var a=this.s;return e(this.intValue*b/(a.fromCents?1:Math.pow(10,a.precision)),a)},divide:function(b){var a=this.s;return e(this.intValue/g(b,a,!1),a)},distribute:function(b){var a=this.intValue,d=this.p,c=this.s,h=[],k=Math[0<=a?"floor":"ceil"](a/b),l=Math.abs(a-k*b);for(d=c.fromCents?1:d;0!==b;b--){var f=e(k/d,c);0<l--&&(f=f[0<=a?"add":"subtract"](1/d)),h.push(f)}return h},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(b){var a=this.s;return"function"==typeof b?b(this,a):a.format(this,Object.assign({},a,b))},toString:function(){var b=this.s,a=b.increment;return(Math.round(this.intValue/this.p/a)*a).toFixed(b.precision)},toJSON:function(){return this.value}},e}()}}]);