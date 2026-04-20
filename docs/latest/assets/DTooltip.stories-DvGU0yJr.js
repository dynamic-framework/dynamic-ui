import{P as I}from"./config-C3iYXcFk.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./iframe-DzUt-hmA.js";import{u as Ve,g as ze,h as Re,b as Ae,a as _e,c as qe,d as Be,i as Ne,j as je,o as Ee,f as De,s as Pe,k as Oe}from"./floating-ui.react-D3D3CnsZ.js";import{c as Ge}from"./index-FBYaOunh.js";import{a as We}from"./floating-ui.dom-DdXqV6k1.js";import{T as Me}from"./constants-CkChkWbF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DPeSPgHT.js";import"./index-BeUCTf5O.js";const $e=8,b=4,Ue=2;function y({className:t,childrenClassName:ce,style:me,offSet:pe=b+Ue,padding:ue,withFocus:de=!1,withClick:fe=!1,withHover:he=!0,open:ge=!1,placement:we="top",size:g,Component:ye,children:Ce}){const[C,ve]=w.useState(ge),v=w.useRef(null),{refs:L,context:o,floatingStyles:Le}=Ve({open:C,onOpenChange:ve,placement:we,whileElementsMounted:We,middleware:[Ee(pe),De(),Pe({padding:ue}),Oe({element:v})]}),Ie=ze(o,{move:!1}),be=Re(o),Te=Ae(o,{ancestorScroll:!0}),xe=_e(o),Se=qe(o,{role:"tooltip"}),{getReferenceProps:Fe,getFloatingProps:He}=Be([he?Ie:void 0,fe?xe:void 0,de?be:void 0,Te,Se]),ke=w.useMemo(()=>({"tooltip show":!0,[`tooltip-${g}`]:!!g,...t&&{[t]:!0}}),[g,t]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:ce,ref:L.setReference,...Fe(),children:ye}),e.jsx(Ne,{children:C&&e.jsxs("div",{className:Ge(ke),ref:L.setFloating,style:{...Le,...me},...He(),children:[e.jsx(je,{ref:v,context:o,width:$e,height:b}),e.jsx("div",{className:"tooltip-inner",children:Ce})]})})]})}try{y.displayName="DTooltip",y.__docgenInfo={description:"",displayName:"DTooltip",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},childrenClassName:{defaultValue:null,description:"",name:"childrenClassName",required:!1,type:{name:"string | undefined"}},offSet:{defaultValue:{value:"ARROW_HEIGHT + GAP"},description:"",name:"offSet",required:!1,type:{name:"number | undefined"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number | undefined"}},withHover:{defaultValue:{value:"true"},description:"",name:"withHover",required:!1,type:{name:"boolean | undefined"}},withFocus:{defaultValue:{value:"false"},description:"",name:"withFocus",required:!1,type:{name:"boolean | undefined"}},withClick:{defaultValue:{value:"false"},description:"",name:"withClick",required:!1,type:{name:"boolean | undefined"}},open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ReactNode"}}}}}catch{}const so={title:"Design System/Components/Tooltip",component:y,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Abstraction%20Component-4848b7)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Floating UI](https://floating-ui.com/docs/react)

## CSS Variables
The Bootstrap documentation provides details on the default [Tooltip CSS Variables](https://getbootstrap.com/docs/5.3/components/tooltips/#css)

| Variable                           | Class    | Type            | Description                  |
|------------------------------------|----------|-----------------|------------------------------|
| --${I}tooltip-sm-font-size | .tooltip | css length unit | Small tooltip text font size |
| --${I}tooltip-lg-font-size | .tooltip | css length unit | Small tooltip text font size |
        `}}},argTypes:{placement:{control:"select",options:["top","left","bottom","right"],defaultValue:"bottom",table:{category:"Appearance"}},withHover:{type:"boolean",control:"boolean",defaultValue:!0,table:{category:"Behavior"}},withClick:{type:"boolean",control:"boolean",defaultValue:!1,table:{category:"Behavior"}},open:{type:"boolean",control:"boolean",defaultValue:!1,table:{category:"Behavior"}},withFocus:{type:"boolean",control:"boolean",defaultValue:!1,table:{category:"Behavior"}},className:{type:"string",control:"text",table:{category:"Appearance"}},childrenClassName:{type:"string",control:"text",table:{category:"Appearance"}},color:{control:"select",type:"string",options:Me,table:{defaultValue:{summary:"primary"},category:"Appearance"},description:"The color to use."},Component:{defaultValue:"Link",type:"string",control:"text",table:{category:"Content"}},children:{control:"text",type:"string",table:{category:"Content"}},offSet:{type:"number",table:{category:"Appearance"}},padding:{type:"number",table:{category:"Appearance"}}},tags:["autodocs"]},r={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0,color:"dark"}},s={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,color:"secondary"}},a={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,color:"secondary"}},n={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,color:"secondary"}},l={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",color:"secondary"}},i={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",color:"secondary"}},c={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",color:"secondary"}},m={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",color:"secondary"}},p={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",color:"secondary"}},u={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",color:"secondary"}},d={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",color:"secondary"}},f={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",color:"secondary"}},h={args:{placement:"left",Component:"Text",children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",color:"secondary"}};var T,x,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: true,
    color: 'dark'
  }
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var F,H,k;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    color: 'secondary'
  }
}`,...(k=(H=s.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var V,z,R;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    color: 'secondary'
  }
}`,...(R=(z=a.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var A,_,q;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    color: 'secondary'
  }
}`,...(q=(_=n.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var B,N,j;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'sm',
    color: 'secondary'
  }
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var E,D,P;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'sm',
    color: 'secondary'
  }
}`,...(P=(D=i.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var O,G,W;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'sm',
    color: 'secondary'
  }
}`,...(W=(G=c.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var M,$,U;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'sm',
    color: 'secondary'
  }
}`,...(U=($=m.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var X,J,K;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg',
    color: 'secondary'
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg',
    color: 'secondary'
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,oe,te;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg',
    color: 'secondary'
  }
}`,...(te=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,se,ae;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg',
    color: 'secondary'
  }
}`,...(ae=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ne,le,ie;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg',
    color: 'secondary'
  }
}`,...(ie=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const ao=["Top","Right","Bottom","Left","SmallTop","SmallRight","SmallBottom","SmallLeft","LargeTop","LargeRight","LargeBottom","LargeLeft","LargeText"];export{a as Bottom,d as LargeBottom,f as LargeLeft,u as LargeRight,h as LargeText,p as LargeTop,n as Left,s as Right,c as SmallBottom,m as SmallLeft,i as SmallRight,l as SmallTop,r as Top,ao as __namedExportsOrder,so as default};
