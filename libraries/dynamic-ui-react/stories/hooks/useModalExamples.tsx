import {
  DContextProvider,
  useDPortalContext,
} from '../../src';
import DModal from '../../src/components/DModal/DModal';
import DButton from '../../src/components/DButton';

import type { PortalProps } from '../../src';

type ModalPayloads = {
  example: {
    description: string;
  };
};

function ExampleModal({ payload }: PortalProps<ModalPayloads['example']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DModal
      name="example"
      centered
      staticBackdrop
    >
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body className="py-3 px-5">
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
        <DButton text="ok" className="d-grid" pill />
      </DModal.Footer>
    </DModal>
  );
}

function ExampleModalUsage() {
  const { openPortal } = useDPortalContext<ModalPayloads>();
  return (
    <DButton
      text="Open Modal"
      onClick={() => openPortal('example', { description: 'from portal payload' })}
    />
  );
}

export function ExampleModalRoot() {
  return (
    <DContextProvider<ModalPayloads>
      portalName="examplePortal"
      availablePortals={{
        example: ExampleModal,
      }}
    >
      <ExampleModalUsage />
    </DContextProvider>
  );
}
