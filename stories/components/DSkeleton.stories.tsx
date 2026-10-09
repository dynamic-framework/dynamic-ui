import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { PREFIX_BS } from '../../src/components/config';
import DSkeleton from '../../src/components/DSkeleton/DSkeleton';
import { DDataStateWrapper } from '../../src/components';
import { THEMES } from '../config/constants';

const meta = {
  title: 'Design System/Components/Skeleton',
  component: DSkeleton,
  subcomponents: {
    'DSkeleton.Text': DSkeleton.Text,
    'DSkeleton.Block': DSkeleton.Block,
    'DSkeleton.Circle': DSkeleton.Circle,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Loading skeleton built on top of Bootstrap's \`placeholder\` utilities. It keeps the layout of the
content while data loads and handles the loading semantics for you.

+ [Bootstrap Placeholders](https://getbootstrap.com/docs/5.3/components/placeholders/)

## Anatomy

| Component          | Renders                                                     |
|--------------------|-------------------------------------------------------------|
| \`DSkeleton\`        | Container: animation, color, gap and accessibility          |
| \`DSkeleton.Text\`   | N lines of text, with per-line widths                       |
| \`DSkeleton.Block\`  | A rectangle (image, button, input, table cell...)           |
| \`DSkeleton.Circle\` | A circle (avatar, icon)                                     |

The primitives are also exported as \`DSkeletonText\`, \`DSkeletonBlock\` and \`DSkeletonCircle\`.

## Iterating

\`items\` repeats the children, so a list does not need a loop in your code:

\`\`\`tsx
const TransactionSkeleton = () => (
  <DSkeleton direction="horizontal" gap={16} className="align-items-center">
    <DSkeleton.Circle size={40} />
    <DSkeleton.Text lines={2} size="sm" widths={['70%', '40%']} className="flex-grow-1" />
    <DSkeleton.Block width={64} height={16} />
  </DSkeleton>
);

<DSkeleton items={4} ariaLabel="Loading transactions">
  <TransactionSkeleton />
</DSkeleton>
\`\`\`

The item is any node: shapes, your own component, or a function receiving the index
(\`{(index) => ...}\`) when each item has to be different. Your item component can be built with
\`DSkeleton\` itself: nested skeletons only lay out their shapes, the outermost one owns the live
region and the label.

Each repetition is wrapped in a \`.d-skeleton-slot\`, so \`gap\` applies between items **and**
between the shapes of each item, which stack. For an item laid out on a row, nest a
\`DSkeleton direction="horizontal"\` as the item. Without \`items\` and without a function child,
children render as-is and no wrapper is added.

## Accessibility

\`DSkeleton\` renders a \`role="status"\` region with \`aria-busy="true"\` and \`aria-live="polite"\`.
Screen readers announce only \`ariaLabel\`; every shape is \`aria-hidden\`. Animations are disabled
under \`prefers-reduced-motion: reduce\`.

## CSS Variables

| Variable                                  | Class        | Type             | Description                         |
|-------------------------------------------|--------------|------------------|-------------------------------------|
| --${PREFIX_BS}skeleton-bg                 | .d-skeleton  | css color unit   | Background of every skeleton item   |
| --${PREFIX_BS}skeleton-gap                | .d-skeleton  | css length unit  | Space between direct children       |
| --${PREFIX_BS}skeleton-line-gap           | .d-skeleton  | css length unit  | Space between lines of \`Text\`       |
| --${PREFIX_BS}skeleton-border-radius      | .d-skeleton  | css length unit  | Default radius of every item        |
| --${PREFIX_BS}skeleton-animation          | .d-skeleton-animation-* | css animation | Animation of every item, set by \`animation\` |
| --${PREFIX_BS}skeleton-mask-image         | .d-skeleton-animation-* | css image     | Mask used by the \`wave\` animation   |
        `,
      },
    },
  },
  decorators: [
    (Story, { parameters }) => (
      <div style={{ maxWidth: (parameters.maxWidth as string | undefined) ?? '28rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    animation: {
      control: 'radio',
      options: ['glow', 'wave', 'none'],
      description: 'Animation applied to every skeleton item. A nested skeleton inherits the closest one and can replace it or turn it off with `none`',
      table: { category: 'Appearance', defaultValue: { summary: 'glow (inherited when nested)' } },
    },
    color: {
      control: 'select',
      options: [undefined, ...THEMES],
      description: 'Theme color for the skeleton items',
      table: { category: 'Appearance' },
    },
    gap: {
      control: 'text',
      description: 'Space between items. Numbers are pixels',
      table: { category: 'Appearance' },
    },
    direction: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Axis the items are laid out on',
      table: { category: 'Appearance', defaultValue: { summary: 'vertical' } },
    },
    itemClassName: {
      control: 'text',
      description: 'Class applied to the wrapper of every item',
      table: { category: 'Appearance' },
    },
    items: {
      control: { type: 'number', min: 0 },
      description: 'Number of times the item is repeated. When omitted, children render as-is, without `.d-skeleton-slot` wrappers (a function child renders once)',
      table: { category: 'Content', defaultValue: { summary: 'undefined' } },
    },
    ariaLabel: {
      control: 'text',
      description: 'Text announced by screen readers while loading',
      table: { category: 'Behavior', defaultValue: { summary: 'Loading...' } },
    },
    className: {
      control: 'text',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    dataAttributes: {
      control: 'object',
      table: { category: 'HTML Attributes' },
    },
    children: {
      control: false,
      table: { category: 'Content' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    animation: 'glow',
    ariaLabel: 'Loading...',
  },
  render: (args) => (
    <DSkeleton {...args}>
      <DSkeleton.Block height={24} width="50%" />
      <DSkeleton.Text lines={3} />
    </DSkeleton>
  ),
};

export const Animations: Story = {
  parameters: {
    docs: {
      description: {
        story: '`glow` pulses the opacity of each item, `wave` sweeps a highlight across the whole skeleton and `none` renders it static.',
      },
    },
  },
  render: () => (
    <div className="d-flex flex-column gap-4">
      {(['glow', 'wave', 'none'] as const).map((animation) => (
        <div key={animation}>
          <p className="small fw-bold mb-2">{animation}</p>
          <DSkeleton animation={animation} ariaLabel={`Loading (${animation})`}>
            <DSkeleton.Text lines={2} />
          </DSkeleton>
        </div>
      ))}
    </div>
  ),
};

export const NestedAnimation: Story = {
  name: 'Nested Animation',
  parameters: {
    docs: {
      description: {
        story: 'A nested skeleton inherits the animation of the closest skeleton that sets one. Setting `animation` on it replaces the inherited one, including `none` to keep a region static.',
      },
    },
  },
  render: () => (
    <DSkeleton animation="wave" ariaLabel="Loading profile">
      <DSkeleton direction="horizontal" gap={16} className="align-items-center">
        <DSkeleton.Circle size={48} />
        <DSkeleton.Text lines={2} widths={['60%', '35%']} />
      </DSkeleton>
      <DSkeleton animation="none">
        <DSkeleton.Block height={96} />
      </DSkeleton>
      <DSkeleton animation="glow">
        <DSkeleton.Text lines={2} size="sm" />
      </DSkeleton>
    </DSkeleton>
  ),
};

export const TextLines: Story = {
  parameters: {
    docs: {
      description: {
        story: '`DSkeleton.Text` controls the number of lines, their height (`size`), the width of the last line (`lastLineWidth`) or every line (`widths`, which repeats when shorter than `lines`).',
      },
    },
  },
  render: () => (
    <DSkeleton gap={32}>
      <DSkeleton.Text lines={1} size="lg" />
      <DSkeleton.Text lines={4} lastLineWidth="35%" />
      <DSkeleton.Text lines={3} size="sm" widths={['90%', '75%', '40%']} />
      <DSkeleton.Text lines={6} size="xs" widths={['100%', 220]} />
    </DSkeleton>
  ),
};

export const Shapes: Story = {
  parameters: {
    docs: {
      description: {
        story: '`DSkeleton.Block` accepts `width`, `height` and `rounded` (`true`, `false`, `0`–`5`, `circle`, `pill`), mapped to Bootstrap `rounded-*` utilities. `DSkeleton.Circle` takes a single `size`. Numbers are pixels.',
      },
    },
  },
  render: () => (
    <DSkeleton gap={24}>
      <div className="d-flex gap-3 align-items-end">
        <DSkeleton.Circle size={24} />
        <DSkeleton.Circle size={40} />
        <DSkeleton.Circle size={56} />
        <DSkeleton.Circle size="5rem" />
      </div>
      <div className="d-flex gap-3">
        {([false, 1, 3, 5, 'pill'] as const).map((rounded) => (
          <DSkeleton.Block key={String(rounded)} width={64} height={40} rounded={rounded} />
        ))}
      </div>
      <DSkeleton.Block height={120} />
    </DSkeleton>
  ),
};

export const Colors: Story = {
  parameters: {
    docs: {
      description: {
        story: '`color` accepts any theme color and sets `--bs-skeleton-bg` to `var(--bs-{color})`.',
      },
    },
  },
  render: () => (
    <div className="d-flex flex-column gap-3">
      {THEMES.map((color) => (
        <DSkeleton key={color} color={color} ariaLabel={`Loading (${color})`}>
          <div className="d-flex gap-3 align-items-center">
            <DSkeleton.Circle size={32} />
            <DSkeleton.Text lines={1} />
          </div>
        </DSkeleton>
      ))}
    </div>
  ),
};

export const CardSkeleton: Story = {
  name: 'Card Skeleton',
  parameters: {
    docs: {
      description: {
        story: 'Composition that mirrors a `DCard` with image, title, description and action.',
      },
    },
  },
  render: () => (
    <div className="card">
      <DSkeleton ariaLabel="Loading product">
        <DSkeleton.Block height={160} rounded={false} />
        <div className="card-body d-flex flex-column gap-3 pt-0">
          <DSkeleton.Block height={24} width="70%" />
          <DSkeleton.Text lines={3} size="sm" />
          <DSkeleton.Block height={40} width={120} />
        </div>
      </DSkeleton>
    </div>
  ),
};

function TransactionSkeleton() {
  return (
    <DSkeleton direction="horizontal" gap={16} className="align-items-center">
      <DSkeleton.Circle size={40} />
      <DSkeleton.Text lines={2} size="sm" widths={['70%', '40%']} className="flex-grow-1" />
      <DSkeleton.Block width={64} height={16} />
    </DSkeleton>
  );
}

export const ListSkeleton: Story = {
  name: 'List Skeleton',
  parameters: {
    docs: {
      description: {
        story: 'List of transactions. The row is a component of your own, repeated by `items`.',
      },
    },
  },
  render: () => (
    <DSkeleton items={4} ariaLabel="Loading transactions" animation="wave">
      <TransactionSkeleton />
    </DSkeleton>
  ),
};

export const IteratingChildren: Story = {
  name: 'Iterating Children',
  parameters: {
    docs: {
      description: {
        story: 'Without a component of your own, `items` repeats the children. A function child receives the `index` of each item.',
      },
    },
  },
  render: () => (
    <div className="d-flex flex-column gap-4">
      <DSkeleton items={3} ariaLabel="Loading paragraphs">
        <DSkeleton.Text lines={2} size="sm" />
      </DSkeleton>
      <DSkeleton items={4} gap={8} ariaLabel="Loading menu">
        {(index) => <DSkeleton.Block height={14} width={`${100 - (index * 15)}%`} />}
      </DSkeleton>
    </div>
  ),
};

export const Direction: Story = {
  parameters: {
    maxWidth: '40rem',
    docs: {
      description: {
        story: '`direction` lays the items out on a column (default) or a row. On a row the items share the width; `itemClassName="flex-grow-0"` makes them size to their content instead.',
      },
    },
  },
  render: () => (
    <DSkeleton direction="horizontal" items={3} gap={16} ariaLabel="Loading cards">
      <DSkeleton.Block height={96} rounded={3} />
      <DSkeleton.Text lines={2} size="sm" />
    </DSkeleton>
  ),
};

export const TableSkeleton: Story = {
  name: 'Table Skeleton',
  parameters: {
    maxWidth: '40rem',
    docs: {
      description: {
        story: 'Keeps the real table header visible and replaces only the body cells.',
      },
    },
  },
  render: () => (
    <DSkeleton ariaLabel="Loading accounts">
      <table className="table mb-0">
        <thead>
          <tr>
            <th scope="col">Account</th>
            <th scope="col">Type</th>
            <th scope="col" className="text-end">Balance</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }, (_, row) => (
            <tr key={row}>
              <td aria-hidden="true"><DSkeleton.Block width="80%" /></td>
              <td aria-hidden="true"><DSkeleton.Block width="50%" /></td>
              <td aria-hidden="true"><DSkeleton.Block width="60%" className="ms-auto" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </DSkeleton>
  ),
};

export const FormSkeleton: Story = {
  name: 'Form Skeleton',
  parameters: {
    docs: {
      description: {
        story: 'Labels, inputs and a submit button while the form configuration loads.',
      },
    },
  },
  render: () => (
    <DSkeleton ariaLabel="Loading form" gap={20}>
      <DSkeleton items={3} gap={20}>
        <DSkeleton.Block width="30%" height={14} />
        <DSkeleton.Block height={44} />
      </DSkeleton>
      <DSkeleton.Block width="100%" height={44} rounded="pill" />
    </DSkeleton>
  ),
};

type Account = { alias: string; number: string; balance: string };

const accountsSkeleton = (
  <DSkeleton items={3} ariaLabel="Loading accounts">
    <DSkeleton direction="horizontal" gap={16} className="justify-content-between align-items-center">
      <DSkeleton.Text lines={2} size="sm" widths={['60%', '30%']} />
      <DSkeleton.Block width={96} height={16} />
    </DSkeleton>
  </DSkeleton>
);

export const WithDataStateWrapper: Story = {
  name: 'With DDataStateWrapper',
  parameters: {
    docs: {
      description: {
        story: 'Pass a `DSkeleton` to `renderLoading` to keep the layout instead of the default spinner.',
      },
    },
  },
  render: function Render() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<Account[]>();

    useEffect(() => {
      if (!isLoading) return undefined;
      const timeout = setTimeout(() => {
        setData([
          { alias: 'Cuenta corriente', number: '•••• 1290', balance: '$ 1.250.000' },
          { alias: 'Cuenta de ahorros', number: '•••• 4821', balance: '$ 12.450.000' },
          { alias: 'Tarjeta de crédito', number: '•••• 7733', balance: '$ 320.500' },
        ]);
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }, [isLoading]);

    return (
      <div className="d-flex flex-column gap-3">
        <button
          type="button"
          className="btn btn-sm btn-outline-primary align-self-start"
          onClick={() => setIsLoading(true)}
          disabled={isLoading}
        >
          Reload
        </button>
        <DDataStateWrapper
          isLoading={isLoading}
          isError={false}
          data={data}
          renderLoading={accountsSkeleton}
        >
          {(accounts) => (
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              {accounts.map((account) => (
                <li key={account.number} className="d-flex justify-content-between align-items-center gap-3">
                  <div>
                    <p className="mb-0">{account.alias}</p>
                    <p className="mb-0 small text-secondary">{account.number}</p>
                  </div>
                  <span className="fw-bold">{account.balance}</span>
                </li>
              ))}
            </ul>
          )}
        </DDataStateWrapper>
      </div>
    );
  },
};

export const CustomizationWithCSSVariables: Story = {
  name: 'Customization with CSS Variables',
  parameters: {
    docs: {
      description: {
        story: 'Override the `--bs-skeleton-*` variables through `style` or a CSS class to adapt the skeleton to any brand without new props.',
      },
    },
  },
  render: () => (
    <DSkeleton
      ariaLabel="Loading profile"
      style={{
        [`--${PREFIX_BS}skeleton-bg`]: `var(--${PREFIX_BS}info)`,
        [`--${PREFIX_BS}skeleton-border-radius`]: '1rem',
        [`--${PREFIX_BS}skeleton-gap`]: '1.5rem',
        [`--${PREFIX_BS}skeleton-line-gap`]: '0.75rem',
      } as CSSProperties}
    >
      <div className="d-flex gap-3 align-items-center">
        <DSkeleton.Circle size={64} />
        <DSkeleton.Text lines={2} widths={['60%', '40%']} />
      </div>
      <DSkeleton.Block height={96} />
    </DSkeleton>
  ),
};
