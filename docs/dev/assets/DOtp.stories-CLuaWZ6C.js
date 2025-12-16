import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-DLbf3qKv.js";import{D as S}from"./DButton-CluHaZiK.js";import{D as I}from"./DInputPin-BMNZ0Evw.js";import{D as w}from"./DCard-Cc0XXWw_.js";import"./index-DsY-b2ur.js";import"./DIcon-Dz-46F40.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-BOU17c78.js";import"./DContext-Dxx5fHg0.js";import"./index-BpFZy5MA.js";import"./index-wK-VFbMZ.js";function y(t){const[o,s]=r.useState(t),[n,a]=r.useState(!0),u=r.useCallback((i=t)=>{a(!1),s(i)},[t]),c=r.useCallback(()=>{u(t),a(!0)},[u,t]);return r.useEffect(()=>{if(!n)return()=>{};const i=setInterval(()=>{s(g=>{const l=g-1;return l<=0?(clearInterval(i),a(!1),0):l})},1e3);return()=>clearInterval(i)},[n]),{secondsLeft:o,restartCountdown:c}}try{y.displayName="useCountdown",y.__docgenInfo={description:"",displayName:"useCountdown",props:{}}}catch{}const P=t=>t>0?`Didn't get any code? Resend in: ${t}s`:"Didn't get any code?";function h({seconds:t,resendText:o,message:s}){const{secondsLeft:n,restartCountdown:a}=y(t);return e.jsxs("div",{className:"d-flex gap-2 align-items-center",children:[e.jsx("p",{className:"mb-0",children:s?s(n):P(n)}),e.jsx(S,{text:o,variant:"link",disabled:n>0,onClick:a})]})}try{h.displayName="OtpCountdown",h.__docgenInfo={description:"",displayName:"OtpCountdown",props:{seconds:{defaultValue:null,description:"",name:"seconds",required:!0,type:{name:"number"}},resendText:{defaultValue:null,description:"",name:"resendText",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"((secondsLeft: number) => string) | undefined"}}}}}catch{}const L={resend:"Resend",resendText:"Resend code",submit:"Authorize and continue",title:"We will send you a 6-digit code to your associated phone number so you can continue with your request.",contact:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Problems with your digital token? Contact us"})," ",e.jsx("a",{href:"https://www.modyo.com",className:"link-primary text-nowrap",target:"_blank",rel:"noreferrer",children:"Contact us"})]})};function f({className:t,action:o,isLoading:s,otpSize:n=6,texts:a=L,seconds:u=15}){const[c,i]=r.useState(""),[g,l]=r.useState(!1),k=r.useCallback(async()=>{if(c.length<n){l(!0);return}l(!1),await o()},[c.length,o,n]);return e.jsxs("div",{className:t,children:[e.jsx("p",{children:a.title}),e.jsxs("div",{className:"d-flex flex-column gap-6 pb-4 px-3",children:[e.jsxs("div",{className:"d-flex flex-column gap-6",children:[e.jsx(I,{className:"modal-otp-pin",characters:n,onChange:x=>i(x),invalid:g&&c.length<n,placeholder:"0"}),e.jsx(h,{seconds:u,resendText:a.resend})]}),e.jsx("hr",{className:"m-0"}),e.jsxs("div",{className:"d-flex flex-column flex-lg-row gap-4 align-items-center",children:[e.jsx(S,{text:a.submit,onClick:()=>{k().catch(x=>{console.error("Error in DOtp action:",x)})},loading:s}),e.jsx("p",{className:"small ms-lg-auto mb-0",children:a.contact})]})]})]})}try{f.displayName="DOtp",f.__docgenInfo={description:"",displayName:"DOtp",props:{action:{defaultValue:null,description:"",name:"action",required:!0,type:{name:"() => void | Promise<void>"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},otpSize:{defaultValue:{value:"6"},description:"",name:"otpSize",required:!1,type:{name:"number | undefined"}},seconds:{defaultValue:{value:"15"},description:"",name:"seconds",required:!1,type:{name:"number | undefined"}},texts:{defaultValue:{value:`{
  resend: 'Resend',
  resendText: 'Resend code',
  submit: 'Authorize and continue',
  title: 'We will send you a 6-digit code to your associated phone number so you can continue with your request.',
  contact: (
    <>
      <span>Problems with your digital token? Contact us</span>
      {' '}
      <a
        href="https://www.modyo.com"
        className="link-primary text-nowrap"
        target="_blank"
        rel="noreferrer"
      >
        Contact us
      </a>
    </>
  ),
}`},description:"",name:"texts",required:!1,type:{name:"{ submit?: string | undefined; resend?: string | undefined; title?: string | undefined; contact?: ReactNode; resendText?: string | undefined; } | undefined"}}}}}catch{}const $={title:"Design System/Components/Otp",component:f,parameters:{docs:{description:{component:`
**DOtp** is a reusable One-Time Password (OTP) component for secure authentication flows.
It includes:
- A configurable PIN input.
- Countdown timer with resend action.
- Submit button with async handling.
- Customizable texts and layout.

Ideal for **banking**, **insurance**, and **financial** applications.
        `}}},argTypes:{action:{description:"Function called when submitting the OTP.",control:!1},isLoading:{control:"boolean",description:"Shows a loading spinner on the button."},otpSize:{control:{type:"number",min:4,max:8},description:"Number of digits in the OTP input."},seconds:{control:{type:"number",min:5,max:60},description:"Countdown seconds before resend becomes available."},texts:{control:"object",description:"Customizable texts for labels, buttons, and messages."},className:{control:"text",description:"Custom classes"}},tags:["autodocs"]};function d(t){const[o,s]=r.useState(!1);return e.jsx(w,{children:e.jsx(w.Body,{children:e.jsx(f,{isLoading:o,...t,action:async()=>{s(!0),await new Promise(n=>setTimeout(()=>{alert("OTP submitted"),s(!1),n(!0)},1e3))}})})})}const m={render:d,args:{}},p={render:d,args:{seconds:30,otpSize:4,texts:{title:"We’ve sent a 4-digit code to your registered email address.",resend:"Send again",resendText:"Request new code",submit:"Verify and continue",contact:e.jsxs(e.Fragment,{children:["Having issues?"," ",e.jsx("a",{href:"https://www.modyo.com",className:"link-primary text-nowrap",target:"_blank",rel:"noreferrer",children:"Contact support"})]})}}};var b,C,_;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`function Template(args: PropsOtp) {
  const [isLoading, setIsLoading] = useState(false);
  return <DCard>
      <DCard.Body>
        <DOtp isLoading={isLoading} {...args} action={async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(() => {
          alert('OTP submitted');
          setIsLoading(false);
          resolve(true);
        }, 1000));
      }} />
      </DCard.Body>
    </DCard>;
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var v,T,j;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(j=(T=m.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var N,D,O;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    seconds: 30,
    otpSize: 4,
    texts: {
      title: 'We’ve sent a 4-digit code to your registered email address.',
      resend: 'Send again',
      resendText: 'Request new code',
      submit: 'Verify and continue',
      contact: <>
          Having issues?
          {' '}
          <a href="https://www.modyo.com" className="link-primary text-nowrap" target="_blank" rel="noreferrer">
            Contact support
          </a>
        </>
    }
  }
}`,...(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const G=["Template","Default","CustomTexts"];export{p as CustomTexts,m as Default,d as Template,G as __namedExportsOrder,$ as default};
