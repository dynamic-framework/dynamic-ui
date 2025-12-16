import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./config-C3iYXcFk.js";import{c as S}from"./index-GkXUhdzL.js";import"./iframe-CRnNZQHm.js";const I="https://cdn.modyo.cloud/uploads/06b434f7-b943-4f54-9543-84a904e189aa/original/Visa_Logo_1_.png",z="https://cdn.modyo.cloud/uploads/4660ad00-e5d8-477e-8919-52b53d0a26fb/original/chip-debit-svgrepo-com_1_.png";function d({brand:a="visa",name:x,number:V,holderText:D="Card Holder",logoImage:j,isChipVisible:w=!0,className:_,isVertical:N=!1}){return e.jsxs("div",{className:S("d-credit-card overflow-hidden text-white","position-relative rounded-3","d-none d-lg-flex",N&&"is-vertical",_),children:[e.jsxs("div",{className:"d-credit-card-header",children:[e.jsx("img",{src:j||I,alt:a,className:"d-credit-card-logo",width:100}),w&&e.jsx("div",{className:"d-credit-card-chip p-2 rounded-2",children:e.jsx("img",{src:z,alt:"chip",width:30,className:"d-credit-card-chip-image"})})]}),e.jsxs("div",{className:"d-credit-card-details mt-auto d-none d-sm-block",children:[e.jsx("div",{className:"d-credit-card-number d-none d-sm-block mb-4",children:V}),e.jsx("small",{className:"d-block opacity-50",children:D}),e.jsx("span",{className:"name",children:x})]})]})}try{d.displayName="DCreditCard",d.__docgenInfo={description:"",displayName:"DCreditCard",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},brand:{defaultValue:{value:"visa"},description:"",name:"brand",required:!1,type:{name:"string | undefined"}},isChipVisible:{defaultValue:{value:"true"},description:"",name:"isChipVisible",required:!1,type:{name:"boolean | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},number:{defaultValue:null,description:"",name:"number",required:!1,type:{name:"string | undefined"}},holderText:{defaultValue:{value:"Card Holder"},description:"",name:"holderText",required:!1,type:{name:"string | undefined"}},isVertical:{defaultValue:{value:"false"},description:"",name:"isVertical",required:!1,type:{name:"boolean | undefined"}},logoImage:{defaultValue:null,description:"",name:"logoImage",required:!1,type:{name:"string | undefined"}}}}}catch{}const A={title:"Design System/Components/Credit Card",component:d,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{className:{control:"text",description:"Additional class names for the wrapper element",type:"string"},brand:{control:"text",description:"Card brand (used as alt text for the logo)",type:"string",table:{defaultValue:{summary:"visa"}}},holderText:{control:"text",description:"Card holder text displayed at the bottom of the card",type:"string",table:{defaultValue:{summary:"Card Holder"}}},isChipVisible:{control:"boolean",description:"Displays or hides the chip icon",type:"boolean",table:{defaultValue:{summary:"true"}}},name:{control:"text",description:"Cardholder name displayed at the bottom of the card",type:"string"},number:{control:"text",description:"Card number displayed on the card",type:"string"},isVertical:{control:"boolean",description:"Switches card layout to vertical mode",type:"boolean",table:{defaultValue:{summary:"false"}}},logoImage:{control:"text",description:"Custom brand logo image URL",type:"string"}},tags:["autodocs"]},o={name:"John Doe",number:"**** **** **** 1234",brand:"Visa"},t={render:a=>e.jsx("div",{style:{width:300},children:e.jsx(d,{...a})}),args:{...o}},i={render:a=>e.jsx("div",{style:{width:300},children:e.jsx(d,{...a})}),args:{...o,isChipVisible:!1},parameters:{docs:{description:{story:"Displays the card without the chip icon."}}}},s={render:a=>e.jsx("div",{style:{width:200},children:e.jsx(d,{...a})}),args:{...o,isVertical:!0},parameters:{docs:{description:{story:"Displays the card in a vertical orientation."}}}},n={render:a=>e.jsx("div",{style:{width:300},children:e.jsx(d,{...a})}),args:{...o,logoImage:"https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png",brand:"MasterCard"},parameters:{docs:{description:{story:"Displays a card with a custom brand logo image."}}}};var c,l,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 300
  }}>
      <DCreditCard {...args} />
    </div>,
  args: {
    ...defaultCard
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,C,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 300
  }}>
      <DCreditCard {...args} />
    </div>,
  args: {
    ...defaultCard,
    logoImage: 'https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png',
    brand: 'MasterCard'
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a card with a custom brand logo image.'
      }
    }
  }
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const E=["Default","WithoutChip","VerticalLayout","CustomLogo"];export{n as CustomLogo,t as Default,s as VerticalLayout,i as WithoutChip,E as __namedExportsOrder,A as default};
