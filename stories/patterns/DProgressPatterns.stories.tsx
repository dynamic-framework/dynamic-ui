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
        '--bs-progress-bar-bg': `color-mix(in srgb, var(--bs-warning), var(--bs-success) ${percentage}%)`,
      }) as CSSProperties,
      [percentage],
    );

    return (
      <DBox className="p-6" style={{ width: '620px' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 className="mb-1 fw-semibold">Workspace onboarding</h6>
            <small className="text-secondary">{`Complete ${completed} of ${steps.length} tasks`}</small>
          </div>
          <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
            {`${percentage}%`}
          </span>
        </div>

        <DProgress
          currentValue={percentage}
          maxValue={100}
          hideCurrentValue
          height={8}
          className="mb-4"
          style={progressStyle}
        />

        <div className="d-flex flex-column gap-2">
          {steps.map((step) => (
            <button
              key={step.id}
              type="button"
              aria-pressed={done[step.id]}
              onClick={() => setDone((prev) => ({ ...prev, [step.id]: !prev[step.id] }))}
              className="d-flex align-items-start gap-3 p-3 border rounded bg-white text-start"
            >
              <span aria-hidden="true">
                <DIcon
                  icon={done[step.id] ? 'CheckCircle' : 'Circle'}
                  className={done[step.id] ? 'text-success mt-1' : 'text-secondary mt-1'}
                />
              </span>
              <span>
                <span className="d-block fw-medium">{step.title}</span>
                <small className="text-secondary">{step.hint}</small>
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
      completed: { '--bs-progress-bar-bg': 'var(--bs-success)' } as CSSProperties,
      uploading: { '--bs-progress-bar-bg': 'var(--bs-primary)' } as CSSProperties,
      retry: { '--bs-progress-bar-bg': 'var(--bs-warning)' } as CSSProperties,
    };

    return (
      <DBox className="p-6" style={{ width: '620px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h6 className="mb-1 fw-semibold">Bulk import progress</h6>
            <small className="text-secondary">Track and retry failed uploads without leaving the flow</small>
          </div>
          <DButton text="Add files" size="sm" />
        </div>

        <div className="d-flex flex-column gap-3">
          {uploads.map((file) => (
            <div key={file.id} className="p-3 border rounded bg-white">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-medium">{file.name}</span>
                <small className="text-secondary">{`${file.size} - ${file.progress}%`}</small>
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
      <div className="p-12 bg-gray-50" style={{ width: '620px' }}>
        <DBox className="p-6">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <small className="text-secondary d-block">Emergency fund</small>
              <h5 className="mb-0 fw-semibold">{`$${currentAmount.toLocaleString()} saved`}</h5>
            </div>
            <span className="badge bg-info-subtle text-info px-3 py-2 rounded-pill">
              {`${percentage}% of goal`}
            </span>
          </div>

          <DProgress
            currentValue={currentAmount}
            maxValue={goalAmount}
            hideCurrentValue
            height={10}
            className="mb-2"
            style={{ '--bs-progress-bar-bg': 'var(--bs-info)' } as CSSProperties}
          />

          <div className="d-flex justify-content-between">
            <small className="text-secondary">$0</small>
            <small className="text-secondary">{`Goal: $${goalAmount.toLocaleString()}`}</small>
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
              --bs-progress-height: auto;
              --bs-progress-bg: transparent;
              border-radius: 999px;
              border: 2px solid var(--bs-primary-200);
              padding: 2px;
              overflow: hidden;
            }

            .campaign-progress .progress-bar {
              background: var(--bs-primary-100);
              border-radius: var(--bs-border-radius-pill);
              color: var(--bs-primary-700);
            }
          `}
        </style>
        <div className="p-12 bg-gray-50" style={{ width: '700px' }}>
          <DBox>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <small className="text-secondary d-block">Q3 Growth Campaign</small>
                <h6 className="mb-0 fw-semibold">Lead generation progress</h6>
              </div>
              <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                {`${currentValue}%`}
              </span>
            </div>

            <DProgress
              className="campaign-progress"
              currentValue={currentValue}
              maxValue={maxValue}
              hideCurrentValue={false}
            />

            <div className="d-flex justify-content-between mt-2">
              <small className="text-secondary">0 leads</small>
              <small className="text-secondary">Target: 1,200 leads</small>
            </div>
          </DBox>
        </div>
      </>
    );
  },
};
