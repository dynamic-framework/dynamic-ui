import{a as v}from"./constants-DhWTmuJQ.js";import{D as O}from"./DContext-CSLUP0I2.js";import"./jsx-runtime-CKrituN3.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";const R={title:"Design System/Components/Context Provider",component:O,tags:["autodocs"],parameters:{docs:{description:{component:"Context Provider to share settings between components"}}}},e={},n={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{language:"en"}},a={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{currency:{symbol:"$",precision:2,separator:",",decimal:"."}}},r={parameters:{docs:{canvas:{sourceState:"shown"}}},args:v};var s,t,o,c,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source},description:{story:`Without arguments, it will take the default settings for:
+ English language
+ Boostrap icons
+ Currencies with $1,000.00 format
+ Default portal DOM id`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.description}}};var p,d,m,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  args: {
    language: 'en'
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:`To share a different language configuration we only need to change the key language

> This key only takes a string with the language in ISO 639 Set 1 (ISO 639-1)`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var l,h,y,f,S;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  args: {
    currency: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.'
    }
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:`To share a different currency format configuration we need to change the key currency

> The configuration for currency format is given by the library [currency.js](https://currency.js.org/),
particularly we use the key precision, separator, decimal and not in all cases symbol.`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};var w,b,T,C,I;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  args: CONTEXT_PROVIDER_CONFIG_MATERIAL
}`,...(T=(b=r.parameters)==null?void 0:b.docs)==null?void 0:T.source},description:{story:`To share a different icon configuration we need to change the key icon

This takes the settings needed to use bootstrap icons, which would
be \`familyClass=bi\`, \`familyPrefix=bi-\` and \`materialStyle=false\`

Similar settings can be used for any icon font.

In the particular case of material symbols, the materialStyle property was added
to place the name of the icon in the children of \`<i />\` and not as a class.
This setting can be used with any icon font that uses a similar style.`,...(I=(C=r.parameters)==null?void 0:C.docs)==null?void 0:I.description}}};const A=["Default","LanguageSettings","CurrencySettings","IconSettings"];export{a as CurrencySettings,e as Default,r as IconSettings,n as LanguageSettings,A as __namedExportsOrder,R as default};
