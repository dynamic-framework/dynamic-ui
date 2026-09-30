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
    <div className="df-state" data-variant="empty">
      <DIcon
        icon={icon}
        size="3rem"
        className="df-state-icon"
      />
      <p className="df-state-icon">{message ?? 'No data available.'}</p>
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
