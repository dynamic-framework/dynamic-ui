import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{D as N}from"./DPaginator-DYdp4x64.js";import{P as e}from"./config-C3iYXcFk.js";import"./index-D9ZNrqU0.js";import"./iframe-D2KSBTDy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DxklarVZ.js";import"./index-DKAz_JVG.js";const j={title:"Design System/Components/Paginator",component:N,parameters:{docs:{description:{component:`
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
`}}},argTypes:{total:{control:"number",table:{category:"Content"}},current:{control:"number",type:"number",table:{category:"Content"}},onPageChange:{action:"onPageChange",type:{name:"function"},table:{category:"Events"}},maxWidth:{control:"number",table:{category:"Appearance"}},className:{control:"text",table:{category:"Appearance"}},extraClassName:{control:"text",table:{category:"Appearance"}},pageItemClassName:{control:"text",table:{category:"Appearance"}},pageLinkClassName:{control:"text",table:{category:"Appearance"}},activeItemClassName:{control:"text",table:{category:"Appearance"}},disabledItemClassName:{control:"text",table:{category:"Appearance"}},disabledLinkClassName:{control:"text",table:{category:"Appearance"}},navClassName:{control:"text",table:{category:"Appearance"}},previousClassName:{control:"text",table:{category:"Appearance"}},nextClassName:{control:"text",type:"string",table:{category:"Appearance"}},previousLabel:{control:"text",table:{category:"Content"}},nextLabel:{control:"text",table:{category:"Content"}},ariaPreviousLabel:{control:"text",table:{category:"Content"}},ariaNextLabel:{control:"text",table:{category:"Content"}},renderNav:{control:"boolean",table:{category:"Appearance"}},ariaCurrentAttr:{control:"boolean",table:{category:"HTML Attributes"}},linkHref:{control:{type:"radio",labels:{undefined:"empty"}},options:[void 0,"hash","omit"],table:{category:"HTML Attributes"}}},tags:["autodocs"],decorators:[A=>s.jsx("div",{style:{width:800},children:s.jsx(A,{})})]},t={args:{total:20,maxWidth:400,current:1}},a={args:{total:20,nextLabel:"Next",previousLabel:"Previous",maxWidth:200,current:1,onPageChange:()=>{}}},o={args:{renderNav:!1,total:20,maxWidth:200,current:1,onPageChange:()=>{}}},r={args:{total:20,current:10,maxWidth:200,onPageChange:()=>{}}},n={args:{total:20,maxWidth:400,current:1,onPageChange:()=>{}}};var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    total: 20,
    maxWidth: 400,
    current: 1
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,g,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    total: 20,
    nextLabel: 'Next',
    previousLabel: 'Previous',
    maxWidth: 200,
    current: 1,
    onPageChange: () => {}
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    renderNav: false,
    total: 20,
    maxWidth: 200,
    current: 1,
    onPageChange: () => {}
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,h,C;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    total: 20,
    current: 10,
    maxWidth: 200,
    onPageChange: () => {}
  }
}`,...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var y,P,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    total: 20,
    maxWidth: 400,
    current: 1,
    onPageChange: () => {}
  }
}`,...(v=(P=n.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};const B=["Default","LabelArrows","NoArrows","CustomCurrentPage","CustomMaxWidth"];export{r as CustomCurrentPage,n as CustomMaxWidth,t as Default,a as LabelArrows,o as NoArrows,B as __namedExportsOrder,j as default};
