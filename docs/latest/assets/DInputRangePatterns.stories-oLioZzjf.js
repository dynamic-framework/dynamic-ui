import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-uxYLpz5U.js";import{M}from"./Template-BYBmdpRq.js";import{D as S}from"./DBox-D9tABUbD.js";import{F as p}from"./DInputRange-CHyCRv_B.js";import{D as R}from"./DBadge-Buqp0ncy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CNIzdnjV.js";import"./blocks-B3JaxZiM.js";import"./index-D8qwz0et.js";import"./index-GUYGZJNd.js";import"./index-Bq_YOuQj.js";import"./useProvidedRefOrCreate-BgDkAXvb.js";import"./config-C3iYXcFk.js";import"./DIcon-BVWTdsDp.js";import"./useMediaBreakpointUp-OWnybX9T.js";import"./DContext-CxvW7UTG.js";const P={title:"Patterns/Input Range",component:S,parameters:{docs:{page:M,description:{component:"Real-world usage patterns for `DInputRange`: live value display, step markers, loan simulators, and more."}}},tags:["autodocs"]},o={parameters:{docs:{description:{story:"Controlled range that displays the current value as a live badge next to the label. Useful for settings like volume, brightness, or opacity."}}},render:function(){const[t,n]=u.useState(40);return e.jsxs("div",{style:{width:"400px"},className:"d-flex flex-column gap-2",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("span",{className:"form-label mb-0 fw-semibold",children:"Opacity"}),e.jsx("span",{className:"bg-gray-100 rounded p-1 text-gray-700 small",children:`${t}%`})]}),e.jsx(p,{id:"opacity-range",ariaLabel:"Opacity",min:0,max:100,value:t,onChange:r=>n(Number(r.target.value))}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("small",{className:"text-secondary",children:"0%"}),e.jsx("small",{className:"text-secondary",children:"100%"})]})]})}},m={parameters:{docs:{description:{story:"Discrete range with labeled step markers. Useful for risk levels, satisfaction ratings, or any finite set of options."}}},render:function(){const t=[{value:0,label:"None"},{value:25,label:"Low"},{value:50,label:"Medium"},{value:75,label:"High"},{value:100,label:"Critical"}],[n,r]=u.useState(25),s=t.find(a=>a.value===n),d={0:"secondary",25:"success",50:"info",75:"warning",100:"danger"};return e.jsxs("div",{style:{width:"400px"},className:"d-flex flex-column gap-3",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("span",{className:"form-label mb-0 fw-semibold",children:"Risk level"}),s&&e.jsx(R,{color:d[s.value]||"danger",text:s.label})]}),e.jsx(p,{id:"risk-range",ariaLabel:"Risk level",min:0,max:100,step:25,value:n,onChange:a=>r(Number(a.target.value))}),e.jsx("div",{className:"d-flex justify-content-between px-1",children:t.map(a=>e.jsx("small",{className:a.value===n?"fw-semibold text-primary":"text-secondary",children:a.label},a.value))})]})}},i=l=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(l),c={parameters:{docs:{description:{story:"Range used as a loan amount selector. The summary card below updates live showing the selected amount and an estimated monthly installment."}}},render:function(){const[s,d]=u.useState(1e4),a=Math.ceil(s/36);return e.jsxs("div",{style:{width:"420px"},className:"d-flex flex-column gap-2",children:[e.jsx(p,{label:"Loan amount",min:1e3,max:5e4,step:500,value:s,onChange:j=>d(Number(j.target.value))}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("small",{className:"text-secondary",children:i(1e3)}),e.jsx("small",{className:"text-secondary",children:i(5e4)})]}),e.jsx("div",{className:"card border-2 border-primary mt-2",children:e.jsxs("div",{className:"card-body d-flex flex-column align-items-center gap-1 py-4",children:[e.jsx("small",{className:"text-secondary text-uppercase fw-semibold ls-1",children:"Selected amount"}),e.jsx("span",{className:"display-6 fw-bold text-primary",children:i(s)}),e.jsx("hr",{className:"w-100 my-2"}),e.jsx("small",{className:"text-secondary",children:"Estimated monthly payment (36 months)"}),e.jsx("span",{className:"fs-4 fw-semibold",children:`${i(a)} / mo`})]})})]})}};var x,f,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Controlled range that displays the current value as a live badge next to the label. Useful for settings like volume, brightness, or opacity.'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState(40);
    return <div style={{
      width: '400px'
    }} className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between align-items-center">
          <span className="form-label mb-0 fw-semibold">Opacity</span>
          <span className="bg-gray-100 rounded p-1 text-gray-700 small">
            {\`\${value}%\`}
          </span>
        </div>
        <DInputRange id="opacity-range" ariaLabel="Opacity" min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} />
        <div className="d-flex justify-content-between">
          <small className="text-secondary">0%</small>
          <small className="text-secondary">100%</small>
        </div>
      </div>;
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,g,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Discrete range with labeled step markers. Useful for risk levels, satisfaction ratings, or any finite set of options.'
      }
    }
  },
  render: function Render() {
    const markers = [{
      value: 0,
      label: 'None'
    }, {
      value: 25,
      label: 'Low'
    }, {
      value: 50,
      label: 'Medium'
    }, {
      value: 75,
      label: 'High'
    }, {
      value: 100,
      label: 'Critical'
    }];
    const [value, setValue] = useState(25);
    const active = markers.find(m => m.value === value);
    const colorMap: Record<number, string> = {
      0: 'secondary',
      25: 'success',
      50: 'info',
      75: 'warning',
      100: 'danger'
    };
    return <div style={{
      width: '400px'
    }} className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-center">
          <span className="form-label mb-0 fw-semibold">Risk level</span>
          {active && <DBadge color={colorMap[active.value] || 'danger'} text={active.label} />}
        </div>
        <DInputRange id="risk-range" ariaLabel="Risk level" min={0} max={100} step={25} value={value} onChange={e => setValue(Number(e.target.value))} />
        <div className="d-flex justify-content-between px-1">
          {markers.map(m => <small key={m.value} className={m.value === value ? 'fw-semibold text-primary' : 'text-secondary'}>
              {m.label}
            </small>)}
        </div>
      </div>;
  }
}`,...(b=(g=m.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var N,h,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Range used as a loan amount selector. The summary card below updates live showing the selected amount and an estimated monthly installment.'
      }
    }
  },
  render: function Render() {
    const MIN = 1000;
    const MAX = 50000;
    const MONTHS = 36;
    const [amount, setAmount] = useState(10000);
    const monthly = Math.ceil(amount / MONTHS);
    return <div style={{
      width: '420px'
    }} className="d-flex flex-column gap-2">
        <DInputRange label="Loan amount" min={MIN} max={MAX} step={500} value={amount} onChange={e => setAmount(Number(e.target.value))} />
        <div className="d-flex justify-content-between">
          <small className="text-secondary">{formatCurrency(MIN)}</small>
          <small className="text-secondary">{formatCurrency(MAX)}</small>
        </div>

        <div className="card border-2 border-primary mt-2">
          <div className="card-body d-flex flex-column align-items-center gap-1 py-4">
            <small className="text-secondary text-uppercase fw-semibold ls-1">
              Selected amount
            </small>
            <span className="display-6 fw-bold text-primary">
              {formatCurrency(amount)}
            </span>
            <hr className="w-100 my-2" />
            <small className="text-secondary">
              {\`Estimated monthly payment (\${MONTHS} months)\`}
            </small>
            <span className="fs-4 fw-semibold">
              {\`\${formatCurrency(monthly)} / mo\`}
            </span>
          </div>
        </div>
      </div>;
  }
}`,...(w=(h=c.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const q=["LiveValueBadge","StepMarkers","LoanSimulator"];export{o as LiveValueBadge,c as LoanSimulator,m as StepMarkers,q as __namedExportsOrder,P as default};
