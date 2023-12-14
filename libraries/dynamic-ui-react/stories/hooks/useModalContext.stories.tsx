import { Meta, StoryObj } from '@storybook/react';

import DModal from '../../src/components/DModal/DModal';
import DButton from '../../src/components/DButton';

import {
  DModalContextProvider,
  useDModalContext,
} from '../../src';

import type { ModalProps } from '../../src';

type ModalPayload = {
  example: {
    description: string;
  };
};

const ExampleModal = ({ closeModal }: ModalProps<ModalPayload['example']>) => (
  <DModal
    name="example"
    centered
    staticBackdrop
    className="d-block"
  >
    <DModal.Header onClose={closeModal} showCloseButton>
      <h5 className="fw-bold">Do you want to reject the offer?</h5>
    </DModal.Header>
    <DModal.Body className="py-3 px-5">
      <p>Modal body</p>
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

const ExampleChildren = () => {
  const { openModal } = useDModalContext<ModalPayload>();
  return (
    <DButton
      text="Open Modal"
      onClick={() => openModal('example', { description: 'from modal payload' })}
    />
  );
};

const Example = () => (
  <DModalContextProvider<ModalPayload>
    portalName="examplePortal"
    availableModals={{
      example: ExampleModal,
    }}
  >
    <ExampleChildren />
  </DModalContextProvider>
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
