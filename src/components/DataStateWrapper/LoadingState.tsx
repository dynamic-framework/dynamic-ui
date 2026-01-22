type LoadingStateProps = {
  ariaLabel?: string;
  className?: string;
};

export function LoadingState({ ariaLabel = 'Loading...', className }: LoadingStateProps) {
  return (
    <div className={`d-flex align-items-center justify-content-center p-4 ${className || ''}`.trim()} aria-busy="true" aria-live="polite">
      <span className="spinner-border" role="status" aria-label={ariaLabel} />
    </div>
  );
}
