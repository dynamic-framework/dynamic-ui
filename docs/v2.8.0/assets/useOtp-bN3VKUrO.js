import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DPR1f7NX.js";import{M as u,c as m,U as p}from"./blocks-BvZSuxJt.js";import{u as f}from"./useOtp-42j60N1g.js";import{D as g}from"./DInputPin-Ctg5ttHK.js";import{D as b}from"./DAlert-BUN99Sly.js";import{D as o}from"./DButton-BGTbUgzt.js";import"./iframe-CHeqVsUI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";import"./useCountdown-BwroRmHN.js";import"./index-9xGy8ok_.js";import"./DIcon-C9QpqnTB.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DWQi1yBD.js";import"./DContext-I2P6eEmu.js";function v(){const{otp:n,setOtp:s,invalid:r,error:i,submit:l,isLoading:a,secondsLeft:t,restartCountdown:h}=f({action:()=>new Promise((x,j)=>{setTimeout(()=>{n==="1234"?x():j(new Error("The code you entered is incorrect."))},800)}),otpSize:4,seconds:10});return e.jsxs("div",{className:"d-flex flex-column gap-3",style:{maxWidth:360},children:[e.jsx("h5",{className:"mb-0",children:"Enter your verification code"}),e.jsx("p",{className:"small text-muted mb-0",children:'Try "1234" for a successful submit.'}),e.jsx(g,{characters:4,onChange:s,invalid:r,placeholder:"•"}),r&&e.jsx(b,{color:"danger",children:i instanceof Error?i.message:"Please enter all 4 digits."}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx(o,{variant:"link",size:"sm",text:t>0?`Resend in ${t}s`:"Resend code",disabled:t>0,onClick:h}),e.jsx(o,{text:"Verify",loading:a,onClick:()=>{l().catch(()=>{})}})]})]})}function y(){return e.jsx(v,{})}function d(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Design System/Hooks/useOtp"}),`
`,e.jsx(s.h1,{id:"useotp",children:"useOtp"}),`
`,e.jsxs(s.p,{children:[`Headless hook exposing the same One-Time Password (OTP) logic used internally
by `,e.jsx(s.a,{href:"?path=/docs/design-system-components-otp--docs",children:e.jsx(s.code,{children:"DOtp"})}),` — code state,
length validation, submit action and resend countdown — `,e.jsx(s.strong,{children:`without any bundled
markup or styles`}),"."]}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"useOtp"})," when the default ",e.jsx(s.code,{children:"DOtp"}),` component doesn't match your design and
you need to build a fully custom UI (different layout, custom pin input,
alerts, etc.) while reusing the exact same behavior.`]}),`
`,e.jsxs(s.p,{children:["Internally it composes ",e.jsx(s.a,{href:"?path=/docs/design-system-hooks-usecountdown--docs",children:e.jsx(s.code,{children:"useCountdown"})}),`
for the resend timer and re-exposes `,e.jsx(s.code,{children:"secondsLeft"}),"/",e.jsx(s.code,{children:"restartCountdown"}),`, so there
is no need to call `,e.jsx(s.code,{children:"useCountdown"})," separately."]}),`
`,e.jsx(s.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(s.h3,{id:"useotpconfig",children:e.jsx(s.code,{children:"UseOtpConfig"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Prop"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Required"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"action"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"() => Promise<void> | void"})}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{}),e.jsxs(s.td,{children:["Called when the OTP reaches the expected length and ",e.jsx(s.code,{children:"submit()"})," is invoked."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"otpSize"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{}),e.jsx(s.td,{children:e.jsx(s.code,{children:"6"})}),e.jsx(s.td,{children:"Expected number of digits/characters for a valid OTP."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"seconds"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{}),e.jsx(s.td,{children:e.jsx(s.code,{children:"15"})}),e.jsx(s.td,{children:"Initial countdown (in seconds) before resend becomes available."})]})]})]}),`
`,e.jsx(s.h2,{id:"return-values",children:"Return Values"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"otp"}),": ",e.jsx(s.code,{children:"string"})," — current OTP value."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"setOtp"}),": ",e.jsx(s.code,{children:"(value: string) => void"}),` — updates the OTP value (wire this to
your custom pin input's `,e.jsx(s.code,{children:"onChange"}),"). Clears ",e.jsx(s.code,{children:"invalid"}),"/",e.jsx(s.code,{children:"error"}),` as soon as
the value actually changes, so the error state disappears once the user
edits the code (a no-op call with the same value does not reset it).`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"invalid"}),": ",e.jsx(s.code,{children:"boolean"})," — ",e.jsx(s.code,{children:"true"})," when ",e.jsx(s.code,{children:"submit()"}),` is called with an OTP
shorter than `,e.jsx(s.code,{children:"otpSize"}),", ",e.jsx(s.strong,{children:"or"})," when ",e.jsx(s.code,{children:"action"}),` throws/rejects (e.g. the
backend rejected the entered code as incorrect).`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"error"}),": ",e.jsx(s.code,{children:"unknown"})," — the value thrown/rejected by ",e.jsx(s.code,{children:"action"}),", ",e.jsx(s.code,{children:"null"}),`
otherwise. Use it to render a specific message for a wrong code, as opposed
to a too-short one.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"submit"}),": ",e.jsx(s.code,{children:"() => Promise<void>"}),` — validates the OTP length; if valid,
calls `,e.jsx(s.code,{children:"action"}),". If ",e.jsx(s.code,{children:"action"})," rejects, ",e.jsx(s.code,{children:"submit()"}),`'s promise rejects too (so
callers can still `,e.jsx(s.code,{children:".catch()"})," it for logging), and ",e.jsx(s.code,{children:"invalid"}),"/",e.jsx(s.code,{children:"error"})," are set."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"isLoading"}),": ",e.jsx(s.code,{children:"boolean"})," — ",e.jsx(s.code,{children:"true"})," while ",e.jsx(s.code,{children:"action"}),` is being awaited inside
`,e.jsx(s.code,{children:"submit()"}),` (the OTP already passed the length check). Wire it to your
submit button's `,e.jsx(s.code,{children:"loading"}),"/",e.jsx(s.code,{children:"disabled"})," state. It stays ",e.jsx(s.code,{children:"false"}),` for the
too-short validation failure, since `,e.jsx(s.code,{children:"action"})," isn't called in that case."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"secondsLeft"}),": ",e.jsx(s.code,{children:"number"})," — seconds remaining until resend is available."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"restartCountdown"}),": ",e.jsx(s.code,{children:"() => void"}),` — restarts the resend countdown (call it
from your "Resend" action).`]}),`
`]}),`
`,e.jsxs(s.h2,{id:"example-of-use-exampleofusetsx",children:["Example of use ",e.jsx(s.code,{children:"ExampleOfUse.tsx"})]}),`
`,e.jsx(m,{code:`
import { useOtp, DInputPin, DButton, DAlert } from '@dynamic-framework/ui-react';

export function ExampleOfUse() {
const {
  otp, setOtp, invalid, error, submit, isLoading, secondsLeft, restartCountdown,
} = useOtp({
  // Simulates a backend call that rejects any code other than "1234".
  action: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (otp === '1234') {
        resolve();
      } else {
        reject(new Error('The code you entered is incorrect.'));
      }
    }, 800);
  }),
  otpSize: 4,
  seconds: 10,
});

return (
  <div className="d-flex flex-column gap-3" style={{ maxWidth: 360 }}>
    <h5 className="mb-0">Enter your verification code</h5>
    <DInputPin characters={4} onChange={setOtp} invalid={invalid} placeholder="•" />
    {invalid && (
      <DAlert color="danger">
        {error instanceof Error ? error.message : 'Please enter all 4 digits.'}
      </DAlert>
    )}
    <div className="d-flex justify-content-between align-items-center">
      <DButton
        variant="link"
        size="sm"
        text={secondsLeft > 0 ? \`Resend in \${secondsLeft}s\` : 'Resend code'}
        disabled={secondsLeft > 0}
        onClick={restartCountdown}
      />
      <DButton text="Verify" loading={isLoading} onClick={() => { submit().catch(() => {}); }} />
    </div>
  </div>
);
}
`,language:"tsx",dark:!0}),`
`,e.jsx(s.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsx(p,{children:e.jsx(y,{})})]})}function V(n={}){const{wrapper:s}={...c(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(d,{...n})}):d(n)}export{V as default};
