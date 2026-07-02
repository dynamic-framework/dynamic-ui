import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-DkjceUUU.js";import{M as $}from"./Template-D3iTeei6.js";import{D as n}from"./DProgress-CoJ_FnNE.js";import{D as u}from"./DBox-DyjlUDDM.js";import{D as A}from"./DButton-BUrFSCCL.js";import{D as B}from"./DIcon-CBkIH7ym.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CYNyJDzm.js";import"./blocks-B0SbRRHM.js";import"./index-p6Xuepxi.js";import"./index-DxZ9-uFP.js";import"./index-CtlKHQhD.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-C9viAbpR.js";import"./DContext-BbaizxMa.js";const _={title:"Patterns/Progress",component:n,parameters:{docs:{page:$,description:{component:"Modern, real-world patterns for `DProgress`: onboarding completion, file upload queues, and financial goal tracking."}}},tags:["autodocs"]},d={parameters:{docs:{description:{story:"Interactive onboarding checklist where progress updates as tasks are completed. Useful for activation funnels and setup wizards."}}},render:function(){const[r,s]=i.useState({profile:!0,company:!1,team:!1,payments:!1}),t=i.useMemo(()=>[{id:"profile",title:"Complete your profile",hint:"Name, avatar, and contact details"},{id:"company",title:"Add company information",hint:"Tax ID, industry, and billing data"},{id:"team",title:"Invite your team",hint:"Collaborators and permission roles"},{id:"payments",title:"Configure payment methods",hint:"Card or bank account setup"}],[]),g=i.useMemo(()=>t.filter(a=>r[a.id]).length,[t,r]),l=Math.round(g/t.length*100),D=i.useMemo(()=>({"--bs-progress-bar-bg":`color-mix(in srgb, var(--bs-warning), var(--bs-success) ${l}%)`}),[l]);return e.jsxs(u,{className:"p-6",style:{width:"620px"},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1 fw-semibold",children:"Workspace onboarding"}),e.jsx("small",{className:"text-secondary",children:`Complete ${g} of ${t.length} tasks`})]}),e.jsx("span",{className:"badge bg-primary-subtle text-primary px-3 py-2 rounded-pill",children:`${l}%`})]}),e.jsx(n,{currentValue:l,maxValue:100,hideCurrentValue:!0,height:8,className:"mb-4",style:D}),e.jsx("div",{className:"d-flex flex-column gap-2",children:t.map(a=>e.jsxs("button",{type:"button","aria-pressed":r[a.id],onClick:()=>s(b=>({...b,[a.id]:!b[a.id]})),className:"d-flex align-items-start gap-3 p-3 border rounded bg-white text-start",children:[e.jsx("span",{"aria-hidden":"true",children:e.jsx(B,{icon:r[a.id]?"CheckCircle":"Circle",className:r[a.id]?"text-success mt-1":"text-secondary mt-1"})}),e.jsxs("span",{children:[e.jsx("span",{className:"d-block fw-medium",children:a.title}),e.jsx("small",{className:"text-secondary",children:a.hint})]})]},a.id))})]})}},c={parameters:{docs:{description:{story:"Multiple progress bars in a queue for file uploads. Includes active, completed, and retry states commonly seen in modern data import experiences."}}},render:()=>{const o=[{id:"1",name:"contracts-q2.csv",size:"4.8 MB",progress:100,status:"completed"},{id:"2",name:"customer-segments.xlsx",size:"12.1 MB",progress:72,status:"uploading"},{id:"3",name:"legacy-contacts.json",size:"8.4 MB",progress:38,status:"retry"}],r={completed:{"--bs-progress-bar-bg":"var(--bs-success)"},uploading:{"--bs-progress-bar-bg":"var(--bs-primary)"},retry:{"--bs-progress-bar-bg":"var(--bs-warning)"}};return e.jsxs(u,{className:"p-6",style:{width:"620px"},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1 fw-semibold",children:"Bulk import progress"}),e.jsx("small",{className:"text-secondary",children:"Track and retry failed uploads without leaving the flow"})]}),e.jsx(A,{text:"Add files",size:"sm"})]}),e.jsx("div",{className:"d-flex flex-column gap-3",children:o.map(s=>e.jsxs("div",{className:"p-3 border rounded bg-white",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[e.jsx("span",{className:"fw-medium",children:s.name}),e.jsx("small",{className:"text-secondary",children:`${s.size} - ${s.progress}%`})]}),e.jsx(n,{currentValue:s.progress,maxValue:100,hideCurrentValue:!0,enableStripedAnimation:s.status==="uploading",height:7,style:r[s.status]})]},s.id))})]})}},m={parameters:{docs:{description:{story:"Financial goal tracker with contextual numbers around the progress bar. Useful for savings targets, debt payoff plans, or fundraising milestones."}}},render:()=>{const s=Math.round(64);return e.jsx("div",{className:"p-12 bg-gray-50",style:{width:"620px"},children:e.jsxs(u,{className:"p-6",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsxs("div",{children:[e.jsx("small",{className:"text-secondary d-block",children:"Emergency fund"}),e.jsx("h5",{className:"mb-0 fw-semibold",children:`$${12800 .toLocaleString()} saved`})]}),e.jsx("span",{className:"badge bg-info-subtle text-info px-3 py-2 rounded-pill",children:`${s}% of goal`})]}),e.jsx(n,{currentValue:12800,maxValue:2e4,hideCurrentValue:!0,height:10,className:"mb-2",style:{"--bs-progress-bar-bg":"var(--bs-info)"}}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("small",{className:"text-secondary",children:"$0"}),e.jsx("small",{className:"text-secondary",children:`Goal: $${2e4.toLocaleString()}`})]})]})})}},p={parameters:{docs:{description:{story:"Custom className example with a modern outline style. Useful for marketing goals, campaign pacing, or KPI cards when the design calls for bordered surfaces."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
            .campaign-progress {
              --bs-progress-height: auto;
              --bs-progress-bg: transparent;
              border-radius: 999px;
              border: 2px solid var(--bs-primary-200);
              padding: 2px;
              overflow: hidden;
            }

            .campaign-progress .progress-bar {
              background: var(--bs-primary-100);
              border-radius: var(--bs-border-radius-pill);
              color: var(--bs-primary-700);
            }
          `}),e.jsx("div",{className:"p-12 bg-gray-50",style:{width:"700px"},children:e.jsxs(u,{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsxs("div",{children:[e.jsx("small",{className:"text-secondary d-block",children:"Q3 Growth Campaign"}),e.jsx("h6",{className:"mb-0 fw-semibold",children:"Lead generation progress"})]}),e.jsx("span",{className:"badge bg-primary-subtle text-primary px-3 py-2 rounded-pill",children:"64%"})]}),e.jsx(n,{className:"campaign-progress",currentValue:64,maxValue:100,hideCurrentValue:!1}),e.jsxs("div",{className:"d-flex justify-content-between mt-2",children:[e.jsx("small",{className:"text-secondary",children:"0 leads"}),e.jsx("small",{className:"text-secondary",children:"Target: 1,200 leads"})]})]})})]})};var x,h,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interactive onboarding checklist where progress updates as tasks are completed. Useful for activation funnels and setup wizards.'
      }
    }
  },
  render: function Render() {
    const [done, setDone] = useState<Record<string, boolean>>({
      profile: true,
      company: false,
      team: false,
      payments: false
    });
    const steps = useMemo(() => [{
      id: 'profile',
      title: 'Complete your profile',
      hint: 'Name, avatar, and contact details'
    }, {
      id: 'company',
      title: 'Add company information',
      hint: 'Tax ID, industry, and billing data'
    }, {
      id: 'team',
      title: 'Invite your team',
      hint: 'Collaborators and permission roles'
    }, {
      id: 'payments',
      title: 'Configure payment methods',
      hint: 'Card or bank account setup'
    }], []);
    const completed = useMemo(() => steps.filter(step => done[step.id]).length, [steps, done]);
    const percentage = Math.round(completed / steps.length * 100);
    const progressStyle = useMemo(() => ({
      '--bs-progress-bar-bg': \`color-mix(in srgb, var(--bs-warning), var(--bs-success) \${percentage}%)\`
    }) as CSSProperties, [percentage]);
    return <DBox className="p-6" style={{
      width: '620px'
    }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 className="mb-1 fw-semibold">Workspace onboarding</h6>
            <small className="text-secondary">{\`Complete \${completed} of \${steps.length} tasks\`}</small>
          </div>
          <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
            {\`\${percentage}%\`}
          </span>
        </div>

        <DProgress currentValue={percentage} maxValue={100} hideCurrentValue height={8} className="mb-4" style={progressStyle} />

        <div className="d-flex flex-column gap-2">
          {steps.map(step => <button key={step.id} type="button" aria-pressed={done[step.id]} onClick={() => setDone(prev => ({
          ...prev,
          [step.id]: !prev[step.id]
        }))} className="d-flex align-items-start gap-3 p-3 border rounded bg-white text-start">
              <span aria-hidden="true">
                <DIcon icon={done[step.id] ? 'CheckCircle' : 'Circle'} className={done[step.id] ? 'text-success mt-1' : 'text-secondary mt-1'} />
              </span>
              <span>
                <span className="d-block fw-medium">{step.title}</span>
                <small className="text-secondary">{step.hint}</small>
              </span>
            </button>)}
        </div>
      </DBox>;
  }
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,v,N;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Multiple progress bars in a queue for file uploads. Includes active, completed, and retry states commonly seen in modern data import experiences.'
      }
    }
  },
  render: () => {
    const uploads = [{
      id: '1',
      name: 'contracts-q2.csv',
      size: '4.8 MB',
      progress: 100,
      status: 'completed'
    }, {
      id: '2',
      name: 'customer-segments.xlsx',
      size: '12.1 MB',
      progress: 72,
      status: 'uploading'
    }, {
      id: '3',
      name: 'legacy-contacts.json',
      size: '8.4 MB',
      progress: 38,
      status: 'retry'
    }] as const;
    const styleByStatus: Record<string, CSSProperties> = {
      completed: {
        '--bs-progress-bar-bg': 'var(--bs-success)'
      } as CSSProperties,
      uploading: {
        '--bs-progress-bar-bg': 'var(--bs-primary)'
      } as CSSProperties,
      retry: {
        '--bs-progress-bar-bg': 'var(--bs-warning)'
      } as CSSProperties
    };
    return <DBox className="p-6" style={{
      width: '620px'
    }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h6 className="mb-1 fw-semibold">Bulk import progress</h6>
            <small className="text-secondary">Track and retry failed uploads without leaving the flow</small>
          </div>
          <DButton text="Add files" size="sm" />
        </div>

        <div className="d-flex flex-column gap-3">
          {uploads.map(file => <div key={file.id} className="p-3 border rounded bg-white">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-medium">{file.name}</span>
                <small className="text-secondary">{\`\${file.size} - \${file.progress}%\`}</small>
              </div>
              <DProgress currentValue={file.progress} maxValue={100} hideCurrentValue enableStripedAnimation={file.status === 'uploading'} height={7} style={styleByStatus[file.status]} />
            </div>)}
        </div>
      </DBox>;
  }
}`,...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var j,w,C;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Financial goal tracker with contextual numbers around the progress bar. Useful for savings targets, debt payoff plans, or fundraising milestones.'
      }
    }
  },
  render: () => {
    const currentAmount = 12800;
    const goalAmount = 20000;
    const percentage = Math.round(currentAmount * 100 / goalAmount);
    return <div className="p-12 bg-gray-50" style={{
      width: '620px'
    }}>
        <DBox className="p-6">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <small className="text-secondary d-block">Emergency fund</small>
              <h5 className="mb-0 fw-semibold">{\`$\${currentAmount.toLocaleString()} saved\`}</h5>
            </div>
            <span className="badge bg-info-subtle text-info px-3 py-2 rounded-pill">
              {\`\${percentage}% of goal\`}
            </span>
          </div>

          <DProgress currentValue={currentAmount} maxValue={goalAmount} hideCurrentValue height={10} className="mb-2" style={{
          '--bs-progress-bar-bg': 'var(--bs-info)'
        } as CSSProperties} />

          <div className="d-flex justify-content-between">
            <small className="text-secondary">$0</small>
            <small className="text-secondary">{\`Goal: $\${goalAmount.toLocaleString()}\`}</small>
          </div>
        </DBox>
      </div>;
  }
}`,...(C=(w=m.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,S,V;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Custom className example with a modern outline style. Useful for marketing goals, campaign pacing, or KPI cards when the design calls for bordered surfaces.'
      }
    }
  },
  render: () => {
    const currentValue = 64;
    const maxValue = 100;
    return <>
        <style>
          {\`
            .campaign-progress {
              --bs-progress-height: auto;
              --bs-progress-bg: transparent;
              border-radius: 999px;
              border: 2px solid var(--bs-primary-200);
              padding: 2px;
              overflow: hidden;
            }

            .campaign-progress .progress-bar {
              background: var(--bs-primary-100);
              border-radius: var(--bs-border-radius-pill);
              color: var(--bs-primary-700);
            }
          \`}
        </style>
        <div className="p-12 bg-gray-50" style={{
        width: '700px'
      }}>
          <DBox>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <small className="text-secondary d-block">Q3 Growth Campaign</small>
                <h6 className="mb-0 fw-semibold">Lead generation progress</h6>
              </div>
              <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                {\`\${currentValue}%\`}
              </span>
            </div>

            <DProgress className="campaign-progress" currentValue={currentValue} maxValue={maxValue} hideCurrentValue={false} />

            <div className="d-flex justify-content-between mt-2">
              <small className="text-secondary">0 leads</small>
              <small className="text-secondary">Target: 1,200 leads</small>
            </div>
          </DBox>
        </div>
      </>;
  }
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const X=["OnboardingChecklist","FileUploadQueue","SavingsGoalTracker","GradientCampaignProgress"];export{c as FileUploadQueue,p as GradientCampaignProgress,d as OnboardingChecklist,m as SavingsGoalTracker,X as __namedExportsOrder,_ as default};
