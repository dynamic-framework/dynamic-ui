import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as s}from"./config-C3iYXcFk.js";import{D as i}from"./DIcon-kG3_WTRG.js";import{T as $,I as q,a as m}from"./constants-BoPmzNgw.js";import{F as g}from"./DInput-U-qh2Kxo.js";import{D as v}from"./DContext-DnrHYxse.js";import"./index-DvQjpGce.js";import"./iframe-Yvsh7xC9.js";import"./useProvidedRefOrCreate-B2yyi32D.js";import"./index-B907fQrS.js";import"./index-BVHJzkj7.js";const oe={title:"Design System/Components/Icon",component:i,parameters:{docs:{description:{component:`
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

Browse all available Lucide icons at: https://lucide.dev/icons/

Icon names use **PascalCase** (e.g., \`Home\`, \`Settings\`, \`User\`)

## Migration Guide

See [ICON_MIGRATION_GUIDE.md](/?path=/docs/icon-migration-guide) for migrating from Bootstrap Icons.
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},icon:{control:"select",options:["Map",...q],type:{name:"string",required:!0},description:"Icon name in PascalCase (e.g., Home, Settings, User)"},color:{control:"select",options:[void 0,...$],type:"string",description:"Color of the icon (theme-based)"},size:{type:"string",control:"text",description:"Size of the icon in css length unit or number",table:{defaultValue:{summary:"24"}}},strokeWidth:{type:"number",control:"number",description:"Stroke width of the icon (Lucide only)",table:{defaultValue:{summary:"2"}}},hasCircle:{type:"boolean",control:"boolean",description:"Add circle background around the icon",table:{defaultValue:{summary:"false"}}},materialStyle:{type:"boolean",control:"boolean",description:"Use Material Design icons instead of Lucide",table:{defaultValue:{summary:"false"}}},familyClass:{type:"string",description:"Icon font family class (for Material Design or custom icon sets)",table:{defaultValue:{summary:"material-symbols-outlined"}}}},tags:["autodocs"]},o={args:{icon:"Map",size:"120px"}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Home",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Home"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Settings",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Settings"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"User",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"User"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Mail",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Mail"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Bell",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Bell"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Search",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Search"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Calendar",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Calendar"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Heart"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Star",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Star"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Download",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Download"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Upload",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Upload"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Trash2",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Trash2"})]})]}),parameters:{docs:{description:{story:"Most commonly used Lucide icons. Browse all icons at https://lucide.dev/icons/"}}}},a={render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:$.map(t=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"CircleCheck",size:"24px",color:t}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:t})]},t))}),parameters:{docs:{description:{story:"Icons with different theme colors."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(i,{icon:"Check",color:"success",hasCircle:!0}),e.jsx(i,{icon:"X",color:"danger",hasCircle:!0}),e.jsx(i,{icon:"Info",color:"info",hasCircle:!0}),e.jsx(i,{icon:"AlertTriangle",color:"warning",hasCircle:!0}),e.jsx(i,{icon:"HelpCircle",color:"primary",hasCircle:!0})]}),parameters:{docs:{description:{story:"Icons with circular backgrounds."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:1}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Thin (1)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:1.5}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Light (1.5)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:2}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Regular (2)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:2.5}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Medium (2.5)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"Heart",size:"24px",strokeWidth:3}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Bold (3)"})]})]}),parameters:{docs:{description:{story:"Control the stroke width of Lucide icons."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(i,{icon:"Sparkles",size:"24px"}),e.jsx(i,{icon:"Sparkles",size:"32px"}),e.jsx(i,{icon:"Sparkles",size:"24px"}),e.jsx(i,{icon:"Sparkles",size:"64px"}),e.jsx(i,{icon:"Sparkles",size:"96px"})]}),parameters:{docs:{description:{story:"Icons in different sizes."}}}},n={render:t=>e.jsx(v,{...m,children:e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"home",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"home"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"settings",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"settings"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"person",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"person"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"mail",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"mail"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"notifications",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"notifications"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{icon:"favorite",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"favorite"})]})]})}),parameters:{docs:{description:{story:"Material Design icons are still supported for backward compatibility. Use `materialStyle` prop or configure via DContextProvider."},canvas:{sourceState:"shown"}}}},x={render:t=>e.jsx(v,{...m,children:e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"home",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"home"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"settings",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"settings"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"person",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"person"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"mail",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"mail"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"notifications",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"notifications"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{hasCircle:!0,icon:"favorite",size:"24px"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"favorite"})]})]})}),parameters:{docs:{description:{story:"Material Design icons are still supported for backward compatibility. Use `materialStyle` prop or configure via DContextProvider."},canvas:{sourceState:"shown"}}}},r={render:t=>e.jsx(v,{...m,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(g,{iconStart:"alternate_email",iconEnd:"cached",placeholder:"Email address"}),e.jsx(g,{iconStart:"lock",iconEnd:"visibility",type:"password",placeholder:"Password"})]})}),parameters:{docs:{description:{story:"Material Design icons integrated with other components."},canvas:{sourceState:"shown"}}}};var y,h,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: 'Map',
    size: '120px'
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var z,u,S;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(S=(u=c.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var j,I,T;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(I=a.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var D,C,A;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var w,b,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(b=p.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var M,W,E;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <DIcon icon="Sparkles" size="24px" />
      <DIcon icon="Sparkles" size="32px" />
      <DIcon icon="Sparkles" size="24px" />
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
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var P,H,_,R,L;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(_=(H=n.parameters)==null?void 0:H.docs)==null?void 0:_.source},description:{story:"To use icons with Material Symbols style configuration use the `materialStyle` prop\nor configure globally via `DContextProvider`",...(L=(R=n.parameters)==null?void 0:R.docs)==null?void 0:L.description}}};var O,U,V;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(V=(U=x.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var B,N,F,G,X;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(F=(N=r.parameters)==null?void 0:N.docs)==null?void 0:F.source},description:{story:"Material Design icons can be used with any component that accepts icons",...(X=(G=r.parameters)==null?void 0:G.docs)==null?void 0:X.description}}};const ce=["Default","CommonIcons","WithColors","WithCircle","StrokeWidthVariants","Sizes","MaterialDesignIcons","MaterialDesignIconsWithCircle","MaterialDesignInComponents"];export{c as CommonIcons,o as Default,n as MaterialDesignIcons,x as MaterialDesignIconsWithCircle,r as MaterialDesignInComponents,d as Sizes,p as StrokeWidthVariants,l as WithCircle,a as WithColors,ce as __namedExportsOrder,oe as default};
