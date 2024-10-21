import{j as a}from"./jsx-runtime-CKrituN3.js";import{D as t}from"./DTabs-UKLGzRIp.js";import{P as i}from"./config-CUZHf55T.js";import{e as D}from"./constants-DhWTmuJQ.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ELyB7pIJ.js";const Q={title:"Design System/Patterns/Tabs",component:t,parameters:{docs:{description:{component:`
Wrapper around Bootstrap Navs & Tabs.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Navs & Tabs](https://getbootstrap.com/docs/5.3/components/navs-tabs/)

## CSS Variables
The Bootstrap documentation provides details on the default [Tabs CSS Variables](https://getbootstrap.com/docs/5.3/components/navs-tabs/#css)

| Variable                                              | Classes                               | Type            | Description                        |
|-------------------------------------------------------|---------------------------------------|-----------------|------------------------------------|
| --${i}nav-tabs-nav-gap                        | .nav-pills, .nav-underline, .nav-tabs | css length unit | Space between nav links            |
| --${i}nav-tabs-nav-padding-x                  | .nav-pills, .nav-underline, .nav-tabs | css length unit | Nav padding horizontal             |
| --${i}nav-tabs-nav-padding-y                  | .nav-pills, .nav-underline, .nav-tabs | css length unit | Nav padding vertical               |
| --${i}nav-tabs-link-border-active-font-weight | .nav-pills, .nav-underline, .nav-tabs | css font weight | Nav link border active font weight |
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},vertical:{type:"boolean",control:"boolean",table:{defaultValue:{summary:"false"}}},variant:{type:"string",options:D,control:"select",table:{defaultValue:{summary:"underline"}}}},tags:["autodocs"]},s={decorators:[e=>a.jsx("div",{style:{width:"576px",height:"220px"},className:"d-flex justify-content-center gap-3",children:a.jsx(e,{})})],render:e=>a.jsxs(t,{...e,children:[a.jsx(t.Tab,{tab:"tab1",children:"Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi error beatae temporibus cupiditate quasi ut enim vero, consectetur mollitia soluta! Officiis maxime laboriosam, beatae quia earum id velit, doloribus, voluptatibus soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam."}),a.jsx(t.Tab,{tab:"tab2",children:"Tab content for Tab 2"})]}),args:{defaultSelected:"tab1",variant:"underline",options:[{label:"Tab 1",tab:"tab1"},{label:"Tab 2",tab:"tab2"},{label:"Tab w/o Content",tab:"empty"}],vertical:!1}},o={decorators:[e=>a.jsx("div",{style:{width:"576px",height:"220px"},className:"d-flex justify-content-center gap-3",children:a.jsx(e,{})})],render:e=>a.jsxs(t,{...e,children:[a.jsx(t.Tab,{tab:"tab1",children:"Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi error beatae temporibus cupiditate quasi ut enim vero, consectetur mollitia soluta! Officiis maxime laboriosam, beatae quia earum id velit, doloribus, voluptatibus soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam."}),a.jsx(t.Tab,{tab:"tab2",children:"Tab content for Tab 2"})]}),args:{defaultSelected:"tab2",options:[{label:"Tab 1",tab:"tab1"},{label:"Tab 2",tab:"tab2"},{label:"Tab w/o Content",tab:"empty"}],vertical:!0}},r={decorators:[e=>a.jsx("div",{style:{width:"576px",height:"220px"},className:"d-flex justify-content-center gap-3",children:a.jsx(e,{})})],render:e=>a.jsxs(t,{...e,children:[a.jsx(t.Tab,{tab:"tab1",children:"Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi error beatae temporibus cupiditate quasi ut enim vero, consectetur mollitia soluta! Officiis maxime laboriosam, beatae quia earum id velit, doloribus, voluptatibus soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam."}),a.jsx(t.Tab,{tab:"tab2",children:"Tab content for Tab 2"})]}),args:{defaultSelected:"tab2",options:[{label:"Tab 1",tab:"tab1"},{label:"Tab 2",tab:"tab2"},{label:"Tab w/o Content",tab:"empty"}],vertical:!1,variant:"pills"}},l={decorators:[e=>a.jsx("div",{style:{width:"576px",height:"220px"},className:"d-flex justify-content-center gap-3",children:a.jsx(e,{})})],render:e=>a.jsxs(t,{...e,children:[a.jsx(t.Tab,{tab:"tab1",children:"Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi error beatae temporibus cupiditate quasi ut enim vero, consectetur mollitia soluta! Officiis maxime laboriosam, beatae quia earum id velit, doloribus, voluptatibus soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam."}),a.jsx(t.Tab,{tab:"tab2",children:"Tab content for Tab 2"})]}),args:{defaultSelected:"tab2",options:[{label:"Tab 1",tab:"tab1"},{label:"Tab 2",tab:"tab2"},{label:"Tab w/o Content",tab:"empty"}],vertical:!0,variant:"pills"}},b={decorators:[e=>a.jsx("div",{style:{width:"576px",height:"220px"},className:"d-flex justify-content-center gap-3",children:a.jsx(e,{})})],render:e=>a.jsxs(t,{...e,children:[a.jsx(t.Tab,{tab:"tab1",children:"Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi error beatae temporibus cupiditate quasi ut enim vero, consectetur mollitia soluta! Officiis maxime laboriosam, beatae quia earum id velit, doloribus, voluptatibus soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam."}),a.jsx(t.Tab,{tab:"tab2",children:"Tab content for Tab 2"})]}),args:{defaultSelected:"tab2",options:[{label:"Tab 1",tab:"tab1"},{label:"Tab 2",tab:"tab2"},{label:"Tab w/o Content",tab:"empty"}],vertical:!1,variant:"tabs"}};var n,c,u;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '576px',
    height: '220px'
  }} className="d-flex justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DTabs {...args}>
      <DTabs.Tab tab="tab1">
        Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eligendi error beatae temporibus cupiditate
        quasi ut enim vero, consectetur mollitia soluta! Officiis maxime
        laboriosam, beatae quia earum id velit, doloribus, voluptatibus
        soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam.
      </DTabs.Tab>
      <DTabs.Tab tab="tab2">Tab content for Tab 2</DTabs.Tab>
    </DTabs>,
  args: {
    defaultSelected: 'tab1',
    variant: 'underline',
    options: [{
      label: 'Tab 1',
      tab: 'tab1'
    }, {
      label: 'Tab 2',
      tab: 'tab2'
    }, {
      label: 'Tab w/o Content',
      tab: 'empty'
    }],
    vertical: false
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '576px',
    height: '220px'
  }} className="d-flex justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DTabs {...args}>
      <DTabs.Tab tab="tab1">
        Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eligendi error beatae temporibus cupiditate
        quasi ut enim vero, consectetur mollitia soluta! Officiis maxime
        laboriosam, beatae quia earum id velit, doloribus, voluptatibus
        soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam.
      </DTabs.Tab>
      <DTabs.Tab tab="tab2">Tab content for Tab 2</DTabs.Tab>
    </DTabs>,
  args: {
    defaultSelected: 'tab2',
    options: [{
      label: 'Tab 1',
      tab: 'tab1'
    }, {
      label: 'Tab 2',
      tab: 'tab2'
    }, {
      label: 'Tab w/o Content',
      tab: 'empty'
    }],
    vertical: true
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var T,v,f;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '576px',
    height: '220px'
  }} className="d-flex justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DTabs {...args}>
      <DTabs.Tab tab="tab1">
        Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eligendi error beatae temporibus cupiditate
        quasi ut enim vero, consectetur mollitia soluta! Officiis maxime
        laboriosam, beatae quia earum id velit, doloribus, voluptatibus
        soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam.
      </DTabs.Tab>
      <DTabs.Tab tab="tab2">Tab content for Tab 2</DTabs.Tab>
    </DTabs>,
  args: {
    defaultSelected: 'tab2',
    options: [{
      label: 'Tab 1',
      tab: 'tab1'
    }, {
      label: 'Tab 2',
      tab: 'tab2'
    }, {
      label: 'Tab w/o Content',
      tab: 'empty'
    }],
    vertical: false,
    variant: 'pills'
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,x,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '576px',
    height: '220px'
  }} className="d-flex justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DTabs {...args}>
      <DTabs.Tab tab="tab1">
        Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eligendi error beatae temporibus cupiditate
        quasi ut enim vero, consectetur mollitia soluta! Officiis maxime
        laboriosam, beatae quia earum id velit, doloribus, voluptatibus
        soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam.
      </DTabs.Tab>
      <DTabs.Tab tab="tab2">Tab content for Tab 2</DTabs.Tab>
    </DTabs>,
  args: {
    defaultSelected: 'tab2',
    options: [{
      label: 'Tab 1',
      tab: 'tab1'
    }, {
      label: 'Tab 2',
      tab: 'tab2'
    }, {
      label: 'Tab w/o Content',
      tab: 'empty'
    }],
    vertical: true,
    variant: 'pills'
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,q,j;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '576px',
    height: '220px'
  }} className="d-flex justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DTabs {...args}>
      <DTabs.Tab tab="tab1">
        Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eligendi error beatae temporibus cupiditate
        quasi ut enim vero, consectetur mollitia soluta! Officiis maxime
        laboriosam, beatae quia earum id velit, doloribus, voluptatibus
        soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam.
      </DTabs.Tab>
      <DTabs.Tab tab="tab2">Tab content for Tab 2</DTabs.Tab>
    </DTabs>,
  args: {
    defaultSelected: 'tab2',
    options: [{
      label: 'Tab 1',
      tab: 'tab1'
    }, {
      label: 'Tab 2',
      tab: 'tab2'
    }, {
      label: 'Tab w/o Content',
      tab: 'empty'
    }],
    vertical: false,
    variant: 'tabs'
  }
}`,...(j=(q=b.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};const V=["Default","Vertical","Pills","VerticalPills","Tabs"];export{s as Default,r as Pills,b as Tabs,o as Vertical,l as VerticalPills,V as __namedExportsOrder,Q as default};
