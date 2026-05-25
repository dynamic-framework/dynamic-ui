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
  'Life policy #1021',
  'Auto policy #8842',
  'Checking account #110-22',
  'Savings account #220-91',
  'Wire transfer #88A1',
  'International transfer #IP-204',
  'Claim reimbursement #R-778',
  'Premium payment #P-0912',
  'April statement',
  'May statement',
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
    label: 'Search',
    placeholder: 'Search policy, account, or transaction',
    debounceMs: 300,
  },
};

export const DummyApiSearch: Story = {
  args: {
    label: 'Search records',
    placeholder: 'e.g. policy, account, transaction',
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

    const totalText = useMemo(() => `${results.length} result(s)`, [results.length]);

    return (
      <div className="d-flex flex-column gap-3" style={{ maxWidth: '640px' }}>
        <DInputSearch
          {...args}
          value={rawQuery}
          onImmediateChange={setRawQuery}
          onChange={setDebouncedQuery}
        />

        <div className="small text-secondary">
          <strong>Immediate query:</strong>
          {' '}
          {rawQuery || '(empty)'}
          {' | '}
          <strong>Debounced query:</strong>
          {' '}
          {debouncedQuery || '(empty)'}
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
