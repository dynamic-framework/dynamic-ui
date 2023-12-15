import { Meta, StoryObj } from '@storybook/react';

import DOffcanvas from '../../src/components/DOffcanvas/DOffcanvas';
import DButton from '../../src/components/DButton';

import {
  DOffcanvasContextProvider,
  useDOffcanvasContext,
} from '../../src';

import type { OffcanvasProps } from '../../src';

type OffcanvasPayload = {
  example: {
    description: string;
  };
};

const ExampleOffcanvas = ({ closeOffcanvas, payload }: OffcanvasProps<OffcanvasPayload['example']>) => (
  <DOffcanvas
    name="example"
    staticBackdrop={false}
    scrollable={false}
    openFrom="end"
  >
    <DOffcanvas.Header onClose={closeOffcanvas} showCloseButton>
      <h5 className="fw-bold">Advanced filters</h5>
    </DOffcanvas.Header>
    <DOffcanvas.Body>
      <p>Offcanvas body</p>
      <small>{payload.description}</small>
    </DOffcanvas.Body>
    <DOffcanvas.Footer>
      <DButton
        text="cancel"
        theme="secondary"
        variant="outline"
        className="d-grid"
        pill
        onClick={() => closeOffcanvas()}
      />
      <DButton text="ok" className="d-grid" pill />
    </DOffcanvas.Footer>
  </DOffcanvas>
);

const ExampleChildren = () => {
  const { openOffcanvas } = useDOffcanvasContext<OffcanvasPayload>();
  return (
    <DButton
      text="Open Offcanvas"
      onClick={() => openOffcanvas('example', { description: 'from modal payload' })}
    />
  );
};

const Example = () => (
  <DOffcanvasContextProvider<OffcanvasPayload>
    portalName="examplePortal"
    availableOffcanvas={{
      example: ExampleOffcanvas,
    }}
  >
    <ExampleChildren />
  </DOffcanvasContextProvider>
);

const config: Meta<typeof Example> = {
  title: 'Design System/Patterns/Offcanvas',
  component: Example,
};

export default config;
type Story = StoryObj<typeof DOffcanvas>;

export const useOffcanvasContext: Story = {
  render: () => <Example />,
};
