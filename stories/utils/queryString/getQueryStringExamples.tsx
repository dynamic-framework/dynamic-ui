import { useState } from 'react';
import {
  DButton,
  DCard,
  changeQueryString,
  getQueryString,
} from '../../../src';

const readDemoValue = () => getQueryString('demo', { default: 'no value yet', useSearch: true });

function ExampleOfUse() {
  const [value, setValue] = useState(readDemoValue);

  const handleSet = () => {
    changeQueryString({ demo: 'hello-world' }, { pushState: true });
    setValue(readDemoValue());
  };

  const handleClear = () => {
    changeQueryString({ demo: null }, { pushState: true });
    setValue(readDemoValue());
  };

  return (
    <DCard>
      <DCard.Header>
        getQueryString(&apos;demo&apos;)
      </DCard.Header>
      <DCard.Body>
        <pre>{value}</pre>
      </DCard.Body>
      <DCard.Footer className="d-flex justify-content-end gap-3">
        <DButton size="sm" onClick={handleSet} text="Set ?demo=hello-world" />
        <DButton size="sm" onClick={handleClear} text="Clear" />
      </DCard.Footer>
    </DCard>
  );
}

export function ExampleRoot() {
  return <ExampleOfUse />;
}
