import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as s}from"./DBox-BpPg_yrE.js";/* empty css               */import{F as l}from"./DInput-CIaXhe2I.js";import{D as x}from"./DSelect-CYN0JfxU.js";import{D as W}from"./DInputSwitch-BwIbMKBG.js";import{D as t}from"./DInputCheck-B-T1ZWWB.js";import{D as a}from"./DButton-Bzy13lI_.js";import{F as J}from"./DInputPassword-BKWaXaVR.js";import{D as i}from"./DIcon-CvCEcTnV.js";import"./index-DjkKVd-P.js";import"./iframe-B_y6UB7Z.js";import"./useProvidedRefOrCreate-DERnvhoR.js";import"./hoist-non-react-statics.cjs-C-Qo8PK8.js";import"./index-uACc-hGT.js";import"./index-Bmp1N_eR.js";import"./floating-ui.dom-4_SsKeQW.js";import"./DContext-poyny3cD.js";import"./config-C3iYXcFk.js";const oe={title:"Patterns/Form Patterns",component:s,parameters:{docs:{description:{component:"Examples of form patterns using `DBox` and Bootstrap grid classes."}}},tags:["autodocs"]},o={render:()=>e.jsx(s,{className:"p-8",style:{width:"800px"},children:e.jsxs("form",{className:"grid gap-4",style:{"--bs-columns":"1"},children:[e.jsx("div",{className:"col-12",children:e.jsx(l,{id:"name",label:"Full Name",placeholder:"Enter your full name"})}),e.jsx("div",{className:"col-12",children:e.jsx(l,{id:"email",type:"email",label:"Email",placeholder:"Enter your email"})}),e.jsx("div",{className:"col-12",children:e.jsx(x,{id:"country",label:"Country",options:[{label:"Select a country",value:""},{label:"United States",value:"us"},{label:"Canada",value:"ca"},{label:"Mexico",value:"mx"}]})}),e.jsx("div",{className:"col-12",children:e.jsx(W,{id:"newsletter",label:"Subscribe to newsletter"})}),e.jsx("div",{className:"col-12",children:e.jsx(t,{id:"terms",type:"checkbox",label:"I agree to the terms and conditions"})}),e.jsx("div",{className:"col-12",children:e.jsx(a,{type:"submit",text:"Submit"})})]})})},d={render:()=>e.jsx(s,{className:"p-8",style:{width:"800px"},children:e.jsxs("form",{children:[e.jsxs("div",{className:"grid gap-3 mb-4",children:[e.jsx("label",{htmlFor:"inputEmail3",className:"g-col-sm-2 col-form-label",children:"Email"}),e.jsx("div",{className:"g-col-sm-10",children:e.jsx(l,{type:"email",id:"inputEmail3"})})]}),e.jsxs("div",{className:"grid gap-3 mb-4",children:[e.jsx("label",{htmlFor:"inputPassword3",className:"g-col-sm-2 col-form-label",children:"Password"}),e.jsx("div",{className:"g-col-sm-10",children:e.jsx(J,{})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"grid gap-3 mb-4",children:[e.jsx("label",{htmlFor:"address",className:"g-col-sm-2 col-form-label",children:"Address"}),e.jsx("div",{className:"g-col-sm-10",children:e.jsx(l,{id:"address"})})]}),e.jsxs("div",{className:"grid gap-3 mb-4",children:[e.jsx("label",{htmlFor:"address",className:"g-col-sm-2 col-form-label",children:"Phone"}),e.jsx("div",{className:"g-col-sm-10",children:e.jsx(l,{id:"phone"})})]}),e.jsx(a,{type:"submit",text:"Sign in"})]})})},c={render:()=>e.jsx(s,{className:"p-8",style:{width:"800px"},children:e.jsxs("form",{className:"grid gap-4",style:{"--bs-columns":"2"},children:[e.jsx("div",{children:e.jsx(l,{id:"firstName",label:"First Name",placeholder:"Enter your first name"})}),e.jsx("div",{children:e.jsx(l,{id:"lastName",label:"Last Name",placeholder:"Enter your last name"})}),e.jsx("div",{children:e.jsx(l,{id:"email2",type:"email",label:"Email",placeholder:"Enter your email"})}),e.jsx("div",{children:e.jsx(l,{id:"phone",type:"tel",label:"Phone",placeholder:"Enter your phone number"})}),e.jsx("div",{className:"col-12",children:e.jsx(x,{id:"country2",label:"Country",options:[{label:"Select a country",value:""},{label:"United States",value:"us"},{label:"Canada",value:"ca"},{label:"Mexico",value:"mx"}]})}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",htmlFor:"gender",children:"Gender"}),e.jsxs("div",{children:[e.jsx(t,{id:"genderMale",type:"radio",name:"gender",label:"Male",inline:!0}),e.jsx(t,{id:"genderFemale",type:"radio",name:"gender",label:"Female",inline:!0}),e.jsx(t,{id:"genderOther",type:"radio",name:"gender",label:"Other",inline:!0})]})]}),e.jsx("div",{className:"col-12",children:e.jsx(W,{id:"notifications",label:"Enable notifications"})}),e.jsx("div",{className:"col-12",children:e.jsx(t,{id:"terms2",type:"checkbox",label:"I agree to the terms and conditions"})}),e.jsxs("div",{className:"col-12",children:[e.jsx(a,{type:"submit",className:"me-2",text:"Submit"}),e.jsx(a,{type:"reset",variant:"outline",text:"Reset"})]})]})})},r={render:()=>e.jsx(s,{className:"p-8",style:{width:"800px"},children:e.jsxs("form",{children:[e.jsxs("fieldset",{className:"border p-4 rounded mb-8",children:[e.jsx("legend",{className:"float-none w-auto px-2",children:"Personal Information"}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsFirstName",label:"First Name",placeholder:"John"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsLastName",label:"Last Name",placeholder:"Doe"})}),e.jsx("div",{className:"g-col-12",children:e.jsx(l,{id:"fsEmail",type:"email",label:"Email",placeholder:"john.doe@example.com"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsPhone",type:"tel",label:"Phone Number",placeholder:"(123) 456-7890"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsDateOfBirth",type:"date",label:"Date of Birth"})})]})]}),e.jsxs("fieldset",{className:"col-12 border p-4 rounded mb-4",children:[e.jsx("legend",{className:"float-none w-auto px-2",children:"Address Information"}),e.jsxs("div",{className:"grid gap-3",style:{"--bs-columns":"1"},children:[e.jsx(l,{id:"fsAddress1",label:"Address Line 1",placeholder:"123 Main St"}),e.jsx(l,{id:"fsAddress2",label:"Address Line 2",placeholder:"Apartment, suite, unit, etc. (Optional)"}),e.jsx(l,{id:"fsCity",label:"City",placeholder:"Anytown"}),e.jsx(l,{id:"fsState",label:"State/Province",placeholder:"State"}),e.jsx(l,{id:"fsZip",label:"Zip/Postal Code",placeholder:"12345"}),e.jsx(x,{id:"fsCountry",label:"Country",options:[{label:"Select a country",value:""},{label:"United States",value:"us"},{label:"Canada",value:"ca"},{label:"Mexico",value:"mx"}]})]})]}),e.jsxs("div",{className:"g-col-12 mt-8",children:[e.jsx(a,{type:"submit",text:"Save Information",className:"me-2"}),e.jsx(a,{type:"reset",variant:"outline",text:"Clear Form"})]})]})})},m={render:()=>e.jsx(s,{className:"p-8",style:{width:"800px"},children:e.jsxs("form",{children:[e.jsxs("fieldset",{className:"mb-8",children:[e.jsxs("legend",{className:"d-flex fw-bold",children:[e.jsx(i,{icon:"User",size:"1rem",className:"me-2 text-muted"}),"Personal Information"]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsFirstName",label:"First Name",placeholder:"John"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsLastName",label:"Last Name",placeholder:"Doe"})}),e.jsx("div",{className:"g-col-12",children:e.jsx(l,{id:"fsEmail",type:"email",label:"Email",placeholder:"john.doe@example.com"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsPhone",type:"tel",label:"Phone Number",placeholder:"(123) 456-7890"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsDateOfBirth",type:"date",label:"Date of Birth"})})]})]}),e.jsxs("fieldset",{children:[e.jsxs("legend",{className:"d-flex fw-bold",children:[e.jsx(i,{icon:"Map",size:"1rem",className:"me-2 text-muted"}),"Address Information"]}),e.jsxs("div",{className:"grid gap-3",style:{"--bs-columns":"1"},children:[e.jsx(l,{id:"fsAddress1",label:"Address Line 1",placeholder:"123 Main St"}),e.jsx(l,{id:"fsAddress2",label:"Address Line 2",placeholder:"Apartment, suite, unit, etc. (Optional)"}),e.jsx(l,{id:"fsCity",label:"City",placeholder:"Anytown"}),e.jsx(l,{id:"fsState",label:"State/Province",placeholder:"State"}),e.jsx(l,{id:"fsZip",label:"Zip/Postal Code",placeholder:"12345"}),e.jsx(x,{id:"fsCountry",label:"Country",options:[{label:"Select a country",value:""},{label:"United States",value:"us"},{label:"Canada",value:"ca"},{label:"Mexico",value:"mx"}]})]})]}),e.jsxs("div",{className:"g-col-12 mt-8",children:[e.jsx(a,{type:"submit",text:"Save Information",className:"me-2"}),e.jsx(a,{type:"reset",variant:"outline",text:"Clear Form"})]})]})})},n={render:()=>e.jsxs(s,{style:{width:"800px"},className:"grid gap-2 p-0 overflow-hidden",children:[e.jsx("div",{className:"d-none g-col-4 d-lg-block",children:e.jsx("div",{className:"bg-primary text-white h-100 position-relative",children:e.jsxs("div",{className:"bottom-0 end-0 p-8 text-end position-absolute",children:[e.jsx("h5",{children:"Welcome Back"}),e.jsx("p",{className:"mb-0 opacity-50",children:"Lorem ipsum dolor sit amet consectetur."})]})})}),e.jsxs("form",{className:"p-8 g-col-12 g-col-lg-8",children:[e.jsxs("fieldset",{className:"mb-8",children:[e.jsxs("legend",{className:"d-flex fw-bold",children:[e.jsx(i,{icon:"User",size:"1rem",className:"me-2 text-muted"}),"Personal Information"]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsFirstName",label:"First Name",placeholder:"John"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsLastName",label:"Last Name",placeholder:"Doe"})}),e.jsx("div",{className:"g-col-12",children:e.jsx(l,{id:"fsEmail",type:"email",label:"Email",placeholder:"john.doe@example.com"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsPhone",type:"tel",label:"Phone Number",placeholder:"(123) 456-7890"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsDateOfBirth",type:"date",label:"Date of Birth"})})]})]}),e.jsxs("div",{className:"g-col-12 mt-8",children:[e.jsx(a,{type:"submit",text:"Save Information",className:"me-2"}),e.jsx(a,{type:"reset",variant:"outline",text:"Clear Form"})]})]})]})},p={render:()=>e.jsxs(s,{className:"grid gap-2 p-0 overflow-hidden",children:[e.jsx("div",{className:"g-col-12 g-col-md-4",children:e.jsx("div",{className:"bg-primary text-white h-100 position-relative",children:e.jsxs("div",{className:"bottom-0 end-0 p-8 text-end position-lg-absolute",children:[e.jsx("h5",{children:"Welcome Back"}),e.jsx("p",{className:"mb-0 opacity-50",children:"Lorem ipsum dolor sit amet consectetur."})]})})}),e.jsxs("form",{className:"p-8 g-col-12 g-col-lg-8",children:[e.jsxs("fieldset",{className:"mb-8",children:[e.jsxs("legend",{className:"d-flex fw-bold",children:[e.jsx(i,{icon:"User",size:"1rem",className:"me-2 text-muted"}),"Personal Information"]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsFirstName",label:"First Name",placeholder:"John"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsLastName",label:"Last Name",placeholder:"Doe"})}),e.jsx("div",{className:"g-col-12",children:e.jsx(l,{id:"fsEmail",type:"email",label:"Email",placeholder:"john.doe@example.com"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsPhone",type:"tel",label:"Phone Number",placeholder:"(123) 456-7890"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsDateOfBirth",type:"date",label:"Date of Birth"})})]})]}),e.jsxs("div",{className:"g-col-12 mt-8",children:[e.jsx(a,{type:"submit",text:"Save Information",className:"me-2"}),e.jsx(a,{type:"reset",variant:"outline",text:"Clear Form"})]})]})]})},h={render:()=>e.jsxs(s,{className:"grid gap-2 p-0 overflow-hidden",children:[e.jsx("div",{className:"g-col-12 g-col-md-4",children:e.jsx("div",{className:"bg-primary text-white h-100 position-relative",style:{backgroundImage:"url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340)",backgroundSize:"cover"},children:e.jsxs("div",{className:"bottom-0 end-0 p-8 text-end position-lg-absolute",children:[e.jsx("h5",{children:"Welcome Back"}),e.jsx("p",{className:"mb-0 opacity-50",children:"Lorem ipsum dolor sit amet consectetur."})]})})}),e.jsxs("form",{className:"p-8 g-col-12 g-col-lg-8",children:[e.jsxs("fieldset",{className:"mb-8",children:[e.jsxs("legend",{className:"d-flex fw-bold",children:[e.jsx(i,{icon:"User",size:"1rem",className:"me-2 text-muted"}),"Personal Information"]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsFirstName",label:"First Name",placeholder:"John"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsLastName",label:"Last Name",placeholder:"Doe"})}),e.jsx("div",{className:"g-col-12",children:e.jsx(l,{id:"fsEmail",type:"email",label:"Email",placeholder:"john.doe@example.com"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsPhone",type:"tel",label:"Phone Number",placeholder:"(123) 456-7890"})}),e.jsx("div",{className:"g-col-12 g-col-lg-6",children:e.jsx(l,{id:"fsDateOfBirth",type:"date",label:"Date of Birth"})})]})]}),e.jsxs("fieldset",{className:"mb-8",children:[e.jsxs("legend",{className:"d-flex fw-bold",children:[e.jsx(i,{icon:"Map",size:"1rem",className:"me-2 text-muted"}),"Locations"]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsxs("label",{className:"radio-custom border p-4 rounded g-col-12 g-col-lg-6 align-items-start gap-2",children:[e.jsx(t,{type:"radio",name:"location",checked:!0}),e.jsxs("div",{className:"form-check-label",children:[e.jsx("span",{className:"fw-semibold",children:"Home"}),e.jsxs("small",{className:"d-block mt-1 text-muted d-flex gap-2",children:[e.jsx(i,{size:"1rem",icon:"Map"}),"123 Main Street, New York, NY 10001"]})]})]}),e.jsxs("label",{className:"radio-custom border p-4 rounded g-col-12 g-col-lg-6 align-items-start gap-2",children:[e.jsx(t,{type:"radio",name:"location"}),e.jsxs("div",{className:"form-check-label",children:[e.jsx("span",{className:"fw-semibold",children:"Work"}),e.jsxs("small",{className:"d-block mt-1 text-muted d-flex gap-2",children:[e.jsx(i,{size:"1rem",icon:"Map"}),"123 Main Street, New York, NY 10001"]})]})]})]})]}),e.jsxs("div",{className:"g-col-12 mt-8",children:[e.jsx(a,{type:"submit",text:"Save Information",className:"me-2"}),e.jsx(a,{type:"reset",variant:"outline",text:"Clear Form"})]})]})]})};var g,u,N;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DBox className="p-8" style={{
    width: '800px'
  }}>
      <form className="grid gap-4" style={{
      '--bs-columns': '1'
    }}>
        <div className="col-12">
          <DInput id="name" label="Full Name" placeholder="Enter your full name" />
        </div>
        <div className="col-12">
          <DInput id="email" type="email" label="Email" placeholder="Enter your email" />
        </div>
        <div className="col-12">
          <DSelect id="country" label="Country" options={[{
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
        <div className="col-12">
          <DInputSwitch id="newsletter" label="Subscribe to newsletter" />
        </div>
        <div className="col-12">
          <DInputCheck id="terms" type="checkbox" label="I agree to the terms and conditions" />
        </div>
        <div className="col-12">
          <DButton type="submit" text="Submit" />
        </div>
      </form>
    </DBox>
}`,...(N=(u=o.parameters)==null?void 0:u.docs)==null?void 0:N.source}}};var b,v,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <DBox className="p-8" style={{
    width: '800px'
  }}>
      <form>
        <div className="grid gap-3 mb-4">
          <label htmlFor="inputEmail3" className="g-col-sm-2 col-form-label">Email</label>
          <div className="g-col-sm-10">
            <DInput type="email" id="inputEmail3" />
          </div>
        </div>
        <div className="grid gap-3 mb-4">
          <label htmlFor="inputPassword3" className="g-col-sm-2 col-form-label">Password</label>
          <div className="g-col-sm-10">
            <DInputPassword />
          </div>
        </div>
        <hr />
        <div className="grid gap-3 mb-4">
          <label htmlFor="address" className="g-col-sm-2 col-form-label">Address</label>
          <div className="g-col-sm-10">
            <DInput id="address" />
          </div>
        </div>
        <div className="grid gap-3 mb-4">
          <label htmlFor="address" className="g-col-sm-2 col-form-label">Phone</label>
          <div className="g-col-sm-10">
            <DInput id="phone" />
          </div>
        </div>
        <DButton type="submit" text="Sign in" />
      </form>
    </DBox>
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var j,y,D;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <DBox className="p-8" style={{
    width: '800px'
  }}>
      <form className="grid gap-4" style={{
      '--bs-columns': '2'
    }}>
        <div>
          <DInput id="firstName" label="First Name" placeholder="Enter your first name" />
        </div>
        <div>
          <DInput id="lastName" label="Last Name" placeholder="Enter your last name" />
        </div>
        <div>
          <DInput id="email2" type="email" label="Email" placeholder="Enter your email" />
        </div>
        <div>
          <DInput id="phone" type="tel" label="Phone" placeholder="Enter your phone number" />
        </div>
        <div className="col-12">
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
        <div className="col-12">
          <label className="form-label" htmlFor="gender">Gender</label>
          <div>
            <DInputCheck id="genderMale" type="radio" name="gender" label="Male" inline />
            <DInputCheck id="genderFemale" type="radio" name="gender" label="Female" inline />
            <DInputCheck id="genderOther" type="radio" name="gender" label="Other" inline />
          </div>
        </div>
        <div className="col-12">
          <DInputSwitch id="notifications" label="Enable notifications" />
        </div>
        <div className="col-12">
          <DInputCheck id="terms2" type="checkbox" label="I agree to the terms and conditions" />
        </div>
        <div className="col-12">
          <DButton type="submit" className="me-2" text="Submit" />
          <DButton type="reset" variant="outline" text="Reset" />
        </div>
      </form>
    </DBox>
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var I,w,S;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DBox className="p-8" style={{
    width: '800px'
  }}>
      <form>
        <fieldset className="border p-4 rounded mb-8">
          <legend className="float-none w-auto px-2">Personal Information</legend>
          <div className="grid gap-3">
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="g-col-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>

        <fieldset className="col-12 border p-4 rounded mb-4">
          <legend className="float-none w-auto px-2">Address Information</legend>
          <div className="grid gap-3" style={{
          '--bs-columns': '1'
        }}>
            <DInput id="fsAddress1" label="Address Line 1" placeholder="123 Main St" />
            <DInput id="fsAddress2" label="Address Line 2" placeholder="Apartment, suite, unit, etc. (Optional)" />
            <DInput id="fsCity" label="City" placeholder="Anytown" />
            <DInput id="fsState" label="State/Province" placeholder="State" />
            <DInput id="fsZip" label="Zip/Postal Code" placeholder="12345" />
            <DSelect id="fsCountry" label="Country" options={[{
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
        </fieldset>

        <div className="g-col-12 mt-8">
          <DButton type="submit" text="Save Information" className="me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
}`,...(S=(w=r.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var F,B,C;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <DBox className="p-8" style={{
    width: '800px'
  }}>
      <form>
        <fieldset className="mb-8">
          <legend className="d-flex fw-bold">
            <DIcon icon="User" size="1rem" className="me-2 text-muted" />
            Personal Information
          </legend>
          <div className="grid gap-3">
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="g-col-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="d-flex fw-bold">
            <DIcon icon="Map" size="1rem" className="me-2 text-muted" />
            Address Information
          </legend>
          <div className="grid gap-3" style={{
          '--bs-columns': '1'
        }}>
            <DInput id="fsAddress1" label="Address Line 1" placeholder="123 Main St" />
            <DInput id="fsAddress2" label="Address Line 2" placeholder="Apartment, suite, unit, etc. (Optional)" />
            <DInput id="fsCity" label="City" placeholder="Anytown" />
            <DInput id="fsState" label="State/Province" placeholder="State" />
            <DInput id="fsZip" label="Zip/Postal Code" placeholder="12345" />
            <DSelect id="fsCountry" label="Country" options={[{
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
        </fieldset>

        <div className="g-col-12 mt-8">
          <DButton type="submit" text="Save Information" className="me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
}`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var P,E,k;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '800px'
  }} className="grid gap-2 p-0 overflow-hidden">
      <div className="d-none g-col-4 d-lg-block">
        <div className="bg-primary text-white h-100 position-relative">
          <div className="bottom-0 end-0 p-8 text-end position-absolute">
            <h5>Welcome Back</h5>
            <p className="mb-0 opacity-50">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <form className="p-8 g-col-12 g-col-lg-8">
        <fieldset className="mb-8">
          <legend className="d-flex fw-bold">
            <DIcon icon="User" size="1rem" className="me-2 text-muted" />
            Personal Information
          </legend>
          <div className="grid gap-3">
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="g-col-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>
        <div className="g-col-12 mt-8">
          <DButton type="submit" text="Save Information" className="me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
}`,...(k=(E=n.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var L,A,M;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <DBox className="grid gap-2 p-0 overflow-hidden">
      <div className="g-col-12 g-col-md-4">
        <div className="bg-primary text-white h-100 position-relative">
          <div className="bottom-0 end-0 p-8 text-end position-lg-absolute">
            <h5>Welcome Back</h5>
            <p className="mb-0 opacity-50">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <form className="p-8 g-col-12 g-col-lg-8">
        <fieldset className="mb-8">
          <legend className="d-flex fw-bold">
            <DIcon icon="User" size="1rem" className="me-2 text-muted" />
            Personal Information
          </legend>
          <div className="grid gap-3">
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="g-col-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>
        <div className="g-col-12 mt-8">
          <DButton type="submit" text="Save Information" className="me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
}`,...(M=(A=p.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var O,z,U;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <DBox className="grid gap-2 p-0 overflow-hidden">
      <div className="g-col-12 g-col-md-4">
        <div className="bg-primary text-white h-100 position-relative" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340)',
        backgroundSize: 'cover'
      }}>
          <div className="bottom-0 end-0 p-8 text-end position-lg-absolute">
            <h5>Welcome Back</h5>
            <p className="mb-0 opacity-50">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <form className="p-8 g-col-12 g-col-lg-8">
        <fieldset className="mb-8">
          <legend className="d-flex fw-bold">
            <DIcon icon="User" size="1rem" className="me-2 text-muted" />
            Personal Information
          </legend>
          <div className="grid gap-3">
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="g-col-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>
        <fieldset className="mb-8">
          <legend className="d-flex fw-bold">
            <DIcon icon="Map" size="1rem" className="me-2 text-muted" />
            Locations
          </legend>
          <div className="grid gap-3">
            <label className="radio-custom border p-4 rounded g-col-12 g-col-lg-6 align-items-start gap-2">
              <DInputCheck type="radio" name="location" checked />
              <div className="form-check-label">
                <span className="fw-semibold">Home</span>
                <small className="d-block mt-1 text-muted d-flex gap-2">
                  <DIcon size="1rem" icon="Map" />
                  123 Main Street, New York, NY 10001
                </small>
              </div>
            </label>
            <label className="radio-custom border p-4 rounded g-col-12 g-col-lg-6 align-items-start gap-2">
              <DInputCheck type="radio" name="location" />
              <div className="form-check-label">
                <span className="fw-semibold">Work</span>
                <small className="d-block mt-1 text-muted d-flex gap-2">
                  <DIcon size="1rem" icon="Map" />
                  123 Main Street, New York, NY 10001
                </small>
              </div>
            </label>
          </div>
        </fieldset>
        <div className="g-col-12 mt-8">
          <DButton type="submit" text="Save Information" className="me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
}`,...(U=(z=h.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};const de=["OneColumn","horizontalForm","TwoColumns","FieldsetForm","FieldsetForm2","FormWithCover","FormWithCoverResponsive","CustomRadios"];export{h as CustomRadios,r as FieldsetForm,m as FieldsetForm2,n as FormWithCover,p as FormWithCoverResponsive,o as OneColumn,c as TwoColumns,de as __namedExportsOrder,oe as default,d as horizontalForm};
