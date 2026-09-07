import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-D2KSBTDy.js";import{I as M}from"./constants-CkChkWbF.js";import{P as e}from"./config-C3iYXcFk.js";import{F as he}from"./DInput-CZrXHuZO.js";import{c as ge}from"./currency.es-9OAR_aOO.js";import{u as ve}from"./useProvidedRefOrCreate-BKjSWIE4.js";import{u as Se,D as Ie}from"./DContext-CYga8oT4.js";import{u as Ce}from"./useDisableInputWheel-CQaeG2O8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D9ZNrqU0.js";import"./DIcon-ekCLf4cS.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-K3PrZFiL.js";import"./index-DxklarVZ.js";import"./index-DKAz_JVG.js";function I(n,i){return n===void 0?"":ge(n,{...i,symbol:""}).format()}function xe(n,i,s,r,c,y,d,u){const p=ve(y),m=l.useCallback(o=>{if(o===void 0)return o;let a=o;return d!==void 0&&(a=Math.max(a,d)),u!==void 0&&(a=Math.min(a,u)),a},[d,u]),[f,v]=l.useState("text"),[t,b]=l.useState(m(i)),[S,h]=l.useState(I(m(i),n)),N=l.useCallback(o=>{o.stopPropagation(),v("number"),s==null||s(o)},[s]),ye=l.useCallback(o=>{o.stopPropagation(),v("text");const a=m(t);a!==t&&(b(a),h(I(a,n)),r==null||r(a)),c==null||c(o)},[c,t,m,n,r]),fe=l.useCallback(o=>{const a=o===void 0||o===""?void 0:Number(o);a!==t&&(b(a),h(I(a,n)),r==null||r(a))},[n,r,t]),R=l.useRef(!1);l.useEffect(()=>{if(!R.current){R.current=!0;return}i!==t&&(b(i),h(I(i,n)))},[i,n,t]);const be=l.useMemo(()=>f==="number"?(t==null?void 0:t.toString())??"":S??"",[f,t,S]);return{inputRef:p,innerValue:be,innerType:f,handleOnFocus:N,handleOnChange:fe,handleOnBlur:ye}}function F({value:n,minValue:i,maxValue:s,currencyCode:r,onFocus:c,onBlur:y,onChange:d,...u},p){const{currency:m}=Se(),{handleOnWheel:f}=Ce(p),{inputRef:v,innerValue:t,innerType:b,handleOnFocus:S,handleOnChange:h,handleOnBlur:N}=xe(m,n,c,d,y,p,i,s);return g.jsx(he,{ref:v,value:t,onChange:h,inputMode:"decimal",type:b,onFocus:S,onBlur:N,onWheel:f,inputStart:g.jsx("span",{slot:"input-start",className:"d-input-currency-symbol",children:r||m.symbol}),...u})}const A=l.forwardRef(F);A.displayName="DInputCurrency";try{F.displayName="DInputCurrency",F.__docgenInfo={description:"",displayName:"DInputCurrency",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"IconValue | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"IconValue | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!1,type:{name:"number | undefined"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"number | undefined"}},currencyCode:{defaultValue:null,description:"",name:"currencyCode",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: number | undefined) => void) | undefined"}}}}}catch{}function T(n){return function(s){const{value:r,onChange:c,...y}=s,[d,u]=l.useState(r);return g.jsxs(Ie,{children:[n&&g.jsx("style",{children:n}),g.jsx(A,{...y,value:d,onChange:p=>{u(p),c&&c(p)}})]})}}const Be={title:"Design System/Components/Input Currency",component:A,parameters:{docs:{description:{component:`
Component composition with \`d-input-currency-base\` to make a currency input component that use
a \`DContextProvider\` to get the currency config.

## CSS Variables

The Bootstrap documentation provides details on the default [Input Form CSS Variables](https://getbootstrap.com/docs/5.3/forms/form-control/#css)
and so it does [Input Group CSS Variables](https://getbootstrap.com/docs/5.3/forms/input-group/#css)

| Variable                                  | Class         | Type            | Description                  |
|-------------------------------------------|---------------|-----------------|------------------------------|
| --${e}label-color                 | :root         | css color unit  | Label color                  |
| --${e}label-font-weight           | :root         | css font weight | Label font weight            |
| --${e}label-font-size             | :root         | css length unit | Label font size              |
| --${e}label-padding-x             | :root         | css length unit | Label horizontal padding     |
| --${e}label-padding-y             | :root         | css length unit | Label vertical padding       |
| --${e}input-border-color          | .input-group  | css color unit  | Input border color           |
| --${e}input-border-width          | .input-group  | css length unit | Input border width           |
| --${e}input-border-radius         | .input-group  | css length unit | Input border radius          |
| --${e}input-focus-border-color    | .input-group  | css color unit  | Input focus border color     |
| --${e}input-focus-box-shadow      | .input-group  | css shadow      | Input focus box shadow       |
| --${e}input-disabled-bg           | .input-group  | css color unit  | Input disable background     |
| --${e}input-disabled-color        | .input-group  | css color unit  | Input disable color          |
| --${e}input-disabled-border-color | .input-group  | css color unit  | Input disable border color   |
| --${e}form-text-padding           | .form-text    | css length unit | Hint padding                 |
| --${e}form-text-gap               | .form-text    | css length unit | Space between hint elements  |
| --${e}form-text-color             | .form-text    | css color unit  | Hint color                   |
| --${e}form-control-text-align     | .form-control | css text align  | Input text align             |
| --${e}input-currency-component-symbol-color | .d-input-currency-symbol | css color unit | Color of the currency symbol (set via class or style) |
| --${e}icon-component-color        | .d-icon       | css color unit  | Color of the \`iconStart\`/\`iconEnd\` icon |

## Changing the currency symbol color

The currency symbol (the \`$\`, \`CLP\`, etc. rendered via \`inputStart\`) is wrapped in a
\`.d-input-currency-symbol\` element whose color is controlled by two chained CSS variables, defined in
the component's stylesheet (not via inline style):

- \`--${e}input-currency-component-symbol-color\`: the "public" variable meant to be overridden.
  Defaults to \`var(--${e}secondary)\` when not set.
- \`--${e}input-currency-symbol-color\`: the variable actually consumed by \`.d-input-currency-symbol\`'s
  \`color\`. Falls back to the public variable above.

Since these are regular CSS custom properties (no inline style involved), you can override the public
variable from any ancestor selector, using either \`className\` or the \`style\` prop:

\`\`\`jsx
<DInputCurrency
  className="my-input-currency"
/>
\`\`\`
\`\`\`css
.my-input-currency {
  --${e}input-currency-component-symbol-color: #dc3545;
}
\`\`\`

\`\`\`jsx
<DInputCurrency
  style={{ '--${e}input-currency-component-symbol-color': '#dc3545' }}
/>
\`\`\`

## Changing the icon color

\`DInputCurrency\` also supports \`iconStart\`/\`iconEnd\` (inherited from \`DInput\`), rendered via \`DIcon\`.
Their color is controlled by the \`--${e}icon-component-color\` CSS variable (defined on the
internal \`.d-icon\` element), which is **not** set via inline style, so it can be safely scoped with a
regular \`className\`:

\`\`\`css
.my-input-currency .d-icon {
  --${e}icon-component-color: #dc3545;
}
\`\`\`

\`\`\`jsx
<DInputCurrency className="my-input-currency" iconStart="Search" />
\`\`\`
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},label:{control:"text",type:"string",table:{category:"Content"}},placeholder:{control:"text",type:"string",table:{category:"Content"}},value:{control:!1,type:"number",description:"The value of the input",table:{category:"Content"}},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"],table:{category:"Appearance"}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...M],table:{category:"Icon"}},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...M],table:{category:"Icon"}},iconStartAriaLabel:{control:"text",type:"string",table:{category:"Content"}},iconEndAriaLabel:{control:"text",type:"string",table:{category:"Content"}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback",table:{category:"Content"}},currencyCode:{control:"text",type:"string",table:{category:"Content"}},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},minValue:{control:"number",type:"number",table:{category:"Behavior"}},maxValue:{control:"number",type:"number",table:{category:"Behavior"}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Appearance"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"],render:T()},C={args:{label:"Label",placeholder:"Placeholder",value:void 0,minValue:void 0,maxValue:void 0,readOnly:!1,disabled:!1,loading:!1,invalid:!1,valid:!1,floatingLabel:!1}},x={args:{id:"componentId2",label:"Label",placeholder:"Placeholder",value:void 0,invalid:!0,hint:"Assistive text"}},V={args:{id:"componentId3",label:"Label",placeholder:"Placeholder",value:void 0,valid:!0,hint:"Assistive text"}},P={args:{id:"componentId4",label:"Label",placeholder:"Placeholder",value:void 0,disabled:!0}},L={args:{id:"componentId5",label:"Label",placeholder:"Placeholder",value:void 0,currencyCode:"CLP"}},$={parameters:{docs:{description:{story:"The component can receive a min and max value to limit the input value. This example shows the component with a min value of <strong>$0.00</strong> and a max value of <strong>$10,000.00</strong>."}}},args:{id:"componentId6",label:"Label",placeholder:"Placeholder",value:void 0,minValue:0,maxValue:1e4}},E={args:{id:"componentId7",label:"Label",placeholder:"Placeholder",value:void 0,floatingLabel:!0}},q={args:{id:"componentId7",label:"Label",placeholder:"Placeholder",value:void 0,minValue:0,maxValue:1e5,iconEnd:"Search",className:"d-input-currency-icon-color-demo"},parameters:{docs:{description:{story:`
Changes the color of the \`iconEnd\` icon using \`className\` to scope the
\`--${e}icon-component-color\` CSS variable, without affecting the currency symbol color.

\`\`\`css
.d-input-currency-icon-color-demo .d-icon {
  --${e}icon-component-color: #dc3545;
}
\`\`\`
        `}}},render:T(`
    .d-input-currency-icon-color-demo .d-icon {
      --${e}icon-component-color: #dc3545;
    }
  `)},D={args:{id:"componentId8",label:"Label",placeholder:"Placeholder",value:void 0,minValue:0,maxValue:1e5,className:"d-input-currency-symbol-color-demo"},parameters:{docs:{description:{story:`
Changes the currency symbol color using \`className\` to scope the
\`--${e}input-currency-component-symbol-color\` CSS variable.

\`\`\`css
.d-input-currency-symbol-color-demo {
  --${e}input-currency-component-symbol-color: #dc3545;
}
\`\`\`
        `}}},render:T(`
    .d-input-currency-symbol-color-demo {
      --${e}input-currency-component-symbol-color: #dc3545;
    }
  `)},w={args:{id:"componentId9",label:"Label",placeholder:"Placeholder",value:void 0,inputStart:null},parameters:{docs:{description:{story:"\nBy default `DInputCurrency` renders the currency symbol via `inputStart`. Passing\n`inputStart={null}` removes it, showing the input without any leading symbol.\n\n```jsx\n<DInputCurrency inputStart={null} />\n```\n        "}}}};var _,W,B;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: undefined,
    maxValue: undefined,
    readOnly: false,
    disabled: false,
    loading: false,
    invalid: false,
    valid: false,
    floatingLabel: false
  }
}`,...(B=(W=C.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var j,k,O;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    invalid: true,
    hint: 'Assistive text'
  }
}`,...(O=(k=x.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var X,z,H;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    valid: true,
    hint: 'Assistive text'
  }
}`,...(H=(z=V.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var G,J,K;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    disabled: true
  }
}`,...(K=(J=P.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;L.parameters={...L.parameters,docs:{...(Q=L.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    currencyCode: 'CLP'
  }
}`,...(Y=(U=L.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,ne;$.parameters={...$.parameters,docs:{...(Z=$.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The component can receive a min and max value to limit the input value. This example shows the component with a min value of <strong>$0.00</strong> and a max value of <strong>$10,000.00</strong>.'
      }
    }
  },
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 10000
  }
}`,...(ne=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,oe;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    floatingLabel: true
  }
}`,...(oe=(te=E.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,le,ie;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    iconEnd: 'Search',
    className: 'd-input-currency-icon-color-demo'
  },
  parameters: {
    docs: {
      description: {
        story: \`
Changes the color of the \\\`iconEnd\\\` icon using \\\`className\\\` to scope the
\\\`--\${PREFIX_BS}icon-component-color\\\` CSS variable, without affecting the currency symbol color.

\\\`\\\`\\\`css
.d-input-currency-icon-color-demo .d-icon {
  --\${PREFIX_BS}icon-component-color: #dc3545;
}
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: renderWithState(\`
    .d-input-currency-icon-color-demo .d-icon {
      --\${PREFIX_BS}icon-component-color: #dc3545;
    }
  \`)
}`,...(ie=(le=q.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,se,de;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    className: 'd-input-currency-symbol-color-demo'
  },
  parameters: {
    docs: {
      description: {
        story: \`
Changes the currency symbol color using \\\`className\\\` to scope the
\\\`--\${PREFIX_BS}input-currency-component-symbol-color\\\` CSS variable.

\\\`\\\`\\\`css
.d-input-currency-symbol-color-demo {
  --\${PREFIX_BS}input-currency-component-symbol-color: #dc3545;
}
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: renderWithState(\`
    .d-input-currency-symbol-color-demo {
      --\${PREFIX_BS}input-currency-component-symbol-color: #dc3545;
    }
  \`)
}`,...(de=(se=D.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ue,pe,me;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    inputStart: null
  },
  parameters: {
    docs: {
      description: {
        story: \`
By default \\\`DInputCurrency\\\` renders the currency symbol via \\\`inputStart\\\`. Passing
\\\`inputStart={null}\\\` removes it, showing the input without any leading symbol.

\\\`\\\`\\\`jsx
<DInputCurrency inputStart={null} />
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(me=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const je=["Default","Invalid","Valid","Disabled","WithCurrencyCode","WithRangeMinMax","Floating","WithIconColor","WithSymbolColor","WithoutSymbol"];export{C as Default,P as Disabled,E as Floating,x as Invalid,V as Valid,L as WithCurrencyCode,q as WithIconColor,$ as WithRangeMinMax,D as WithSymbolColor,w as WithoutSymbol,je as __namedExportsOrder,Be as default};
