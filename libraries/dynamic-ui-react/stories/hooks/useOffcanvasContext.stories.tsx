import { Meta, StoryObj } from '@storybook/react';

import DOffcanvas from '../../src/components/DOffcanvas/DOffcanvas';
import DButton from '../../src/components/DButton';

import {
  OffcanvasContextProvider,
  useOffcanvasContext as useOffcanvasContextHook,
} from '../../src/contexts';
import type { OffcanvasProps } from '../../src/contexts';

const ExampleOffcanvas = ({ closeOffcanvas }: OffcanvasProps) => (
  <DOffcanvas
    name="example"
    isStatic={false}
    isScrollable={false}
    openFrom="end"
  >
    <DOffcanvas.Header onClose={closeOffcanvas} showCloseButton>
      <h5 className="fw-bold">Advanced filters</h5>
    </DOffcanvas.Header>
    <DOffcanvas.Body>
      <p>Offcanvas body</p>
    </DOffcanvas.Body>
    <DOffcanvas.Footer>
      <DButton
        text="cancel"
        theme="secondary"
        variant="outline"
        className="d-grid"
        isPill
        onClick={() => closeOffcanvas()}
      />
      <DButton text="ok" className="d-grid" isPill />
    </DOffcanvas.Footer>
  </DOffcanvas>
);

const ExampleChildren = () => {
  const { openOffcanvas } = useOffcanvasContextHook();
  return <DButton text="Open Offcanvas" onClick={() => openOffcanvas('example')} />;
};

const Example = () => (
  <OffcanvasContextProvider
    portalName="examplePortal"
    availableOffcanvas={{
      example: ExampleOffcanvas,
    }}
  >
    <ExampleChildren />
  </OffcanvasContextProvider>
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
