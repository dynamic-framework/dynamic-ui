import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./iframe-CHeqVsUI.js";import{D as T}from"./DButton-BGTbUgzt.js";import{D as k}from"./DInputPin-Ctg5ttHK.js";import{u as q}from"./useOtp-42j60N1g.js";import{D as m}from"./DCard-CwiAt_Wy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-9xGy8ok_.js";import"./DIcon-C9QpqnTB.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DWQi1yBD.js";import"./DContext-I2P6eEmu.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";import"./useCountdown-BwroRmHN.js";const L=t=>t>0?`Didn't get any code? Resend in: ${t}s`:"Didn't get any code?";function u({secondsLeft:t,restartCountdown:r,resendText:a,message:n}){return e.jsxs("div",{className:"d-otp-countdown",children:[e.jsx("p",{className:"d-otp-countdown-text",children:n?n(t):L(t)}),e.jsx(T,{text:a,variant:"link",className:"text-nowrap",disabled:t>0,onClick:r})]})}try{u.displayName="OtpCountdown",u.__docgenInfo={description:"",displayName:"OtpCountdown",props:{secondsLeft:{defaultValue:null,description:"",name:"secondsLeft",required:!0,type:{name:"number"}},restartCountdown:{defaultValue:null,description:"",name:"restartCountdown",required:!0,type:{name:"() => void"}},resendText:{defaultValue:null,description:"",name:"resendText",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"((secondsLeft: number) => string) | undefined"}}}}}catch{}const I={resend:"Resend",resendText:"Resend",submit:"Authorize and continue",title:"We will send you a 6-digit code to your associated phone number so you can continue with your request.",invalidCode:"Invalid code, please try again.",contact:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Problems with your digital token? Contact us"})," ",e.jsx("a",{href:"https://www.modyo.com",className:"link-primary text-nowrap",target:"_blank",rel:"noreferrer",children:"Contact us"})]})};function c({className:t,action:r,isLoading:a,otpSize:n=6,texts:o=I,seconds:j=15}){const{setOtp:N,invalid:p,submit:_,isLoading:D,secondsLeft:O,restartCountdown:P}=q({action:r,otpSize:n,seconds:j});return e.jsxs("div",{className:t,children:[e.jsx("p",{children:o.title}),e.jsxs("div",{className:"d-otp d-otp-content",children:[e.jsxs("div",{className:"d-otp-fields",children:[e.jsx(k,{className:"modal-otp-pin",characters:n,onChange:l=>N(l),invalid:p,hint:p?o.invalidCode:void 0,placeholder:"0"}),e.jsx(u,{secondsLeft:O,restartCountdown:P,resendText:o.resendText})]}),e.jsx("hr",{className:"d-otp-divider"}),e.jsxs("div",{className:"d-otp-footer",children:[e.jsx(T,{text:o.submit,onClick:()=>{_().catch(l=>{console.error("Error in DOtp action:",l)})},loading:a||D}),e.jsx("p",{className:"d-otp-contact",children:o.contact})]})]})]})}try{c.displayName="DOtp",c.__docgenInfo={description:"",displayName:"DOtp",props:{action:{defaultValue:null,description:"",name:"action",required:!0,type:{name:"() => void | Promise<void>"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},otpSize:{defaultValue:{value:"6"},description:"",name:"otpSize",required:!1,type:{name:"number | undefined"}},seconds:{defaultValue:{value:"15"},description:"",name:"seconds",required:!1,type:{name:"number | undefined"}},texts:{defaultValue:{value:`{
  resend: 'Resend',
  resendText: 'Resend',
  submit: 'Authorize and continue',
  title: 'We will send you a 6-digit code to your associated phone number so you can continue with your request.',
  invalidCode: 'Invalid code, please try again.',
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
}`},description:"",name:"texts",required:!1,type:{name:"{ submit?: string | undefined; resend?: string | undefined; title?: string | undefined; contact?: ReactNode; resendText?: string | undefined; invalidCode?: string | undefined; } | undefined"}}}}}catch{}const U={title:"Design System/Components/Otp",component:c,parameters:{docs:{description:{component:`
**DOtp** is a reusable One-Time Password (OTP) component for secure authentication flows.
It includes:
- A configurable PIN input.
- Countdown timer with resend action.
- Submit button with async handling.
- Customizable texts and layout.

Ideal for **banking**, **insurance**, and **financial** applications.
        `}}},argTypes:{action:{description:"Function called when submitting the OTP.",control:!1,table:{category:"Events"}},isLoading:{control:"boolean",description:"Shows a loading spinner on the button.",table:{category:"Behavior"}},otpSize:{control:{type:"number",min:4,max:8},description:"Number of digits in the OTP input.",table:{category:"Appearance"}},seconds:{control:{type:"number",min:5,max:60},description:"Countdown seconds before resend becomes available.",table:{category:"Behavior"}},texts:{control:"object",description:"Customizable texts for labels, buttons, and messages.",table:{category:"Content"}},className:{control:"text",description:"Custom classes",table:{category:"Appearance"}}},tags:["autodocs"]};function s(t){const[r,a]=S.useState(!1);return e.jsx(m,{children:e.jsx(m.Body,{children:e.jsx(c,{isLoading:r,...t,action:async()=>{a(!0),await new Promise(n=>setTimeout(()=>{alert("OTP submitted"),a(!1),n(!0)},1e3))}})})})}const i={render:s,args:{}},d={render:s,args:{seconds:30,otpSize:4,texts:{title:"We’ve sent a 4-digit code to your registered email address.",resend:"Send again",resendText:"Request new code",submit:"Verify and continue",contact:e.jsxs(e.Fragment,{children:["Having issues?"," ",e.jsx("a",{href:"https://www.modyo.com",className:"link-primary text-nowrap",target:"_blank",rel:"noreferrer",children:"Contact support"})]})}}};var g,f,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`function Template(args: PropsOtp) {
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
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,h,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,C,v;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(C=d.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const Y=["Template","Default","CustomTexts"];export{d as CustomTexts,i as Default,s as Template,Y as __namedExportsOrder,U as default};
