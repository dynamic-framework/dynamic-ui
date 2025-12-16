import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import i from"./Template-BIw73DQg.js";import{D as m}from"./DBox-BhSR0-Li.js";import{D as s}from"./DIcon-CUc1gKJP.js";import{D as a}from"./DButton-BB2PN_l5.js";import"./index-CWn2SMy3.js";import"./iframe-kwwP_hxt.js";import"./blocks-DTpAqFUa.js";import"./index-M66j5VFs.js";import"./index-CwxkxyeD.js";import"./index-C3AGQSt6.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DR_KaXrr.js";import"./DContext-B3aiYoEN.js";const p=[{name:"Storage",free:"1 GB",basic:"10 GB",pro:"50 GB",enterprise:"Unlimited"},{name:"Users",free:"1",basic:"5",pro:"10",enterprise:"Unlimited"},{name:"Support",free:!1,basic:!0,pro:!0,enterprise:!0},{name:"24/7 Phone Support",free:!1,basic:!1,pro:!1,enterprise:!0}],k={title:"Patterns/Plan Comparator",parameters:{docs:{page:i,description:{component:`
This story showcases a plan comparator design, which can be used to compare different subscription plans or product tiers.
`}}},tags:["autodocs"]},r={render:()=>e.jsx(m,{children:e.jsxs("table",{className:"plan-comparator-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" "}),e.jsxs("th",{children:[e.jsx("h5",{className:"plan-title",children:"Free"}),e.jsx("p",{className:"plan-price",children:"$0/mo"})]}),e.jsxs("th",{children:[e.jsx("h5",{className:"plan-title",children:"Basic"}),e.jsx("p",{className:"plan-price",children:"$10/mo"})]}),e.jsxs("th",{className:"featured",children:[e.jsx("h5",{className:"plan-title",children:"Pro"}),e.jsx("p",{className:"plan-price",children:"$20/mo"})]}),e.jsxs("th",{children:[e.jsx("h5",{className:"plan-title",children:"Enterprise"}),e.jsx("p",{className:"plan-price",children:"$50/mo"})]})]})}),e.jsx("tbody",{children:p.map((t,n)=>e.jsxs("tr",{children:[e.jsx("td",{className:"feature-name",children:t.name}),e.jsx("td",{children:t.free?e.jsx(s,{size:"1rem",icon:"CheckCircle",className:"text-success"}):e.jsx(s,{icon:"X",className:"text-danger"})}),e.jsx("td",{children:t.basic?e.jsx(s,{size:"1rem",icon:"CheckCircle",className:"text-success"}):e.jsx(s,{icon:"X",className:"text-danger"})}),e.jsx("td",{children:t.pro?e.jsx(s,{size:"1rem",icon:"CheckCircle",className:"text-success"}):e.jsx(s,{icon:"X",className:"text-danger"})}),e.jsx("td",{children:t.enterprise?e.jsx(s,{size:"1rem",icon:"CheckCircle",className:"text-success"}):e.jsx(s,{icon:"X",className:"text-danger"})})]},n))}),e.jsx("tfoot",{children:e.jsxs("tr",{children:[e.jsx("td",{children:" "}),e.jsx("td",{children:e.jsx(a,{color:"primary",variant:"outline",className:"w-100",text:"Choose Plan"})}),e.jsx("td",{children:e.jsx(a,{color:"primary",variant:"outline",className:"w-100",text:"Choose Plan"})}),e.jsx("td",{children:e.jsx(a,{color:"primary",className:"w-100",text:"Choose Plan"})}),e.jsx("td",{children:e.jsx(a,{color:"primary",variant:"outline",className:"w-100",text:"Choose Plan"})})]})})]})})};var c,o,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <DBox>
      <table className="plan-comparator-table">
        <thead>
          <tr>
            <th>{' '}</th>
            <th>
              <h5 className="plan-title">Free</h5>
              <p className="plan-price">$0/mo</p>
            </th>
            <th>
              <h5 className="plan-title">Basic</h5>
              <p className="plan-price">$10/mo</p>
            </th>
            <th className="featured">
              <h5 className="plan-title">Pro</h5>
              <p className="plan-price">$20/mo</p>
            </th>
            <th>
              <h5 className="plan-title">Enterprise</h5>
              <p className="plan-price">$50/mo</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {fourPlanFeatures.map((feature, index) => <tr key={index}>
              <td className="feature-name">{feature.name}</td>
              <td>{feature.free ? <DIcon size="1rem" icon="CheckCircle" className="text-success" /> : <DIcon icon="X" className="text-danger" />}</td>
              <td>{feature.basic ? <DIcon size="1rem" icon="CheckCircle" className="text-success" /> : <DIcon icon="X" className="text-danger" />}</td>
              <td>{feature.pro ? <DIcon size="1rem" icon="CheckCircle" className="text-success" /> : <DIcon icon="X" className="text-danger" />}</td>
              <td>{feature.enterprise ? <DIcon size="1rem" icon="CheckCircle" className="text-success" /> : <DIcon icon="X" className="text-danger" />}</td>
            </tr>)}
        </tbody>
        <tfoot>
          <tr>
            <td>{' '}</td>
            <td>
              <DButton color="primary" variant="outline" className="w-100" text="Choose Plan" />
            </td>
            <td>
              <DButton color="primary" variant="outline" className="w-100" text="Choose Plan" />
            </td>
            <td>
              <DButton color="primary" className="w-100" text="Choose Plan" />
            </td>
            <td>
              <DButton color="primary" variant="outline" className="w-100" text="Choose Plan" />
            </td>
          </tr>
        </tfoot>
      </table>
    </DBox>
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const I=["FourPlans"];export{r as FourPlans,I as __namedExportsOrder,k as default};
