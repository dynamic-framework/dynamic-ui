import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as u}from"./index-DOE-a7Qz.js";import{M as m,k as x,U as p}from"./blocks-CRrI9CLz.js";import{r as l}from"./iframe-B_Y9M-l-.js";import{D as c}from"./DCard-MlWwPbFj.js";import{F as j}from"./DInput-GzlL9zxR.js";import{D as b}from"./DInputSwitch-tIkL7z87.js";import{D as f}from"./DButton-CzgpYs-b.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cnk-UfrQ.js";import"./index-BwYFOMBQ.js";import"./index-72Ch5-Y2.js";import"./DIcon-Db41hg1i.js";import"./index-BPJnJB5S.js";import"./config-7dXXkQRG.js";import"./useMediaBreakpointUp-C7_Y8Dh0.js";import"./DContext-CWByZeTV.js";import"./useProvidedRefOrCreate-DDwsEK4g.js";const g=/[\t\n\r]/g,v=/^[/\\]+/;function U(n,r){const s=n.trim().replace(g,"").replace(v,"");if(s==="#")return"#";const t=new URLSearchParams(Object.entries(r).map(([i,a])=>[i,String(a)])).toString();return s===""?t?`/?${t}`:"/":`${s.startsWith("#")?"":"/"}${s}${t?`?${t}`:""}`}const d={account_id:"42",tab:"movimientos"},y=[{label:"accounts",value:"accounts"},{label:"/accounts",value:"/accounts"},{label:"//accounts",value:"//accounts"},{label:"/\\evil.com",value:"/\\evil.com"},{label:"# (unconfigured liquid var)",value:"#"},{label:"#accounts",value:"#accounts"},{label:"(empty)",value:""}];function w(){const[n,r]=l.useState("accounts"),[s,t]=l.useState(!0),o=s?d:{};return e.jsxs(c,{children:[e.jsx(c.Header,{children:"buildUrl"}),e.jsxs(c.Body,{children:[e.jsx(j,{label:"path",value:n,onChange:r}),e.jsx(b,{className:"mt-3",label:`params: ${JSON.stringify(s?d:{})}`,checked:s,onChange:t}),e.jsx("pre",{className:"mt-3 mb-0",children:U(n,o)})]}),e.jsx(c.Footer,{className:"d-flex flex-wrap justify-content-end gap-2",children:y.map(({label:i,value:a})=>e.jsx(f,{size:"sm",variant:"outline",text:i,onClick:()=>r(a)},i))})]})}function R(){return e.jsx(w,{})}function h(n){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...u(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Design System/Utils/url/buildUrl"}),`
`,e.jsx(r.h1,{id:"buildurl",children:"buildUrl"}),`
`,e.jsxs(r.p,{children:["Builds an internal URL from a ",e.jsx(r.code,{children:"path"})," and a set of query ",e.jsx(r.code,{children:"params"}),", normalizing leading separators to prevent scheme-relative URLs (e.g. ",e.jsx(r.code,{children:"//evil.com"}),")."]}),`
`,e.jsxs(r.p,{children:["Useful when ",e.jsx(r.code,{children:"path"})," comes from a Liquid variable that may be unconfigured, in which case it resolves to the literal string ",e.jsx(r.code,{children:"'#'"})," — ",e.jsx(r.code,{children:"buildUrl"})," returns ",e.jsx(r.code,{children:"'#'"})," as-is in that case instead of building a broken URL."]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"path"})," (",e.jsx(r.code,{children:"string"}),"): The path to build the URL from. It is trimmed and every tab, line feed and carriage return is removed, then all leading separators are stripped: ",e.jsx(r.code,{children:"/accounts"}),", ",e.jsx(r.code,{children:"//accounts"}),", ",e.jsx(r.code,{children:"\\accounts"})," and ",e.jsx(r.code,{children:"/<TAB>/accounts"})," all become ",e.jsx(r.code,{children:"accounts"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"params"})," (",e.jsx(r.code,{children:"Record<string, string | number>"}),"): Key/value pairs serialized as the query string."]}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["⚠️ ",e.jsx(r.strong,{children:"Note:"})," a leading ",e.jsx(r.code,{children:"\\"})," is stripped just like a ",e.jsx(r.code,{children:"/"})," because browsers resolve them the same way (",e.jsx(r.code,{children:"/\\evil.com"})," resolves to ",e.jsx(r.code,{children:"https://evil.com/"}),"), and tabs/line feeds are removed because the URL parser ignores them, so they could otherwise hide a scheme-relative prefix."]}),`
`]}),`
`,e.jsx(r.h2,{id:"returns",children:"Returns"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["(",e.jsx(r.code,{children:"string"}),"): The resulting URL.",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"'#'"})," when ",e.jsx(r.code,{children:"path"})," normalizes to ",e.jsx(r.code,{children:"'#'"})," (",e.jsx(r.code,{children:"'#'"}),", ",e.jsx(r.code,{children:"'/#'"}),"), ignoring the params."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"'/'"})," when ",e.jsx(r.code,{children:"path"})," is empty and there are no params."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"'/?<query>'"})," when ",e.jsx(r.code,{children:"path"})," is empty and there are params."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"'<path>'"})," or ",e.jsx(r.code,{children:"'<path>?<query>'"})," when ",e.jsx(r.code,{children:"path"})," starts with ",e.jsx(r.code,{children:"#"}),", since a fragment must not be prefixed with ",e.jsx(r.code,{children:"/"})," (it would navigate away from the current document)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"'/<path>'"})," or ",e.jsx(r.code,{children:"'/<path>?<query>'"})," otherwise."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"example-of-use",children:"Example of use"}),`
`,e.jsx(x,{code:`
import { buildUrl } from '@dynamic-framework/ui-react';

buildUrl('accounts', { account_id: '42' }); // '/accounts?account_id=42'
buildUrl('//accounts', {}); // '/accounts'
buildUrl('/\\\\evil.com', {}); // '/evil.com'
buildUrl('#', { account_id: '42' }); // '#' (unconfigured Liquid var)
buildUrl('#accounts', { account_id: '42' }); // '#accounts?account_id=42'
buildUrl('', { tab: 'movimientos' }); // '/?tab=movimientos'
`,language:"tsx",dark:!0}),`
`,e.jsx(r.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsx(p,{children:e.jsx(R,{})})]})}function T(n={}){const{wrapper:r}={...u(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(h,{...n})}):h(n)}export{T as default};
