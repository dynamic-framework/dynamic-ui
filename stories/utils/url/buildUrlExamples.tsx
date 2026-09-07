import { useState } from 'react';
import {
  DButton,
  DCard,
  DInput,
  DInputSwitch,
  buildUrl,
} from '../../../src';

const PARAMS = { account_id: '42', tab: 'movimientos' };

const SAMPLES = [
  { label: 'accounts', value: 'accounts' },
  { label: '/accounts', value: '/accounts' },
  { label: '//accounts', value: '//accounts' },
  { label: '/\\evil.com', value: '/\\evil.com' },
  { label: '# (unconfigured liquid var)', value: '#' },
  { label: '#accounts', value: '#accounts' },
  { label: '(empty)', value: '' },
];

function ExampleOfUse() {
  const [path, setPath] = useState('accounts');
  const [withParams, setWithParams] = useState(true);

  const params = withParams ? PARAMS : {};

  return (
    <DCard>
      <DCard.Header>
        buildUrl
      </DCard.Header>
      <DCard.Body>
        <DInput
          label="path"
          value={path}
          onChange={setPath}
        />
        <DInputSwitch
          className="mt-3"
          label={`params: ${JSON.stringify(withParams ? PARAMS : {})}`}
          checked={withParams}
          onChange={setWithParams}
        />
        <pre className="mt-3 mb-0">{buildUrl(path, params)}</pre>
      </DCard.Body>
      <DCard.Footer className="d-flex flex-wrap justify-content-end gap-2">
        {SAMPLES.map(({ label, value }) => (
          <DButton
            key={label}
            size="sm"
            variant="outline"
            text={label}
            onClick={() => setPath(value)}
          />
        ))}
      </DCard.Footer>
    </DCard>
  );
}

export function ExampleRoot() {
  return <ExampleOfUse />;
}
