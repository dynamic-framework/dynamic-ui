import {
  DContextProvider,
  DOffcanvas,
  useDPortalContext,
} from '../../src';
import DModal from '../../src/components/DModal/DModal';
import DButton from '../../src/components/DButton';

import type { PortalProps } from '../../src';

type PortalPayloads = {
  modalExample: {
    description: string;
  },
  offcanvasExample: {
    title: string;
  }
};

function ExampleModal({ payload }: PortalProps<PortalPayloads['modalExample']>) {
  const { closePortal } = useDPortalContext<PortalPayloads>();
  return (
    <DModal
      name="modalExample"
      centered
      staticBackdrop
    >
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p>Modal body</p>
        <small>{payload.description}</small>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          pill
          onClick={() => closePortal()}
        />
        <DButton
          text="ok"
          className="d-grid"
          pill
        />
      </DModal.Footer>
    </DModal>
  );
}

function ExampleOffcanvas({ payload }: PortalProps<PortalPayloads['offcanvasExample']>) {
  const { closePortal } = useDPortalContext<PortalPayloads>();
  return (
    <DOffcanvas
      name="offcanvasExample"
      staticBackdrop
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
        <small>{payload.title}</small>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          pill
          onClick={() => closePortal()}
        />
        <DButton
          text="ok"
          className="d-grid"
          pill
        />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function ExamplePortalUsage() {
  const { openPortal } = useDPortalContext<PortalPayloads>();
  return (
    <div className="d-flex gap-4">
      <DButton
        text="Open Modal"
        onClick={() => openPortal('modalExample', { description: 'from modal payload' })}
      />
      <DButton
        text="Open Offcanvas"
        onClick={() => openPortal('offcanvasExample', { title: 'from offcanvas payload' })}
      />
    </div>
  );
}

export function ExamplePortalRoot() {
  return (
    <DContextProvider
      portalName="examplePortal"
      availablePortals={{
        modalExample: ExampleModal,
        offcanvasExample: ExampleOffcanvas,
      }}
    >
      <ExamplePortalUsage />
    </DContextProvider>
  );
}
