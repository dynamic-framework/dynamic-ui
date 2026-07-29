import DButton from '../../DButton';
import DIcon from '../../DIcon';

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
    <div className="d-empty-state">
      <DIcon
        icon={icon}
        size="3rem"
        className="d-empty-state-icon"
      />
      <p className="d-empty-state-message">{message ?? 'No data available.'}</p>
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
