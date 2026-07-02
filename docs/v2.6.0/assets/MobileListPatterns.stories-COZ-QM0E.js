import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./iframe-uxYLpz5U.js";import{M as P}from"./Template-BYBmdpRq.js";import{D as I}from"./DBox-D9tABUbD.js";import{D as k,a as m}from"./DContext-CxvW7UTG.js";import{D as i}from"./DOffcanvas-DtJAxkzU.js";import{D as w}from"./DButtonIcon-C6Szux7S.js";import{D as L}from"./DButton-DQ-qMqS8.js";import{D as d}from"./DIcon-BVWTdsDp.js";import{a as r}from"./DListGroup-Cpp6k9ga.js";import{D as O}from"./DAvatar-DucqockX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CNIzdnjV.js";import"./blocks-B3JaxZiM.js";import"./index-D8qwz0et.js";import"./index-GUYGZJNd.js";import"./index-Bq_YOuQj.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-OWnybX9T.js";const E=[{title:"Relax Yoga",dateLabel:"October 15, Thursday",timeLabel:"09:00 am - 10:30 am",mode:"online",trainer:"Kaylee Kemp",description:"Gentle flow focused on mindful movement and breathing to release stress and improve flexibility.",rating:5},{title:"Boxing for beginners",dateLabel:"October 15, Thursday",timeLabel:"07:30 am - 08:30 am",mode:"online",trainer:"Tyler Green",description:"Introductory boxing routine with coordination drills, posture guidance, and controlled cardio rounds.",rating:4},{title:"Stretching",dateLabel:"October 15, Thursday",timeLabel:"10:00 am - 11:00 am",mode:"big hall",trainer:"Emma Clark",description:"Full body stretching for mobility, posture support, and recovery after medium-intensity training.",rating:4},{title:"Hip-Hop",dateLabel:"October 15, Thursday",timeLabel:"11:20 am - 12:20 pm",mode:"studio A",trainer:"Aaron Jones",description:"Dynamic choreography class with rhythm training, fast transitions, and high-energy combinations.",rating:5}],T=[{id:"limits",icon:"Shield",title:"Card limits",subtitle:"Adjust online and ATM limits"},{id:"security",icon:"Lock",title:"Security center",subtitle:"Review active devices"},{id:"statements",icon:"FileText",title:"Statements",subtitle:"Download monthly statements"}],R={height:"72vh",maxHeight:"72vh",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"},me={title:"Patterns/Mobile/Lists",component:I,parameters:{docs:{page:P,description:{component:`A catalog of mobile list styles for app-like experiences. These examples focus on visual hierarchy, compact readability, and actionable rows.

Open each example in its own Storybook canvas:

- [Cover list](?path=/story/mobile-patterns-mobile-lists--cover-list)
- [Icon list](?path=/story/mobile-patterns-mobile-lists--icon-list)
- [Text only list](?path=/story/mobile-patterns-mobile-lists--text-only-list)
- [Add action list with payload offcanvas](?path=/story/mobile-patterns-mobile-lists--add-action-list-with-payload-offcanvas)
`}}},tags:["autodocs"]};function u({children:s}){return e.jsx("div",{style:{width:"390px",maxWidth:"100%",height:"760px",borderRadius:"1.25rem",border:"1px solid var(--bs-gray-200)",overflow:"hidden",background:"var(--bs-gray-25)",position:"relative"},children:s})}function A(){return e.jsx("div",{className:"d-flex justify-content-center py-2",children:e.jsx("span",{style:{width:"44px",height:"4px",borderRadius:"999px",background:"var(--bs-gray-300)"}})})}function _({name:s,payload:t}){const{closePortal:a}=m();return e.jsxs(i,{name:s,openFrom:"bottom",style:R,children:[e.jsx(A,{}),e.jsx(i.Header,{onClose:a,showCloseButton:!0,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-1 fw-semibold",children:t.title}),e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("small",{className:"text-muted",children:t.dateLabel}),e.jsx("span",{className:"rounded-pill px-2 py-1",style:{fontSize:"11px",lineHeight:1,background:"var(--bs-gray-100)",color:"var(--bs-gray-700)"},children:t.mode})]})]})}),e.jsxs(i.Body,{className:"d-flex flex-column gap-3",children:[e.jsxs("div",{className:"p-3 border rounded-2 bg-white d-flex justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsx("small",{className:"text-muted d-block",children:"Trainer"}),e.jsx("strong",{children:t.trainer})]}),e.jsx(w,{variant:"link",icon:"MessageCircle","aria-label":`Contact ${t.trainer}`})]}),e.jsxs("div",{className:"p-3 border rounded-2 bg-white",children:[e.jsx("small",{className:"text-muted d-block mb-1",children:"Session time"}),e.jsx("strong",{children:t.timeLabel})]}),e.jsxs("div",{className:"p-3 border rounded-2 bg-white",children:[e.jsx("small",{className:"text-muted d-block mb-1",children:"About this class"}),e.jsx("p",{className:"mb-0",children:t.description})]}),e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("small",{className:"text-muted",children:"Rating"}),e.jsx("span",{style:{color:"var(--bs-warning)"},children:"★".repeat(t.rating)}),e.jsx("span",{className:"text-muted",children:"☆".repeat(Math.max(0,5-t.rating))})]})]}),e.jsx(i.Footer,{actionPlacement:"fill",children:e.jsx(L,{text:"Add to my schedule",onClick:a})})]})}function G({name:s,payload:t}){const{closePortal:a}=m();return e.jsxs(i,{name:s,openFrom:"end",style:{width:"360px",maxWidth:"100vw"},children:[e.jsx(i.Header,{onClose:a,showCloseButton:!0,children:e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx(d,{icon:t.icon,className:"text-primary"}),e.jsx("h5",{className:"mb-0 fw-semibold",children:t.title})]})}),e.jsx(i.Body,{className:"d-flex flex-column gap-3",children:e.jsxs("div",{className:"p-3 border rounded-2 bg-white",children:[e.jsx("small",{className:"text-muted d-block mb-1",children:"Description"}),e.jsx("p",{className:"mb-0",children:t.subtitle})]})}),e.jsx(i.Footer,{actionPlacement:"fill",children:e.jsx(L,{text:"Done",onClick:a})})]})}const B=String.raw`function CoverListExample() {
  return (
    <div className="h-100 p-3" style={{ background: 'linear-gradient(180deg, #f4faf7 0%, #ffffff 34%)' }}>
      <h5 className="mb-1">Top picks</h5>
      <small className="text-muted d-block mb-3">Card-style rows with visual emphasis</small>
      <DListGroup className="d-flex flex-column gap-2 border-0 bg-transparent">
        {[
          {
            id: '1',
            title: 'Morning reset',
            subtitle: '12 min guided session',
            accent: '#0ea5e9',
          },
          {
            id: '2',
            title: 'Focus sprint',
            subtitle: '25 min deep work timer',
            accent: '#10b981',
          },
          {
            id: '3',
            title: 'Stretch break',
            subtitle: '8 min mobility flow',
            accent: '#f97316',
          },
        ].map((item) => (
          <DListGroup.Item key={item.id} className="rounded-3 border bg-white p-3 shadow-sm d-block">
            <div className="d-flex gap-3 align-items-center">
              <div className="rounded-3" style={{ width: '64px', height: '64px', background: item.accent }} />
              <div>
                <strong className="d-block">{item.title}</strong>
                <small className="text-muted">{item.subtitle}</small>
              </div>
            </div>
          </DListGroup.Item>
        ))}
      </DListGroup>
    </div>
  );
}`,M=String.raw`import {
  DBox,
  DButton,
  DContextProvider,
  DIcon,
  DListGroup,
  DOffcanvas,
  type PortalProps,
  useDPortalContext,
} from '../../src';

type QuickServicePayloads = {
  quickService: {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
  };
};

const QUICK_SERVICES: QuickServicePayloads['quickService'][] = [
  { id: 'limits', icon: 'Shield', title: 'Card limits', subtitle: 'Adjust online and ATM limits' },
  { id: 'security', icon: 'Lock', title: 'Security center', subtitle: 'Review active devices' },
  { id: 'statements', icon: 'FileText', title: 'Statements', subtitle: 'Download monthly statements' },
];

function QuickServiceSheet({ name, payload }: PortalProps<QuickServicePayloads['quickService']>) {
  const { closePortal } = useDPortalContext<QuickServicePayloads>();
  return (
    <DOffcanvas name={name} openFrom="end" style={{ width: '360px', maxWidth: '100vw' }}>
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <div className="d-flex align-items-center gap-2">
          <DIcon icon={payload.icon} className="text-primary" />
          <h5 className="mb-0 fw-semibold">{payload.title}</h5>
        </div>
      </DOffcanvas.Header>
      <DOffcanvas.Body className="d-flex flex-column gap-3">
        <div className="p-3 border rounded-2 bg-white">
          <small className="text-muted d-block mb-1">Description</small>
          <p className="mb-0">{payload.subtitle}</p>
        </div>
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="fill">
        <DButton text="Done" onClick={closePortal} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function IconListExample() {
  const { openPortal } = useDPortalContext<QuickServicePayloads>();

  return (
    <div className="h-100 p-3" style={{ background: 'linear-gradient(180deg, #eef4ff 0%, #ffffff 34%)' }}>
      <h5 className="mb-1">Quick services</h5>
      <small className="text-muted d-block mb-3">Rows with icon, metadata and trailing action</small>
      <DListGroup className="rounded-3 bg-white overflow-hidden">
        {QUICK_SERVICES.map((item) => (
          <DListGroup.Item key={item.id} action onClick={() => openPortal('quickService', item)} className="d-flex align-items-center">
            <DIcon icon={item.icon} className="me-3 text-primary" size="1.15rem" />
            <div className="flex-grow-1">
              <strong className="d-block">{item.title}</strong>
              <small className="text-muted">{item.subtitle}</small>
            </div>
            <DIcon icon="ChevronRight" className="text-muted" />
          </DListGroup.Item>
        ))}
      </DListGroup>
    </div>
  );
}

export const IconList = {
  render: () => (
    <DContextProvider<QuickServicePayloads>
      portalName="mobileListQuickServices"
      availablePortals={{ quickService: QuickServiceSheet }}
    >
      <IconListExample />
    </DContextProvider>
  ),
};`,Q=String.raw`function TextOnlyListExample() {
  return (
    <div className="h-100 p-3" style={{ background: 'linear-gradient(180deg, #fff8ef 0%, #ffffff 34%)' }}>
      <h5 className="mb-1">Recent notes</h5>
      <small className="text-muted d-block mb-3">Minimal typography-first rows</small>
      <DListGroup className="rounded-3">
        {[
          { id: '1', title: 'Quarterly review draft', meta: 'Edited 2h ago' },
          { id: '2', title: 'Client onboarding checklist', meta: 'Edited yesterday' },
          { id: '3', title: 'Design tokens migration', meta: 'Edited 2 days ago' },
          { id: '4', title: 'Release notes v3.4', meta: 'Edited 5 days ago' },
        ].map((item) => (
          <DListGroup.Item key={item.id} className="px-3 py-3 border-bottom bg-white">
            <strong className="d-block" style={{ fontSize: '15px' }}>{item.title}</strong>
            <small className="text-muted">{item.meta}</small>
          </DListGroup.Item>
        ))}
      </DListGroup>
    </div>
  );
}`,H=String.raw`import { useMemo } from 'react';
import {
  DAvatar,
  DButton,
  DButtonIcon,
  DContextProvider,
  DIcon,
  DListGroup,
  DOffcanvas,
  type PortalProps,
  useDPortalContext,
} from '../../src';

type SchedulePayloads = {
  scheduleDetail: {
    title: string;
    dateLabel: string;
    timeLabel: string;
    mode: string;
    trainer: string;
    description: string;
    rating: number;
  };
};

const SESSIONS: SchedulePayloads['scheduleDetail'][] = [
  {
    title: 'Relax Yoga',
    dateLabel: 'October 15, Thursday',
    timeLabel: '09:00 am - 10:30 am',
    mode: 'online',
    trainer: 'Kaylee Kemp',
    description: 'Gentle flow focused on mindful movement and breathing to release stress and improve flexibility.',
    rating: 5,
  },
  {
    title: 'Boxing for beginners',
    dateLabel: 'October 15, Thursday',
    timeLabel: '07:30 am - 08:30 am',
    mode: 'online',
    trainer: 'Tyler Green',
    description: 'Introductory boxing routine with coordination drills, posture guidance, and controlled cardio rounds.',
    rating: 4,
  },
  {
    title: 'Stretching',
    dateLabel: 'October 15, Thursday',
    timeLabel: '10:00 am - 11:00 am',
    mode: 'big hall',
    trainer: 'Emma Clark',
    description: 'Full body stretching for mobility, posture support, and recovery after medium-intensity training.',
    rating: 4,
  },
  {
    title: 'Hip-Hop',
    dateLabel: 'October 15, Thursday',
    timeLabel: '11:20 am - 12:20 pm',
    mode: 'studio A',
    trainer: 'Aaron Jones',
    description: 'Dynamic choreography class with rhythm training, fast transitions, and high-energy combinations.',
    rating: 5,
  },
];

function AddActionListWithPayloadExample() {
  const { openPortal } = useDPortalContext<SchedulePayloads>();
  const sessionsWithRandomRating = useMemo(
    () => SESSIONS.map((session) => ({
      ...session,
      rating: Math.floor(Math.random() * 5) + 1,
    })),
    [],
  );

  return (
    <div className="h-100 d-flex flex-column" style={{ background: 'linear-gradient(180deg, #8041c3 0%, #f8f1f4 28%, #ffffff00 100%)' }}>
      <div className="px-4 pt-4 pb-3 text-white">
        <DIcon icon="Dumbbell" size="2rem" hasCircle />
        <h5 className="mb-0">Gym schedule</h5>
        <small className="opacity-75">Tap plus to open detail with payload</small>
      </div>

      <DListGroup className="gap-2 mx-3" flush>
        {sessionsWithRandomRating.map((session) => (
          <DListGroup.Item
            key={session.title}
            className="d-flex align-items-center justify-content-between rounded-3 shadow-sm bg-white"
          >
            <div className="d-flex align-items-center gap-2">
              <DAvatar name={session.trainer} size="sm" />
              <div>
                <strong className="d-block" style={{ fontSize: '15px', lineHeight: 1.15 }}>{session.title}</strong>
                <small className="text-muted">
                  {session.timeLabel}
                  {', '}
                  {session.mode}
                </small>
                <div style={{ fontSize: '11px', lineHeight: 1, color: 'var(--bs-warning)' }}>
                  {'★'.repeat(session.rating)}
                  <span className="text-muted">
                    {'☆'.repeat(Math.max(0, 5 - session.rating))}
                  </span>
                </div>
              </div>
            </div>

            <DButtonIcon
              icon="Plus"
              size="sm"
              className="rounded-pill"
              color="primary"
              aria-label={'Open details for ' + session.title}
              onClick={() => openPortal('scheduleDetail', session)}
            />
          </DListGroup.Item>
        ))}
      </DListGroup>
    </div>
  );
}`;function z(){return e.jsx(u,{children:e.jsxs("div",{className:"h-100 p-3",style:{background:"linear-gradient(180deg, #f4faf7 0%, #ffffff 34%)"},children:[e.jsx("h5",{className:"mb-1",children:"Top picks"}),e.jsx("small",{className:"text-muted d-block mb-3",children:"Card-style rows with visual emphasis"}),e.jsx(r,{className:"d-flex flex-column gap-2 border-0 bg-transparent",children:[{id:"1",title:"Morning reset",subtitle:"12 min guided session",accent:"#0ea5e9"},{id:"2",title:"Focus sprint",subtitle:"25 min deep work timer",accent:"#10b981"},{id:"3",title:"Stretch break",subtitle:"8 min mobility flow",accent:"#f97316"}].map(s=>e.jsx(r.Item,{className:"rounded-3 border bg-white p-3 shadow-sm d-block",children:e.jsxs("div",{className:"d-flex gap-3 align-items-center",children:[e.jsx("div",{className:"rounded-3",style:{width:"64px",height:"64px",background:s.accent}}),e.jsxs("div",{children:[e.jsx("strong",{className:"d-block",children:s.title}),e.jsx("small",{className:"text-muted",children:s.subtitle})]})]})},s.id))})]})})}function F(){const{openPortal:s}=m();return e.jsx(u,{children:e.jsxs("div",{className:"h-100 p-3",style:{background:"linear-gradient(180deg, #eef4ff 0%, #ffffff 34%)"},children:[e.jsx("h5",{className:"mb-1",children:"Quick services"}),e.jsx("small",{className:"text-muted d-block mb-3",children:"Rows with icon, metadata and trailing action"}),e.jsx(r,{className:"rounded-3 bg-white overflow-hidden",children:T.map(t=>e.jsxs(r.Item,{action:!0,onClick:()=>s("quickService",t),className:"d-flex align-items-center",children:[e.jsx(d,{icon:t.icon,className:"me-3 text-primary",size:"1.15rem"}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("strong",{className:"d-block",children:t.title}),e.jsx("small",{className:"text-muted",children:t.subtitle})]}),e.jsx(d,{icon:"ChevronRight",className:"text-muted"})]},t.id))})]})})}function W(){return e.jsx(u,{children:e.jsxs("div",{className:"h-100 p-3",style:{background:"linear-gradient(180deg, #fff8ef 0%, #ffffff 34%)"},children:[e.jsx("h5",{className:"mb-1",children:"Recent notes"}),e.jsx("small",{className:"text-muted d-block mb-3",children:"Minimal typography-first rows"}),e.jsx(r,{className:"rounded-3",children:[{id:"1",title:"Quarterly review draft",meta:"Edited 2h ago"},{id:"2",title:"Client onboarding checklist",meta:"Edited yesterday"},{id:"3",title:"Design tokens migration",meta:"Edited 2 days ago"},{id:"4",title:"Release notes v3.4",meta:"Edited 5 days ago"}].map(s=>e.jsxs(r.Item,{className:"px-3 py-3 border-bottom bg-white",children:[e.jsx("strong",{className:"d-block",style:{fontSize:"15px"},children:s.title}),e.jsx("small",{className:"text-muted",children:s.meta})]},s.id))})]})})}function U(){const{openPortal:s}=m(),t=C.useMemo(()=>E.map(a=>({...a,rating:Math.floor(Math.random()*5)+1})),[]);return e.jsx(u,{children:e.jsxs("div",{className:"h-100 d-flex flex-column",style:{background:"linear-gradient(180deg, #8041c3 0%, #f8f1f4 28%, #ffffff00 100%)"},children:[e.jsxs("div",{className:"px-4 pt-4 pb-3 text-white",children:[e.jsx(d,{icon:"Dumbbell",size:"2rem",hasCircle:!0}),e.jsx("h5",{className:"mb-0",children:"Gym schedule"}),e.jsx("small",{className:"opacity-75",children:"Tap plus to open detail with payload"})]}),e.jsx(r,{className:"gap-2 mx-3",flush:!0,children:t.map(a=>e.jsxs(r.Item,{className:"d-flex align-items-center justify-content-between rounded-3 shadow-sm bg-white",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx(O,{name:a.trainer,size:"sm"}),e.jsxs("div",{children:[e.jsx("strong",{className:"d-block",style:{fontSize:"15px",lineHeight:1.15},children:a.title}),e.jsxs("small",{className:"text-muted",children:[a.timeLabel,", ",a.mode]}),e.jsxs("div",{style:{fontSize:"11px",lineHeight:1,color:"var(--bs-warning)"},children:["★".repeat(a.rating),e.jsx("span",{className:"text-muted",children:"☆".repeat(Math.max(0,5-a.rating))})]})]})]}),e.jsx(w,{icon:"Plus",size:"sm",className:"rounded-pill",color:"primary","aria-label":`Open details for ${a.title}`,onClick:()=>s("scheduleDetail",a)})]},a.title))})]})})}const l={parameters:{docs:{source:{code:B,language:"tsx"}}},render:()=>e.jsx(z,{})},o={parameters:{docs:{source:{code:M,language:"tsx"}}},render:()=>e.jsx(k,{portalName:"mobileListQuickServices",availablePortals:{quickService:G},children:e.jsx(F,{})})},n={parameters:{docs:{source:{code:Q,language:"tsx"}}},render:()=>e.jsx(W,{})},c={parameters:{docs:{description:{story:"List rows include a plus button using DButtonIcon. Each tap opens a bottom offcanvas and sends the selected row payload."},source:{code:H,language:"tsx"}}},render:()=>e.jsx(k,{portalName:"mobileListPatternSchedule",availablePortals:{scheduleDetail:_},children:e.jsx(U,{})})};var p,h,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: COVER_LIST_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <CoverListExample />
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,b,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: ICON_LIST_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <DContextProvider<QuickServicePayloads> portalName="mobileListQuickServices" availablePortals={{
    quickService: QuickServiceSheet
  }}>
      <IconListExample />
    </DContextProvider>
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,y,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: TEXT_ONLY_LIST_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <TextOnlyListExample />
}`,...(N=(y=n.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var j,D,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'List rows include a plus button using DButtonIcon. Each tap opens a bottom offcanvas and sends the selected row payload.'
      },
      source: {
        code: ADD_ACTION_WITH_PAYLOAD_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <DContextProvider<SchedulePayloads> portalName="mobileListPatternSchedule" availablePortals={{
    scheduleDetail: ScheduleDetailSheet
  }}>
      <AddActionListWithPayloadExample />
    </DContextProvider>
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const ue=["CoverList","IconList","TextOnlyList","AddActionListWithPayloadOffcanvas"];export{c as AddActionListWithPayloadOffcanvas,l as CoverList,o as IconList,n as TextOnlyList,ue as __namedExportsOrder,me as default};
