import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as b}from"./blocks-Cnhr0fLk.js";import{D as g}from"./DBox-D6_EJ9Ew.js";/* empty css               */import{F as l}from"./DInput-CvrlzEXD.js";import{D as x}from"./DSelect-0EFb7upz.js";import{D as a}from"./DInputCheck-DYY_gZVQ.js";import{D as v}from"./DInputSwitch-W5QMUFTF.js";import{D as i}from"./DButton-BpgTujzP.js";import{a as n,D as s}from"./DListGroup-BwBDCfCN.js";import{D as N}from"./DBadge-DaZBgtNM.js";import{D as j}from"./DIcon-BoMGBcnT.js";import{D}from"./DButtonIcon-Durjnvtj.js";import"./iframe-BXnL47m3.js";import"./index-DZjfDL5h.js";import"./index-o-ysMSLE.js";import"./index-DmzVN-XU.js";import"./useProvidedRefOrCreate-CzbI34tF.js";import"./hoist-non-react-statics.cjs-C-Qo8PK8.js";import"./floating-ui.dom-4_SsKeQW.js";import"./DContext-Bss0EfUR.js";import"./config-C3iYXcFk.js";function f(t){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .sbdocs-content {
            max-width: unset;
          }
        `}),e.jsx(b,{...t})]})}const A={title:"Patterns/Master Detail Patterns",component:g,parameters:{layout:"fullscreen",docs:{container:f,description:{component:"Examples of master detail patterns using Bootstrap grid classes."}}},tags:["autodocs"]},r={decorators:[t=>e.jsx("div",{className:"p-8",children:e.jsx(t,{})})],render:()=>e.jsxs("div",{className:"border rounded-2 overflow-hidden grid gap-0",children:[e.jsxs("div",{className:"g-col-12 g-col-lg-8 bg-white p-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-0",children:"User Details"}),e.jsx("p",{className:"text-muted mb-0",children:"Please fill out the form below to create your account."})]}),e.jsxs("form",{className:"grid gap-4",children:[e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"firstName",label:"First Name",placeholder:"Enter your first name"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"lastName",label:"Last Name",placeholder:"Enter your last name"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"email2",type:"email",label:"Email",placeholder:"Enter your email"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"phone",type:"tel",label:"Phone",placeholder:"Enter your phone number"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(x,{id:"country2",label:"Country",options:[{label:"Select a country",value:""},{label:"United States",value:"us"},{label:"Canada",value:"ca"},{label:"Mexico",value:"mx"}]})}),e.jsxs("div",{className:"g-col-12 g-col-lg-6",children:[e.jsx("label",{className:"form-label",htmlFor:"gender",children:"Gender"}),e.jsxs("div",{children:[e.jsx(a,{id:"genderMale",type:"radio",name:"gender",label:"Male",inline:!0}),e.jsx(a,{id:"genderFemale",type:"radio",name:"gender",label:"Female",inline:!0}),e.jsx(a,{id:"genderOther",type:"radio",name:"gender",label:"Other",inline:!0})]})]}),e.jsx("div",{className:"g-col-12",children:e.jsx(v,{id:"notifications",label:"Enable notifications"})}),e.jsxs("div",{className:"g-col-12",children:[e.jsx(i,{type:"submit",className:"me-2",text:"Submit"}),e.jsx(i,{type:"reset",variant:"outline",text:"Reset"})]})]})]}),e.jsxs("div",{className:"g-col-12 g-col-lg-4 border-start border-opacity-25",children:[e.jsxs("div",{className:"p-8",children:[e.jsx("h5",{className:"fw-semibold mb-4",children:"Details"}),e.jsxs(n,{flush:!0,children:[e.jsxs(s,{iconStart:"User",children:[e.jsx("span",{children:"Name: "}),e.jsx("strong",{children:"John Doe"})]}),e.jsxs(s,{iconStart:"Send",children:[e.jsx("span",{children:"Email: "}),e.jsx("strong",{children:"dHg7o@example.com"})]}),e.jsxs(s,{iconStart:"Smartphone",children:[e.jsx("span",{children:"Phone: "}),e.jsx("strong",{children:"(123) 456-7890"})]})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"p-8",children:[e.jsx("h5",{className:"mb-4 fw-semibold",children:"Info alert"}),e.jsx("p",{className:"text-muted",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ultricies turpis. Mauris commodo, est vitae tempus laoreet, justo augue scelerisque massa, vel commodo dui orci eu turpis"}),e.jsx(i,{variant:"outline",size:"sm",text:"Send to review",color:"primary"})]}),e.jsx("hr",{}),e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"d-flex justify-content-between mb-4",children:[e.jsx("h5",{className:"fw-semibold",children:"Status"}),e.jsx(N,{soft:!0,size:"sm",color:"warning",text:"Pending"})]}),e.jsxs(g,{className:"d-flex align-items-center",children:[e.jsx(j,{icon:"FileText",size:"1rem",className:"me-2 text-muted"}),e.jsx("span",{children:"Doc-name.pdf"}),e.jsx(D,{variant:"link",icon:"Download",size:"sm",className:"ms-auto"})]})]})]})]})},o={decorators:[t=>e.jsx("div",{className:"p-8",children:e.jsx(t,{})})],render:()=>e.jsxs("div",{className:"border rounded-2 overflow-hidden grid gap-0",children:[e.jsxs("div",{className:"g-col-12 g-col-lg-4 border-end border-opacity-25",children:[e.jsx("div",{children:e.jsxs(n,{className:"list-group-white",children:[e.jsxs(s,{iconEnd:"ChevronRight",as:"button",active:!0,children:[e.jsx("div",{children:"Home request issue #1"}),e.jsx("small",{className:"text-muted fw-normal",children:"Text lorem ipsum"})]}),e.jsxs(s,{iconEnd:"ChevronRight",as:"button",children:[e.jsx("div",{children:"Home request issue #2"}),e.jsx("small",{className:"text-muted fw-normal",children:"Text lorem ipsum"})]}),e.jsxs(s,{iconEnd:"ChevronRight",as:"button",children:[e.jsx("div",{children:"Home request issue #3"}),e.jsx("small",{className:"text-muted fw-normal",children:"Text lorem ipsum"})]}),e.jsxs(s,{iconEnd:"ChevronRight",as:"button",children:[e.jsx("div",{children:"Home request issue #4"}),e.jsx("small",{className:"text-muted fw-normal",children:"Text lorem ipsum"})]})]})}),e.jsxs("div",{className:"p-8",children:[e.jsx("h5",{className:"fw-semibold mb-4",children:"Details"}),e.jsxs(n,{flush:!0,children:[e.jsxs(s,{iconStart:"User",children:[e.jsx("span",{children:"Name: "}),e.jsx("strong",{children:"John Doe"})]}),e.jsxs(s,{iconStart:"Send",children:[e.jsx("span",{children:"Email: "}),e.jsx("strong",{children:"dHg7o@example.com"})]}),e.jsxs(s,{iconStart:"Smartphone",children:[e.jsx("span",{children:"Phone: "}),e.jsx("strong",{children:"(123) 456-7890"})]})]})]})]}),e.jsxs("div",{className:"g-col-12 g-col-lg-8 bg-white p-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-0",children:"User Details"}),e.jsx("p",{className:"text-muted mb-0",children:"Please fill out the form below to create your account."})]}),e.jsxs("form",{className:"grid gap-4",children:[e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"firstName",label:"First Name",placeholder:"Enter your first name"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"lastName",label:"Last Name",placeholder:"Enter your last name"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"email2",type:"email",label:"Email",placeholder:"Enter your email"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"phone",type:"tel",label:"Phone",placeholder:"Enter your phone number"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(x,{id:"country2",label:"Country",options:[{label:"Select a country",value:""},{label:"United States",value:"us"},{label:"Canada",value:"ca"},{label:"Mexico",value:"mx"}]})}),e.jsxs("div",{className:"g-col-12 g-col-lg-6",children:[e.jsx("label",{className:"form-label",htmlFor:"gender",children:"Gender"}),e.jsxs("div",{children:[e.jsx(a,{id:"genderMale",type:"radio",name:"gender",label:"Male",inline:!0}),e.jsx(a,{id:"genderFemale",type:"radio",name:"gender",label:"Female",inline:!0}),e.jsx(a,{id:"genderOther",type:"radio",name:"gender",label:"Other",inline:!0})]})]}),e.jsx("div",{className:"g-col-12",children:e.jsx(v,{id:"notifications",label:"Enable notifications"})}),e.jsxs("div",{className:"g-col-12",children:[e.jsx(i,{type:"submit",className:"me-2",text:"Submit"}),e.jsx(i,{type:"reset",variant:"outline",text:"Reset"})]})]})]})]})};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  decorators: [Story => <div className="p-8">
        <Story />
      </div>],
  render: () => <div className="border rounded-2 overflow-hidden grid gap-0">
      <div className="g-col-12 g-col-lg-8 bg-white p-8">
        <div className="mb-8">
          <h3 className="mb-0">User Details</h3>
          <p className="text-muted mb-0">Please fill out the form below to create your account.</p>
        </div>
        <form className="grid gap-4">
          <div className="g-col-12 g-col-lg-6">
            <DInput id="firstName" label="First Name" placeholder="Enter your first name" />
          </div>
          <div className="g-col-12 g-col-lg-6">
            <DInput id="lastName" label="Last Name" placeholder="Enter your last name" />
          </div>
          <div className="g-col-12 g-col-lg-6">
            <DInput id="email2" type="email" label="Email" placeholder="Enter your email" />
          </div>
          <div className="g-col-12 g-col-lg-6">
            <DInput id="phone" type="tel" label="Phone" placeholder="Enter your phone number" />
          </div>
          <div className="g-col-12 g-col-lg-6">
            <DSelect id="country2" label="Country" options={[{
            label: 'Select a country',
            value: ''
          }, {
            label: 'United States',
            value: 'us'
          }, {
            label: 'Canada',
            value: 'ca'
          }, {
            label: 'Mexico',
            value: 'mx'
          }]} />
          </div>
          <div className="g-col-12 g-col-lg-6">
            <label className="form-label" htmlFor="gender">Gender</label>
            <div>
              <DInputCheck id="genderMale" type="radio" name="gender" label="Male" inline />
              <DInputCheck id="genderFemale" type="radio" name="gender" label="Female" inline />
              <DInputCheck id="genderOther" type="radio" name="gender" label="Other" inline />
            </div>
          </div>
          <div className="g-col-12">
            <DInputSwitch id="notifications" label="Enable notifications" />
          </div>
          <div className="g-col-12">
            <DButton type="submit" className="me-2" text="Submit" />
            <DButton type="reset" variant="outline" text="Reset" />
          </div>
        </form>
      </div>
      <div className="g-col-12 g-col-lg-4 border-start border-opacity-25">
        <div className="p-8">
          <h5 className="fw-semibold mb-4">Details</h5>
          <DListGroup flush>
            <DListGroupItem iconStart="User">
              <span>Name: </span>
              <strong>John Doe</strong>
            </DListGroupItem>
            <DListGroupItem iconStart="Send">
              <span>Email: </span>
              <strong>dHg7o@example.com</strong>
            </DListGroupItem>
            <DListGroupItem iconStart="Smartphone">
              <span>Phone: </span>
              <strong>(123) 456-7890</strong>
            </DListGroupItem>
          </DListGroup>
        </div>
        <hr />
        <div className="p-8">
          <h5 className="mb-4 fw-semibold">Info alert</h5>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ultricies turpis. Mauris commodo, est vitae tempus laoreet, justo augue scelerisque massa, vel commodo dui orci eu turpis</p>
          <DButton variant="outline" size="sm" text="Send to review" color="primary" />
        </div>
        <hr />
        <div className="p-8">
          <div className="d-flex justify-content-between mb-4">
            <h5 className="fw-semibold">Status</h5>
            <DBadge soft size="sm" color="warning" text="Pending" />
          </div>
          <DBox className="d-flex align-items-center">
            <DIcon icon="FileText" size="1rem" className="me-2 text-muted" />
            <span>Doc-name.pdf</span>
            <DButtonIcon variant="link" icon="Download" size="sm" className="ms-auto" />
          </DBox>
        </div>
      </div>
    </div>
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [Story => <div className="p-8">
        <Story />
      </div>],
  render: () => <div className="border rounded-2 overflow-hidden grid gap-0">
      <div className="g-col-12 g-col-lg-4 border-end border-opacity-25">
        <div>
          <DListGroup className="list-group-white">
            <DListGroupItem iconEnd="ChevronRight" as="button" active>
              <div>Home request issue #1</div>
              <small className="text-muted fw-normal">Text lorem ipsum</small>
            </DListGroupItem>
            <DListGroupItem iconEnd="ChevronRight" as="button">
              <div>Home request issue #2</div>
              <small className="text-muted fw-normal">Text lorem ipsum</small>
            </DListGroupItem>
            <DListGroupItem iconEnd="ChevronRight" as="button">
              <div>Home request issue #3</div>
              <small className="text-muted fw-normal">Text lorem ipsum</small>
            </DListGroupItem>
            <DListGroupItem iconEnd="ChevronRight" as="button">
              <div>Home request issue #4</div>
              <small className="text-muted fw-normal">Text lorem ipsum</small>
            </DListGroupItem>
          </DListGroup>
        </div>
        <div className="p-8">
          <h5 className="fw-semibold mb-4">Details</h5>
          <DListGroup flush>
            <DListGroupItem iconStart="User">
              <span>Name: </span>
              <strong>John Doe</strong>
            </DListGroupItem>
            <DListGroupItem iconStart="Send">
              <span>Email: </span>
              <strong>dHg7o@example.com</strong>
            </DListGroupItem>
            <DListGroupItem iconStart="Smartphone">
              <span>Phone: </span>
              <strong>(123) 456-7890</strong>
            </DListGroupItem>
          </DListGroup>
        </div>
      </div>
      <div className="g-col-12 g-col-lg-8 bg-white p-8">
        <div className="mb-8">
          <h3 className="mb-0">User Details</h3>
          <p className="text-muted mb-0">Please fill out the form below to create your account.</p>
        </div>
        <form className="grid gap-4">
          <div className="g-col-12 g-col-lg-6">
            <DInput id="firstName" label="First Name" placeholder="Enter your first name" />
          </div>
          <div className="g-col-12 g-col-lg-6">
            <DInput id="lastName" label="Last Name" placeholder="Enter your last name" />
          </div>
          <div className="g-col-12 g-col-lg-6">
            <DInput id="email2" type="email" label="Email" placeholder="Enter your email" />
          </div>
          <div className="g-col-12 g-col-lg-6">
            <DInput id="phone" type="tel" label="Phone" placeholder="Enter your phone number" />
          </div>
          <div className="g-col-12 g-col-lg-6">
            <DSelect id="country2" label="Country" options={[{
            label: 'Select a country',
            value: ''
          }, {
            label: 'United States',
            value: 'us'
          }, {
            label: 'Canada',
            value: 'ca'
          }, {
            label: 'Mexico',
            value: 'mx'
          }]} />
          </div>
          <div className="g-col-12 g-col-lg-6">
            <label className="form-label" htmlFor="gender">Gender</label>
            <div>
              <DInputCheck id="genderMale" type="radio" name="gender" label="Male" inline />
              <DInputCheck id="genderFemale" type="radio" name="gender" label="Female" inline />
              <DInputCheck id="genderOther" type="radio" name="gender" label="Other" inline />
            </div>
          </div>
          <div className="g-col-12">
            <DInputSwitch id="notifications" label="Enable notifications" />
          </div>
          <div className="g-col-12">
            <DButton type="submit" className="me-2" text="Submit" />
            <DButton type="reset" variant="outline" text="Reset" />
          </div>
        </form>
      </div>
    </div>
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const K=["Basic","Menu"];export{r as Basic,o as Menu,K as __namedExportsOrder,A as default};
