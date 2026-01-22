import DAlert from '../DAlert';
import DButton from '../DButton';

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
    <DAlert color={color} className="d-flex align-items-center gap-3">
      <div className="flex-grow-1">
        <p className="mb-0">{message ?? 'An unexpected error occurred.'}</p>
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
