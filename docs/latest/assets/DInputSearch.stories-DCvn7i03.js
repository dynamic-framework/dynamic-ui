import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./iframe-vLNjGVop.js";import{F as Q}from"./DInput-CimCsfpA.js";import{u as M}from"./useProvidedRefOrCreate-8yhSHKFF.js";import{D as P}from"./DDataStateWrapper-CynHkBou.js";import"./preload-helper-Dp1pzeXC.js";import"./index-nyyuC_Uj.js";import"./DIcon-BaYjXWaB.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-56XFbS_3.js";import"./DContext-aUrSpq0p.js";import"./index-DFPG5GmN.js";import"./index-oOcxeWdd.js";import"./DAlert-DyShLHim.js";import"./DButton-k5jVOt40.js";function E(t){return t??""}function q({debounceMs:t=300,onChange:f,onImmediateChange:l,value:u,defaultValue:c,placeholder:S="Search...",...h},y){const m=M(y),r=u!==void 0,a=e.useRef(f);a.current=f;const[d,i]=e.useState(E(r?u:c)),[s,p]=e.useState(null);e.useEffect(()=>{r&&i(E(u))},[r,u]);const x=e.useCallback(o=>{r||i(o),p(o),l==null||l(o)},[r,l]);return e.useEffect(()=>{var I;let o;return s!==null&&(t<=0?((I=a.current)==null||I.call(a,s),p(null)):o=window.setTimeout(()=>{var C;(C=a.current)==null||C.call(a,s),p(null)},t)),()=>{window.clearTimeout(o)}},[t,s]),n.jsx(Q,{ref:m,...h,type:"search",value:d,onChange:x,placeholder:S})}const v=e.forwardRef(q);v.displayName="DInputSearch";try{q.displayName="DInputSearch",q.__docgenInfo={description:"",displayName:"DInputSearch",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"IconValue | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"IconValue | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean | undefined"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},debounceMs:{defaultValue:null,description:"",name:"debounceMs",required:!1,type:{name:"number | undefined"}},onImmediateChange:{defaultValue:null,description:"",name:"onImmediateChange",required:!1,type:{name:"((value: string) => void) | undefined"}}}}}catch{}const V=["Life policy #1021","Auto policy #8842","Checking account #110-22","Savings account #220-91","Wire transfer #88A1","International transfer #IP-204","Claim reimbursement #R-778","Premium payment #P-0912","April statement","May statement"],Y={title:"Design System/Components/Input Search",component:v,tags:["autodocs"],parameters:{docs:{description:{component:"Search input built on top of DInput with built-in debounce. Ideal for list filtering and remote queries."}}},argTypes:{label:{control:"text",description:"Input label.",table:{category:"Content"}},placeholder:{control:"text",description:"Input placeholder.",table:{category:"Content"}},debounceMs:{control:"number",description:"Debounce delay in milliseconds for onChange.",table:{category:"Behavior"}},value:{control:!1,table:{category:"Controlled"}},defaultValue:{control:"text",table:{category:"Controlled"}},onChange:{action:"onChange (debounced)",description:"Emits debounced search value.",table:{category:"Events"}},onImmediateChange:{action:"onImmediateChange",description:"Emits each keystroke immediately.",table:{category:"Events"}}}},g={args:{label:"Search",placeholder:"Search policy, account, or transaction",debounceMs:300}},b={args:{label:"Search records",placeholder:"e.g. policy, account, transaction",debounceMs:400},render:function(f){const[l,u]=e.useState(""),[c,S]=e.useState(""),[h,y]=e.useState(!1),[m,r]=e.useState(V);e.useEffect(()=>{let d=!0;y(!0);const i=window.setTimeout(()=>{if(!d)return;const s=c.trim().toLowerCase(),p=s?V.filter(x=>x.toLowerCase().includes(s)):V;r(p),y(!1)},700);return()=>{d=!1,window.clearTimeout(i)}},[c]);const a=e.useMemo(()=>`${m.length} result(s)`,[m.length]);return n.jsxs("div",{className:"d-flex flex-column gap-3",style:{maxWidth:"640px"},children:[n.jsx(v,{...f,value:l,onImmediateChange:u,onChange:S}),n.jsxs("div",{className:"small text-secondary",children:[n.jsx("strong",{children:"Immediate query:"})," ",l||"(empty)"," | ",n.jsx("strong",{children:"Debounced query:"})," ",c||"(empty)"]}),n.jsx(P,{isLoading:h,isError:!1,data:m,children:d=>n.jsxs("div",{children:[n.jsx("div",{className:"small text-secondary mb-2",children:a}),n.jsx("ul",{className:"list-group",children:d.map(i=>n.jsx("li",{className:"list-group-item",children:i},i))})]})})]})}};var D,w,R;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search policy, account, or transaction',
    debounceMs: 300
  }
}`,...(R=(w=g.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var L,N,F;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(N=b.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const Z=["Playground","DummyApiSearch"];export{b as DummyApiSearch,g as Playground,Z as __namedExportsOrder,Y as default};
