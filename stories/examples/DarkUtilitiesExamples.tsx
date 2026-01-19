import DBox from '../../src/components/DBox';
import DCard from '../../src/components/DCard';

export function ExampleDarkBackgrounds() {
  return (
    <div className="dark d-flex flex-wrap gap-3">
      <DCard className="p-3 border dark:bg-secondary-100" style={{ width: 320 }}>
        <DCard.Header>
          <h5 className="card-title mb-0">dark:bg-secondary-100</h5>
        </DCard.Header>
        <DCard.Body>
          <p className="mb-0">Applies soft secondary background when dark mode is active.</p>
        </DCard.Body>
      </DCard>
      <DBox className="p-3 rounded border dark:bg-primary-100" style={{ width: 220 }}>
        <strong>dark:bg-primary-100</strong>
        <p className="mb-0 mt-2 text-body-secondary">Primary tint in dark mode</p>
      </DBox>
    </div>
  );
}

export function ExampleDarkTextColors() {
  return (
    <div className="dark d-flex flex-column gap-2">
      <p className="text-body dark:text-primary">
        Primary text in dark mode
      </p>
      <p className="text-body dark:text-success">
        Success text in dark mode
      </p>
      <p className="text-body dark:text-danger">
        Danger text in dark mode
      </p>
    </div>
  );
}

export function ExampleDarkBordersAndShadow() {
  return (
    <div className="dark d-flex flex-wrap gap-3">
      <div className="p-3 rounded border border-2 border-secondary dark:border-primary" style={{ width: 220 }}>
        <strong>dark:border-primary</strong>
        <p className="mb-0 mt-2 text-body-secondary">Border changes when dark</p>
      </div>
      <DBox className="p-4 rounded border shadow-none dark:shadow" style={{ width: 220 }}>
        <strong>dark:shadow</strong>
        <p className="mb-0 mt-2 text-body-secondary">Shadow only in dark mode</p>
      </DBox>
    </div>
  );
}
