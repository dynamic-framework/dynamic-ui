import {
  useOtp,
  DInputPin,
  DButton,
  DAlert,
} from '../../src';

export function ExampleOfUse() {
  const {
    otp,
    setOtp,
    invalid,
    error,
    submit,
    isLoading,
    secondsLeft,
    restartCountdown,
  } = useOtp({
    // Simulates a backend call that rejects any code other than "1234".
    action: () => new Promise((resolve, reject) => {
      setTimeout(() => {
        if (otp === '1234') {
          resolve();
        } else {
          reject(new Error('The code you entered is incorrect.'));
        }
      }, 800);
    }),
    otpSize: 4,
    seconds: 10,
  });

  return (
    <div className="d-flex flex-column gap-3" style={{ maxWidth: 360 }}>
      <h5 className="mb-0">Enter your verification code</h5>
      <p className="small text-muted mb-0">Try &quot;1234&quot; for a successful submit.</p>
      <DInputPin
        characters={4}
        onChange={setOtp}
        invalid={invalid}
        placeholder="•"
      />
      {invalid && (
        <DAlert color="danger">
          {error instanceof Error ? error.message : 'Please enter all 4 digits.'}
        </DAlert>
      )}
      <div className="d-flex justify-content-between align-items-center">
        <DButton
          variant="link"
          size="sm"
          text={secondsLeft > 0 ? `Resend in ${secondsLeft}s` : 'Resend code'}
          disabled={secondsLeft > 0}
          onClick={restartCountdown}
        />
        <DButton
          text="Verify"
          loading={isLoading}
          onClick={() => {
            submit().catch(() => {});
          }}
        />
      </div>
    </div>
  );
}

export function ExampleRoot() {
  return <ExampleOfUse />;
}
