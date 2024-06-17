"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[7959],{"./stories/components/DSelect.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Disabled:function(){return Disabled},EmojiOption:function(){return EmojiOption},EmojiTextOption:function(){return EmojiTextOption},IconOption:function(){return IconOption},Layout:function(){return Layout},Loading:function(){return Loading},MaterialStyleIcons:function(){return MaterialStyleIcons},Multi:function(){return Multi},MultiCheckOption:function(){return MultiCheckOption},Selected:function(){return Selected},SelectedWithMenuOpen:function(){return SelectedWithMenuOpen},__namedExportsOrder:function(){return __namedExportsOrder}});var _src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/DSelect/index.ts"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/contexts/DContext.tsx"),_src_components_config__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/config.ts"),_config_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/config/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const config={title:"Design System/Components/Select",component:_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{docs:{description:{component:`\n![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)\n\nTo understand in more detail the aspects covered by this component, review the following documentation:\n\n+ [React Select](https://react-select.com/home)\n\n## CSS Variables\n| Variable                                            | Class         | Type            | Description                                  |\n|-----------------------------------------------------|---------------|-----------------|----------------------------------------------|\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}label-color                           | :root         | css color unit  | Label color                                  |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}label-font-weight                     | :root         | css font weight | Label font weight                            |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}label-font-size                       | :root         | css length unit | Label font size                              |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}label-padding-x                       | :root         | css length unit | Label horizontal padding                     |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}label-padding-y                       | :root         | css length unit | Label vertical padding                       |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}form-text-padding                     | .form-text    | css length unit | Hint padding                                 |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}form-text-gap                         | .form-text    | css length unit | Space between hint elements                  |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}form-text-color                       | .form-text    | css color unit  | Hint color                                   |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}form-control-text-align               | .form-control | css text align  | Input text align                             |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-gap                            | .d-select     | css length unit | Space between layout elements                |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-menu-shadow                    | .d-select     | css shadow      | Input menu shadow                            |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-option-focus-bg                | .d-select     | css color unit  | Input menu option focus background           |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-option-selected-color          | .d-select     | css color unit  | Input menu selected option text color        |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-option-selected-bg             | .d-select     | css color unit  | Input menu selected option background color  |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-option-is-checkbox-font-size   | .d-select     | css length unit | Input menu option checkbox label font size   |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-option-is-checkbox-font-weight | .d-select     | css length unit | Input menu option checkbox label font weight |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-option-is-checkbox-color       | .d-select     | css color unit  | Input menu option checkbox text color        |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-option-has-icon-icon-size      | .d-select     | css length unit | Input menu option icon size                  |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-multi-value-padding-x          | .d-select     | css length unit | Input multi value padding x                  |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-multi-value-padding-y          | .d-select     | css length unit | Input multi value padding y                  |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-multi-value-margin-right       | .d-select     | css length unit | Input multi value margin right               |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-multi-value-background         | .d-select     | css color unit  | Input multi value background color           |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-multi-value-border-radius      | .d-select     | css length unit | Input multi value border radius              |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-multi-value-label-color        | .d-select     | css color unit  | Input multi value label color                |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-indicator-width                | .d-select     | css length unit | Input indicator width                        |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}select-indicator-height               | .d-select     | css length unit | Input indicator height                       |\n        `}}},argTypes:{id:{control:"text",type:"string",description:"The ID of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string",description:"The CSS class for the component"},style:{control:"object",description:"The CSS style for the component"},label:{control:"text",type:"string",description:"The label text for the component"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,..._config_constants__WEBPACK_IMPORTED_MODULE_3__.UZ],description:"The icon for the label of the component"},labelIconFamilyClass:{control:"text",type:"string",description:"The icon family class for the label icon"},labelIconFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the label icon"},iconFamilyClass:{control:"text",type:"string",description:"The icon family class for the icons"},iconFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the icons"},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,..._config_constants__WEBPACK_IMPORTED_MODULE_3__.UZ],description:"The icon at the start of the input"},iconStartDisabled:{control:"boolean",type:"boolean",description:"Determines if the start icon is disabled"},iconStartAriaLabel:{control:"text",type:"string",description:"The ARIA label for the start icon"},iconStartTabIndex:{control:"number",type:"number",description:"The tabindex for the start icon"},iconStartFamilyClass:{control:"text",type:"string",description:"The icon family class for the start icon"},iconStartFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the start icon"},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,..._config_constants__WEBPACK_IMPORTED_MODULE_3__.UZ],description:"The icon at the end of the input"},iconEndDisabled:{control:"boolean",type:"boolean",description:"Determines if the end icon is disabled"},iconEndAriaLabel:{control:"text",type:"string",description:"The ARIA label for the end icon"},iconEndFamilyClass:{control:"text",type:"string",description:"The icon family class for the end icon"},iconEndFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the end icon"},iconEndTabIndex:{control:"number",type:"number",description:"The tabindex for the end icon"},hint:{control:"text",type:"string",description:"The hint to display, also used for validity feedback"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}},description:"Determines if the input is invalid"},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}},description:"Determines if the input is valid"},menuWithMaxContent:{control:"boolean",type:"boolean",description:"Determines if the menu should have maximum content height"},disabled:{control:"boolean",type:"boolean",description:"Determines if the input is disabled"},clearable:{control:"boolean",type:"boolean",description:"Determines if the input can be cleared"},loading:{control:"boolean",type:"boolean",description:"Determines if the input is in a loading state"},rtl:{control:"boolean",type:"boolean",description:"Determines if the input is right-to-left"},searchable:{control:"boolean",type:"boolean",description:"Determines if the input is searchable"},multi:{control:"boolean",type:"boolean",description:"Determines if the input is multi-select"},defaultInputValue:{control:"text",type:"string",description:"The default value for the input"},defaultMenuIsOpen:{control:"boolean",type:"boolean",description:"Determines if the menu should be open by default"},defaultValue:{control:"object",description:"The default selected value(s) for the input"},classNamePrefix:{control:"text",type:"string",description:"The prefix for the CSS class names"},options:{control:"array",description:"The options for the select input"},value:{control:"object",description:"The selected value(s) for the input"},onFocus:{action:"focused",description:"Event fired when the input is focused"},onBlur:{action:"blurred",description:"Event fired when the input is blurred"},onKeyDown:{action:"keyDowned",description:"Event fired when a key is pressed down"},menuIsOpen:{control:"boolean",description:"Determines if the menu is open"},hideSelectedOptions:{control:"boolean",description:"Determines if selected options should be hidden"},closeMenuOnSelect:{control:"boolean",description:"Determines if the menu should close on selection"},blurInputOnSelect:{control:"boolean",description:"Determines if the input should be blurred on selection"},isOptionDisabled:{control:"boolean",description:"Determines if an option is disabled"},loadingMessage:{control:"text",description:"The loading message to display"},noOptionsMessage:{control:"text",description:"The message to display when no options are available"},menuPortalTarget:{control:"text",description:"The DOM element to append the menu to"},menuPlacement:{control:"text",description:"The placement of the menu"},menuPosition:{control:"text",description:"The position of the menu"},menuShouldBlockScroll:{control:"boolean",description:"Determines if scrolling should be blocked when the menu is open"},menuShouldScrollIntoView:{control:"boolean",description:"Determines if the menu should scroll into view when opened"},formatGroupLabel:{control:"function",description:"Function to format group labels"},formatOptionLabel:{control:"function",description:"Function to format option labels"},getOptionLabel:{control:"function",description:"Function to get the label of an option"},getOptionValue:{control:"function",description:"Function to get the value of an option"},inputId:{control:"text",description:"The ID of the input element"},inputValue:{control:"text",description:"The value of the input element"},instanceId:{control:"text",description:"The instance ID of the component"},styles:{control:"object",description:"Custom styles for the component"},theme:{control:"object",description:"Custom theme for the component"},"aria-label":{control:"text",description:"ARIA label for the component"},tabIndex:{control:"number",description:"The tab index of the component"},autoFocus:{control:"boolean",description:"Determines if the component should autofocus"},components:{control:"object",description:"Custom components for the input"},placeholder:{control:"text",description:"Placeholder text for the input"},escapeClearsValue:{control:"boolean",description:"Determines if pressing escape clears the value"},filterOption:{control:"function",description:"Function to filter options"},openMenuOnClick:{control:"boolean",description:"Determines if the menu should open on click"},closeMenuOnScroll:{control:"boolean",description:"Determines if the menu should close on scroll"},onMenuScrollToBottom:{action:"scrolledToBottom",description:"Event fired when the menu is scrolled to the bottom"},onMenuScrollToTop:{action:"scrolledToTop",description:"Event fired when the menu is scrolled to the top"},tabSelectsValue:{control:"boolean",description:"Determines if pressing tab selects the value"},backspaceRemovesValue:{control:"boolean",description:"Determines if pressing backspace removes the value"},maxMenuHeight:{control:"number",description:"The maximum height of the menu"},minMenuHeight:{control:"number",description:"The minimum height of the menu"},openMenuOnFocus:{control:"boolean",description:"Determines if the menu should open on focus"},onIconStartClick:{action:"onIconStartClick",description:"Event fired when the start icon is clicked"},onIconEndClick:{action:"onIconEndClick",description:"Event fired when the end icon is clicked"},onChange:{action:"onChange",description:"Event fired when the value changes"},onInputChange:{action:"onInputChange",description:"Event fired when the input value changes"}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"400px"},className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],tags:["autodocs"]};__webpack_exports__.default=config;const OPTIONS=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],OPTIONS_WITH_ICON=[{label:"Option 1",value:"1",icon:"fire"},{label:"Option 2",value:"2",icon:"calendar"},{label:"Option 3",value:"3",icon:"camera"}],OPTIONS_WITH_EMOJI=[{label:"Option 1",value:"1",emoji:"😀"},{label:"Option 2",value:"2",emoji:"🥶"},{label:"Option 3",value:"3",emoji:"👾"}],Default={args:{id:"componentId1",options:OPTIONS,style:{minWidth:"200px"}}},Selected={args:{id:"componentId2",defaultValue:OPTIONS[0],options:OPTIONS,style:{minWidth:"200px"}}},SelectedWithMenuOpen={args:{id:"componentId3",defaultValue:OPTIONS[0],options:OPTIONS,defaultMenuIsOpen:!0,style:{minWidth:"200px"}}},Multi={args:{id:"componentId4",defaultValue:[OPTIONS[1],OPTIONS[2]],options:OPTIONS,multi:!0,defaultMenuIsOpen:!0,style:{minWidth:"200px"}}},MultiCheckOption={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,components:{Option:_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z.OptionCheck}}),args:{id:"componentId5",defaultValue:[OPTIONS[1],OPTIONS[2]],options:OPTIONS,multi:!0,defaultMenuIsOpen:!0,hideSelectedOptions:!1,style:{minWidth:"200px"}}},IconOption={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,components:{Option:_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z.OptionIcon,SingleValue:_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z.SingleValueIconText}}),args:{id:"componentId6",defaultValue:OPTIONS_WITH_ICON[2],options:OPTIONS_WITH_ICON,defaultMenuIsOpen:!0,style:{minWidth:"200px"}}},EmojiOption={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,components:{Option:_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z.OptionEmoji,SingleValue:_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z.SingleValueEmoji}}),args:{id:"componentId7",defaultValue:OPTIONS_WITH_EMOJI[2],options:OPTIONS_WITH_EMOJI,defaultMenuIsOpen:!0,menuWithMaxContent:!0}},EmojiTextOption={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,components:{Option:_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z.OptionEmoji,SingleValue:_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z.SingleValueEmojiText}}),args:{id:"componentId7",defaultValue:OPTIONS_WITH_EMOJI[2],options:OPTIONS_WITH_EMOJI,defaultMenuIsOpen:!0}},Loading={args:{id:"componentId8",defaultValue:OPTIONS[2],options:OPTIONS,loading:!0,style:{minWidth:"200px"}}},Layout={args:{id:"componentId9",options:OPTIONS,label:"Label",hint:"Assistive text",style:{minWidth:"200px"}}},Disabled={args:{id:"componentId10",defaultValue:OPTIONS[2],options:OPTIONS,disabled:!0,style:{minWidth:"200px"}}},MaterialStyleIcons={parameters:{docs:{canvas:{sourceState:"shown"}}},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.oW,{..._config_constants__WEBPACK_IMPORTED_MODULE_3__.Hr,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DSelect__WEBPACK_IMPORTED_MODULE_1__.Z,{...args})}),args:{id:"componentId3",defaultValue:[OPTIONS[0]],options:OPTIONS,defaultMenuIsOpen:!0,multi:!0,style:{minWidth:"200px"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId1',\n    options: OPTIONS,\n    style: {\n      minWidth: '200px'\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Selected.parameters={...Selected.parameters,docs:{...Selected.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId2',\n    defaultValue: OPTIONS[0],\n    options: OPTIONS,\n    style: {\n      minWidth: '200px'\n    }\n  }\n}",...Selected.parameters?.docs?.source}}},SelectedWithMenuOpen.parameters={...SelectedWithMenuOpen.parameters,docs:{...SelectedWithMenuOpen.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId3',\n    defaultValue: OPTIONS[0],\n    options: OPTIONS,\n    defaultMenuIsOpen: true,\n    style: {\n      minWidth: '200px'\n    }\n  }\n}",...SelectedWithMenuOpen.parameters?.docs?.source}}},Multi.parameters={...Multi.parameters,docs:{...Multi.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId4',\n    defaultValue: [OPTIONS[1], OPTIONS[2]],\n    options: OPTIONS,\n    multi: true,\n    defaultMenuIsOpen: true,\n    style: {\n      minWidth: '200px'\n    }\n  }\n}",...Multi.parameters?.docs?.source}}},MultiCheckOption.parameters={...MultiCheckOption.parameters,docs:{...MultiCheckOption.parameters?.docs,source:{originalSource:"{\n  render: args => <DSelect {...args} components={{\n    Option: DSelect.OptionCheck\n  }} />,\n  args: {\n    id: 'componentId5',\n    defaultValue: [OPTIONS[1], OPTIONS[2]],\n    options: OPTIONS,\n    multi: true,\n    defaultMenuIsOpen: true,\n    hideSelectedOptions: false,\n    style: {\n      minWidth: '200px'\n    }\n  }\n}",...MultiCheckOption.parameters?.docs?.source}}},IconOption.parameters={...IconOption.parameters,docs:{...IconOption.parameters?.docs,source:{originalSource:"{\n  render: args => <DSelect<OptionIcon> {...args} components={{\n    Option: DSelect.OptionIcon,\n    SingleValue: DSelect.SingleValueIconText\n  }} />,\n  args: {\n    id: 'componentId6',\n    defaultValue: OPTIONS_WITH_ICON[2],\n    options: OPTIONS_WITH_ICON,\n    defaultMenuIsOpen: true,\n    style: {\n      minWidth: '200px'\n    }\n  }\n}",...IconOption.parameters?.docs?.source}}},EmojiOption.parameters={...EmojiOption.parameters,docs:{...EmojiOption.parameters?.docs,source:{originalSource:"{\n  render: args => <DSelect<OptionEmoji> {...args} components={{\n    Option: DSelect.OptionEmoji,\n    SingleValue: DSelect.SingleValueEmoji\n  }} />,\n  args: {\n    id: 'componentId7',\n    defaultValue: OPTIONS_WITH_EMOJI[2],\n    options: OPTIONS_WITH_EMOJI,\n    defaultMenuIsOpen: true,\n    menuWithMaxContent: true\n  }\n}",...EmojiOption.parameters?.docs?.source}}},EmojiTextOption.parameters={...EmojiTextOption.parameters,docs:{...EmojiTextOption.parameters?.docs,source:{originalSource:"{\n  render: args => <DSelect<OptionEmoji> {...args} components={{\n    Option: DSelect.OptionEmoji,\n    SingleValue: DSelect.SingleValueEmojiText\n  }} />,\n  args: {\n    id: 'componentId7',\n    defaultValue: OPTIONS_WITH_EMOJI[2],\n    options: OPTIONS_WITH_EMOJI,\n    defaultMenuIsOpen: true\n  }\n}",...EmojiTextOption.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId8',\n    defaultValue: OPTIONS[2],\n    options: OPTIONS,\n    loading: true,\n    style: {\n      minWidth: '200px'\n    }\n  }\n}",...Loading.parameters?.docs?.source}}},Layout.parameters={...Layout.parameters,docs:{...Layout.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId9',\n    options: OPTIONS,\n    label: 'Label',\n    hint: 'Assistive text',\n    style: {\n      minWidth: '200px'\n    }\n  }\n}",...Layout.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId10',\n    defaultValue: OPTIONS[2],\n    options: OPTIONS,\n    disabled: true,\n    style: {\n      minWidth: '200px'\n    }\n  }\n}",...Disabled.parameters?.docs?.source}}},MaterialStyleIcons.parameters={...MaterialStyleIcons.parameters,docs:{...MaterialStyleIcons.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  },\n  render: args => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>\n      <DSelect {...args} />\n    </DContextProvider>,\n  args: {\n    id: 'componentId3',\n    defaultValue: [OPTIONS[0]],\n    options: OPTIONS,\n    defaultMenuIsOpen: true,\n    multi: true,\n    style: {\n      minWidth: '200px'\n    }\n  }\n}",...MaterialStyleIcons.parameters?.docs?.source},description:{story:"To use material symbols or any other material symbols style icon suite you can\nuse a `DContextProvider` to achieve global configuration",...MaterialStyleIcons.parameters?.docs?.description}}};const __namedExportsOrder=["Default","Selected","SelectedWithMenuOpen","Multi","MultiCheckOption","IconOption","EmojiOption","EmojiTextOption","Loading","Layout","Disabled","MaterialStyleIcons"];try{MaterialStyleIcons.displayName="MaterialStyleIcons",MaterialStyleIcons.__docgenInfo={description:"To use material symbols or any other material symbols style icon suite you can\nuse a `DContextProvider` to achieve global configuration",displayName:"MaterialStyleIcons",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/DSelect.stories.tsx#MaterialStyleIcons"]={docgenInfo:MaterialStyleIcons.__docgenInfo,name:"MaterialStyleIcons",path:"stories/components/DSelect.stories.tsx#MaterialStyleIcons"})}catch(__react_docgen_typescript_loader_error){}}}]);