import{j as t}from"./jsx-runtime-CKrituN3.js";import{r as u}from"./index-CBqU2yxZ.js";import{c as G}from"./index-ELyB7pIJ.js";import{D as m}from"./DIcon-1scRBrNx.js";import{u as H,D as J}from"./DContext-CSLUP0I2.js";import{T as K,I as f,a as Q}from"./constants-DhWTmuJQ.js";import{P as e}from"./config-CUZHf55T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";function l({theme:n="primary",text:M,icon:c,iconFamilyClass:N,iconFamilyPrefix:v,iconMaterialStyle:T,iconClose:d,iconCloseFamilyClass:E,iconCloseFamilyPrefix:j,iconCloseMaterialStyle:A,showClose:$=!1,closeAriaLabel:O="close",className:R,style:L,dataAttributes:z,onClose:B}){const X=u.useMemo(()=>({"d-chip":!0,[`d-chip-${n}`]:!!n}),[n]),{iconMap:{xLg:p}}=H(),k=u.useMemo(()=>d||p,[d,p]);return t.jsxs("span",{className:G(X,R),style:L,...z,children:[c&&t.jsx("div",{className:"d-chip-icon-container",children:t.jsx(m,{icon:c,familyClass:N,familyPrefix:v,materialStyle:T})}),t.jsx("span",{children:M}),$&&t.jsx("button",{type:"button",className:"d-chip-icon-container",onClick:B,"aria-label":O,children:t.jsx(m,{icon:k,familyClass:E,familyPrefix:j,materialStyle:A})})]})}try{l.displayName="DChip",l.__docgenInfo={description:"",displayName:"DChip",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},theme:{defaultValue:{value:"primary"},description:"",name:"theme",required:!1,type:{name:"string | undefined"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | undefined"}},iconClose:{defaultValue:null,description:"",name:"iconClose",required:!1,type:{name:"string | undefined"}},iconCloseFamilyClass:{defaultValue:null,description:"",name:"iconCloseFamilyClass",required:!1,type:{name:"string | undefined"}},iconCloseFamilyPrefix:{defaultValue:null,description:"",name:"iconCloseFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconCloseMaterialStyle:{defaultValue:null,description:"",name:"iconCloseMaterialStyle",required:!1,type:{name:"boolean | undefined"}},showClose:{defaultValue:{value:"false"},description:"",name:"showClose",required:!1,type:{name:"boolean | undefined"}},closeAriaLabel:{defaultValue:{value:"close"},description:"",name:"closeAriaLabel",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const re={title:"Design System/Components/Chip",component:l,parameters:{docs:{description:{component:`
## CSS Variables
| Variable                         | Class   | Type            | Description                      |
|----------------------------------|---------|-----------------|----------------------------------|
| --${e}chip-bg            | .d-chip | css color unit  | Background color                 |
| --${e}chip-gap           | .d-chip | css length unit | Separation between chip elements |
| --${e}chip-color         | .d-chip | css color unit  | Text color                       |
| --${e}chip-border-radius | .d-chip | css length unit | Border radius                    |
| --${e}chip-padding-x     | .d-chip | css length unit | Padding horizontal               |
| --${e}chip-padding-y     | .d-chip | css length unit | Padding vertical                 |
| --${e}chip-font-size     | .d-chip | css length unit | Font size                        |
| --${e}chip-font-weight   | .d-chip | css font weight | Font weight                      |
| --${e}chip-line-height   | .d-chip | css length unit | Line height                      |
        `}}},argTypes:{style:{control:"object"},className:{control:"text",type:"string"},text:{control:"text",type:"string",description:"Text of badge"},theme:{control:"select",type:"string",options:K,table:{defaultValue:{summary:"primary"}},description:"The theme to use."},icon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...f]},iconFamilyClass:{control:"text",type:"string"},iconFamilyPrefix:{control:"text",type:"string"},iconMaterialStyle:{control:"boolean",type:"boolean"},iconClose:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...f]},iconCloseFamilyClass:{control:"text",type:"string"},iconCloseFamilyPrefix:{control:"text",type:"string"},iconCloseMaterialStyle:{control:"boolean",type:"boolean"},showClose:{control:"boolean",table:{defaultValue:{summary:"false"}},type:"boolean"},closeAriaLabel:{control:"text",type:"string"},onClose:{action:"onClose"}},tags:["autodocs"]},a={args:{theme:"primary",text:"Default"}},s={args:{theme:"secondary",text:"Default"}},r={args:{theme:"secondary",text:"Default",icon:"fire"}},o={args:{theme:"secondary",text:"Default",icon:"fire",showClose:!0}},i={render:n=>t.jsx(J,{...Q,children:t.jsx(l,{...n})}),args:{theme:"secondary",text:"Default",icon:"local_fire_department",showClose:!0},parameters:{docs:{canvas:{sourceState:"shown"}}}};var y,h,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    theme: 'primary',
    text: 'Default'
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var C,x,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    theme: 'secondary',
    text: 'Default'
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var D,S,V;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    theme: 'secondary',
    text: 'Default',
    icon: 'fire'
  }
}`,...(V=(S=r.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var P,_,F;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    theme: 'secondary',
    text: 'Default',
    icon: 'fire',
    showClose: true
  }
}`,...(F=(_=o.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var q,I,w;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInputPassword>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DChip {...args} />
    </DContextProvider>,
  args: {
    theme: 'secondary',
    text: 'Default',
    icon: 'local_fire_department',
    showClose: true
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const oe=["Primary","Secondary","Icon","Close","MaterialIcon"];export{o as Close,r as Icon,i as MaterialIcon,a as Primary,s as Secondary,oe as __namedExportsOrder,re as default};
