import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as C}from"./index-DH5ua8nC.js";import{u as ze,g as Re,h as qe,b as _e,a as Ne,c as Ae,d as je,i as Be,j as Ee,o as De,f as Pe,s as Oe,k as Ge}from"./floating-ui.react-CzTYqOs8.js";import{c as We}from"./index-mLFX9G4A.js";import{a as $e}from"./floating-ui.dom-B5CW5bK0.js";import{T as Me}from"./constants-DhWTmuJQ.js";import{P as T}from"./config-CUZHf55T.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D9uilScg.js";const Ue=8,x=4,Xe=2;function L({className:o,childrenClassName:ce,style:pe,offSet:ue=x+Xe,padding:de,withFocus:fe=!1,withClick:he=!1,withHover:ge=!0,open:we=!1,theme:g="dark",placement:Ce="top",size:w,Component:Le,children:ve}){const[v,ye]=C.useState(we),y=C.useRef(null),{refs:I,context:t,floatingStyles:Ie}=ze({open:v,onOpenChange:ye,placement:Ce,whileElementsMounted:$e,middleware:[De(ue),Pe(),Oe({padding:de}),Ge({element:y})]}),Te=Re(t,{move:!1}),xe=qe(t),be=_e(t,{ancestorScroll:!0}),Se=Ne(t),Fe=Ae(t,{role:"tooltip"}),{getReferenceProps:ke,getFloatingProps:He}=je([ge?Te:void 0,he?Se:void 0,fe?xe:void 0,be,Fe]),Ve=C.useMemo(()=>({"tooltip show":!0,[`tooltip-${w}`]:!!w,[`tooltip-${g}`]:!!g,...o&&{[o]:!0}}),[w,g,o]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:ce,ref:I.setReference,...ke(),children:Le}),e.jsx(Be,{children:v&&e.jsxs("div",{className:We(Ve),ref:I.setFloating,style:{...Ie,...pe},...He(),children:[e.jsx(Ee,{ref:y,context:t,width:Ue,height:x}),e.jsx("div",{className:"tooltip-inner",children:ve})]})})]})}try{L.displayName="DTooltip",L.__docgenInfo={description:"",displayName:"DTooltip",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},childrenClassName:{defaultValue:null,description:"",name:"childrenClassName",required:!1,type:{name:"string | undefined"}},offSet:{defaultValue:{value:"ARROW_HEIGHT + GAP"},description:"",name:"offSet",required:!1,type:{name:"number | undefined"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number | undefined"}},withHover:{defaultValue:{value:"true"},description:"",name:"withHover",required:!1,type:{name:"boolean | undefined"}},withFocus:{defaultValue:{value:"false"},description:"",name:"withFocus",required:!1,type:{name:"boolean | undefined"}},withClick:{defaultValue:{value:"false"},description:"",name:"withClick",required:!1,type:{name:"boolean | undefined"}},open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean | undefined"}},theme:{defaultValue:{value:"dark"},description:"",name:"theme",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'}]}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ReactNode"}}}}}catch{}const nt={title:"Design System/Components/Tooltip",component:L,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Abstraction%20Component-4848b7)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Floating UI](https://floating-ui.com/docs/react)

## CSS Variables
The Bootstrap documentation provides details on the default [Tooltip CSS Variables](https://getbootstrap.com/docs/5.3/components/tooltips/#css)

| Variable                           | Class    | Type            | Description                  |
|------------------------------------|----------|-----------------|------------------------------|
| --${T}tooltip-sm-font-size | .tooltip | css length unit | Small tooltip text font size |
| --${T}tooltip-lg-font-size | .tooltip | css length unit | Small tooltip text font size |
        `}}},argTypes:{placement:{control:"select",options:["top","left","bottom","right"],defaultValue:"bottom"},withHover:{type:"boolean",control:"boolean",defaultValue:!0},withClick:{type:"boolean",control:"boolean",defaultValue:!1},open:{type:"boolean",control:"boolean",defaultValue:!1},withFocus:{type:"boolean",control:"boolean",defaultValue:!1},className:{type:"string",control:"text"},childrenClassName:{type:"string",control:"text"},theme:{control:"select",type:"string",options:Me,table:{defaultValue:{summary:"primary"}},description:"The theme to use."},Component:{defaultValue:"Link",type:"string",control:"text"},children:{control:"text",type:"string"},offSet:{type:"number"},padding:{type:"number"}},tags:["autodocs"]},s={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!0,theme:"dark"}},n={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,theme:"secondary"}},a={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,theme:"secondary"}},r={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,theme:"secondary"}},l={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",theme:"secondary"}},i={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",theme:"secondary"}},m={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",theme:"secondary"}},c={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"sm",theme:"secondary"}},p={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",theme:"secondary"}},u={args:{placement:"right",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",theme:"secondary"}},d={args:{placement:"bottom",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",theme:"secondary"}},f={args:{placement:"left",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",theme:"secondary"}},h={args:{placement:"left",Component:"Text",children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg",theme:"secondary"}};var b,S,F;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: true,
    theme: 'dark'
  }
}`,...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var k,H,V;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    theme: 'secondary'
  }
}`,...(V=(H=n.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var z,R,q;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    theme: 'secondary'
  }
}`,...(q=(R=a.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var _,N,A;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    theme: 'secondary'
  }
}`,...(A=(N=r.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var j,B,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'sm',
    theme: 'secondary'
  }
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var D,P,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'sm',
    theme: 'secondary'
  }
}`,...(O=(P=i.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var G,W,$;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'sm',
    theme: 'secondary'
  }
}`,...($=(W=m.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var M,U,X;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'sm',
    theme: 'secondary'
  }
}`,...(X=(U=c.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg',
    theme: 'secondary'
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg',
    theme: 'secondary'
  }
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,se;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg',
    theme: 'secondary'
  }
}`,...(se=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,ae,re;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg',
    theme: 'secondary'
  }
}`,...(re=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,ie,me;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg',
    theme: 'secondary'
  }
}`,...(me=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};const at=["Top","Right","Bottom","Left","SmallTop","SmallRight","SmallBottom","SmallLeft","LargeTop","LargeRight","LargeBottom","LargeLeft","LargeText"];export{a as Bottom,d as LargeBottom,f as LargeLeft,u as LargeRight,h as LargeText,p as LargeTop,r as Left,n as Right,m as SmallBottom,c as SmallLeft,i as SmallRight,l as SmallTop,s as Top,at as __namedExportsOrder,nt as default};
