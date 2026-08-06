import { useState } from 'react';
import {
  DButton,
  DCard,
  changeQueryString,
} from '../../../src';

function ExampleOfUse() {
  const [search, setSearch] = useState(() => window.location.search);

  const handleSet = () => {
    const result = changeQueryString(
      { section: 'utils', page: 2 },
      { pushState: true },
    );
    setSearch(`?${result}`);
  };

  const handleClear = () => {
    const result = changeQueryString(
      { section: null, page: null },
      { pushState: true },
    );
    setSearch(result ? `?${result}` : '');
  };

  return (
    <DCard>
      <DCard.Header>
        window.location.search
      </DCard.Header>
      <DCard.Body>
        <pre>{search || '(empty)'}</pre>
      </DCard.Body>
      <DCard.Footer className="d-flex justify-content-end gap-3">
        <DButton size="sm" onClick={handleSet} text="Set section & page" />
        <DButton size="sm" onClick={handleClear} text="Clear" />
      </DCard.Footer>
    </DCard>
  );
}

export function ExampleRoot() {
  return <ExampleOfUse />;
}
