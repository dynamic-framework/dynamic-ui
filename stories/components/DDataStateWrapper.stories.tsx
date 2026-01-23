import { Meta, StoryObj } from '@storybook/react-vite';
import { DDataStateWrapper } from '../../src/components/DDataStateWrapper/DDataStateWrapper';
import DBox from '../../src/components/DBox';

const meta: Meta<typeof DDataStateWrapper> = {
  title: 'Design System/Components/Data State Wrapper',
  component: DDataStateWrapper,
  parameters: {
    docs: {
      description: {
        component:
          'Utility wrapper to handle loading, error, and empty states. It provides minimal defaults (spinner, basic error and empty views) and allows overriding via renderLoading/renderError/renderEmpty.',
      },
    },
  },
  argTypes: {
    isLoading: { control: 'boolean' },
    isError: { control: 'boolean' },
    data: {
      control: 'select',
      options: ['empty', 'list'],
      mapping: {
        empty: undefined,
        list: ['One', 'Two', 'Three'],
      },
    },
    onRetry: { control: false },
    renderLoading: { control: false },
    renderEmpty: { control: false },
    renderError: { control: false },
    children: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof DDataStateWrapper>;

export const Loading: Story = {
  render: (args) => (
    <div style={{ minHeight: 140 }}>
      <DDataStateWrapper {...args}>
        {(data: unknown[]) => (
          <div>
            Items:
            {data?.length ?? 0}
          </div>
        )}
      </DDataStateWrapper>
    </div>
  ),
  args: { isLoading: true, isError: false, data: undefined },
};

export const Error: Story = {
  render: (args) => (
    <DDataStateWrapper {...args}>
      {(data: unknown[]) => (
        <div>
          Items:
          {data?.length ?? 0}
        </div>
      )}
    </DDataStateWrapper>
  ),
  args: {
    isLoading: false, isError: true, data: undefined, onRetry: () => {},
  },
};

export const Empty: Story = {
  render: (args) => (
    <DDataStateWrapper {...args}>
      {(data: unknown[]) => (
        <div>
          Items:
          {data?.length ?? 0}
        </div>
      )}
    </DDataStateWrapper>
  ),
  args: { isLoading: false, isError: false, data: [] },
};

export const Success: Story = {
  render: (args) => (
    <DBox className="p-3 border rounded">
      <DDataStateWrapper
        {...args}
        data={args.data as string[]}
      >
        {(data) => (
          <ul className="m-0">
            {data.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
      </DDataStateWrapper>
    </DBox>
  ),
  args: { isLoading: false, isError: false, data: ['Alpha', 'Beta', 'Gamma'] },
};

export const CustomRender: Story = {
  render: (args) => (
    <DDataStateWrapper
      {...args}
      renderEmpty={<div className="text-muted">Nothing here…</div>}
      renderLoading={<div className="text-info">Loading…</div>}
      renderError={<button type="button" className="btn btn-outline-danger" onClick={() => { /* retry */ }}>Retry</button>}
    >
      {(data: unknown[]) => (
        <div>
          Items:
          {data?.length ?? 0}
        </div>
      )}
    </DDataStateWrapper>
  ),
  args: { isLoading: false, isError: false, data: [] },
};
