import { useState } from 'react';
import {
  DButton,
  DCard,
  DInput,
  sanitizeHref,
} from '../../../src';

const SAMPLES = [
  '/internal/path',
  'https://example.com',
  'mailto:test@example.com',
  'tel:+123456789',
  '//evil.com',
  '/\\evil.com',
  ['javascript', 'alert(1)'].join(':'),
  '#anchor',
];

function ExampleOfUse() {
  const [href, setHref] = useState('https://example.com');

  const safeHref = sanitizeHref(href);

  return (
    <DCard>
      <DCard.Header>
        sanitizeHref
      </DCard.Header>
      <DCard.Body>
        <DInput
          label="href"
          value={href}
          onChange={setHref}
          invalid={!safeHref}
        />
        <p className={`mt-3 mb-0 ${safeHref ? 'text-success' : 'text-danger'}`}>
          {safeHref
            ? `Safe, renders as href="${safeHref}"`
            : 'Rejected (undefined), must not be rendered as a link'}
        </p>
      </DCard.Body>
      <DCard.Footer className="d-flex flex-wrap justify-content-end gap-2">
        {SAMPLES.map((sample) => (
          <DButton
            key={sample}
            size="sm"
            variant="outline"
            text={sample}
            onClick={() => setHref(sample)}
          />
        ))}
      </DCard.Footer>
    </DCard>
  );
}

export function ExampleRoot() {
  return <ExampleOfUse />;
}
