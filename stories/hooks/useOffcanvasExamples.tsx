import {
  DContextProvider,
  useDPortalContext,
} from '../../src';
import DButton from '../../src/components/DButton';
import DOffcanvas from '../../src/components/DOffcanvas/DOffcanvas';

import type { PortalProps } from '../../src';

type OffcanvasPayloads = {
  example: {
    description: string;
  };
};

function ExampleOffcanvas({ payload }: PortalProps<OffcanvasPayloads['example']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas
      name="example"
      staticBackdrop={false}
      scrollable={false}
      openFrom="end"
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
        <small>{payload.description}</small>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton
          text="cancel"
          color="secondary"
          variant="outline"
          className="d-grid"
          pill
          onClick={() => closePortal()}
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function ExampleOffcanvasUsage() {
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Offcanvas"
      onClick={() => openPortal('example', { description: 'from portal payload' })}
    />
  );
}

export function ExampleOffcanvasRoot() {
  return (
    <DContextProvider<OffcanvasPayloads>
      portalName="examplePortal"
      availablePortals={{
        example: ExampleOffcanvas,
      }}
    >
      <ExampleOffcanvasUsage />
    </DContextProvider>
  );
}
