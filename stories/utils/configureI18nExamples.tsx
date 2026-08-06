import { useEffect, useState } from 'react';
import type { TFunction } from 'i18next';
import {
  DButton,
  DCard,
  configureI18n,
} from '../../src';

const resources = {
  en: { translation: { hello: 'Hello', greet: 'Hi {name}!' } },
  es: { translation: { hello: 'Hola', greet: '¡Hola {name}!' } },
};

function ExampleOfUse() {
  const [t, setT] = useState<TFunction>();
  const [lng, setLng] = useState<'en' | 'es'>('en');

  useEffect(() => {
    let active = true;
    configureI18n(resources, { lng })
      .then((translate) => {
        if (active) {
          setT(() => translate);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [lng]);

  return (
    <DCard>
      <DCard.Header>
        configureI18n
      </DCard.Header>
      <DCard.Body>
        <pre className="mb-0">
          {t ? `${t('hello')} / ${t('greet', { name: 'John' })}` : 'Loading...'}
        </pre>
      </DCard.Body>
      <DCard.Footer className="d-flex justify-content-end gap-3">
        <DButton size="sm" onClick={() => setLng('en')} text="English" />
        <DButton size="sm" onClick={() => setLng('es')} text="Español" />
      </DCard.Footer>
    </DCard>
  );
}

export function ExampleRoot() {
  return <ExampleOfUse />;
}
