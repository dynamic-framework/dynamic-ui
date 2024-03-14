import { DOffcanvasContextProvider, useDOffcanvasContext } from '../../src';
import DOffcanvas from '../../src/components/DOffcanvas/DOffcanvas';
import DButton from '../../src/components/DButton';

import type { OffcanvasProps } from '../../src';

type OffcanvasPayloads = {
  example: {
    description: string;
  };
};

function ExampleOffcanvas({ closeOffcanvas, payload }: OffcanvasProps<OffcanvasPayloads['example']>) {
  return (
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
}

function ExampleOffcanvasUsage() {
  const { openOffcanvas } = useDOffcanvasContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Offcanvas"
      onClick={() => openOffcanvas('example', { description: 'from offcanvas payload' })}
    />
  );
}

export function ExampleOffcanvasRoot() {
  return (
    <DOffcanvasContextProvider<OffcanvasPayloads>
      portalName="examplePortal"
      availableOffcanvas={{
        example: ExampleOffcanvas,
      }}
    >
      <ExampleOffcanvasUsage />
    </DOffcanvasContextProvider>
  );
}
