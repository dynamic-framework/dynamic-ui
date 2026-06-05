/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  useEffect,
  useState,
} from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DDataStateWrapper,
  DBox,
  EmptyState,
  ErrorState,
  LoadingState,
} from '../../src/components';

/**
 * \`DDataStateWrapper\` is a utility component designed to handle common data fetching states:
 * **Loading**, **Error**, **Empty**, and **Success**.
 *
 * It provides sensible defaults for each state (like a spinner for loading) but allows
 * full customization through render props.
 */
const meta: Meta<typeof DDataStateWrapper> = {
  title: 'Design System/Components/Data State Wrapper',
  component: DDataStateWrapper,
  tags: [
    'autodocs',
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Easily manage UI transitions between different data states. Wrap your content and provide the current state flags. **Standalone components:** `EmptyState`, `ErrorState`, and `LoadingState` are also available as individual exports for use outside of `DDataStateWrapper` when you need to display these states independently.',
      },
    },
  },
  argTypes: {
    isLoading: {
      description: 'Whether the data is currently being fetched.',
      table: {
        category: 'State',
        defaultValue: {
          summary: 'false',
        },
      },
    },
    isError: {
      description: 'Whether an error occurred during fetching.',
      table: {
        category: 'State',
        defaultValue: {
          summary: 'false',
        },
      },
    },
    data: {
      description: 'The data to be displayed. If null or empty, the empty state is shown.',
      table: {
        category: 'Data',
      },
      control: 'select',
      options: [
        'empty',
        'populated',
      ],
      mapping: {
        empty: [],
        populated: [
          'Apple',
          'Banana',
          'Cherry',
        ],
      },
    },
    onRetry: {
      description: 'Callback function to be executed when the user clicks the retry button in the default error state.',
      table: {
        category: 'Callbacks',
      },
      action: 'onRetry',
    },
    renderLoading: {
      description: 'Custom renderer for the loading state.',
      table: {
        category: 'Custom Renderers',
      },
      control: false,
    },
    renderEmpty: {
      description: 'Custom renderer for the empty state.',
      table: {
        category: 'Custom Renderers',
      },
      control: false,
    },
    renderError: {
      description: 'Custom renderer for the error state.',
      table: {
        category: 'Custom Renderers',
      },
      control: false,
    },
    children: {
      description: 'Render function that receives the data when it is successfully loaded and not empty.',
      table: {
        category: 'Content',
      },
      control: false,
    },
    messages: {
      description: 'Override the default built-in strings without replacing the default markup. The loading key maps to the spinner aria-label (accessibility label, not visible text); empty/error/retry map to visible UI text. All keys are optional.',
      table: {
        category: 'Customization',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: 180 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DDataStateWrapper>;

/**
 * The basic state showing the empty view by default.
 */
export const Default: Story = {
  args: {
    isLoading: false,
    isError: false,
    data: [],
    children: (data: unknown) => (
      <ul className="list-group">
        {(data as string[]).map((item) => (
          <li
            key={item}
            className="list-group-item"
          >
            {item}
          </li>
        ))}
      </ul>
    ),
  },
};

/**
 * A state populated with data.
 */
export const Success: Story = {
  args: {
    ...Default.args,
    data: [
      'Alpha',
      'Beta',
      'Gamma',
    ],
  },
};

/**
 * Displays the default loading state (spinner).
 */
export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
  render: (args) => (
    <div
      style={{
        minHeight: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DDataStateWrapper {...args} />
    </div>
  ),
};

/**
 * Displays the default error state with a retry button.
 */
export const Error: Story = {
  args: {
    ...Default.args,
    isError: true,
  },
};

/**
 * Pass a `messages` object to override the hardcoded default strings without
 * replacing the built-in markup.  All keys are optional — only supply what you
 * need (e.g. from an i18n catalogue).
 */
export const CustomMessages: Story = {
  render: function Render(args) {
    const [state, setState] = useState({
      isLoading: args.isLoading,
      isError: args.isError,
      data: args.data,
    });

    useEffect(() => {
      setState({
        isLoading: args.isLoading,
        isError: args.isError,
        data: args.data,
      });
    }, [args.isLoading, args.isError, args.data]);

    const setStatus = (loading: boolean, error: boolean, data: unknown[]) => {
      setState({
        isLoading: loading,
        isError: error,
        data,
      });
    };

    return (
      <div className="d-flex flex-column gap-3">
        <div className="d-flex gap-2 mb-3">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={() => setStatus(true, false, [])}
          >
            Loading
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => setStatus(false, true, [])}
          >
            Error
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setStatus(false, false, [])}
          >
            Empty
          </button>
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={() => setStatus(false, false, ['Alpha', 'Beta', 'Gamma'])}
          >
            Success
          </button>
        </div>
        <DDataStateWrapper
          {...args}
          isLoading={state.isLoading}
          isError={state.isError}
          data={state.data}
        />
      </div>
    );
  },
  args: {
    isLoading: false,
    isError: false,
    data: [],
    messages: {
      loading: 'Cargando…',
      empty: 'Sin datos disponibles.',
      error: 'Ocurrió un error inesperado.',
      retry: 'Reintentar',
    },
    children: (data: unknown) => (
      <ul className="list-group">
        {(data as string[]).map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    ),
  },
  argTypes: {
    isLoading: { control: 'boolean' },
    isError: { control: 'boolean' },
  },
};

/**
 * Demonstrates how to override the default states with custom components.
 * This story is interactive, allowing you to test each state using the buttons below.
 */
export const CustomTemplates: Story = {
  render: function Render(args) {
    const [state, setState] = useState({
      isLoading: args.isLoading,
      isError: args.isError,
      data: args.data,
    });

    useEffect(() => {
      setState({
        isLoading: args.isLoading,
        isError: args.isError,
        data: args.data,
      });
    }, [args.isLoading, args.isError, args.data]);

    const setStatus = (loading: boolean, error: boolean, data: unknown[]) => {
      setState({
        isLoading: loading,
        isError: error,
        data,
      });
    };

    return (
      <div className="d-flex flex-column gap-3">
        <div className="d-flex gap-2 mb-3">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={() => setStatus(true, false, [])}
          >
            Show Loading
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => setStatus(false, true, [])}
          >
            Show Error
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setStatus(false, false, [])}
          >
            Show Empty
          </button>
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={() => setStatus(false, false, ['Item 1'])}
          >
            Show Success
          </button>
        </div>

        <DDataStateWrapper
          {...args}
          isLoading={state.isLoading}
          isError={state.isError}
          data={state.data}
        />
      </div>
    );
  },
  args: {
    isLoading: true,
    isError: false,
    data: [],
    renderLoading: (
      <div className="text-center p-5 border rounded bg-light">
        <div
          className="spinner-grow text-primary"
          role="status"
        >
          <span className="visually-hidden">
            Loading...
          </span>
        </div>
        <p className="mt-2 mb-0">
          Customizing the loading experience...
        </p>
      </div>
    ),
    renderError: (
      <div
        className="alert alert-danger d-flex align-items-center"
        role="alert"
      >
        <div>
          <strong>
            Oops!
          </strong>
          {' '}
          Something went wrong.
          {' '}
          <button
            type="button"
            className="btn btn-link p-0 align-baseline"
          >
            Click here to try again
          </button>
          .
        </div>
      </div>
    ),
    renderEmpty: (
      <DBox className="text-center p-4 border-dashed rounded">
        <h4>
          No tracks found
        </h4>
        <p className="text-muted">
          Try adjusting your search filters.
        </p>
        <button
          type="button"
          className="btn btn-primary btn-sm"
        >
          Reset Filters
        </button>
      </DBox>
    ),
    children: (data: unknown) => (
      <div>
        Data loaded:
        {' '}
        {JSON.stringify(data)}
      </div>
    ),
  },
  argTypes: {
    isLoading: {
      control: 'boolean',
    },
    isError: {
      control: 'boolean',
    },
  },
};

/**
 * Showcases the individual state components that are also available as standalone exports:
 * - **EmptyState**: Displays when there is no data, with optional icon, message, and action button.
 * - **ErrorState**: Displays error messages with an optional retry button.
 * - **LoadingState**: Displays a loading spinner with accessibility support.
 *
 * These can be imported and used independently
 * when you don't need the full DDataStateWrapper orchestration.
 */
export const StandaloneStates: Story = {
  render: () => (
    <div className="d-flex flex-column gap-4">
      <div>
        <h6 className="text-muted mb-3">EmptyState</h6>
        <EmptyState
          message="No items found"
          icon="Search"
          actionText="Create New"
          onAction={() => undefined}
        />
      </div>
      <div>
        <h6 className="text-muted mb-3">ErrorState (Danger)</h6>
        <ErrorState
          message="Failed to load data. Please check your connection."
          onRetry={() => undefined}
          retryMessage="Retry"
          color="danger"
        />
      </div>
      <div>
        <h6 className="text-muted mb-3">ErrorState (Warning)</h6>
        <ErrorState
          message="Something went wrong, but you can try again."
          onRetry={() => undefined}
          retryMessage="Try Again"
          color="warning"
        />
      </div>
      <div>
        <h6 className="text-muted mb-3">LoadingState</h6>
        <LoadingState ariaLabel="Loading your data..." />
      </div>
    </div>
  ),
};
