type LoadingStateProps = {
  ariaLabel?: string;
  className?: string;
};

export function LoadingState({ ariaLabel = 'Loading...', className }: LoadingStateProps) {
  return (
    <div
      className={['df-state', className].filter(Boolean).join(' ')}
      data-variant="loading"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="df-spinner" role="status" aria-label={ariaLabel} />
    </div>
  );
}
