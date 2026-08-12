import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-CHeqVsUI.js";import{F as Se}from"./DInputPassword-wxss1sot.js";import{D as _e}from"./DIcon-C9QpqnTB.js";import"./preload-helper-Dp1pzeXC.js";import"./DInput-D1ASoflF.js";import"./index-9xGy8ok_.js";import"./useProvidedRefOrCreate-CTpffrae.js";import"./DContext-I2P6eEmu.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";import"./config-C3iYXcFk.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-DWQi1yBD.js";function V({password:r,regex:s,text:e}){const t=s.test(r);return a.jsxs("li",{className:`d-password-check-item${t?" is-valid":""}`,children:[a.jsx(_e,{className:"d-password-check-item-icon",icon:t?"CircleCheck":"Circle",size:"16px"}),a.jsx("span",{children:e})]})}try{V.displayName="PasswordCheckItem",V.__docgenInfo={description:"",displayName:"PasswordCheckItem",props:{password:{defaultValue:null,description:"",name:"password",required:!0,type:{name:"string"}},regex:{defaultValue:null,description:"",name:"regex",required:!0,type:{name:"RegExp"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const qe=(r,s)=>{const e=s>0?r/s:0;return e===0?"is-empty":e<=.25?"is-weak":e<=.5?"is-fair":e<=.75?"is-good":"is-strong"};function Ae({strength:r,total:s}){const e=s>0?r/s*100:0;return a.jsx("div",{className:"d-password-strength-bar",children:a.jsx("div",{className:`d-password-strength-bar-fill ${qe(r,s)}`,style:{width:`${e}%`}})})}try{PasswordStrength.displayName="PasswordStrength",PasswordStrength.__docgenInfo={description:"",displayName:"PasswordStrength",props:{strength:{defaultValue:null,description:"",name:"strength",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}}}}}catch{}const i={uppercase:/[A-Z]/,lowercase:/[a-z]/,number:/\d/,specialChar:/[~!@#$^*\-_=[\]{}|;,.?]/};function Ve({password:r,validationMessages:s,enabledChecks:e}){const n=[{key:"uppercase",regex:i.uppercase,text:s.uppercaseLetter},{key:"lowercase",regex:i.lowercase,text:s.lowercaseLetter},{key:"number",regex:i.number,text:s.number},{key:"specialChar",regex:i.specialChar,text:s.especialChar}].filter(o=>e.includes(o.key)),x=n.filter(o=>o.regex.test(r)).length,S=n.length;return a.jsxs("div",{className:"d-password-strength-meter",children:[a.jsx(Ae,{strength:x,total:S}),a.jsx("ul",{className:"d-password-check-list",children:n.map(({key:o,regex:_,text:q})=>a.jsx(V,{password:r,regex:_,text:q},o))})]})}try{PasswordCheckList.displayName="PasswordCheckList",PasswordCheckList.__docgenInfo={description:"",displayName:"PasswordCheckList",props:{password:{defaultValue:null,description:"",name:"password",required:!0,type:{name:"string"}},validationMessages:{defaultValue:null,description:"",name:"validationMessages",required:!0,type:{name:"ValidationMessages"}},enabledChecks:{defaultValue:null,description:"",name:"enabledChecks",required:!0,type:{name:"ValidationCheck[]"}}}}}catch{}const Me={number:"At least one number",lowercaseLetter:"At least one lowercase letter",uppercaseLetter:"At least one uppercase letter",especialChar:"At least one of these special characters: ~!@#$^*-_=[]{}|;,.?",notMatch:"The password confirmation and the new password do not match."},Le=["uppercase","lowercase","number","specialChar"];function l({id:r,label:s="Password",placeholder:e,value:t="",name:n,disabled:x=!1,invalid:S=!1,validationMessages:o=Me,enabledChecks:_=Le,className:q,style:ve,dataAttributes:ke,onChange:A,readonly:Pe=!1}){const[M,L]=d.useState(t);d.useEffect(()=>{L(t)},[t]);const xe=N=>{L(N),A==null||A(N)};return a.jsxs("div",{className:q,style:ve,...ke,children:[a.jsx(Se,{id:r,label:s,placeholder:e,value:M,name:n,disabled:x,invalid:S,onChange:xe,readonly:Pe}),a.jsx(Ve,{password:M,validationMessages:o,enabledChecks:_})]})}try{l.displayName="DPasswordStrengthMeter",l.__docgenInfo={description:"",displayName:"DPasswordStrengthMeter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},label:{defaultValue:{value:"Password"},description:"",name:"label",required:!1,type:{name:"string | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},validationMessages:{defaultValue:{value:`{
  number: 'At least one number',
  lowercaseLetter: 'At least one lowercase letter',
  uppercaseLetter: 'At least one uppercase letter',
  especialChar: 'At least one of these special characters: ~!@#$^*-_=[]{}|;,.?',
  notMatch: 'The password confirmation and the new password do not match.',
}`},description:"",name:"validationMessages",required:!1,type:{name:"ValidationMessages | undefined"}},enabledChecks:{defaultValue:{value:"['uppercase', 'lowercase', 'number', 'specialChar']"},description:"",name:"enabledChecks",required:!1,type:{name:"ValidationCheck[] | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Ze={title:"Design System/Components/Password Strength Meter",component:l,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},label:{control:"text",type:"string",description:"The label text for the password input",table:{category:"Content"}},placeholder:{control:"text",type:"string",description:"Placeholder text for the input",table:{category:"Content"}},value:{control:"text",type:"string",description:"The current password value",table:{category:"Content"}},name:{control:"text",type:"string",description:"The name attribute for the input",table:{category:"HTML Attributes"}},disabled:{control:"boolean",type:"boolean",description:"Whether the input is disabled",table:{category:"Behavior"}},readonly:{control:"boolean",type:"boolean",description:"Whether the input is readonly",table:{category:"Behavior"}},invalid:{control:"boolean",type:"boolean",description:"Whether the input has validation errors",table:{category:"Behavior"}},className:{control:"text",type:"string",description:"Additional CSS classes",table:{category:"Appearance"}},validationMessages:{control:"object",description:"Custom validation messages for each check",table:{category:"Content",type:{summary:"ValidationMessages",detail:`{
  number: string;
  lowercaseLetter: string;
  uppercaseLetter: string;
  especialChar: string;
  notMatch?: string;
}`},defaultValue:{summary:"Default English messages"}}},enabledChecks:{control:"inline-check",options:["uppercase","lowercase","number","specialChar"],description:"Array of validation checks to enable. Controls which requirements are shown and validated.",table:{category:"Behavior",type:{summary:"ValidationCheck[]",detail:"Array of: 'uppercase' | 'lowercase' | 'number' | 'specialChar'"},defaultValue:{summary:"['uppercase', 'lowercase', 'number', 'specialChar']"}}},onChange:{action:"onChange",description:"Callback when password changes",table:{category:"Events"}}},tags:["autodocs"]},c={args:{label:"Password",placeholder:"Enter your password",disabled:!1}},p={args:{id:"password2",label:"Password",value:"Test123!"}},u={args:{id:"password3",label:"Create New Password",placeholder:"Must be at least 8 characters"}},m={args:{id:"password4",label:"Password",value:"Test123!",disabled:!0}},h={args:{id:"password5",label:"Password",invalid:!0}},g={args:{id:"password6",label:"Password",value:"Test123!",readonly:!0}},w={render:function(s){const[e,t]=d.useState("");return a.jsxs("div",{children:[a.jsx(l,{...s,value:e,onChange:t}),a.jsx("div",{className:"mt-3 p-3 bg-light rounded",children:a.jsxs("small",{className:"text-muted",children:["Current password:"," ",a.jsx("code",{children:e||"(empty)"})]})})]})},args:{id:"password7",label:"Try typing a password",placeholder:"Type to see strength meter update"}},b={render:function(s){const[e,t]=d.useState(""),n=e.length>=8&&/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e)&&/[~!@#$^*\-_=[\]{}|;,.?]/.test(e);return a.jsx(l,{...s,value:e,onChange:t,invalid:e.length>0&&!n})},args:{id:"password8",label:"Password with validation",placeholder:"Must meet all requirements"}},y={args:{id:"password9",label:"Contraseña",placeholder:"Ingresa tu contraseña",validationMessages:{number:"Al menos un número",lowercaseLetter:"Al menos una letra minúscula",uppercaseLetter:"Al menos una letra mayúscula",especialChar:"Al menos uno de estos caracteres especiales: ~!@#$^*-_=[]{}|;,.?"}}},f={render:function(s){const[e,t]=d.useState("");return a.jsx(l,{...s,value:e,onChange:t,validationMessages:{number:"✓ Un número (0-9)",lowercaseLetter:"✓ Una minúscula (a-z)",uppercaseLetter:"✓ Una mayúscula (A-Z)",especialChar:"✓ Un símbolo especial"}})},args:{id:"password10",label:"Password with emoji messages",placeholder:"Try it out!"}},C={args:{id:"password11",label:"Password (3 requirements)",placeholder:"Only uppercase, lowercase, and number required",enabledChecks:["uppercase","lowercase","number"]}},v={args:{id:"password12",label:"Simple Password",placeholder:"Only number and special character required",enabledChecks:["number","specialChar"]}},k={args:{id:"password13",label:"Very Simple Password",placeholder:"Only uppercase letter required",enabledChecks:["uppercase"]}},P={render:function(s){const[e,t]=d.useState("");return a.jsxs("div",{children:[a.jsx(l,{...s,value:e,onChange:t,enabledChecks:["lowercase","number","specialChar"]}),a.jsx("div",{className:"mt-3 p-3 bg-light rounded",children:a.jsxs("small",{className:"text-muted",children:[a.jsx("strong",{children:"Note:"})," ","This example only requires lowercase, number, and special character (3 checks total)"]})})]})},args:{id:"password14",label:"Custom Requirements",placeholder:"No uppercase required"}};var T,j,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    disabled: false
  }
}`,...(I=(j=c.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var D,E,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'password2',
    label: 'Password',
    value: 'Test123!'
  }
}`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var O,F,U;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'password3',
    label: 'Create New Password',
    placeholder: 'Must be at least 8 characters'
  }
}`,...(U=(F=u.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var $,W,z;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: 'password4',
    label: 'Password',
    value: 'Test123!',
    disabled: true
  }
}`,...(z=(W=m.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var B,Z,G;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: 'password5',
    label: 'Password',
    invalid: true
  }
}`,...(G=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var H,K,X;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    id: 'password6',
    label: 'Password',
    value: 'Test123!',
    readonly: true
  }
}`,...(X=(K=g.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,J,Q;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,ae,se;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,te,ne;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,le,de;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(le=f.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ie,ce,pe;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    id: 'password11',
    label: 'Password (3 requirements)',
    placeholder: 'Only uppercase, lowercase, and number required',
    enabledChecks: ['uppercase', 'lowercase', 'number']
  }
}`,...(pe=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,he;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    id: 'password12',
    label: 'Simple Password',
    placeholder: 'Only number and special character required',
    enabledChecks: ['number', 'specialChar']
  }
}`,...(he=(me=v.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,we,be;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    id: 'password13',
    label: 'Very Simple Password',
    placeholder: 'Only uppercase letter required',
    enabledChecks: ['uppercase']
  }
}`,...(be=(we=k.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};var ye,fe,Ce;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ce=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};const Ge=["Default","WithValue","CustomLabel","Disabled","Invalid","Readonly","Interactive","WithFeedback","CustomMessages","CustomMessagesInteractive","OnlyThreeChecks","OnlyTwoChecks","OnlyOneCheck","CustomChecksInteractive"];export{P as CustomChecksInteractive,u as CustomLabel,y as CustomMessages,f as CustomMessagesInteractive,c as Default,m as Disabled,w as Interactive,h as Invalid,k as OnlyOneCheck,C as OnlyThreeChecks,v as OnlyTwoChecks,g as Readonly,b as WithFeedback,p as WithValue,Ge as __namedExportsOrder,Ze as default};
