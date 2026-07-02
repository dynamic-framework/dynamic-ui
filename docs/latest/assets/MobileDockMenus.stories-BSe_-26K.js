import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-uxYLpz5U.js";import{M as U}from"./Template-BYBmdpRq.js";import{D as F}from"./DBox-D9tABUbD.js";import{D as l}from"./DButton-DQ-qMqS8.js";import{D as b}from"./DIcon-BVWTdsDp.js";import{D as G}from"./DButtonIcon-C6Szux7S.js";import{D as P}from"./DDropdown-6KmhgPTC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CNIzdnjV.js";import"./blocks-B3JaxZiM.js";import"./index-D8qwz0et.js";import"./index-GUYGZJNd.js";import"./index-Bq_YOuQj.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-OWnybX9T.js";import"./DContext-CxvW7UTG.js";const c=[{id:"home",label:"Home",icon:"House"},{id:"accounts",label:"Accounts",icon:"Wallet"},{id:"transfer",label:"Transfer",icon:"ArrowLeftRight"},{id:"cards",label:"Cards",icon:"CreditCard"},{id:"more",label:"More",icon:"Grid"}],z=[{id:"home",label:"Home",icon:"House"},{id:"accounts",label:"Accounts",icon:"Wallet"},{id:"transfer",label:"Transfer",icon:"ArrowLeftRight"},{id:"payments",label:"Pay",icon:"Receipt"},{id:"cards",label:"Cards",icon:"CreditCard"},{id:"invest",label:"Invest",icon:"TrendingUp"},{id:"insurance",label:"Insurance",icon:"Shield"},{id:"support",label:"Support",icon:"Headset"},{id:"profile",label:"Profile",icon:"UserRound"}],N=[{id:"home",label:"Home",icon:"House"},{id:"accounts",label:"Accounts",icon:"Wallet"},{id:"transfer",label:"Transfer",icon:"ArrowLeftRight"},{id:"cards",label:"Cards",icon:"CreditCard"},{id:"profile",label:"Profile",icon:"UserRound"}],v=[{id:"home",label:"Home"},{id:"accounts",label:"Accounts"},{id:"inbox",label:"Inbox",notifications:6},{id:"payments",label:"Payments"},{id:"more",label:"More"}],Ne={title:"Patterns/Mobile/Dock Menus",component:F,parameters:{docs:{page:U,description:{component:"Fixed mobile dock menus with sober visual style: rounded border container, icon + label items, and variants for adaptive grid or internal horizontal scroll."}}},tags:["autodocs"]};function n({children:t}){return e.jsx("div",{className:"bg-gray-25 border position-relative overflow-hidden rounded-2",style:{width:"390px",maxWidth:"100%",height:"760px"},children:t})}function V({open:t,toggle:s}){return e.jsx(l,{variant:"link",onClick:s,color:"secondary",size:"sm",text:"More",iconEnd:"MoreVertical",className:t?"fw-semibold":"fw-normal"})}const X=String.raw`import { DButton, DIcon } from '../../src';

const GRID_DOCK_ITEMS = [
  { id: 'home', label: 'Home', icon: 'House' },
  { id: 'accounts', label: 'Accounts', icon: 'Wallet' },
  { id: 'transfer', label: 'Transfer', icon: 'ArrowLeftRight' },
  { id: 'cards', label: 'Cards', icon: 'CreditCard' },
  { id: 'more', label: 'More', icon: 'Grid' },
];

function FixedGridDockMenuExample() {
  return (
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '104px' }}>
          <h5 className="mb-1">Overview</h5>
          <small className="text-muted">Fixed menu in mobile app style</small>
          <div className="card p-3 mt-3">
            <small className="text-muted">Available</small>
            <h3 className="mb-0">$8,430.20</h3>
          </div>
        </div>
        <div className="position-absolute start-0 end-0" style={{ bottom: '12px', paddingInline: '12px' }}>
          <nav aria-label="Fixed grid mobile menu" className="bg-white border rounded-2" style={{ borderColor: 'var(--bs-gray-200)', boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)' }}>
            <div className="d-grid p-1" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
              {GRID_DOCK_ITEMS.map((item) => (
                <DButton key={item.id} variant="link" className="flex-column align-items-center justify-content-center">
                  <DIcon icon={item.icon} size="1.1rem" className="text-gray-700" />
                  <small className="text-gray-700" style={{ fontSize: '11px', lineHeight: 1.1 }}>{item.label}</small>
                </DButton>
              ))}
            </div>
          </nav>
        </div>
      </div>
  );
}`,Y=String.raw`import { DButton, DIcon } from '../../src';

const H_SCROLL_DOCK_ITEMS = [
  { id: 'home', label: 'Home', icon: 'House' },
  { id: 'accounts', label: 'Accounts', icon: 'Wallet' },
  { id: 'transfer', label: 'Transfer', icon: 'ArrowLeftRight' },
  { id: 'payments', label: 'Pay', icon: 'Receipt' },
  { id: 'cards', label: 'Cards', icon: 'CreditCard' },
  { id: 'invest', label: 'Invest', icon: 'TrendingUp' },
  { id: 'insurance', label: 'Insurance', icon: 'Shield' },
  { id: 'support', label: 'Support', icon: 'Headset' },
  { id: 'profile', label: 'Profile', icon: 'UserRound' },
];

function HorizontalScrollDockMenuExample() {
  return (
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Services</h5>
          <small className="text-muted">Quick shortcuts with horizontal scroll</small>
          <div className="card p-3 mt-3">
            <small className="text-muted">Active products</small>
            <strong>7 products</strong>
          </div>
        </div>
        <div className="position-absolute start-0 end-0" style={{ bottom: '12px', paddingInline: '12px' }}>
          <nav aria-label="Horizontal scroll mobile menu" className="bg-white border rounded-2 p-1" style={{ borderColor: 'var(--bs-gray-200)', boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)' }}>
            <div className="d-flex p-1 align-items-stretch gap-1 no-visible-scroll">
              {H_SCROLL_DOCK_ITEMS.map((item) => (
                <DButton key={item.id} variant="link" className="flex-column align-items-center justify-content-center">
                  <DIcon icon={item.icon} size="1.1rem" className="text-gray-700" />
                  <small className="text-gray-700" style={{ fontSize: '11px', lineHeight: 1.1 }}>{item.label}</small>
                </DButton>
              ))}
            </div>
          </nav>
        </div>
      </div>
  );
}`,$=String.raw`import { useEffect, useRef, useState } from 'react';
import { DButton, DIcon } from '../../src';

const H_SCROLL_DOCK_ITEMS = [
  { id: 'home', label: 'Home', icon: 'House' },
  { id: 'accounts', label: 'Accounts', icon: 'Wallet' },
  { id: 'transfer', label: 'Transfer', icon: 'ArrowLeftRight' },
  { id: 'payments', label: 'Pay', icon: 'Receipt' },
  { id: 'cards', label: 'Cards', icon: 'CreditCard' },
  { id: 'invest', label: 'Invest', icon: 'TrendingUp' },
  { id: 'insurance', label: 'Insurance', icon: 'Shield' },
  { id: 'support', label: 'Support', icon: 'Headset' },
  { id: 'profile', label: 'Profile', icon: 'UserRound' },
];

function HorizontalScrollDockMenuWithGradientMaskExample() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showEndFade, setShowEndFade] = useState(true);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return () => {};

    const updateFadeState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 2;
      setShowEndFade(!atEnd);
    };

    updateFadeState();
    element.addEventListener('scroll', updateFadeState, { passive: true });
    window.addEventListener('resize', updateFadeState);
    return () => {
      element.removeEventListener('scroll', updateFadeState);
      window.removeEventListener('resize', updateFadeState);
    };
  }, []);

  return (
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Quick actions</h5>
          <small className="text-muted">Swipe to reveal more options</small>
          <div className="card p-3 mt-3">
            <small className="text-muted">Active products</small>
            <strong>9 products</strong>
          </div>
        </div>
        <div className="position-absolute start-0 end-0" style={{ bottom: '12px', paddingInline: '12px' }}>
          <nav aria-label="Horizontal scroll mobile menu with gradient cue" className="bg-white border rounded-2 p-1 position-relative" style={{ borderColor: 'var(--bs-gray-200)', boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)' }}>
            <div ref={scrollRef} className="d-flex p-1 align-items-stretch gap-1 no-visible-scroll" style={{ overflowX: 'auto', overflowY: 'hidden', WebkitOverflowScrolling: 'touch' }}>
              {H_SCROLL_DOCK_ITEMS.map((item) => (
                <DButton key={item.id} variant="link" className="flex-column align-items-center justify-content-center">
                  <DIcon icon={item.icon} size="1.1rem" className="text-gray-700" />
                  <small className="text-gray-700" style={{ fontSize: '11px', lineHeight: 1.1 }}>{item.label}</small>
                </DButton>
              ))}
            </div>
            {showEndFade && (
              <div aria-hidden="true" style={{ position: 'absolute', top: '8px', bottom: '8px', right: '8px', width: '28px', pointerEvents: 'none', background: 'linear-gradient(to left, var(--bs-white), rgba(255, 255, 255, 0))' }} />
            )}
          </nav>
        </div>
      </div>
  );
}`,Q=String.raw`import { useState } from 'react';
import { DButton, DIcon } from '../../src';

const GRID_DOCK_ITEMS = [
  { id: 'home', label: 'Home', icon: 'House' },
  { id: 'accounts', label: 'Accounts', icon: 'Wallet' },
  { id: 'transfer', label: 'Transfer', icon: 'ArrowLeftRight' },
  { id: 'cards', label: 'Cards', icon: 'CreditCard' },
  { id: 'more', label: 'More', icon: 'Grid' },
];

function ActiveStateDockMenuExample() {
  const [activeItem, setActiveItem] = useState('home');

  return (
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Navigation</h5>
          <small className="text-muted">Active state with solid for the selected item</small>
          <div className="card p-3 mt-3">
            <small className="text-muted">Current section</small>
            <strong>{GRID_DOCK_ITEMS.find((item) => item.id === activeItem)?.label}</strong>
          </div>
        </div>
        <div className="position-absolute start-0 end-0" style={{ bottom: '12px', paddingInline: '12px' }}>
          <nav aria-label="Active state dock menu" className="bg-white border rounded-2" style={{ borderColor: 'var(--bs-gray-200)', boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)' }}>
            <div className="d-grid p-1" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
              {GRID_DOCK_ITEMS.map((item) => {
                const isActive = item.id === activeItem;
                return (
                  <DButton key={item.id} variant={isActive ? 'solid' : 'link'} color={isActive ? 'primary' : 'secondary'} className="flex-column align-items-center justify-content-center" onClick={() => setActiveItem(item.id)}>
                    <DIcon icon={item.icon} size="1.1rem" className={isActive ? 'text-white' : 'text-gray-700'} />
                    <small className={isActive ? 'text-white' : 'text-gray-700'} style={{ fontSize: '11px', lineHeight: 1.1 }}>{item.label}</small>
                  </DButton>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
  );
}`,Z=String.raw`import { useState } from 'react';
import { DButton, DDropdown } from '../../src';

const TEXT_DOCK_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'accounts', label: 'Accounts' },
  { id: 'inbox', label: 'Inbox', notifications: 6 },
  { id: 'payments', label: 'Payments' },
  { id: 'more', label: 'More' },
];

function MoreDockDropdownToggle({ open, toggle }: { open: boolean; toggle: () => void }) {
  return (
    <DButton
      variant="link"
      onClick={toggle}
      color="secondary"
      size="sm"
      text="More"
      iconEnd="MoreVertical"
      className={open ? 'fw-semibold' : 'fw-normal'}
    />
  );
}

function TextOnlyDockMenuWithNotificationsExample() {
  const [activeItem, setActiveItem] = useState('home');
  const moreActions = [
    { label: 'Settings', icon: 'Settings', onClick: () => setActiveItem('more') },
    { label: 'Notifications', icon: 'Bell', onClick: () => setActiveItem('more') },
    { isDivider: true, label: '' },
    { label: 'Sign out', icon: 'LogOut', color: 'danger' as const, onClick: () => setActiveItem('more') },
  ];

  return (
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Messages</h5>
          <small className="text-muted">Text-only dock: active item in bold, one tab with notification count</small>
          <div className="card p-3 mt-3">
            <small className="text-muted">Current tab</small>
            <strong>{TEXT_DOCK_ITEMS.find((item) => item.id === activeItem)?.label}</strong>
          </div>
        </div>
        <div className="position-absolute start-0 bottom-0">
          <nav aria-label="Text dock menu with notifications" className="bg-white border-top">
            <div className="d-grid p-1" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
              {TEXT_DOCK_ITEMS.map((item) => {
                const isActive = item.id === activeItem;
                if (item.id === 'more') {
                  return (
                    <DDropdown key={item.id} asPortal placement="up" actions={moreActions} dropdownToggle={MoreDockDropdownToggle} />
                  );
                }
                return (
                  <DButton key={item.id} variant="link" size="sm" color="secondary" onClick={() => setActiveItem(item.id)} className={isActive ? 'fw-semibold' : 'fw-normal'}>
                    {item.label}
                    {typeof item.notifications === 'number' && item.notifications > 0 && (
                      <span className="rounded-pill text-white bg-danger d-inline-flex align-items-center justify-content-center" style={{ minWidth: '16px', height: '16px', paddingInline: '4px', fontSize: '8px', lineHeight: 1 }}>
                        {item.notifications}
                      </span>
                    )}
                  </DButton>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
  );
}`,q=String.raw`import { DButtonIcon } from '../../src';

const ICON_ONLY_DOCK_ITEMS = [
  { id: 'home', label: 'Home', icon: 'House' },
  { id: 'accounts', label: 'Accounts', icon: 'Wallet' },
  { id: 'transfer', label: 'Transfer', icon: 'ArrowLeftRight' },
  { id: 'cards', label: 'Cards', icon: 'CreditCard' },
  { id: 'profile', label: 'Profile', icon: 'UserRound' },
];

function IconOnlyDockMenuExample() {
  return (
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Icon shortcuts</h5>
          <small className="text-muted">Icon-only dock with pill style actions</small>
          <div className="card p-3 mt-3">
            <small className="text-muted">Quick access</small>
            <strong>5 main actions</strong>
          </div>
        </div>
        <div className="position-absolute start-0 end-0" style={{ bottom: '12px', paddingInline: '12px' }}>
          <nav aria-label="Icon-only dock menu" className="bg-primary rounded-pill p-2" style={{ boxShadow: '0 10px 24px rgba(13, 110, 253, 0.32)' }}>
            <div className="d-grid" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
              {ICON_ONLY_DOCK_ITEMS.map((item) => (
                <div key={item.id} className="d-flex justify-content-center">
                  <DButtonIcon
                    variant={item.id === 'home' ? 'solid' : 'link'}
                    color="light"
                    className="rounded-pill hover:bg-primary-400 text-white"
                    icon={item.icon}
                    aria-label={item.label}
                  />
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
  );
}`,d={parameters:{docs:{description:{story:"Fixed mobile menu with dynamic columns based on the number of actions. Sober style with border and rounded corners."},source:{code:X,language:"tsx"}}},render:()=>e.jsx(n,{children:e.jsxs("div",{className:"h-100 position-relative bg-gray-25",children:[e.jsxs("div",{className:"p-4",style:{paddingBottom:"104px"},children:[e.jsx("h5",{className:"mb-1",children:"Overview"}),e.jsx("small",{className:"text-muted",children:"Fixed menu in mobile app style"}),e.jsxs("div",{className:"card p-3 mt-3",children:[e.jsx("small",{className:"text-muted",children:"Available"}),e.jsx("h3",{className:"mb-0",children:"$8,430.20"})]})]}),e.jsx("div",{className:"position-absolute start-0 end-0",style:{bottom:"12px",paddingInline:"12px"},children:e.jsx("nav",{"aria-label":"Fixed grid mobile menu",className:"bg-white border rounded-2",style:{borderColor:"var(--bs-gray-200)",boxShadow:"0 8px 24px rgba(17, 24, 39, 0.06)"},children:e.jsx("div",{className:"d-grid p-1",style:{gridTemplateColumns:`repeat(${c.length}, minmax(0, 1fr))`},children:c.map(t=>e.jsxs(l,{variant:"link",className:"flex-column align-items-center justify-content-center",children:[e.jsx(b,{icon:t.icon,size:"1.1rem",className:"text-gray-700"}),e.jsx("small",{className:"text-gray-700",style:{fontSize:"11px",lineHeight:1.1},children:t.label})]},t.id))})})})]})})},m={parameters:{docs:{description:{story:"Fixed mobile menu with internal horizontal overflow for scenarios with many actions. Scrolling happens only inside the dock."},source:{code:Y,language:"tsx"}}},render:()=>e.jsx(n,{children:e.jsxs("div",{className:"h-100 position-relative bg-gray-25",children:[e.jsxs("div",{className:"p-4",style:{paddingBottom:"112px"},children:[e.jsx("h5",{className:"mb-1",children:"Services"}),e.jsx("small",{className:"text-muted",children:"Quick shortcuts with horizontal scroll"}),e.jsxs("div",{className:"card p-3 mt-3",children:[e.jsx("small",{className:"text-muted",children:"Active products"}),e.jsx("strong",{children:"7 products"})]})]}),e.jsx("div",{className:"position-absolute start-0 end-0",style:{bottom:"12px",paddingInline:"12px"},children:e.jsx("nav",{"aria-label":"Horizontal scroll mobile menu",className:"bg-white border rounded-2 p-1",style:{borderColor:"var(--bs-gray-200)",boxShadow:"0 8px 24px rgba(17, 24, 39, 0.06)"},children:e.jsx("div",{className:"d-flex p-1 align-items-stretch gap-1 no-visible-scroll",children:z.map(t=>e.jsxs(l,{variant:"link",className:"flex-column align-items-center justify-content-center",children:[e.jsx(b,{icon:t.icon,size:"1.1rem",className:"text-gray-700"}),e.jsx("small",{className:"text-gray-700",style:{fontSize:"11px",lineHeight:1.1},children:t.label})]},t.id))})})})]})})};function J(){const t=r.useRef(null),[s,o]=r.useState(!0);return r.useEffect(()=>{const a=t.current;if(!a)return()=>{};const i=()=>{const{scrollLeft:g,scrollWidth:B,clientWidth:K}=a,W=g+K>=B-2;o(!W)};return i(),a.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i),()=>{a.removeEventListener("scroll",i),window.removeEventListener("resize",i)}},[]),e.jsx(n,{children:e.jsxs("div",{className:"h-100 position-relative bg-gray-25",children:[e.jsxs("div",{className:"p-4",style:{paddingBottom:"112px"},children:[e.jsx("h5",{className:"mb-1",children:"Quick actions"}),e.jsx("small",{className:"text-muted",children:"Swipe to reveal more options"}),e.jsxs("div",{className:"card p-3 mt-3",children:[e.jsx("small",{className:"text-muted",children:"Active products"}),e.jsx("strong",{children:"9 products"})]})]}),e.jsx("div",{className:"position-absolute start-0 end-0",style:{bottom:"12px",paddingInline:"12px"},children:e.jsxs("nav",{"aria-label":"Horizontal scroll mobile menu with gradient cue",className:"bg-white border rounded-2 p-1 position-relative",style:{borderColor:"var(--bs-gray-200)",boxShadow:"0 8px 24px rgba(17, 24, 39, 0.06)"},children:[e.jsx("div",{ref:t,className:"d-flex p-1 align-items-stretch gap-1 no-visible-scroll",style:{overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch"},children:z.map(a=>e.jsxs(l,{variant:"link",className:"flex-column align-items-center justify-content-center",children:[e.jsx(b,{icon:a.icon,size:"1.1rem",className:"text-gray-700"}),e.jsx("small",{className:"text-gray-700",style:{fontSize:"11px",lineHeight:1.1},children:a.label})]},a.id))}),s&&e.jsx("div",{"aria-hidden":"true",style:{position:"absolute",top:"8px",bottom:"8px",right:"8px",width:"28px",pointerEvents:"none",background:"linear-gradient(to left, var(--bs-white), rgba(255, 255, 255, 0))"}})]})})]})})}const p={parameters:{docs:{description:{story:"Menu with horizontal scroll and a gradient mask at the edge to indicate continuity. The mask disappears automatically when reaching the end."},source:{code:$,language:"tsx"}}},render:()=>e.jsx(J,{})};function ee(){var o;const[t,s]=r.useState("home");return e.jsx(n,{children:e.jsxs("div",{className:"h-100 position-relative bg-gray-25",children:[e.jsxs("div",{className:"p-4",style:{paddingBottom:"112px"},children:[e.jsx("h5",{className:"mb-1",children:"Navigation"}),e.jsx("small",{className:"text-muted",children:"Active state with solid for the selected item"}),e.jsxs("div",{className:"card p-3 mt-3",children:[e.jsx("small",{className:"text-muted",children:"Current section"}),e.jsx("strong",{children:(o=c.find(a=>a.id===t))==null?void 0:o.label})]})]}),e.jsx("div",{className:"position-absolute start-0 end-0",style:{bottom:"12px",paddingInline:"12px"},children:e.jsx("nav",{"aria-label":"Active state dock menu",className:"bg-white border rounded-2",style:{borderColor:"var(--bs-gray-200)",boxShadow:"0 8px 24px rgba(17, 24, 39, 0.06)"},children:e.jsx("div",{className:"d-grid p-1",style:{gridTemplateColumns:`repeat(${c.length}, minmax(0, 1fr))`},children:c.map(a=>{const i=a.id===t;return e.jsxs(l,{variant:i?"solid":"link",color:i?"primary":"secondary",className:"flex-column align-items-center justify-content-center",onClick:()=>s(a.id),children:[e.jsx(b,{icon:a.icon,size:"1.1rem",className:i?"text-white":"text-gray-700"}),e.jsx("small",{className:i?"text-white":"text-gray-700",style:{fontSize:"11px",lineHeight:1.1},children:a.label})]},a.id)})})})})]})})}const u={parameters:{docs:{description:{story:'Interactive dock menu with active state. The selected item uses variant="solid" and the rest use variant="link".'},source:{code:Q,language:"tsx"}}},render:()=>e.jsx(ee,{})};function te(){var a;const[t,s]=r.useState("home"),o=[{label:"Settings",icon:"Settings",onClick:()=>s("more")},{label:"Notifications",icon:"Bell",onClick:()=>s("more")},{isDivider:!0,label:""},{label:"Sign out",icon:"LogOut",color:"danger",onClick:()=>s("more")}];return e.jsx(n,{children:e.jsxs("div",{className:"h-100 position-relative bg-gray-25",children:[e.jsxs("div",{className:"p-4",style:{paddingBottom:"112px"},children:[e.jsx("h5",{className:"mb-1",children:"Messages"}),e.jsx("small",{className:"text-muted",children:"Text-only dock: active item in bold, one tab with notification count"}),e.jsxs("div",{className:"card p-3 mt-3",children:[e.jsx("small",{className:"text-muted",children:"Current tab"}),e.jsx("strong",{children:(a=v.find(i=>i.id===t))==null?void 0:a.label})]})]}),e.jsx("div",{className:"position-absolute start-0 bottom-0",children:e.jsx("nav",{"aria-label":"Text dock menu with notifications",className:"bg-white border-top",children:e.jsx("div",{className:"d-grid p-1",style:{gridTemplateColumns:`repeat(${v.length}, minmax(0, 1fr))`},children:v.map(i=>{const g=i.id===t;return i.id==="more"?e.jsx(P,{asPortal:!0,placement:"up",actions:o,dropdownToggle:V},i.id):e.jsxs(l,{variant:"link",size:"sm",color:"secondary",onClick:()=>s(i.id),className:g?"fw-semibold":"fw-normal",children:[i.label,typeof i.notifications=="number"&&i.notifications>0&&e.jsx("span",{className:"rounded-pill text-white bg-danger d-inline-flex align-items-center justify-content-center",style:{minWidth:"16px",height:"16px",paddingInline:"4px",fontSize:"8px",lineHeight:1},children:i.notifications})]},i.id)})})})})]})})}const x={parameters:{docs:{description:{story:"Text-only dock menu without icons. The active item uses bold text and one tab shows a numeric notification badge."},source:{code:Z,language:"tsx"}}},render:()=>e.jsx(te,{})},h={parameters:{docs:{description:{story:"Dock menu with only icons using DButtonIcon in light color and rounded-pill style over a bg-primary rounded-pill container."},source:{code:q,language:"tsx"}}},render:()=>e.jsx(n,{children:e.jsxs("div",{className:"h-100 position-relative bg-gray-25",children:[e.jsxs("div",{className:"p-4",style:{paddingBottom:"112px"},children:[e.jsx("h5",{className:"mb-1",children:"Icon shortcuts"}),e.jsx("small",{className:"text-muted",children:"Icon-only dock with pill style actions"}),e.jsxs("div",{className:"card p-3 mt-3",children:[e.jsx("small",{className:"text-muted",children:"Quick access"}),e.jsx("strong",{children:"5 main actions"})]})]}),e.jsx("div",{className:"position-absolute start-0 end-0",style:{bottom:"12px",paddingInline:"12px"},children:e.jsx("nav",{"aria-label":"Icon-only dock menu",className:"bg-primary rounded-pill p-1 shadow-lg",children:e.jsx("div",{className:"d-grid",style:{gridTemplateColumns:`repeat(${N.length}, minmax(0, 1fr))`},children:N.map(t=>e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(G,{variant:t.id==="home"?"solid":"link",color:"light",className:`border-0 rounded-pill ${t.id==="home"?"bg-primary-400 text-white":""}`,icon:t.icon,"aria-label":t.label})},t.id))})})})]})})};var y,f,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Fixed mobile menu with dynamic columns based on the number of actions. Sober style with border and rounded corners.'
      },
      source: {
        code: FIXED_GRID_DOCK_MENU_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <MobileViewport>
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{
        paddingBottom: '104px'
      }}>
          <h5 className="mb-1">Overview</h5>
          <small className="text-muted">Fixed menu in mobile app style</small>

          <div className="card p-3 mt-3">
            <small className="text-muted">Available</small>
            <h3 className="mb-0">$8,430.20</h3>
          </div>
        </div>

        <div className="position-absolute start-0 end-0" style={{
        bottom: '12px',
        paddingInline: '12px'
      }}>
          <nav aria-label="Fixed grid mobile menu" className="bg-white border rounded-2" style={{
          borderColor: 'var(--bs-gray-200)',
          boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)'
        }}>
            <div className="d-grid p-1" style={{
            gridTemplateColumns: \`repeat(\${GRID_DOCK_ITEMS.length}, minmax(0, 1fr))\`
          }}>
              {GRID_DOCK_ITEMS.map(item => <DButton key={item.id} variant="link" className="flex-column align-items-center justify-content-center">
                  <DIcon icon={item.icon} size="1.1rem" className="text-gray-700" />
                  <small className="text-gray-700" style={{
                fontSize: '11px',
                lineHeight: 1.1
              }}>{item.label}</small>
                </DButton>)}
            </div>
          </nav>
        </div>
      </div>
    </MobileViewport>
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var w,D,I;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Fixed mobile menu with internal horizontal overflow for scenarios with many actions. Scrolling happens only inside the dock.'
      },
      source: {
        code: HORIZONTAL_SCROLL_DOCK_MENU_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <MobileViewport>
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{
        paddingBottom: '112px'
      }}>
          <h5 className="mb-1">Services</h5>
          <small className="text-muted">Quick shortcuts with horizontal scroll</small>

          <div className="card p-3 mt-3">
            <small className="text-muted">Active products</small>
            <strong>7 products</strong>
          </div>
        </div>

        <div className="position-absolute start-0 end-0" style={{
        bottom: '12px',
        paddingInline: '12px'
      }}>
          <nav aria-label="Horizontal scroll mobile menu" className="bg-white border rounded-2 p-1" style={{
          borderColor: 'var(--bs-gray-200)',
          boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)'
        }}>
            <div className="d-flex p-1 align-items-stretch gap-1 no-visible-scroll">
              {H_SCROLL_DOCK_ITEMS.map(item => <DButton key={item.id} variant="link" className="flex-column align-items-center justify-content-center">
                  <DIcon icon={item.icon} size="1.1rem" className="text-gray-700" />
                  <small className="text-gray-700" style={{
                fontSize: '11px',
                lineHeight: 1.1
              }}>{item.label}</small>
                </DButton>)}
            </div>
          </nav>
        </div>
      </div>
    </MobileViewport>
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var C,_,k;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Menu with horizontal scroll and a gradient mask at the edge to indicate continuity. The mask disappears automatically when reaching the end.'
      },
      source: {
        code: HORIZONTAL_SCROLL_DOCK_MENU_WITH_GRADIENT_MASK_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <ScrollDockWithGradient />
}`,...(k=(_=p.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var j,O,T;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interactive dock menu with active state. The selected item uses variant="solid" and the rest use variant="link".'
      },
      source: {
        code: ACTIVE_STATE_DOCK_MENU_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <ActiveStateDock />
}`,...(T=(O=u.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var E,M,A;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Text-only dock menu without icons. The active item uses bold text and one tab shows a numeric notification badge.'
      },
      source: {
        code: TEXT_ONLY_DOCK_MENU_WITH_NOTIFICATIONS_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <TextOnlyDockWithNotifications />
}`,...(A=(M=x.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var R,H,L;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Dock menu with only icons using DButtonIcon in light color and rounded-pill style over a bg-primary rounded-pill container.'
      },
      source: {
        code: ICON_ONLY_DOCK_MENU_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <MobileViewport>
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{
        paddingBottom: '112px'
      }}>
          <h5 className="mb-1">Icon shortcuts</h5>
          <small className="text-muted">Icon-only dock with pill style actions</small>

          <div className="card p-3 mt-3">
            <small className="text-muted">Quick access</small>
            <strong>5 main actions</strong>
          </div>
        </div>

        <div className="position-absolute start-0 end-0" style={{
        bottom: '12px',
        paddingInline: '12px'
      }}>
          <nav aria-label="Icon-only dock menu" className="bg-primary rounded-pill p-1 shadow-lg">
            <div className="d-grid" style={{
            gridTemplateColumns: \`repeat(\${ICON_ONLY_DOCK_ITEMS.length}, minmax(0, 1fr))\`
          }}>
              {ICON_ONLY_DOCK_ITEMS.map(item => <div key={item.id} className="d-flex justify-content-center">
                  <DButtonIcon variant={item.id === 'home' ? 'solid' : 'link'} color="light" className={\`border-0 rounded-pill \${item.id === 'home' ? 'bg-primary-400 text-white' : ''}\`} icon={item.icon} aria-label={item.label} />
                </div>)}
            </div>
          </nav>
        </div>
      </div>
    </MobileViewport>
}`,...(L=(H=h.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const ye=["FixedGridDockMenu","HorizontalScrollDockMenu","HorizontalScrollDockMenuWithGradientMask","ActiveStateDockMenu","TextOnlyDockMenuWithNotifications","IconOnlyDockMenu"];export{u as ActiveStateDockMenu,d as FixedGridDockMenu,m as HorizontalScrollDockMenu,p as HorizontalScrollDockMenuWithGradientMask,h as IconOnlyDockMenu,x as TextOnlyDockMenuWithNotifications,ye as __namedExportsOrder,Ne as default};
