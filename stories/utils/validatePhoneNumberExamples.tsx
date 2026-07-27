import { useState } from 'react';
import {
  DInput,
  DCard,
  validatePhoneNumber,
} from '../../src';

function ExampleOfUse() {
  const [phone, setPhone] = useState('+1 650-253-0000');

  const isValid = validatePhoneNumber(phone);

  return (
    <DCard>
      <DCard.Header>
        validatePhoneNumber
      </DCard.Header>
      <DCard.Body>
        <DInput
          label="Phone number"
          value={phone}
          onChange={setPhone}
          invalid={!isValid}
        />
        <p className={`mt-3 mb-0 ${isValid ? 'text-success' : 'text-danger'}`}>
          {isValid ? 'Valid phone number' : 'Invalid phone number'}
        </p>
      </DCard.Body>
    </DCard>
  );
}

export function ExampleRoot() {
  return <ExampleOfUse />;
}
