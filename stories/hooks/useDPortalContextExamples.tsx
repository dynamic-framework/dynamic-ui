import {
  DContextProvider,
  useDPortalContext,
} from '../../src';
import DButton from '../../src/components/DButton';
import DModal from '../../src/components/DModal/DModal';

import type { PortalProps } from '../../src';

type ExamplePayloads = {
  info: {
    message: string;
  };
};

function InfoModal({ payload }: PortalProps<ExamplePayloads['info']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DModal
      name="info"
      centered
      staticBackdrop={false}
    >
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Information</h5>
      </DModal.Header>
      <DModal.Body className="py-3 px-5">
        <p>{payload.message}</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="Close"
          className="d-grid"
          onClick={() => closePortal()}
        />
      </DModal.Footer>
    </DModal>
  );
}

function OpenModalButton() {
  const { openPortal } = useDPortalContext<ExamplePayloads>();
  return (
    <DButton
      text="Open Portal"
      onClick={() => openPortal('info', { message: 'Hello from useDPortalContext!' })}
    />
  );
}

export function ExamplePortalContextRoot() {
  return (
    <DContextProvider<ExamplePayloads>
      portalName="exampleDPortalContext"
      availablePortals={{
        info: InfoModal,
      }}
    >
      <OpenModalButton />
    </DContextProvider>
  );
}
