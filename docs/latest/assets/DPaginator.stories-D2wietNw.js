import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{D as i}from"./DPaginator-BBlilVIo.js";import{P as e}from"./config-C3iYXcFk.js";import"./index-ehdBXeXN.js";import"./iframe-BMeNOU03.js";import"./preload-helper-Dp1pzeXC.js";import"./index-yVdt6xC3.js";import"./index-Dqbu3ppb.js";const B={title:"Design System/Components/Paginator",component:i,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Pagination](https://getbootstrap.com/docs/5.3/components/pagination/)
+ [React Responsive Pagination](https://react-responsive-pagination.elantha.com/)

## CSS Variables
The Bootstrap documentation provides details on the default [Pagination CSS Variables](https://getbootstrap.com/docs/5.3/components/pagination/#css)

| Variable                                             | Class       | Type                   | Description                  |
|------------------------------------------------------|-------------|------------------------|------------------------------|
| --${e}pagination-page-item-size              | .pagination | css length unit        | Size of page item            |
| --${e}pagination-page-border-radius          | .pagination | css border radius unit | Radius page item             |
| --${e}pagination-page-control-color          | .pagination | css color unit         | Page control color           |
| --${e}pagination-page-control-disabled-color | .pagination | css color unit         | Page control disabled color  |
       `}}},argTypes:{total:{control:"number",table:{category:"Content"}},current:{control:"number",type:"number",table:{category:"Content"}},onPageChange:{action:"onPageChange",type:{name:"function"},table:{category:"Events"}},maxWidth:{control:"number",table:{category:"Appearance"}},className:{control:"text",table:{category:"Appearance"}},extraClassName:{control:"text",table:{category:"Appearance"}},pageItemClassName:{control:"text",table:{category:"Appearance"}},pageLinkClassName:{control:"text",table:{category:"Appearance"}},activeItemClassName:{control:"text",table:{category:"Appearance"}},disabledItemClassName:{control:"text",table:{category:"Appearance"}},disabledLinkClassName:{control:"text",table:{category:"Appearance"}},navClassName:{control:"text",table:{category:"Appearance"}},previousClassName:{control:"text",table:{category:"Appearance"}},nextClassName:{control:"text",type:"string",table:{category:"Appearance"}},previousLabel:{control:"text",table:{category:"Content"}},nextLabel:{control:"text",table:{category:"Content"}},ariaPreviousLabel:{control:"text",table:{category:"Content"}},ariaNextLabel:{control:"text",table:{category:"Content"}},renderNav:{control:"boolean",table:{category:"Appearance"}},ariaCurrentAttr:{control:"boolean",table:{category:"HTML Attributes"}},linkHref:{control:{type:"radio",labels:{undefined:"empty"}},options:[void 0,"hash","omit"],table:{category:"HTML Attributes"}}},tags:["autodocs"],render:function(f){return s.jsx(i,{...f})},decorators:[c=>s.jsx("div",{style:{width:"800"},children:s.jsx(c,{})})]},t={args:{total:20,maxWidth:400}},a={args:{total:20,nextLabel:"Next",previousLabel:"Previous",maxWidth:200}},o={args:{renderNav:!1,total:20,maxWidth:200}},r={args:{total:20,current:10,maxWidth:200}},n={args:{total:20,maxWidth:400}};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    total: 20,
    maxWidth: 400
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,d,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    total: 20,
    nextLabel: 'Next',
    previousLabel: 'Previous',
    maxWidth: 200
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,x,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    renderNav: false,
    total: 20,
    maxWidth: 200
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,C,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    total: 20,
    current: 10,
    maxWidth: 200
  }
}`,...(v=(C=r.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var A,N,P;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    total: 20,
    maxWidth: 400
  }
}`,...(P=(N=n.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const E=["Default","LabelArrows","NoArrows","CustomCurrentPage","CustomMaxWidth"];export{r as CustomCurrentPage,n as CustomMaxWidth,t as Default,a as LabelArrows,o as NoArrows,E as __namedExportsOrder,B as default};
