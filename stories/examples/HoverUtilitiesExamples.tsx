/* eslint-disable jsx-a11y/anchor-is-valid */
import DBox from '../../src/components/DBox';
import DCard from '../../src/components/DCard';

export function ExampleHoverShadowBoxes() {
  return (
    <div className="df-flex df-flex-wrap df-gap-3">
      <DBox className="df-p-4 df-rounded-control df-border-1 df-shadow-none df-hover:shadow-sm" style={{ width: 220 }}>
        <strong>hover:shadow-sm</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Subtle shadow on hover</p>
      </DBox>
      <DBox className="df-p-4 df-rounded-control df-border-1 df-shadow-none df-hover:shadow-md" style={{ width: 220 }}>
        <strong>hover:shadow</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Default shadow on hover</p>
      </DBox>
      <DBox className="df-p-4 df-rounded-control df-border-1 df-shadow-none df-hover:shadow-lg" style={{ width: 220 }}>
        <strong>hover:shadow-lg</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Large shadow on hover</p>
      </DBox>
      <DBox className="df-p-4 df-rounded-control df-border-1 df-shadow-sm df-hover:shadow-none" style={{ width: 220 }}>
        <strong>hover:shadow-none</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Remove shadow on hover</p>
      </DBox>
    </div>
  );
}

export function ExampleHoverBackgroundCard() {
  return (
    <DCard className="df-hover:bg-secondary-subtle df-border-1" style={{ width: 360 }}>
      <DCard.Header>
        <h5 className="df-fs-heading-5 df-fw-semibold df-mb-0">Background on hover</h5>
      </DCard.Header>
      <DCard.Body>
        <p className="df-mb-0">Hover to apply a soft secondary background.</p>
      </DCard.Body>
    </DCard>
  );
}

export function ExampleHoverTextLinks() {
  return (
    <div className="df-flex df-flex-col df-gap-2">
      <a
        href="#"
        role="button"
        onClick={(e) => e.preventDefault()}
        className="df-text-default df-hover:text-primary"
      >
        Primary on hover
      </a>
      <a
        href="#"
        role="button"
        onClick={(e) => e.preventDefault()}
        className="df-text-default df-hover:text-danger"
      >
        Danger on hover
      </a>
      <a
        href="#"
        role="button"
        onClick={(e) => e.preventDefault()}
        className="df-text-default df-hover:text-success"
      >
        Success on hover
      </a>
    </div>
  );
}

export function ExampleHoverOverflow() {
  return (
    <div className="df-border-1 df-rounded-control df-p-2 df-overflow-hidden df-hover:overflow-auto" style={{ width: 280, height: 120 }}>
      <div className="df-flex df-flex-col df-gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          /* eslint-disable-next-line react/no-array-index-key */
          <div key={i} className="df-bg-muted df-rounded-control df-px-2 df-py-1">
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
    <div className="df-flex df-flex-wrap df-gap-3">
      <div className="df-p-3 df-rounded-control df-border-1 df-border-2 df-border-secondary df-hover:border-primary" style={{ width: 220 }}>
        <strong>hover:border-primary</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Border changes to primary</p>
      </div>
      <div className="df-p-3 df-rounded-control df-border-1 df-border-2 df-border-strong df-hover:border-success" style={{ width: 220 }}>
        <strong>hover:border-success</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Border changes to success</p>
      </div>
    </div>
  );
}

export function ExampleHoverOpacity() {
  return (
    <div className="df-flex df-flex-wrap df-gap-3">
      <div className="df-p-3 df-rounded-control df-border-1 df-opacity-100 df-hover:opacity-40" style={{ width: 220 }}>
        <strong>hover:opacity-40</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Reduce opacity on hover</p>
      </div>
    </div>
  );
}

export function ExampleHoverTextColorVariants() {
  return (
    <div className="df-flex df-flex-col df-gap-2">
      <span className="df-hover:text-primary">hover:text-primary-100</span>
      <span className="df-hover:text-primary">hover:text-primary-300</span>
      <span className="df-hover:text-primary">hover:text-primary-700</span>
      <span className="df-hover:text-danger">hover:text-danger-200</span>
      <span className="df-hover:text-success">hover:text-success-400</span>
      <span className="df-hover:text-warning">hover:text-warning-500</span>
    </div>
  );
}

export function ExampleHoverBorderColorVariants() {
  return (
    <div className="df-flex df-flex-wrap df-gap-3">
      <div className="df-p-3 df-rounded-control df-border-1 df-border-2 df-border-secondary df-hover:border-primary" style={{ width: 220 }}>
        <strong>hover:border-primary-100</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Border changes to primary-100</p>
      </div>
      <div className="df-p-3 df-rounded-control df-border-1 df-border-2 df-border-secondary df-hover:border-primary" style={{ width: 220 }}>
        <strong>hover:border-primary-300</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Border changes to primary-300</p>
      </div>
      <div className="df-p-3 df-rounded-control df-border-1 df-border-2 df-border-secondary df-hover:border-danger" style={{ width: 220 }}>
        <strong>hover:border-danger-200</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Border changes to danger-200</p>
      </div>
      <div className="df-p-3 df-rounded-control df-border-1 df-border-2 df-border-secondary df-hover:border-success" style={{ width: 220 }}>
        <strong>hover:border-success-400</strong>
        <p className="df-mb-0 df-mt-2 df-text-muted">Border changes to success-400</p>
      </div>
    </div>
  );
}
