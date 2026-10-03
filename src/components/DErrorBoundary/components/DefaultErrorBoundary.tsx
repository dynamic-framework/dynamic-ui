import { FallbackProps } from 'react-error-boundary';
import DAlert from '../../DAlert';
import DButton from '../../DButton';

type Props = {
  resetErrorBoundary: FallbackProps['resetErrorBoundary'];
  message?: string;
  retryMessage?: string;
};

export default function DefaultErrorBoundary({
  resetErrorBoundary,
  message = 'An unexpected error occurred.',
  retryMessage = 'Retry',
}: Props) {
  return (
    <DAlert
      color="danger"
      showClose={false}
    >
      <div className="d-error-boundary-content">
        <span>{message}</span>
        <DButton
          color="secondary"
          variant="outline"
          size="sm"
          onClick={resetErrorBoundary}
        >
          {retryMessage}
        </DButton>
      </div>
    </DAlert>
  );
}
