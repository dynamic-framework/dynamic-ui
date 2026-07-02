import{P as b}from"./config-C3iYXcFk.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./iframe-DkjceUUU.js";import{u as ze,g as Ve,h as Re,b as Ae,a as _e,c as qe,d as Be,i as Ne,j as je,o as De,f as Pe,s as Ee,k as Oe}from"./floating-ui.react-DC6XVZh8.js";import{c as Ge}from"./index-CtlKHQhD.js";import{a as We}from"./floating-ui.dom-DdXqV6k1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-p6Xuepxi.js";import"./index-DxZ9-uFP.js";const $e=8,x=4,Me=2;function C({className:o,childrenClassName:me,style:pe,offSet:ce=x+Me,padding:ue,withFocus:de=!1,withClick:fe=!1,withHover:he=!0,open:ge=!1,placement:we="top",size:g,Component:Ce,children:ve}){const[v,Le]=w.useState(ge),L=w.useRef(null),{refs:I,context:t,floatingStyles:Ie}=ze({open:v,onOpenChange:Le,placement:we,whileElementsMounted:We,middleware:[De(ce),Pe(),Ee({padding:ue}),Oe({element:L})]}),be=Ve(t,{move:!1}),xe=Re(t),ye=Ae(t,{ancestorScroll:!0}),Te=_e(t),Fe=qe(t,{role:"tooltip"}),{getReferenceProps:Se,getFloatingProps:He}=Be([he?be:void 0,fe?Te:void 0,de?xe:void 0,ye,Fe]),ke=w.useMemo(()=>({"tooltip show":!0,[`tooltip-${g}`]:!!g,...o&&{[o]:!0}}),[g,o]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:me,ref:I.setReference,...Se(),children:Ce}),e.jsx(Ne,{children:v&&e.jsxs("div",{className:Ge(ke),ref:I.setFloating,style:{...Ie,...pe},...He(),children:[e.jsx(je,{ref:L,context:t,width:$e,height:x}),e.jsx("div",{className:"tooltip-inner",children:ve})]})})]})}try{C.displayName="DTooltip",C.__docgenInfo={description:"",displayName:"DTooltip",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},childrenClassName:{defaultValue:null,description:"",name:"childrenClassName",required:!1,type:{name:"string | undefined"}},offSet:{defaultValue:{value:"ARROW_HEIGHT + GAP"},description:"",name:"offSet",required:!1,type:{name:"number | undefined"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number | undefined"}},withHover:{defaultValue:{value:"true"},description:"",name:"withHover",required:!1,type:{name:"boolean | undefined"}},withFocus:{defaultValue:{value:"false"},description:"",name:"withFocus",required:!1,type:{name:"boolean | undefined"}},withClick:{defaultValue:{value:"false"},description:"",name:"withClick",required:!1,type:{name:"boolean | undefined"}},open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ReactNode"}}}}}catch{}const ot={title:"Design System/Components/Tooltip",component:C,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Abstraction%20Component-4848b7)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Floating UI](https://floating-ui.com/docs/react)

## CSS Variables
The Bootstrap documentation provides details on the default [Tooltip CSS Variables](https://getbootstrap.com/docs/5.3/components/tooltips/#css)

| Variable                           | Class    | Type            | Description                  |
|------------------------------------|----------|-----------------|------------------------------|
| --${b}tooltip-sm-font-size | .tooltip | css length unit | Small tooltip text font size |
| --${b}tooltip-lg-font-size | .tooltip | css length unit | Small tooltip text font size |
        `}}},argTypes:{placement:{control:"select",options:["top","left","bottom","right"],defaultValue:"bottom",table:{category:"Appearance"}},withHover:{type:"boolean",control:"boolean",defaultValue:!0,table:{category:"Behavior"}},withClick:{type:"boolean",control:"boolean",defaultValue:!1,table:{category:"Behavior"}},open:{type:"boolean",control:"boolean",defaultValue:!1,table:{category:"Behavior"}},withFocus:{type:"boolean",control:"boolean",defaultValue:!1,table:{category:"Behavior"}},className:{type:"string",control:"text",table:{category:"Appearance"}},childrenClassName:{type:"string",control:"text",table:{category:"Appearance"}},Component:{defaultValue:"Link",type:"string",control:"text",table:{category:"Content"}},children:{control:"text",type:"string",table:{category:"Content"}},offSet:{type:"number",table:{category:"Appearance"}},padding:{type:"number",table:{category:"Appearance"}}},tags:["autodocs"]},s={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0}},a={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1}},n={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1}},r={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1}},l={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm"}},i={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm"}},m={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm"}},p={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm"}},c={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg"}},u={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg"}},d={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg"}},f={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg"}},h={args:{placement:"left",Component:"Text",children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg"}};var y,T,F;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: true
  }
}`,...(F=(T=s.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var S,H,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false
  }
}`,...(k=(H=a.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var z,V,R;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false
  }
}`,...(R=(V=n.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var A,_,q;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false
  }
}`,...(q=(_=r.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var B,N,j;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'sm'
  }
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var D,P,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'sm'
  }
}`,...(E=(P=i.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var O,G,W;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'sm'
  }
}`,...(W=(G=m.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var $,M,U;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'sm'
  }
}`,...(U=(M=p.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var X,J,K;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg'
  }
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg'
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,oe;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg'
  }
}`,...(oe=(te=d.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ae,ne;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg'
  }
}`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,le,ie;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg'
  }
}`,...(ie=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const st=["Top","Right","Bottom","Left","SmallTop","SmallRight","SmallBottom","SmallLeft","LargeTop","LargeRight","LargeBottom","LargeLeft","LargeText"];export{n as Bottom,d as LargeBottom,f as LargeLeft,u as LargeRight,h as LargeText,c as LargeTop,r as Left,a as Right,m as SmallBottom,p as SmallLeft,i as SmallRight,l as SmallTop,s as Top,st as __namedExportsOrder,ot as default};
