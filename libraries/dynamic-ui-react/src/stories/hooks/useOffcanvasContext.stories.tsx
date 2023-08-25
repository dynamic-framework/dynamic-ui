import { Meta, StoryObj } from '@storybook/react';

import { DButton, DOffcanvas } from '../../components';
import { OffcanvasContextProvider, useOffcanvasContext as useOffcanvasContextHook } from '../../contexts';
import type { OffcanvasProps } from '../../contexts';

const ExampleOffcanvas = ({ closeOffcanvas }: OffcanvasProps) => (
  <DOffcanvas
    name="example"
    isStatic={false}
    isScrollable={false}
    showCloseButton
    openFrom="end"
    onEventClose={() => closeOffcanvas()}
  >
    <div slot="header">
      <h5 className="fw-bold">Advanced filters</h5>
    </div>
    <div slot="body">
      <p>Offcanvas body</p>
    </div>
    <div slot="footer">
      <DButton
        text="cancel"
        theme="secondary"
        variant="outline"
        className="d-grid"
        isPill
        onEventClick={() => closeOffcanvas()}
      />
      <DButton text="ok" className="d-grid" isPill />
    </div>
  </DOffcanvas>
);

const ExampleChildren = () => {
  const { openOffcanvas } = useOffcanvasContextHook();
  return <DButton text="Open Offcanvas" onEventClick={() => openOffcanvas('example')} />;
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
