import {
  DContextProvider,
  useDPortalContext,
} from '../../../src';
import DButton from '../../../src/components/DButton';
import DModal from '../../../src/components/DModal/DModal';

import type { PortalProps } from '../../../src';

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
      staticBackdrop={false}
    >
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="df-fw-semibold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body className="df-py-3 df-px-5">
        <p>Modal body</p>
        <small>{payload.description}</small>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="cancel"
          color="secondary"
          variant="outline"
          className="df-grid"
          onClick={() => closePortal()}
        />
        <DButton text="ok" className="df-grid" />
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
