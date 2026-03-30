import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as t}from"./config-C3iYXcFk.js";import{D as o}from"./DChip-CQTDYGyq.js";import{I as d,T as _,a as N}from"./constants-CkChkWbF.js";import{D as P}from"./DContext-C7LEUkQ1.js";import"./iframe-um1WsC0C.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cc_4mDlw.js";import"./DIcon-BAV_3UYE.js";import"./useMediaBreakpointUp-Dsr-FX74.js";import"./index-BitFkd-h.js";import"./index-BGEaalem.js";const J={title:"Design System/Components/Chip",component:o,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{style:{control:"object",table:{category:"Appearance"}},className:{control:"text",type:"string",table:{category:"Appearance"}},text:{control:"text",type:"string",description:"Text of badge",table:{category:"Content"}},color:{control:"select",type:"string",options:_,table:{defaultValue:{summary:"primary"},category:"Appearance"},description:"The color to use."},icon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...d],table:{category:"Icon"}},iconFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},iconClose:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...d],table:{category:"Icon"}},iconCloseFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconCloseFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconCloseMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},showClose:{control:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"},type:"boolean"},closeAriaLabel:{control:"text",type:"string",table:{category:"Content"}},onClose:{action:"onClose",table:{category:"Events"}}},tags:["autodocs"]},s={args:{color:"primary",text:"Chip"}},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:_.filter(r=>r!=="light").map(r=>e.jsx(o,{color:r,text:r},r))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"mb-1 mt-8 small",children:"Light variant (for dark backgrounds)"}),e.jsx("div",{className:"p-4 rounded",style:{background:"var(--bs-primary-800, #1a237e)"},children:e.jsx(o,{color:"light",text:"Light"})})]})]}),parameters:{docs:{description:{story:"All available color variants for chips."}}}},i={args:{color:"primary",text:"Featured",icon:"Star"}},c={args:{color:"info",text:"Removable",showClose:!0},parameters:{docs:{description:{story:"Chip with a close button. Click to trigger the onClose event."}}}},n={args:{color:"success",text:"Tag",icon:"Tag",showClose:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",text:"Simple"}),e.jsx(o,{color:"success",text:"With Icon",icon:"CheckCircle"}),e.jsx(o,{color:"warning",text:"Closeable",showClose:!0}),e.jsx(o,{color:"danger",text:"Complete",icon:"XCircle",showClose:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"info",text:"Category",icon:"Folder"}),e.jsx(o,{color:"secondary",text:"Tag",icon:"Tag",showClose:!0}),e.jsx(o,{color:"dark",text:"Label",icon:"Bookmark",showClose:!0})]})]}),parameters:{docs:{description:{story:"Different chip configurations showing icons and close buttons."}}}},p={render:()=>e.jsx(P,{...N,children:e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",text:"Fire",icon:"local_fire_department"}),e.jsx(o,{color:"success",text:"Star",icon:"star",showClose:!0}),e.jsx(o,{color:"warning",text:"Alert",icon:"warning",showClose:!0}),e.jsx(o,{color:"info",text:"Info",icon:"info"})]})}),parameters:{docs:{description:{story:"Chips using Material Icons instead of default Icons."},canvas:{sourceState:"shown"}}}};var h,m,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Chip'
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,y,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <>
      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        {THEMES.filter(theme => theme !== 'light').map(theme => <DChip key={theme} color={theme} text={theme} />)}
      </div>
      <div className="mt-4">
        <p className="mb-1 mt-8 small">Light variant (for dark backgrounds)</p>
        <div className="p-4 rounded" style={{
        background: 'var(--bs-primary-800, #1a237e)'
      }}>
          <DChip color="light" text="Light" />
        </div>
      </div>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'All available color variants for chips.'
      }
    }
  }
}`,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var C,f,b;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Featured',
    icon: 'Star'
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,w,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var D,j,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    color: 'success',
    text: 'Tag',
    icon: 'Tag',
    showClose: true
  }
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var T,k,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var F,E,W;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(W=(E=p.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const K=["Default","AllColors","WithIcon","WithCloseButton","IconAndClose","ChipVariants","MaterialIcon"];export{a as AllColors,l as ChipVariants,s as Default,n as IconAndClose,p as MaterialIcon,c as WithCloseButton,i as WithIcon,K as __namedExportsOrder,J as default};
