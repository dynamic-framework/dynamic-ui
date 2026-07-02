import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./iframe-uxYLpz5U.js";import{M as B}from"./Template-BYBmdpRq.js";import{D as O}from"./DBox-D9tABUbD.js";import{D as x,a as c}from"./DContext-CxvW7UTG.js";import{D as a}from"./DOffcanvas-DtJAxkzU.js";import{D as o}from"./DButton-DQ-qMqS8.js";import{D as b}from"./DInputSwitch-BD09Z8An.js";import{a as r}from"./DListGroup-Cpp6k9ga.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CNIzdnjV.js";import"./blocks-B3JaxZiM.js";import"./index-D8qwz0et.js";import"./index-GUYGZJNd.js";import"./index-Bq_YOuQj.js";import"./config-C3iYXcFk.js";import"./DIcon-BVWTdsDp.js";import"./useMediaBreakpointUp-OWnybX9T.js";const h={height:"72vh",maxHeight:"72vh",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"},ne={title:"Patterns/Mobile/Bottom Sheets",component:O,parameters:{docs:{page:B,description:{component:`Mobile-first experiences using DOffcanvas as a bottom sheet. These patterns are designed for banking, insurance, and lending interfaces where contextual actions should appear from bottom to top.

Open each example in its own Storybook canvas:

- [Account actions bottom sheet](?path=/story/mobile-patterns-mobile-bottom-sheets--account-actions-bottom-sheet)
- [Transfer review bottom sheet](?path=/story/mobile-patterns-mobile-bottom-sheets--transfer-review-bottom-sheet)
- [Card controls bottom sheet](?path=/story/mobile-patterns-mobile-bottom-sheets--card-controls-bottom-sheet)
`}}},tags:["autodocs"]};function p({children:t}){return e.jsx("div",{style:{width:"390px",maxWidth:"100%",height:"760px",borderRadius:"1.25rem",border:"1px solid var(--bs-gray-200)",overflow:"hidden",background:"var(--bs-gray-25)",position:"relative"},children:t})}function f(){return e.jsx("div",{className:"d-flex justify-content-center py-2",children:e.jsx("span",{style:{width:"44px",height:"4px",borderRadius:"999px",background:"var(--bs-gray-300)"}})})}function T({name:t,payload:s}){const{closePortal:n}=c();return e.jsxs(a,{name:t,openFrom:"bottom",style:h,children:[e.jsx(f,{}),e.jsx(a.Header,{onClose:n,showCloseButton:!0,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-0 fw-semibold",children:s.accountName}),e.jsxs("small",{className:"text-muted",children:["Available balance:"," ",s.balance]})]})}),e.jsxs(a.Body,{className:"d-flex flex-column gap-2",children:[e.jsx(o,{text:"Transfer money",className:"w-100",variant:"soft"}),e.jsx(o,{text:"Pay credit card",className:"w-100",variant:"soft"}),e.jsx(o,{text:"Deposit check",className:"w-100",variant:"soft"}),e.jsx(o,{text:"View statement",className:"w-100",variant:"soft"})]}),e.jsx(a.Footer,{actionPlacement:"fill",children:e.jsx(o,{text:"Close",variant:"outline",color:"secondary",onClick:n})})]})}function F(){const{openPortal:t}=c();return e.jsx(p,{children:e.jsxs("div",{className:"p-4 d-flex flex-column h-100",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("small",{className:"text-muted",children:"Main account"}),e.jsx("h3",{className:"mb-0",children:"$12,847.90"})]}),e.jsxs("div",{className:"card p-3 mb-3",children:[e.jsx("small",{className:"text-muted",children:"Card ending in 4532"}),e.jsx("strong",{children:"Credit used: $1,235.00"})]}),e.jsx("div",{className:"mt-auto",children:e.jsx(o,{className:"w-100",text:"Open account actions",onClick:()=>t("accountActions",{accountName:"Checking account ••4532",balance:"$12,847.90"})})})]})})}const k=String.raw`import type { ReactNode } from 'react';
import {
  DBox,
  DButton,
  DContextProvider,
  DOffcanvas,
  type PortalProps,
  useDPortalContext,
} from '../../src';

type AccountActionsPayloads = {
  accountActions: {
    accountName: string;
    balance: string;
  };
};

const bottomSheetStyle = {
  height: '72vh',
  maxHeight: '72vh',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
} as const;

function MobileViewport({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: '390px',
        maxWidth: '100%',
        height: '760px',
        borderRadius: '1.25rem',
        border: '1px solid var(--bs-gray-200)',
        overflow: 'hidden',
        background: 'var(--bs-gray-25)',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}

function BottomSheetHandle() {
  return (
    <div className="d-flex justify-content-center py-2">
      <span
        style={{
          width: '44px',
          height: '4px',
          borderRadius: '999px',
          background: 'var(--bs-gray-300)',
        }}
      />
    </div>
  );
}

function AccountActionsSheet({ name, payload }: PortalProps<AccountActionsPayloads['accountActions']>) {
  const { closePortal } = useDPortalContext<AccountActionsPayloads>();

  return (
    <DOffcanvas name={name} openFrom="bottom" style={bottomSheetStyle}>
      <BottomSheetHandle />
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <div>
          <h5 className="mb-0 fw-semibold">{payload.accountName}</h5>
          <small className="text-muted">Available balance: {payload.balance}</small>
        </div>
      </DOffcanvas.Header>
      <DOffcanvas.Body className="d-flex flex-column gap-2">
        <DButton text="Transfer money" className="w-100" variant="soft" />
        <DButton text="Pay credit card" className="w-100" variant="soft" />
        <DButton text="Deposit check" className="w-100" variant="soft" />
        <DButton text="View statement" className="w-100" variant="soft" />
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="fill">
        <DButton text="Close" variant="outline" color="secondary" onClick={closePortal} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function AccountActionsMobileContent() {
  const { openPortal } = useDPortalContext<AccountActionsPayloads>();

  return (
    <MobileViewport>
      <div className="p-4 d-flex flex-column h-100">
        <div className="mb-4">
          <small className="text-muted">Main account</small>
          <h3 className="mb-0">$12,847.90</h3>
        </div>
        <div className="card p-3 mb-3">
          <small className="text-muted">Card ending in 4532</small>
          <strong>Credit used: $1,235.00</strong>
        </div>
        <div className="mt-auto">
          <DButton
            className="w-100"
            text="Open account actions"
            onClick={() => openPortal('accountActions', {
              accountName: 'Checking account ••4532',
              balance: '$12,847.90',
            })}
          />
        </div>
      </div>
    </MobileViewport>
  );
}

export const AccountActionsBottomSheet = {
  render: () => (
    <DContextProvider<AccountActionsPayloads>
      portalName="mobileBottomSheetAccountActions"
      availablePortals={{ accountActions: AccountActionsSheet }}
    >
      <AccountActionsMobileContent />
    </DContextProvider>
  ),
};`,i={parameters:{docs:{source:{code:k,language:"tsx"}}},render:()=>e.jsx(x,{portalName:"mobileBottomSheetAccountActions",availablePortals:{accountActions:T},children:e.jsx(F,{})})};function L({name:t,payload:s}){const{closePortal:n}=c(),l=1.5,u=s.amount+l;return e.jsxs(a,{name:t,openFrom:"bottom",style:h,children:[e.jsx(f,{}),e.jsx(a.Header,{onClose:n,showCloseButton:!0,children:e.jsx("h5",{className:"mb-0 fw-semibold",children:"Review transfer"})}),e.jsx(a.Body,{children:e.jsxs(r,{children:[e.jsxs(r.Item,{className:"justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Recipient"}),e.jsx("strong",{children:s.recipient})]}),e.jsxs(r.Item,{className:"justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Amount"}),e.jsxs("strong",{children:["$",s.amount.toFixed(2)]})]}),e.jsxs(r.Item,{className:"justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Amount"}),e.jsxs("strong",{children:["$",s.amount.toFixed(2)]})]}),e.jsxs(r.Item,{className:"justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Fee"}),e.jsxs("strong",{children:["$",l.toFixed(2)]})]}),e.jsx(r.Item,{children:e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{className:"text-muted",children:"Total debit"}),e.jsxs("strong",{children:["$",u.toFixed(2)]})]})})]})}),e.jsxs(a.Footer,{actionPlacement:"fill",children:[e.jsx(o,{text:"Edit",color:"secondary",variant:"outline",onClick:n}),e.jsx(o,{text:"Confirm transfer",onClick:n})]})]})}function M(){const{openPortal:t}=c();return e.jsx(p,{children:e.jsxs("div",{className:"p-4 d-flex flex-column h-100",children:[e.jsx("h5",{className:"mb-1",children:"New transfer"}),e.jsx("small",{className:"text-muted mb-4",children:"From checking account"}),e.jsxs("div",{className:"card p-3 mb-3",children:[e.jsx("small",{className:"text-muted",children:"To"}),e.jsx("strong",{children:"Sarah Mitchell"})]}),e.jsxs("div",{className:"card p-3 mb-3",children:[e.jsx("small",{className:"text-muted",children:"Amount"}),e.jsx("strong",{children:"$245.00"})]}),e.jsx("div",{className:"mt-auto d-flex flex-column gap-2",children:e.jsx(o,{className:"w-100",text:"Continue",onClick:()=>t("transferReview",{recipient:"Sarah Mitchell",amount:245})})})]})})}const I=String.raw`import {
  DButton,
  DContextProvider,
  DListGroup,
  DOffcanvas,
  type PortalProps,
  useDPortalContext,
} from '../../src';

type TransferReviewPayloads = {
  transferReview: {
    recipient: string;
    amount: number;
  };
};

const bottomSheetStyle = {
  height: '72vh',
  maxHeight: '72vh',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
} as const;

function BottomSheetHandle() {
  return (
    <div className="d-flex justify-content-center py-2">
      <span style={{ width: '44px', height: '4px', borderRadius: '999px', background: 'var(--bs-gray-300)' }} />
    </div>
  );
}

function TransferReviewSheet({ name, payload }: PortalProps<TransferReviewPayloads['transferReview']>) {
  const { closePortal } = useDPortalContext<TransferReviewPayloads>();
  const fee = 1.5;
  const total = payload.amount + fee;

  return (
    <DOffcanvas name={name} openFrom="bottom" style={bottomSheetStyle}>
      <BottomSheetHandle />
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="mb-0 fw-semibold">Review transfer</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <DListGroup>
          <DListGroup.Item className="justify-content-between">
            <span className="text-muted">Recipient</span>
            <strong>{payload.recipient}</strong>
          </DListGroup.Item>
          <DListGroup.Item className="justify-content-between">
            <span className="text-muted">Amount</span>
            <strong>\${payload.amount.toFixed(2)}</strong>
          </DListGroup.Item>
          <DListGroup.Item className="justify-content-between">
            <span className="text-muted">Fee</span>
            <strong>\${fee.toFixed(2)}</strong>
          </DListGroup.Item>
          <DListGroup.Item>
            <div className="d-flex justify-content-between">
              <span className="text-muted">Total debit</span>
              <strong>\${total.toFixed(2)}</strong>
            </div>
          </DListGroup.Item>
        </DListGroup>
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="fill">
        <DButton text="Edit" color="secondary" variant="outline" onClick={closePortal} />
        <DButton text="Confirm transfer" onClick={closePortal} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function TransferReviewMobileContent() {
  const { openPortal } = useDPortalContext<TransferReviewPayloads>();

  return (
      <div className="p-4 d-flex flex-column h-100">
        <h5 className="mb-1">New transfer</h5>
        <small className="text-muted mb-4">From checking account</small>
        <div className="card p-3 mb-3">
          <small className="text-muted">To</small>
          <strong>Sarah Mitchell</strong>
        </div>
        <div className="card p-3 mb-3">
          <small className="text-muted">Amount</small>
          <strong>$245.00</strong>
        </div>
        <div className="mt-auto d-flex flex-column gap-2">
          <DButton
            className="w-100"
            text="Continue"
            onClick={() => openPortal('transferReview', {
              recipient: 'Sarah Mitchell',
              amount: 245,
            })}
          />
        </div>
      </div>
  );
}

export const TransferReviewBottomSheet = {
  render: () => (
    <DContextProvider<TransferReviewPayloads>
      portalName="mobileBottomSheetTransferReview"
      availablePortals={{ transferReview: TransferReviewSheet }}
    >
      <TransferReviewMobileContent />
    </DContextProvider>
  ),
};`,d={parameters:{docs:{source:{code:I,language:"tsx"}}},render:()=>e.jsx(x,{portalName:"mobileBottomSheetTransferReview",availablePortals:{transferReview:L},children:e.jsx(M,{})})};function H({name:t,payload:s}){const{closePortal:n}=c(),[l,u]=v.useState(!1),[R,A]=v.useState(!0);return e.jsxs(a,{name:t,openFrom:"bottom",style:h,children:[e.jsx(f,{}),e.jsx(a.Header,{onClose:n,showCloseButton:!0,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-0 fw-semibold",children:s.cardLabel}),e.jsxs("small",{className:"text-muted",children:["Card ending in"," ",s.cardLast4]})]})}),e.jsxs(a.Body,{className:"d-flex flex-column gap-3",children:[e.jsx(b,{id:"freeze-card-switch",label:"Freeze card",checked:l,onChange:u}),e.jsx(b,{id:"online-payments-switch",label:"Online payments",checked:R,onChange:A}),e.jsx(o,{text:"Replace card",variant:"outline",color:"danger",className:"w-100 mt-2"})]}),e.jsx(a.Footer,{actionPlacement:"fill",children:e.jsx(o,{text:"Done",onClick:n})})]})}function E(){const{openPortal:t}=c();return e.jsx(p,{children:e.jsxs("div",{className:"p-4 d-flex flex-column h-100",children:[e.jsx("h5",{className:"mb-3",children:"Cards"}),e.jsxs("div",{className:"card p-3 mb-3 bg-primary text-white",children:[e.jsx("small",{className:"opacity-75",children:"Platinum card"}),e.jsx("h6",{className:"mb-0",children:"•••• •••• •••• 4532"})]}),e.jsx("div",{className:"mt-auto",children:e.jsx(o,{className:"w-100",text:"Manage card",onClick:()=>t("cardControls",{cardLabel:"Platinum card",cardLast4:"4532"})})})]})})}const $=String.raw`import { useState } from 'react';
import {
  DButton,
  DContextProvider,
  DInputSwitch,
  DOffcanvas,
  type PortalProps,
  useDPortalContext,
} from '../../src';

type CardControlsPayloads = {
  cardControls: {
    cardLabel: string;
    cardLast4: string;
  };
};

const bottomSheetStyle = {
  height: '72vh',
  maxHeight: '72vh',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
} as const;

function BottomSheetHandle() {
  return (
    <div className="d-flex justify-content-center py-2">
      <span style={{ width: '44px', height: '4px', borderRadius: '999px', background: 'var(--bs-gray-300)' }} />
    </div>
  );
}

function CardControlsSheet({ name, payload }: PortalProps<CardControlsPayloads['cardControls']>) {
  const { closePortal } = useDPortalContext<CardControlsPayloads>();
  const [isFrozen, setIsFrozen] = useState(false);
  const [onlinePayments, setOnlinePayments] = useState(true);

  return (
    <DOffcanvas name={name} openFrom="bottom" style={bottomSheetStyle}>
      <BottomSheetHandle />
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <div>
          <h5 className="mb-0 fw-semibold">{payload.cardLabel}</h5>
          <small className="text-muted">Card ending in {payload.cardLast4}</small>
        </div>
      </DOffcanvas.Header>
      <DOffcanvas.Body className="d-flex flex-column gap-3">
        <DInputSwitch id="freeze-card-switch" label="Freeze card" checked={isFrozen} onChange={setIsFrozen} />
        <DInputSwitch id="online-payments-switch" label="Online payments" checked={onlinePayments} onChange={setOnlinePayments} />
        <DButton text="Replace card" variant="outline" color="danger" className="w-100 mt-2" />
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="fill">
        <DButton text="Done" onClick={closePortal} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function CardControlsMobileContent() {
  const { openPortal } = useDPortalContext<CardControlsPayloads>();

  return (
      <div className="p-4 d-flex flex-column h-100">
        <h5 className="mb-3">Cards</h5>
        <div className="card p-3 mb-3 bg-primary text-white">
          <small className="opacity-75">Platinum card</small>
          <h6 className="mb-0">•••• •••• •••• 4532</h6>
        </div>
        <div className="mt-auto">
          <DButton
            className="w-100"
            text="Manage card"
            onClick={() => openPortal('cardControls', {
              cardLabel: 'Platinum card',
              cardLast4: '4532',
            })}
          />
        </div>
      </div>
  );
}

export const CardControlsBottomSheet = {
  render: () => (
    <DContextProvider<CardControlsPayloads>
      portalName="mobileBottomSheetCardControls"
      availablePortals={{ cardControls: CardControlsSheet }}
    >
      <CardControlsMobileContent />
    </DContextProvider>
  ),
};`,m={parameters:{docs:{source:{code:$,language:"tsx"}}},render:()=>e.jsx(x,{portalName:"mobileBottomSheetCardControls",availablePortals:{cardControls:H},children:e.jsx(E,{})})};var C,N,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: ACCOUNT_ACTIONS_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <DContextProvider<AccountActionsPayloads> portalName="mobileBottomSheetAccountActions" availablePortals={{
    accountActions: AccountActionsSheet
  }}>
      <AccountActionsMobileContent />
    </DContextProvider>
}`,...(y=(N=i.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var g,P,j;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: TRANSFER_REVIEW_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <DContextProvider<TransferReviewPayloads> portalName="mobileBottomSheetTransferReview" availablePortals={{
    transferReview: TransferReviewSheet
  }}>
      <TransferReviewMobileContent />
    </DContextProvider>
}`,...(j=(P=d.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var D,w,S;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: CARD_CONTROLS_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <DContextProvider<CardControlsPayloads> portalName="mobileBottomSheetCardControls" availablePortals={{
    cardControls: CardControlsSheet
  }}>
      <CardControlsMobileContent />
    </DContextProvider>
}`,...(S=(w=m.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const re=["AccountActionsBottomSheet","TransferReviewBottomSheet","CardControlsBottomSheet"];export{i as AccountActionsBottomSheet,m as CardControlsBottomSheet,d as TransferReviewBottomSheet,re as __namedExportsOrder,ne as default};
