import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as A}from"./DButtonIcon-CHyF0fNe.js";import{P as c}from"./config-C3iYXcFk.js";import{D as S}from"./DDropdown-DukZd6cv.js";import{D as T}from"./DButton-BUrFSCCL.js";import"./iframe-DkjceUUU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtlKHQhD.js";import"./DIcon-CBkIH7ym.js";import"./useMediaBreakpointUp-C9viAbpR.js";import"./DContext-BbaizxMa.js";import"./index-p6Xuepxi.js";import"./index-DxZ9-uFP.js";const V={title:"Design System/Components/Dropdown",component:S,parameters:{docs:{description:{component:`
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
| --${c}dropdown-bg | .dropdown-menu | color | Menu background color |
| --${c}dropdown-border-radius | .dropdown-menu | length | Border radius of the dropdown |
| --${c}dropdown-item-padding | .dropdown-item | length | Inner padding of each item |
        `}}},argTypes:{className:{control:"text",description:"Additional class names for the dropdown container",type:"string",table:{category:"Appearance"}},actions:{control:"object",description:"List of actions displayed in the dropdown menu",table:{category:"Content",type:{summary:"DropdownAction[]",detail:`{
  label: string;
  icon?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  color?: 'default' | 'danger' | 'success' | 'warning' | 'info';
  isDivider?: boolean;
}`}}},dropdownToggle:{control:!1,description:"Custom element or function to render the dropdown toggle button",table:{category:"Content"}}},tags:["autodocs"],decorators:[o=>e.jsx("div",{style:{height:250},children:e.jsx(o,{})})]},x=[{label:"Edit",icon:"Pencil",onClick:()=>{}},{label:"Duplicate",icon:"Copy"},{isDivider:!0,label:""},{label:"Delete",icon:"Trash2",color:"danger"}],n={args:{actions:[{label:"Active action",icon:"Check"},{label:"Disabled action",disabled:!0}]}},t={args:{actions:x,dropdownToggle:({open:o,toggle:s})=>e.jsx(A,{icon:o?"ChevronUp":"ChevronDown",color:"primary",variant:"link",onClick:s,"aria-label":"Open dropdown"})},parameters:{docs:{description:{story:"Example using a custom button component as the dropdown toggle."}}}},r={args:{actions:x,dropdownToggle:({open:o,toggle:s})=>e.jsx(T,{iconEnd:o?"ChevronUp":"ChevronDown",color:"primary",text:"Button",onClick:s})},parameters:{docs:{description:{story:"Example using a custom button component as the dropdown toggle."}}}},a={args:{actions:[{label:"Open Google",href:"https://google.com",icon:"Globe"},{label:"Open Storybook Docs",href:"https://storybook.js.org",icon:"Book"}]}},i={args:{dropdownToggle:({toggle:o})=>e.jsx(T,{onClick:o,text:"Button"}),actions:[{label:"First action",icon:"Star"},{isDivider:!0,label:""},{label:"Second action",icon:"Check"},{isDivider:!0,label:""},{label:"Third action",icon:"Trash2",color:"danger"}]}};var l,d,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    actions: [{
      label: 'Active action',
      icon: 'Check'
    }, {
      label: 'Disabled action',
      disabled: true
    }]
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,m,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,h,D;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(h=r.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var w,C,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(C=a.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var f,k,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(k=i.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const _=["DisabledActions","CustomToggle","CustomToggle2","WithLinks","WithDividers"];export{t as CustomToggle,r as CustomToggle2,n as DisabledActions,i as WithDividers,a as WithLinks,_ as __namedExportsOrder,V as default};
