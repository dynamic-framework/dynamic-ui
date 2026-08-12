import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as j}from"./index-DPR1f7NX.js";import{M as b,c,U as l}from"./blocks-BvZSuxJt.js";import{r as p}from"./iframe-CHeqVsUI.js";import{b as y,u as m,a as f}from"./useScreenshotWebShare-8IH-M1fQ.js";import{D as a}from"./DButton-BGTbUgzt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";import"./index-9xGy8ok_.js";import"./DIcon-C9QpqnTB.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DWQi1yBD.js";import"./DContext-I2P6eEmu.js";function v(){const{shareRef:s,share:n}=m(),{downloadRef:t,download:o}=f(),[r,d]=p.useState(""),g=i=>{s.current=i,t.current=i},h=i=>()=>{i().catch(u=>{const w=u instanceof Error?u.message:"Something went wrong";d(w)})};return e.jsxs("div",{className:"d-flex flex-column gap-3",style:{maxWidth:"360px"},children:[e.jsxs("div",{ref:g,className:"p-4 border rounded text-center",children:[e.jsx("h5",{className:"mb-1",children:"Payment Successful"}),e.jsx("p",{className:"text-muted mb-0",children:"$125.00"})]}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx(a,{text:"Share",iconStart:"Share2",variant:"outline",size:"sm",onClick:h(n)}),e.jsx(a,{text:"Download",iconStart:"Download",variant:"outline",size:"sm",onClick:h(o)})]}),r&&e.jsx("p",{className:"text-danger small mb-0",children:r})]})}function S({innerRef:s}){return e.jsxs("div",{ref:s,className:"p-4 border rounded text-center",children:[e.jsx("h5",{className:"mb-1",children:"Registration Complete"}),e.jsx("p",{className:"text-muted mb-0",children:"Welcome aboard!"})]})}function D({onShare:s,onDownload:n}){return e.jsxs("div",{className:"d-flex gap-2 justify-content-end",children:[e.jsx(a,{text:"Share",variant:"outline",size:"sm",onClick:s}),e.jsx(a,{text:"Download",variant:"outline",size:"sm",onClick:n})]})}function k(){const{shareRef:s,share:n}=m(),{downloadRef:t,download:o}=f(),r=d=>{s.current=d,t.current=d};return e.jsxs("div",{className:"d-flex flex-column gap-3",style:{maxWidth:"360px"},children:[e.jsx(S,{innerRef:r}),e.jsx("hr",{className:"my-0"}),e.jsx(D,{onShare:()=>{n().catch(()=>{})},onDownload:()=>{o().catch(()=>{})}})]})}function R(){const{clipRef:s,takeBlob:n}=y(),[t,o]=p.useState(""),r=async()=>{try{const d=await n("image/png");o(`Ready to upload (${Math.round(d.size/1024)} KB)`)}catch{o("Could not capture the voucher")}};return e.jsxs("div",{className:"d-flex flex-column gap-3",style:{maxWidth:"360px"},children:[e.jsxs("div",{ref:s,className:"p-4 border rounded text-center",children:[e.jsx("h5",{className:"mb-1",children:"Invoice #1024"}),e.jsx("p",{className:"text-muted mb-0",children:"$980.00"})]}),e.jsx(a,{text:"Upload copy",variant:"outline",size:"sm",onClick:()=>{r().catch(()=>{})}}),t&&e.jsx("p",{className:"text-muted small mb-0",children:t})]})}function x(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...j(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Design System/Hooks/useScreenshot"}),`
`,e.jsx(n.h1,{id:"usescreenshot--usescreenshotdownload--usescreenshotwebshare",children:"useScreenshot / useScreenshotDownload / useScreenshotWebShare"}),`
`,e.jsxs(n.p,{children:["These are the same hooks that power ",e.jsx(n.code,{children:"DVoucher"}),"'s ",e.jsx(n.strong,{children:"download"})," and ",e.jsx(n.strong,{children:"share"}),` buttons, exported so
you can build a fully custom layout: place the action buttons wherever you need, and capture only
the DOM node that should look like a voucher/receipt.`]}),`
`,e.jsxs(n.p,{children:["They rely on ",e.jsx(n.a,{href:"https://html2canvas.hertzen.com/",rel:"nofollow",children:e.jsx(n.code,{children:"html2canvas"})})," to rasterize a DOM node into an image."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"️-why-you-may-need-this-instead-of-dvouchers-built-in-buttons",children:["⚠️ Why you may need this instead of ",e.jsx(n.code,{children:"DVoucher"}),"'s built-in buttons"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"DVoucher"})," renders its share/download buttons ",e.jsx(n.strong,{children:"inside"}),` the same container it captures, because it
attaches `,e.jsx(n.code,{children:"shareRef"}),"/",e.jsx(n.code,{children:"downloadRef"})," to its root element. That means:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The buttons themselves are part of the generated image/screenshot."}),`
`,e.jsx(n.li,{children:`The buttons can't be moved outside the voucher card (e.g. into a sticky footer, a modal footer,
or a separate toolbar) without re-implementing the capture logic.`}),`
`]}),`
`,e.jsxs(n.p,{children:["Using these hooks directly, ",e.jsx(n.strong,{children:"you"}),` decide which node is captured (ideally only the printable
voucher content) and where the trigger buttons live.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["💡 If you're building your custom actions around ",e.jsx(n.code,{children:"DVoucher"}),` itself (instead of a fully custom
layout), set its `,e.jsx(n.code,{children:"hideActions"})," prop to ",e.jsx(n.code,{children:"true"}),` to hide the built-in share/download buttons and
footer — it defaults to `,e.jsx(n.code,{children:"false"}),", so existing usages keep working unchanged."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usescreenshot",children:e.jsx(n.code,{children:"useScreenshot"})}),`
`,e.jsxs(n.p,{children:["The base hook. ",e.jsx(n.code,{children:"useScreenshotDownload"})," and ",e.jsx(n.code,{children:"useScreenshotWebShare"})," are built on top of it."]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"clipRef"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"RefObject<HTMLDivElement | null>"})}),e.jsx(n.td,{children:"Attach to the DOM node you want to rasterize."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"takeBlob"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(type?: string) => Promise<Blob>"})}),e.jsxs(n.td,{children:["Renders ",e.jsx(n.code,{children:"clipRef.current"})," with ",e.jsx(n.code,{children:"html2canvas"})," and resolves a ",e.jsx(n.code,{children:"Blob"})," (defaults to PNG). Rejects/throws if ",e.jsx(n.code,{children:"clipRef"})," isn't set."]})]})]})]}),`
`,e.jsx(n.h3,{id:"example-custom-action-eg-upload-instead-of-downloadshare",children:"Example: custom action (e.g. upload instead of download/share)"}),`
`,e.jsx(c,{code:`import { useState } from 'react';
import { DButton, useScreenshot } from '@dynamic-framework/ui-react';

function UploadVoucherExample() {
const { clipRef, takeBlob } = useScreenshot();
const [status, setStatus] = useState('');

const handleUpload = async () => {
  try {
    const blob = await takeBlob('image/png');
    const formData = new FormData();
    formData.append('file', blob, 'voucher.png');
    await fetch('/api/vouchers/upload', { method: 'POST', body: formData });
    setStatus('Uploaded!');
  } catch {
    setStatus('Could not capture the voucher');
  }
};

return (
  <div>
    {/* Only this node is captured, the button below is not part of the image */}
    <div ref={clipRef} className="p-4 border rounded">
      <h5>Invoice #1024</h5>
      <p>$980.00</p>
    </div>
    <DButton text="Upload copy" onClick={handleUpload} />
    {status && <p>{status}</p>}
  </div>
);
}`,language:"tsx",dark:!0}),`
`,e.jsx(l,{children:e.jsx(R,{})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usescreenshotdownload",children:e.jsx(n.code,{children:"useScreenshotDownload"})}),`
`,e.jsx(n.h3,{id:"returns-1",children:"Returns"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"downloadRef"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"RefObject<HTMLDivElement | null>"})}),e.jsxs(n.td,{children:["Same as ",e.jsx(n.code,{children:"clipRef"}),", attach it to the node to capture."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"download"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(fileName?: string) => Promise<void>"})}),e.jsxs(n.td,{children:["Captures the node and triggers a browser download. ",e.jsx(n.code,{children:"fileName"})," defaults to ",e.jsx(n.code,{children:"'voucher'"}),"."]})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-file-name",children:"Custom file name"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fileName"})," is only the ",e.jsx(n.strong,{children:"base name"})," — ",e.jsx(n.code,{children:"download"})," always appends the ",e.jsx(n.code,{children:".jpg"}),` extension itself, so
the downloaded file stays a valid image no matter what you pass. It never overrides, replaces, or
validates an extension you may include; it's just concatenated as-is:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"download()"})," → ",e.jsx(n.code,{children:"voucher.jpg"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"download('receipt-2025-01')"})," → ",e.jsx(n.code,{children:"receipt-2025-01.jpg"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"download('receipt.png')"})," → ",e.jsx(n.code,{children:"receipt.png.jpg"})," (the ",e.jsx(n.code,{children:".png"})," you typed is kept as part of the name, not treated as a real extension)"]}),`
`]}),`
`,e.jsx(c,{code:`const { download } = useScreenshotDownload();

// Falls back to "voucher.jpg"
await download();

// -> "receipt-1024.jpg"
await download(\`receipt-\${transactionId}\`);`,language:"tsx",dark:!0}),`
`,e.jsx(n.h2,{id:"usescreenshotwebshare",children:e.jsx(n.code,{children:"useScreenshotWebShare"})}),`
`,e.jsx(n.h3,{id:"returns-2",children:"Returns"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"shareRef"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"RefObject<HTMLDivElement | null>"})}),e.jsxs(n.td,{children:["Same as ",e.jsx(n.code,{children:"clipRef"}),", attach it to the node to capture."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"share"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(fileName?: string) => Promise<void>"})}),e.jsxs(n.td,{children:["Captures the node and calls the ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share",rel:"nofollow",children:"Web Share API"})," with the image file. ",e.jsx(n.code,{children:"fileName"})," defaults to ",e.jsx(n.code,{children:"'voucher'"}),". Falls back to ",e.jsx(n.code,{children:"window.print()"})," when ",e.jsx(n.code,{children:"navigator.canShare"})," with files isn't supported."]})]})]})]}),`
`,e.jsx(n.h3,{id:"custom-file-name-1",children:"Custom file name"}),`
`,e.jsxs(n.p,{children:["Same rule as ",e.jsx(n.code,{children:"download"}),": ",e.jsx(n.code,{children:"fileName"})," is the base name only, ",e.jsx(n.code,{children:"share"})," always appends ",e.jsx(n.code,{children:".jpeg"})," itself:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"share()"})," → ",e.jsx(n.code,{children:"voucher.jpeg"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"share('receipt-2025-01')"})," → ",e.jsx(n.code,{children:"receipt-2025-01.jpeg"})]}),`
`]}),`
`,e.jsx(c,{code:`const { share } = useScreenshotWebShare();

// Falls back to "voucher.jpeg"
await share();

// -> "receipt-1024.jpeg"
await share(\`receipt-\${transactionId}\`);`,language:"tsx",dark:!0}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Both hooks manage their ",e.jsx(n.strong,{children:"own"})," internal ref (each calls ",e.jsx(n.code,{children:"useScreenshot"}),` independently). If you
want share and download to capture the exact same node, assign `,e.jsx(n.strong,{children:"both"})," ",e.jsx(n.code,{children:"shareRef.current"}),` and
`,e.jsx(n.code,{children:"downloadRef.current"})," in the same ref callback, as shown below."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"buttons-outside-the-captured-element",children:"Buttons outside the captured element"}),`
`,e.jsx(n.p,{children:`The captured node only wraps the voucher-like content; the action buttons sit outside of it, so
they never appear in the generated image.`}),`
`,e.jsx(c,{code:`import { useState } from 'react';
import {
DButton,
useScreenshotDownload,
useScreenshotWebShare,
} from '@dynamic-framework/ui-react';

function CustomVoucher() {
const { shareRef, share } = useScreenshotWebShare();
const { downloadRef, download } = useScreenshotDownload();
const [error, setError] = useState('');

// Both hooks need to point to the same DOM node.
const setVoucherRef = (el: HTMLDivElement | null) => {
  shareRef.current = el;
  downloadRef.current = el;
};

const handleAction = (action: () => Promise<void>) => () => {
  action().catch((err: unknown) => {
    const message = err instanceof Error ? err.message : 'Something went wrong';
    setError(message);
  });
};

return (
  <div>
    {/* Captured element: only the voucher-like content, no buttons inside */}
    <div ref={setVoucherRef} className="p-4 border rounded text-center">
      <h5>Payment Successful</h5>
      <p>$125.00</p>
    </div>

    {/* Buttons live outside the captured node */}
    <div className="d-flex gap-2">
      <DButton text="Share" iconStart="Share2" onClick={handleAction(share)} />
      <DButton text="Download" iconStart="Download" onClick={handleAction(download)} />
    </div>

    {error && <p className="text-danger">{error}</p>}
  </div>
);
}`,language:"tsx",dark:!0}),`
`,e.jsx(l,{children:e.jsx(v,{})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"fully-decoupled-layout",children:"Fully decoupled layout"}),`
`,e.jsxs(n.p,{children:[`Content and action buttons can live in entirely separate components — pass the ref callback and
the `,e.jsx(n.code,{children:"share"}),"/",e.jsx(n.code,{children:"download"}),` handlers down as props, or lift them up via context if the buttons live in
an unrelated part of the tree (e.g. a page footer or a modal's footer slot).`]}),`
`,e.jsx(c,{code:`function VoucherContent({ innerRef }: { innerRef: (el: HTMLDivElement | null) => void }) {
return (
  <div ref={innerRef} className="p-4 border rounded text-center">
    <h5>Registration Complete</h5>
    <p>Welcome aboard!</p>
  </div>
);
}

function VoucherActions({ onShare, onDownload }: { onShare: () => void; onDownload: () => void }) {
return (
  <div className="d-flex gap-2 justify-content-end">
    <DButton text="Share" onClick={onShare} />
    <DButton text="Download" onClick={onDownload} />
  </div>
);
}

function DecoupledLayout() {
const { shareRef, share } = useScreenshotWebShare();
const { downloadRef, download } = useScreenshotDownload();

const setVoucherRef = (el: HTMLDivElement | null) => {
  shareRef.current = el;
  downloadRef.current = el;
};

return (
  <div>
    <VoucherContent innerRef={setVoucherRef} />
    <hr />
    <VoucherActions onShare={() => share()} onDownload={() => download()} />
  </div>
);
}`,language:"tsx",dark:!0}),`
`,e.jsx(l,{children:e.jsx(k,{})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tips",children:"Tips"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Capture only what you want to see in the image."}),` Attach the ref to the smallest wrapper that
represents the printable voucher, not to a container that also includes buttons or unrelated UI.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cross-origin images"})," inside the captured node need CORS enabled (",e.jsx(n.code,{children:"allowTaint"}),"/",e.jsx(n.code,{children:"useCORS"}),` are
already set to `,e.jsx(n.code,{children:"true"}),"), otherwise ",e.jsx(n.code,{children:"html2canvas"})," may render a blank/tainted area for them."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Errors are your responsibility to catch."})," ",e.jsx(n.code,{children:"download()"}),"/",e.jsx(n.code,{children:"share()"}),"/",e.jsx(n.code,{children:"takeBlob()"}),` reject/throw on
failure (e.g. missing ref, `,e.jsx(n.code,{children:"html2canvas"}),` failure, user cancelling the native share sheet on some
browsers) — always wrap calls in a `,e.jsx(n.code,{children:".catch()"}),"/",e.jsx(n.code,{children:"try...catch"}),", as ",e.jsx(n.code,{children:"DVoucher"}),"'s own ",e.jsx(n.code,{children:"onError"})," prop does."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"navigator.share"})," requires a user gesture"]})," and, on most browsers, a secure context (HTTPS)."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Don't include an extension in ",e.jsx(n.code,{children:"fileName"}),"."]})," ",e.jsx(n.code,{children:"download"}),"/",e.jsx(n.code,{children:"share"}),` always append their own
(`,e.jsx(n.code,{children:".jpg"}),"/",e.jsx(n.code,{children:".jpeg"}),`) so the file remains a valid, openable image — if you pass one anyway, it's kept
as literal text in the name (e.g. `,e.jsx(n.code,{children:'"receipt.png"'})," → ",e.jsx(n.code,{children:'"receipt.png.jpg"'}),"), not stripped or replaced."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Blank/whitespace ",e.jsx(n.code,{children:"fileName"})," falls back to ",e.jsx(n.code,{children:'"voucher"'})]}),`, so the file is never saved with just an
extension as its name (e.g. `,e.jsx(n.code,{children:'".jpg"'}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"see-more-examples",children:"See more examples"}),`
`,e.jsxs("div",{className:"alert d-flex align-items-start gap-3 p-4 rounded border border-primary-subtle bg-primary-subtle",role:"note","aria-label":"See more examples",children:[e.jsx("span",{className:"fs-4","aria-hidden":"true",children:"💡"}),e.jsxs("div",{children:[e.jsx("strong",{className:"d-block mb-1",children:"Looking for the ready-made component?"}),e.jsxs("span",{className:"text-secondary",children:["See ",e.jsx("a",{href:"/?path=/docs/design-system-components-voucher--docs",target:"_parent",children:e.jsx("strong",{children:"Components / Voucher"})})," for the default ",e.jsx(n.code,{children:"DVoucher"})," implementation using these same hooks."]})]})]})]})}function H(s={}){const{wrapper:n}={...j(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(x,{...s})}):x(s)}export{H as default};
