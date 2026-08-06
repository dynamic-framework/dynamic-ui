type LoadingStateProps = {
  ariaLabel?: string;
  className?: string;
};

export function LoadingState({ ariaLabel = 'Loading...', className }: LoadingStateProps) {
  return (
    <div className={`d-loading-state ${className || ''}`.trim()} aria-busy="true" aria-live="polite">
      <span className="spinner-border" role="status" aria-label={ariaLabel} />
    </div>
  );
}
