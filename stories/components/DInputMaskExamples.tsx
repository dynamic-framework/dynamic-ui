import { useState } from 'react';
import { DInputMask } from '../../src';

const BASE_MASK = '_ ____ ____';

export function ExampleMask() {
  const [maskValue, setMaskValue] = useState<string>(BASE_MASK);

  return (
    <DInputMask
      mask={BASE_MASK}
      showMask
      value={maskValue}
      onChange={(value) => setMaskValue(value)}
      replacement={{ _: /\d/ }}
    />
  );
}
