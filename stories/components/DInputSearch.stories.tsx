import {
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  DDataStateWrapper,
  DInputSearch,
} from '../../src';

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

const meta = {
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
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
      table: { category: 'HTML Attributes' },
    },
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
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
      table: { category: 'Content' },
    },
    debounceMs: {
      control: 'number',
      description: 'Debounce delay in milliseconds for onChange.',
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
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
} satisfies Meta<typeof DInputSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search policy, account, or transaction',
    debounceMs: 300,
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId2',
    label: 'Search',
    placeholder: 'Search policy, account, or transaction',
    debounceMs: 300,
    hint: 'Assistive text',
    invalid: true,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId3',
    label: 'Search',
    placeholder: 'Search policy, account, or transaction',
    debounceMs: 300,
    hint: 'Assistive text',
    valid: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId4',
    label: 'Search',
    placeholder: 'Search policy, account, or transaction',
    debounceMs: 300,
    disabled: true,
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
