import{P as I}from"./config-C3iYXcFk.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./iframe-i78ACkaW.js";import{u as Ve,g as ze,h as Re,b as _e,a as qe,c as Ne,d as Ae,i as je,j as Be,o as Ee,f as De,s as Pe,k as Oe}from"./floating-ui.react-blLC_mme.js";import{c as Ge}from"./index-FFMNbmyF.js";import{a as We}from"./floating-ui.dom-4_SsKeQW.js";import{T as Me}from"./constants-CyI_OqvZ.js";import"./index-Djwb5CLE.js";import"./index-UiJLRdHU.js";const $e=8,T=4,Ue=2;function C({className:t,childrenClassName:ce,style:me,offSet:pe=T+Ue,padding:ue,withFocus:de=!1,withClick:fe=!1,withHover:he=!0,open:ge=!1,placement:we="top",size:g,Component:Ce,children:Le}){const[L,ve]=w.useState(ge),v=w.useRef(null),{refs:y,context:o,floatingStyles:ye}=Ve({open:L,onOpenChange:ve,placement:we,whileElementsMounted:We,middleware:[Ee(pe),De(),Pe({padding:ue}),Oe({element:v})]}),Ie=ze(o,{move:!1}),Te=Re(o),xe=_e(o,{ancestorScroll:!0}),be=qe(o),Se=Ne(o,{role:"tooltip"}),{getReferenceProps:Fe,getFloatingProps:He}=Ae([he?Ie:void 0,fe?be:void 0,de?Te:void 0,xe,Se]),ke=w.useMemo(()=>({"tooltip show":!0,[`tooltip-${g}`]:!!g,...t&&{[t]:!0}}),[g,t]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:ce,ref:y.setReference,...Fe(),children:Ce}),e.jsx(je,{children:L&&e.jsxs("div",{className:Ge(ke),ref:y.setFloating,style:{...ye,...me},...He(),children:[e.jsx(Be,{ref:v,context:o,width:$e,height:T}),e.jsx("div",{className:"tooltip-inner",children:Le})]})})]})}try{C.displayName="DTooltip",C.__docgenInfo={description:"",displayName:"DTooltip",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},childrenClassName:{defaultValue:null,description:"",name:"childrenClassName",required:!1,type:{name:"string | undefined"}},offSet:{defaultValue:{value:"ARROW_HEIGHT + GAP"},description:"",name:"offSet",required:!1,type:{name:"number | undefined"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number | undefined"}},withHover:{defaultValue:{value:"true"},description:"",name:"withHover",required:!1,type:{name:"boolean | undefined"}},withFocus:{defaultValue:{value:"false"},description:"",name:"withFocus",required:!1,type:{name:"boolean | undefined"}},withClick:{defaultValue:{value:"false"},description:"",name:"withClick",required:!1,type:{name:"boolean | undefined"}},open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ReactNode"}}}}}catch{}const so={title:"Design System/Components/Tooltip",component:C,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Abstraction%20Component-4848b7)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Floating UI](https://floating-ui.com/docs/react)

## CSS Variables
The Bootstrap documentation provides details on the default [Tooltip CSS Variables](https://getbootstrap.com/docs/5.3/components/tooltips/#css)

| Variable                           | Class    | Type            | Description                  |
|------------------------------------|----------|-----------------|------------------------------|
| --${I}tooltip-sm-font-size | .tooltip | css length unit | Small tooltip text font size |
| --${I}tooltip-lg-font-size | .tooltip | css length unit | Small tooltip text font size |
        `}}},argTypes:{placement:{control:"select",options:["top","left","bottom","right"],defaultValue:"bottom"},withHover:{type:"boolean",control:"boolean",defaultValue:!0},withClick:{type:"boolean",control:"boolean",defaultValue:!1},open:{type:"boolean",control:"boolean",defaultValue:!1},withFocus:{type:"boolean",control:"boolean",defaultValue:!1},className:{type:"string",control:"text"},childrenClassName:{type:"string",control:"text"},color:{control:"select",type:"string",options:Me,table:{defaultValue:{summary:"primary"}},description:"The color to use."},Component:{defaultValue:"Link",type:"string",control:"text"},children:{control:"text",type:"string"},offSet:{type:"number"},padding:{type:"number"}},tags:["autodocs"]},s={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0,color:"dark"}},r={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,color:"secondary"}},n={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,color:"secondary"}},a={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,color:"secondary"}},l={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",color:"secondary"}},i={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",color:"secondary"}},c={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",color:"secondary"}},m={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",color:"secondary"}},p={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",color:"secondary"}},u={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",color:"secondary"}},d={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",color:"secondary"}},f={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",color:"secondary"}},h={args:{placement:"left",Component:"Text",children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",color:"secondary"}};var x,b,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var F,H,k;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(k=(H=r.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var V,z,R;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(z=n.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var _,q,N;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(q=a.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var A,j,B;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(j=l.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var E,D,P;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(te=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var se,re,ne;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,le,ie;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const ro=["Top","Right","Bottom","Left","SmallTop","SmallRight","SmallBottom","SmallLeft","LargeTop","LargeRight","LargeBottom","LargeLeft","LargeText"];export{n as Bottom,d as LargeBottom,f as LargeLeft,u as LargeRight,h as LargeText,p as LargeTop,a as Left,r as Right,c as SmallBottom,m as SmallLeft,i as SmallRight,l as SmallTop,s as Top,ro as __namedExportsOrder,so as default};
