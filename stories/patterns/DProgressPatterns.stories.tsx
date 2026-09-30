import {
  useMemo,
  useState,
  type CSSProperties,
} from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import {
  DBox,
  DButton,
  DIcon,
  DProgress,
} from '../../src';
import DocsTemplate from './docs/Template.mdx';

const meta: Meta<typeof DProgress> = {
  title: 'Patterns/Progress',
  component: DProgress,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: 'Modern, real-world patterns for `DProgress`: onboarding completion, file upload queues, and financial goal tracking.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DProgress>;

export const OnboardingChecklist: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive onboarding checklist where progress updates as tasks are completed. Useful for activation funnels and setup wizards.',
      },
    },
  },
  render: function Render() {
    const [done, setDone] = useState<Record<string, boolean>>({
      profile: true,
      company: false,
      team: false,
      payments: false,
    });

    const steps = useMemo(() => [
      { id: 'profile', title: 'Complete your profile', hint: 'Name, avatar, and contact details' },
      { id: 'company', title: 'Add company information', hint: 'Tax ID, industry, and billing data' },
      { id: 'team', title: 'Invite your team', hint: 'Collaborators and permission roles' },
      { id: 'payments', title: 'Configure payment methods', hint: 'Card or bank account setup' },
    ], []);

    const completed = useMemo(
      () => steps.filter((step) => done[step.id]).length,
      [steps, done],
    );

    const percentage = Math.round((completed / steps.length) * 100);

    const progressStyle = useMemo(
      () => ({
        '--df-progress-bar-bg': `color-mix(in srgb, var(--df-role-warning-base), var(--df-role-success-base) ${percentage}%)`,
      }) as CSSProperties,
      [percentage],
    );

    return (
      <DBox className="df-p-6" style={{ width: '620px' }}>
        <div className="df-flex df-justify-between df-items-center df-mb-3">
          <div>
            <h6 className="df-mb-1 df-fw-semibold">Workspace onboarding</h6>
            <small className="df-text-secondary">{`Complete ${completed} of ${steps.length} tasks`}</small>
          </div>
          <span className="df-badge df-bg-primary-subtle df-text-primary df-px-3 df-py-2 df-rounded-pill">
            {`${percentage}%`}
          </span>
        </div>

        <DProgress
          currentValue={percentage}
          maxValue={100}
          hideCurrentValue
          height={8}
          className="df-mb-4"
          style={progressStyle}
        />

        <div className="df-flex df-flex-col df-gap-2">
          {steps.map((step) => (
            <button
              key={step.id}
              type="button"
              aria-pressed={done[step.id]}
              onClick={() => setDone((prev) => ({ ...prev, [step.id]: !prev[step.id] }))}
              className="df-flex df-items-start df-gap-3 df-p-3 df-border-1 df-rounded-control df-bg-surface df-text-start"
            >
              <span aria-hidden="true">
                <DIcon
                  icon={done[step.id] ? 'CheckCircle' : 'Circle'}
                  className={done[step.id] ? 'text-success mt-1' : 'text-secondary mt-1'}
                />
              </span>
              <span>
                <span className="df-block df-fw-medium">{step.title}</span>
                <small className="df-text-secondary">{step.hint}</small>
              </span>
            </button>
          ))}
        </div>
      </DBox>
    );
  },
};

export const FileUploadQueue: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Multiple progress bars in a queue for file uploads. Includes active, completed, and retry states commonly seen in modern data import experiences.',
      },
    },
  },
  render: () => {
    const uploads = [
      {
        id: '1',
        name: 'contracts-q2.csv',
        size: '4.8 MB',
        progress: 100,
        status: 'completed',
      },
      {
        id: '2',
        name: 'customer-segments.xlsx',
        size: '12.1 MB',
        progress: 72,
        status: 'uploading',
      },
      {
        id: '3',
        name: 'legacy-contacts.json',
        size: '8.4 MB',
        progress: 38,
        status: 'retry',
      },
    ] as const;

    const styleByStatus: Record<string, CSSProperties> = {
      completed: { '--df-progress-bar-bg': 'var(--df-role-success-base)' } as CSSProperties,
      uploading: { '--df-progress-bar-bg': 'var(--df-role-primary-base)' } as CSSProperties,
      retry: { '--df-progress-bar-bg': 'var(--df-role-warning-base)' } as CSSProperties,
    };

    return (
      <DBox className="df-p-6" style={{ width: '620px' }}>
        <div className="df-flex df-justify-between df-items-center df-mb-4">
          <div>
            <h6 className="df-mb-1 df-fw-semibold">Bulk import progress</h6>
            <small className="df-text-secondary">Track and retry failed uploads without leaving the flow</small>
          </div>
          <DButton text="Add files" size="sm" />
        </div>

        <div className="df-flex df-flex-col df-gap-3">
          {uploads.map((file) => (
            <div key={file.id} className="df-p-3 df-border-1 df-rounded-control df-bg-surface">
              <div className="df-flex df-justify-between df-items-center df-mb-2">
                <span className="df-fw-medium">{file.name}</span>
                <small className="df-text-secondary">{`${file.size} - ${file.progress}%`}</small>
              </div>
              <DProgress
                currentValue={file.progress}
                maxValue={100}
                hideCurrentValue
                enableStripedAnimation={file.status === 'uploading'}
                height={7}
                style={styleByStatus[file.status]}
              />
            </div>
          ))}
        </div>
      </DBox>
    );
  },
};

export const SavingsGoalTracker: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Financial goal tracker with contextual numbers around the progress bar. Useful for savings targets, debt payoff plans, or fundraising milestones.',
      },
    },
  },
  render: () => {
    const currentAmount = 12800;
    const goalAmount = 20000;
    const percentage = Math.round((currentAmount * 100) / goalAmount);

    return (
      <div className="df-p-12 df-bg-muted" style={{ width: '620px' }}>
        <DBox className="df-p-6">
          <div className="df-flex df-justify-between df-items-center df-mb-3">
            <div>
              <small className="df-text-secondary df-block">Emergency fund</small>
              <h5 className="df-mb-0 df-fw-semibold">{`$${currentAmount.toLocaleString()} saved`}</h5>
            </div>
            <span className="df-badge df-bg-info-subtle df-text-info df-px-3 df-py-2 df-rounded-pill">
              {`${percentage}% of goal`}
            </span>
          </div>

          <DProgress
            currentValue={currentAmount}
            maxValue={goalAmount}
            hideCurrentValue
            height={10}
            className="df-mb-2"
            style={{ '--df-progress-bar-bg': 'var(--df-role-info-base)' } as CSSProperties}
          />

          <div className="df-flex df-justify-between">
            <small className="df-text-secondary">$0</small>
            <small className="df-text-secondary">{`Goal: $${goalAmount.toLocaleString()}`}</small>
          </div>
        </DBox>
      </div>
    );
  },
};

export const GradientCampaignProgress: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Custom className example with a modern outline style. Useful for marketing goals, campaign pacing, or KPI cards when the design calls for bordered surfaces.',
      },
    },
  },
  render: () => {
    const currentValue = 64;
    const maxValue = 100;

    return (
      <>
        <style>
          {`
            .campaign-progress {
              --df-progress-height: auto;
              --df-progress-track-color: transparent;
              border-radius: 999px;
              border: 2px solid var(--df-role-primary-subtle);
              padding: 2px;
              overflow: hidden;
            }

            .campaign-progress .progress-bar {
              background: var(--df-role-primary-subtle);
              border-radius: var(--df-shape-pill);
              color: var(--df-role-primary-base-hover);
            }
          `}
        </style>
        <div className="df-p-12 df-bg-muted" style={{ width: '700px' }}>
          <DBox>
            <div className="df-flex df-justify-between df-items-center df-mb-3">
              <div>
                <small className="df-text-secondary df-block">Q3 Growth Campaign</small>
                <h6 className="df-mb-0 df-fw-semibold">Lead generation progress</h6>
              </div>
              <span className="df-badge df-bg-primary-subtle df-text-primary df-px-3 df-py-2 df-rounded-pill">
                {`${currentValue}%`}
              </span>
            </div>

            <DProgress
              className="campaign-progress"
              currentValue={currentValue}
              maxValue={maxValue}
              hideCurrentValue={false}
            />

            <div className="df-flex df-justify-between df-mt-2">
              <small className="df-text-secondary">0 leads</small>
              <small className="df-text-secondary">Target: 1,200 leads</small>
            </div>
          </DBox>
        </div>
      </>
    );
  },
};
