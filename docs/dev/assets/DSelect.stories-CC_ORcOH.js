import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{D as n}from"./DSelect-9SRlrXuM.js";import{P as e}from"./config-C3iYXcFk.js";import{I as S,a as ge}from"./constants-CyI_OqvZ.js";import{D as be}from"./DContext-BoMWiJYr.js";import"./iframe-CtxmvoPJ.js";import"./preload-helper-Dp1pzeXC.js";import"./hoist-non-react-statics.cjs-C-Qo8PK8.js";import"./index-DYSVb1I-.js";import"./index-U9OetZfw.js";import"./floating-ui.dom-4_SsKeQW.js";import"./index-CUKHlhNg.js";import"./DIcon-D3QcJGm6.js";import"./useMediaBreakpointUp-CnC4Sbyn.js";import"./DInputCheck-CFr25cjO.js";const je={title:"Design System/Components/Select",component:n,parameters:{docs:{description:{component:`
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
        `}}},args:{menuPlacement:"bottom"},argTypes:{id:{control:"text",type:"string",description:"The ID of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string",description:"The CSS class for the component"},style:{control:"object",description:"The CSS style for the component"},label:{control:"text",type:"string",description:"The label text for the component"},floatingLabel:{control:"boolean",type:"boolean",description:"Determines if the label should float above the input"},iconFamilyClass:{control:"text",type:"string",description:"The icon family class for the icons"},iconFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the icons"},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...S],description:"The icon at the start of the input"},iconStartDisabled:{control:"boolean",type:"boolean",description:"Determines if the start icon is disabled"},iconStartAriaLabel:{control:"text",type:"string",description:"The ARIA label for the start icon"},iconStartTabIndex:{control:"number",type:"number",description:"The tabindex for the start icon"},iconStartFamilyClass:{control:"text",type:"string",description:"The icon family class for the start icon"},iconStartFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the start icon"},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...S],description:"The icon at the end of the input"},iconEndDisabled:{control:"boolean",type:"boolean",description:"Determines if the end icon is disabled"},iconEndAriaLabel:{control:"text",type:"string",description:"The ARIA label for the end icon"},iconEndFamilyClass:{control:"text",type:"string",description:"The icon family class for the end icon"},iconEndFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the end icon"},iconEndTabIndex:{control:"number",type:"number",description:"The tabindex for the end icon"},hint:{control:"text",type:"string",description:"The hint to display, also used for validity feedback"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Determines if the input is invalid"},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Determines if the input is valid"},menuWithMaxContent:{control:"boolean",type:"boolean",description:"Determines if the menu should have maximum content height"},disabled:{control:"boolean",type:"boolean",description:"Determines if the input is disabled"},clearable:{control:"boolean",type:"boolean",description:"Determines if the input can be cleared"},loading:{control:"boolean",type:"boolean",description:"Determines if the input is in a loading state"},rtl:{control:"boolean",type:"boolean",description:"Determines if the input is right-to-left"},searchable:{control:"boolean",type:"boolean",description:"Determines if the input is searchable"},multi:{control:"boolean",type:"boolean",description:"Determines if the input is multi-select"},defaultInputValue:{control:"text",type:"string",description:"The default value for the input"},defaultMenuIsOpen:{control:"boolean",type:"boolean",description:"Determines if the menu should be open by default"},defaultValue:{control:"object",description:"The default selected value(s) for the input"},classNamePrefix:{control:"text",type:"string",description:"The prefix for the CSS class names"},options:{control:"object",description:"The options for the select input"},value:{control:"object",description:"The selected value(s) for the input"},onFocus:{action:"focused",description:"Event fired when the input is focused"},onBlur:{action:"blurred",description:"Event fired when the input is blurred"},onKeyDown:{action:"keyDowned",description:"Event fired when a key is pressed down"},menuIsOpen:{control:"boolean",description:"Determines if the menu is open"},hideSelectedOptions:{control:"boolean",description:"Determines if selected options should be hidden"},closeMenuOnSelect:{control:"boolean",description:"Determines if the menu should close on selection"},blurInputOnSelect:{control:"boolean",description:"Determines if the input should be blurred on selection"},isOptionDisabled:{control:"boolean",description:"Determines if an option is disabled"},loadingMessage:{control:"text",description:"The loading message to display"},noOptionsMessage:{control:"text",description:"The message to display when no options are available"},menuPortalTarget:{control:"text",description:"The DOM element to append the menu to"},menuPlacement:{control:{type:"select"},options:["auto","top","bottom"],description:"Placement of the menu in relation to the control",table:{type:{summary:'"bottom" | "auto" | "top"'},defaultValue:{summary:"bottom"}}},menuPosition:{control:"text",description:"The position of the menu"},menuShouldBlockScroll:{control:"boolean",description:"Determines if scrolling should be blocked when the menu is open"},menuShouldScrollIntoView:{control:"boolean",description:"Determines if the menu should scroll into view when opened"},formatGroupLabel:{type:"function",description:"Function to format group labels"},formatOptionLabel:{type:"function",description:"Function to format option labels"},getOptionLabel:{type:"function",description:"Function to get the label of an option"},getOptionValue:{type:"function",description:"Function to get the value of an option"},inputId:{control:"text",description:"The ID of the input element"},inputValue:{control:"text",description:"The value of the input element"},instanceId:{control:"text",description:"The instance ID of the component"},styles:{control:"object",description:"Custom styles for the component"},color:{control:"object",description:"Custom color for the component"},"aria-label":{control:"text",description:"ARIA label for the component"},tabIndex:{control:"number",description:"The tab index of the component"},autoFocus:{control:"boolean",description:"Determines if the component should autofocus"},components:{control:"object",description:"Custom components for the input"},placeholder:{control:"text",description:"Placeholder text for the input"},escapeClearsValue:{control:"boolean",description:"Determines if pressing escape clears the value"},filterOption:{type:"function",description:"Function to filter options"},openMenuOnClick:{control:"boolean",description:"Determines if the menu should open on click"},closeMenuOnScroll:{control:"boolean",description:"Determines if the menu should close on scroll"},onMenuScrollToBottom:{action:"scrolledToBottom",description:"Event fired when the menu is scrolled to the bottom"},onMenuScrollToTop:{action:"scrolledToTop",description:"Event fired when the menu is scrolled to the top"},tabSelectsValue:{control:"boolean",description:"Determines if pressing tab selects the value"},backspaceRemovesValue:{control:"boolean",description:"Determines if pressing backspace removes the value"},maxMenuHeight:{control:"number",description:"The maximum height of the menu"},minMenuHeight:{control:"number",description:"The minimum height of the menu"},openMenuOnFocus:{control:"boolean",description:"Determines if the menu should open on focus"},onIconStartClick:{action:"onIconStartClick",description:"Event fired when the start icon is clicked"},onIconEndClick:{action:"onIconEndClick",description:"Event fired when the end icon is clicked"},onChange:{action:"onChange",description:"Event fired when the value changes"},onInputChange:{action:"onInputChange",description:"Event fired when the input value changes"}},decorators:[o=>i.jsx("div",{style:{height:"400px"},className:"d-flex justify-content-center align-items-center",children:i.jsx("div",{className:"position-relative",children:i.jsx(o,{})})})],tags:["autodocs"]},t=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],y=[{label:"Option 1",value:"1",icon:"Flame"},{label:"Option 2",value:"2",icon:"Calendar"},{label:"Option 3",value:"3",icon:"Camera"}],x=[{label:"Option 1",value:"1",emoji:"😀"},{label:"Option 2",value:"2",emoji:"🥶"},{label:"Option 3",value:"3",emoji:"👾"}],r={args:{id:"componentId1",options:t,style:{minWidth:"200px"}}},l={args:{id:"componentId2",defaultValue:t[0],options:t,style:{minWidth:"200px"}}},a={args:{id:"componentId14",defaultValue:t[0],options:t,floatingLabel:!0,label:"Floating Label",style:{minWidth:"200px"}}},c={args:{id:"componentId3",defaultValue:t[0],options:t,defaultMenuIsOpen:!0,style:{minWidth:"200px"}}},p={args:{id:"componentId4",defaultValue:[t[1],t[2]],options:t,multi:!0,defaultMenuIsOpen:!0,style:{minWidth:"200px"}}},d={render:o=>i.jsx(n,{...o,components:{Option:n.OptionCheck}}),args:{id:"componentId5",defaultValue:[t[1],t[2]],options:t,multi:!0,defaultMenuIsOpen:!0,hideSelectedOptions:!1,style:{minWidth:"200px"}}},u={render:o=>i.jsx(n,{...o,components:{Option:n.OptionIcon,SingleValue:n.SingleValueIconText}}),args:{id:"componentId6",defaultValue:y[2],options:y,defaultMenuIsOpen:!0,style:{minWidth:"200px"}}},m={render:o=>i.jsx(n,{...o,components:{Option:n.OptionEmoji,SingleValue:n.SingleValueEmoji}}),args:{id:"componentId15",defaultValue:x[2],options:x,defaultMenuIsOpen:!0,menuWithMaxContent:!0}},h={render:o=>i.jsx(n,{...o,components:{Option:n.OptionEmoji,SingleValue:n.SingleValueEmojiText}}),args:{id:"componentId7",defaultValue:x[2],options:x,defaultMenuIsOpen:!0}},f={args:{id:"componentId8",defaultValue:t[2],options:t,loading:!0,style:{minWidth:"200px"}}},g={args:{id:"componentId9",options:t,label:"Label",hint:"Assistive text",style:{minWidth:"200px"}}},b={args:{id:"componentId10",defaultValue:t[2],options:t,disabled:!0,style:{minWidth:"200px"}}},I={args:{id:"componentId11",defaultValue:t[0],options:t,style:{minWidth:"200px"},invalid:!0}},O={args:{id:"componentId12",defaultValue:t[0],options:t,style:{minWidth:"200px"},valid:!0}},s={parameters:{docs:{canvas:{sourceState:"shown"}}},render:o=>i.jsx(be,{...ge,children:i.jsx(n,{...o})}),args:{id:"componentId13",defaultValue:[t[0]],options:t,defaultMenuIsOpen:!0,multi:!0,style:{minWidth:"200px"}}};var T,v,D;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    options: OPTIONS,
    style: {
      minWidth: '200px'
    }
  }
}`,...(D=(v=r.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var V,P,E;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    style: {
      minWidth: '200px'
    }
  }
}`,...(E=(P=l.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var N,C,M;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'componentId14',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    floatingLabel: true,
    label: 'Floating Label',
    style: {
      minWidth: '200px'
    }
  }
}`,...(M=(C=a.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var W,j,w;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    defaultMenuIsOpen: true,
    style: {
      minWidth: '200px'
    }
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,$,_;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=($=p.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var L,F,A;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(F=d.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var R,H,z;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(z=(H=u.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var B,J,G;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <DSelect<OptionEmoji> {...args} components={{
    Option: DSelect.OptionEmoji,
    SingleValue: DSelect.SingleValueEmoji
  }} />,
  args: {
    id: 'componentId15',
    defaultValue: OPTIONS_WITH_EMOJI[2],
    options: OPTIONS_WITH_EMOJI,
    defaultMenuIsOpen: true,
    menuWithMaxContent: true
  }
}`,...(G=(J=m.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var X,K,q;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var Q,U,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    defaultValue: OPTIONS[2],
    options: OPTIONS,
    loading: true,
    style: {
      minWidth: '200px'
    }
  }
}`,...(Y=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    options: OPTIONS,
    label: 'Label',
    hint: 'Assistive text',
    style: {
      minWidth: '200px'
    }
  }
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,ie;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    id: 'componentId10',
    defaultValue: OPTIONS[2],
    options: OPTIONS,
    disabled: true,
    style: {
      minWidth: '200px'
    }
  }
}`,...(ie=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var se,re,le;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    id: 'componentId11',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    style: {
      minWidth: '200px'
    },
    invalid: true
  }
}`,...(le=(re=I.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ae,ce,pe;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    id: 'componentId12',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    style: {
      minWidth: '200px'
    },
    valid: true
  }
}`,...(pe=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,ue,me,he,fe;s.parameters={...s.parameters,docs:{...(de=s.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=s.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:"To use material symbols or any other material symbols style icon suite you can\nuse a `DContextProvider` to achieve global configuration",...(fe=(he=s.parameters)==null?void 0:he.docs)==null?void 0:fe.description}}};const we=["Default","Selected","Floating","SelectedWithMenuOpen","Multi","MultiCheckOption","IconOption","EmojiOption","EmojiTextOption","Loading","Layout","Disabled","Invalid","Valid","MaterialStyleIcons"];export{r as Default,b as Disabled,m as EmojiOption,h as EmojiTextOption,a as Floating,u as IconOption,I as Invalid,g as Layout,f as Loading,s as MaterialStyleIcons,p as Multi,d as MultiCheckOption,l as Selected,c as SelectedWithMenuOpen,O as Valid,we as __namedExportsOrder,je as default};
