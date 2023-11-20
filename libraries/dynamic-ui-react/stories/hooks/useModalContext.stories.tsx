import { Meta, StoryObj } from '@storybook/react';

import DModal from '../../src/components/DModal/DModal';
import DButton from '../../src/components/DButton';

import {
  ModalContextProvider,
  useModalContext as useModalContextHook,
} from '../../src/contexts';
import type { ModalProps } from '../../src/contexts';

const ExampleModal = ({ closeModal }: ModalProps) => (
  <DModal
    name="example"
    centered
    staticBackdrop
    className="d-block"
  >
    <DModal.Header onClose={closeModal} showCloseButton>
      <h5 className="fw-bold">Do you want to reject the offer?</h5>
    </DModal.Header>
    <DModal.Body>
      <p className="py-3 px-5">Modal body</p>
    </DModal.Body>
    <DModal.Footer>
      <DButton
        text="cancel"
        theme="secondary"
        variant="outline"
        className="d-grid"
        isPill
        onClick={() => closeModal()}
      />
      <DButton text="ok" className="d-grid" isPill />
    </DModal.Footer>
  </DModal>
);

const ExampleChildren = () => {
  const { openModal } = useModalContextHook();
  return <DButton text="Open Modal" onClick={() => openModal('example')} />;
};

const Example = () => (
  <ModalContextProvider
    portalName="examplePortal"
    availableModals={{
      example: ExampleModal,
    }}
  >
    <ExampleChildren />
  </ModalContextProvider>
);

const config: Meta<typeof Example> = {
  title: 'Design System/Patterns/Modal',
  component: Example,
};

export default config;
type Story = StoryObj<typeof Example>;

export const useModalContext: Story = {
  args: {},
};
