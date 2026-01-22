import DButton from '../DButton';
import DIcon from '../DIcon';

interface EmptyStateProps {
  message?: string;
  icon?: string;
  actionText?: string;
  onAction?: () => void;
}

export function EmptyState({
  message,
  icon = 'FileText',
  actionText,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-5 text-center">
      <DIcon
        icon={icon}
        size="3rem"
        className="text-secondary mb-3"
      />
      <p className="text-secondary mb-3">{message ?? 'No data available.'}</p>
      {actionText && onAction && (
        <DButton
          onClick={onAction}
          text={actionText}
          variant="outline"
        />
      )}
    </div>
  );
}
