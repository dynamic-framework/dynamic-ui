/* eslint-disable no-console */
import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DErrorBoundary, { useErrorBoundary } from '../../src/components/DErrorBoundary';
import { DAlert, DButton, DCard } from '../../src';

const meta: Meta<typeof DErrorBoundary> = {
  title: 'Design System/Components/Error Boundary',
  component: DErrorBoundary,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Minimal wrapper over react-error-boundary that centralizes error logging (via onError) and provides an accessible default fallback. Use name to tag logs, fallback to override the UI, and resetKeys/onReset to control recovery.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Optional identifier to tag logs and distinguish boundaries.',
    },
    fallback: {
      control: false,
      description: 'Custom fallback renderer. If omitted, a default accessible alert is used.',
    },
    resetKeys: {
      control: false,
      description: 'Keys that, when changed, reset the boundary state.',
    },
    onReset: {
      action: 'onReset',
      description: 'Called when the boundary is reset (via resetKeys change or user action).',
    },
    onError: {
      action: 'onError',
      description: 'Called after internal logging when an error is captured.',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: 150, width: 350 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DErrorBoundary>;

function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

export const DefaultFallback: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the default accessible fallback. Click “Trigger error” to simulate a rendering failure inside the boundary.',
      },
      source: {
        code: `
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      size="sm"
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary>
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
        `,
      },
    },
  },
  render: function Render(args) {
    const [explode, setExplode] = useState(false);
    return (
      <div className="d-flex flex-column gap-2">
        <DButton
          size="sm"
          className="me-auto"
          onClick={() => setExplode(true)}
        >
          Trigger error
        </DButton>
        <DErrorBoundary
          {...args}
        >
          <Bomb explode={explode} />
        </DErrorBoundary>
      </div>
    );
  },
  args: {
    name: 'Default',
  },
};

export const CustomFallback: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Provides a custom fallback via the fallback prop. Useful to align the error UI with specific contexts.',
      },
      source: {
        code: `
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      size="sm"
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      fallback={() => (
        <DAlert color="warning">
          <p className="m-0">
            An error occurred! Using a custom fallback.
          </p>
        </DAlert>
      )}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
`,
      },
    },
  },
  render: function Render(args) {
    const [explode, setExplode] = useState(false);
    return (
      <div className="d-flex flex-column gap-2">
        <DButton
          size="sm"
          className="me-auto"
          onClick={() => setExplode(true)}
        >
          Trigger error
        </DButton>
        <DErrorBoundary
          {...args}
          fallback={() => (
            <DAlert color="warning">
              <p className="m-0">
                An error occurred! Using a custom fallback.
              </p>
            </DAlert>
          )}
        >
          <Bomb explode={explode} />
        </DErrorBoundary>
      </div>
    );
  },
  args: { name: 'Custom' },
};

export const WithResetKeys: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Resets the boundary when resetKeys change. Use this to recover from errors after state changes (e.g., refreshing inputs).',
      },
      source: {
        code: `
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [version, setVersion] = useState(0);
const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <div className="d-flex gap-2">
      <DButton
        size="sm"
        onClick={() => setExplode(true)}
      >
        Trigger error
      </DButton>
      <DButton
        size="sm"
        color="secondary"
        onClick={() => setVersion((v) => v + 1)}
      >
        Change reset key
      </DButton>
    </div>
    <DErrorBoundary
      resetKeys={[version]}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
`,
      },
    },
  },
  render: function Render(args) {
    const [version, setVersion] = useState(0);
    const [explode, setExplode] = useState(false);
    return (
      <div className="d-flex flex-column gap-2">
        <div className="d-flex gap-2">
          <DButton
            size="sm"
            onClick={() => setExplode(true)}
          >
            Trigger error
          </DButton>
          <DButton
            size="sm"
            color="secondary"
            onClick={() => setVersion((v) => v + 1)}
          >
            Change reset key
          </DButton>
        </div>
        <DErrorBoundary
          {...args}
          resetKeys={[version]}
        >
          <Bomb explode={explode} />
        </DErrorBoundary>
      </div>
    );
  },
  args: {
    name: 'WithResetKeys',
  },
};

export const WithNameAndOnError: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Adds name to tag logs and onError to extend logging or integrate with monitoring. Click “Trigger error” to see the event in Actions.',
      },
      source: {
        code: `
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      size="sm"
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      onError={(error, info) => {
        console.log({ error: error.message, info });
      }}
      name="MyBoundary"
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
`,
      },
    },
  },
  render: function Render(args) {
    const [explode, setExplode] = useState(false);
    return (
      <div className="d-flex flex-column gap-2">
        <DButton
          size="sm"
          className="me-auto"
          onClick={() => setExplode(true)}
        >
          Trigger error
        </DButton>
        <DErrorBoundary
          {...args}
          onError={(error, info) => {
            console.log({ error: error.message, info });
          }}
          name="MyBoundary"
        >
          <Bomb explode={explode} />
        </DErrorBoundary>
      </div>
    );
  },
};

export const UsingHookShowBoundary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Uses useErrorBoundary().showBoundary to surface an error without throwing, useful inside event handlers.',
      },
      source: {
        code: `
function ChildTrigger() {
  const { showBoundary } = useErrorBoundary();
  return (
    <DButton
      size="sm"
      className="me-auto"
      onClick={() => showBoundary(new Error('Error from hook'))}
    >
      Trigger error using hook
    </DButton>
  );
}

return (
  <DErrorBoundary
    name="HookBoundary"
  >
    <div className="d-flex flex-column gap-2">
      <ChildTrigger />
      <DCard>
        <DCard.Body>
          Press the button to trigger an error without throwing.
        </DCard.Body>
      </DCard>
    </div>
  </DErrorBoundary>
);
`,
      },
    },
  },
  render: function Render(args) {
    function ChildTrigger() {
      const { showBoundary } = useErrorBoundary();
      return (
        <DButton
          size="sm"
          className="me-auto"
          onClick={() => showBoundary(new Error('Error from hook'))}
        >
          Trigger error using hook
        </DButton>
      );
    }
    return (
      <DErrorBoundary
        {...args}
        name="HookBoundary"
      >
        <div className="d-flex flex-column gap-2">
          <ChildTrigger />
          <DCard>
            <DCard.Body>
              Press the button to trigger an error without throwing.
            </DCard.Body>
          </DCard>
        </div>
      </DErrorBoundary>
    );
  },
};

export const CustomFallbackAndOnReset: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Combines the default fallback with onReset to perform custom cleanup when the boundary resets.',
      },
      source: {
        code: `
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      size="sm"
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      onReset={() => setExplode(false)}
      fallback={({ resetErrorBoundary }) => (
        <DAlert color="warning">
          <p>
            An error occurred! Using a custom fallback.
          </p>
          <DButton
            size="sm"
            variant="outline"
            onClick={resetErrorBoundary}
          >
            Retry
          </DButton>
        </DAlert>
      )}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
`,
      },
    },
  },
  render: function Render(args) {
    const [explode, setExplode] = useState(false);
    return (
      <div className="d-flex flex-column gap-2">
        <DButton
          size="sm"
          className="me-auto"
          onClick={() => setExplode(true)}
        >
          Trigger error
        </DButton>
        <DErrorBoundary
          {...args}
          onReset={() => setExplode(false)}
          fallback={({ resetErrorBoundary }) => (
            <DAlert color="warning">
              <p>
                An error occurred! Using a custom fallback.
              </p>
              <DButton
                size="sm"
                variant="outline"
                onClick={resetErrorBoundary}
              >
                Retry
              </DButton>
            </DAlert>
          )}
        >
          <Bomb explode={explode} />
        </DErrorBoundary>
      </div>
    );
  },
  args: { name: 'DefaultFallbackWithReset' },
};
