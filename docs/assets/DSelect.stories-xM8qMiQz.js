import{j as i}from"./jsx-runtime-DQ32znRX.js";import{D as n}from"./DSelect-3c_rQIPz.js";import{P as e}from"./config-CUZHf55T.js";import{I as x,a as ue}from"./constants-DhWTmuJQ.js";import{D as me}from"./DContext-9gKMeQXa.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-D9uilScg.js";import"./floating-ui.dom-B5CW5bK0.js";import"./index-mLFX9G4A.js";import"./DIcon-CDY5yPx9.js";import"./DInputCheck-RcgiJNa9.js";const Pe={title:"Design System/Components/Select",component:n,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [React Select](https://react-select.com/home)

## CSS Variables
| Variable                                            | Class         | Type            | Description                                  |
|-----------------------------------------------------|---------------|-----------------|----------------------------------------------|
| --${e}label-color                           | :root         | css color unit  | Label color                                  |
| --${e}label-font-weight                     | :root         | css font weight | Label font weight                            |
| --${e}label-font-size                       | :root         | css length unit | Label font size                              |
| --${e}label-padding-x                       | :root         | css length unit | Label horizontal padding                     |
| --${e}label-padding-y                       | :root         | css length unit | Label vertical padding                       |
| --${e}form-text-padding                     | .form-text    | css length unit | Hint padding                                 |
| --${e}form-text-gap                         | .form-text    | css length unit | Space between hint elements                  |
| --${e}form-text-color                       | .form-text    | css color unit  | Hint color                                   |
| --${e}form-control-text-align               | .form-control | css text align  | Input text align                             |
| --${e}select-gap                            | .d-select     | css length unit | Space between layout elements                |
| --${e}select-menu-shadow                    | .d-select     | css shadow      | Input menu shadow                            |
| --${e}select-option-focus-bg                | .d-select     | css color unit  | Input menu option focus background           |
| --${e}select-option-selected-color          | .d-select     | css color unit  | Input menu selected option text color        |
| --${e}select-option-selected-bg             | .d-select     | css color unit  | Input menu selected option background color  |
| --${e}select-option-is-checkbox-font-size   | .d-select     | css length unit | Input menu option checkbox label font size   |
| --${e}select-option-is-checkbox-font-weight | .d-select     | css length unit | Input menu option checkbox label font weight |
| --${e}select-option-is-checkbox-color       | .d-select     | css color unit  | Input menu option checkbox text color        |
| --${e}select-option-has-icon-icon-size      | .d-select     | css length unit | Input menu option icon size                  |
| --${e}select-multi-value-padding-x          | .d-select     | css length unit | Input multi value padding x                  |
| --${e}select-multi-value-padding-y          | .d-select     | css length unit | Input multi value padding y                  |
| --${e}select-multi-value-margin-right       | .d-select     | css length unit | Input multi value margin right               |
| --${e}select-multi-value-background         | .d-select     | css color unit  | Input multi value background color           |
| --${e}select-multi-value-border-radius      | .d-select     | css length unit | Input multi value border radius              |
| --${e}select-multi-value-label-color        | .d-select     | css color unit  | Input multi value label color                |
| --${e}select-indicator-width                | .d-select     | css length unit | Input indicator width                        |
| --${e}select-indicator-height               | .d-select     | css length unit | Input indicator height                       |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The ID of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string",description:"The CSS class for the component"},style:{control:"object",description:"The CSS style for the component"},label:{control:"text",type:"string",description:"The label text for the component"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...x],description:"The icon for the label of the component"},labelIconFamilyClass:{control:"text",type:"string",description:"The icon family class for the label icon"},labelIconFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the label icon"},iconFamilyClass:{control:"text",type:"string",description:"The icon family class for the icons"},iconFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the icons"},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...x],description:"The icon at the start of the input"},iconStartDisabled:{control:"boolean",type:"boolean",description:"Determines if the start icon is disabled"},iconStartAriaLabel:{control:"text",type:"string",description:"The ARIA label for the start icon"},iconStartTabIndex:{control:"number",type:"number",description:"The tabindex for the start icon"},iconStartFamilyClass:{control:"text",type:"string",description:"The icon family class for the start icon"},iconStartFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the start icon"},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...x],description:"The icon at the end of the input"},iconEndDisabled:{control:"boolean",type:"boolean",description:"Determines if the end icon is disabled"},iconEndAriaLabel:{control:"text",type:"string",description:"The ARIA label for the end icon"},iconEndFamilyClass:{control:"text",type:"string",description:"The icon family class for the end icon"},iconEndFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the end icon"},iconEndTabIndex:{control:"number",type:"number",description:"The tabindex for the end icon"},hint:{control:"text",type:"string",description:"The hint to display, also used for validity feedback"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Determines if the input is invalid"},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Determines if the input is valid"},menuWithMaxContent:{control:"boolean",type:"boolean",description:"Determines if the menu should have maximum content height"},disabled:{control:"boolean",type:"boolean",description:"Determines if the input is disabled"},clearable:{control:"boolean",type:"boolean",description:"Determines if the input can be cleared"},loading:{control:"boolean",type:"boolean",description:"Determines if the input is in a loading state"},rtl:{control:"boolean",type:"boolean",description:"Determines if the input is right-to-left"},searchable:{control:"boolean",type:"boolean",description:"Determines if the input is searchable"},multi:{control:"boolean",type:"boolean",description:"Determines if the input is multi-select"},defaultInputValue:{control:"text",type:"string",description:"The default value for the input"},defaultMenuIsOpen:{control:"boolean",type:"boolean",description:"Determines if the menu should be open by default"},defaultValue:{control:"object",description:"The default selected value(s) for the input"},classNamePrefix:{control:"text",type:"string",description:"The prefix for the CSS class names"},options:{control:"object",description:"The options for the select input"},value:{control:"object",description:"The selected value(s) for the input"},onFocus:{action:"focused",description:"Event fired when the input is focused"},onBlur:{action:"blurred",description:"Event fired when the input is blurred"},onKeyDown:{action:"keyDowned",description:"Event fired when a key is pressed down"},menuIsOpen:{control:"boolean",description:"Determines if the menu is open"},hideSelectedOptions:{control:"boolean",description:"Determines if selected options should be hidden"},closeMenuOnSelect:{control:"boolean",description:"Determines if the menu should close on selection"},blurInputOnSelect:{control:"boolean",description:"Determines if the input should be blurred on selection"},isOptionDisabled:{control:"boolean",description:"Determines if an option is disabled"},loadingMessage:{control:"text",description:"The loading message to display"},noOptionsMessage:{control:"text",description:"The message to display when no options are available"},menuPortalTarget:{control:"text",description:"The DOM element to append the menu to"},menuPlacement:{control:"text",description:"The placement of the menu"},menuPosition:{control:"text",description:"The position of the menu"},menuShouldBlockScroll:{control:"boolean",description:"Determines if scrolling should be blocked when the menu is open"},menuShouldScrollIntoView:{control:"boolean",description:"Determines if the menu should scroll into view when opened"},formatGroupLabel:{type:"function",description:"Function to format group labels"},formatOptionLabel:{type:"function",description:"Function to format option labels"},getOptionLabel:{type:"function",description:"Function to get the label of an option"},getOptionValue:{type:"function",description:"Function to get the value of an option"},inputId:{control:"text",description:"The ID of the input element"},inputValue:{control:"text",description:"The value of the input element"},instanceId:{control:"text",description:"The instance ID of the component"},styles:{control:"object",description:"Custom styles for the component"},theme:{control:"object",description:"Custom theme for the component"},"aria-label":{control:"text",description:"ARIA label for the component"},tabIndex:{control:"number",description:"The tab index of the component"},autoFocus:{control:"boolean",description:"Determines if the component should autofocus"},components:{control:"object",description:"Custom components for the input"},placeholder:{control:"text",description:"Placeholder text for the input"},escapeClearsValue:{control:"boolean",description:"Determines if pressing escape clears the value"},filterOption:{type:"function",description:"Function to filter options"},openMenuOnClick:{control:"boolean",description:"Determines if the menu should open on click"},closeMenuOnScroll:{control:"boolean",description:"Determines if the menu should close on scroll"},onMenuScrollToBottom:{action:"scrolledToBottom",description:"Event fired when the menu is scrolled to the bottom"},onMenuScrollToTop:{action:"scrolledToTop",description:"Event fired when the menu is scrolled to the top"},tabSelectsValue:{control:"boolean",description:"Determines if pressing tab selects the value"},backspaceRemovesValue:{control:"boolean",description:"Determines if pressing backspace removes the value"},maxMenuHeight:{control:"number",description:"The maximum height of the menu"},minMenuHeight:{control:"number",description:"The minimum height of the menu"},openMenuOnFocus:{control:"boolean",description:"Determines if the menu should open on focus"},onIconStartClick:{action:"onIconStartClick",description:"Event fired when the start icon is clicked"},onIconEndClick:{action:"onIconEndClick",description:"Event fired when the end icon is clicked"},onChange:{action:"onChange",description:"Event fired when the value changes"},onInputChange:{action:"onInputChange",description:"Event fired when the input value changes"}},decorators:[o=>i.jsx("div",{style:{height:"400px"},className:"position-relative",children:i.jsx(o,{})})],tags:["autodocs"]},t=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],y=[{label:"Option 1",value:"1",icon:"fire"},{label:"Option 2",value:"2",icon:"calendar"},{label:"Option 3",value:"3",icon:"camera"}],O=[{label:"Option 1",value:"1",emoji:"😀"},{label:"Option 2",value:"2",emoji:"🥶"},{label:"Option 3",value:"3",emoji:"👾"}],r={args:{id:"componentId1",options:t,style:{minWidth:"200px"}}},l={args:{id:"componentId2",defaultValue:t[0],options:t,style:{minWidth:"200px"}}},a={args:{id:"componentId3",defaultValue:t[0],options:t,defaultMenuIsOpen:!0,style:{minWidth:"200px"}}},c={args:{id:"componentId4",defaultValue:[t[1],t[2]],options:t,multi:!0,defaultMenuIsOpen:!0,style:{minWidth:"200px"}}},p={render:o=>i.jsx(n,{...o,components:{Option:n.OptionCheck}}),args:{id:"componentId5",defaultValue:[t[1],t[2]],options:t,multi:!0,defaultMenuIsOpen:!0,hideSelectedOptions:!1,style:{minWidth:"200px"}}},d={render:o=>i.jsx(n,{...o,components:{Option:n.OptionIcon,SingleValue:n.SingleValueIconText}}),args:{id:"componentId6",defaultValue:y[2],options:y,defaultMenuIsOpen:!0,style:{minWidth:"200px"}}},u={render:o=>i.jsx(n,{...o,components:{Option:n.OptionEmoji,SingleValue:n.SingleValueEmoji}}),args:{id:"componentId7",defaultValue:O[2],options:O,defaultMenuIsOpen:!0,menuWithMaxContent:!0}},m={render:o=>i.jsx(n,{...o,components:{Option:n.OptionEmoji,SingleValue:n.SingleValueEmojiText}}),args:{id:"componentId7",defaultValue:O[2],options:O,defaultMenuIsOpen:!0}},h={args:{id:"componentId8",defaultValue:t[2],options:t,loading:!0,style:{minWidth:"200px"}}},f={args:{id:"componentId9",options:t,label:"Label",hint:"Assistive text",style:{minWidth:"200px"}}},g={args:{id:"componentId10",defaultValue:t[2],options:t,disabled:!0,style:{minWidth:"200px"}}},b={args:{id:"componentId11",defaultValue:t[0],options:t,style:{minWidth:"200px"},invalid:!0}},I={args:{id:"componentId12",defaultValue:t[0],options:t,style:{minWidth:"200px"},valid:!0}},s={parameters:{docs:{canvas:{sourceState:"shown"}}},render:o=>i.jsx(me,{...ue,children:i.jsx(n,{...o})}),args:{id:"componentId13",defaultValue:[t[0]],options:t,defaultMenuIsOpen:!0,multi:!0,style:{minWidth:"200px"}}};var S,T,v;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    options: OPTIONS,
    style: {
      minWidth: '200px'
    }
  }
}`,...(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var D,V,P;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    style: {
      minWidth: '200px'
    }
  }
}`,...(P=(V=l.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var E,M,C;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    defaultMenuIsOpen: true,
    style: {
      minWidth: '200px'
    }
  }
}`,...(C=(M=a.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var N,W,j;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    defaultValue: [OPTIONS[1], OPTIONS[2]],
    options: OPTIONS,
    multi: true,
    defaultMenuIsOpen: true,
    style: {
      minWidth: '200px'
    }
  }
}`,...(j=(W=c.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var w,k,$;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <DSelect {...args} components={{
    Option: DSelect.OptionCheck
  }} />,
  args: {
    id: 'componentId5',
    defaultValue: [OPTIONS[1], OPTIONS[2]],
    options: OPTIONS,
    multi: true,
    defaultMenuIsOpen: true,
    hideSelectedOptions: false,
    style: {
      minWidth: '200px'
    }
  }
}`,...($=(k=p.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var _,F,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <DSelect<OptionIcon> {...args} components={{
    Option: DSelect.OptionIcon,
    SingleValue: DSelect.SingleValueIconText
  }} />,
  args: {
    id: 'componentId6',
    defaultValue: OPTIONS_WITH_ICON[2],
    options: OPTIONS_WITH_ICON,
    defaultMenuIsOpen: true,
    style: {
      minWidth: '200px'
    }
  }
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var A,R,H;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <DSelect<OptionEmoji> {...args} components={{
    Option: DSelect.OptionEmoji,
    SingleValue: DSelect.SingleValueEmoji
  }} />,
  args: {
    id: 'componentId7',
    defaultValue: OPTIONS_WITH_EMOJI[2],
    options: OPTIONS_WITH_EMOJI,
    defaultMenuIsOpen: true,
    menuWithMaxContent: true
  }
}`,...(H=(R=u.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var z,B,J;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <DSelect<OptionEmoji> {...args} components={{
    Option: DSelect.OptionEmoji,
    SingleValue: DSelect.SingleValueEmojiText
  }} />,
  args: {
    id: 'componentId7',
    defaultValue: OPTIONS_WITH_EMOJI[2],
    options: OPTIONS_WITH_EMOJI,
    defaultMenuIsOpen: true
  }
}`,...(J=(B=m.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var G,X,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    defaultValue: OPTIONS[2],
    options: OPTIONS,
    loading: true,
    style: {
      minWidth: '200px'
    }
  }
}`,...(K=(X=h.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var q,Q,U;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    options: OPTIONS,
    label: 'Label',
    hint: 'Assistive text',
    style: {
      minWidth: '200px'
    }
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    id: 'componentId10',
    defaultValue: OPTIONS[2],
    options: OPTIONS,
    disabled: true,
    style: {
      minWidth: '200px'
    }
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,oe;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    id: 'componentId11',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    style: {
      minWidth: '200px'
    },
    invalid: true
  }
}`,...(oe=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,se,re;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    id: 'componentId12',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    style: {
      minWidth: '200px'
    },
    valid: true
  }
}`,...(re=(se=I.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var le,ae,ce,pe,de;s.parameters={...s.parameters,docs:{...(le=s.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: args => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DSelect {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId13',
    defaultValue: [OPTIONS[0]],
    options: OPTIONS,
    defaultMenuIsOpen: true,
    multi: true,
    style: {
      minWidth: '200px'
    }
  }
}`,...(ce=(ae=s.parameters)==null?void 0:ae.docs)==null?void 0:ce.source},description:{story:"To use material symbols or any other material symbols style icon suite you can\nuse a `DContextProvider` to achieve global configuration",...(de=(pe=s.parameters)==null?void 0:pe.docs)==null?void 0:de.description}}};const Ee=["Default","Selected","SelectedWithMenuOpen","Multi","MultiCheckOption","IconOption","EmojiOption","EmojiTextOption","Loading","Layout","Disabled","Invalid","Valid","MaterialStyleIcons"];export{r as Default,g as Disabled,u as EmojiOption,m as EmojiTextOption,d as IconOption,b as Invalid,f as Layout,h as Loading,s as MaterialStyleIcons,c as Multi,p as MultiCheckOption,l as Selected,a as SelectedWithMenuOpen,I as Valid,Ee as __namedExportsOrder,Pe as default};
