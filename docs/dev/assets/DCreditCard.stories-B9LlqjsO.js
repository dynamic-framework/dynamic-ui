import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./config-C3iYXcFk.js";import{c as L}from"./index-CHSBDdIb.js";import"./iframe-B6LdZuKn.js";import"./preload-helper-Dp1pzeXC.js";const w="https://cdn.modyo.cloud/uploads/06b434f7-b943-4f54-9543-84a904e189aa/original/Visa_Logo_1_.png",$="https://cdn.modyo.cloud/uploads/4660ad00-e5d8-477e-8919-52b53d0a26fb/original/chip-debit-svgrepo-com_1_.png",B={visa:w,mastercard:"https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png"};function t({brand:a="visa",name:_,number:N,holderText:S="Card Holder",logoImage:I,isChipVisible:z=!0,className:A,isVertical:q=!1}){return e.jsxs("div",{className:L("d-credit-card",q&&"is-vertical",A),children:[e.jsxs("div",{className:"d-credit-card-header",children:[e.jsx("img",{src:I||B[a]||w,alt:a,className:"d-credit-card-logo",width:100}),z&&e.jsx("div",{className:"d-credit-card-chip",children:e.jsx("img",{src:$,alt:"chip",width:30,className:"d-credit-card-chip-image"})})]}),e.jsxs("div",{className:"d-credit-card-details",children:[e.jsx("div",{className:"d-credit-card-number",children:N}),e.jsx("small",{className:"d-credit-card-holder-text",children:S}),e.jsx("span",{className:"d-credit-card-name",children:_})]})]})}try{t.displayName="DCreditCard",t.__docgenInfo={description:"",displayName:"DCreditCard",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},brand:{defaultValue:{value:"visa"},description:"",name:"brand",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"visa"'},{value:'"mastercard"'}]}},isChipVisible:{defaultValue:{value:"true"},description:"",name:"isChipVisible",required:!1,type:{name:"boolean | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},number:{defaultValue:null,description:"",name:"number",required:!1,type:{name:"string | undefined"}},holderText:{defaultValue:{value:"Card Holder"},description:"",name:"holderText",required:!1,type:{name:"string | undefined"}},isVertical:{defaultValue:{value:"false"},description:"",name:"isVertical",required:!1,type:{name:"boolean | undefined"}},logoImage:{defaultValue:null,description:"",name:"logoImage",required:!1,type:{name:"string | undefined"}}}}}catch{}const R={title:"Design System/Components/Credit Card",component:t,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{className:{control:"text",description:"Additional class names for the wrapper element",type:"string",table:{category:"Appearance"}},brand:{control:"select",options:["visa","mastercard"],description:"Card brand; selects default logo unless logoImage is provided",table:{defaultValue:{summary:"visa"},category:"Appearance"}},holderText:{control:"text",description:"Card holder text displayed at the bottom of the card",type:"string",table:{defaultValue:{summary:"Card Holder"},category:"Content"}},isChipVisible:{control:"boolean",description:"Displays or hides the chip icon",type:"boolean",table:{defaultValue:{summary:"true"},category:"Behavior"}},name:{control:"text",description:"Cardholder name displayed at the bottom of the card",type:"string",table:{category:"Content"}},number:{control:"text",description:"Card number displayed on the card",type:"string",table:{category:"Content"}},isVertical:{control:"boolean",description:"Switches card layout to vertical mode",type:"boolean",table:{defaultValue:{summary:"false"},category:"Appearance"}},logoImage:{control:"text",description:"Custom brand logo image URL",type:"string",table:{category:"Content"}}},tags:["autodocs"]},d={name:"John Doe",number:"**** **** **** 1234",brand:"visa"},s={render:a=>e.jsx("div",{style:{width:300},children:e.jsx(t,{...a})}),args:{...d}},i={render:a=>e.jsx("div",{style:{width:300},children:e.jsx(t,{...a})}),args:{...d,isChipVisible:!1},parameters:{docs:{description:{story:"Displays the card without the chip icon."}}}},n={render:a=>e.jsx("div",{style:{width:200},children:e.jsx(t,{...a})}),args:{...d,isVertical:!0},parameters:{docs:{description:{story:"Displays the card in a vertical orientation."}}}},o={render:a=>e.jsx("div",{style:{width:300},children:e.jsx(t,{...a})}),args:{...d,brand:"mastercard",logoImage:void 0},parameters:{docs:{description:{story:"Displays a card with the default Mastercard brand logo."}}}},c={render:a=>e.jsx("div",{style:{width:300},children:e.jsx(t,{...a})}),args:{...d,logoImage:"https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png",brand:"mastercard"},parameters:{docs:{description:{story:"Displays a card with a custom brand logo image."}}}};var l,p,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,v,x;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var V,D,j;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(j=(D=c.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const G=["Default","WithoutChip","VerticalLayout","MastercardBrand","CustomLogo"];export{c as CustomLogo,s as Default,o as MastercardBrand,n as VerticalLayout,i as WithoutChip,G as __namedExportsOrder,R as default};
