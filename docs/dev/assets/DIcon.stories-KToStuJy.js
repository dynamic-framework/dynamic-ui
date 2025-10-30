import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as d}from"./DIcon-BtjKyMWG.js";import{d as V,I as A,F,a as l}from"./constants-Bqs03lsf.js";import{I as L,a as $,P as t}from"./config-BV4l-vIF.js";import{E as X}from"./useToastExamples-Y_5JJFvC.js";import{F as k}from"./DInput-D8D_BD8e.js";import{D as W}from"./useDToast-BrMx-tXS.js";import{D as p}from"./DContext-Dm_WebLV.js";import"./iframe-XnRhdyHW.js";import"./index-D0sKC-UO.js";import"./DButton-DLoc9Exd.js";import"./useProvidedRefOrCreate-DwhWJTgz.js";import"./DToast-CgdM3OM7.js";import"./index-CQ6hCEsd.js";import"./index-CucmxpGD.js";const ae={title:"Design System/Components/Icon",component:d,parameters:{docs:{description:{component:`
Wrapper Component around [Bootstrap Icons.](https://icons.getbootstrap.com/)

To use the DIcon you need to add the icon suite CSS to your site, we recommend adding this CSS in the platform but you can add it in the index.html of the widget as well.

## CSS Variables

| Variable                            | Class   | Type            | Description                           |
|-------------------------------------|---------|-----------------|---------------------------------------|
| --${t}icon-color            | .d-icon | css color unit  | The icon color                        |
| --${t}icon-bg-color         | .d-icon | css color unit  | The icon background color             |
| --${t}icon-size             | .d-icon | css length unit | The size of icon                      |
| --${t}icon-padding          | .d-icon | css length unit | The padding to make icon circle       |
| --${t}icon-loading-duration | .d-icon | number          | The duration of the loading animation |

> The colors can ref another css var like a var(--${t}primary)

To see how to use this component with another family of icons, see [icon examples](/docs/design-system-examples-icons--docs)
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},icon:{control:"select",type:{name:"string",required:!0},options:A,description:"Name of icon to use (in kebab-case)"},theme:{control:{type:"select",labels:{undefined:"empty"}},options:V,type:"string",description:"Theme of the icon"},size:{type:"string",control:"text",description:"Size of the icon in css length unit",table:{defaultValue:{summary:"1rem"}}},loading:{control:"boolean",table:{defaultValue:{summary:"false"}},type:"boolean",description:"Enable loading animation"},loadingDuration:{type:"number",control:"number",description:"Loading animation duration, in seconds",table:{defaultValue:{summary:"1.8"}}},hasCircle:{type:"boolean",control:"boolean",description:"Add circle around the icon",table:{defaultValue:{summary:"false"}}},materialStyle:{type:"boolean",control:"boolean",description:"To use material style icons",table:{defaultValue:{summary:"false"}}},circleSize:{type:"string",control:"text",description:"Circle size in css length unit",table:{defaultValue:{summary:`calc(var(--${t}icon-component-size) * 2)`}}},color:{type:"string",description:"Icon color in css color unit or var",control:"color"},backgroundColor:{type:"string",description:"Icon background color in css color unit or var",control:"color"},familyClass:{type:"string",description:"Change the family prefix to use another icon suite",table:{defaultValue:{summary:$}}},familyPrefix:{type:"string",description:"Change the family class to use another icon suite",table:{defaultValue:{summary:L}}}},tags:["autodocs"]},s={args:{icon:F,size:"120px",hasCircle:!1}},i={args:{icon:F,size:"120px",hasCircle:!0,circleSize:`calc(var(--${t}icon-component-size) * 1)`}},n={render:o=>e.jsx(p,{...l,children:e.jsx(d,{...o})}),args:{icon:"rebase",size:"120px"},argTypes:{icon:{control:"text",type:"string",description:"Material style icon"}},parameters:{docs:{canvas:{sourceState:"shown"}}}},r={render:o=>e.jsx(p,{...l,children:e.jsx(d,{...o})}),args:{icon:"rebase",size:"120px",hasCircle:!0},argTypes:{icon:{control:"text",type:"string",description:"Material style icon"}},parameters:{docs:{canvas:{sourceState:"shown"}}}},a={render:o=>e.jsx(p,{...l,children:e.jsx(k,{...o})}),args:{iconStart:"alternate_email",iconEnd:"cached"},parameters:{docs:{canvas:{sourceState:"shown"}}}},c={decorators:[o=>e.jsx("div",{className:"d-flex flex-column justify-content-end",style:{width:"320px",height:"210px"},children:e.jsx(o,{})})],render:o=>e.jsxs(p,{...l,children:[e.jsx(X,{}),e.jsx(W,{position:"top-right"},"material-icon-toast-container")]}),args:{},parameters:{docs:{canvas:{sourceState:"shown"}}}};var m,u,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: FIRST_ICON,
    size: '120px',
    hasCircle: false
  }
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,h,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: FIRST_ICON,
    size: '120px',
    hasCircle: true,
    circleSize: \`calc(var(--\${PREFIX_BS}icon-component-size) * 1)\`
  }
}`,...(C=(h=i.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var f,x,I,S,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(x=n.parameters)==null?void 0:x.docs)==null?void 0:I.source},description:{story:"To use icons with Material Symbols style configuration it is necessary to use a\n`DContextProvide` with ``familyClass`` and the flag `materialStyle=true`",...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};var D,b,_,v,E;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(b=r.parameters)==null?void 0:b.docs)==null?void 0:_.source},description:{story:"To use icons with Material Symbols style configuration it is necessary to use a\n`DContextProvide` with `familyClass` and the flag `materialStyle=true`",...(E=(v=r.parameters)==null?void 0:v.docs)==null?void 0:E.description}}};var P,M,O,R,w;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(M=a.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:"The `DContextProvider` configuration can be used in conjunction with any other\ncomponent that uses `DIcon`",...(w=(R=a.parameters)==null?void 0:R.docs)==null?void 0:w.description}}};var N,z,j;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(z=c.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const se=["Default","Circle","MaterialStyle","MaterialStyleHasCircle","InputWithMaterialIcons","ToastWithMaterialIcons"];export{i as Circle,s as Default,a as InputWithMaterialIcons,n as MaterialStyle,r as MaterialStyleHasCircle,c as ToastWithMaterialIcons,se as __namedExportsOrder,ae as default};
