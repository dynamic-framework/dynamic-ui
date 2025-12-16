import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as s}from"./config-C3iYXcFk.js";import{D as i}from"./DIcon-DhBEANhS.js";import{T as ae,I as ce,a as f}from"./constants-CyI_OqvZ.js";import{F as h}from"./DInput-DQEwp7IB.js";import{D as a}from"./DContext-B1rG_d4c.js";import"./index-FFMNbmyF.js";import"./iframe-i78ACkaW.js";import"./useMediaBreakpointUp-Po7gqFcN.js";import"./useProvidedRefOrCreate-BpJivm8h.js";import"./index-Djwb5CLE.js";import"./index-UiJLRdHU.js";const Se={title:"Design System/Components/Icon",component:i,parameters:{docs:{description:{component:`
Icon component powered by [Lucide Icons](https://lucide.dev).

Lucide provides a comprehensive set of beautiful, consistent icons with excellent React integration.
The component also maintains backward compatibility with Material Design icons.

## Features

- **Lucide Icons**: Modern, consistent icon library with 1000+ icons
- **Material Design Support**: Full backward compatibility via \`materialStyle\` prop
- **Customizable**: Control size, color, stroke width
- **Accessible**: Built with accessibility in mind
- **TypeScript**: Full type safety

## CSS Variables

| Variable                            | Class   | Type            | Description                           |
|-------------------------------------|---------|-----------------|---------------------------------------|
| --${s}icon-component-color  | .d-icon | css color unit  | The icon color                        |
| --${s}icon-component-bg-color | .d-icon | css color unit  | The icon background color (for circles) |
| --${s}icon-component-size   | .d-icon | css length unit | The size of icon                      |
| --${s}icon-component-padding | .d-icon | css length unit | The padding for circle background    |

> The colors can ref another css var like a var(--${s}primary)

## Finding Icons

Browse all available Lucide icons at: [https://lucide.dev/icons/](https://lucide.dev/icons/)

Icon names use **PascalCase** (e.g., \`Home\`, \`Settings\`, \`User\`)

## Migration Guide

See [ICON_MIGRATION_GUIDE.md](/?path=/docs/icon-migration-guide) for migrating from Bootstrap Icons.
        `},controls:{exclude:["familyClass","familyPrefix","dataAttributes","materialStyle"]}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},icon:{control:"select",options:["Map",...ce],type:{name:"string",required:!0},description:"Icon name in PascalCase (e.g., Home, Settings, User)"},color:{control:"select",options:[void 0,...ae],type:"string",description:"Color of the icon (theme-based)"},strokeWidth:{type:"number",control:"number",description:"Stroke width of the icon (Lucide only)",table:{defaultValue:{summary:"2"}}},hasCircle:{type:"boolean",control:"boolean",description:"Add circle background around the icon",table:{defaultValue:{summary:"false"}}},materialStyle:{type:"boolean",control:"boolean",description:"Use Material Design icons instead of Lucide",table:{defaultValue:{summary:"false"}}},familyClass:{type:"string",description:"Icon font family class (for Material Design or custom icon sets)",table:{defaultValue:{summary:"material-symbols-outlined"}}}},tags:["autodocs"]},c={args:{icon:"Map",size:"120px",hasCircle:!1,className:"",strokeWidth:2}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Home",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Home"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Settings",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Settings"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"User",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"User"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Mail",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Mail"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Bell",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Bell"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Search",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Search"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Calendar",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Calendar"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Heart"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Star",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Star"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Download",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Download"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Upload",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Upload"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Trash2",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Trash2"})]})]}),parameters:{docs:{description:{story:"Most commonly used Lucide icons. Browse all icons at https://lucide.dev/icons/"}}}},p={render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:ae.map(t=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"CircleCheck",size:"24px",color:t}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:t})]},t))}),parameters:{docs:{description:{story:"Icons with different theme colors."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(i,{icon:"Check",color:"success",hasCircle:!0}),e.jsx(i,{icon:"X",color:"danger",hasCircle:!0}),e.jsx(i,{icon:"Info",color:"info",hasCircle:!0}),e.jsx(i,{icon:"AlertTriangle",color:"warning",hasCircle:!0}),e.jsx(i,{icon:"HelpCircle",color:"primary",hasCircle:!0})]}),parameters:{docs:{description:{story:"Icons with circular backgrounds."}}}},x={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:1}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Thin (1)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:1.5}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Light (1.5)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:2}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Regular (2)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:2.5}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Medium (2.5)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:3}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Bold (3)"})]})]}),parameters:{docs:{description:{story:"Control the stroke width of Lucide icons."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(i,{icon:"Sparkles",size:"24px"}),e.jsx(i,{icon:"Sparkles",size:"32px"}),e.jsx(i,{icon:"Sparkles",size:"48px"}),e.jsx(i,{icon:"Sparkles",size:"64px"}),e.jsx(i,{icon:"Sparkles",size:"96px"})]}),parameters:{docs:{description:{story:"Icons in different sizes."}}}},g={parameters:{docs:{description:{story:"The size property with breakpoints does not work outside of a DContextProvider."}}},decorators:t=>e.jsx(a,{children:e.jsx(t,{})}),args:{icon:"Settings",size:{xs:"8",sm:"16",md:"32",lg:"64",xl:"128",xxl:"256"},useListenerSize:!0,hasCircle:!1,strokeWidth:2}},r={render:t=>e.jsx(a,{...f,children:e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"home",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"home"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"settings",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"settings"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"person",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"person"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"mail",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"mail"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"notifications",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"notifications"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"favorite",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"favorite"})]})]})}),parameters:{docs:{description:{story:"Material Design icons are still supported for backward compatibility. Use `materialStyle` prop or configure via DContextProvider."}}}},v={render:t=>e.jsx(a,{...f,children:e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"home",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"home"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"settings",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"settings"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"person",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"person"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"mail",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"mail"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"notifications",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"notifications"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"favorite",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"favorite"})]})]})}),parameters:{docs:{description:{story:"Material Design icons are still supported for backward compatibility. Use `materialStyle` prop or configure via DContextProvider."}}}},n={render:t=>e.jsx(a,{...f,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(h,{iconStart:"alternate_email",iconEnd:"cached",placeholder:"Email address"}),e.jsx(h,{iconStart:"lock",iconEnd:"visibility",type:"password",placeholder:"Password"})]})}),parameters:{docs:{description:{story:"Material Design icons integrated with other components."}}}},o={render:()=>e.jsx(a,{icon:{familyClass:"bi",familyPrefix:"bi-",materialStyle:!1},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(h,{iconStart:"at",iconEnd:"arrow-repeat",placeholder:"Email address"}),e.jsx(h,{iconStart:"lock",iconEnd:"eye",type:"password",placeholder:"Password"})]})})},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"32px",className:"text-pink-500"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"text-pink-500"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Sparkles",size:"32px",className:"text-purple-500"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"text-purple-500"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Star",size:"32px",hasCircle:!0,className:"bg-pink-500 text-white"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"bg-pink-500 text-white"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Bolt",size:"32px",hasCircle:!0,className:"bg-purple-500 text-white"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"bg-purple-500 text-white"})]})]}),parameters:{docs:{description:{story:"Examples using custom utility classes (e.g., text-pink-500, bg-pink-500). Colors depend on your CSS utility setup."}}}};var u,z,S;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: 'Map',
    size: '120px',
    hasCircle: false,
    className: '',
    strokeWidth: 2
  }
}`,...(S=(z=c.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var j,I,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(C=(I=l.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var D,T,A;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(T=p.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var k,w,b;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(b=(w=d.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var W,M,P;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(M=x.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var E,H,N;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var R,_,L;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(_=g.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var B,O,U,V,F;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(U=(O=r.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:"To use icons with Material Symbols style configuration use the `materialStyle` prop\nor configure globally via `DContextProvider`",...(F=(V=r.parameters)==null?void 0:V.docs)==null?void 0:F.description}}};var G,X,$;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...($=(X=v.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var q,J,K,Q,Y;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Material Design icons can be used with any component that accepts icons",...(Y=(Q=n.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var Z,ee,ie,te,se;o.parameters={...o.parameters,docs:{...(Z=o.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ie=(ee=o.parameters)==null?void 0:ee.docs)==null?void 0:ie.source},description:{story:"Bootstrap icons style integrated with other components.",...(se=(te=o.parameters)==null?void 0:te.docs)==null?void 0:se.description}}};var re,ne,oe;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const je=["Default","CommonIcons","WithColors","WithCircle","StrokeWidthVariants","Sizes","WithResponsiveSizes","MaterialDesignIcons","MaterialDesignIconsWithCircle","MaterialDesignInComponents","BootstrapIconsStyle","CustomColorClasses"];export{o as BootstrapIconsStyle,l as CommonIcons,y as CustomColorClasses,c as Default,r as MaterialDesignIcons,v as MaterialDesignIconsWithCircle,n as MaterialDesignInComponents,m as Sizes,x as StrokeWidthVariants,d as WithCircle,p as WithColors,g as WithResponsiveSizes,je as __namedExportsOrder,Se as default};
