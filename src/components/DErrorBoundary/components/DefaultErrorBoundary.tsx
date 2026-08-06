import { FallbackProps } from 'react-error-boundary';
import DAlert from '../../DAlert';
import DButton from '../../DButton';

type Props = {
  resetErrorBoundary: FallbackProps['resetErrorBoundary']
};

export default function DefaultErrorBoundary({ resetErrorBoundary }: Props) {
  return (
    <DAlert
      color="danger"
      showClose={false}
    >
      <div className="d-error-boundary-content">
        <span>An unexpected error occurred.</span>
        <DButton
          color="secondary"
          variant="outline"
          size="sm"
          onClick={resetErrorBoundary}
        >
          Retry
        </DButton>
      </div>
    </DAlert>
  );
}
