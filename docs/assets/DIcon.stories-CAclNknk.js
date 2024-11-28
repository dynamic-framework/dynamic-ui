import{j as e}from"./jsx-runtime-DQ32znRX.js";import{D as p}from"./DIcon-CDY5yPx9.js";import{I as V,d as A,F,a as l}from"./constants-DhWTmuJQ.js";import{P as o,I as k,a as L}from"./config-CUZHf55T.js";import{E as $,D as X}from"./useToastExamples-CSJSpclm.js";import{F as W}from"./DInput-CpmK98WL.js";import{D as d}from"./DContext-9gKMeQXa.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-mLFX9G4A.js";import"./DToast-jX7A3oAx.js";import"./DButton-B0qfYJ_X.js";import"./useProvidedRefOrCreate-DxC68qIt.js";import"./index-D9uilScg.js";const re={title:"Design System/Components/Icon",component:p,parameters:{docs:{description:{component:`
Wrapper Component around [Bootstrap Icons.](https://icons.getbootstrap.com/)

To use the DIcon you need to add the icon suite CSS to your site, we recommend adding this CSS in the platform but you can add it in the index.html of the widget as well.

## CSS Variables

| Variable                            | Class   | Type            | Description                           |
|-------------------------------------|---------|-----------------|---------------------------------------|
| --${o}icon-color            | .d-icon | css color unit  | The icon color                        |
| --${o}icon-bg-color         | .d-icon | css color unit  | The icon background color             |
| --${o}icon-size             | .d-icon | css length unit | The size of icon                      |
| --${o}icon-padding          | .d-icon | css length unit | The padding to make icon circle       |
| --${o}icon-loading-duration | .d-icon | number          | The duration of the loading animation |

> The colors can ref another css var like a var(--${o}primary)

## Fonts with material symbols style configuration

By default the DIcon is configured to use icon fonts that define the icon from a class, icon fonts that work in the material symbols style define the name of the icon in the content of the tag.

To work with libraries that use this style, there is the materialStyle flag. By setting it to true, the icon is selected by placing its name in the content of the tag, and not, using the name and the familyClass to generate a class.

### Normal icon font render:
\`\`\`
<i class="bi bi-123" />
\`\`\`

### Material Symbols icon font render:
\`\`\`
<i class="material-symbols-outlined">rebase</i>
\`\`\`
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},icon:{control:"select",type:{name:"string",required:!0},options:V,description:"Name of icon to use (in kebab-case)"},theme:{control:{type:"select",labels:{undefined:"empty"}},options:A,type:"string",description:"Theme of the icon"},size:{type:"string",control:"text",description:"Size of the icon in css length unit",table:{defaultValue:{summary:"1rem"}}},loading:{control:"boolean",table:{defaultValue:{summary:"false"}},type:"boolean",description:"Enable loading animation"},loadingDuration:{type:"number",control:"number",description:"Loading animation duration, in seconds",table:{defaultValue:{summary:"1.8"}}},hasCircle:{type:"boolean",control:"boolean",description:"Add circle around the icon",table:{defaultValue:{summary:"false"}}},materialStyle:{type:"boolean",control:"boolean",description:"To use material style icons",table:{defaultValue:{summary:"false"}}},circleSize:{type:"string",control:"text",description:"Circle size in css length unit",table:{defaultValue:{summary:`calc(var(--${o}icon-component-size) * 2)`}}},color:{type:"string",description:"Icon color in css color unit or var",control:"color"},backgroundColor:{type:"string",description:"Icon background color in css color unit or var",control:"color"},familyClass:{type:"string",description:"Change the family prefix to use another icon suite",table:{defaultValue:{summary:k}}},familyPrefix:{type:"string",description:"Change the family class to use another icon suite",table:{defaultValue:{summary:L}}}},tags:["autodocs"]},s={args:{icon:F,size:"120px",hasCircle:!1}},i={args:{icon:F,size:"120px",hasCircle:!0,circleSize:`calc(var(--${o}icon-component-size) * 1)`}},n={render:t=>e.jsx(d,{...l,children:e.jsx(p,{...t})}),args:{icon:"rebase",size:"120px"},argTypes:{icon:{control:"text",type:"string",description:"Material style icon"}},parameters:{docs:{canvas:{sourceState:"shown"}}}},r={render:t=>e.jsx(d,{...l,children:e.jsx(p,{...t})}),args:{icon:"rebase",size:"120px",hasCircle:!0},argTypes:{icon:{control:"text",type:"string",description:"Material style icon"}},parameters:{docs:{canvas:{sourceState:"shown"}}}},a={render:t=>e.jsx(d,{...l,children:e.jsx(W,{...t})}),args:{iconStart:"alternate_email",iconEnd:"cached"},parameters:{docs:{canvas:{sourceState:"shown"}}}},c={decorators:[t=>e.jsx("div",{className:"d-flex flex-column justify-content-end",style:{width:"320px",height:"210px"},children:e.jsx(t,{})})],render:t=>e.jsxs(d,{...l,children:[e.jsx($,{}),e.jsx(X,{position:"top-right"},"material-icon-toast-container")]}),args:{},parameters:{docs:{canvas:{sourceState:"shown"}}}};var m,u,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: FIRST_ICON,
    size: '120px',
    hasCircle: false
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: FIRST_ICON,
    size: '120px',
    hasCircle: true,
    circleSize: \`calc(var(--\${PREFIX_BS}icon-component-size) * 1)\`
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var C,I,x,S,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DIcon>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DIcon {...args} />
    </DContextProvider>,
  args: {
    icon: 'rebase',
    size: '120px'
  },
  argTypes: {
    icon: {
      control: 'text',
      type: 'string',
      description: 'Material style icon'
    }
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(x=(I=n.parameters)==null?void 0:I.docs)==null?void 0:x.source},description:{story:"To use icons with Material Symbols style configuration it is necessary to use a\n`DContextProvide` with ``familyClass`` and the flag `materialStyle=true`",...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.description}}};var T,D,_,v,E;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DIcon>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DIcon {...args} />
    </DContextProvider>,
  args: {
    icon: 'rebase',
    size: '120px',
    hasCircle: true
  },
  argTypes: {
    icon: {
      control: 'text',
      type: 'string',
      description: 'Material style icon'
    }
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(_=(D=r.parameters)==null?void 0:D.docs)==null?void 0:_.source},description:{story:"To use icons with Material Symbols style configuration it is necessary to use a\n`DContextProvide` with `familyClass` and the flag `materialStyle=true`",...(E=(v=r.parameters)==null?void 0:v.docs)==null?void 0:E.description}}};var P,M,w,O,R;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInput>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DInput {...args} />
    </DContextProvider>,
  args: {
    iconStart: 'alternate_email',
    iconEnd: 'cached'
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(w=(M=a.parameters)==null?void 0:M.docs)==null?void 0:w.source},description:{story:"The `DContextProvider` configuration can be used in conjunction with any other\ncomponent that uses `DIcon`",...(R=(O=a.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var N,z,j;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [Story => <div className="d-flex flex-column justify-content-end" style={{
    width: '320px',
    height: '210px'
  }}>
        <Story />
      </div>],
  render: (_args: ComponentProps<typeof DInput>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <ExampleMaterialIconToastUsage />
      <DToastContainer key="material-icon-toast-container" position="top-right" />
    </DContextProvider>,
  args: {},
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(j=(z=c.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const ae=["Default","Circle","MaterialStyle","MaterialStyleHasCircle","InputWithMaterialIcons","ToastWithMaterialIcons"];export{i as Circle,s as Default,a as InputWithMaterialIcons,n as MaterialStyle,r as MaterialStyleHasCircle,c as ToastWithMaterialIcons,ae as __namedExportsOrder,re as default};
