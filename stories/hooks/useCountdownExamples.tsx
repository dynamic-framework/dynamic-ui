import {
  useCountdown,
  DButton,
  DCard,
} from '../../src';

export function ExampleOfUse() {
  const { secondsLeft, restartCountdown } = useCountdown(10);

  return (
    <DCard>
      <DCard.Body className="d-flex align-items-center gap-3">
        <p className="mb-0">
          {secondsLeft > 0 ? `Resend available in ${secondsLeft}s` : 'You can resend now'}
        </p>
        <DButton
          size="sm"
          variant="link"
          text="Resend"
          disabled={secondsLeft > 0}
          onClick={restartCountdown}
        />
      </DCard.Body>
    </DCard>
  );
}

export function ExampleRoot() {
  return <ExampleOfUse />;
}
