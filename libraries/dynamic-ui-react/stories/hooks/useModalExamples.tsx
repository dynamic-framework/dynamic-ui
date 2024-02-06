import { DModalContextProvider, useDModalContext } from '../../src';
import DModal from '../../src/components/DModal/DModal';
import DButton from '../../src/components/DButton';

import type { ModalProps } from '../../src';

type ModalPayload = {
  example: {
    description: string;
  };
};

const ExampleModal = ({ closeModal, payload }: ModalProps<ModalPayload['example']>) => (
  <DModal
    name="example"
    centered
    staticBackdrop
  >
    <DModal.Header onClose={closeModal} showCloseButton>
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
        onClick={() => closeModal()}
      />
      <DButton text="ok" className="d-grid" pill />
    </DModal.Footer>
  </DModal>
);

const ExampleModalUsage = () => {
  const { openModal } = useDModalContext<ModalPayload>();
  return (
    <DButton
      text="Open Modal"
      onClick={() => openModal('example', { description: 'from modal payload' })}
    />
  );
};

export const ExampleModalRoot = () => (
  <DModalContextProvider<ModalPayload>
    portalName="examplePortal"
    availableModals={{
      example: ExampleModal,
    }}
  >
    <ExampleModalUsage />
  </DModalContextProvider>
);
