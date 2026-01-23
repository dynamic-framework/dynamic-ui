import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./config-C3iYXcFk.js";import{c as $}from"./index-4TPiY_w5.js";import"./iframe-uHxPMequ.js";import"./preload-helper-Dp1pzeXC.js";const j="https://cdn.modyo.cloud/uploads/06b434f7-b943-4f54-9543-84a904e189aa/original/Visa_Logo_1_.png",A="https://cdn.modyo.cloud/uploads/4660ad00-e5d8-477e-8919-52b53d0a26fb/original/chip-debit-svgrepo-com_1_.png",T={visa:j,mastercard:"https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png"};function d({brand:a="visa",name:_,number:N,holderText:S="Card Holder",logoImage:I,isChipVisible:z=!0,className:q,isVertical:L=!1}){return e.jsxs("div",{className:$("d-credit-card overflow-hidden text-white","position-relative rounded-3","d-flex",L&&"is-vertical",q),children:[e.jsxs("div",{className:"d-credit-card-header",children:[e.jsx("img",{src:I||T[a]||j,alt:a,className:"d-credit-card-logo",width:100}),z&&e.jsx("div",{className:"d-credit-card-chip p-2 rounded-2",children:e.jsx("img",{src:A,alt:"chip",width:30,className:"d-credit-card-chip-image"})})]}),e.jsxs("div",{className:"d-credit-card-details mt-auto d-none d-sm-block",children:[e.jsx("div",{className:"d-credit-card-number d-none d-sm-block mb-4",children:N}),e.jsx("small",{className:"d-block opacity-50",children:S}),e.jsx("span",{className:"name",children:_})]})]})}try{d.displayName="DCreditCard",d.__docgenInfo={description:"",displayName:"DCreditCard",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},brand:{defaultValue:{value:"visa"},description:"",name:"brand",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"visa"'},{value:'"mastercard"'}]}},isChipVisible:{defaultValue:{value:"true"},description:"",name:"isChipVisible",required:!1,type:{name:"boolean | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},number:{defaultValue:null,description:"",name:"number",required:!1,type:{name:"string | undefined"}},holderText:{defaultValue:{value:"Card Holder"},description:"",name:"holderText",required:!1,type:{name:"string | undefined"}},isVertical:{defaultValue:{value:"false"},description:"",name:"isVertical",required:!1,type:{name:"boolean | undefined"}},logoImage:{defaultValue:null,description:"",name:"logoImage",required:!1,type:{name:"string | undefined"}}}}}catch{}const H={title:"Design System/Components/Credit Card",component:d,parameters:{docs:{description:{component:`
A credit/debit card visual component displaying brand logo, chip, card number, and cardholder name.

Supports different sizes and orientations (horizontal and vertical), and can display custom branding logos.

To understand in more detail the aspects covered by this component, you can customize its appearance using CSS variables.

---

## CSS Variables

| Variable | Class | Type | Description |
| -------- | ----- | ---- | ----------- |
| --${r}d-credit-card-bg | .d-credit-card | css gradient | Background gradient of the card |
| --${r}d-credit-card-aspect-ratio | .d-credit-card | ratio | Aspect ratio of the card (16/9 horizontal, 9/16 vertical) |
| --${r}d-credit-card-padding | .d-credit-card | css length unit | Inner padding of the card |
| --${r}d-credit-card-chip-bg | .d-credit-card-chip | css color unit | Background color of the chip area |
| --${r}d-credit-card-chip-size | .d-credit-card-chip-image | css length unit | Size of the chip image |
| --${r}d-credit-card-logo-size | .d-credit-card-logo | percentage | Width of the brand logo (22% horizontal, 30% vertical) |
| --${r}d-credit-card-font-family-number | .d-credit-card-number | css font family | Font family for card number |
| --${r}d-credit-card-number-size | .d-credit-card-number | css length unit | Font size of card number |
        `}}},argTypes:{className:{control:"text",description:"Additional class names for the wrapper element",type:"string"},brand:{control:"select",options:["visa","mastercard"],description:"Card brand; selects default logo unless logoImage is provided",table:{defaultValue:{summary:"visa"}}},holderText:{control:"text",description:"Card holder text displayed at the bottom of the card",type:"string",table:{defaultValue:{summary:"Card Holder"}}},isChipVisible:{control:"boolean",description:"Displays or hides the chip icon",type:"boolean",table:{defaultValue:{summary:"true"}}},name:{control:"text",description:"Cardholder name displayed at the bottom of the card",type:"string"},number:{control:"text",description:"Card number displayed on the card",type:"string"},isVertical:{control:"boolean",description:"Switches card layout to vertical mode",type:"boolean",table:{defaultValue:{summary:"false"}}},logoImage:{control:"text",description:"Custom brand logo image URL",type:"string"}},tags:["autodocs"]},t={name:"John Doe",number:"**** **** **** 1234",brand:"visa"},s={render:a=>e.jsx("div",{style:{width:300},children:e.jsx(d,{...a})}),args:{...t}},i={render:a=>e.jsx("div",{style:{width:300},children:e.jsx(d,{...a})}),args:{...t,isChipVisible:!1},parameters:{docs:{description:{story:"Displays the card without the chip icon."}}}},n={render:a=>e.jsx("div",{style:{width:200},children:e.jsx(d,{...a})}),args:{...t,isVertical:!0},parameters:{docs:{description:{story:"Displays the card in a vertical orientation."}}}},o={render:a=>e.jsx("div",{style:{width:300},children:e.jsx(d,{...a})}),args:{...t,brand:"mastercard",logoImage:void 0},parameters:{docs:{description:{story:"Displays a card with the default Mastercard brand logo."}}}},c={render:a=>e.jsx("div",{style:{width:300},children:e.jsx(d,{...a})}),args:{...t,logoImage:"https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png",brand:"mastercard"},parameters:{docs:{description:{story:"Displays a card with a custom brand logo image."}}}};var l,p,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 300
  }}>
      <DCreditCard {...args} />
    </div>,
  args: {
    ...defaultCard
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 300
  }}>
      <DCreditCard {...args} />
    </div>,
  args: {
    ...defaultCard,
    isChipVisible: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays the card without the chip icon.'
      }
    }
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 200
  }}>
      <DCreditCard {...args} />
    </div>,
  args: {
    ...defaultCard,
    isVertical: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays the card in a vertical orientation.'
      }
    }
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,C,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 300
  }}>
      <DCreditCard {...args} />
    </div>,
  args: {
    ...defaultCard,
    brand: 'mastercard',
    logoImage: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a card with the default Mastercard brand logo.'
      }
    }
  }
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var V,D,w;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 300
  }}>
      <DCreditCard {...args} />
    </div>,
  args: {
    ...defaultCard,
    logoImage: 'https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png',
    brand: 'mastercard'
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a card with a custom brand logo image.'
      }
    }
  }
}`,...(w=(D=c.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const R=["Default","WithoutChip","VerticalLayout","MastercardBrand","CustomLogo"];export{c as CustomLogo,s as Default,o as MastercardBrand,n as VerticalLayout,i as WithoutChip,R as __namedExportsOrder,H as default};
