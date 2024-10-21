import{D as po}from"./DBadge-lRsxpBBr.js";import{T as go,I as b}from"./constants-DhWTmuJQ.js";import{P as f}from"./config-CUZHf55T.js";import"./jsx-runtime-CKrituN3.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ELyB7pIJ.js";import"./DIcon-1scRBrNx.js";import"./DContext-CSLUP0I2.js";import"./index-BtM5VmRH.js";const To={title:"Design System/Components/Badge",component:po,parameters:{docs:{description:{component:`
Wrapper around Bootstrap Badge.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Badge](https://getbootstrap.com/docs/5.3/components/badge/)

## CSS Variables

The Bootstrap documentation provides details on the default [Badge CSS Variables](https://getbootstrap.com/docs/5.3/components/badge/#css)

| Variable                                  | Class            | Type             | Description              |
|-------------------------------------------|------------------|------------------|--------------------------|
| --${f}badge-bg                    | .badge           | css color unit   | Background color         |
| --${f}badge-gap                   | .badge           | css length unit  | Spacing between elements |
        `}}},argTypes:{id:{control:"text",type:"string"},style:{control:"object"},className:{control:"text",type:"string"},text:{control:"text",type:"string",description:"Text of badge"},theme:{control:"select",type:"string",options:go,table:{defaultValue:{summary:"primary"}},description:"The theme to use."},soft:{control:"boolean",type:"boolean"},rounded:{control:"boolean",type:"boolean"},iconStart:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...b]},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...b]}},tags:["autodocs"]},o={args:{theme:"primary",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},e={args:{theme:"secondary",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},r={args:{theme:"success",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},t={args:{theme:"danger",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},a={args:{theme:"info",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},s={args:{theme:"warning",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},n={args:{theme:"light",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},c={args:{theme:"dark",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},m={args:{soft:!0,theme:"primary",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},i={args:{soft:!0,theme:"secondary",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},d={args:{soft:!0,theme:"success",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},k={args:{soft:!0,theme:"danger",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},u={args:{soft:!0,theme:"info",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},p={args:{soft:!0,theme:"warning",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},g={args:{soft:!0,theme:"light",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}},l={args:{soft:!0,theme:"dark",text:"Default",iconStart:"bookmarks",iconEnd:"bookmarks"}};var S,h,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    theme: 'primary',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(D=(h=o.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var x,E,y;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    theme: 'secondary',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(y=(E=e.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var B,T,w;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    theme: 'success',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(w=(T=r.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var I,P,v;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    theme: 'danger',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(v=(P=t.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var C,W,L;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    theme: 'info',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(L=(W=a.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var V,_,N;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    theme: 'warning',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(N=(_=s.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var O,$,j;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    theme: 'light',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(j=($=n.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var F,H,M;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    theme: 'dark',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(M=(H=c.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var R,X,q;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    soft: true,
    theme: 'primary',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(q=(X=m.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var z,A,G;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    soft: true,
    theme: 'secondary',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(G=(A=i.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    soft: true,
    theme: 'success',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    soft: true,
    theme: 'danger',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var oo,eo,ro;u.parameters={...u.parameters,docs:{...(oo=u.parameters)==null?void 0:oo.docs,source:{originalSource:`{
  args: {
    soft: true,
    theme: 'info',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(ro=(eo=u.parameters)==null?void 0:eo.docs)==null?void 0:ro.source}}};var to,ao,so;p.parameters={...p.parameters,docs:{...(to=p.parameters)==null?void 0:to.docs,source:{originalSource:`{
  args: {
    soft: true,
    theme: 'warning',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(so=(ao=p.parameters)==null?void 0:ao.docs)==null?void 0:so.source}}};var no,co,mo;g.parameters={...g.parameters,docs:{...(no=g.parameters)==null?void 0:no.docs,source:{originalSource:`{
  args: {
    soft: true,
    theme: 'light',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(mo=(co=g.parameters)==null?void 0:co.docs)==null?void 0:mo.source}}};var io,ko,uo;l.parameters={...l.parameters,docs:{...(io=l.parameters)==null?void 0:io.docs,source:{originalSource:`{
  args: {
    soft: true,
    theme: 'dark',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks'
  }
}`,...(uo=(ko=l.parameters)==null?void 0:ko.docs)==null?void 0:uo.source}}};const wo=["Primary","Secondary","Success","Danger","Info","Warning","Light","Dark","PrimarySoft","SecondarySoft","SuccessSoft","DangerSoft","InfoSoft","WarningSoft","LightSoft","DarkSoft"];export{t as Danger,k as DangerSoft,c as Dark,l as DarkSoft,a as Info,u as InfoSoft,n as Light,g as LightSoft,o as Primary,m as PrimarySoft,e as Secondary,i as SecondarySoft,r as Success,d as SuccessSoft,s as Warning,p as WarningSoft,wo as __namedExportsOrder,To as default};
