import DAlert from '../../DAlert';
import DButton from '../../DButton';

type ErrorStateProps = {
  message?: string;
  onRetry?: () => void;
  retryMessage?: string;
  color?: 'danger' | 'warning';
};

export function ErrorState({
  message,
  onRetry,
  retryMessage = 'Retry',
  color = 'danger',
}: ErrorStateProps) {
  return (
    <DAlert color={color} className="d-error-state">
      <div className="d-error-state-content">
        <p className="d-error-state-message">{message ?? 'An unexpected error occurred.'}</p>
      </div>
      {onRetry && (
        <DButton
          onClick={onRetry}
          text={retryMessage}
          variant="outline"
          iconStart="RefreshCw"
        />
      )}
    </DAlert>
  );
}
