import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DPR1f7NX.js";import{M as d,c as i,U as c}from"./blocks-BvZSuxJt.js";import{u as a}from"./useCountdown-BwroRmHN.js";import{D as t}from"./DCard-CwiAt_Wy.js";import{D as l}from"./DButton-BGTbUgzt.js";import"./iframe-CHeqVsUI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";import"./index-9xGy8ok_.js";import"./DIcon-C9QpqnTB.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DWQi1yBD.js";import"./DContext-I2P6eEmu.js";function u(){const{secondsLeft:s,restartCountdown:n}=a(10);return e.jsx(t,{children:e.jsxs(t.Body,{className:"d-flex align-items-center gap-3",children:[e.jsx("p",{className:"mb-0",children:s>0?`Resend available in ${s}s`:"You can resend now"}),e.jsx(l,{size:"sm",variant:"link",text:"Resend",disabled:s>0,onClick:n})]})})}function m(){return e.jsx(u,{})}function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Design System/Hooks/useCountdown"}),`
`,e.jsx(n.h1,{id:"usecountdown",children:"useCountdown"}),`
`,e.jsxs(n.p,{children:["Generic seconds-based countdown hook. Starts counting down from ",e.jsx(n.code,{children:"seconds"}),` to
`,e.jsx(n.code,{children:"0"})," and exposes ",e.jsx(n.code,{children:"restartCountdown"})," to reset and restart the timer."]}),`
`,e.jsxs(n.p,{children:[`Useful for any cooldown/throttle UI: "resend code in Xs" patterns, session-
expiry banners, rate-limited actions, etc. It is used internally by
`,e.jsx(n.a,{href:"?path=/docs/design-system-hooks-useotp--docs",children:e.jsx(n.code,{children:"useOtp"})}),` to power the resend
countdown, but it is fully generic and framework-agnostic beyond that.`]}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"seconds"}),": ",e.jsx(n.code,{children:"number"})," — the number of seconds the countdown starts from."]}),`
`]}),`
`,e.jsx(n.h2,{id:"return-values",children:"Return Values"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"secondsLeft"}),": ",e.jsx(n.code,{children:"number"})," — seconds remaining until the countdown reaches ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"restartCountdown"}),": ",e.jsx(n.code,{children:"() => void"})," — resets ",e.jsx(n.code,{children:"secondsLeft"})," back to ",e.jsx(n.code,{children:"seconds"}),`
and restarts the timer.`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-of-use-exampleofusetsx",children:["Example of use ",e.jsx(n.code,{children:"ExampleOfUse.tsx"})]}),`
`,e.jsx(i,{code:`
import { useCountdown, DButton, DCard } from '@dynamic-framework/ui-react';

export function ExampleOfUse() {
const { secondsLeft, restartCountdown } = useCountdown(10);

return (
  <DCard>
    <DCard.Body className="d-flex align-items-center gap-3">
      <p className="mb-0">
        {secondsLeft > 0 ? \`Resend available in \${secondsLeft}s\` : 'You can resend now'}
      </p>
      <DButton
        size="sm"
        variant="link"
        text="Resend"
        disabled={secondsLeft > 0}
        onClick={restartCountdown}
      />
    </DCard.Body>
  </DCard>
);
}
`,language:"tsx",dark:!0}),`
`,e.jsx(n.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsx(c,{children:e.jsx(m,{})})]})}function v(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{v as default};
