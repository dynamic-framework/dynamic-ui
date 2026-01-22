import { Meta, StoryObj } from '@storybook/react-vite';
import { DataStateWrapper } from '../../src/components/DataStateWrapper/DataStateWrapper';
import DBox from '../../src/components/DBox';

// Wrapper to avoid generic component typing issues in Storybook

const meta: Meta<typeof DataStateWrapper> = {
  title: 'Design System/Components/DataStateWrapper',
  component: DataStateWrapper,
  parameters: {
    docs: {
      description: {
        component:
          'Wrapper utilitario para manejar estados de carga, error y vacíos. Por defecto muestra un spinner, un estado de error y uno vacío mínimos; puedes sobreescribirlos vía renderLoading/renderError/renderEmpty.',
      },
    },
  },
  argTypes: {
    isLoading: { control: 'boolean' },
    isError: { control: 'boolean' },
    data: { control: 'object' },
    onRetry: { action: 'retry' },
    renderLoading: { control: false },
    renderEmpty: { control: false },
    renderError: { control: false },
    children: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof DataStateWrapper>;

export const Loading: Story = {
  render: (args) => (
    <div style={{ minHeight: 140 }}>
      <DataStateWrapper {...args}>
        {(data: unknown[]) => (
          <div>
            Items:
            {data?.length ?? 0}
          </div>
        )}
      </DataStateWrapper>
    </div>
  ),
  args: { isLoading: true, isError: false, data: undefined },
};

export const Error: Story = {
  render: (args) => (
    <DataStateWrapper {...args}>
      {(data: unknown[]) => (
        <div>
          Items:
          {data?.length ?? 0}
        </div>
      )}
    </DataStateWrapper>
  ),
  args: {
    isLoading: false,
    isError: true,
    data: undefined,
    onRetry: () => {},
  },
};

export const Empty: Story = {
  render: (args) => (
    <DataStateWrapper {...args}>
      {(data: unknown[]) => (
        <div>
          Items:
          {data?.length ?? 0}
        </div>
      )}
    </DataStateWrapper>
  ),
  args: { isLoading: false, isError: false, data: [] },
};

export const Success: Story = {
  render: (args) => (
    <DBox className="p-3 border rounded">
      <DataStateWrapper {...args}>
        {(data: string[]) => (
          <ul className="m-0">
            {data.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
      </DataStateWrapper>
    </DBox>
  ),
  args: { isLoading: false, isError: false, data: ['Alpha', 'Beta', 'Gamma'] },
};

export const CustomRender: Story = {
  render: (args) => (
    <DataStateWrapper
      {...args}
      renderEmpty={<div className="text-muted">Nada por aquí…</div>}
      renderLoading={<div className="text-info">Cargando…</div>}
      renderError={<button type="button" className="btn btn-outline-danger" onClick={() => { /* retry */ }}>Reintentar</button>}
    >
      {(data: unknown[]) => (
        <div>
          Items:
          {data?.length ?? 0}
        </div>
      )}
    </DataStateWrapper>
  ),
  args: { isLoading: false, isError: false, data: [] },
};
