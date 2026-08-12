import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./index-9xGy8ok_.js";import{u as Z,a as ee}from"./useScreenshotWebShare-8IH-M1fQ.js";import{D as se}from"./DIcon-C9QpqnTB.js";import{D as y}from"./DButton-BGTbUgzt.js";import{D as ae}from"./DBox-Dp6lQ-Rf.js";import{D as te}from"./DContext-I2P6eEmu.js";import"./iframe-CHeqVsUI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DWQi1yBD.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";function p({amount:t,amountDetails:h,icon:s,title:z,onError:n,message:Y,downloadText:_="Download",shareText:F="Share",fileName:f="voucher",hideActions:H=!1,className:M,children:X}){const{shareRef:G,share:J}=Z(),{downloadRef:U,download:K}=ee(),L=()=>{J(f).catch(async a=>{n&&await n(a)}).catch(()=>{})},Q=()=>{K(f).catch(async a=>{n&&await n(a)}).catch(()=>{})},u={icon:"CircleCheckBig",color:"success",size:"2rem",hasCircle:!0},x=s===!1||s==null?null:typeof s=="string"?{...u,icon:s}:typeof s=="object"?{...u,...s}:u;return e.jsx("div",{className:N("d-voucher",M),ref:a=>{G.current=a,U.current=a},children:e.jsxs("div",{children:[e.jsxs("div",{className:"d-voucher-header",children:[x&&e.jsx(se,{...x}),e.jsxs("div",{className:"d-voucher-title-group",children:[e.jsx("h3",{className:"d-voucher-title",children:z}),e.jsx("p",{className:"d-voucher-message",children:Y})]})]}),t&&e.jsxs("div",{className:"d-voucher-amount",children:[e.jsx("div",{className:N("d-voucher-amount-value",{"d-voucher-amount-value-with-details":!!h}),children:t}),h]}),e.jsx("hr",{className:"d-voucher-divider"}),X,!H&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{className:"my-4"}),e.jsxs("div",{className:"d-voucher-footer",children:[e.jsx(y,{onClick:L,iconStart:"Share2",text:F,variant:"outline",size:"sm"}),e.jsx(y,{onClick:Q,iconStart:"Download",text:_,variant:"outline",size:"sm"})]})]})]})})}try{p.displayName="DVoucher",p.__docgenInfo={description:"",displayName:"DVoucher",props:{amount:{defaultValue:null,description:"",name:"amount",required:!1,type:{name:"string | undefined"}},amountDetails:{defaultValue:null,description:"",name:"amountDetails",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:'string | false | Partial<BaseProps & { icon: IconValue; color?: string | undefined; size?: string | Partial<Record<"xs" | "sm" | "lg" | "xl" | "xxl" | "md", string>> | undefined; ... 5 more ...; strokeWidth?: number | undefined; }> | null | undefined'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},downloadText:{defaultValue:{value:"Download"},description:"",name:"downloadText",required:!1,type:{name:"string | undefined"}},shareText:{defaultValue:{value:"Share"},description:"",name:"shareText",required:!1,type:{name:"string | undefined"}},fileName:{defaultValue:{value:"voucher"},description:"",name:"fileName",required:!1,type:{name:"string | undefined"}},hideActions:{defaultValue:{value:"false"},description:"",name:"hideActions",required:!1,type:{name:"boolean | undefined"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((err: Error) => void | Promise<void>) | undefined"}}}}}catch{}const ye={title:"Design System/Components/Voucher",component:p,parameters:{docs:{description:{component:`
**DVoucher** is a component designed to display transaction receipts, confirmations, or vouchers with download and share capabilities.

---

## 💡 Overview

The voucher component provides:
- Success/error state indicators with customizable icons
- Amount display with optional details
- Download and share functionality via screenshot
- Error handling for async operations
- Fully customizable content area

---

## 🎨 Features

- Icon customization: Accepts string name, object of DIcon props ({ icon, color, size, hasCircle }), or false/null to hide.
- Defaults: icon="CircleCheckBig", color="success", size="1rem", hasCircle=true.

- **Amount Display**: Optional amount with supporting details
- **Actions**: Built-in download and share buttons, with an optional "fileName" (base name only) for the generated image; the extension is always appended by the underlying hook so the file stays valid
- **hideActions**: Hides the built-in share/download buttons (defaults to false, fully backward compatible) so you can render your own custom actions elsewhere using the exported \`useScreenshotDownload\`/\`useScreenshotWebShare\` hooks
- **className**: Optional CSS class to style the voucher root container
- **Content Area**: Flexible children for additional information
- **Error Handling**: Optional error callback for failed operations
        `}}},decorators:[t=>e.jsx(te,{children:e.jsx(ae,{className:"p-8",style:{width:"700px",margin:"0 auto"},children:e.jsx(t,{})})})],argTypes:{icon:{control:"object",description:"Icon can be a string (name), an object of DIcon props ({ icon, color, size, hasCircle }), or false/null to hide",table:{category:"Icon"}},className:{control:"text",description:"Optional CSS class for the voucher root element",table:{category:"Appearance"}},title:{control:"text",description:"Main title of the voucher",table:{category:"Content"}},message:{control:"text",description:"Descriptive message",table:{category:"Content"}},amount:{control:"text",description:"Optional amount to display",table:{category:"Content"}},amountDetails:{control:"text",description:"Optional additional details for the amount",table:{category:"Content"}},downloadText:{control:"text",description:"Text for download button",table:{category:"Content"}},shareText:{control:"text",description:"Text for share button",table:{category:"Content"}},fileName:{control:"text",description:'Optional base file name for the generated image (no extension). The correct extension is always appended by the hook, e.g. "receipt" -> "receipt.jpg" / "receipt.jpeg"',table:{category:"Content",defaultValue:{summary:"voucher"}}},hideActions:{control:"boolean",description:"Hides the built-in share/download buttons and footer, for when you render your own custom actions elsewhere using the exported screenshot hooks",table:{category:"Content",defaultValue:{summary:"false"}}},onError:{action:"error",description:"Error handler for download/share failures",table:{category:"Events"}},children:{control:!1,table:{type:{summary:"ReactNode"},category:"Content"}}}},o={args:{icon:{icon:"CircleCheckBig",color:"success"},title:"Payment Successful",message:"Your transaction has been completed successfully",amount:"$125.00",downloadText:"Download",shareText:"Share",children:e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Transaction ID:"}),e.jsx("span",{className:"fw-medium",children:"TXN-123456789"})]}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Date:"}),e.jsx("span",{className:"fw-medium",children:"Nov 13, 2025"})]}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Payment Method:"}),e.jsx("span",{className:"fw-medium",children:"Credit Card ****1234"})]})]})}},c={args:{icon:{icon:"CircleCheckBig",color:"success"},title:"Payment Received",message:"Thank you for your payment",amount:"$250.00",amountDetails:e.jsxs("div",{className:"text-center text-muted small",children:[e.jsx("div",{children:"Subtotal: $225.00"}),e.jsx("div",{children:"Tax: $25.00"})]}),children:e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Invoice:"}),e.jsx("span",{className:"fw-medium",children:"INV-2025-001"})]}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Customer:"}),e.jsx("span",{className:"fw-medium",children:"John Doe"})]})]})}},i={args:{icon:{icon:"CircleX",color:"danger"},title:"Payment Failed",message:"We could not process your payment. Please try again.",children:e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Error Code:"}),e.jsx("span",{className:"fw-medium text-danger",children:"ERR-500"})]}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Attempted:"}),e.jsx("span",{className:"fw-medium",children:"Nov 13, 2025 15:45"})]})]})}},r={args:{icon:{icon:"AlertTriangle",color:"warning"},title:"Payment Pending",message:"Your payment is being processed. This may take a few minutes.",amount:"$99.99",children:e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Reference:"}),e.jsx("span",{className:"fw-medium",children:"REF-456789"})]}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Status:"}),e.jsx("span",{className:"text-muted",children:"Processing payment"})]})]})}},l={args:{icon:{icon:"CheckCircle2",color:"info"},title:"Registration Complete",message:"Welcome! Your account has been created successfully.",children:e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Username:"}),e.jsx("span",{className:"fw-medium",children:"johndoe"})]}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Email:"}),e.jsx("span",{className:"fw-medium",children:"john@example.com"})]}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Member Since:"}),e.jsx("span",{className:"fw-medium",children:"Nov 13, 2025"})]})]})}},d={args:{icon:{icon:"CircleCheckBig",color:"success"},title:"Receipt Generated",message:"Your receipt is ready",amount:"$1,234.56",downloadText:"Download Receipt",shareText:"Share Receipt",fileName:"receipt-ORD-2025-1234",children:e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Order Number:"}),e.jsx("span",{className:"fw-medium",children:"ORD-2025-1234"})]}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Merchant:"}),e.jsx("span",{className:"fw-medium",children:"Example Store"})]})]})}},m={parameters:{docs:{description:{story:"Set `hideActions` to hide the built-in share/download buttons and footer entirely.\nThis is meant to be combined with the exported `useScreenshotDownload`/`useScreenshotWebShare`\nhooks to render your own custom actions anywhere in your layout — see\n[Design System / Hooks / useScreenshot](/docs/design-system-hooks-usescreenshot--docs)\nfor concrete examples."}}},args:{icon:{icon:"CircleCheckBig",color:"success"},title:"Payment Successful",message:"Your transaction has been completed successfully",amount:"$125.00",hideActions:!0,children:e.jsx("div",{className:"d-flex flex-column gap-2",children:e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Transaction ID:"}),e.jsx("span",{className:"fw-medium",children:"TXN-123456789"})]})})}};var g,v,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: {
      icon: 'CircleCheckBig',
      color: 'success'
    },
    title: 'Payment Successful',
    message: 'Your transaction has been completed successfully',
    amount: '$125.00',
    downloadText: 'Download',
    shareText: 'Share',
    children: <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Transaction ID:</span>
          <span className="fw-medium">TXN-123456789</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Date:</span>
          <span className="fw-medium">Nov 13, 2025</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Payment Method:</span>
          <span className="fw-medium">Credit Card ****1234</span>
        </div>
      </div>
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,b,C;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: {
      icon: 'CircleCheckBig',
      color: 'success'
    },
    title: 'Payment Received',
    message: 'Thank you for your payment',
    amount: '$250.00',
    amountDetails: <div className="text-center text-muted small">
        <div>Subtotal: $225.00</div>
        <div>Tax: $25.00</div>
      </div>,
    children: <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Invoice:</span>
          <span className="fw-medium">INV-2025-001</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Customer:</span>
          <span className="fw-medium">John Doe</span>
        </div>
      </div>
  }
}`,...(C=(b=c.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var S,D,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: {
      icon: 'CircleX',
      color: 'danger'
    },
    title: 'Payment Failed',
    message: 'We could not process your payment. Please try again.',
    children: <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Error Code:</span>
          <span className="fw-medium text-danger">ERR-500</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Attempted:</span>
          <span className="fw-medium">Nov 13, 2025 15:45</span>
        </div>
      </div>
  }
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var k,R,P;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    icon: {
      icon: 'AlertTriangle',
      color: 'warning'
    },
    title: 'Payment Pending',
    message: 'Your payment is being processed. This may take a few minutes.',
    amount: '$99.99',
    children: <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Reference:</span>
          <span className="fw-medium">REF-456789</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Status:</span>
          <span className="text-muted">Processing payment</span>
        </div>
      </div>
  }
}`,...(P=(R=r.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var A,V,E;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    icon: {
      icon: 'CheckCircle2',
      color: 'info'
    },
    title: 'Registration Complete',
    message: 'Welcome! Your account has been created successfully.',
    children: <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Username:</span>
          <span className="fw-medium">johndoe</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Email:</span>
          <span className="fw-medium">john@example.com</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Member Since:</span>
          <span className="fw-medium">Nov 13, 2025</span>
        </div>
      </div>
  }
}`,...(E=(V=l.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var I,B,O;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: {
      icon: 'CircleCheckBig',
      color: 'success'
    },
    title: 'Receipt Generated',
    message: 'Your receipt is ready',
    amount: '$1,234.56',
    downloadText: 'Download Receipt',
    shareText: 'Share Receipt',
    fileName: 'receipt-ORD-2025-1234',
    children: <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Order Number:</span>
          <span className="fw-medium">ORD-2025-1234</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-muted">Merchant:</span>
          <span className="fw-medium">Example Store</span>
        </div>
      </div>
  }
}`,...(O=(B=d.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var W,$,q;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`Set \\\`hideActions\\\` to hide the built-in share/download buttons and footer entirely.
This is meant to be combined with the exported \\\`useScreenshotDownload\\\`/\\\`useScreenshotWebShare\\\`
hooks to render your own custom actions anywhere in your layout — see
[Design System / Hooks / useScreenshot](/docs/design-system-hooks-usescreenshot--docs)
for concrete examples.\`
      }
    }
  },
  args: {
    icon: {
      icon: 'CircleCheckBig',
      color: 'success'
    },
    title: 'Payment Successful',
    message: 'Your transaction has been completed successfully',
    amount: '$125.00',
    hideActions: true,
    children: <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <span className="text-muted">Transaction ID:</span>
          <span className="fw-medium">TXN-123456789</span>
        </div>
      </div>
  }
}`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const ge=["Default","WithAmountDetails","ErrorState","WarningState","WithoutAmount","CustomButtonText","HiddenActions"];export{d as CustomButtonText,o as Default,i as ErrorState,m as HiddenActions,r as WarningState,c as WithAmountDetails,l as WithoutAmount,ge as __namedExportsOrder,ye as default};
