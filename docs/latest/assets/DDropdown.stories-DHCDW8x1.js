import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{D as N}from"./DButtonIcon-CMgOkkqu.js";import{P as p}from"./config-C3iYXcFk.js";import{D as m}from"./DDropdown-KvfePTOU.js";import{D as I}from"./DButton-BGTbUgzt.js";import"./iframe-CHeqVsUI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-9xGy8ok_.js";import"./DIcon-C9QpqnTB.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-DWQi1yBD.js";import"./DContext-I2P6eEmu.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";const K={title:"Design System/Components/Dropdown",component:m,parameters:{docs:{description:{component:`
## Description
A dropdown menu component to display a list of actions (buttons, links, dividers, etc).

The dropdown automatically adjusts its position depending on the available space in the viewport.

---

## Props

| Prop            | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| actions          | \`DropdownAction[]\`              | List of menu actions |
| dropdownToggle   | \`(props) => ReactNode\`          | Custom toggle renderer or element |
| className        | \`string\`                        | Additional class names for the wrapper |
| classNameMenu    | \`string\`                        | Additional class names for the dropdown menu |
| asPortal         | \`boolean\`                       | If true, the dropdown menu is rendered in a portal (default: false) |
| placement        | \`'auto' \\| 'down' \\| 'up' \\| 'start' \\| 'end'\` | Preferred side to open the menu, with automatic flip/shift to stay inside the viewport |
| alignment        | \`'start' \\| 'end' \\| 'center'\` | Horizontal alignment of the menu relative to the toggle, applied only when the resolved placement is \`down\`/\`up\` (defaults to \`'start'\`) |

---

## DropdownAction

| Prop        | Type | Description |
| ------------ | ---- | ----------- |
| label        | \`string\` | Action text label |
| icon         | \`string\` | Icon name (optional) |
| href         | \`string\` | If provided, renders as a link |
| onClick      | \`({ open, toggle }) => void\` | Callback fired on click |
| disabled     | \`boolean\` | Disables the action |
| color        | \`'default' | 'danger' | 'success' | 'warning' | 'info'\` | Visual variant |
| isDivider    | \`boolean\` | Renders a divider line between items |

---

## CSS Variables

| Variable | Class | Type | Description |
| -------- | ------ | ---- | ----------- |
| --${p}dropdown-bg | .dropdown-menu | color | Menu background color |
| --${p}dropdown-border-radius | .dropdown-menu | length | Border radius of the dropdown |
| --${p}dropdown-item-padding | .dropdown-item | length | Inner padding of each item |
        `}}},argTypes:{className:{control:"text",description:"Additional class names for the dropdown container",type:"string",table:{category:"Appearance"}},asPortal:{control:"boolean",description:"If true, the dropdown menu is rendered in a portal (default: false)",table:{category:"Behavior"}},actions:{control:"object",description:"List of actions displayed in the dropdown menu",table:{category:"Content",type:{summary:"DropdownAction[]",detail:`{
  label: string;
  icon?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  color?: 'default' | 'danger' | 'success' | 'warning' | 'info';
  isDivider?: boolean;
}`}}},dropdownToggle:{control:!1,description:"Custom element or function to render the dropdown toggle button",table:{category:"Content"}},placement:{control:"select",options:["auto","down","up","start","end"],description:"Preferred side to open the menu, with automatic flip/shift to stay inside the viewport",table:{category:"Appearance"}},alignment:{control:"radio",options:["start","end","center"],description:"Horizontal alignment of the menu relative to the toggle, applied only when the resolved placement is `down`/`up`",table:{category:"Appearance"}}},tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{height:350},children:o.jsx(e,{})})]},d=[{label:"Edit",icon:"Pencil",onClick:()=>{}},{label:"Duplicate",icon:"Copy"},{isDivider:!0,label:""},{label:"Delete",icon:"Trash2",color:"danger"}],t={args:{asPortal:!1,actions:[{label:"Active action",icon:"Check"},{label:"Disabled action",disabled:!0}],placement:"auto"}},n={args:{actions:d,dropdownToggle:({open:e,toggle:c})=>o.jsx(N,{icon:e?"ChevronUp":"ChevronDown",color:"primary",variant:"link",onClick:c,"aria-label":"Open dropdown"})},parameters:{docs:{description:{story:"Example using a custom button component as the dropdown toggle."}}}},a={args:{actions:d,dropdownToggle:({open:e,toggle:c})=>o.jsx(I,{iconEnd:e?"ChevronUp":"ChevronDown",color:"primary",text:"Button",onClick:c})},parameters:{docs:{description:{story:"Example using a custom button component as the dropdown toggle."}}}},r={args:{actions:[{label:"Open Google",href:"https://google.com",icon:"Globe"},{label:"Open Storybook Docs",href:"https://storybook.js.org",icon:"Book"}]}},s={args:{dropdownToggle:({toggle:e})=>o.jsx(I,{onClick:e,text:"Button"}),actions:[{label:"First action",icon:"Star"},{isDivider:!0,label:""},{label:"Second action",icon:"Check"},{isDivider:!0,label:""},{label:"Third action",icon:"Trash2",color:"danger"}]}},i={render:()=>o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4rem",padding:"4rem"},children:["down","up","start","end"].map(e=>o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx("p",{className:"mb-2 text-capitalize",children:e}),o.jsx(m,{actions:d,placement:e})]},e))}),parameters:{docs:{description:{story:"Each of the 4 supported placements: `down`, `up`, `start` and `end`.\nThe menu always flips and shifts as needed to stay fully inside the viewport,\neven switching axis (e.g. `start`/`end` to `down`/`up`) when there isn't\nenough room in either direction of the requested axis."}}}},l={render:()=>o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4rem",padding:"4rem"},children:["start","end","center"].map(e=>o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx("p",{className:"mb-2 text-capitalize",children:e}),o.jsx(m,{actions:d,placement:"down",alignment:e})]},e))}),parameters:{docs:{description:{story:"Horizontal alignment of the menu relative to the toggle: `start` (default,\nleft edge aligned), `end` (right edge aligned) and `center`. Only applies when the\nresolved placement is `down`/`up`. As with placement, the menu always shifts/clamps\nas needed to stay fully inside the viewport, falling back to the opposite edge if the\npreferred alignment would overflow."}}}};var g,u,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    asPortal: false,
    actions: [{
      label: 'Active action',
      icon: 'Check'
    }, {
      label: 'Disabled action',
      disabled: true
    }],
    placement: 'auto'
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var w,b,f;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    actions: baseActions,
    dropdownToggle: ({
      open,
      toggle
    }: {
      open: boolean;
      toggle: () => void;
    }) => <DButtonIcon icon={open ? 'ChevronUp' : 'ChevronDown'} color="primary" variant="link" onClick={toggle} aria-label="Open dropdown" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Example using a custom button component as the dropdown toggle.'
      }
    }
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,v,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    actions: baseActions,
    dropdownToggle: ({
      open,
      toggle
    }: {
      open: boolean;
      toggle: () => void;
    }) => <DButton iconEnd={open ? 'ChevronUp' : 'ChevronDown'} color="primary" text="Button" onClick={toggle} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Example using a custom button component as the dropdown toggle.'
      }
    }
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var D,C,k;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    actions: [{
      label: 'Open Google',
      href: 'https://google.com',
      icon: 'Globe'
    }, {
      label: 'Open Storybook Docs',
      href: 'https://storybook.js.org',
      icon: 'Book'
    }]
  }
}`,...(k=(C=r.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var A,T,j;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    dropdownToggle: ({
      toggle
    }: {
      open: boolean;
      toggle: () => void;
    }) => <DButton onClick={toggle} text="Button" />,
    actions: [{
      label: 'First action',
      icon: 'Star'
    }, {
      isDivider: true,
      label: ''
    }, {
      label: 'Second action',
      icon: 'Check'
    }, {
      isDivider: true,
      label: ''
    }, {
      label: 'Third action',
      icon: 'Trash2',
      color: 'danger'
    }]
  }
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var S,B,P;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    padding: '4rem'
  }}>
      {(['down', 'up', 'start', 'end'] as const).map(placement => <div key={placement} style={{
      textAlign: 'center'
    }}>
          <p className="mb-2 text-capitalize">{placement}</p>
          <DDropdown actions={baseActions} placement={placement} />
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`Each of the 4 supported placements: \\\`down\\\`, \\\`up\\\`, \\\`start\\\` and \\\`end\\\`.
The menu always flips and shifts as needed to stay fully inside the viewport,
even switching axis (e.g. \\\`start\\\`/\\\`end\\\` to \\\`down\\\`/\\\`up\\\`) when there isn't
enough room in either direction of the requested axis.\`
      }
    }
  }
}`,...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var E,O,z;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    padding: '4rem'
  }}>
      {(['start', 'end', 'center'] as const).map(alignment => <div key={alignment} style={{
      textAlign: 'center'
    }}>
          <p className="mb-2 text-capitalize">{alignment}</p>
          <DDropdown actions={baseActions} placement="down" alignment={alignment} />
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`Horizontal alignment of the menu relative to the toggle: \\\`start\\\` (default,
left edge aligned), \\\`end\\\` (right edge aligned) and \\\`center\\\`. Only applies when the
resolved placement is \\\`down\\\`/\\\`up\\\`. As with placement, the menu always shifts/clamps
as needed to stay fully inside the viewport, falling back to the opposite edge if the
preferred alignment would overflow.\`
      }
    }
  }
}`,...(z=(O=l.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const Q=["DisabledActions","CustomToggle","CustomToggle2","WithLinks","WithDividers","Placements","Alignment"];export{l as Alignment,n as CustomToggle,a as CustomToggle2,t as DisabledActions,i as Placements,s as WithDividers,r as WithLinks,Q as __namedExportsOrder,K as default};
