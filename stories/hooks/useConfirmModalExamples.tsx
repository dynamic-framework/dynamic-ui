import { useState } from 'react';
import {
  DContextProvider,
  DButton,
  DAvatar,
  DConfirmModalContainer,
} from '../../src';
import { useConfirmModal } from '../../src/hooks';

function BasicExampleContent() {
  const confirm = useConfirmModal({
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 800); });
    },
  });

  return (
    <div className="df-flex df-flex-col df-items-center df-gap-3">
      <DButton text="Proceed" onClick={confirm.open} />
    </div>
  );
}

function CriticalExampleContent() {
  const [result, setResult] = useState('');

  const confirm = useConfirmModal({
    title: 'Delete Account',
    message: 'This is a permanent action. All your data will be erased and cannot be recovered.',
    confirmLabel: 'Delete Account',
    cancelLabel: 'Cancel',
    confirmColor: 'danger',
    critical: {
      code: 'DELETE ACCOUNT',
      codeLabel: 'Type the confirmation code to proceed',
      inputPlaceholder: 'Type: DELETE ACCOUNT',
    },
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 1000); });
      setResult('Account deleted permanently.');
    },
  });

  return (
    <div className="df-flex df-flex-col df-items-center df-gap-3">
      <DButton text="Delete Account" color="danger" onClick={confirm.open} />
      {result && <p className="df-alert df-mb-0" data-color="danger">{result}</p>}
    </div>
  );
}

function CloseCallbackExampleContent() {
  const [log, setLog] = useState<string[]>([]);

  const addLog = (msg: string) => setLog((prev) => [...prev, msg]);

  const confirm = useConfirmModal({
    title: 'Archive Record',
    message: 'This record will be moved to the archive. You can restore it later.',
    confirmLabel: 'Archive',
    cancelLabel: 'Keep',
    confirmColor: 'warning',
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 600); });
      addLog('✔ onConfirm — record archived.');
    },
    onClose: () => {
      addLog('✖ onClose — modal closed without confirming.');
    },
  });

  return (
    <div className="df-flex df-flex-col df-items-center df-gap-3" style={{ minWidth: 320 }}>
      <DButton text="Archive Record" variant="outline" onClick={confirm.open} />
      {log.length > 0 && (
        <ul className="df-list df-w-full">
          {log.map((entry, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i} className="df-list-item df-bg-muted df-fs-body-sm">
              {entry}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ContactRowExampleContent() {
  const [deleted, setDeleted] = useState(false);
  const contactName = 'Sarah Mitchell';

  const confirm = useConfirmModal({
    title: 'Delete Contact',
    message: `Are you sure you want to delete ${contactName} from your contact list?`,
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    confirmColor: 'danger',
    onConfirm: async () => {
      await new Promise<void>((resolve) => { setTimeout(resolve, 800); });
      setDeleted(true);
    },
  });

  if (deleted) {
    return <p className="df-alert" data-color="success">Contact removed successfully.</p>;
  }

  return (
    <div className="df-card df-p-4 df-flex df-flex-row df-items-center df-gap-3" style={{ minWidth: 320 }}>
      <DAvatar name={contactName} size="sm" />
      <div className="df-grow">
        <div className="df-fw-semibold">{contactName}</div>
        <div className="df-text-muted df-fs-body-sm">sarah.mitchell@email.com</div>
      </div>
      <DButton
        text="Delete"
        color="danger"
        variant="outline"
        onClick={confirm.open}
      />
    </div>
  );
}

export function BasicExample() {
  return (
    <DContextProvider>
      <BasicExampleContent />
      <DConfirmModalContainer nodeId="d-portal" />
    </DContextProvider>
  );
}

export function CriticalExample() {
  return (
    <DContextProvider>
      <CriticalExampleContent />
      <DConfirmModalContainer nodeId="d-portal" />
    </DContextProvider>
  );
}

export function CloseCallbackExample() {
  return (
    <DContextProvider>
      <CloseCallbackExampleContent />
      <DConfirmModalContainer nodeId="d-portal" />
    </DContextProvider>
  );
}

export function ContactRowExample() {
  return (
    <DContextProvider>
      <ContactRowExampleContent />
      <DConfirmModalContainer nodeId="d-portal" />
    </DContextProvider>
  );
}

export function ExampleRoot() {
  return <BasicExample />;
}
