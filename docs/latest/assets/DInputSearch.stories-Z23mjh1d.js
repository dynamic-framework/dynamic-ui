import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./iframe-B_Y9M-l-.js";import{F as O}from"./DInput-GzlL9zxR.js";import{u as $}from"./useProvidedRefOrCreate-DDwsEK4g.js";import{D as G}from"./DDataStateWrapper-C4CzRxqy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-72Ch5-Y2.js";import"./DIcon-Db41hg1i.js";import"./index-BPJnJB5S.js";import"./config-7dXXkQRG.js";import"./useMediaBreakpointUp-C7_Y8Dh0.js";import"./DContext-CWByZeTV.js";import"./index-Cnk-UfrQ.js";import"./index-BwYFOMBQ.js";import"./DAlert-CjB79x-p.js";import"./DButton-CzgpYs-b.js";function M(t){return t??""}function D({debounceMs:t=300,onChange:f,onImmediateChange:r,value:s,defaultValue:c,placeholder:x="Search...",...V},y){const m=$(y),l=s!==void 0,n=e.useRef(f);n.current=f;const[d,i]=e.useState(M(l?s:c)),[o,p]=e.useState(null);e.useEffect(()=>{l&&i(M(s))},[l,s]);const I=e.useCallback(u=>{l||i(u),p(u),r==null||r(u)},[l,r]);return e.useEffect(()=>{var E;let u;return o!==null&&(t<=0?((E=n.current)==null||E.call(n,o),p(null)):u=window.setTimeout(()=>{var w;(w=n.current)==null||w.call(n,o),p(null)},t)),()=>{window.clearTimeout(u)}},[t,o]),a.jsx(O,{ref:m,...V,type:"search",value:d,onChange:I,placeholder:x})}const C=e.forwardRef(D);C.displayName="DInputSearch";try{D.displayName="DInputSearch",D.__docgenInfo={description:"",displayName:"DInputSearch",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"IconValue | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"IconValue | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},debounceMs:{defaultValue:null,description:"",name:"debounceMs",required:!1,type:{name:"number | undefined"}},onImmediateChange:{defaultValue:null,description:"",name:"onImmediateChange",required:!1,type:{name:"((value: string) => void) | undefined"}}}}}catch{}const q=["Life policy #1021","Auto policy #8842","Checking account #110-22","Savings account #220-91","Wire transfer #88A1","International transfer #IP-204","Claim reimbursement #R-778","Premium payment #P-0912","April statement","May statement"],ue={title:"Design System/Components/Input Search",component:C,tags:["autodocs"],parameters:{docs:{description:{component:"Search input built on top of DInput with built-in debounce. Ideal for list filtering and remote queries."}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},label:{control:"text",description:"Input label.",table:{category:"Content"}},placeholder:{control:"text",description:"Input placeholder.",table:{category:"Content"}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback",table:{category:"Content"}},debounceMs:{control:"number",description:"Debounce delay in milliseconds for onChange.",table:{category:"Behavior"}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},value:{control:!1,table:{category:"Controlled"}},defaultValue:{control:"text",table:{category:"Controlled"}},onChange:{action:"onChange (debounced)",description:"Emits debounced search value.",table:{category:"Events"}},onImmediateChange:{action:"onImmediateChange",description:"Emits each keystroke immediately.",table:{category:"Events"}}}},b={args:{label:"Search",placeholder:"Search policy, account, or transaction",debounceMs:300}},g={args:{id:"componentId2",label:"Search",placeholder:"Search policy, account, or transaction",debounceMs:300,hint:"Assistive text",invalid:!0}},h={args:{id:"componentId3",label:"Search",placeholder:"Search policy, account, or transaction",debounceMs:300,hint:"Assistive text",valid:!0}},S={args:{id:"componentId4",label:"Search",placeholder:"Search policy, account, or transaction",debounceMs:300,disabled:!0}},v={args:{label:"Search records",placeholder:"e.g. policy, account, transaction",debounceMs:400},render:function(f){const[r,s]=e.useState(""),[c,x]=e.useState(""),[V,y]=e.useState(!1),[m,l]=e.useState(q);e.useEffect(()=>{let d=!0;y(!0);const i=window.setTimeout(()=>{if(!d)return;const o=c.trim().toLowerCase(),p=o?q.filter(I=>I.toLowerCase().includes(o)):q;l(p),y(!1)},700);return()=>{d=!1,window.clearTimeout(i)}},[c]);const n=e.useMemo(()=>`${m.length} result(s)`,[m.length]);return a.jsxs("div",{className:"d-flex flex-column gap-3",style:{maxWidth:"640px"},children:[a.jsx(C,{...f,value:r,onImmediateChange:s,onChange:x}),a.jsxs("div",{className:"small text-secondary",children:[a.jsx("strong",{children:"Immediate query:"})," ",r||"(empty)"," | ",a.jsx("strong",{children:"Debounced query:"})," ",c||"(empty)"]}),a.jsx(G,{isLoading:V,isError:!1,data:m,children:d=>a.jsxs("div",{children:[a.jsx("div",{className:"small text-secondary mb-2",children:n}),a.jsx("ul",{className:"list-group",children:d.map(i=>a.jsx("li",{className:"list-group-item",children:i},i))})]})})]})}};var L,R,A;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search policy, account, or transaction',
    debounceMs: 300
  }
}`,...(A=(R=b.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var N,T,F;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Search',
    placeholder: 'Search policy, account, or transaction',
    debounceMs: 300,
    hint: 'Assistive text',
    invalid: true
  }
}`,...(F=(T=g.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var Q,k,j;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Search',
    placeholder: 'Search policy, account, or transaction',
    debounceMs: 300,
    hint: 'Assistive text',
    valid: true
  }
}`,...(j=(k=h.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var P,_,z;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Search',
    placeholder: 'Search policy, account, or transaction',
    debounceMs: 300,
    disabled: true
  }
}`,...(z=(_=S.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var W,B,H;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Search records',
    placeholder: 'e.g. policy, account, transaction',
    debounceMs: 400
  },
  render: function Render(args) {
    const [rawQuery, setRawQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<string[]>(mockRecords);
    useEffect(() => {
      let active = true;
      setIsLoading(true);
      const timeoutId = window.setTimeout(() => {
        if (!active) return;
        const normalized = debouncedQuery.trim().toLowerCase();
        const nextResults = normalized ? mockRecords.filter(item => item.toLowerCase().includes(normalized)) : mockRecords;
        setResults(nextResults);
        setIsLoading(false);
      }, 700);
      return () => {
        active = false;
        window.clearTimeout(timeoutId);
      };
    }, [debouncedQuery]);
    const totalText = useMemo(() => \`\${results.length} result(s)\`, [results.length]);
    return <div className="d-flex flex-column gap-3" style={{
      maxWidth: '640px'
    }}>
        <DInputSearch {...args} value={rawQuery} onImmediateChange={setRawQuery} onChange={setDebouncedQuery} />

        <div className="small text-secondary">
          <strong>Immediate query:</strong>
          {' '}
          {rawQuery || '(empty)'}
          {' | '}
          <strong>Debounced query:</strong>
          {' '}
          {debouncedQuery || '(empty)'}
        </div>

        <DDataStateWrapper isLoading={isLoading} isError={false} data={results}>
          {items => <div>
              <div className="small text-secondary mb-2">{totalText}</div>
              <ul className="list-group">
                {items.map(item => <li key={item} className="list-group-item">
                    {item}
                  </li>)}
              </ul>
            </div>}
        </DDataStateWrapper>
      </div>;
  }
}`,...(H=(B=v.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const ce=["Default","Invalid","Valid","Disabled","DummyApiSearch"];export{b as Default,S as Disabled,v as DummyApiSearch,g as Invalid,h as Valid,ce as __namedExportsOrder,ue as default};
