import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-uxYLpz5U.js";import{D}from"./DModal-BjDlrKNC.js";import{D as se}from"./DDropdown-6KmhgPTC.js";import{D as v}from"./DOffcanvas-DtJAxkzU.js";import{D as g,u as i}from"./DConfirmModalContainer-E3sfnu49.js";import{D as y,a as x}from"./DContext-CxvW7UTG.js";import{D as s}from"./DButton-DQ-qMqS8.js";import{D as b}from"./DInputSwitch-BD09Z8An.js";import{D as ne}from"./DAvatar-DucqockX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bq_YOuQj.js";import"./config-C3iYXcFk.js";import"./DIcon-BVWTdsDp.js";import"./useMediaBreakpointUp-OWnybX9T.js";import"./index-D8qwz0et.js";import"./index-GUYGZJNd.js";import"./DButtonIcon-C6Szux7S.js";import"./DInput-86Myg4ZX.js";import"./useProvidedRefOrCreate-BgDkAXvb.js";const Re={title:"Patterns/Confirm Modal",parameters:{layout:"centered"},decorators:[o=>e.jsxs(y,{children:[e.jsx(o,{}),e.jsx(g,{nodeId:"d-portal"})]})]};function re(){const[o,t]=l.useState(""),a=i({title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",confirmLabel:"Delete",cancelLabel:"Cancel",confirmColor:"danger",onConfirm:async()=>{await new Promise(n=>{setTimeout(n,1e3)}),t("Item deleted successfully")},onClose:()=>{t("Deletion cancelled")}});return e.jsxs("div",{className:"text-center",children:[e.jsx(s,{text:"Delete Item",color:"danger",onClick:a.open,className:"mb-3"}),o&&e.jsx("p",{className:"alert alert-info",children:o})]})}const d={render:()=>e.jsx(re,{}),parameters:{docs:{source:{code:`function SimpleConfirmContent() {
  const [result, setResult] = useState<string>('');

  const confirm = useConfirmModal({
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    confirmColor: 'danger',
    onConfirm: async () => {
      // Simulate async operation
      await new Promise<void>((resolve) => { setTimeout(resolve, 1000); });
      setResult('Item deleted successfully');
    },
    onClose: () => {
      setResult('Deletion cancelled');
    },
  });

  return (
    <div className="text-center">
      <DButton
        text="Delete Item"
        color="danger"
        onClick={confirm.open}
        className="mb-3"
      />
      {result && <p className="alert alert-info">{result}</p>}
    </div>
  );
}`}}}};function ie(){const[o,t]=l.useState(""),a=i({title:"Delete Account",message:"This is a permanent action. Type the confirmation code to proceed.",confirmLabel:"Delete Account",cancelLabel:"Cancel",confirmColor:"danger",critical:{code:"DELETE ACCOUNT",codeLabel:"Type confirmation code",inputPlaceholder:"Type: DELETE ACCOUNT"},onConfirm:async()=>{await new Promise(n=>{setTimeout(n,1500)}),t("Account deleted permanently")}});return e.jsxs("div",{className:"text-center",children:[e.jsx(s,{text:"Delete Account",color:"danger",onClick:a.open,className:"mb-3"}),o&&e.jsx("p",{className:"alert alert-danger",children:o})]})}const m={render:()=>e.jsx(ie,{}),parameters:{docs:{source:{code:`function CriticalDeleteContent() {
  const [result, setResult] = useState<string>('');

  const confirm = useConfirmModal({
    title: 'Delete Account',
    message: 'This is a permanent action. Type the confirmation code to proceed.',
    confirmLabel: 'Delete Account',
    cancelLabel: 'Cancel',
    confirmColor: 'danger',
    critical: {
      code: 'DELETE ACCOUNT',
      codeLabel: 'Type confirmation code',
      inputPlaceholder: 'Type: DELETE ACCOUNT',
    },
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 1500); });
      setResult('Account deleted permanently');
    },
  });

  return (
    <div className="text-center">
      <DButton
        text="Delete Account"
        color="danger"
        onClick={confirm.open}
        className="mb-3"
      />
      {result && <p className="alert alert-danger">{result}</p>}
    </div>
  );
}`}}}};function le(){const[o,t]=l.useState(""),[a,n]=l.useState(!1),c=i({title:"Delete Contact",message:'This will permanently delete the contact "Sarah Mitchell" and all associated data. This action cannot be undone.',confirmLabel:"Delete",cancelLabel:"Cancel",confirmColor:"danger",critical:{code:"DELETE",codeLabel:'Type "DELETE" to confirm',inputPlaceholder:"Type: DELETE"},onConfirm:async()=>{n(!0);try{await new Promise(r=>{setTimeout(r,1200)}),t("Contact deleted successfully")}finally{n(!1)}},onClose:()=>{t("Deletion cancelled")}});return e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"card p-4 mb-3",style:{maxWidth:"350px",margin:"0 auto"},children:[e.jsx("div",{className:"mb-3",children:e.jsx(ne,{name:"Sarah Mitchell",size:"lg"})}),e.jsx("h5",{className:"mb-1",children:"Sarah Mitchell"}),e.jsx("p",{className:"text-muted mb-3",children:"sarah.mitchell@email.com"}),e.jsx("p",{className:"text-muted small mb-4",children:"Added 2 months ago"}),e.jsx(s,{text:a?"Deleting...":"Delete Contact",color:"danger",onClick:c.open,disabled:a,className:"w-100"})]}),o&&e.jsx("p",{className:`alert ${o.includes("successfully")?"alert-success":"alert-info"}`,children:o})]})}const f={render:()=>e.jsx(le,{}),parameters:{docs:{source:{code:`function DeleteContactContent() {
  const [result, setResult] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState(false);

  const confirmDelete = useConfirmModal({
    title: 'Delete Contact',
    message: 'This will permanently delete the contact "Sarah Mitchell" and all associated data. This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    confirmColor: 'danger',
    critical: {
      code: 'DELETE',
      codeLabel: 'Type "DELETE" to confirm',
      inputPlaceholder: 'Type: DELETE',
    },
    onConfirm: async () => {
      setIsDeleting(true);
      try {
        await new Promise<void>((resolve) => { setTimeout(resolve, 1200); });
        setResult('Contact deleted successfully');
      } finally {
        setIsDeleting(false);
      }
    },
    onClose: () => {
      setResult('Deletion cancelled');
    },
  });

  return (
    <div className="text-center">
      <div className="card p-4 mb-3" style={{ maxWidth: '350px', margin: '0 auto' }}>
        <div className="mb-3">
          <DAvatar name="Sarah Mitchell" size="lg" />
        </div>
        <h5 className="mb-1">Sarah Mitchell</h5>
        <p className="text-muted mb-3">sarah.mitchell@email.com</p>
        <p className="text-muted small mb-4">Added 2 months ago</p>
        <DButton
          text={isDeleting ? 'Deleting...' : 'Delete Contact'}
          color="danger"
          onClick={confirmDelete.open}
          disabled={isDeleting}
          className="w-100"
        />
      </div>
      {result && (
        <p
          className={
            'alert ' +
            (result.includes('successfully')
              ? 'alert-success'
              : 'alert-info')
          }
        >
          {result}
        </p>
      )}
    </div>
  );
}`}}}};function ce(){const[o,t]=l.useState(""),a=i({title:"Archive Document",message:"Are you sure you want to archive this document? You can restore it later from the archive.",confirmLabel:"Archive",cancelLabel:"Keep",confirmColor:"warning",onConfirm:async()=>{await new Promise(r=>{setTimeout(r,800)}),t("Document archived")}}),n=i({title:"Disable API Key",message:"This API key will be disabled immediately. Applications using this key will stop working.",confirmLabel:"Disable",cancelLabel:"Cancel",confirmColor:"danger",critical:{code:"DISABLE",inputPlaceholder:"Type: DISABLE"},onConfirm:async()=>{await new Promise(r=>{setTimeout(r,800)}),t("API key disabled")}}),c=i({title:"Export Data",message:"Export will include all transaction history and personal information. The file will be sent to your email.",confirmLabel:"Export",cancelLabel:"Cancel",confirmColor:"primary",onConfirm:async()=>{await new Promise(r=>{setTimeout(r,1e3)}),t("Export initiated - check your email")}});return e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex gap-2 justify-content-center mb-3 flex-wrap",children:[e.jsx(s,{text:"Archive",variant:"outline",onClick:a.open}),e.jsx(s,{text:"Disable API Key",color:"danger",variant:"outline",onClick:n.open}),e.jsx(s,{text:"Export Data",variant:"outline",onClick:c.open})]}),o&&e.jsx("p",{className:"alert alert-info text-center",children:o})]})}const u={render:()=>e.jsx(ce,{}),parameters:{docs:{source:{code:`function MultipleActionsContent() {
  const [lastAction, setLastAction] = useState<string>('');

  const confirmArchive = useConfirmModal({
    title: 'Archive Document',
    message: 'Are you sure you want to archive this document? You can restore it later from the archive.',
    confirmLabel: 'Archive',
    cancelLabel: 'Keep',
    confirmColor: 'warning',
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 800); });
      setLastAction('Document archived');
    },
  });

  const confirmDisable = useConfirmModal({
    title: 'Disable API Key',
    message: 'This API key will be disabled immediately. Applications using this key will stop working.',
    confirmLabel: 'Disable',
    cancelLabel: 'Cancel',
    confirmColor: 'danger',
    critical: {
      code: 'DISABLE',
      inputPlaceholder: 'Type: DISABLE',
    },
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 800); });
      setLastAction('API key disabled');
    },
  });

  const confirmExport = useConfirmModal({
    title: 'Export Data',
    message: 'Export will include all transaction history and personal information. The file will be sent to your email.',
    confirmLabel: 'Export',
    cancelLabel: 'Cancel',
    confirmColor: 'primary',
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 1000); });
      setLastAction('Export initiated - check your email');
    },
  });

  return (
    <div>
      <div className="d-flex gap-2 justify-content-center mb-3 flex-wrap">
        <DButton
          text="Archive"
          variant="outline"
          onClick={confirmArchive.open}
        />
        <DButton
          text="Disable API Key"
          color="danger"
          variant="outline"
          onClick={confirmDisable.open}
        />
        <DButton
          text="Export Data"
          variant="outline"
          onClick={confirmExport.open}
        />
      </div>
      {lastAction && <p className="alert alert-info text-center">{lastAction}</p>}
    </div>
  );
}`}}}},de=[{id:1,name:"John Doe",email:"john.doe@email.com",phone:"+1 555-0101",role:"Designer"},{id:2,name:"Jane Smith",email:"jane.smith@email.com",phone:"+1 555-0102",role:"Developer"},{id:3,name:"Carlos Rivera",email:"carlos.rivera@email.com",phone:"+1 555-0103",role:"Manager"},{id:4,name:"Emily Johnson",email:"emily.johnson@email.com",phone:"+1 555-0104",role:"QA Engineer"},{id:5,name:"Michael Brown",email:"michael.brown@email.com",phone:"+1 555-0105",role:"DevOps"},{id:6,name:"Sophia Martinez",email:"sophia.martinez@email.com",phone:"+1 555-0106",role:"Product Owner"},{id:7,name:"Liam Wilson",email:"liam.wilson@email.com",phone:"+1 555-0107",role:"Backend Dev"},{id:8,name:"Olivia Garcia",email:"olivia.garcia@email.com",phone:"+1 555-0108",role:"Frontend Dev"},{id:9,name:"Noah Davis",email:"noah.davis@email.com",phone:"+1 555-0109",role:"UX Researcher"},{id:10,name:"Ava Thompson",email:"ava.thompson@email.com",phone:"+1 555-0110",role:"Scrum Master"}];function me({contact:o,onDeleted:t}){const a=i({title:"Delete Contact",message:`Are you sure you want to delete ${o.name} from your contact list?`,confirmLabel:"Delete",cancelLabel:"Cancel",confirmColor:"danger",onConfirm:async()=>{await new Promise(n=>{setTimeout(n,800)}),t(o.id)}});return e.jsxs("div",{className:"d-flex align-items-center gap-3 p-3 border-bottom",children:[e.jsx(ne,{name:o.name,size:"sm"}),e.jsxs("div",{className:"flex-grow-1 min-width-0",children:[e.jsx("div",{className:"fw-semibold text-truncate",children:o.name}),e.jsx("div",{className:"text-muted small text-truncate",children:o.email})]}),e.jsx("div",{className:"text-muted small d-none d-sm-block",style:{minWidth:"100px"},children:o.phone}),e.jsx("span",{className:"badge bg-secondary-subtle text-secondary-emphasis d-none d-md-inline",children:o.role}),e.jsx(se,{actions:[{label:"Edit",icon:"Pencil",onClick:()=>{}},{isDivider:!0,label:""},{label:"Delete",icon:"Trash2",color:"danger",onClick:a.open}]})]})}function fe(){const[o,t]=l.useState(de),a=n=>{t(c=>c.filter(r=>r.id!==n))};return e.jsxs("div",{style:{width:"600px",maxWidth:"100%"},children:[e.jsx("div",{className:"d-flex align-items-center justify-content-between mb-3",children:e.jsx("h5",{className:"mb-0",children:`Contacts (${o.length})`})}),e.jsx("div",{className:"card",children:o.length===0?e.jsx("p",{className:"text-muted text-center py-4 mb-0",children:"No contacts remaining."}):o.map(n=>e.jsx(me,{contact:n,onDeleted:a},n.id))})]})}const p={render:()=>e.jsx(fe,{})};function ue(){const{closePortal:o}=x(),t=i({title:"Discard changes?",message:"You have unsaved changes. If you close this form your progress will be lost.",confirmLabel:"Discard",cancelLabel:"Keep editing",confirmColor:"danger",onConfirm:async()=>{await new Promise(a=>{setTimeout(a,600)}),o()}});return e.jsxs(D,{name:"editProfileModal",centered:!0,size:"lg",children:[e.jsx(D.Header,{onClose:t.open,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Edit Profile"})}),e.jsxs(D.Body,{className:"py-3 px-5",children:[e.jsxs("p",{className:"text-muted mb-3",children:["Fill in your details below. Changes are not saved until you click"," ",e.jsx("strong",{children:"Save"}),"."]}),e.jsx("div",{className:"mb-3",children:e.jsx("input",{className:"form-control",defaultValue:"Sarah Mitchell","aria-label":"Full name"})}),e.jsx("div",{className:"mb-3",children:e.jsx("input",{className:"form-control",defaultValue:"sarah.mitchell@email.com","aria-label":"Email"})})]}),e.jsxs(D.Footer,{children:[e.jsx(s,{text:"Close",variant:"outline",onClick:t.open}),e.jsx(s,{text:"Save changes",color:"primary",onClick:o})]})]})}function pe(){const{openPortal:o}=x();return e.jsx("div",{className:"text-center",children:e.jsx(s,{text:"Open Form Modal",onClick:()=>o("editProfile",{})})})}const h={name:"Confirm on top of a Modal",decorators:[o=>e.jsxs(y,{portalName:"d-portal",availablePortals:{editProfile:ue},children:[e.jsx(o,{}),e.jsx(g,{nodeId:"d-portal"})]})],render:()=>e.jsx(pe,{}),parameters:{docs:{source:{code:`type EditProfilePayloads = {
  editProfile: Record<string, never>;
};

function EditProfileModal({ }: PortalProps<EditProfilePayloads['editProfile']>) {
  const { closePortal } = useDPortalContext();

  const confirmDiscard = useConfirmModal({
    title: 'Discard changes?',
    message: 'You have unsaved changes. If you close this form your progress will be lost.',
    confirmLabel: 'Discard',
    cancelLabel: 'Keep editing',
    confirmColor: 'danger',
    onConfirm: async () => {
      closePortal();
    },
  });

  return (
    <DModal name="editProfileModal" centered size="lg">
      <DModal.Header onClose={confirmDiscard.open} showCloseButton>
        <h5 className="fw-bold">Edit Profile</h5>
      </DModal.Header>
      <DModal.Body className="py-3 px-5">
        <input className="form-control mb-3" defaultValue="Sarah Mitchell" aria-label="Full name" />
        <input className="form-control" defaultValue="sarah.mitchell@email.com" aria-label="Email" />
      </DModal.Body>
      <DModal.Footer>
        <DButton text="Close" variant="outline" onClick={confirmDiscard.open} />
        <DButton text="Save changes" color="primary" onClick={closePortal} />
      </DModal.Footer>
    </DModal>
  );
}

// Wrap your app with availablePortals including the EditProfileModal:
<DContextProvider<EditProfilePayloads>
  availablePortals={{ editProfile: EditProfileModal }}
>
  <App />
</DContextProvider>`}}}};function he({name:o}){const{closePortal:t}=x(),a=i({title:"Discard changes?",message:"You have unsaved changes. If you close this panel your progress will be lost.",confirmLabel:"Discard",cancelLabel:"Keep editing",confirmColor:"danger",onConfirm:async()=>{await new Promise(n=>{setTimeout(n,500)}),t()}});return e.jsxs(v,{name:o,staticBackdrop:!1,scrollable:!1,openFrom:"end",children:[e.jsx(v.Header,{onClose:a.open,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Settings"})}),e.jsxs(v.Body,{children:[e.jsxs("p",{className:"text-muted mb-4",children:["Update your preferences below. Changes are not saved until you click"," ",e.jsx("strong",{children:"Save"}),"."]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("p",{className:"form-label mb-2",children:"Notification email"}),e.jsx(b,{label:"Email notifications"}),e.jsx(b,{label:"Newsletter subscription"})]})]}),e.jsxs(v.Footer,{children:[e.jsx(s,{text:"Discard",variant:"outline",color:"secondary",onClick:a.open}),e.jsx(s,{text:"Save",color:"primary",onClick:()=>t()})]})]})}function Ce(){const{openPortal:o}=x();return e.jsx("div",{className:"text-center",children:e.jsx(s,{text:"Open Settings",onClick:()=>o("settings",{})})})}const C={name:"Confirm on top of an Offcanvas",decorators:[o=>e.jsxs(y,{portalName:"d-portal-offcanvas",availablePortals:{settings:he},children:[e.jsx(o,{}),e.jsx(g,{nodeId:"d-portal-offcanvas"})]})],render:()=>e.jsx(Ce,{}),parameters:{docs:{source:{code:`type SettingsOffcanvasPayloads = {
  settings: Record<string, never>;
};

function SettingsOffcanvas({ name }: PortalProps<SettingsOffcanvasPayloads['settings']>) {
  const { closePortal } = useDPortalContext();

  const confirmDiscard = useConfirmModal({
    title: 'Discard changes?',
    message: 'You have unsaved changes. If you close this panel your progress will be lost.',
    confirmLabel: 'Discard',
    cancelLabel: 'Keep editing',
    confirmColor: 'danger',
    onConfirm: async () => {
      closePortal();
    },
  });

  return (
    <DOffcanvas name={name} openFrom="end">
      <DOffcanvas.Header onClose={confirmDiscard.open} showCloseButton>
        <h5 className="fw-bold">Settings</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        {/* form fields */}
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="Discard" variant="outline" onClick={confirmDiscard.open} />
        <DButton text="Save" color="primary" onClick={closePortal} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

// Wrap with a unique portalName so it doesn't collide with the app-level portal:
<DContextProvider<SettingsOffcanvasPayloads>
  portalName="d-portal-offcanvas"
  availablePortals={{ settings: SettingsOffcanvas }}
>
  <App />
  <DConfirmModalContainer nodeId="d-portal-offcanvas" />
</DContextProvider>`}}}};var P,w,E,N,A;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <SimpleConfirmContent />,
  parameters: {
    docs: {
      source: {
        code: \`function SimpleConfirmContent() {
  const [result, setResult] = useState<string>('');

  const confirm = useConfirmModal({
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    confirmColor: 'danger',
    onConfirm: async () => {
      // Simulate async operation
      await new Promise<void>((resolve) => { setTimeout(resolve, 1000); });
      setResult('Item deleted successfully');
    },
    onClose: () => {
      setResult('Deletion cancelled');
    },
  });

  return (
    <div className="text-center">
      <DButton
        text="Delete Item"
        color="danger"
        onClick={confirm.open}
        className="mb-3"
      />
      {result && <p className="alert alert-info">{result}</p>}
    </div>
  );
}\`
      }
    }
  }
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source},description:{story:"Simple confirmation modal example.\nShows how to use `useConfirmModal` for basic confirmations.",...(A=(N=d.parameters)==null?void 0:N.docs)==null?void 0:A.description}}};var L,j,S,M,T;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <CriticalDeleteContent />,
  parameters: {
    docs: {
      source: {
        code: \`function CriticalDeleteContent() {
  const [result, setResult] = useState<string>('');

  const confirm = useConfirmModal({
    title: 'Delete Account',
    message: 'This is a permanent action. Type the confirmation code to proceed.',
    confirmLabel: 'Delete Account',
    cancelLabel: 'Cancel',
    confirmColor: 'danger',
    critical: {
      code: 'DELETE ACCOUNT',
      codeLabel: 'Type confirmation code',
      inputPlaceholder: 'Type: DELETE ACCOUNT',
    },
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 1500); });
      setResult('Account deleted permanently');
    },
  });

  return (
    <div className="text-center">
      <DButton
        text="Delete Account"
        color="danger"
        onClick={confirm.open}
        className="mb-3"
      />
      {result && <p className="alert alert-danger">{result}</p>}
    </div>
  );
}\`
      }
    }
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source},description:{story:`Critical confirmation with code validation.
User must type the exact confirmation code before the confirm button is enabled.`,...(T=(M=m.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};var O,k,I,B,R;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <DeleteContactContent />,
  parameters: {
    docs: {
      source: {
        code: \`function DeleteContactContent() {
  const [result, setResult] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState(false);

  const confirmDelete = useConfirmModal({
    title: 'Delete Contact',
    message: 'This will permanently delete the contact "Sarah Mitchell" and all associated data. This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    confirmColor: 'danger',
    critical: {
      code: 'DELETE',
      codeLabel: 'Type "DELETE" to confirm',
      inputPlaceholder: 'Type: DELETE',
    },
    onConfirm: async () => {
      setIsDeleting(true);
      try {
        await new Promise<void>((resolve) => { setTimeout(resolve, 1200); });
        setResult('Contact deleted successfully');
      } finally {
        setIsDeleting(false);
      }
    },
    onClose: () => {
      setResult('Deletion cancelled');
    },
  });

  return (
    <div className="text-center">
      <div className="card p-4 mb-3" style={{ maxWidth: '350px', margin: '0 auto' }}>
        <div className="mb-3">
          <DAvatar name="Sarah Mitchell" size="lg" />
        </div>
        <h5 className="mb-1">Sarah Mitchell</h5>
        <p className="text-muted mb-3">sarah.mitchell@email.com</p>
        <p className="text-muted small mb-4">Added 2 months ago</p>
        <DButton
          text={isDeleting ? 'Deleting...' : 'Delete Contact'}
          color="danger"
          onClick={confirmDelete.open}
          disabled={isDeleting}
          className="w-100"
        />
      </div>
      {result && (
        <p
          className={
            'alert ' +
            (result.includes('successfully')
              ? 'alert-success'
              : 'alert-info')
          }
        >
          {result}
        </p>
      )}
    </div>
  );
}\`
      }
    }
  }
}`,...(I=(k=f.parameters)==null?void 0:k.docs)==null?void 0:I.source},description:{story:`iOS-style delete confirmation.
Mimics the iOS experience when deleting a contact or account.
Requires typing "DELETE" to confirm the action.`,...(R=(B=f.parameters)==null?void 0:B.docs)==null?void 0:R.description}}};var F,K,z,H,W;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <MultipleActionsContent />,
  parameters: {
    docs: {
      source: {
        code: \`function MultipleActionsContent() {
  const [lastAction, setLastAction] = useState<string>('');

  const confirmArchive = useConfirmModal({
    title: 'Archive Document',
    message: 'Are you sure you want to archive this document? You can restore it later from the archive.',
    confirmLabel: 'Archive',
    cancelLabel: 'Keep',
    confirmColor: 'warning',
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 800); });
      setLastAction('Document archived');
    },
  });

  const confirmDisable = useConfirmModal({
    title: 'Disable API Key',
    message: 'This API key will be disabled immediately. Applications using this key will stop working.',
    confirmLabel: 'Disable',
    cancelLabel: 'Cancel',
    confirmColor: 'danger',
    critical: {
      code: 'DISABLE',
      inputPlaceholder: 'Type: DISABLE',
    },
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 800); });
      setLastAction('API key disabled');
    },
  });

  const confirmExport = useConfirmModal({
    title: 'Export Data',
    message: 'Export will include all transaction history and personal information. The file will be sent to your email.',
    confirmLabel: 'Export',
    cancelLabel: 'Cancel',
    confirmColor: 'primary',
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 1000); });
      setLastAction('Export initiated - check your email');
    },
  });

  return (
    <div>
      <div className="d-flex gap-2 justify-content-center mb-3 flex-wrap">
        <DButton
          text="Archive"
          variant="outline"
          onClick={confirmArchive.open}
        />
        <DButton
          text="Disable API Key"
          color="danger"
          variant="outline"
          onClick={confirmDisable.open}
        />
        <DButton
          text="Export Data"
          variant="outline"
          onClick={confirmExport.open}
        />
      </div>
      {lastAction && <p className="alert alert-info text-center">{lastAction}</p>}
    </div>
  );
}\`
      }
    }
  }
}`,...(z=(K=u.parameters)==null?void 0:K.docs)==null?void 0:z.source},description:{story:`Multi-action confirmation example.
Different actions with different confirmation requirements.`,...(W=(H=u.parameters)==null?void 0:H.docs)==null?void 0:W.description}}};var U,Y,V,q,J;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <ContactListContent />
}`,...(V=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:V.source},description:{story:`Contact list with per-row dropdown actions.
Each row has an Edit (no-op) and a Delete action that opens a personalized confirmation modal.`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var $,_,G,Q,X;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Confirm on top of a Modal',
  decorators: [Story => <DContextProvider<EditProfilePayloads> portalName="d-portal" availablePortals={{
    editProfile: EditProfileModal
  }}>
        <Story />
        <DConfirmModalContainer nodeId="d-portal" />
      </DContextProvider>],
  render: () => <ConfirmOnModalContent />,
  parameters: {
    docs: {
      source: {
        code: \`type EditProfilePayloads = {
  editProfile: Record<string, never>;
};

function EditProfileModal({ }: PortalProps<EditProfilePayloads['editProfile']>) {
  const { closePortal } = useDPortalContext();

  const confirmDiscard = useConfirmModal({
    title: 'Discard changes?',
    message: 'You have unsaved changes. If you close this form your progress will be lost.',
    confirmLabel: 'Discard',
    cancelLabel: 'Keep editing',
    confirmColor: 'danger',
    onConfirm: async () => {
      closePortal();
    },
  });

  return (
    <DModal name="editProfileModal" centered size="lg">
      <DModal.Header onClose={confirmDiscard.open} showCloseButton>
        <h5 className="fw-bold">Edit Profile</h5>
      </DModal.Header>
      <DModal.Body className="py-3 px-5">
        <input className="form-control mb-3" defaultValue="Sarah Mitchell" aria-label="Full name" />
        <input className="form-control" defaultValue="sarah.mitchell@email.com" aria-label="Email" />
      </DModal.Body>
      <DModal.Footer>
        <DButton text="Close" variant="outline" onClick={confirmDiscard.open} />
        <DButton text="Save changes" color="primary" onClick={closePortal} />
      </DModal.Footer>
    </DModal>
  );
}

// Wrap your app with availablePortals including the EditProfileModal:
<DContextProvider<EditProfilePayloads>
  availablePortals={{ editProfile: EditProfileModal }}
>
  <App />
</DContextProvider>\`
      }
    }
  }
}`,...(G=(_=h.parameters)==null?void 0:_.docs)==null?void 0:G.source},description:{story:`Confirm modal rendered **above** another open modal.

Click **Close** inside the form modal to trigger the discard confirmation
on top of the already-open modal.`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,ee,oe,te,ae;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Confirm on top of an Offcanvas',
  decorators: [Story => <DContextProvider<SettingsOffcanvasPayloads> portalName="d-portal-offcanvas" availablePortals={{
    settings: SettingsOffcanvas
  }}>
        <Story />
        <DConfirmModalContainer nodeId="d-portal-offcanvas" />
      </DContextProvider>],
  render: () => <ConfirmOnOffcanvasContent />,
  parameters: {
    docs: {
      source: {
        code: \`type SettingsOffcanvasPayloads = {
  settings: Record<string, never>;
};

function SettingsOffcanvas({ name }: PortalProps<SettingsOffcanvasPayloads['settings']>) {
  const { closePortal } = useDPortalContext();

  const confirmDiscard = useConfirmModal({
    title: 'Discard changes?',
    message: 'You have unsaved changes. If you close this panel your progress will be lost.',
    confirmLabel: 'Discard',
    cancelLabel: 'Keep editing',
    confirmColor: 'danger',
    onConfirm: async () => {
      closePortal();
    },
  });

  return (
    <DOffcanvas name={name} openFrom="end">
      <DOffcanvas.Header onClose={confirmDiscard.open} showCloseButton>
        <h5 className="fw-bold">Settings</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        {/* form fields */}
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="Discard" variant="outline" onClick={confirmDiscard.open} />
        <DButton text="Save" color="primary" onClick={closePortal} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

// Wrap with a unique portalName so it doesn't collide with the app-level portal:
<DContextProvider<SettingsOffcanvasPayloads>
  portalName="d-portal-offcanvas"
  availablePortals={{ settings: SettingsOffcanvas }}
>
  <App />
  <DConfirmModalContainer nodeId="d-portal-offcanvas" />
</DContextProvider>\`
      }
    }
  }
}`,...(oe=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:oe.source},description:{story:`Confirm modal rendered **above** an open offcanvas.

Click **Discard** or the ✕ button inside the settings panel to trigger
the discard confirmation on top of the already-open offcanvas.`,...(ae=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};const Fe=["SimpleConfirm","CriticalDelete","DeleteContact","MultipleActions","ContactList","ConfirmOnModal","ConfirmOnOffcanvas"];export{h as ConfirmOnModal,C as ConfirmOnOffcanvas,p as ContactList,m as CriticalDelete,f as DeleteContact,u as MultipleActions,d as SimpleConfirm,Fe as __namedExportsOrder,Re as default};
