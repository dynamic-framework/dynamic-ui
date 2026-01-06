import DBox from '../../src/components/DBox';
import DCard from '../../src/components/DCard';

export function ExampleHoverShadowBoxes() {
  return (
    <div className="d-flex flex-wrap gap-3">
      <DBox className="p-4 rounded border shadow-none hover:shadow-sm" style={{ width: 220 }}>
        <strong>hover:shadow-sm</strong>
        <p className="mb-0 mt-2 text-body-secondary">Subtle shadow on hover</p>
      </DBox>
      <DBox className="p-4 rounded border shadow-none hover:shadow" style={{ width: 220 }}>
        <strong>hover:shadow</strong>
        <p className="mb-0 mt-2 text-body-secondary">Default shadow on hover</p>
      </DBox>
      <DBox className="p-4 rounded border shadow-none hover:shadow-lg" style={{ width: 220 }}>
        <strong>hover:shadow-lg</strong>
        <p className="mb-0 mt-2 text-body-secondary">Large shadow on hover</p>
      </DBox>
      <DBox className="p-4 rounded border shadow-sm hover:shadow-none" style={{ width: 220 }}>
        <strong>hover:shadow-none</strong>
        <p className="mb-0 mt-2 text-body-secondary">Remove shadow on hover</p>
      </DBox>
    </div>
  );
}

export function ExampleHoverBackgroundCard() {
  return (
    <DCard className="hover:bg-secondary-100 border" style={{ width: 360 }}>
      <DCard.Header>
        <h5 className="card-title mb-0">Background on hover</h5>
      </DCard.Header>
      <DCard.Body>
        <p className="mb-0">Hover to apply a soft secondary background.</p>
      </DCard.Body>
    </DCard>
  );
}

export function ExampleHoverTextLinks() {
  return (
    <div className="d-flex flex-column gap-2">
      <a
        href="#"
        role="button"
        onClick={(e) => e.preventDefault()}
        className="text-body hover:text-primary"
      >
        Primary on hover
      </a>
      <a
        href="#"
        role="button"
        onClick={(e) => e.preventDefault()}
        className="text-body hover:text-danger"
      >
        Danger on hover
      </a>
      <a
        href="#"
        role="button"
        onClick={(e) => e.preventDefault()}
        className="text-body hover:text-success"
      >
        Success on hover
      </a>
    </div>
  );
}

export function ExampleHoverOverflow() {
  return (
    <div className="border rounded p-2 overflow-hidden hover:overflow-auto" style={{ width: 280, height: 120 }}>
      <div className="d-flex flex-column gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          /* eslint-disable-next-line react/no-array-index-key -- safe here because this is a static, non-reorderable list */
          <div key={i} className="bg-light rounded px-2 py-1">
            Item #
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExampleHoverBorderColors() {
  return (
    <div className="d-flex flex-wrap gap-3">
      <div className="p-3 rounded border border-2 border-secondary hover:border-primary" style={{ width: 220 }}>
        <strong>hover:border-primary</strong>
        <p className="mb-0 mt-2 text-body-secondary">Border changes to primary</p>
      </div>
      <div className="p-3 rounded border border-2 border-dark hover:border-success" style={{ width: 220 }}>
        <strong>hover:border-success</strong>
        <p className="mb-0 mt-2 text-body-secondary">Border changes to success</p>
      </div>
    </div>
  );
}

export function ExampleHoverOpacity() {
  return (
    <div className="d-flex flex-wrap gap-3">
      <div className="p-3 rounded border opacity-100 hover:opacity-40" style={{ width: 220 }}>
        <strong>hover:opacity-40</strong>
        <p className="mb-0 mt-2 text-body-secondary">Reduce opacity on hover</p>
      </div>
    </div>
  );
}
