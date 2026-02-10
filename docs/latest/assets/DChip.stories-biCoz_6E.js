import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as t}from"./config-C3iYXcFk.js";import{D as o}from"./DChip-CDQJm8Az.js";import{I as d,T as k,a as P}from"./constants-CyI_OqvZ.js";import{D as M}from"./DContext-6FeQK8nL.js";import"./iframe-BMeNOU03.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ehdBXeXN.js";import"./DIcon-tIPXWjmp.js";import"./useMediaBreakpointUp-BJNsKdi4.js";import"./index-yVdt6xC3.js";import"./index-Dqbu3ppb.js";const J={title:"Design System/Components/Chip",component:o,parameters:{docs:{description:{component:`
## CSS Variables
| Variable                         | Class   | Type            | Description                      |
|----------------------------------|---------|-----------------|----------------------------------|
| --${t}chip-bg            | .d-chip | css color unit  | Background color                 |
| --${t}chip-gap           | .d-chip | css length unit | Separation between chip elements |
| --${t}chip-color         | .d-chip | css color unit  | Text color                       |
| --${t}chip-border-radius | .d-chip | css length unit | Border radius                    |
| --${t}chip-padding-x     | .d-chip | css length unit | Padding horizontal               |
| --${t}chip-padding-y     | .d-chip | css length unit | Padding vertical                 |
| --${t}chip-font-size     | .d-chip | css length unit | Font size                        |
| --${t}chip-font-weight   | .d-chip | css font weight | Font weight                      |
| --${t}chip-line-height   | .d-chip | css length unit | Line height                      |
        `}}},argTypes:{style:{control:"object",table:{category:"Appearance"}},className:{control:"text",type:"string",table:{category:"Appearance"}},text:{control:"text",type:"string",description:"Text of badge",table:{category:"Content"}},color:{control:"select",type:"string",options:k,table:{defaultValue:{summary:"primary"},category:"Appearance"},description:"The color to use."},icon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...d],table:{category:"Icon"}},iconFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},iconClose:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...d],table:{category:"Icon"}},iconCloseFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconCloseFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconCloseMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},showClose:{control:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"},type:"boolean"},closeAriaLabel:{control:"text",type:"string",table:{category:"Content"}},onClose:{action:"onClose",table:{category:"Events"}}},tags:["autodocs"]},r={args:{color:"primary",text:"Chip"}},s={render:()=>e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:k.map(p=>e.jsx(o,{color:p,text:p},p))}),parameters:{docs:{description:{story:"All available color variants for chips."}}}},a={args:{color:"primary",text:"Featured",icon:"Star"}},n={args:{color:"info",text:"Removable",showClose:!0},parameters:{docs:{description:{story:"Chip with a close button. Click to trigger the onClose event."}}}},i={args:{color:"success",text:"Tag",icon:"Tag",showClose:!0}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",text:"Simple"}),e.jsx(o,{color:"success",text:"With Icon",icon:"CheckCircle"}),e.jsx(o,{color:"warning",text:"Closeable",showClose:!0}),e.jsx(o,{color:"danger",text:"Complete",icon:"XCircle",showClose:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"info",text:"Category",icon:"Folder"}),e.jsx(o,{color:"secondary",text:"Tag",icon:"Tag",showClose:!0}),e.jsx(o,{color:"dark",text:"Label",icon:"Bookmark",showClose:!0})]})]}),parameters:{docs:{description:{story:"Different chip configurations showing icons and close buttons."}}}},l={render:()=>e.jsx(M,{...P,children:e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",text:"Fire",icon:"local_fire_department"}),e.jsx(o,{color:"success",text:"Star",icon:"star",showClose:!0}),e.jsx(o,{color:"warning",text:"Alert",icon:"warning",showClose:!0}),e.jsx(o,{color:"info",text:"Info",icon:"info"})]})}),parameters:{docs:{description:{story:"Chips using Material Icons instead of default Icons."},canvas:{sourceState:"shown"}}}};var h,x,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Chip'
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var m,y,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var u,f,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Featured',
    icon: 'Star'
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,v,I;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var D,S,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    color: 'success',
    text: 'Tag',
    icon: 'Tag',
    showClose: true
  }
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,A,F;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(A=c.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var E,W,_;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const K=["Default","AllColors","WithIcon","WithCloseButton","IconAndClose","ChipVariants","MaterialIcon"];export{s as AllColors,c as ChipVariants,r as Default,i as IconAndClose,l as MaterialIcon,n as WithCloseButton,a as WithIcon,K as __namedExportsOrder,J as default};
