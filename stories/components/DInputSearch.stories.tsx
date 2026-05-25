import {
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  DDataStateWrapper,
  DInputSearch,
} from '../../src/components';

const mockRecords = [
  'Poliza de vida #1021',
  'Poliza de auto #8842',
  'Cuenta corriente #110-22',
  'Cuenta de ahorro #220-91',
  'Transaccion SPEI #88A1',
  'Transaccion internacional #IP-204',
  'Reembolso siniestro #R-778',
  'Pago de prima #P-0912',
  'Estado de cuenta abril',
  'Estado de cuenta mayo',
];

const meta: Meta<typeof DInputSearch> = {
  title: 'Design System/Components/Input Search',
  component: DInputSearch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Search input built on top of DInput with built-in debounce. Ideal for list filtering and remote queries.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label.',
      table: { category: 'Content' },
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder.',
      table: { category: 'Content' },
    },
    debounceMs: {
      control: 'number',
      description: 'Debounce delay in milliseconds for onChange.',
      table: { category: 'Behavior' },
    },
    value: {
      control: false,
      table: { category: 'Controlled' },
    },
    defaultValue: {
      control: 'text',
      table: { category: 'Controlled' },
    },
    onChange: {
      action: 'onChange (debounced)',
      description: 'Emits debounced search value.',
      table: { category: 'Events' },
    },
    onImmediateChange: {
      action: 'onImmediateChange',
      description: 'Emits each keystroke immediately.',
      table: { category: 'Events' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DInputSearch>;

export const Playground: Story = {
  args: {
    label: 'Buscar',
    placeholder: 'Buscar poliza, cuenta o transaccion',
    debounceMs: 300,
  },
};

export const DummyApiSearch: Story = {
  args: {
    label: 'Buscar movimientos',
    placeholder: 'Ej: poliza, cuenta, transaccion',
    debounceMs: 400,
  },
  render: function Render(args) {
    const [rawQuery, setRawQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<string[]>(mockRecords);

    useEffect(() => {
      let active = true;
      setIsLoading(true);

      const timeoutId = window.setTimeout(() => {
        if (!active) return;

        const normalized = debouncedQuery.trim().toLowerCase();
        const nextResults = normalized
          ? mockRecords.filter((item) => item.toLowerCase().includes(normalized))
          : mockRecords;

        setResults(nextResults);
        setIsLoading(false);
      }, 700);

      return () => {
        active = false;
        window.clearTimeout(timeoutId);
      };
    }, [debouncedQuery]);

    const totalText = useMemo(() => `${results.length} resultado(s)`, [results.length]);

    return (
      <div className="d-flex flex-column gap-3" style={{ maxWidth: '640px' }}>
        <DInputSearch
          {...args}
          value={rawQuery}
          onImmediateChange={setRawQuery}
          onChange={setDebouncedQuery}
        />

        <div className="small text-secondary">
          <strong>Query inmediato:</strong>
          {' '}
          {rawQuery || '(vacio)'}
          {' | '}
          <strong>Query debounced:</strong>
          {' '}
          {debouncedQuery || '(vacio)'}
        </div>

        <DDataStateWrapper
          isLoading={isLoading}
          isError={false}
          data={results}
        >
          {(items) => (
            <div>
              <div className="small text-secondary mb-2">{totalText}</div>
              <ul className="list-group">
                {items.map((item) => (
                  <li key={item} className="list-group-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </DDataStateWrapper>
      </div>
    );
  },
};
