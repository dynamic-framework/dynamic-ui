import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-uHxPMequ.js";import{F as Se}from"./DInputPassword-7ouueN0n.js";import{c as T}from"./index-4TPiY_w5.js";import{D as _e}from"./DIcon-DzHhTXeq.js";import"./preload-helper-Dp1pzeXC.js";import"./DInput-tV8VFNWz.js";import"./useProvidedRefOrCreate-C05V6MWW.js";import"./DContext-BAc4NIae.js";import"./index-DboxJWp3.js";import"./index-Drp_xGtg.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DLsS5ULk.js";function A({password:r,regex:a,text:e}){const t=a.test(r);return s.jsxs("li",{className:"d-flex gap-2 align-items-start small text-gray-600",children:[s.jsx(_e,{className:T("flex-shrink-0",t?"text-success":"text-gray-300"),icon:t?"CircleCheck":"Circle",size:"16px"}),s.jsx("span",{className:T({"text-success":t}),children:e})]})}try{A.displayName="PasswordCheckItem",A.__docgenInfo={description:"",displayName:"PasswordCheckItem",props:{password:{defaultValue:null,description:"",name:"password",required:!0,type:{name:"string"}},regex:{defaultValue:null,description:"",name:"regex",required:!0,type:{name:"RegExp"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const qe=(r,a)=>{const e=a>0?r/a:0;return e===0?"bg-gray-200":e<=.25?"bg-danger":e<=.5?"bg-warning":e<=.75?"bg-info":"bg-success"};function Ve({strength:r,total:a}){const e=a>0?r/a*100:0;return s.jsx("div",{className:"w-100 rounded-3 overflow-hidden bg-gray-100 mb-2",style:{height:"8px"},children:s.jsx("div",{className:`h-100 ${qe(r,a)}`,style:{width:`${e}%`,transition:"width 0.3s ease-in-out"}})})}try{PasswordStrength.displayName="PasswordStrength",PasswordStrength.__docgenInfo={description:"",displayName:"PasswordStrength",props:{strength:{defaultValue:null,description:"",name:"strength",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}}}}}catch{}const c={uppercase:/[A-Z]/,lowercase:/[a-z]/,number:/\d/,specialChar:/[~!@#$^*\-_=[\]{}|;,.?]/};function Ae({password:r,validationMessages:a,enabledChecks:e}){const n=[{key:"uppercase",regex:c.uppercase,text:a.uppercaseLetter},{key:"lowercase",regex:c.lowercase,text:a.lowercaseLetter},{key:"number",regex:c.number,text:a.number},{key:"specialChar",regex:c.specialChar,text:a.especialChar}].filter(o=>e.includes(o.key)),P=n.filter(o=>o.regex.test(r)).length,S=n.length;return s.jsxs("div",{className:"mt-2",children:[s.jsx(Ve,{strength:P,total:S}),s.jsx("ul",{className:"list-unstyled m-0 d-flex flex-column gap-2",children:n.map(({key:o,regex:_,text:q})=>s.jsx(A,{password:r,regex:_,text:q},o))})]})}try{PasswordCheckList.displayName="PasswordCheckList",PasswordCheckList.__docgenInfo={description:"",displayName:"PasswordCheckList",props:{password:{defaultValue:null,description:"",name:"password",required:!0,type:{name:"string"}},validationMessages:{defaultValue:null,description:"",name:"validationMessages",required:!0,type:{name:"ValidationMessages"}},enabledChecks:{defaultValue:null,description:"",name:"enabledChecks",required:!0,type:{name:"ValidationCheck[]"}}}}}catch{}const Me={number:"At least one number",lowercaseLetter:"At least one lowercase letter",uppercaseLetter:"At least one uppercase letter",especialChar:"At least one of these special characters: ~!@#$^*-_=[]{}|;,.?",notMatch:"The password confirmation and the new password do not match."},Ne=["uppercase","lowercase","number","specialChar"];function l({id:r,label:a="Password",placeholder:e,value:t="",name:n,disabled:P=!1,invalid:S=!1,validationMessages:o=Me,enabledChecks:_=Ne,className:q,style:ke,dataAttributes:xe,onChange:V}){const[M,N]=d.useState(t);d.useEffect(()=>{N(t)},[t]);const Pe=L=>{N(L),V==null||V(L)};return s.jsxs("div",{className:q,style:ke,...xe,children:[s.jsx(Se,{id:r,label:a,placeholder:e,value:M,name:n,disabled:P,invalid:S,onChange:Pe}),s.jsx(Ae,{password:M,validationMessages:o,enabledChecks:_})]})}try{l.displayName="DPasswordStrengthMeter",l.__docgenInfo={description:"",displayName:"DPasswordStrengthMeter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},label:{defaultValue:{value:"Password"},description:"",name:"label",required:!1,type:{name:"string | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},validationMessages:{defaultValue:{value:`{
  number: 'At least one number',
  lowercaseLetter: 'At least one lowercase letter',
  uppercaseLetter: 'At least one uppercase letter',
  especialChar: 'At least one of these special characters: ~!@#$^*-_=[]{}|;,.?',
  notMatch: 'The password confirmation and the new password do not match.',
}`},description:"",name:"validationMessages",required:!1,type:{name:"ValidationMessages | undefined"}},enabledChecks:{defaultValue:{value:"['uppercase', 'lowercase', 'number', 'specialChar']"},description:"",name:"enabledChecks",required:!1,type:{name:"ValidationCheck[] | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}}}}}catch{}const Ze={title:"Design System/Components/Password Strength Meter",component:l,parameters:{docs:{description:{component:`
Password strength meter component that provides visual feedback on password complexity.

This component combines a password input field with real-time validation checks and a visual strength indicator.

## Features

- **Visual Strength Indicator**: Color-coded progress bar showing password strength
- **Validation Checklist**: Live feedback on password requirements:
  - Uppercase letter
  - Lowercase letter
  - Number
  - Special character
- **Real-time Validation**: Updates as user types
- **Customizable Messages**: All validation messages can be customized via props
- **Configurable Checks**: Enable/disable specific validation checks
- **Default Messages in English**: No i18n required if using default messages

## Password Strength Levels

The strength bar color is calculated based on the percentage of passed checks:

| Percentage | Strength | Color   |
|------------|----------|---------|
| 0%         | None     | Gray    |
| 1-25%      | Weak     | Red     |
| 26-50%     | Fair     | Yellow  |
| 51-75%     | Good     | Blue    |
| 76-100%    | Strong   | Green   |

## Default Validation Messages

\`\`\`json
{
  "number": "At least one number",
  "lowercaseLetter": "At least one lowercase letter",
  "uppercaseLetter": "At least one uppercase letter",
  "especialChar": "At least one of these special characters: ~!@#$^*-_=[]{}|;,.?",
  "notMatch": "The password confirmation and the new password do not match."
}
\`\`\`

## Available Validation Checks

- \`uppercase\`: Requires at least one uppercase letter (A-Z)
- \`lowercase\`: Requires at least one lowercase letter (a-z)
- \`number\`: Requires at least one number (0-9)
- \`specialChar\`: Requires at least one special character (~!@#$^*-_=[]{}|;,.?)

## Usage with Formik

\`\`\`tsx
<Formik
  initialValues={{ password: '' }}
  onSubmit={handleSubmit}
>
  {({ values, setFieldValue }) => (
    <DPasswordStrengthMeter
      value={values.password}
      onChange={(value) => setFieldValue('password', value)}
    />
  )}
</Formik>
\`\`\`

## Custom Messages

\`\`\`tsx
<DPasswordStrengthMeter
  validationMessages={{
    number: 'Al menos un número',
    lowercaseLetter: 'Al menos una letra minúscula',
    uppercaseLetter: 'Al menos una letra mayúscula',
    especialChar: 'Al menos un carácter especial',
  }}
/>
\`\`\`

## Enable Only Specific Checks

\`\`\`tsx
// Only require uppercase, lowercase, and number (3 checks)
<DPasswordStrengthMeter
  enabledChecks={['uppercase', 'lowercase', 'number']}
/>

// Only require number and special character (2 checks)
<DPasswordStrengthMeter
  enabledChecks={['number', 'specialChar']}
/>
\`\`\`
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},label:{control:"text",type:"string",description:"The label text for the password input"},placeholder:{control:"text",type:"string",description:"Placeholder text for the input"},value:{control:"text",type:"string",description:"The current password value"},name:{control:"text",type:"string",description:"The name attribute for the input"},disabled:{control:"boolean",type:"boolean",description:"Whether the input is disabled"},readonly:{control:"boolean",type:"boolean",description:"Whether the input is readonly"},invalid:{control:"boolean",type:"boolean",description:"Whether the input has validation errors"},className:{control:"text",type:"string",description:"Additional CSS classes"},validationMessages:{control:"object",description:"Custom validation messages for each check",table:{type:{summary:"ValidationMessages",detail:`{
  number: string;
  lowercaseLetter: string;
  uppercaseLetter: string;
  especialChar: string;
  notMatch?: string;
}`},defaultValue:{summary:"Default English messages"}}},enabledChecks:{control:"inline-check",options:["uppercase","lowercase","number","specialChar"],description:"Array of validation checks to enable. Controls which requirements are shown and validated.",table:{type:{summary:"ValidationCheck[]",detail:"Array of: 'uppercase' | 'lowercase' | 'number' | 'specialChar'"},defaultValue:{summary:"['uppercase', 'lowercase', 'number', 'specialChar']"}}},onChange:{action:"onChange",description:"Callback when password changes"}},tags:["autodocs"]},i={args:{label:"Password",placeholder:"Enter your password",disabled:!1}},u={args:{id:"password2",label:"Password",value:"Test123!"}},p={args:{id:"password3",label:"Create New Password",placeholder:"Must be at least 8 characters"}},m={args:{id:"password4",label:"Password",value:"Test123!",disabled:!0}},h={args:{id:"password5",label:"Password",invalid:!0}},g={args:{id:"password6",label:"Password",value:"Test123!",readonly:!0}},w={render:function(a){const[e,t]=d.useState("");return s.jsxs("div",{children:[s.jsx(l,{...a,value:e,onChange:t}),s.jsx("div",{className:"mt-3 p-3 bg-light rounded",children:s.jsxs("small",{className:"text-muted",children:["Current password:"," ",s.jsx("code",{children:e||"(empty)"})]})})]})},args:{id:"password7",label:"Try typing a password",placeholder:"Type to see strength meter update"}},b={render:function(a){const[e,t]=d.useState(""),n=e.length>=8&&/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e)&&/[~!@#$^*\-_=[\]{}|;,.?]/.test(e);return s.jsx(l,{...a,value:e,onChange:t,invalid:e.length>0&&!n})},args:{id:"password8",label:"Password with validation",placeholder:"Must meet all requirements"}},f={args:{id:"password9",label:"Contraseña",placeholder:"Ingresa tu contraseña",validationMessages:{number:"Al menos un número",lowercaseLetter:"Al menos una letra minúscula",uppercaseLetter:"Al menos una letra mayúscula",especialChar:"Al menos uno de estos caracteres especiales: ~!@#$^*-_=[]{}|;,.?"}}},C={render:function(a){const[e,t]=d.useState("");return s.jsx(l,{...a,value:e,onChange:t,validationMessages:{number:"✓ Un número (0-9)",lowercaseLetter:"✓ Una minúscula (a-z)",uppercaseLetter:"✓ Una mayúscula (A-Z)",especialChar:"✓ Un símbolo especial"}})},args:{id:"password10",label:"Password with emoji messages",placeholder:"Try it out!"}},y={args:{id:"password11",label:"Password (3 requirements)",placeholder:"Only uppercase, lowercase, and number required",enabledChecks:["uppercase","lowercase","number"]}},v={args:{id:"password12",label:"Simple Password",placeholder:"Only number and special character required",enabledChecks:["number","specialChar"]}},k={args:{id:"password13",label:"Very Simple Password",placeholder:"Only uppercase letter required",enabledChecks:["uppercase"]}},x={render:function(a){const[e,t]=d.useState("");return s.jsxs("div",{children:[s.jsx(l,{...a,value:e,onChange:t,enabledChecks:["lowercase","number","specialChar"]}),s.jsx("div",{className:"mt-3 p-3 bg-light rounded",children:s.jsxs("small",{className:"text-muted",children:[s.jsx("strong",{children:"Note:"})," ","This example only requires lowercase, number, and special character (3 checks total)"]})})]})},args:{id:"password14",label:"Custom Requirements",placeholder:"No uppercase required"}};var j,I,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    disabled: false
  }
}`,...(D=(I=i.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var E,R,O;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'password2',
    label: 'Password',
    value: 'Test123!'
  }
}`,...(O=(R=u.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var F,U,$;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: 'password3',
    label: 'Create New Password',
    placeholder: 'Must be at least 8 characters'
  }
}`,...($=(U=p.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var W,z,Z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: 'password4',
    label: 'Password',
    value: 'Test123!',
    disabled: true
  }
}`,...(Z=(z=m.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};var G,B,H;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: 'password5',
    label: 'Password',
    invalid: true
  }
}`,...(H=(B=h.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var K,X,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    id: 'password6',
    label: 'Password',
    value: 'Test123!',
    readonly: true
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var J,Q,ee;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: function InteractiveRender(args) {
    const [password, setPassword] = useState('');
    return <div>
        <DPasswordStrengthMeter {...args} value={password} onChange={setPassword} />
        <div className="mt-3 p-3 bg-light rounded">
          <small className="text-muted">
            Current password:
            {' '}
            <code>{password || '(empty)'}</code>
          </small>
        </div>
      </div>;
  },
  args: {
    id: 'password7',
    label: 'Try typing a password',
    placeholder: 'Type to see strength meter update'
  }
}`,...(ee=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var se,ae,re;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: function WithFeedbackRender(args) {
    const [password, setPassword] = useState('');
    const isValid = password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\\d/.test(password) && /[~!@#$^*\\-_=[\\]{}|;,.?]/.test(password);
    return <DPasswordStrengthMeter {...args} value={password} onChange={setPassword} invalid={password.length > 0 && !isValid} />;
  },
  args: {
    id: 'password8',
    label: 'Password with validation',
    placeholder: 'Must meet all requirements'
  }
}`,...(re=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,oe;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    id: 'password9',
    label: 'Contraseña',
    placeholder: 'Ingresa tu contraseña',
    validationMessages: {
      number: 'Al menos un número',
      lowercaseLetter: 'Al menos una letra minúscula',
      uppercaseLetter: 'Al menos una letra mayúscula',
      especialChar: 'Al menos uno de estos caracteres especiales: ~!@#$^*-_=[]{}|;,.?'
    }
  }
}`,...(oe=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,de,ce;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: function CustomMessagesInteractiveRender(args) {
    const [password, setPassword] = useState('');
    return <DPasswordStrengthMeter {...args} value={password} onChange={setPassword} validationMessages={{
      number: '✓ Un número (0-9)',
      lowercaseLetter: '✓ Una minúscula (a-z)',
      uppercaseLetter: '✓ Una mayúscula (A-Z)',
      especialChar: '✓ Un símbolo especial'
    }} />;
  },
  args: {
    id: 'password10',
    label: 'Password with emoji messages',
    placeholder: 'Try it out!'
  }
}`,...(ce=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ie,ue,pe;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    id: 'password11',
    label: 'Password (3 requirements)',
    placeholder: 'Only uppercase, lowercase, and number required',
    enabledChecks: ['uppercase', 'lowercase', 'number']
  }
}`,...(pe=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,he,ge;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    id: 'password12',
    label: 'Simple Password',
    placeholder: 'Only number and special character required',
    enabledChecks: ['number', 'specialChar']
  }
}`,...(ge=(he=v.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var we,be,fe;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    id: 'password13',
    label: 'Very Simple Password',
    placeholder: 'Only uppercase letter required',
    enabledChecks: ['uppercase']
  }
}`,...(fe=(be=k.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ce,ye,ve;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: function CustomChecksInteractiveRender(args) {
    const [password, setPassword] = useState('');
    return <div>
        <DPasswordStrengthMeter {...args} value={password} onChange={setPassword} enabledChecks={['lowercase', 'number', 'specialChar']} />
        <div className="mt-3 p-3 bg-light rounded">
          <small className="text-muted">
            <strong>Note:</strong>
            {' '}
            This example only requires lowercase, number, and special character (3 checks total)
          </small>
        </div>
      </div>;
  },
  args: {
    id: 'password14',
    label: 'Custom Requirements',
    placeholder: 'No uppercase required'
  }
}`,...(ve=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};const Ge=["Default","WithValue","CustomLabel","Disabled","Invalid","Readonly","Interactive","WithFeedback","CustomMessages","CustomMessagesInteractive","OnlyThreeChecks","OnlyTwoChecks","OnlyOneCheck","CustomChecksInteractive"];export{x as CustomChecksInteractive,p as CustomLabel,f as CustomMessages,C as CustomMessagesInteractive,i as Default,m as Disabled,w as Interactive,h as Invalid,k as OnlyOneCheck,y as OnlyThreeChecks,v as OnlyTwoChecks,g as Readonly,b as WithFeedback,u as WithValue,Ge as __namedExportsOrder,Ze as default};
