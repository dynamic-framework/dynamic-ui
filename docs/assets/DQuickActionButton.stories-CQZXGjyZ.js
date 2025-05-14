import{j as t}from"./jsx-runtime-Yb_4y5hn.js";import{P as r}from"./config-BV4l-vIF.js";import{d as k,I as j}from"./constants-BfTaJ1B2.js";import{r as S}from"./index-BwDkhjyp.js";import{c as f}from"./index-ELyB7pIJ.js";import{D as T}from"./DIcon-NWah5INO.js";function n({line1:e,line2:Z,className:h,actionIcon:y,actionIconFamilyClass:ee,actionIconFamilyPrefix:te,actionIconTheme:ne,representativeImage:x,representativeIcon:v,representativeIconTheme:re="secondary",representativeIconHasCircle:I=!1,representativeIconFamilyClass:ie,representativeIconFamilyPrefix:ae,onClick:i,href:a,hrefTarget:b,style:oe,dataAttributes:se}){const ce=S.useMemo(()=>a?"a":i?"button":"div",[a,i]),le=S.useMemo(()=>a?{className:f("d-quick-action-button","d-quick-action-button-feedback",h),href:a,target:b}:i?{className:f("d-quick-action-button","d-quick-action-button-feedback",h),onClick:i}:{className:f("d-quick-action-button",h)},[h,a,b,i]);return t.jsxs(ce,{style:oe,...le,...se,children:[v&&t.jsx(T,{className:"d-quick-action-button-representative-icon",size:I?`var(--${r}quick-action-button-representative-icon-size)`:`var(--${r}quick-action-button-representative-image-size)`,icon:v,hasCircle:I,theme:re,familyClass:ie,familyPrefix:ae}),x&&t.jsx("img",{className:"d-quick-action-button-representative-image",src:x,alt:""}),t.jsx("div",{className:"d-quick-action-button-content",children:t.jsxs("div",{className:"d-quick-action-button-text",children:[t.jsx("span",{className:"d-quick-action-button-line1",children:e}),t.jsx("small",{className:"d-quick-action-button-line2",children:Z})]})}),y&&t.jsx(T,{className:"d-quick-action-button-action-icon",icon:y,size:`var(--${r}quick-action-button-action-icon-size)`,theme:ne,familyClass:ee,familyPrefix:te})]})}try{n.displayName="DQuickActionButton",n.__docgenInfo={description:"",displayName:"DQuickActionButton",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},line1:{defaultValue:null,description:"",name:"line1",required:!0,type:{name:"string"}},line2:{defaultValue:null,description:"",name:"line2",required:!0,type:{name:"string"}},actionIcon:{defaultValue:null,description:"",name:"actionIcon",required:!1,type:{name:"string | undefined"}},actionIconTheme:{defaultValue:null,description:"",name:"actionIconTheme",required:!1,type:{name:"string | undefined"}},actionIconFamilyClass:{defaultValue:null,description:"",name:"actionIconFamilyClass",required:!1,type:{name:"string | undefined"}},actionIconFamilyPrefix:{defaultValue:null,description:"",name:"actionIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},representativeImage:{defaultValue:null,description:"",name:"representativeImage",required:!1,type:{name:"string | undefined"}},representativeIcon:{defaultValue:null,description:"",name:"representativeIcon",required:!1,type:{name:"string | undefined"}},representativeIconTheme:{defaultValue:{value:"secondary"},description:"",name:"representativeIconTheme",required:!1,type:{name:"string | undefined"}},representativeIconHasCircle:{defaultValue:{value:"false"},description:"",name:"representativeIconHasCircle",required:!1,type:{name:"boolean | undefined"}},representativeIconFamilyClass:{defaultValue:null,description:"",name:"representativeIconFamilyClass",required:!1,type:{name:"string | undefined"}},representativeIconFamilyPrefix:{defaultValue:null,description:"",name:"representativeIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},hrefTarget:{defaultValue:null,description:"",name:"hrefTarget",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const de={title:"Design System/Components/Quick Action Button",component:n,argTypes:{line1:{control:"text",type:"string",description:"The title"},line2:{control:"text",type:"string",description:"The subtitle"},className:{control:"text",type:"string"},style:{control:"object"},actionIcon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...j],description:"The action icon",table:{defaultValue:{summary:"chevron-right"}}},actionIconTheme:{control:{type:"select",labels:{undefined:"empty"}},options:k,type:"string",description:"Theme of the action icon",table:{defaultValue:{summary:"secondary"}}},actionIconFamilyClass:{control:"text",type:"string"},actionIconFamilyPrefix:{control:"text",type:"string"},representativeImage:{control:"text",type:"string"},representativeIcon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...j],description:"The representative icon"},representativeIconTheme:{control:{type:"select",labels:{undefined:"empty"}},options:k,type:"string",description:"Theme of the representative icon",table:{defaultValue:{summary:"secondary"}}},representativeIconHasCircle:{type:"boolean",control:"boolean",description:"Add circle around the representative icon",table:{defaultValue:{summary:"false"}}},representativeIconFamilyClass:{control:"text",type:"string"},representativeIconFamilyPrefix:{control:"text",type:"string"},href:{control:"text",type:"string"},hrefTarget:{control:"text",type:"string"},onClick:{action:"onClick"}}},o={decorators:[e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(n,{...e}),args:{line1:"Jessica Rabit",line2:"Toon Bank **** 721",representativeImage:"https://i.pravatar.cc/150?img=2",actionIcon:"chevron-right",onClick:void 0}},s={decorators:[e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(n,{...e}),args:{line1:"Jessica Rabit",line2:"Toon Bank **** 721",representativeImage:"https://i.pravatar.cc/150?img=2",actionIcon:"chevron-right",onClick:()=>{}}},c={decorators:[e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(n,{...e}),args:{line1:"Jessica Rabit",line2:"Toon Bank **** 721",representativeImage:"https://i.pravatar.cc/150?img=2",actionIcon:"chevron-right",href:"https://www.google.com",onClick:void 0}},l={decorators:[e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(n,{...e}),args:{line1:"Jessica Rabit",line2:"Toon Bank **** 721",representativeImage:"https://i.pravatar.cc/150?img=2",actionIcon:"chevron-right",href:"https://www.google.com",hrefTarget:"_blank",onClick:void 0}},d={decorators:[e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(n,{...e}),args:{line1:"Jessica Rabit",line2:"Toon Bank **** 721",representativeImage:"https://i.pravatar.cc/150?img=2",actionIcon:"chevron-right"}},u={render:e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center",children:t.jsx(n,{...e})}),args:{line1:"Jessica Rabit",line2:"Toon Bank **** 721",representativeImage:"https://i.pravatar.cc/150?img=2",actionIcon:"chevron-right"}},p={decorators:[e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(n,{...e}),args:{line1:"Checking account",line2:"HISA ··· 665",representativeIcon:"piggy-bank",representativeIconTheme:"info",representativeIconHasCircle:!0,actionIcon:"chevron-right"}},m={decorators:[e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(n,{...e}),args:{line1:"Alternativas de pago",line2:"Si no puedes pagar en este momento",representativeIcon:"shuffle",representativeIconTheme:"secondary",actionIcon:"chevron-right"}},g={decorators:[e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(n,{...e,style:{[`--${r}quick-action-button-component-border-radius`]:0,[`--${r}quick-action-button-component-border-right`]:0,[`--${r}quick-action-button-component-border-left`]:0,[`--${r}quick-action-button-component-border-bottom`]:0}}),args:{line1:"Jessica Rabit",line2:"Toon Bank  **** 721",representativeImage:"https://i.pravatar.cc/150?img=2",actionIcon:"chevron-right"}};var q,B,N;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DQuickActionButton {...args} />,
  args: {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
    actionIcon: 'chevron-right',
    onClick: undefined // storybook thinks
  }
}`,...(N=(B=o.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var w,A,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DQuickActionButton {...args} />,
  args: {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
    actionIcon: 'chevron-right',
    onClick: () => {}
  }
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var P,_,D;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DQuickActionButton {...args} />,
  args: {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
    actionIcon: 'chevron-right',
    href: 'https://www.google.com',
    onClick: undefined // storybook thinks
  }
}`,...(D=(_=c.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var V,R,F;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DQuickActionButton {...args} />,
  args: {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
    actionIcon: 'chevron-right',
    href: 'https://www.google.com',
    hrefTarget: '_blank',
    onClick: undefined // storybook thinks
  }
}`,...(F=(R=l.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var J,Q,H;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DQuickActionButton {...args} />,
  args: {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
    actionIcon: 'chevron-right'
  }
}`,...(H=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:H.source}}};var E,$,z;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center">
      <DQuickActionButton {...args} />
    </div>,
  args: {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
    actionIcon: 'chevron-right'
  }
}`,...(z=($=u.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var M,X,O;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DQuickActionButton {...args} />,
  args: {
    line1: 'Checking account',
    line2: 'HISA ··· 665',
    representativeIcon: 'piggy-bank',
    representativeIconTheme: 'info',
    representativeIconHasCircle: true,
    actionIcon: 'chevron-right'
  }
}`,...(O=(X=p.parameters)==null?void 0:X.docs)==null?void 0:O.source}}};var L,W,Y;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DQuickActionButton {...args} />,
  args: {
    line1: 'Alternativas de pago',
    line2: 'Si no puedes pagar en este momento',
    representativeIcon: 'shuffle',
    representativeIconTheme: 'secondary',
    actionIcon: 'chevron-right'
  }
}`,...(Y=(W=m.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var G,K,U;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DQuickActionButton {...args} style={({
    [\`--\${PREFIX_BS}quick-action-button-component-border-radius\`]: 0,
    [\`--\${PREFIX_BS}quick-action-button-component-border-right\`]: 0,
    [\`--\${PREFIX_BS}quick-action-button-component-border-left\`]: 0,
    [\`--\${PREFIX_BS}quick-action-button-component-border-bottom\`]: 0
  } as any)} />,
  args: {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank  **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
    actionIcon: 'chevron-right'
  }
}`,...(U=(K=g.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const ue=["Div","Button","Href","HrefTarget","PersonalInfo","ButtonDoubleAction","AccountBox","Info","PersonList"],xe=Object.freeze(Object.defineProperty({__proto__:null,AccountBox:p,Button:s,ButtonDoubleAction:u,Div:o,Href:c,HrefTarget:l,Info:m,PersonList:g,PersonalInfo:d,__namedExportsOrder:ue,default:de},Symbol.toStringTag,{value:"Module"}));export{xe as D,d as P};
