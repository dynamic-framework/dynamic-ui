import DBox from '../../src/components/DBox';
import DCard from '../../src/components/DCard';

export function ExampleDarkBackgrounds() {
  return (
    <div className="df-flex df-flex-wrap df-gap-3" data-df-theme="dark">
      <DCard className="df-p-3 df-border-1 df-dark:bg-secondary-subtle" style={{ width: 320 }}>
        <DCard.Header>
          <h5 className="df-fs-heading-5 df-fw-semibold df-mb-0">dark:bg-secondary-100</h5>
        </DCard.Header>
        <DCard.Body>
          <p className="df-mb-0">Applies soft secondary background when dark mode is active.</p>
        </DCard.Body>
      </DCard>
      <DBox className="df-p-3 df-rounded-control df-border-1 df-dark:bg-primary-subtle" style={{ width: 220 }}>
        <strong>dark:bg-primary-100</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Primary tint in dark mode</p>
      </DBox>
    </div>
  );
}

export function ExampleDarkTextColors() {
  return (
    <div className="df-flex df-flex-col df-gap-2" data-df-theme="dark">
      <p className="df-text-default df-dark:text-primary">
        Primary text in dark mode
      </p>
      <p className="df-text-default df-dark:text-success">
        Success text in dark mode
      </p>
      <p className="df-text-default df-dark:text-danger">
        Danger text in dark mode
      </p>
    </div>
  );
}

export function ExampleDarkBordersAndShadow() {
  return (
    <div className="df-flex df-flex-wrap df-gap-3" data-df-theme="dark">
      <div className="df-p-3 df-rounded-control df-border-1 df-border-2 df-border-secondary df-dark:border-primary" style={{ width: 220 }}>
        <strong>dark:border-primary</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Border changes when dark</p>
      </div>
      <DBox className="df-p-4 df-rounded-control df-border-1 df-shadow-none df-dark:shadow-md" style={{ width: 220 }}>
        <strong>dark:shadow</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Shadow only in dark mode</p>
      </DBox>
    </div>
  );
}

// Automatic dark mode via prefers-color-scheme (no .dark ancestor)
export function ExampleDarkAutoBackgrounds() {
  return (
    <div className="df-flex df-flex-wrap df-gap-3">
      <DCard className="df-p-3 df-border-1 df-dark:bg-secondary-subtle" style={{ width: 320 }}>
        <DCard.Header>
          <h5 className="df-fs-heading-5 df-fw-semibold df-mb-0">dark:bg-secondary-100 (auto)</h5>
        </DCard.Header>
        <DCard.Body>
          <p className="df-mb-0">Applies in browsers with dark mode enabled (no .dark class).</p>
        </DCard.Body>
      </DCard>
      <DBox className="df-p-3 df-rounded-control df-border-1 df-dark:bg-primary-subtle" style={{ width: 220 }}>
        <strong>dark:bg-primary-100 (auto)</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Primary tint in system dark mode</p>
      </DBox>
    </div>
  );
}
