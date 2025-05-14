import{j as t}from"./jsx-runtime-Yb_4y5hn.js";import{r as u}from"./index-BwDkhjyp.js";import{c as ue}from"./index-ELyB7pIJ.js";import"./_commonjsHelpers-BosuxZz1.js";function S({as:r="li",action:e,active:o,disabled:a,href:i,onClick:l,theme:m,children:x,className:I,style:j,dataAttributes:v}){const n=u.useMemo(()=>i?"a":e?"button":r,[i,r,e]),N=u.useMemo(()=>n==="a"||n==="button"?!0:e,[n,e]),me=u.useMemo(()=>({"list-group-item":!0,"list-group-item-action":N,[`list-group-item-${m}`]:!!m,active:o,disabled:a}),[N,o,a,m]),le=u.useMemo(()=>n==="button"?{...o&&{"aria-current":!0},...a&&{disabled:!0}}:{...o&&{"aria-current":!0},...a&&{"aria-disabled":!0}},[n,o,a]);return t.jsx(n,{className:ue(me,I),style:j,...n==="a"&&i&&{href:i},...l&&{onClick:l},...le,...v,...n==="button"&&{type:"button"},children:x})}try{S.displayName="DListGroupItem",S.__docgenInfo={description:"",displayName:"DListGroupItem",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},as:{defaultValue:{value:"li"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"a"'},{value:'"li"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"boolean | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string | undefined"}}}}}catch{}function V({as:r="ul",numbered:e,flush:o,horizontal:a,children:i,className:l,style:m,dataAttributes:x}){const I=u.useMemo(()=>e?"ol":r,[e,r]),j=u.useMemo(()=>{const v=typeof a=="string"?`list-group-horizontal-${a}`:"list-group-horizontal";return{"list-group":!0,"list-group-numbered":e,"list-group-flush":o,[v]:!!a}},[o,a,e]);return t.jsx(I,{className:ue(j,l),style:m,...x,children:i})}const s=Object.assign(V,{Item:S});try{V.displayName="DListGroup",V.__docgenInfo={description:"",displayName:"DListGroup",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"div"'},{value:'"ol"'},{value:'"ul"'}]}},numbered:{defaultValue:null,description:"",name:"numbered",required:!1,type:{name:"boolean | undefined"}},flush:{defaultValue:null,description:"",name:"flush",required:!1,type:{name:"boolean | undefined"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:'boolean | "sm" | "lg" | "xl" | "xxl" | "md" | undefined'}}}}}catch{}const fe={title:"Design System/Components/ListGroup",component:s,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Beta%20Component-d81b60)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap List Group](https://getbootstrap.com/docs/5.3/components/list-group/)

## CSS Variables

The Bootstrap documentation provides details on the default [List Group CSS Variables](https://getbootstrap.com/docs/5.3/components/list-group/#css)

        `}}},argTypes:{style:{control:"object"},className:{type:"string",control:"text"},flush:{type:"boolean",control:"boolean"},numbered:{type:"boolean",control:"boolean"},horizontal:{control:"select",type:{name:"string"},options:[void 0,!0,"sm","md","lg","xl","xxl"]}},tags:["autodocs"]},d={render:r=>t.jsx(s,{...r,children:[1,2,3].map(e=>t.jsx(s.Item,{children:"Lorem ipsum dolor sit amet consectetur."},e))})},c={render:r=>t.jsx(s,{...r,children:[1,2,3].map(e=>t.jsx(s.Item,{active:e===1,children:"Lorem ipsum dolor sit amet consectetur."},e))})},p={render:r=>t.jsx(s,{...r,children:[1,2,3].map(e=>t.jsx(s.Item,{disabled:e===1,children:"Lorem ipsum dolor sit amet consectetur."},e))})},g={render:r=>t.jsx(s,{...r,children:[1,2,3].map(e=>t.jsx(s.Item,{href:"#",active:e===1,children:"Lorem ipsum dolor sit amet consectetur."},e))}),args:{as:"div"}},f={render:r=>t.jsx(s,{...r,children:[1,2,3].map(e=>t.jsx(s.Item,{as:"button",active:e===1,children:"Lorem ipsum dolor sit amet consectetur."},e))}),args:{as:"div"}},L={render:r=>t.jsx(s,{...r,children:[1,2,3].map(e=>t.jsx(s.Item,{children:"Lorem ipsum dolor sit amet consectetur."},e))}),args:{flush:!0}},h={render:r=>t.jsx(s,{...r,children:[1,2,3].map(e=>t.jsx(s.Item,{children:"Lorem ipsum dolor sit amet consectetur."},e))}),args:{numbered:!0}},y={render:r=>t.jsx(s,{...r,children:[1,2,3].map(e=>t.jsx(s.Item,{children:"Lorem ipsum dolor sit amet consectetur."},e))}),args:{horizontal:!0}},D={render:r=>t.jsx(s,{...r,children:["primary","secondary","success","info","warning","danger"].map(e=>t.jsx(s.Item,{theme:e,children:"Lorem ipsum dolor sit amet consectetur."},e))})},G={render:r=>t.jsx(s,{...r,children:["primary","secondary","success","info","warning","danger"].map(e=>t.jsx(s.Item,{theme:e,action:!0,children:"Lorem ipsum dolor sit amet consectetur."},e))}),args:{as:"div"}},b={render:r=>t.jsx(s,{...r,children:[1,2,3].map(e=>t.jsxs(s.Item,{href:"#",children:[t.jsxs("div",{className:"d-flex w-100 justify-content-between",children:[t.jsx("h5",{className:"mb-1",children:"List group item heading"}),t.jsx("small",{children:"3 days ago"})]}),t.jsx("p",{className:"mb-1",children:"Some placeholder content in a paragraph."}),t.jsx("small",{children:"And some small print."})]},e))}),args:{as:"div"}};var _,q,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>
}`,...(k=(q=d.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var C,A,w;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} active={item === 1}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>
}`,...(w=(A=c.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var z,B,M;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} disabled={item === 1}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>
}`,...(M=(B=p.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var T,E,H;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} href="#" active={item === 1}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    as: 'div'
  }
}`,...(H=(E=g.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var $,F,O;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} as="button" active={item === 1}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    as: 'div'
  }
}`,...(O=(F=f.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var R,J,K;L.parameters={...L.parameters,docs:{...(R=L.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    flush: true
  }
}`,...(K=(J=L.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    numbered: true
  }
}`,...(W=(U=h.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    horizontal: true
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var P,ee,re;D.parameters={...D.parameters,docs:{...(P=D.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(item => <DListGroup.Item key={item} theme={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>
}`,...(re=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,se,ae;G.parameters={...G.parameters,docs:{...(te=G.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(item => <DListGroup.Item key={item} theme={item} action>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    as: 'div'
  }
}`,...(ae=(se=G.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var oe,ne,ie;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} href="#">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    as: 'div'
  }
}`,...(ie=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const Le=["Default","ActiveItems","DisableItems","Links","Buttons","Flush","Numbered","Horizontal","Variants","ActionVariants","CustomContent"];export{G as ActionVariants,c as ActiveItems,f as Buttons,b as CustomContent,d as Default,p as DisableItems,L as Flush,y as Horizontal,g as Links,h as Numbered,D as Variants,Le as __namedExportsOrder,fe as default};
