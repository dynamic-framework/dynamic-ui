import { Meta, StoryObj } from '@storybook/react';

import {
  DButton,
  DOffcanvas,
  DOffcanvasBody,
  DOffcanvasFooter,
  DOffcanvasHeader,
} from '../../components';
import {
  OffcanvasContextProvider,
  useOffcanvasContext as useOffcanvasContextHook,
} from '../../contexts';
import type { OffcanvasProps } from '../../contexts';

const ExampleOffcanvas = ({ closeOffcanvas }: OffcanvasProps) => (
  <DOffcanvas
    name="example"
    isStatic={false}
    isScrollable={false}
    openFrom="end"
  >
    <DOffcanvasHeader onClose={closeOffcanvas} showCloseButton>
      <h5 className="fw-bold">Advanced filters</h5>
    </DOffcanvasHeader>
    <DOffcanvasBody>
      <p>Offcanvas body</p>
    </DOffcanvasBody>
    <DOffcanvasFooter>
      <DButton
        text="cancel"
        theme="secondary"
        variant="outline"
        className="d-grid"
        isPill
        onClick={() => closeOffcanvas()}
      />
      <DButton text="ok" className="d-grid" isPill />
    </DOffcanvasFooter>
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
