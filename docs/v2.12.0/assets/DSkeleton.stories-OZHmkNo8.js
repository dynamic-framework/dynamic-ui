import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-QK21szlK.js";import{P as i}from"./config-7dXXkQRG.js";import{c as u}from"./index-BZR_iX2l.js";import{T as ze}from"./constants-Cykb4qS-.js";import{D as Ve}from"./DDataStateWrapper-BQ7hM-Q9.js";import"./preload-helper-Dp1pzeXC.js";import"./DAlert-DOXZEh_Y.js";import"./DIcon-DywNqvVg.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-QILeHt2b.js";import"./DContext-DZ3MykpO.js";import"./index-BAewX9IB.js";import"./index-BohSAi57.js";import"./DButton-D4ckoxfm.js";function h(n){if(n!==void 0)return typeof n=="number"?`${n}px`:n}const $e=100;function Ae(n){return Number.isFinite(n)?Math.min(Math.max(Math.floor(n),0),$e):0}function _e(n){if(n!==void 0)return n===!0?"rounded":n===!1?"rounded-0":`rounded-${n}`}function A({lines:n=3,size:a,widths:s,lastLineWidth:o="60%",rounded:l,className:r,style:d,dataAttributes:k}){const g=p.useMemo(()=>{const m=Ae(n);return Array.from({length:m},(c,f)=>s!=null&&s.length?h(s[f%s.length]):m>1&&f===m-1?h(o):"100%")},[n,s,o]);return e.jsx("span",{className:u("d-skeleton-text",r),style:d,"aria-hidden":"true",...k,children:g.map((m,c)=>e.jsx("span",{className:u("placeholder d-skeleton-item d-skeleton-line",a&&`placeholder-${a}`,_e(l)),style:{width:m}},c))})}try{A.displayName="DSkeletonText",A.__docgenInfo={description:"",displayName:"DSkeletonText",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},lines:{defaultValue:{value:"3"},description:"Number of lines to render. Capped at 100.",name:"lines",required:!1,type:{name:"number | undefined"}},size:{defaultValue:null,description:"Line height, mapped to Bootstrap's `placeholder-{size}`. Defaults to `1em`.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'}]}},widths:{defaultValue:null,description:"Width per line. When there are fewer widths than lines, the list repeats.\nTakes precedence over `lastLineWidth`.",name:"widths",required:!1,type:{name:"SkeletonDimension[] | undefined"}},lastLineWidth:{defaultValue:{value:"60%"},description:"Width of the last line when there is more than one line and no `widths`.",name:"lastLineWidth",required:!1,type:{name:"SkeletonDimension | undefined"}},rounded:{defaultValue:null,description:"Border radius of each line. See `DSkeleton.Block`.",name:"rounded",required:!1,type:{name:"SkeletonRounded | undefined"}}}}}catch{}function _({width:n="100%",height:a="1em",rounded:s,className:o,style:l,dataAttributes:r}){return e.jsx("span",{className:u("placeholder d-skeleton-item d-skeleton-block",_e(s),o),style:{width:h(n),height:h(a),...l},"aria-hidden":"true",...r})}try{_.displayName="DSkeletonBlock",_.__docgenInfo={description:"",displayName:"DSkeletonBlock",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},width:{defaultValue:{value:"100%"},description:"Width of the block. Numbers are pixels.",name:"width",required:!1,type:{name:"SkeletonDimension | undefined"}},height:{defaultValue:{value:"1em"},description:"Height of the block. Numbers are pixels.",name:"height",required:!1,type:{name:"SkeletonDimension | undefined"}},rounded:{defaultValue:null,description:"Border radius as a Bootstrap `rounded-*` utility. `true` maps to `rounded`,\n`false` to `rounded-0`. When omitted, `--bs-skeleton-border-radius` applies.",name:"rounded",required:!1,type:{name:"SkeletonRounded | undefined"}}}}}catch{}function V({size:n=40,className:a,style:s,dataAttributes:o}){const l=h(n);return e.jsx("span",{className:u("placeholder d-skeleton-item d-skeleton-circle rounded-circle",a),style:{width:l,height:l,...s},"aria-hidden":"true",...o})}try{V.displayName="DSkeletonCircle",V.__docgenInfo={description:"",displayName:"DSkeletonCircle",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},size:{defaultValue:{value:"40"},description:"Diameter of the circle. Numbers are pixels.",name:"size",required:!1,type:{name:"SkeletonDimension | undefined"}}}}}catch{}const F=p.createContext(!1);function $({animation:n,ariaLabel:a="Loading...",color:s,gap:o,direction:l="vertical",items:r,itemClassName:d,className:k,style:g,dataAttributes:m,children:c}){const f=p.useContext(F),W=n??(f?void 0:"glow"),q=p.useMemo(()=>({...s&&{[`--${i}skeleton-bg`]:`var(--${i}${s})`},...o!==void 0&&{[`--${i}skeleton-gap`]:h(o)},...g}),[s,o,g]),I=p.useMemo(()=>r!==void 0||typeof c=="function"?Array.from({length:Ae(r??1)},(Ee,R)=>e.jsx("div",{className:u("d-skeleton-slot",d),children:typeof c=="function"?c(R):c},R)):c,[r,d,c]),E=u("d-skeleton-content",l==="horizontal"&&"d-skeleton-content-horizontal"),P=W&&`d-skeleton-animation-${W}`;return f?e.jsx("div",{className:u(E,P,k),style:q,...m,children:I}):e.jsx(F.Provider,{value:!0,children:e.jsxs("div",{className:u("d-skeleton",P,k),style:q,...m,children:[e.jsx("span",{className:"visually-hidden",role:"status",children:a}),e.jsx("div",{className:E,"aria-hidden":"true",children:I})]})})}const t=Object.assign($,{Text:A,Block:_,Circle:V});try{$.displayName="DSkeleton",$.__docgenInfo={description:"",displayName:"DSkeleton",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},animation:{defaultValue:null,description:"Animation applied to every skeleton item inside. Nested skeletons inherit\nthe animation of the closest skeleton that sets one, so a nested skeleton\ncan replace it or turn it off with `none`.",name:"animation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"glow"'},{value:'"wave"'}]}},ariaLabel:{defaultValue:null,description:`Text announced by screen readers while loading. The skeleton shapes are
hidden from assistive technology, so this is the only thing announced.
Ignored by nested skeletons.`,name:"ariaLabel",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"Theme color for the skeleton items (`primary`, `secondary`, `info`, ...).",name:"color",required:!1,type:{name:"string | undefined"}},gap:{defaultValue:null,description:`Space between items, and between the shapes of every item. Numbers are
pixels.`,name:"gap",required:!1,type:{name:"SkeletonDimension | undefined"}},direction:{defaultValue:null,description:"Axis the items and their shapes are laid out on.",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}},items:{defaultValue:null,description:"Number of times the item is repeated. Setting it turns the skeleton into an\niterator: every repetition is wrapped in its own `.d-skeleton-slot`.\nCapped at 100.",name:"items",required:!1,type:{name:"number | undefined"}},itemClassName:{defaultValue:null,description:"Class applied to the wrapper of every item.",name:"itemClassName",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Template of each item, as a node or as a function receiving the index.\nWithout `items` and without a function, children render as-is.",name:"children",required:!1,type:{name:"ReactNode | ((index: number) => ReactNode)"}}}}}catch{}const tt={title:"Design System/Components/Skeleton",component:t,subcomponents:{"DSkeleton.Text":t.Text,"DSkeleton.Block":t.Block,"DSkeleton.Circle":t.Circle},parameters:{layout:"padded",docs:{description:{component:`
Loading skeleton built on top of Bootstrap's \`placeholder\` utilities. It keeps the layout of the
content while data loads and handles the loading semantics for you.

+ [Bootstrap Placeholders](https://getbootstrap.com/docs/5.3/components/placeholders/)

## Anatomy

| Component          | Renders                                                     |
|--------------------|-------------------------------------------------------------|
| \`DSkeleton\`        | Container: animation, color, gap and accessibility          |
| \`DSkeleton.Text\`   | N lines of text, with per-line widths                       |
| \`DSkeleton.Block\`  | A rectangle (image, button, input, table cell...)           |
| \`DSkeleton.Circle\` | A circle (avatar, icon)                                     |

The primitives are also exported as \`DSkeletonText\`, \`DSkeletonBlock\` and \`DSkeletonCircle\`.

## Iterating

\`items\` repeats the children, so a list does not need a loop in your code:

\`\`\`tsx
const TransactionSkeleton = () => (
  <DSkeleton direction="horizontal" gap={16} className="align-items-center">
    <DSkeleton.Circle size={40} />
    <DSkeleton.Text lines={2} size="sm" widths={['70%', '40%']} className="flex-grow-1" />
    <DSkeleton.Block width={64} height={16} />
  </DSkeleton>
);

<DSkeleton items={4} ariaLabel="Loading transactions">
  <TransactionSkeleton />
</DSkeleton>
\`\`\`

The item is any node: shapes, your own component, or a function receiving the index
(\`{(index) => ...}\`) when each item has to be different. Your item component can be built with
\`DSkeleton\` itself: nested skeletons only lay out their shapes, the outermost one owns the live
region and the label.

Each repetition is wrapped in a \`.d-skeleton-slot\`, so \`gap\` applies between items **and**
between the shapes of each item, which stack. For an item laid out on a row, nest a
\`DSkeleton direction="horizontal"\` as the item. Without \`items\` and without a function child,
children render as-is and no wrapper is added.

\`items\` and \`DSkeleton.Text\`'s \`lines\` are floored and capped at 100; non-finite or negative
values render nothing.

## Accessibility

\`DSkeleton\` renders a visually hidden \`role="status"\` region (implicit \`aria-live="polite"\`)
with \`ariaLabel\`; every shape is \`aria-hidden\`. It does not set \`aria-busy\`: a live region
inside a busy subtree may not be announced, and the skeleton unmounts before the busy state
would clear. Set \`aria-busy\` on your own region if it stays mounted and gets updated when
loading ends. Animations are disabled
under \`prefers-reduced-motion: reduce\`.

## CSS Variables

| Variable                                  | Class        | Type             | Description                         |
|-------------------------------------------|--------------|------------------|-------------------------------------|
| --${i}skeleton-bg                 | .d-skeleton  | css color unit   | Background of every skeleton item   |
| --${i}skeleton-gap                | .d-skeleton  | css length unit  | Space between direct children       |
| --${i}skeleton-line-gap           | .d-skeleton  | css length unit  | Space between lines of \`Text\`       |
| --${i}skeleton-border-radius      | .d-skeleton  | css length unit  | Default radius of every item        |
| --${i}skeleton-animation          | .d-skeleton-animation-* | css animation | Animation of every item, set by \`animation\` |
| --${i}skeleton-mask-image         | .d-skeleton-animation-* | css image     | Mask used by the \`wave\` animation   |
        `}}},decorators:[(n,{parameters:a})=>e.jsx("div",{style:{maxWidth:a.maxWidth??"28rem"},children:e.jsx(n,{})})],argTypes:{animation:{control:"radio",options:["glow","wave","none"],description:"Animation applied to every skeleton item. A nested skeleton inherits the closest one and can replace it or turn it off with `none`",table:{category:"Appearance",defaultValue:{summary:"glow (inherited when nested)"}}},color:{control:"select",options:[void 0,...ze],description:"Theme color for the skeleton items",table:{category:"Appearance"}},gap:{control:"text",description:"Space between items. Numbers are pixels",table:{category:"Appearance"}},direction:{control:"radio",options:["vertical","horizontal"],description:"Axis the items are laid out on",table:{category:"Appearance",defaultValue:{summary:"vertical"}}},itemClassName:{control:"text",description:"Class applied to the wrapper of every item",table:{category:"Appearance"}},items:{control:{type:"number",min:0},description:"Number of times the item is repeated. When omitted, children render as-is, without `.d-skeleton-slot` wrappers (a function child renders once)",table:{category:"Content",defaultValue:{summary:"undefined"}}},ariaLabel:{control:"text",description:"Text announced by screen readers while loading",table:{category:"Behavior",defaultValue:{summary:"Loading..."}}},className:{control:"text",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},dataAttributes:{control:"object",table:{category:"HTML Attributes"}},children:{control:!1,table:{category:"Content"}}},tags:["autodocs"]},x={args:{animation:"glow",ariaLabel:"Loading..."},render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Block,{height:24,width:"50%"}),e.jsx(t.Text,{lines:3})]})},S={parameters:{docs:{description:{story:"`glow` pulses the opacity of each item, `wave` sweeps a highlight across each item on its own (all in sync, not one continuous wave over the whole layout) and `none` renders it static."}}},render:()=>e.jsx("div",{className:"d-flex flex-column gap-4",children:["glow","wave","none"].map(n=>e.jsxs("div",{children:[e.jsx("p",{className:"small fw-bold mb-2",children:n}),e.jsx(t,{animation:n,ariaLabel:`Loading (${n})`,children:e.jsx(t.Text,{lines:2})})]},n))})},b={name:"Nested Animation",parameters:{docs:{description:{story:"A nested skeleton inherits the animation of the closest skeleton that sets one. Setting `animation` on it replaces the inherited one, including `none` to keep a region static."}}},render:()=>e.jsxs(t,{animation:"wave",ariaLabel:"Loading profile",children:[e.jsxs(t,{direction:"horizontal",gap:16,className:"align-items-center",children:[e.jsx(t.Circle,{size:48}),e.jsx(t.Text,{lines:2,widths:["60%","35%"]})]}),e.jsx(t,{animation:"none",children:e.jsx(t.Block,{height:96})}),e.jsx(t,{animation:"glow",children:e.jsx(t.Text,{lines:2,size:"sm"})})]})},y={parameters:{docs:{description:{story:"`DSkeleton.Text` controls the number of lines, their height (`size`), the width of the last line (`lastLineWidth`) or every line (`widths`, which repeats when shorter than `lines`)."}}},render:()=>e.jsxs(t,{gap:32,children:[e.jsx(t.Text,{lines:1,size:"lg"}),e.jsx(t.Text,{lines:4,lastLineWidth:"35%"}),e.jsx(t.Text,{lines:3,size:"sm",widths:["90%","75%","40%"]}),e.jsx(t.Text,{lines:6,size:"xs",widths:["100%",220]})]})},D={parameters:{docs:{description:{story:"`DSkeleton.Block` accepts `width`, `height` and `rounded` (`true`, `false`, `0`–`5`, `circle`, `pill`), mapped to Bootstrap `rounded-*` utilities. `DSkeleton.Circle` takes a single `size`. Numbers are pixels."}}},render:()=>e.jsxs(t,{gap:24,children:[e.jsxs("div",{className:"d-flex gap-3 align-items-end",children:[e.jsx(t.Circle,{size:24}),e.jsx(t.Circle,{size:40}),e.jsx(t.Circle,{size:56}),e.jsx(t.Circle,{size:"5rem"})]}),e.jsx("div",{className:"d-flex gap-3",children:[!1,1,3,5,"pill"].map(n=>e.jsx(t.Block,{width:64,height:40,rounded:n},String(n)))}),e.jsx(t.Block,{height:120})]})},w={parameters:{docs:{description:{story:"`color` accepts any theme color and sets `--bs-skeleton-bg` to `var(--bs-{color})`."}}},render:()=>e.jsx("div",{className:"d-flex flex-column gap-3",children:ze.map(n=>e.jsx(t,{color:n,ariaLabel:`Loading (${n})`,children:e.jsxs("div",{className:"d-flex gap-3 align-items-center",children:[e.jsx(t.Circle,{size:32}),e.jsx(t.Text,{lines:1})]})},n))})},v={name:"Card Skeleton",parameters:{docs:{description:{story:"Composition that mirrors a `DCard` with image, title, description and action."}}},render:()=>e.jsx("div",{className:"card",children:e.jsxs(t,{ariaLabel:"Loading product",children:[e.jsx(t.Block,{height:160,rounded:!1}),e.jsxs("div",{className:"card-body d-flex flex-column gap-3 pt-0",children:[e.jsx(t.Block,{height:24,width:"70%"}),e.jsx(t.Text,{lines:3,size:"sm"}),e.jsx(t.Block,{height:40,width:120})]})]})})};function We(){return e.jsxs(t,{direction:"horizontal",gap:16,className:"align-items-center",children:[e.jsx(t.Circle,{size:40}),e.jsx(t.Text,{lines:2,size:"sm",widths:["70%","40%"],className:"flex-grow-1"}),e.jsx(t.Block,{width:64,height:16})]})}const j={name:"List Skeleton",parameters:{docs:{description:{story:"List of transactions. The row is a component of your own, repeated by `items`."}}},render:()=>e.jsx(t,{items:4,ariaLabel:"Loading transactions",animation:"wave",children:e.jsx(We,{})})},N={name:"Iterating Children",parameters:{docs:{description:{story:"Without a component of your own, `items` repeats the children. A function child receives the `index` of each item."}}},render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",children:[e.jsx(t,{items:3,ariaLabel:"Loading paragraphs",children:e.jsx(t.Text,{lines:2,size:"sm"})}),e.jsx(t,{items:4,gap:8,ariaLabel:"Loading menu",children:n=>e.jsx(t.Block,{height:14,width:`${100-n*15}%`})})]})},L={parameters:{maxWidth:"40rem",docs:{description:{story:'`direction` lays the items out on a column (default) or a row. On a row the items share the width; `itemClassName="flex-grow-0"` makes them size to their content instead.'}}},render:()=>e.jsxs(t,{direction:"horizontal",items:3,gap:16,ariaLabel:"Loading cards",children:[e.jsx(t.Block,{height:96,rounded:3}),e.jsx(t.Text,{lines:2,size:"sm"})]})},C={name:"Table Skeleton",parameters:{maxWidth:"40rem",docs:{description:{story:"Keeps the real table header visible and replaces only the body cells."}}},render:()=>e.jsx(t,{ariaLabel:"Loading accounts",children:e.jsxs("table",{className:"table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Account"}),e.jsx("th",{scope:"col",children:"Type"}),e.jsx("th",{scope:"col",className:"text-end",children:"Balance"})]})}),e.jsx("tbody",{children:Array.from({length:5},(n,a)=>e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx(t.Block,{width:"80%"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx(t.Block,{width:"50%"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx(t.Block,{width:"60%",className:"ms-auto"})})]},a))})]})})},T={name:"Form Skeleton",parameters:{docs:{description:{story:"Labels, inputs and a submit button while the form configuration loads."}}},render:()=>e.jsxs(t,{ariaLabel:"Loading form",gap:20,children:[e.jsxs(t,{items:3,gap:20,children:[e.jsx(t.Block,{width:"30%",height:14}),e.jsx(t.Block,{height:44})]}),e.jsx(t.Block,{width:"100%",height:44,rounded:"pill"})]})},qe=e.jsx(t,{items:3,ariaLabel:"Loading accounts",children:e.jsxs(t,{direction:"horizontal",gap:16,className:"justify-content-between align-items-center",children:[e.jsx(t.Text,{lines:2,size:"sm",widths:["60%","30%"]}),e.jsx(t.Block,{width:96,height:16})]})}),B={name:"With DDataStateWrapper",parameters:{docs:{description:{story:"Pass a `DSkeleton` to `renderLoading` to keep the layout instead of the default spinner."}}},render:function(){const[a,s]=p.useState(!0),[o,l]=p.useState();return p.useEffect(()=>{if(!a)return;const r=setTimeout(()=>{l([{alias:"Cuenta corriente",number:"•••• 1290",balance:"$ 1.250.000"},{alias:"Cuenta de ahorros",number:"•••• 4821",balance:"$ 12.450.000"},{alias:"Tarjeta de crédito",number:"•••• 7733",balance:"$ 320.500"}]),s(!1)},2e3);return()=>clearTimeout(r)},[a]),e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-primary align-self-start",onClick:()=>s(!0),disabled:a,children:"Reload"}),e.jsx(Ve,{isLoading:a,isError:!1,data:o,renderLoading:qe,children:r=>e.jsx("ul",{className:"list-unstyled d-flex flex-column gap-3 mb-0",children:r.map(d=>e.jsxs("li",{className:"d-flex justify-content-between align-items-center gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-0",children:d.alias}),e.jsx("p",{className:"mb-0 small text-secondary",children:d.number})]}),e.jsx("span",{className:"fw-bold",children:d.balance})]},d.number))})})]})}},z={name:"Customization with CSS Variables",parameters:{docs:{description:{story:"Override the `--bs-skeleton-*` variables through `style` or a CSS class to adapt the skeleton to any brand without new props."}}},render:()=>e.jsxs(t,{ariaLabel:"Loading profile",style:{[`--${i}skeleton-bg`]:`var(--${i}info)`,[`--${i}skeleton-border-radius`]:"1rem",[`--${i}skeleton-gap`]:"1.5rem",[`--${i}skeleton-line-gap`]:"0.75rem"},children:[e.jsxs("div",{className:"d-flex gap-3 align-items-center",children:[e.jsx(t.Circle,{size:64}),e.jsx(t.Text,{lines:2,widths:["60%","40%"]})]}),e.jsx(t.Block,{height:96})]})};var M,O,X;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    animation: 'glow',
    ariaLabel: 'Loading...'
  },
  render: args => <DSkeleton {...args}>
      <DSkeleton.Block height={24} width="50%" />
      <DSkeleton.Text lines={3} />
    </DSkeleton>
}`,...(X=(O=x.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var H,K,U;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`glow\` pulses the opacity of each item, \`wave\` sweeps a highlight across each item on its own (all in sync, not one continuous wave over the whole layout) and \`none\` renders it static.'
      }
    }
  },
  render: () => <div className="d-flex flex-column gap-4">
      {(['glow', 'wave', 'none'] as const).map(animation => <div key={animation}>
          <p className="small fw-bold mb-2">{animation}</p>
          <DSkeleton animation={animation} ariaLabel={\`Loading (\${animation})\`}>
            <DSkeleton.Text lines={2} />
          </DSkeleton>
        </div>)}
    </div>
}`,...(U=(K=S.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,G,J;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Nested Animation',
  parameters: {
    docs: {
      description: {
        story: 'A nested skeleton inherits the animation of the closest skeleton that sets one. Setting \`animation\` on it replaces the inherited one, including \`none\` to keep a region static.'
      }
    }
  },
  render: () => <DSkeleton animation="wave" ariaLabel="Loading profile">
      <DSkeleton direction="horizontal" gap={16} className="align-items-center">
        <DSkeleton.Circle size={48} />
        <DSkeleton.Text lines={2} widths={['60%', '35%']} />
      </DSkeleton>
      <DSkeleton animation="none">
        <DSkeleton.Block height={96} />
      </DSkeleton>
      <DSkeleton animation="glow">
        <DSkeleton.Text lines={2} size="sm" />
      </DSkeleton>
    </DSkeleton>
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`DSkeleton.Text\` controls the number of lines, their height (\`size\`), the width of the last line (\`lastLineWidth\`) or every line (\`widths\`, which repeats when shorter than \`lines\`).'
      }
    }
  },
  render: () => <DSkeleton gap={32}>
      <DSkeleton.Text lines={1} size="lg" />
      <DSkeleton.Text lines={4} lastLineWidth="35%" />
      <DSkeleton.Text lines={3} size="sm" widths={['90%', '75%', '40%']} />
      <DSkeleton.Text lines={6} size="xs" widths={['100%', 220]} />
    </DSkeleton>
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: \'`DSkeleton.Block` accepts `width`, `height` and `rounded` (`true`, `false`, `0`–`5`, `circle`, `pill`), mapped to Bootstrap `rounded-*` utilities. `DSkeleton.Circle` takes a single `size`. Numbers are pixels.\'\n      }\n    }\n  },\n  render: () => <DSkeleton gap={24}>\n      <div className="d-flex gap-3 align-items-end">\n        <DSkeleton.Circle size={24} />\n        <DSkeleton.Circle size={40} />\n        <DSkeleton.Circle size={56} />\n        <DSkeleton.Circle size="5rem" />\n      </div>\n      <div className="d-flex gap-3">\n        {([false, 1, 3, 5, \'pill\'] as const).map(rounded => <DSkeleton.Block key={String(rounded)} width={64} height={40} rounded={rounded} />)}\n      </div>\n      <DSkeleton.Block height={120} />\n    </DSkeleton>\n}',...(ae=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,ie,oe;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`color\` accepts any theme color and sets \`--bs-skeleton-bg\` to \`var(--bs-{color})\`.'
      }
    }
  },
  render: () => <div className="d-flex flex-column gap-3">
      {THEMES.map(color => <DSkeleton key={color} color={color} ariaLabel={\`Loading (\${color})\`}>
          <div className="d-flex gap-3 align-items-center">
            <DSkeleton.Circle size={32} />
            <DSkeleton.Text lines={1} />
          </div>
        </DSkeleton>)}
    </div>
}`,...(oe=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var re,le,de;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Card Skeleton',
  parameters: {
    docs: {
      description: {
        story: 'Composition that mirrors a \`DCard\` with image, title, description and action.'
      }
    }
  },
  render: () => <div className="card">
      <DSkeleton ariaLabel="Loading product">
        <DSkeleton.Block height={160} rounded={false} />
        <div className="card-body d-flex flex-column gap-3 pt-0">
          <DSkeleton.Block height={24} width="70%" />
          <DSkeleton.Text lines={3} size="sm" />
          <DSkeleton.Block height={40} width={120} />
        </div>
      </DSkeleton>
    </div>
}`,...(de=(le=v.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,me,ue;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'List Skeleton',
  parameters: {
    docs: {
      description: {
        story: 'List of transactions. The row is a component of your own, repeated by \`items\`.'
      }
    }
  },
  render: () => <DSkeleton items={4} ariaLabel="Loading transactions" animation="wave">
      <TransactionSkeleton />
    </DSkeleton>
}`,...(ue=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,he,fe;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Iterating Children',
  parameters: {
    docs: {
      description: {
        story: 'Without a component of your own, \`items\` repeats the children. A function child receives the \`index\` of each item.'
      }
    }
  },
  render: () => <div className="d-flex flex-column gap-4">
      <DSkeleton items={3} ariaLabel="Loading paragraphs">
        <DSkeleton.Text lines={2} size="sm" />
      </DSkeleton>
      <DSkeleton items={4} gap={8} ariaLabel="Loading menu">
        {index => <DSkeleton.Block height={14} width={\`\${100 - index * 15}%\`} />}
      </DSkeleton>
    </div>
}`,...(fe=(he=N.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ke,ge,xe;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    maxWidth: '40rem',
    docs: {
      description: {
        story: '\`direction\` lays the items out on a column (default) or a row. On a row the items share the width; \`itemClassName="flex-grow-0"\` makes them size to their content instead.'
      }
    }
  },
  render: () => <DSkeleton direction="horizontal" items={3} gap={16} ariaLabel="Loading cards">
      <DSkeleton.Block height={96} rounded={3} />
      <DSkeleton.Text lines={2} size="sm" />
    </DSkeleton>
}`,...(xe=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var Se,be,ye;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Table Skeleton',
  parameters: {
    maxWidth: '40rem',
    docs: {
      description: {
        story: 'Keeps the real table header visible and replaces only the body cells.'
      }
    }
  },
  render: () => <DSkeleton ariaLabel="Loading accounts">
      <table className="table mb-0">
        <thead>
          <tr>
            <th scope="col">Account</th>
            <th scope="col">Type</th>
            <th scope="col" className="text-end">Balance</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({
          length: 5
        }, (_, row) => <tr key={row}>
              <td aria-hidden="true"><DSkeleton.Block width="80%" /></td>
              <td aria-hidden="true"><DSkeleton.Block width="50%" /></td>
              <td aria-hidden="true"><DSkeleton.Block width="60%" className="ms-auto" /></td>
            </tr>)}
        </tbody>
      </table>
    </DSkeleton>
}`,...(ye=(be=C.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var De,we,ve;T.parameters={...T.parameters,docs:{...(De=T.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Form Skeleton',
  parameters: {
    docs: {
      description: {
        story: 'Labels, inputs and a submit button while the form configuration loads.'
      }
    }
  },
  render: () => <DSkeleton ariaLabel="Loading form" gap={20}>
      <DSkeleton items={3} gap={20}>
        <DSkeleton.Block width="30%" height={14} />
        <DSkeleton.Block height={44} />
      </DSkeleton>
      <DSkeleton.Block width="100%" height={44} rounded="pill" />
    </DSkeleton>
}`,...(ve=(we=T.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var je,Ne,Le;B.parameters={...B.parameters,docs:{...(je=B.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'With DDataStateWrapper',
  parameters: {
    docs: {
      description: {
        story: 'Pass a \`DSkeleton\` to \`renderLoading\` to keep the layout instead of the default spinner.'
      }
    }
  },
  render: function Render() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<Account[]>();
    useEffect(() => {
      if (!isLoading) return undefined;
      const timeout = setTimeout(() => {
        setData([{
          alias: 'Cuenta corriente',
          number: '•••• 1290',
          balance: '$ 1.250.000'
        }, {
          alias: 'Cuenta de ahorros',
          number: '•••• 4821',
          balance: '$ 12.450.000'
        }, {
          alias: 'Tarjeta de crédito',
          number: '•••• 7733',
          balance: '$ 320.500'
        }]);
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }, [isLoading]);
    return <div className="d-flex flex-column gap-3">
        <button type="button" className="btn btn-sm btn-outline-primary align-self-start" onClick={() => setIsLoading(true)} disabled={isLoading}>
          Reload
        </button>
        <DDataStateWrapper isLoading={isLoading} isError={false} data={data} renderLoading={accountsSkeleton}>
          {accounts => <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              {accounts.map(account => <li key={account.number} className="d-flex justify-content-between align-items-center gap-3">
                  <div>
                    <p className="mb-0">{account.alias}</p>
                    <p className="mb-0 small text-secondary">{account.number}</p>
                  </div>
                  <span className="fw-bold">{account.balance}</span>
                </li>)}
            </ul>}
        </DDataStateWrapper>
      </div>;
  }
}`,...(Le=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};var Ce,Te,Be;z.parameters={...z.parameters,docs:{...(Ce=z.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Customization with CSS Variables',
  parameters: {
    docs: {
      description: {
        story: 'Override the \`--bs-skeleton-*\` variables through \`style\` or a CSS class to adapt the skeleton to any brand without new props.'
      }
    }
  },
  render: () => <DSkeleton ariaLabel="Loading profile" style={{
    [\`--\${PREFIX_BS}skeleton-bg\`]: \`var(--\${PREFIX_BS}info)\`,
    [\`--\${PREFIX_BS}skeleton-border-radius\`]: '1rem',
    [\`--\${PREFIX_BS}skeleton-gap\`]: '1.5rem',
    [\`--\${PREFIX_BS}skeleton-line-gap\`]: '0.75rem'
  } as CSSProperties}>
      <div className="d-flex gap-3 align-items-center">
        <DSkeleton.Circle size={64} />
        <DSkeleton.Text lines={2} widths={['60%', '40%']} />
      </div>
      <DSkeleton.Block height={96} />
    </DSkeleton>
}`,...(Be=(Te=z.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};const nt=["Default","Animations","NestedAnimation","TextLines","Shapes","Colors","CardSkeleton","ListSkeleton","IteratingChildren","Direction","TableSkeleton","FormSkeleton","WithDataStateWrapper","CustomizationWithCSSVariables"];export{S as Animations,v as CardSkeleton,w as Colors,z as CustomizationWithCSSVariables,x as Default,L as Direction,T as FormSkeleton,N as IteratingChildren,j as ListSkeleton,b as NestedAnimation,D as Shapes,C as TableSkeleton,y as TextLines,B as WithDataStateWrapper,nt as __namedExportsOrder,tt as default};
