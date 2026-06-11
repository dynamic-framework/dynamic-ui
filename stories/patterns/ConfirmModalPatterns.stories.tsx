import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  DContextProvider,
  DButton,
  DAvatar,
  useDPortalContext,
  DConfirmModalContainer,
  DInputSwitch,
} from '../../src';
import DModal from '../../src/components/DModal/DModal';
import DDropdown from '../../src/components/DDropdown/DDropdown';
import DOffcanvas from '../../src/components/DOffcanvas/DOffcanvas';
import type { PortalProps } from '../../src';
import { useConfirmModal } from '../../src/hooks';

const meta: Meta = {
  title: 'Patterns/Confirm Modal',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <DContextProvider>
        <Story />
        <DConfirmModalContainer nodeId="d-portal" />
      </DContextProvider>
    ),
  ],
};

export default meta;

function SimpleConfirmContent() {
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
}

/**
 * Simple confirmation modal example.
 * Shows how to use `useConfirmModal` for basic confirmations.
 */
export const SimpleConfirm: StoryObj = {
  render: () => <SimpleConfirmContent />,
  parameters: {
    docs: {
      source: {
        code: `function SimpleConfirmContent() {
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
}`,
      },
    },
  },
};

function CriticalDeleteContent() {
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
}

/**
 * Critical confirmation with code validation.
 * User must type the exact confirmation code before the confirm button is enabled.
 */
export const CriticalDelete: StoryObj = {
  render: () => <CriticalDeleteContent />,
  parameters: {
    docs: {
      source: {
        code: `function CriticalDeleteContent() {
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
}`,
      },
    },
  },
};

function DeleteContactContent() {
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
        <p className={`alert ${result.includes('successfully') ? 'alert-success' : 'alert-info'}`}>
          {result}
        </p>
      )}
    </div>
  );
}

/**
 * iOS-style delete confirmation.
 * Mimics the iOS experience when deleting a contact or account.
 * Requires typing "DELETE" to confirm the action.
 */
export const DeleteContact: StoryObj = {
  render: () => <DeleteContactContent />,
  parameters: {
    docs: {
      source: {
        code: `function DeleteContactContent() {
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
}`,
      },
    },
  },
};

function MultipleActionsContent() {
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
}

/**
 * Multi-action confirmation example.
 * Different actions with different confirmation requirements.
 */
export const MultipleActions: StoryObj = {
  render: () => <MultipleActionsContent />,
  parameters: {
    docs: {
      source: {
        code: `function MultipleActionsContent() {
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
}`,
      },
    },
  },
};

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
};

const CONTACTS: Contact[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 555-0101',
    role: 'Designer',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    phone: '+1 555-0102',
    role: 'Developer',
  },
  {
    id: 3,
    name: 'Carlos Rivera',
    email: 'carlos.rivera@email.com',
    phone: '+1 555-0103',
    role: 'Manager',
  },
  {
    id: 4,
    name: 'Emily Johnson',
    email: 'emily.johnson@email.com',
    phone: '+1 555-0104',
    role: 'QA Engineer',
  },
  {
    id: 5,
    name: 'Michael Brown',
    email: 'michael.brown@email.com',
    phone: '+1 555-0105',
    role: 'DevOps',
  },
  {
    id: 6,
    name: 'Sophia Martinez',
    email: 'sophia.martinez@email.com',
    phone: '+1 555-0106',
    role: 'Product Owner',
  },
  {
    id: 7,
    name: 'Liam Wilson',
    email: 'liam.wilson@email.com',
    phone: '+1 555-0107',
    role: 'Backend Dev',
  },
  {
    id: 8,
    name: 'Olivia Garcia',
    email: 'olivia.garcia@email.com',
    phone: '+1 555-0108',
    role: 'Frontend Dev',
  },
  {
    id: 9,
    name: 'Noah Davis',
    email: 'noah.davis@email.com',
    phone: '+1 555-0109',
    role: 'UX Researcher',
  },
  {
    id: 10,
    name: 'Ava Thompson',
    email: 'ava.thompson@email.com',
    phone: '+1 555-0110',
    role: 'Scrum Master',
  },
];

function ContactRow({
  contact,
  onDeleted,
}: {
  contact: Contact;
  onDeleted: (id: number) => void;
}) {
  const confirm = useConfirmModal({
    title: 'Delete Contact',
    message: `Are you sure you want to delete ${contact.name} from your contact list?`,
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    confirmColor: 'danger',
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 800); });
      onDeleted(contact.id);
    },
  });

  return (
    <div className="d-flex align-items-center gap-3 p-3 border-bottom">
      <DAvatar name={contact.name} size="sm" />
      <div className="flex-grow-1 min-width-0">
        <div className="fw-semibold text-truncate">{contact.name}</div>
        <div className="text-muted small text-truncate">{contact.email}</div>
      </div>
      <div className="text-muted small d-none d-sm-block" style={{ minWidth: '100px' }}>
        {contact.phone}
      </div>
      <span className="badge bg-secondary-subtle text-secondary-emphasis d-none d-md-inline">
        {contact.role}
      </span>
      <DDropdown
        actions={[
          {
            label: 'Edit',
            icon: 'Pencil',
            onClick: () => {},
          },
          {
            isDivider: true,
            label: '',
          },
          {
            label: 'Delete',
            icon: 'Trash2',
            color: 'danger',
            onClick: confirm.open,
          },
        ]}
      />
    </div>
  );
}

function ContactListContent() {
  const [contacts, setContacts] = useState<Contact[]>(CONTACTS);

  const handleDeleted = (id: number) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div style={{ width: '600px', maxWidth: '100%' }}>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="mb-0">{`Contacts (${contacts.length})`}</h5>
      </div>
      <div className="card">
        {contacts.length === 0 ? (
          <p className="text-muted text-center py-4 mb-0">No contacts remaining.</p>
        ) : (
          contacts.map((contact) => (
            <ContactRow
              key={contact.id}
              contact={contact}
              onDeleted={handleDeleted}
            />
          ))
        )}
      </div>
    </div>
  );
}

/**
 * Contact list with per-row dropdown actions.
 * Each row has an Edit (no-op) and a Delete action that opens a personalized confirmation modal.
 */
export const ContactList: StoryObj = {
  render: () => <ContactListContent />,
};

// ---------------------------------------------------------------------------
// Confirm Modal over another Modal
// ---------------------------------------------------------------------------

type EditProfilePayloads = {
  editProfile: Record<string, never>;
};

function EditProfileModal() {
  const { closePortal } = useDPortalContext();

  const confirmDiscard = useConfirmModal({
    title: 'Discard changes?',
    message: 'You have unsaved changes. If you close this form your progress will be lost.',
    confirmLabel: 'Discard',
    cancelLabel: 'Keep editing',
    confirmColor: 'danger',
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 600); });
      closePortal();
    },
  });

  return (
    <DModal name="editProfileModal" centered size="lg">
      <DModal.Header onClose={confirmDiscard.open} showCloseButton>
        <h5 className="fw-bold">Edit Profile</h5>
      </DModal.Header>
      <DModal.Body className="py-3 px-5">
        <p className="text-muted mb-3">
          Fill in your details below. Changes are not saved until you click
          {' '}
          <strong>Save</strong>
          .
        </p>
        <div className="mb-3">
          <input
            className="form-control"
            defaultValue="Sarah Mitchell"
            aria-label="Full name"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            defaultValue="sarah.mitchell@email.com"
            aria-label="Email"
          />
        </div>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="Close"
          variant="outline"
          onClick={confirmDiscard.open}
        />
        <DButton
          text="Save changes"
          color="primary"
          onClick={closePortal}
        />
      </DModal.Footer>
    </DModal>
  );
}

function ConfirmOnModalContent() {
  const { openPortal } = useDPortalContext<EditProfilePayloads>();

  return (
    <div className="text-center">
      <DButton
        text="Open Form Modal"
        onClick={() => openPortal('editProfile', {})}
      />
    </div>
  );
}

/**
 * Confirm modal rendered **above** another open modal.
 *
 * Click **Close** inside the form modal to trigger the discard confirmation
 * on top of the already-open modal.
 */
export const ConfirmOnModal: StoryObj = {
  name: 'Confirm on top of a Modal',
  decorators: [
    (Story) => (
      <DContextProvider<EditProfilePayloads>
        portalName="d-portal"
        availablePortals={{ editProfile: EditProfileModal }}
      >
        <Story />
        <DConfirmModalContainer nodeId="d-portal" />
      </DContextProvider>
    ),
  ],
  render: () => <ConfirmOnModalContent />,
  parameters: {
    docs: {
      source: {
        code: `type EditProfilePayloads = {
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
</DContextProvider>`,
      },
    },
  },
};

// ---------------------------------------------------------------------------
// Confirm Modal on top of an Offcanvas
// ---------------------------------------------------------------------------

type SettingsOffcanvasPayloads = {
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
      await new Promise<void>((resolve) => { setTimeout(resolve, 500); });
      closePortal();
    },
  });

  return (
    <DOffcanvas name={name} staticBackdrop={false} scrollable={false} openFrom="end">
      <DOffcanvas.Header onClose={confirmDiscard.open} showCloseButton>
        <h5 className="fw-bold">Settings</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p className="text-muted mb-4">
          Update your preferences below. Changes are not saved until you click
          {' '}
          <strong>Save</strong>
          .
        </p>
        <div className="mb-3">
          <p className="form-label mb-2">Notification email</p>
          <DInputSwitch label="Email notifications" />
          <DInputSwitch label="Newsletter subscription" />
        </div>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton
          text="Discard"
          variant="outline"
          color="secondary"
          onClick={confirmDiscard.open}
        />
        <DButton
          text="Save"
          color="primary"
          onClick={() => closePortal()}
        />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function ConfirmOnOffcanvasContent() {
  const { openPortal } = useDPortalContext<SettingsOffcanvasPayloads>();

  return (
    <div className="text-center">
      <DButton
        text="Open Settings"
        onClick={() => openPortal('settings', {})}
      />
    </div>
  );
}

/**
 * Confirm modal rendered **above** an open offcanvas.
 *
 * Click **Discard** or the ✕ button inside the settings panel to trigger
 * the discard confirmation on top of the already-open offcanvas.
 */
export const ConfirmOnOffcanvas: StoryObj = {
  name: 'Confirm on top of an Offcanvas',
  decorators: [
    (Story) => (
      <DContextProvider<SettingsOffcanvasPayloads>
        portalName="d-portal-offcanvas"
        availablePortals={{ settings: SettingsOffcanvas }}
      >
        <Story />
        <DConfirmModalContainer nodeId="d-portal-offcanvas" />
      </DContextProvider>
    ),
  ],
  render: () => <ConfirmOnOffcanvasContent />,
  parameters: {
    docs: {
      source: {
        code: `type SettingsOffcanvasPayloads = {
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
</DContextProvider>`,
      },
    },
  },
};
