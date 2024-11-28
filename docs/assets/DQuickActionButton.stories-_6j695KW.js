import{j as t}from"./jsx-runtime-DQ32znRX.js";import{P as c}from"./config-CUZHf55T.js";import{I as l,d as p}from"./constants-DhWTmuJQ.js";import{D as n}from"./DQuickActionButton-CqFCxlZa.js";const A={title:"Design System/Components/Quick Action Button",component:n,argTypes:{line1:{control:"text",type:"string",description:"The title"},line2:{control:"text",type:"string",description:"The subtitle"},className:{control:"text",type:"string"},style:{control:"object"},secondaryActionIcon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...l],description:"The second action icon",table:{defaultValue:{summary:"chevron-left"}}},secondaryActionAriaLabel:{control:"text",type:"string"},actionIconFamilyClass:{control:"text",type:"string"},actionIconFamilyPrefix:{control:"text",type:"string"},actionLinkText:{control:"text",type:"string",description:"The action link text"},actionIcon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...l],description:"The action icon",table:{defaultValue:{summary:"chevron-right"}}},actionLinkTheme:{control:{type:"select",labels:{undefined:"empty"}},options:p,type:"string",description:"Theme of the action link",table:{defaultValue:{summary:"secondary"}}},representativeImage:{control:"text",type:"string"},representativeIcon:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...l],description:"The representative icon"},representativeIconFamilyClass:{control:"text",type:"string"},representativeIconFamilyPrefix:{control:"text",type:"string"},representativeIconTheme:{control:{type:"select",labels:{undefined:"empty"}},options:p,type:"string",description:"Theme of the representative icon",table:{defaultValue:{summary:"secondary"}}},representativeIconHasCircle:{type:"boolean",control:"boolean",description:"Add circle around the representative icon",table:{defaultValue:{summary:"false"}}},onClick:{action:"onClick"},onClickSecondary:{action:"onClickSecondary"}}},o={decorators:[e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(n,{...e}),args:{line1:"Jessica Rabit",line2:"Toon Bank **** 721",representativeImage:"https://i.pravatar.cc/150?img=2",actionIcon:"chevron-right"}},r={render:e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center",children:t.jsx(n,{...e})}),args:{line1:"Jessica Rabit",line2:"Toon Bank **** 721",secondaryActionIcon:"star",secondaryActionAriaLabel:"fav",representativeImage:"https://i.pravatar.cc/150?img=2"}},i={decorators:[e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(n,{...e}),args:{line1:"Checking account",line2:"HISA ··· 665",representativeIcon:"piggy-bank",representativeIconTheme:"info",representativeIconHasCircle:!0,actionLinkText:"Change"}},a={decorators:[e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(n,{...e}),args:{line1:"Alternativas de pago",line2:"Si no puedes pagar en este momento",representativeIcon:"shuffle",representativeIconTheme:"secondary",actionIcon:"chevron-right"}},s={decorators:[e=>t.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(n,{...e,style:{[`--${c}quick-action-button-component-border-radius`]:0,[`--${c}quick-action-button-component-border-right`]:0,[`--${c}quick-action-button-component-border-left`]:0,[`--${c}quick-action-button-component-border-bottom`]:0}}),args:{line1:"Jessica Rabit",line2:"Toon Bank  **** 721",representativeImage:"https://i.pravatar.cc/150?img=2",actionIcon:"chevron-right"}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center">
      <DQuickActionButton {...args} />
    </div>,
  args: {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    secondaryActionIcon: 'star',
    secondaryActionAriaLabel: 'fav',
    representativeImage: 'https://i.pravatar.cc/150?img=2'
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,f,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    actionLinkText: 'Change'
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,I,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(I=a.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var S,j,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(j=s.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const B=["PersonalInfo","ButtonDoubleAction","AccountBox","Info","PersonList"],N=Object.freeze(Object.defineProperty({__proto__:null,AccountBox:i,ButtonDoubleAction:r,Info:a,PersonList:s,PersonalInfo:o,__namedExportsOrder:B,default:A},Symbol.toStringTag,{value:"Module"}));export{N as D,o as P};
