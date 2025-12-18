import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as S}from"./DButtonIcon-DB_F37B5.js";import{P as d}from"./config-C3iYXcFk.js";import{D as n}from"./DDropdown-Bz7AjiiS.js";import{D as T}from"./DButton-CQe8zDtZ.js";import"./iframe-Dy0Aerpt.js";import"./index-i7wJJAvU.js";import"./DIcon-Zg8O6yqK.js";import"./useMediaBreakpointUp-g52upMXj.js";import"./DContext-B51mLSx1.js";import"./index-JejD5iQw.js";import"./index-aD47SrVq.js";const N={title:"Design System/Components/Dropdown",component:n,parameters:{docs:{description:{component:`
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
| --${d}dropdown-bg | .dropdown-menu | color | Menu background color |
| --${d}dropdown-border-radius | .dropdown-menu | length | Border radius of the dropdown |
| --${d}dropdown-item-padding | .dropdown-item | length | Inner padding of each item |
        `}}},argTypes:{className:{control:"text",description:"Additional class names for the dropdown container",type:"string"},actions:{control:"object",description:"List of actions displayed in the dropdown menu",table:{type:{summary:"DropdownAction[]",detail:`{
  label: string;
  icon?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  color?: 'default' | 'danger' | 'success' | 'warning' | 'info';
  isDivider?: boolean;
}`}}},dropdownToggle:{control:!1,description:"Custom element or function to render the dropdown toggle button"}},tags:["autodocs"]},j=[{label:"Edit",icon:"Pencil",onClick:()=>{}},{label:"Duplicate",icon:"Copy"},{isDivider:!0,label:""},{label:"Delete",icon:"Trash2",color:"danger"}],r={render:o=>e.jsx("div",{style:{height:300},children:e.jsx(n,{...o})}),args:{actions:[{label:"Active action",icon:"Check"},{label:"Disabled action",disabled:!0}]}},t={render:o=>e.jsx("div",{style:{height:300},children:e.jsx(n,{...o})}),args:{actions:j,dropdownToggle:({open:o,toggle:c})=>e.jsx(S,{icon:o?"ChevronUp":"ChevronDown",color:"primary",variant:"link",onClick:c})},parameters:{docs:{description:{story:"Example using a custom button component as the dropdown toggle."}}}},s={render:o=>e.jsx("div",{style:{height:300},children:e.jsx(n,{...o})}),args:{actions:j,dropdownToggle:({open:o,toggle:c})=>e.jsx(T,{iconEnd:o?"ChevronUp":"ChevronDown",color:"primary",text:"Button",onClick:c})},parameters:{docs:{description:{story:"Example using a custom button component as the dropdown toggle."}}}},i={args:{actions:[{label:"Open Google",href:"https://google.com",icon:"Globe"},{label:"Open Storybook Docs",href:"https://storybook.js.org",icon:"Book"}]}},a={render:o=>e.jsx("div",{style:{height:300},children:e.jsx(n,{...o})}),args:{dropdownToggle:({toggle:o})=>e.jsx(T,{onClick:o,text:"Button"}),actions:[{label:"First action",icon:"Star"},{isDivider:!0,label:""},{label:"Second action",icon:"Check"},{isDivider:!0,label:""},{label:"Third action",icon:"Trash2",color:"danger"}]}};var l,p,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    height: 300
  }}>
      <DDropdown {...args} />
    </div>,
  args: {
    actions: [{
      label: 'Active action',
      icon: 'Check'
    }, {
      label: 'Disabled action',
      disabled: true
    }]
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    height: 300
  }}>
      <DDropdown {...args} />
    </div>,
  args: {
    actions: baseActions,
    dropdownToggle: ({
      open,
      toggle
    }) => <DButtonIcon icon={open ? 'ChevronUp' : 'ChevronDown'} color="primary" variant="link" onClick={toggle} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Example using a custom button component as the dropdown toggle.'
      }
    }
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,D,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div style={{
    height: 300
  }}>
      <DDropdown {...args} />
    </div>,
  args: {
    actions: baseActions,
    dropdownToggle: ({
      open,
      toggle
    }) => <DButton iconEnd={open ? 'ChevronUp' : 'ChevronDown'} color="primary" text="Button" onClick={toggle} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Example using a custom button component as the dropdown toggle.'
      }
    }
  }
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var v,y,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,k,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div style={{
    height: 300
  }}>
      <DDropdown {...args} />
    </div>,
  args: {
    dropdownToggle: ({
      toggle
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
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const V=["DisabledActions","CustomToggle","CustomToggle2","WithLinks","WithDividers"];export{t as CustomToggle,s as CustomToggle2,r as DisabledActions,a as WithDividers,i as WithLinks,V as __namedExportsOrder,N as default};
