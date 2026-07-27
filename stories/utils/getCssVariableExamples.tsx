import { useState } from 'react';
import {
  DButton,
  DCard,
  getCssVariable,
} from '../../src';

function ExampleOfUse() {
  const [value, setValue] = useState('');

  const handleRead = () => {
    setValue(getCssVariable('--bs-primary'));
  };

  return (
    <DCard>
      <DCard.Header>
        getCssVariable(&apos;--bs-primary&apos;)
      </DCard.Header>
      <DCard.Body className="d-flex align-items-center gap-3">
        <div
          style={{
            width: '2rem',
            height: '2rem',
            backgroundColor: value || 'transparent',
            border: '1px solid var(--bs-border-color)',
          }}
        />
        <pre className="mb-0">{value || '(not read yet)'}</pre>
      </DCard.Body>
      <DCard.Footer className="d-flex justify-content-end">
        <DButton size="sm" onClick={handleRead} text="Read --bs-primary" />
      </DCard.Footer>
    </DCard>
  );
}

export function ExampleRoot() {
  return <ExampleOfUse />;
}
