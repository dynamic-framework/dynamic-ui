import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./config-C3iYXcFk.js";import{D as i}from"./DIcon-BaYjXWaB.js";import{T as ye,I as he,a as S}from"./constants-CkChkWbF.js";import{F as n}from"./DInput-CimCsfpA.js";import{D as s}from"./DContext-aUrSpq0p.js";import"./index-nyyuC_Uj.js";import"./iframe-vLNjGVop.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-56XFbS_3.js";import"./useProvidedRefOrCreate-8yhSHKFF.js";import"./index-DFPG5GmN.js";import"./index-oOcxeWdd.js";const ve={NMChevron:t=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",...t,children:e.jsx("path",{d:"m9 18 6-6-6-6"})}),NMSmile:t=>e.jsx("svg",{viewBox:"0 0 70 70",enableBackground:"new 0 0 70 70",xmlSpace:"preserve",fill:"currentColor",...t,children:e.jsxs("g",{children:[e.jsx("path",{d:`M35,3C17.355,3,3,17.355,3,35s14.355,32,32,32s32-14.355,32-32S52.645,3,35,3z M35,63C19.535,63,7,50.465,7,35
          S19.535,7,35,7s28,12.535,28,28S50.465,63,35,63z`}),e.jsx("path",{d:`M47.882,46.192c-0.462-0.302-1.081-0.177-1.386,0.284c-2.576,3.905-6.903,6.237-11.576,6.237
          c-4.935,0-9.535-2.656-12.007-6.933c-0.277-0.479-0.891-0.643-1.366-0.366c-0.479,0.276-0.643,0.889-0.366,1.366
          c2.828,4.894,8.093,7.933,13.739,7.933c5.347,0,10.299-2.668,13.246-7.136C48.47,47.117,48.343,46.497,47.882,46.192z`}),e.jsx("path",{d:`M27.433,35.551c0.196,0.253,0.491,0.385,0.789,0.385c0.215,0,0.432-0.069,0.614-0.212c0.436-0.339,0.513-0.968,0.173-1.403
          l-4.839-6.205c-0.185-0.237-0.468-0.379-0.769-0.385c-0.311-0.005-0.59,0.125-0.783,0.354l-4.715,5.584
          c-0.356,0.422-0.304,1.054,0.118,1.409c0.425,0.358,1.054,0.301,1.409-0.118l3.92-4.643L27.433,35.551z`}),e.jsx("path",{d:`M46.882,28.085c-0.194-0.229-0.5-0.357-0.783-0.354c-0.301,0.006-0.584,0.147-0.769,0.385l-4.839,6.205
          c-0.34,0.436-0.263,1.064,0.173,1.403c0.183,0.143,0.399,0.212,0.614,0.212c0.298,0,0.593-0.132,0.789-0.385l4.082-5.233
          l3.92,4.643c0.354,0.421,0.984,0.478,1.409,0.118c0.422-0.355,0.475-0.987,0.118-1.409L46.882,28.085z`}),e.jsx("path",{d:`M18.663,17.111c-0.391-0.391-1.023-0.391-1.414,0c-0.4,0.4-0.785,0.811-1.152,1.229c-0.365,0.415-0.324,1.047,0.091,1.411
          c0.19,0.167,0.426,0.249,0.66,0.249c0.277,0,0.554-0.115,0.751-0.34c0.34-0.387,0.695-0.766,1.064-1.135
          C19.054,18.135,19.054,17.502,18.663,17.111z`}),e.jsx("path",{d:`M13.483,23.828c-0.5-0.241-1.096-0.029-1.334,0.469c-2.461,5.126-3.184,11.028-2.037,16.621
          c0.097,0.473,0.514,0.799,0.979,0.799c0.066,0,0.134-0.007,0.202-0.021c0.541-0.11,0.89-0.64,0.778-1.181
          c-1.06-5.166-0.392-10.619,1.881-15.354C14.191,24.664,13.981,24.067,13.483,23.828z`}),e.jsx("path",{d:"M36.573,55.583h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S37.126,55.583,36.573,55.583z"})]})})},Ne={title:"Design System/Components/Icon",component:i,parameters:{docs:{description:{component:`
Icon component powered by [Lucide Icons](https://lucide.dev).

Lucide provides a comprehensive set of beautiful, consistent icons with excellent React integration.
The component also maintains backward compatibility with Material Design icons.

## Features

- **Lucide Icons**: Modern, consistent icon library with 1000+ icons
- **Material Design Support**: Full backward compatibility via \`materialStyle\` prop
- **Custom Registry Support**: Plug in shared icon maps through \`iconRegistry\` in \`DContextProvider\`
- **Customizable**: Control size, color, stroke width
- **Accessible**: Built with accessibility in mind
- **TypeScript**: Full type safety

## Custom iconRegistry

You can provide a custom icon map from a shared commons package:

\`\`\`tsx
import { DContextProvider, DIcon } from '@dynamic-framework/ui-react';
import { NMIcons } from '@repo/algo';

<DContextProvider iconRegistry={NMIcons}>
  <DIcon icon="NMChevron" />
</DContextProvider>
\`\`\`

Resolution order:

1. If \`icon\` is an SVG component, it is rendered directly.
2. If \`icon\` is a string and exists in \`iconRegistry\`, it uses the registry component.
3. Otherwise, fallback applies (Lucide / Material / font classes).

## Classnames

| Classname | Purpose | Applied when |
|---|---|---|
| \`.d-icon\` | Base icon container | Always |
| \`.d-icon-has-circle\` | Enables circle background and default opacity variable \`--${r}icon-component-bg-opacity\` | \`hasCircle\` prop |
| \`.d-icon-color-{theme}\` | Sets icon color and circle bg based on theme (primary, success, info, warning, danger, etc.) | \`color\` prop |

## CSS Variables

| Variable                             | Class                | Type            | Description                                    |
|--------------------------------------|----------------------|-----------------|------------------------------------------------|
| --${r}icon-component-size    | .d-icon              | css length unit | Icon size                                       |
| --${r}icon-component-padding | .d-icon              | css length unit | Padding for circle background                   |
| --${r}icon-component-color   | .d-icon/.d-icon-color-* | css color unit  | Icon color (set via class)                      |
| --${r}icon-component-bg-color | .d-icon/.d-icon-has-circle | css color unit  | Circle background color (set via class)         |
| --${r}icon-component-bg-opacity | .d-icon-has-circle | number          | Opacity used in circle bg (default \`.1\`)     |

> Color and circle background are controlled through classnames; variables above are resolved by those classes.

## Finding Icons

Browse all available Lucide icons at: [https://lucide.dev/icons/](https://lucide.dev/icons/)

Icon names use **PascalCase** (e.g., \`Home\`, \`Settings\`, \`User\`)

## Migration Guide

See [ICON_MIGRATION_GUIDE.md](/?path=/docs/icon-migration-guide) for migrating from Bootstrap Icons.
        `},controls:{exclude:["familyClass","familyPrefix","dataAttributes","materialStyle"]}}},argTypes:{className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},icon:{control:"select",options:["Map",...he],type:{name:"string",required:!0},description:"Icon name in PascalCase (e.g., Home, Settings, User)",table:{category:"Content"}},color:{control:"select",options:[void 0,...ye],type:"string",description:"Color of the icon (theme-based)",table:{category:"Appearance"}},strokeWidth:{type:"number",control:"number",description:"Stroke width of the icon (Lucide only)",table:{defaultValue:{summary:"2"},category:"Appearance"}},hasCircle:{type:"boolean",control:"boolean",description:"Add circle background around the icon",table:{defaultValue:{summary:"false"},category:"Appearance"}},materialStyle:{type:"boolean",control:"boolean",description:"Use Material Design icons instead of Lucide",table:{defaultValue:{summary:"false"},category:"Icon"}},familyClass:{type:"string",description:"Icon font family class (for Material Design or custom icon sets)",table:{defaultValue:{summary:"material-symbols-outlined"},category:"Icon"}}},tags:["autodocs"]},l={args:{icon:"Map",size:"120px",hasCircle:!1,className:"",strokeWidth:2}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Home",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Home"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Settings",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Settings"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"User",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"User"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Mail",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Mail"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Bell",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Bell"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Search",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Search"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Calendar",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Calendar"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Heart"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Star",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Star"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Download",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Download"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Upload",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Upload"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Trash2",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Trash2"})]})]}),parameters:{docs:{description:{story:"Most commonly used Lucide icons. Browse all icons at https://lucide.dev/icons/"}}}},d={render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:ye.map(t=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"CircleCheck",size:"24px",color:t}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:t})]},t))}),parameters:{docs:{description:{story:"Icons with different theme colors."}}}},x={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(i,{icon:"Check",color:"success",hasCircle:!0}),e.jsx(i,{icon:"X",color:"danger",hasCircle:!0}),e.jsx(i,{icon:"Info",color:"info",hasCircle:!0}),e.jsx(i,{icon:"AlertTriangle",color:"warning",hasCircle:!0}),e.jsx(i,{icon:"HelpCircle",color:"primary",hasCircle:!0})]}),parameters:{docs:{description:{story:"Icons with circular backgrounds."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:1}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Thin (1)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:1.5}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Light (1.5)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:2}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Regular (2)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:2.5}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Medium (2.5)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:3}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Bold (3)"})]})]}),parameters:{docs:{description:{story:"Control the stroke width of Lucide icons."}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(i,{icon:"Sparkles",size:"24px"}),e.jsx(i,{icon:"Sparkles",size:"32px"}),e.jsx(i,{icon:"Sparkles",size:"48px"}),e.jsx(i,{icon:"Sparkles",size:"64px"}),e.jsx(i,{icon:"Sparkles",size:"96px"})]}),parameters:{docs:{description:{story:"Icons in different sizes."}}}},y={parameters:{docs:{description:{story:"The size property with breakpoints does not work outside of a DContextProvider."}}},decorators:t=>e.jsx(s,{children:e.jsx(t,{})}),args:{icon:"Settings",size:{xs:"8",sm:"16",md:"32",lg:"64",xl:"128",xxl:"256"},useListenerSize:!0,hasCircle:!1,strokeWidth:2}},o={render:t=>e.jsx(s,{...S,children:e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"home",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"home"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"settings",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"settings"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"person",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"person"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"mail",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"mail"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"notifications",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"notifications"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"favorite",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"favorite"})]})]})}),parameters:{docs:{description:{story:"Material Design icons are still supported for backward compatibility. Use `materialStyle` prop or configure via DContextProvider."}}}},v={render:t=>e.jsx(s,{...S,children:e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"home",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"home"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"settings",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"settings"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"person",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"person"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"mail",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"mail"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"notifications",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"notifications"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"favorite",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"favorite"})]})]})}),parameters:{docs:{description:{story:"Material Design icons are still supported for backward compatibility. Use `materialStyle` prop or configure via DContextProvider."}}}},c={render:t=>e.jsx(s,{...S,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(n,{iconStart:"alternate_email",iconEnd:"cached",placeholder:"Email address"}),e.jsx(n,{iconStart:"lock",iconEnd:"visibility",type:"password",placeholder:"Password"})]})}),parameters:{docs:{description:{story:"Material Design icons integrated with other components."}}}},a={render:()=>e.jsx(s,{icon:{familyClass:"bi",familyPrefix:"bi-",materialStyle:!1},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(n,{iconStart:"at",iconEnd:"arrow-repeat",placeholder:"Email address"}),e.jsx(n,{iconStart:"lock",iconEnd:"eye",type:"password",placeholder:"Password"})]})})},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"32px",className:"text-pink-500"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"text-pink-500"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Sparkles",size:"32px",className:"text-purple-500"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"text-purple-500"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Star",size:"32px",hasCircle:!0,className:"bg-pink-500 text-white"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"bg-pink-500 text-white"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Bolt",size:"32px",hasCircle:!0,className:"bg-purple-500 text-white"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"bg-purple-500 text-white"})]})]}),parameters:{docs:{description:{story:"Examples using custom utility classes (e.g., text-pink-500, bg-pink-500). Colors depend on your CSS utility setup."}}}},f={render:()=>e.jsx(s,{iconRegistry:ve,children:e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"NMChevron",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"NMChevron (registry)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"NMSmile",size:"24px",color:"success",hasCircle:!0}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"NMSmile (registry)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Home",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Home (Lucide fallback)"})]})]})}),parameters:{docs:{description:{story:"Uses `iconRegistry` to resolve string icon names from a shared commons map. Unknown registry names keep using the default fallback (Lucide/Material/font)."}}}},u={render:()=>e.jsx(s,{iconRegistry:ve,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"420px"},children:[e.jsx(n,{label:"Input with iconStart/iconEnd from registry",iconStart:"NMChevron",iconEnd:"NMSmile",placeholder:"Search or type",hint:"Custom icons are resolved by name through iconRegistry"}),e.jsx(n,{label:"Mixed fallback",iconStart:"NMChevron",iconEnd:"Search",placeholder:"Registry + Lucide fallback",hint:"iconStart comes from registry and iconEnd uses Lucide"})]})}),parameters:{docs:{description:{story:"Shows that `iconRegistry` also applies in components like `DInput` for `iconStart` and `iconEnd`."}}}};var z,j,C;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: 'Map',
    size: '120px',
    hasCircle: false,
    className: '',
    strokeWidth: 2
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var I,D,T;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Home" size="24px" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Home</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Settings" size="24px" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Settings</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="User" size="24px" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>User</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Mail" size="24px" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Mail</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Bell" size="24px" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Bell</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Search" size="24px" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Search</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Calendar" size="24px" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Calendar</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Heart" size="24px" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Heart</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Star" size="24px" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Star</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Download" size="24px" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Download</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Upload" size="24px" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Upload</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Trash2" size="24px" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Trash2</div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Most commonly used Lucide icons. Browse all icons at https://lucide.dev/icons/'
      }
    }
  }
}`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var b,A,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      {THEMES.map(theme => <div key={theme} style={{
      textAlign: 'center'
    }}>
          <DIcon icon="CircleCheck" size="24px" color={theme} />
          <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>{theme}</div>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Icons with different theme colors.'
      }
    }
  }
}`,...(k=(A=d.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var w,M,N;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <DIcon icon="Check" color="success" hasCircle />
      <DIcon icon="X" color="danger" hasCircle />
      <DIcon icon="Info" color="info" hasCircle />
      <DIcon icon="AlertTriangle" color="warning" hasCircle />
      <DIcon icon="HelpCircle" color="primary" hasCircle />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Icons with circular backgrounds.'
      }
    }
  }
}`,...(N=(M=x.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var P,W,E;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Heart" size="24px" strokeWidth={1} />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Thin (1)</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Heart" size="24px" strokeWidth={1.5} />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Light (1.5)</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Heart" size="24px" strokeWidth={2} />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Regular (2)</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Heart" size="24px" strokeWidth={2.5} />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Medium (2.5)</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Heart" size="24px" strokeWidth={3} />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Bold (3)</div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Control the stroke width of Lucide icons.'
      }
    }
  }
}`,...(E=(W=m.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var R,L,H;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <DIcon icon="Sparkles" size="24px" />
      <DIcon icon="Sparkles" size="32px" />
      <DIcon icon="Sparkles" size="48px" />
      <DIcon icon="Sparkles" size="64px" />
      <DIcon icon="Sparkles" size="96px" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Icons in different sizes.'
      }
    }
  }
}`,...(H=(L=g.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var O,_,B;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The size property with breakpoints does not work outside of a DContextProvider.'
      }
    }
  },
  decorators: Story => <DContextProvider>
      <Story />
    </DContextProvider>,
  args: {
    icon: 'Settings',
    size: {
      xs: '8',
      sm: '16',
      md: '32',
      lg: '64',
      xl: '128',
      xxl: '256'
    },
    useListenerSize: true,
    hasCircle: false,
    strokeWidth: 2
  }
}`,...(B=(_=y.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var U,V,F,G,X;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DIcon>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <div style={{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon icon="home" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>home</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon icon="settings" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>settings</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon icon="person" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>person</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon icon="mail" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>mail</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon icon="notifications" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>notifications</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon icon="favorite" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>favorite</div>
        </div>
      </div>
    </DContextProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Material Design icons are still supported for backward compatibility. Use \`materialStyle\` prop or configure via DContextProvider.'
      }
    }
  }
}`,...(F=(V=o.parameters)==null?void 0:V.docs)==null?void 0:F.source},description:{story:"To use icons with Material Symbols style configuration use the `materialStyle` prop\nor configure globally via `DContextProvider`",...(X=(G=o.parameters)==null?void 0:G.docs)==null?void 0:X.description}}};var $,q,Y;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DIcon>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <div style={{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon hasCircle icon="home" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>home</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon hasCircle icon="settings" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>settings</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon hasCircle icon="person" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>person</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon hasCircle icon="mail" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>mail</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon hasCircle icon="notifications" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>notifications</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon hasCircle icon="favorite" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>favorite</div>
        </div>
      </div>
    </DContextProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Material Design icons are still supported for backward compatibility. Use \`materialStyle\` prop or configure via DContextProvider.'
      }
    }
  }
}`,...(Y=(q=v.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var J,K,Q,Z,ee;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInput>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <DInput iconStart="alternate_email" iconEnd="cached" placeholder="Email address" />
        <DInput iconStart="lock" iconEnd="visibility" type="password" placeholder="Password" />
      </div>
    </DContextProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Material Design icons integrated with other components.'
      }
    }
  }
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Material Design icons can be used with any component that accepts icons",...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ie,te,se,re,ne;a.parameters={...a.parameters,docs:{...(ie=a.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <DContextProvider icon={{
    familyClass: 'bi',
    familyPrefix: 'bi-',
    materialStyle: false
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <DInput iconStart="at" iconEnd="arrow-repeat" placeholder="Email address" />
        <DInput iconStart="lock" iconEnd="eye" type="password" placeholder="Password" />
      </div>
    </DContextProvider>
}`,...(se=(te=a.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"Bootstrap icons style integrated with other components.",...(ne=(re=a.parameters)==null?void 0:re.docs)==null?void 0:ne.description}}};var oe,ce,ae;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Heart" size="32px" className="text-pink-500" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>text-pink-500</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Sparkles" size="32px" className="text-purple-500" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>text-purple-500</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Star" size="32px" hasCircle className="bg-pink-500 text-white" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>bg-pink-500 text-white</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <DIcon icon="Bolt" size="32px" hasCircle className="bg-purple-500 text-white" />
        <div style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>bg-purple-500 text-white</div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples using custom utility classes (e.g., text-pink-500, bg-pink-500). Colors depend on your CSS utility setup.'
      }
    }
  }
}`,...(ae=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var le,pe,de;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <DContextProvider iconRegistry={COMMONS_ICONS}>
      <div style={{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon icon="NMChevron" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>NMChevron (registry)</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon icon="NMSmile" size="24px" color="success" hasCircle />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>NMSmile (registry)</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <DIcon icon="Home" size="24px" />
          <div style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>Home (Lucide fallback)</div>
        </div>
      </div>
    </DContextProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Uses \`iconRegistry\` to resolve string icon names from a shared commons map. Unknown registry names keep using the default fallback (Lucide/Material/font).'
      }
    }
  }
}`,...(de=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var xe,me,ge;u.parameters={...u.parameters,docs:{...(xe=u.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <DContextProvider iconRegistry={COMMONS_ICONS}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '420px'
    }}>
        <DInput label="Input with iconStart/iconEnd from registry" iconStart="NMChevron" iconEnd="NMSmile" placeholder="Search or type" hint="Custom icons are resolved by name through iconRegistry" />

        <DInput label="Mixed fallback" iconStart="NMChevron" iconEnd="Search" placeholder="Registry + Lucide fallback" hint="iconStart comes from registry and iconEnd uses Lucide" />
      </div>
    </DContextProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Shows that \`iconRegistry\` also applies in components like \`DInput\` for \`iconStart\` and \`iconEnd\`.'
      }
    }
  }
}`,...(ge=(me=u.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};const Pe=["Default","CommonIcons","WithColors","WithCircle","StrokeWidthVariants","Sizes","WithResponsiveSizes","MaterialDesignIcons","MaterialDesignIconsWithCircle","MaterialDesignInComponents","BootstrapIconsStyle","CustomColorClasses","CustomIconRegistry","CustomIconRegistryInInputs"];export{a as BootstrapIconsStyle,p as CommonIcons,h as CustomColorClasses,f as CustomIconRegistry,u as CustomIconRegistryInInputs,l as Default,o as MaterialDesignIcons,v as MaterialDesignIconsWithCircle,c as MaterialDesignInComponents,g as Sizes,m as StrokeWidthVariants,x as WithCircle,d as WithColors,y as WithResponsiveSizes,Pe as __namedExportsOrder,Ne as default};
