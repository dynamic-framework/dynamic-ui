"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[9488],{"./stories/components/DInputCounter.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Confirm:function(){return Confirm},Default:function(){return Default},Disabled:function(){return Disabled},Error:function(){return Error},Floating:function(){return Floating},MaterialIcon:function(){return MaterialIcon},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DInputCounter_stories}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),DInput=__webpack_require__("./src/components/DInput/index.ts"),config=__webpack_require__("./src/components/config.ts"),useProvidedRefOrCreate=__webpack_require__("./src/hooks/useProvidedRefOrCreate.ts"),DContext=__webpack_require__("./src/contexts/DContext.tsx"),useDisableInputWheel=__webpack_require__("./src/hooks/useDisableInputWheel.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DInputCounter({minValue:minValue,maxValue:maxValue,value:value=minValue,invalid:invalid,iconStart:iconStartProp,iconEnd:iconEndProp,iconStartAriaLabel:iconStartAriaLabel="decrease action",iconEndAriaLabel:iconEndAriaLabel="increase action",style:style,onChange:onChange,...props},ref){const{handleOnWheel:handleOnWheel}=(0,useDisableInputWheel.Z)(ref),inputRef=(0,useProvidedRefOrCreate.Z)(ref),[internalIsInvalid,setInternalIsInvalid]=(0,react.useState)(!1),[internalValue,setInternalValue]=(0,react.useState)(value);(0,react.useEffect)((()=>{setInternalValue(value)}),[value]),(0,react.useEffect)((()=>{onChange?.(Number(internalValue))}),[onChange,internalValue]);const handleOnChange=(0,react.useCallback)((newValue=>{setInternalValue(Number(newValue||"0"))}),[]),handleOnIconStartClick=(0,react.useCallback)((()=>{setInternalValue((prevInternalValue=>Math.max(prevInternalValue-1,minValue)))}),[minValue]),handleOnIconEndClick=(0,react.useCallback)((()=>{setInternalValue((prevInternalValue=>Math.min(prevInternalValue+1,maxValue)))}),[maxValue]),generateStyleVariables=(0,react.useMemo)((()=>({...style,[`--${config.k2}form-control-component-text-align`]:"center"})),[style]),valueString=(0,react.useMemo)((()=>internalValue.toString()),[internalValue]);(0,react.useEffect)((()=>{setInternalIsInvalid(!(internalValue>=minValue&&internalValue<=maxValue))}),[internalValue,minValue,maxValue]);const{iconMap:{input:input}}=(0,DContext.Fg)(),iconEnd=(0,react.useMemo)((()=>iconEndProp||input.increase),[iconEndProp,input.increase]),iconStart=(0,react.useMemo)((()=>iconStartProp||input.decrease),[iconStartProp,input.decrease]);return(0,jsx_runtime.jsx)(DInput.Z,{ref:inputRef,value:valueString,style:generateStyleVariables,iconStart:iconStart,iconEnd:iconEnd,invalid:internalIsInvalid||invalid,type:"number",onChange:handleOnChange,onWheel:handleOnWheel,onIconStartClick:handleOnIconStartClick,onIconEndClick:handleOnIconEndClick,iconStartAriaLabel:iconStartAriaLabel,iconEndAriaLabel:iconEndAriaLabel,...internalValue===minValue&&{iconStartDisabled:!0},...internalValue===maxValue&&{iconEndDisabled:!0},...props})}DInputCounter.displayName="DInputCounter";const ForwardedDInputCounter=(0,react.forwardRef)(DInputCounter);ForwardedDInputCounter.displayName="DInputCounter";var DInputCounter_DInputCounter=ForwardedDInputCounter;try{DInputCounter.displayName="DInputCounter",DInputCounter.__docgenInfo={description:"",displayName:"DInputCounter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},labelIcon:{defaultValue:null,description:"",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},labelIconMaterialStyle:{defaultValue:null,description:"",name:"labelIconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!0,type:{name:"number"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: number | undefined) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DInputCounter/DInputCounter.tsx#DInputCounter"]={docgenInfo:DInputCounter.__docgenInfo,name:"DInputCounter",path:"src/components/DInputCounter/DInputCounter.tsx#DInputCounter"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./stories/config/constants.ts");var DInputCounter_stories={title:"Design System/Components/Input Counter",component:DInputCounter_DInputCounter,parameters:{docs:{description:{component:`\nComponent composition with \`d-input\` to make a counter input component.\n\n## CSS Variables\n| Variable                                         | Type            | Description                   |\n|--------------------------------------------------|-----------------|-------------------------------|\n| --${config.k2}label-color                        | css color unit  | Label color                   |\n| --${config.k2}label-font-weight                  | css font weight | Label font weight             |\n| --${config.k2}label-font-size                    | css length unit | Label font size               |\n| --${config.k2}label-padding-x                    | css length unit | Label horizontal padding      |\n| --${config.k2}label-padding-y                    | css length unit | Label vertical padding        |\n| --${config.k2}input-border-color                 | css color unit  | Input border color            |\n| --${config.k2}input-border-width                 | css length unit | Input border width            |\n| --${config.k2}input-border-radius                | css length unit | Input border radius           |\n| --${config.k2}input-focus-border-color           | css color unit  | Input focus border color      |\n| --${config.k2}input-focus-box-shadow             | css shadow      | Input focus box shadow        |\n| --${config.k2}input-disabled-bg                  | css color unit  | Input disable background      |\n| --${config.k2}input-disabled-color               | css color unit  | Input disable color           |\n| --${config.k2}input-disabled-border-color        | css color unit  | Input disable border color    |\n| --${config.k2}form-text-padding                  | css length unit | Hint padding                  |\n| --${config.k2}form-text-gap                      | css length unit | Space between hint elements   |\n| --${config.k2}form-text-color                    | css color unit  | Hint color                    |\n| --${config.k2}form-control-text-align            | css text align  | Input text align              |\n        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string"},style:{control:"object"},label:{control:"text",type:"string"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},value:{control:"number",type:"number",description:"The value of the input"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},iconStartAriaLabel:{control:"text",type:"string"},iconEndAriaLabel:{control:"text",type:"string"},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},minValue:{control:"number",type:"number"},maxValue:{control:"number",type:"number"},onChange:{action:"onChange"}},tags:["autodocs"]};const Default={args:{id:"componentId1",label:"Label",labelIcon:void 0,minValue:0,maxValue:20,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},Error={args:{id:"componentId2",label:"Label",labelIcon:void 0,value:21,minValue:0,maxValue:20,invalid:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},Confirm={args:{id:"componentId3",label:"Label",labelIcon:void 0,value:2,minValue:0,maxValue:20,valid:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},Disabled={args:{id:"componentId4",label:"Label",labelIcon:void 0,value:3,minValue:0,maxValue:20,disabled:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},Floating={args:{id:"componentId5",label:"Label",labelIcon:void 0,value:3,minValue:0,maxValue:20,floatingLabel:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},MaterialIcon={render:args=>(0,jsx_runtime.jsx)(DContext.oW,{...constants.Hr,children:(0,jsx_runtime.jsx)(DInputCounter_DInputCounter,{...args})}),args:{id:"componentId6",label:"Label",labelIcon:void 0,value:3,minValue:0,maxValue:20,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"},parameters:{docs:{canvas:{sourceState:"shown"}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId1',\n    label: 'Label',\n    labelIcon: undefined,\n    minValue: 0,\n    maxValue: 20,\n    iconStartAriaLabel: 'decrease action',\n    iconEndAriaLabel: 'increase action'\n  }\n}",...Default.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId2',\n    label: 'Label',\n    labelIcon: undefined,\n    value: 21,\n    minValue: 0,\n    maxValue: 20,\n    invalid: true,\n    iconStartAriaLabel: 'decrease action',\n    iconEndAriaLabel: 'increase action'\n  }\n}",...Error.parameters?.docs?.source}}},Confirm.parameters={...Confirm.parameters,docs:{...Confirm.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId3',\n    label: 'Label',\n    labelIcon: undefined,\n    value: 2,\n    minValue: 0,\n    maxValue: 20,\n    valid: true,\n    iconStartAriaLabel: 'decrease action',\n    iconEndAriaLabel: 'increase action'\n  }\n}",...Confirm.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId4',\n    label: 'Label',\n    labelIcon: undefined,\n    value: 3,\n    minValue: 0,\n    maxValue: 20,\n    disabled: true,\n    iconStartAriaLabel: 'decrease action',\n    iconEndAriaLabel: 'increase action'\n  }\n}",...Disabled.parameters?.docs?.source}}},Floating.parameters={...Floating.parameters,docs:{...Floating.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId5',\n    label: 'Label',\n    labelIcon: undefined,\n    value: 3,\n    minValue: 0,\n    maxValue: 20,\n    floatingLabel: true,\n    iconStartAriaLabel: 'decrease action',\n    iconEndAriaLabel: 'increase action'\n  }\n}",...Floating.parameters?.docs?.source}}},MaterialIcon.parameters={...MaterialIcon.parameters,docs:{...MaterialIcon.parameters?.docs,source:{originalSource:"{\n  render: (args: ComponentProps<typeof DInputCounter>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>\n      <DInputCounter {...args} />\n    </DContextProvider>,\n  args: {\n    id: 'componentId6',\n    label: 'Label',\n    labelIcon: undefined,\n    value: 3,\n    minValue: 0,\n    maxValue: 20,\n    iconStartAriaLabel: 'decrease action',\n    iconEndAriaLabel: 'increase action'\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  }\n}",...MaterialIcon.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Error","Confirm","Disabled","Floating","MaterialIcon"]}}]);