import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-vLNjGVop.js";import{M as G}from"./Template-D-nHb7zw.js";import{D as O}from"./DBox-Cmf34cPu.js";import{D as F}from"./DIcon-BaYjXWaB.js";import{D as u}from"./DInputSwitch-BMtaDD7q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C6SlVEW6.js";import"./blocks-CG5owoJr.js";import"./index-DFPG5GmN.js";import"./index-oOcxeWdd.js";import"./index-nyyuC_Uj.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-56XFbS_3.js";import"./DContext-aUrSpq0p.js";const te={title:"Patterns/Input Switch",component:O,parameters:{docs:{page:G,description:{component:"Modern switch patterns using `DInputSwitch` with descriptions and CSS `:has()` for full-row or full-card highlighting — no extra wrapper state needed."}}},tags:["autodocs"]},o={parameters:{docs:{description:{story:"Each row is a `<label>` wrapping both the text and the switch. CSS `:has(input:checked)` highlights the whole row when enabled — no JS state needed for styling."}}},render:function(){const t=[{id:"np-email",title:"Email notifications",desc:"Receive updates and alerts via email"},{id:"np-push",title:"Push notifications",desc:"Get real-time alerts on your device"},{id:"np-sms",title:"SMS notifications",desc:"Receive text messages for critical alerts"},{id:"np-digest",title:"Weekly digest",desc:"A summary of your activity every Monday"}],[r,c]=m.useState({"np-email":!0,"np-push":!1,"np-sms":!0,"np-digest":!1});return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .np-row {
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease;
          }
          .np-row:has(input:checked) {
            background-color: var(--bs-primary-bg-subtle);
            border-color: var(--bs-primary) !important;
          }
        `}),e.jsxs("div",{style:{width:"480px"},className:"d-flex flex-column gap-2",children:[e.jsx("h6",{className:"fw-semibold mb-1",children:"Notification Preferences"}),t.map(({id:s,title:i,desc:a})=>e.jsxs("label",{className:"np-row d-flex align-items-center justify-content-between gap-3 p-3 rounded border",children:[e.jsxs("div",{children:[e.jsx("span",{className:"d-block fw-medium",children:i}),e.jsx("small",{className:"text-secondary",children:a})]}),e.jsx(u,{id:s,ariaLabel:i,checked:r[s],onChange:()=>c(n=>({...n,[s]:!n[s]}))})]},s))]})]})}},d={parameters:{docs:{description:{story:"Each feature is a card-sized `<label>`. When the switch is on, `:has(input:checked)` changes the card border and background, and updates the icon color — all in pure CSS."}}},render:function(){const t=[{id:"fc-analytics",icon:"BarChart2",title:"Analytics",desc:"Track performance metrics in real time"},{id:"fc-dark",icon:"Moon",title:"Dark mode",desc:"Switch to a darker interface theme"},{id:"fc-2fa",icon:"ShieldCheck",title:"Two-factor auth",desc:"Add an extra layer of security"},{id:"fc-backup",icon:"Cloud",title:"Auto backup",desc:"Automatically save your data daily"}],[r,c]=m.useState({"fc-analytics":!0,"fc-dark":!1,"fc-2fa":!0,"fc-backup":!1});return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fc-card {
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease;
          }
          .fc-card:has(input:checked) {
            border-color: var(--bs-primary) !important;
            background-color: var(--bs-primary-bg-subtle);
          }
          .fc-card .fc-icon {
            color: var(--bs-secondary-color);
            transition: color 0.2s ease;
          }
          .fc-card:has(input:checked) .fc-icon {
            color: var(--bs-primary);
          }
        `}),e.jsx("div",{className:"d-grid gap-3",style:{gridTemplateColumns:"1fr 1fr",width:"520px"},children:t.map(({id:s,icon:i,title:a,desc:n})=>e.jsxs("label",{className:"fc-card d-flex flex-column gap-3 p-4 rounded border",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[e.jsx(F,{icon:i,size:"1.5rem",className:"fc-icon"}),e.jsx(u,{id:s,ariaLabel:a,checked:r[s],onChange:()=>c(h=>({...h,[s]:!h[s]}))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"d-block fw-semibold",children:a}),e.jsx("small",{className:"text-secondary",children:n})]})]},s))})]})}},l={parameters:{docs:{description:{story:"Grouped settings list inspired by iOS. Each row uses `:has(input:checked)` to tint the background and change the label color — no React state drives the visual styling."}}},render:function(){const t=[{heading:"Data & Personalization",items:[{id:"ps-ads",title:"Personalized ads",desc:"Show ads tailored to your interests"},{id:"ps-share",title:"Third-party sharing",desc:"Share anonymized data with our partners"}]},{heading:"App Permissions",items:[{id:"ps-location",title:"Location access",desc:"Used to show nearby branches and ATMs"},{id:"ps-crash",title:"Crash reports",desc:"Send diagnostic data to improve the app"}]}],[r,c]=m.useState({"ps-ads":!1,"ps-share":!1,"ps-location":!0,"ps-crash":!0});return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .ps-row {
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
          .ps-row:has(input:checked) {
            background-color: var(--bs-primary-bg-subtle);
          }
          .ps-row .ps-title {
            transition: color 0.2s ease;
          }
          .ps-row:has(input:checked) .ps-title {
            color: var(--bs-primary);
          }
        `}),e.jsx("div",{style:{width:"480px"},className:"d-flex flex-column gap-4",children:t.map(({heading:s,items:i})=>e.jsxs("div",{children:[e.jsx("small",{className:"text-secondary text-uppercase fw-semibold d-block mb-2",children:s}),e.jsx("div",{className:"border rounded overflow-hidden",children:i.map(({id:a,title:n,desc:h},B)=>e.jsxs("label",{className:`ps-row d-flex align-items-center m-0 justify-content-between gap-3 p-3${B<i.length-1?" border-bottom":""}`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"d-block fw-medium ps-title",children:n}),e.jsx("small",{className:"text-secondary",children:h})]}),e.jsx(u,{id:a,ariaLabel:n,checked:r[a],onChange:()=>c(f=>({...f,[a]:!f[a]}))})]},a))})]},s))})]})}},p={parameters:{docs:{description:{story:"Modern terms acceptance pattern with switch on the left. The full box uses a subtle border and highlighted background when accepted, and shows a trailing check icon using pure CSS `:has()`."}}},render:function(){const[t,r]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .tc-card {
            cursor: pointer;
            border: 1px solid transparent;
            transition: background-color 0.2s ease, box-shadow 0.2s ease;
          }
          .tc-card:has(input:checked) {
            background-color: var(--bs-primary-bg-subtle);
            border: 1px solid var(--bs-primary-100) !important;
          }
          .tc-card .tc-check {
            opacity: 0;
            transform: scale(0.85);
            color: var(--bs-primary);
            transition: opacity 0.2s ease, transform 0.2s ease;
          }
          .tc-card:has(input:checked) .tc-check {
            opacity: 1;
            transform: scale(1);
          }
        `}),e.jsx("div",{className:"p-16 bg-gray-50",children:e.jsxs("label",{className:"d-box tc-card d-flex align-items-start gap-3",style:{width:"560px"},children:[e.jsx(u,{id:"tc-accept",ariaLabel:"Accept terms and conditions",checked:t,onChange:()=>r(c=>!c)}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("span",{className:"d-block fw-semibold mb-1",children:"I accept the Terms & Conditions"}),e.jsx("small",{className:"text-secondary d-block",children:"By enabling this option, you agree to our terms of service, privacy policy, and electronic communications consent."})]}),e.jsx(F,{className:"tc-check",icon:"CheckCircle",size:"1.25rem"})]})})]})}};var g,y,k,w,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Each row is a \`<label>\` wrapping both the text and the switch. CSS \`:has(input:checked)\` highlights the whole row when enabled — no JS state needed for styling.'
      }
    }
  },
  render: function Render() {
    const items = [{
      id: 'np-email',
      title: 'Email notifications',
      desc: 'Receive updates and alerts via email'
    }, {
      id: 'np-push',
      title: 'Push notifications',
      desc: 'Get real-time alerts on your device'
    }, {
      id: 'np-sms',
      title: 'SMS notifications',
      desc: 'Receive text messages for critical alerts'
    }, {
      id: 'np-digest',
      title: 'Weekly digest',
      desc: 'A summary of your activity every Monday'
    }];
    const [checked, setChecked] = useState<Record<string, boolean>>({
      'np-email': true,
      'np-push': false,
      'np-sms': true,
      'np-digest': false
    });
    return <>
        <style>
          {\`
          .np-row {
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease;
          }
          .np-row:has(input:checked) {
            background-color: var(--bs-primary-bg-subtle);
            border-color: var(--bs-primary) !important;
          }
        \`}
        </style>
        <div style={{
        width: '480px'
      }} className="d-flex flex-column gap-2">
          <h6 className="fw-semibold mb-1">Notification Preferences</h6>
          {items.map(({
          id,
          title,
          desc
        }) => <label key={id} className="np-row d-flex align-items-center justify-content-between gap-3 p-3 rounded border">
              <div>
                <span className="d-block fw-medium">{title}</span>
                <small className="text-secondary">{desc}</small>
              </div>
              <DInputSwitch id={id} ariaLabel={title} checked={checked[id]} onChange={() => setChecked(prev => ({
            ...prev,
            [id]: !prev[id]
          }))} />
            </label>)}
        </div>
      </>;
  }
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source},description:{story:"Vertical notification list where the entire row highlights when the switch is on.\nThe `:has(input:checked)` selector on the `<label>` drives the visual state — no\nextra class toggling required.",...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};var v,S,N,C,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Each feature is a card-sized \`<label>\`. When the switch is on, \`:has(input:checked)\` changes the card border and background, and updates the icon color — all in pure CSS.'
      }
    }
  },
  render: function Render() {
    const features = [{
      id: 'fc-analytics',
      icon: 'BarChart2',
      title: 'Analytics',
      desc: 'Track performance metrics in real time'
    }, {
      id: 'fc-dark',
      icon: 'Moon',
      title: 'Dark mode',
      desc: 'Switch to a darker interface theme'
    }, {
      id: 'fc-2fa',
      icon: 'ShieldCheck',
      title: 'Two-factor auth',
      desc: 'Add an extra layer of security'
    }, {
      id: 'fc-backup',
      icon: 'Cloud',
      title: 'Auto backup',
      desc: 'Automatically save your data daily'
    }];
    const [checked, setChecked] = useState<Record<string, boolean>>({
      'fc-analytics': true,
      'fc-dark': false,
      'fc-2fa': true,
      'fc-backup': false
    });
    return <>
        <style>
          {\`
          .fc-card {
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease;
          }
          .fc-card:has(input:checked) {
            border-color: var(--bs-primary) !important;
            background-color: var(--bs-primary-bg-subtle);
          }
          .fc-card .fc-icon {
            color: var(--bs-secondary-color);
            transition: color 0.2s ease;
          }
          .fc-card:has(input:checked) .fc-icon {
            color: var(--bs-primary);
          }
        \`}
        </style>
        <div className="d-grid gap-3" style={{
        gridTemplateColumns: '1fr 1fr',
        width: '520px'
      }}>
          {features.map(({
          id,
          icon,
          title,
          desc
        }) => <label key={id} className="fc-card d-flex flex-column gap-3 p-4 rounded border">
              <div className="d-flex justify-content-between align-items-start">
                <DIcon icon={icon} size="1.5rem" className="fc-icon" />
                <DInputSwitch id={id} ariaLabel={title} checked={checked[id]} onChange={() => setChecked(prev => ({
              ...prev,
              [id]: !prev[id]
            }))} />
              </div>
              <div>
                <span className="d-block fw-semibold">{title}</span>
                <small className="text-secondary">{desc}</small>
              </div>
            </label>)}
        </div>
      </>;
  }
}`,...(N=(S=d.parameters)==null?void 0:S.docs)==null?void 0:N.source},description:{story:"Card grid where each card fully highlights when its feature is enabled.\nThe icon color also transitions via `:has()`, showing how a single selector\ncan drive multiple child elements.",...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};var A,T,D,R,P;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Grouped settings list inspired by iOS. Each row uses \`:has(input:checked)\` to tint the background and change the label color — no React state drives the visual styling.'
      }
    }
  },
  render: function Render() {
    const sections = [{
      heading: 'Data & Personalization',
      items: [{
        id: 'ps-ads',
        title: 'Personalized ads',
        desc: 'Show ads tailored to your interests'
      }, {
        id: 'ps-share',
        title: 'Third-party sharing',
        desc: 'Share anonymized data with our partners'
      }]
    }, {
      heading: 'App Permissions',
      items: [{
        id: 'ps-location',
        title: 'Location access',
        desc: 'Used to show nearby branches and ATMs'
      }, {
        id: 'ps-crash',
        title: 'Crash reports',
        desc: 'Send diagnostic data to improve the app'
      }]
    }];
    const [checked, setChecked] = useState<Record<string, boolean>>({
      'ps-ads': false,
      'ps-share': false,
      'ps-location': true,
      'ps-crash': true
    });
    return <>
        <style>
          {\`
          .ps-row {
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
          .ps-row:has(input:checked) {
            background-color: var(--bs-primary-bg-subtle);
          }
          .ps-row .ps-title {
            transition: color 0.2s ease;
          }
          .ps-row:has(input:checked) .ps-title {
            color: var(--bs-primary);
          }
        \`}
        </style>
        <div style={{
        width: '480px'
      }} className="d-flex flex-column gap-4">
          {sections.map(({
          heading,
          items
        }) => <div key={heading}>
              <small className="text-secondary text-uppercase fw-semibold d-block mb-2">
                {heading}
              </small>
              <div className="border rounded overflow-hidden">
                {items.map(({
              id,
              title,
              desc
            }, i) => <label key={id} className={\`ps-row d-flex align-items-center m-0 justify-content-between gap-3 p-3\${i < items.length - 1 ? ' border-bottom' : ''}\`}>
                    <div>
                      <span className="d-block fw-medium ps-title">{title}</span>
                      <small className="text-secondary">{desc}</small>
                    </div>
                    <DInputSwitch id={id} ariaLabel={title} checked={checked[id]} onChange={() => setChecked(prev => ({
                ...prev,
                [id]: !prev[id]
              }))} />
                  </label>)}
              </div>
            </div>)}
        </div>
      </>;
  }
}`,...(D=(T=l.parameters)==null?void 0:T.docs)==null?void 0:D.source},description:{story:"iOS-style grouped settings where rows are separated within a bordered section.\nThe active row tints its background and changes the title color via `:has()`.",...(P=(R=l.parameters)==null?void 0:R.docs)==null?void 0:P.description}}};var M,z,I,E,L;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Modern terms acceptance pattern with switch on the left. The full box uses a subtle border and highlighted background when accepted, and shows a trailing check icon using pure CSS \`:has()\`.'
      }
    }
  },
  render: function Render() {
    const [accepted, setAccepted] = useState(false);
    return <>
        <style>
          {\`
          .tc-card {
            cursor: pointer;
            border: 1px solid transparent;
            transition: background-color 0.2s ease, box-shadow 0.2s ease;
          }
          .tc-card:has(input:checked) {
            background-color: var(--bs-primary-bg-subtle);
            border: 1px solid var(--bs-primary-100) !important;
          }
          .tc-card .tc-check {
            opacity: 0;
            transform: scale(0.85);
            color: var(--bs-primary);
            transition: opacity 0.2s ease, transform 0.2s ease;
          }
          .tc-card:has(input:checked) .tc-check {
            opacity: 1;
            transform: scale(1);
          }
        \`}
        </style>

        <div className="p-16 bg-gray-50">
          <label className="d-box tc-card d-flex align-items-start gap-3" style={{
          width: '560px'
        }}>
            <DInputSwitch id="tc-accept" ariaLabel="Accept terms and conditions" checked={accepted} onChange={() => setAccepted(prev => !prev)} />

            <div className="flex-grow-1">
              <span className="d-block fw-semibold mb-1">I accept the Terms & Conditions</span>
              <small className="text-secondary d-block">
                By enabling this option, you agree to our terms of service, privacy policy,
                and electronic communications consent.
              </small>
            </div>

            <DIcon className="tc-check" icon="CheckCircle" size="1.25rem" />
          </label>
        </div>
      </>;
  }
}`,...(I=(z=p.parameters)==null?void 0:z.docs)==null?void 0:I.source},description:{story:"Terms acceptance block with switch on the left, subtle border container,\nand a trailing check icon that appears when accepted using CSS `:has()`.",...(L=(E=p.parameters)==null?void 0:E.docs)==null?void 0:L.description}}};const re=["NotificationPreferences","FeatureCards","PrivacySettings","TermsAndConditionsCard"];export{d as FeatureCards,o as NotificationPreferences,l as PrivacySettings,p as TermsAndConditionsCard,re as __namedExportsOrder,te as default};
