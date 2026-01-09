import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./config-C3iYXcFk.js";import{D as o}from"./DChip-D8mtLpRN.js";import{I as d,T as k,a as P}from"./constants-CyI_OqvZ.js";import{D as M}from"./DContext-xUXyqrog.js";import"./iframe-BlkCTN4X.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B8FepXmk.js";import"./DIcon-D2CwUGlc.js";import"./useMediaBreakpointUp-CtUBY9x3.js";import"./index-CPAPznBy.js";import"./index-CS1pibh_.js";const J={title:"Design System/Components/Chip",component:o,parameters:{docs:{description:{component:`
## CSS Variables
| Variable                         | Class   | Type            | Description                      |
|----------------------------------|---------|-----------------|----------------------------------|
| --${r}chip-bg            | .d-chip | css color unit  | Background color                 |
| --${r}chip-gap           | .d-chip | css length unit | Separation between chip elements |
| --${r}chip-color         | .d-chip | css color unit  | Text color                       |
| --${r}chip-border-radius | .d-chip | css length unit | Border radius                    |
| --${r}chip-padding-x     | .d-chip | css length unit | Padding horizontal               |
| --${r}chip-padding-y     | .d-chip | css length unit | Padding vertical                 |
| --${r}chip-font-size     | .d-chip | css length unit | Font size                        |
| --${r}chip-font-weight   | .d-chip | css font weight | Font weight                      |
| --${r}chip-line-height   | .d-chip | css length unit | Line height                      |
        `}}},argTypes:{style:{control:"object"},className:{control:"text",type:"string"},text:{control:"text",type:"string",description:"Text of badge"},color:{control:"select",type:"string",options:k,table:{defaultValue:{summary:"primary"}},description:"The color to use."},icon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...d]},iconFamilyClass:{control:"text",type:"string"},iconFamilyPrefix:{control:"text",type:"string"},iconMaterialStyle:{control:"boolean",type:"boolean"},iconClose:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...d]},iconCloseFamilyClass:{control:"text",type:"string"},iconCloseFamilyPrefix:{control:"text",type:"string"},iconCloseMaterialStyle:{control:"boolean",type:"boolean"},showClose:{control:"boolean",table:{defaultValue:{summary:"false"}},type:"boolean"},closeAriaLabel:{control:"text",type:"string"},onClose:{action:"onClose"}},tags:["autodocs"]},t={args:{color:"primary",text:"Chip"}},s={render:()=>e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:k.map(p=>e.jsx(o,{color:p,text:p},p))}),parameters:{docs:{description:{story:"All available color variants for chips."}}}},i={args:{color:"primary",text:"Featured",icon:"Star"}},a={args:{color:"info",text:"Removable",showClose:!0},parameters:{docs:{description:{story:"Chip with a close button. Click to trigger the onClose event."}}}},n={args:{color:"success",text:"Tag",icon:"Tag",showClose:!0}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",text:"Simple"}),e.jsx(o,{color:"success",text:"With Icon",icon:"CheckCircle"}),e.jsx(o,{color:"warning",text:"Closeable",showClose:!0}),e.jsx(o,{color:"danger",text:"Complete",icon:"XCircle",showClose:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"info",text:"Category",icon:"Folder"}),e.jsx(o,{color:"secondary",text:"Tag",icon:"Tag",showClose:!0}),e.jsx(o,{color:"dark",text:"Label",icon:"Bookmark",showClose:!0})]})]}),parameters:{docs:{description:{story:"Different chip configurations showing icons and close buttons."}}}},l={render:()=>e.jsx(M,{...P,children:e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",text:"Fire",icon:"local_fire_department"}),e.jsx(o,{color:"success",text:"Star",icon:"star",showClose:!0}),e.jsx(o,{color:"warning",text:"Alert",icon:"warning",showClose:!0}),e.jsx(o,{color:"info",text:"Info",icon:"info"})]})}),parameters:{docs:{description:{story:"Chips using Material Icons instead of default Icons."},canvas:{sourceState:"shown"}}}};var h,x,m;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Chip'
  }
}`,...(m=(x=t.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var g,u,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      {THEMES.map(theme => <DChip key={theme} color={theme} text={theme} />)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All available color variants for chips.'
      }
    }
  }
}`,...(C=(u=s.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var y,f,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Featured',
    icon: 'Star'
  }
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var v,b,D;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    color: 'info',
    text: 'Removable',
    showClose: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Chip with a close button. Click to trigger the onClose event.'
      }
    }
  }
}`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var S,I,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    color: 'success',
    text: 'Tag',
    icon: 'Tag',
    showClose: true
  }
}`,...(T=(I=n.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var j,F,W;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexDirection: 'column'
  }}>
      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <DChip color="primary" text="Simple" />
        <DChip color="success" text="With Icon" icon="CheckCircle" />
        <DChip color="warning" text="Closeable" showClose />
        <DChip color="danger" text="Complete" icon="XCircle" showClose />
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <DChip color="info" text="Category" icon="Folder" />
        <DChip color="secondary" text="Tag" icon="Tag" showClose />
        <DChip color="dark" text="Label" icon="Bookmark" showClose />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different chip configurations showing icons and close buttons.'
      }
    }
  }
}`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var A,E,_;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <DChip color="primary" text="Fire" icon="local_fire_department" />
        <DChip color="success" text="Star" icon="star" showClose />
        <DChip color="warning" text="Alert" icon="warning" showClose />
        <DChip color="info" text="Info" icon="info" />
      </div>
    </DContextProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Chips using Material Icons instead of default Icons.'
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(_=(E=l.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const K=["Default","AllColors","WithIcon","WithCloseButton","IconAndClose","ChipVariants","MaterialIcon"];export{s as AllColors,c as ChipVariants,t as Default,n as IconAndClose,l as MaterialIcon,a as WithCloseButton,i as WithIcon,K as __namedExportsOrder,J as default};
