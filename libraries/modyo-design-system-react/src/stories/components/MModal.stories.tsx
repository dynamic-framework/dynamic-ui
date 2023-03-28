import { Meta, StoryObj } from '@storybook/react';

import { MButton, MModal } from '../../components';
import { ModalContextProvider, useModalContext } from '../../contexts';
import type { ModalProps } from '../../contexts';

const ExampleModal = ({ closeModal }: ModalProps) => (
  <MModal
    name='example'
    isCentered
    isStatic
    showCloseButton
    onMClose={() => closeModal()}
  >
    <div slot='header'>text on slot header</div>
    <div slot='body'>text on slot body</div>
  </MModal>
);

const ExampleChildren = () => {
  const { openModal } = useModalContext();
  return <MButton text='Show Modal' onClick={() => openModal('example')} />;
};

const Example = () => (
  <ModalContextProvider
    portalName='examplePortal'
    availableModals={{
      example: ExampleModal,
    }}
  >
    <ExampleChildren />
  </ModalContextProvider>
);

const config: Meta<typeof Example> = {
  title: 'React/hooks/useModalContext',
  component: Example,
};

export default config;
type Story = StoryObj<typeof MModal>;

export const Default: Story = {
  render: () => <Example />,
};
