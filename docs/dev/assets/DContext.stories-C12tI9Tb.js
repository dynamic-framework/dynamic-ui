import{a as I}from"./constants-CyI_OqvZ.js";import{D as O}from"./DContext-BoMWiJYr.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CtxmvoPJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYSVb1I-.js";import"./index-U9OetZfw.js";import"./config-C3iYXcFk.js";const A={title:"Design System/Components/Context Provider",component:O,tags:["autodocs"],parameters:{docs:{description:{component:"Context Provider to share settings between components"}}}},e={parameters:{docs:{canvas:{sourceState:"shown"}}}},n={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{language:"en"}},a={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{currency:{symbol:"$",precision:2,separator:",",decimal:"."}}},s={parameters:{docs:{canvas:{sourceState:"shown"}}},args:I};var t,r,o,c,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source},description:{story:`Without arguments, it will take the default settings for:
+ English language
+ Lucide icons
+ Currencies with $1,000.00 format
+ Default portal DOM id`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.description}}};var d,p,m,u,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:`To share a different language configuration we only need to change the key language

> This key only takes a string with the language in ISO 639 Set 1 (ISO 639-1)`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.description}}};var g,h,y,f,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
particularly we use the key precision, separator, decimal and not in all cases symbol.`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};var w,b,T,v,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  args: CONTEXT_PROVIDER_CONFIG_MATERIAL
}`,...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source},description:{story:`By default and without additional configuration, the icons are linked to <code>Lucide icons</code>.

To share a different icon configuration we need to change the key icon

This takes the settings needed to use bootstrap icons, which would
be \`familyClass=bi\`, \`familyPrefix=bi-\` and \`materialStyle=false\`

Similar settings can be used for any icon font.

In the particular case of material symbols, the materialStyle property was added
to place the name of the icon in the children of \`<i />\` and not as a class.
This setting can be used with any icon font that uses a similar style.

See more about this in <a href="?path=/docs/design-system-examples-icons--docs">Examples/Icons</a>`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.description}}};const N=["Default","LanguageSettings","CurrencySettings","IconSettings"];export{a as CurrencySettings,e as Default,s as IconSettings,n as LanguageSettings,N as __namedExportsOrder,A as default};
