import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as d}from"./config-C3iYXcFk.js";import{r as l}from"./iframe-D2KSBTDy.js";import{u as K,g as X,h as J,b as Q,a as Y,c as Z,d as ee,i as te,j as oe,o as ne,f as se,s as ae,k as re}from"./floating-ui.react-Bh_5aR3S.js";import{c as ie}from"./index-D9ZNrqU0.js";import{a as le}from"./floating-ui.dom-DdXqV6k1.js";import{D as pe}from"./DButton-BckEE5Xz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DxklarVZ.js";import"./index-DKAz_JVG.js";import"./DIcon-ekCLf4cS.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-K3PrZFiL.js";import"./DContext-CYga8oT4.js";const ce=8,h=4,ue=2;function p({className:o,childrenClassName:V,style:S,offSet:T=h+ue,padding:A,withFocus:H=!1,withClick:R=!1,withHover:D=!0,open:N=!1,placement:q="top",size:i,Component:_,children:z}){const[c,B]=l.useState(N),u=l.useRef(null),{refs:m,context:t,floatingStyles:P}=K({open:c,onOpenChange:B,placement:q,whileElementsMounted:le,middleware:[ne(T),se(),ae({padding:A}),re({element:u})]}),U=X(t,{move:!1}),j=J(t),E=Q(t,{ancestorScroll:!0}),O=Y(t),W=Z(t,{role:"tooltip"}),{getReferenceProps:G,getFloatingProps:$}=ee([D?U:void 0,R?O:void 0,H?j:void 0,E,W]),M=l.useMemo(()=>({"tooltip show":!0,[`tooltip-${i}`]:!!i,...o&&{[o]:!0}}),[i,o]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:V,ref:m.setReference,...G(),children:_}),e.jsx(te,{children:c&&e.jsxs("div",{className:ie(M),ref:m.setFloating,style:{...P,...S},...$(),children:[e.jsx(oe,{ref:u,context:t,width:ce,height:h}),e.jsx("div",{className:"tooltip-inner",children:z})]})})]})}try{p.displayName="DTooltip",p.__docgenInfo={description:"Tooltip is an abstraction component that wraps any element (`Component`) and displays\nfloating contextual content (`children`) positioned relative to it using Floating UI.\nUse it to add short, non-critical hints or descriptions triggered by hover, focus, or\nclick, without altering the surrounding layout.",displayName:"DTooltip",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},childrenClassName:{defaultValue:null,description:"CSS class applied to the wrapper element that surrounds `Component` (the trigger).",name:"childrenClassName",required:!1,type:{name:"string | undefined"}},offSet:{defaultValue:{value:"ARROW_HEIGHT + GAP"},description:`Distance in pixels between the trigger and the floating tooltip.
Defaults to arrow height + gap.`,name:"offSet",required:!1,type:{name:"number | undefined"}},padding:{defaultValue:null,description:"Virtual padding, in pixels, used to keep the tooltip within the viewport boundaries.",name:"padding",required:!1,type:{name:"number | undefined"}},withHover:{defaultValue:{value:"true"},description:"When true, the tooltip opens when the pointer hovers over the trigger element.",name:"withHover",required:!1,type:{name:"boolean | undefined"}},withFocus:{defaultValue:{value:"false"},description:`When true, the tooltip opens when the trigger element receives keyboard focus
(recommended for accessibility).`,name:"withFocus",required:!1,type:{name:"boolean | undefined"}},withClick:{defaultValue:{value:"false"},description:"When true, the tooltip toggles open/closed when the trigger element is clicked.",name:"withClick",required:!1,type:{name:"boolean | undefined"}},open:{defaultValue:{value:"false"},description:"Controls the initial open state of the tooltip.",name:"open",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"Size of the tooltip content. Omit for the default size.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},placement:{defaultValue:{value:"top"},description:`Preferred position of the tooltip relative to the trigger element.
Flips automatically if there isn't enough space.`,name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},Component:{defaultValue:null,description:"Element that triggers the tooltip. It is rendered inside a wrapper `<div>`\nthat holds the Floating UI reference and the interaction handlers, so the\ntrigger area is that wrapper rather than this node itself. Style it with\n`childrenClassName`.",name:"Component",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:`Floating content rendered inside the tooltip body. Keep it short and
non-critical: the tooltip is only visible while it is open.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const xe={title:"Design System/Components/Tooltip",component:p,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Abstraction%20Component-4848b7)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Floating UI](https://floating-ui.com/docs/react)

## CSS Variables
The Bootstrap documentation provides details on the default [Tooltip CSS Variables](https://getbootstrap.com/docs/5.3/components/tooltips/#css)

| Variable                           | Class    | Type            | Description                  |
|------------------------------------|----------|-----------------|------------------------------|
| --${d}tooltip-sm-font-size | .tooltip | css length unit | Small tooltip text font size |
| --${d}tooltip-lg-font-size | .tooltip | css length unit | Small tooltip text font size |
        `}}},argTypes:{placement:{control:"select",options:["top","left","bottom","right"],defaultValue:"bottom",table:{category:"Appearance"}},withHover:{type:"boolean",control:"boolean",defaultValue:!0,table:{category:"Behavior"}},withClick:{type:"boolean",control:"boolean",defaultValue:!1,table:{category:"Behavior"}},open:{type:"boolean",control:"boolean",defaultValue:!1,table:{category:"Behavior"}},withFocus:{type:"boolean",control:"boolean",defaultValue:!1,table:{category:"Behavior"}},className:{type:"string",control:"text",table:{category:"Appearance"}},childrenClassName:{type:"string",control:"text",table:{category:"Appearance"}},Component:{table:{type:{summary:"ReactNode"},category:"Content"},control:!1},children:{table:{type:{summary:"ReactNode"},category:"Content"},control:!1},offSet:{type:"number",table:{category:"Appearance"}},padding:{type:"number",table:{category:"Appearance"}},size:{control:"select",options:["sm","lg"],table:{category:"Appearance",defaultValue:{summary:"undefined"}}}},tags:["autodocs"]},n={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!1,open:!1},parameters:{docs:{description:{story:"Base case: hover-triggered tooltip positioned above its trigger. Use this as the starting point for most tooltips, then explore the `placement` and `size` controls to adapt it to your layout."}}}},s={args:{placement:"top",Component:"Text",children:"Lorem Ipsum",withHover:!1,withClick:!0,withFocus:!1,open:!1},parameters:{docs:{description:{story:"Opens and closes on click instead of hover (`withClick`). Use this for touch-friendly UIs or when the tooltip content itself needs to remain visible while the user interacts with the page."}}}},a={args:{placement:"top",Component:e.jsx(pe,{type:"button",children:"Focus me"}),children:"Lorem Ipsum",withHover:!0,withClick:!1,withFocus:!0,open:!1},parameters:{docs:{description:{story:"Also opens when the trigger receives keyboard focus (`withFocus`). Enable this whenever the trigger is a focusable element (link, button, input) so the tooltip is accessible without a mouse. Press Tab in the canvas to focus the button and see it appear."}}}},r={args:{placement:"left",Component:"Text",children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",withHover:!0,withClick:!1,withFocus:!1,open:!1,size:"lg"},parameters:{docs:{description:{story:"Verifies the tooltip wraps and resizes correctly with long content, staying readable and properly positioned instead of overflowing the viewport."}}}};var f,g,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Base case: hover-triggered tooltip positioned above its trigger. Use this as the starting point for most tooltips, then explore the \`placement\` and \`size\` controls to adapt it to your layout.'
      }
    }
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var w,b,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: false,
    withClick: true,
    withFocus: false,
    open: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Opens and closes on click instead of hover (\`withClick\`). Use this for touch-friendly UIs or when the tooltip content itself needs to remain visible while the user interacts with the page.'
      }
    }
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var I,C,L;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    // \`withFocus\` only works when the trigger is a real focusable element
    // (link, button, input...), not plain text without a tabIndex.
    Component: <DButton type="button">Focus me</DButton>,
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: true,
    open: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Also opens when the trigger receives keyboard focus (\`withFocus\`). Enable this whenever the trigger is a focusable element (link, button, input) so the tooltip is accessible without a mouse. Press Tab in the canvas to focus the button and see it appear.'
      }
    }
  }
}`,...(L=(C=a.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var F,k,x;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: false,
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Verifies the tooltip wraps and resizes correctly with long content, staying readable and properly positioned instead of overflowing the viewport.'
      }
    }
  }
}`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const Ve=["Default","ClickTriggered","FocusAccessible","LongContent"];export{s as ClickTriggered,n as Default,a as FocusAccessible,r as LongContent,Ve as __namedExportsOrder,xe as default};
