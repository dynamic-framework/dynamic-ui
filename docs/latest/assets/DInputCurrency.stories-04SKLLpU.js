import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-BOlGrI6L.js";import{I as z}from"./constants-Cykb4qS-.js";import{P as e}from"./config-7dXXkQRG.js";import{F as Le}from"./DInput-DVsOxLq9.js";import{c as Pe}from"./currency.es-9OAR_aOO.js";import{u as $e}from"./useProvidedRefOrCreate-DdHEaJGi.js";import{u as Ee,D as qe}from"./DContext-BsbKwSe9.js";import{u as we}from"./useDisableInputWheel-BJn-kmkX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DowJ8Qf7.js";import"./DIcon-CTNbRGzm.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-CBOESKxy.js";import"./hasLabelContent-D-Wn7nqw.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";function De(i,r){return i===void 0?"":Pe(i,{...r,symbol:""}).format()}function Ae(i,r,s,a,c,g,d,u,m=!0){const T=$e(g),y=l.useRef(a);y.current=a;const f=l.useRef(null),p=l.useCallback(n=>{if(n===void 0||!m)return n;let o=n;return d!==void 0&&(o=Math.max(o,d)),u!==void 0&&(o=Math.min(o,u)),o},[d,u,m]),[b,S]=l.useState("text"),[t,v]=l.useState(()=>p(r)),W=l.useCallback(n=>{n.stopPropagation(),S("number"),s==null||s(n)},[s]),k=l.useCallback(n=>{n.stopPropagation(),S("text");const o=p(t);o!==t&&(v(o),f.current={from:r,to:o},a==null||a(o)),c==null||c(n)},[c,t,p,a,r]),M=l.useCallback(n=>{const o=n===void 0||n===""?void 0:Number(n);o!==t&&(v(o),a==null||a(o))},[a,t]),x=b==="number";l.useEffect(()=>{var o;const n=x?r:p(r);if(n!==t&&v(n),n!==r){const _=f.current;(!_||_.from!==r||_.to!==n)&&(f.current={from:r,to:n},(o=y.current)==null||o.call(y,n))}else f.current=null},[r,p,x]);const C=l.useMemo(()=>De(t,i),[t,i]),X=l.useMemo(()=>b==="number"?(t==null?void 0:t.toString())??"":C,[b,t,C]),V=u!==void 0&&t!==void 0&&t>u,O=d!==void 0&&t!==void 0&&t<d;return{inputRef:T,innerValue:X,innerType:b,isOverMax:V,isUnderMin:O,handleOnFocus:W,handleOnChange:M,handleOnBlur:k}}function B({value:i,minValue:r,maxValue:s,clamp:a=!0,currencyCode:c,onFocus:g,onBlur:d,onChange:u,invalid:m,valid:T,...y},f){const{currency:p}=Ee(),{handleOnWheel:b}=we(f),{inputRef:S,innerValue:t,innerType:v,isOverMax:W,isUnderMin:k,handleOnFocus:M,handleOnChange:x,handleOnBlur:C}=Ae(p,i,g,u,d,f,r,s,a),V=m??(!a&&(W||k)),O=V?!1:T;return h.jsx(Le,{ref:S,value:t,onChange:x,inputMode:"decimal",type:v,onFocus:M,onBlur:C,onWheel:b,invalid:V,valid:O,inputStart:h.jsx("span",{slot:"input-start",className:"d-input-currency-symbol",children:c||p.symbol}),...y})}const F=l.forwardRef(B);F.displayName="DInputCurrency";try{B.displayName="DInputCurrency",B.__docgenInfo={description:"",displayName:"DInputCurrency",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"IconValue | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"IconValue | undefined"}},label:{defaultValue:null,description:`The label of the control. Any node is accepted, so it can carry a link, an
info trigger or other markup — the terms-and-conditions pattern.

Text doubles as the control's accessible name. A richer label does not, so
pass \`aria-label\` alongside it; a development-only warning says so when it
is missing. A rich label also does not fit \`floatingLabel\`, whose layout
animates a single line of text.`,name:"label",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!1,type:{name:"number | undefined"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"number | undefined"}},clamp:{defaultValue:null,description:"When `true` (default) a value outside `minValue`/`maxValue` is brought\ninto range on mount, when it changes and on blur, and `onChange` receives\nthe clamped number. When `false` the entered value is kept and the input\nis marked invalid while it is out of range, unless `invalid` is set.",name:"clamp",required:!1,type:{name:"boolean | undefined"}},currencyCode:{defaultValue:null,description:"",name:"currencyCode",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: number | undefined) => void) | undefined"}}}}}catch{}function j(i){return function(s){const{value:a,onChange:c,...g}=s,[d,u]=l.useState(a);return h.jsxs(qe,{children:[i&&h.jsx("style",{children:i}),h.jsx(F,{...g,value:d,onChange:m=>{u(m),c&&c(m)}})]})}}const Je={title:"Design System/Components/Input Currency",component:F,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},label:{control:"text",description:"Accepts any ReactNode. A text label doubles as the accessible name; a richer one needs an explicit aria-label.",table:{category:"Content",type:{summary:"ReactNode"}}},placeholder:{control:"text",type:"string",table:{category:"Content"}},value:{control:!1,type:"number",description:"The value of the input",table:{category:"Content"}},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"],table:{category:"Appearance"}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...z],table:{category:"Icon"}},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...z],table:{category:"Icon"}},iconStartAriaLabel:{control:"text",type:"string",table:{category:"Content"}},iconEndAriaLabel:{control:"text",type:"string",table:{category:"Content"}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback",table:{category:"Content"}},currencyCode:{control:"text",type:"string",table:{category:"Content"}},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},minValue:{control:"number",type:"number",table:{category:"Behavior"}},maxValue:{control:"number",type:"number",table:{category:"Behavior"}},clamp:{control:"boolean",type:"boolean",description:"When `true`, a value outside `minValue`/`maxValue` is brought into range (on mount, when it changes and on blur) and `onChange` gets the clamped number. When `false`, the entered value is kept and the input is marked invalid while out of range.",table:{defaultValue:{summary:"true"},category:"Behavior"}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Appearance"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"],render:j()},I={args:{label:"Label",placeholder:"Placeholder",value:void 0,minValue:void 0,maxValue:void 0,readOnly:!1,disabled:!1,loading:!1,invalid:!1,valid:!1,floatingLabel:!1}},L={args:{id:"componentId2",label:"Label",placeholder:"Placeholder",value:void 0,invalid:!0,hint:"Assistive text"}},P={args:{id:"componentId3",label:"Label",placeholder:"Placeholder",value:void 0,valid:!0,hint:"Assistive text"}},$={args:{id:"componentId4",label:"Label",placeholder:"Placeholder",value:void 0,disabled:!0}},E={args:{id:"componentId5",label:"Label",placeholder:"Placeholder",value:void 0,currencyCode:"CLP"}},q={parameters:{docs:{description:{story:"The component can receive a min and max value to limit the input value. This example shows the component with a min value of <strong>$0.00</strong> and a max value of <strong>$10,000.00</strong>."}}},args:{id:"componentId6",label:"Label",placeholder:"Placeholder",value:void 0,minValue:0,maxValue:1e4}},w={parameters:{docs:{description:{story:"With `clamp={false}` the bounds validate instead of rewriting the amount: an amount above the limit (for example, one preloaded from a QR code) is kept, the input is marked invalid and the consumer can explain why with `hint`."}}},render:function(r){const[s,a]=l.useState(5e6),c=s!==void 0&&s>3e6;return h.jsx(F,{...r,value:s,onChange:a,hint:c?"The transfer limit is $3,000,000.00":void 0})},args:{id:"transferAmount",label:"Amount to transfer",minValue:0,maxValue:3e6,clamp:!1}},D={args:{id:"componentId7",label:"Label",placeholder:"Placeholder",value:void 0,floatingLabel:!0}},A={args:{id:"componentId7",label:"Label",placeholder:"Placeholder",value:void 0,minValue:0,maxValue:1e5,iconEnd:"Search",className:"d-input-currency-icon-color-demo"},parameters:{docs:{description:{story:`
Changes the color of the \`iconEnd\` icon using \`className\` to scope the
\`--${e}icon-component-color\` CSS variable, without affecting the currency symbol color.

\`\`\`css
.d-input-currency-icon-color-demo .d-icon {
  --${e}icon-component-color: #dc3545;
}
\`\`\`
        `}}},render:j(`
    .d-input-currency-icon-color-demo .d-icon {
      --${e}icon-component-color: #dc3545;
    }
  `)},N={args:{id:"componentId8",label:"Label",placeholder:"Placeholder",value:void 0,minValue:0,maxValue:1e5,className:"d-input-currency-symbol-color-demo"},parameters:{docs:{description:{story:`
Changes the currency symbol color using \`className\` to scope the
\`--${e}input-currency-component-symbol-color\` CSS variable.

\`\`\`css
.d-input-currency-symbol-color-demo {
  --${e}input-currency-component-symbol-color: #dc3545;
}
\`\`\`
        `}}},render:j(`
    .d-input-currency-symbol-color-demo {
      --${e}input-currency-component-symbol-color: #dc3545;
    }
  `)},R={args:{id:"componentId9",label:"Label",placeholder:"Placeholder",value:void 0,inputStart:null},parameters:{docs:{description:{story:"\nBy default `DInputCurrency` renders the currency symbol via `inputStart`. Passing\n`inputStart={null}` removes it, showing the input without any leading symbol.\n\n```jsx\n<DInputCurrency inputStart={null} />\n```\n        "}}}};var H,Q,U;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var G,J,K;L.parameters={...L.parameters,docs:{...(G=L.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    invalid: true,
    hint: 'Assistive text'
  }
}`,...(K=(J=L.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,Z,ee;P.parameters={...P.parameters,docs:{...(Y=P.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    valid: true,
    hint: 'Assistive text'
  }
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ae;$.parameters={...$.parameters,docs:{...(ne=$.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    disabled: true
  }
}`,...(ae=(te=$.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,re,le;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    currencyCode: 'CLP'
  }
}`,...(le=(re=E.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ie,se,ce;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(se=q.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var de,ue,pe;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'With \`clamp={false}\` the bounds validate instead of rewriting the amount: an amount above the limit (for example, one preloaded from a QR code) is kept, the input is marked invalid and the consumer can explain why with \`hint\`.'
      }
    }
  },
  render: function Render(args) {
    const [amount, setAmount] = useState<number | undefined>(5000000);
    const overLimit = amount !== undefined && amount > 3000000;
    return <DInputCurrency {...args} value={amount} onChange={setAmount} hint={overLimit ? 'The transfer limit is $3,000,000.00' : undefined} />;
  },
  args: {
    id: 'transferAmount',
    label: 'Amount to transfer',
    minValue: 0,
    maxValue: 3000000,
    clamp: false
  }
}`,...(pe=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,fe,ye;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    floatingLabel: true
  }
}`,...(ye=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var be,he,ge;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ge=(he=A.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,Se,xe;N.parameters={...N.parameters,docs:{...(ve=N.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var Ce,Ve,Ie;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ie=(Ve=R.parameters)==null?void 0:Ve.docs)==null?void 0:Ie.source}}};const Ke=["Default","Invalid","Valid","Disabled","WithCurrencyCode","WithRangeMinMax","ValidateWithoutClamp","Floating","WithIconColor","WithSymbolColor","WithoutSymbol"];export{I as Default,$ as Disabled,D as Floating,L as Invalid,P as Valid,w as ValidateWithoutClamp,E as WithCurrencyCode,A as WithIconColor,q as WithRangeMinMax,N as WithSymbolColor,R as WithoutSymbol,Ke as __namedExportsOrder,Je as default};
