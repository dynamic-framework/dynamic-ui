import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-BOlGrI6L.js";const l="a[href], area[href], button, input, select, textarea, details, summary, img[usemap], object[usemap], audio[controls], video[controls], embed, iframe",u='[role="button"], [role="link"], [role="checkbox"], [role="switch"], [role="menuitem"], [tabindex]';function c(e){const n=e.currentTarget,t=e.target;if(!(t!=null&&t.closest))return;const r=a=>!!a&&a!==n&&n.contains(a);r(t.closest(l))||r(t.closest(u))&&e.preventDefault()}function o({htmlFor:e,className:n,children:t}){const r=typeof t=="bigint"?String(t):t;return i.jsx("label",{htmlFor:e,className:n,onClickCapture:c,children:r})}try{o.displayName="DFormLabel",o.__docgenInfo={description:`The \`<label>\` every form control renders, with the click guard already wired.

Internal: it exists so the guard — and the lint exception it needs — lives in
one place instead of being repeated across every input component.

The guard runs in the capture phase, not on bubble: a tooltip or modal
trigger that calls \`stopPropagation()\` in its own handler — a common pattern —
would otherwise keep the guard from ever running, and the browser would go on
to activate the labelled control. Confirmed in Chromium, where the same
trigger toggles the control with a bubble-phase guard and does not with this
one. Capturing changes nothing else: \`preventDefault\` applies to the default
action, which is evaluated after propagation either way.

The \`jsx-a11y\` rules below assume a click handler is being used to make a
non-interactive element interactive, which then owes the keyboard an
equivalent. This handler does the opposite: it suppresses a pointer-only
behaviour, the click a label forwards to its control, and adds no way to
activate anything. Keyboard support for a nested trigger is the consumer's:
\`<a href>\` carries its own, while a \`span\` with a role and a tabindex is
focusable but inert until they handle Enter and Space themselves.`,displayName:"DFormLabel",props:{htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}function d(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e!=="":s.isValidElement(e)?!0:Array.isArray(e)?e.some(d):!0}export{o as D,d as h};
