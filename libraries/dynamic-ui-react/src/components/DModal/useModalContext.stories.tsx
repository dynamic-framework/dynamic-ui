import { Meta, StoryObj } from '@storybook/react';

import DModal from './DModal';
import DModalHeader from '../DModalHeader';
import DModalBody from '../DModalBody';
import DModalFooter from '../DModalFooter';
import DButton from '../DButton';

import {
  ModalContextProvider,
  useModalContext as useModalContextHook,
} from '../../contexts';
import type { ModalProps } from '../../contexts';

const ExampleModal = ({ closeModal }: ModalProps) => (
  <DModal
    name="example"
    isCentered
    isStatic
    className="d-block"
  >
    <DModalHeader onClose={closeModal} showCloseButton>
      <h5 className="fw-bold">Do you want to reject the offer?</h5>
    </DModalHeader>
    <DModalBody>
      <p className="py-3 px-5">Modal body</p>
    </DModalBody>
    <DModalFooter>
      <DButton
        text="cancel"
        theme="secondary"
        variant="outline"
        className="d-grid"
        isPill
        onClick={() => closeModal()}
      />
      <DButton text="ok" className="d-grid" isPill />
    </DModalFooter>
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
