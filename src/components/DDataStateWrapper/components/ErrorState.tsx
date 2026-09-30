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
    <DAlert color={color}>
      <div className="df-alert-content">
        <p className="df-state-message">{message ?? 'An unexpected error occurred.'}</p>
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
