import { Meta, StoryObj } from '@storybook/react';

import { MButton, MModal } from '../../components';
import { ModalContextProvider, useModalContext as useModalContextHook } from '../../contexts';
import type { ModalProps } from '../../contexts';

const ExampleModal = ({ closeModal }: ModalProps) => (
  <MModal
    name="example"
    isCentered
    isStatic
    showCloseButton
    onMClose={() => closeModal()}
  >
    <div slot="header">
      <h5 className="fw-bold">Do you want to reject the offer?</h5>
    </div>
    <div slot="body">
      <p className="py-3 px-5">Modal body</p>
    </div>
    <div slot="footer">
      <MButton
        text="cancel"
        theme="secondary"
        variant="outline"
        className="d-grid"
        isPill
        onMClick={() => closeModal()}
      />
      <MButton text="ok" className="d-grid" isPill />
    </div>
  </MModal>
);

const ExampleChildren = () => {
  const { openModal } = useModalContextHook();
  return <MButton text="Open Modal" onMClick={() => openModal('example')} />;
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
