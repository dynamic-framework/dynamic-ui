import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{D as o}from"./DSelect-Dtv8XSt2.js";import{P as e}from"./config-C3iYXcFk.js";import{I as x,a as be}from"./constants-CkChkWbF.js";import{D as ye}from"./DContext-CvDyqak0.js";import"./iframe-BBcUAjIA.js";import"./preload-helper-Dp1pzeXC.js";import"./hoist-non-react-statics.cjs-C-Qo8PK8.js";import"./index-d4dYLo0s.js";import"./index-BcoQFopu.js";import"./floating-ui.dom-DdXqV6k1.js";import"./index-Bw5_15j5.js";import"./DIcon-CAcmHYTg.js";import"./useMediaBreakpointUp-DQHqXBJn.js";const We={title:"Design System/Components/Select",component:o,parameters:{docs:{description:{component:`
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
        `}}},args:{menuPlacement:"bottom"},argTypes:{id:{control:"text",type:"string",description:"The ID of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",description:"The CSS class for the component",table:{category:"Appearance"}},style:{control:"object",description:"The CSS style for the component",table:{category:"Appearance"}},label:{control:"text",type:"string",description:"The label text for the component",table:{category:"Content"}},floatingLabel:{control:"boolean",type:"boolean",description:"Determines if the label should float above the input",table:{category:"Appearance"}},iconFamilyClass:{control:"text",type:"string",description:"The icon family class for the icons",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the icons",table:{category:"Icon"}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...x],description:"The icon at the start of the input",table:{category:"Icon"}},iconStartDisabled:{control:"boolean",type:"boolean",description:"Determines if the start icon is disabled",table:{category:"Behavior"}},iconStartAriaLabel:{control:"text",type:"string",description:"The ARIA label for the start icon",table:{category:"Content"}},iconStartTabIndex:{control:"number",type:"number",description:"The tabindex for the start icon",table:{category:"HTML Attributes"}},iconStartFamilyClass:{control:"text",type:"string",description:"The icon family class for the start icon",table:{category:"Icon"}},iconStartFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the start icon",table:{category:"Icon"}},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...x],description:"The icon at the end of the input",table:{category:"Icon"}},iconEndDisabled:{control:"boolean",type:"boolean",description:"Determines if the end icon is disabled",table:{category:"Behavior"}},iconEndAriaLabel:{control:"text",type:"string",description:"The ARIA label for the end icon",table:{category:"Content"}},iconEndFamilyClass:{control:"text",type:"string",description:"The icon family class for the end icon",table:{category:"Icon"}},iconEndFamilyPrefix:{control:"text",type:"string",description:"The icon family prefix for the end icon",table:{category:"Icon"}},iconEndTabIndex:{control:"number",type:"number",description:"The tabindex for the end icon",table:{category:"HTML Attributes"}},hint:{control:"text",type:"string",description:"The hint to display, also used for validity feedback",table:{category:"Content"}},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"},description:"Determines if the input is invalid"},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"},description:"Determines if the input is valid"},menuWithMaxContent:{control:"boolean",type:"boolean",description:"Determines if the menu should have maximum content height",table:{category:"Appearance"}},disabled:{control:"boolean",type:"boolean",description:"Determines if the input is disabled",table:{category:"Behavior"}},clearable:{control:"boolean",type:"boolean",description:"Determines if the input can be cleared",table:{category:"Behavior"}},loading:{control:"boolean",type:"boolean",description:"Determines if the input is in a loading state",table:{category:"Behavior"}},rtl:{control:"boolean",type:"boolean",description:"Determines if the input is right-to-left",table:{category:"Appearance"}},searchable:{control:"boolean",type:"boolean",description:"Determines if the input is searchable",table:{category:"Behavior"}},multi:{control:"boolean",type:"boolean",description:"Determines if the input is multi-select",table:{category:"Behavior"}},defaultInputValue:{control:"text",type:"string",description:"The default value for the input",table:{category:"Content"}},defaultMenuIsOpen:{control:"boolean",type:"boolean",description:"Determines if the menu should be open by default",table:{category:"Behavior"}},defaultValue:{control:"object",description:"The default selected value(s) for the input",table:{category:"Content"}},classNamePrefix:{control:"text",type:"string",description:"The prefix for the CSS class names",table:{category:"Appearance"}},options:{control:"object",description:"The options for the select input",table:{category:"Content"}},value:{control:"object",description:"The selected value(s) for the input",table:{category:"Content"}},onFocus:{action:"focused",description:"Event fired when the input is focused",table:{category:"Events"}},onBlur:{action:"blurred",description:"Event fired when the input is blurred",table:{category:"Events"}},onKeyDown:{action:"keyDowned",description:"Event fired when a key is pressed down",table:{category:"Events"}},menuIsOpen:{control:"boolean",description:"Determines if the menu is open",table:{category:"Behavior"}},hideSelectedOptions:{control:"boolean",description:"Determines if selected options should be hidden",table:{category:"Behavior"}},closeMenuOnSelect:{control:"boolean",description:"Determines if the menu should close on selection",table:{category:"Behavior"}},blurInputOnSelect:{control:"boolean",description:"Determines if the input should be blurred on selection",table:{category:"Behavior"}},isOptionDisabled:{control:"boolean",description:"Determines if an option is disabled",table:{category:"Behavior"}},loadingMessage:{control:"text",description:"The loading message to display",table:{category:"Content"}},noOptionsMessage:{control:"text",description:"The message to display when no options are available",table:{category:"Content"}},menuPortalTarget:{control:"text",description:"The DOM element to append the menu to",table:{category:"Behavior"}},menuPlacement:{control:{type:"select"},options:["auto","top","bottom"],description:"Placement of the menu in relation to the control",table:{type:{summary:'"bottom" | "auto" | "top"'},defaultValue:{summary:"bottom"},category:"Appearance"}},menuPosition:{control:"text",description:"The position of the menu",table:{category:"Appearance"}},menuShouldBlockScroll:{control:"boolean",description:"Determines if scrolling should be blocked when the menu is open",table:{category:"Behavior"}},menuShouldScrollIntoView:{control:"boolean",description:"Determines if the menu should scroll into view when opened",table:{category:"Behavior"}},formatGroupLabel:{type:"function",description:"Function to format group labels",table:{category:"Content"}},formatOptionLabel:{type:"function",description:"Function to format option labels",table:{category:"Content"}},getOptionLabel:{type:"function",description:"Function to get the label of an option",table:{category:"Behavior"}},getOptionValue:{type:"function",description:"Function to get the value of an option",table:{category:"Behavior"}},inputId:{control:"text",description:"The ID of the input element",table:{category:"HTML Attributes"}},inputValue:{control:"text",description:"The value of the input element",table:{category:"Content"}},instanceId:{control:"text",description:"The instance ID of the component",table:{category:"HTML Attributes"}},styles:{control:"object",description:"Custom styles for the component",table:{category:"Appearance"}},color:{control:"object",description:"Custom color for the component",table:{category:"Appearance"}},"aria-label":{control:"text",description:"ARIA label for the component",table:{category:"HTML Attributes"}},tabIndex:{control:"number",description:"The tab index of the component",table:{category:"HTML Attributes"}},autoFocus:{control:"boolean",description:"Determines if the component should autofocus",table:{category:"Behavior"}},components:{control:"object",description:"Custom components for the input",table:{category:"Behavior"}},placeholder:{control:"text",description:"Placeholder text for the input",table:{category:"Content"}},escapeClearsValue:{control:"boolean",description:"Determines if pressing escape clears the value",table:{category:"Behavior"}},filterOption:{type:"function",description:"Function to filter options",table:{category:"Behavior"}},openMenuOnClick:{control:"boolean",description:"Determines if the menu should open on click",table:{category:"Behavior"}},closeMenuOnScroll:{control:"boolean",description:"Determines if the menu should close on scroll",table:{category:"Behavior"}},onMenuScrollToBottom:{action:"scrolledToBottom",description:"Event fired when the menu is scrolled to the bottom",table:{category:"Events"}},onMenuScrollToTop:{action:"scrolledToTop",description:"Event fired when the menu is scrolled to the top",table:{category:"Events"}},tabSelectsValue:{control:"boolean",description:"Determines if pressing tab selects the value",table:{category:"Behavior"}},backspaceRemovesValue:{control:"boolean",description:"Determines if pressing backspace removes the value",table:{category:"Behavior"}},maxMenuHeight:{control:"number",description:"The maximum height of the menu",table:{category:"Appearance"}},minMenuHeight:{control:"number",description:"The minimum height of the menu",table:{category:"Appearance"}},openMenuOnFocus:{control:"boolean",description:"Determines if the menu should open on focus",table:{category:"Behavior"}},onIconStartClick:{action:"onIconStartClick",description:"Event fired when the start icon is clicked",table:{category:"Events"}},onIconEndClick:{action:"onIconEndClick",description:"Event fired when the end icon is clicked",table:{category:"Events"}},onChange:{action:"onChange",description:"Event fired when the value changes",table:{category:"Events"}},onInputChange:{action:"onInputChange",description:"Event fired when the input value changes",table:{category:"Events"}}},decorators:[n=>i.jsx("div",{style:{height:"400px"},className:"d-flex justify-content-center align-items-center",children:i.jsx("div",{className:"position-relative",children:i.jsx(n,{})})})],tags:["autodocs"]},t=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],S=[{label:"Option 1",value:"1",icon:"Flame"},{label:"Option 2",value:"2",icon:"Calendar"},{label:"Option 3",value:"3",icon:"Camera"}],O=[{label:"Option 1",value:"1",emoji:"😀"},{label:"Option 2",value:"2",emoji:"🥶"},{label:"Option 3",value:"3",emoji:"👾"}],r={args:{id:"componentId1",options:t,style:{minWidth:"200px"}}},l={args:{id:"componentId2",defaultValue:t[0],options:t,style:{minWidth:"200px"}}},s={args:{id:"componentId14",defaultValue:t[0],options:t,floatingLabel:!0,label:"Floating Label",style:{minWidth:"200px"}}},c={args:{id:"componentId3",defaultValue:t[0],options:t,defaultMenuIsOpen:!0,style:{minWidth:"200px"}}},p={args:{id:"componentId4",defaultValue:[t[1],t[2]],options:t,multi:!0,defaultMenuIsOpen:!0,style:{minWidth:"200px"}}},d={render:n=>i.jsx(o,{...n,components:{Option:o.OptionCheck}}),args:{id:"componentId5",defaultValue:[t[1],t[2]],options:t,multi:!0,defaultMenuIsOpen:!0,hideSelectedOptions:!1,style:{minWidth:"200px"}}},u={render:n=>i.jsx(o,{...n,components:{Option:o.OptionIcon,SingleValue:o.SingleValueIconText}}),args:{id:"componentId6",defaultValue:S[2],options:S,defaultMenuIsOpen:!0,style:{minWidth:"200px"}}},m={render:n=>i.jsx(o,{...n,components:{Option:o.OptionEmoji,SingleValue:o.SingleValueEmoji}}),args:{id:"componentId15",defaultValue:O[2],options:O,defaultMenuIsOpen:!0,menuWithMaxContent:!0}},h={render:n=>i.jsx(o,{...n,components:{Option:o.OptionEmoji,SingleValue:o.SingleValueEmojiText}}),args:{id:"componentId7",defaultValue:O[2],options:O,defaultMenuIsOpen:!0}},g={args:{id:"componentId8",defaultValue:t[2],options:t,loading:!0,style:{minWidth:"200px"}}},b={args:{id:"componentId9",options:t,label:"Label",hint:"Assistive text",style:{minWidth:"200px"}}},y={args:{id:"componentId10",defaultValue:t[2],options:t,disabled:!0,style:{minWidth:"200px"}}},f={args:{id:"componentId11",defaultValue:t[0],options:t,style:{minWidth:"200px"},invalid:!0}},I={args:{id:"componentId12",defaultValue:t[0],options:t,style:{minWidth:"200px"},valid:!0}},a={parameters:{docs:{canvas:{sourceState:"shown"}}},render:n=>i.jsx(ye,{...be,children:i.jsx(o,{...n})}),args:{id:"componentId13",defaultValue:[t[0]],options:t,defaultMenuIsOpen:!0,multi:!0,style:{minWidth:"200px"}}};var v,T,D;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    options: OPTIONS,
    style: {
      minWidth: '200px'
    }
  }
}`,...(D=(T=r.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var C,V,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    style: {
      minWidth: '200px'
    }
  }
}`,...(E=(V=l.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var M,P,N;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(P=s.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var W,j,B;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    defaultMenuIsOpen: true,
    style: {
      minWidth: '200px'
    }
  }
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var A,w,L;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(w=p.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var k,$,_;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=($=d.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var F,H,R;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(H=u.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var z,J,G;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var Q,U,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    defaultValue: OPTIONS[2],
    options: OPTIONS,
    loading: true,
    style: {
      minWidth: '200px'
    }
  }
}`,...(Y=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,te;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    options: OPTIONS,
    label: 'Label',
    hint: 'Assistive text',
    style: {
      minWidth: '200px'
    }
  }
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ne,ie;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    id: 'componentId10',
    defaultValue: OPTIONS[2],
    options: OPTIONS,
    disabled: true,
    style: {
      minWidth: '200px'
    }
  }
}`,...(ie=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ae,re,le;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    id: 'componentId11',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    style: {
      minWidth: '200px'
    },
    invalid: true
  }
}`,...(le=(re=f.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ce,pe;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    id: 'componentId12',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    style: {
      minWidth: '200px'
    },
    valid: true
  }
}`,...(pe=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,ue,me,he,ge;a.parameters={...a.parameters,docs:{...(de=a.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=a.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:"To use material symbols or any other material symbols style icon suite you can\nuse a `DContextProvider` to achieve global configuration",...(ge=(he=a.parameters)==null?void 0:he.docs)==null?void 0:ge.description}}};const je=["Default","Selected","Floating","SelectedWithMenuOpen","Multi","MultiCheckOption","IconOption","EmojiOption","EmojiTextOption","Loading","Layout","Disabled","Invalid","Valid","MaterialStyleIcons"];export{r as Default,y as Disabled,m as EmojiOption,h as EmojiTextOption,s as Floating,u as IconOption,f as Invalid,b as Layout,g as Loading,a as MaterialStyleIcons,p as Multi,d as MultiCheckOption,l as Selected,c as SelectedWithMenuOpen,I as Valid,je as __namedExportsOrder,We as default};
