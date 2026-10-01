import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo, type ReactNode } from 'react';

import {
  DAvatar,
  DBox,
  DButton,
  DButtonIcon,
  DContextProvider,
  DIcon,
  DListGroup,
  DModal,
  type PortalProps,
  useDPortalContext,
} from '../../../src';

import DocsTemplate from '../docs/Template.mdx';

type Story = StoryObj<typeof DBox>;

type SchedulePayloads = {
  scheduleDetail: {
    title: string;
    dateLabel: string;
    timeLabel: string;
    mode: string;
    trainer: string;
    description: string;
    rating: number;
  };
};

type QuickServicePayloads = {
  quickService: {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
  };
};

const SESSIONS: SchedulePayloads['scheduleDetail'][] = [
  {
    title: 'Relax Yoga',
    dateLabel: 'October 15, Thursday',
    timeLabel: '09:00 am - 10:30 am',
    mode: 'online',
    trainer: 'Kaylee Kemp',
    description: 'Gentle flow focused on mindful movement and breathing to release stress and improve flexibility.',
    rating: 5,
  },
  {
    title: 'Boxing for beginners',
    dateLabel: 'October 15, Thursday',
    timeLabel: '07:30 am - 08:30 am',
    mode: 'online',
    trainer: 'Tyler Green',
    description: 'Introductory boxing routine with coordination drills, posture guidance, and controlled cardio rounds.',
    rating: 4,
  },
  {
    title: 'Stretching',
    dateLabel: 'October 15, Thursday',
    timeLabel: '10:00 am - 11:00 am',
    mode: 'big hall',
    trainer: 'Emma Clark',
    description: 'Full body stretching for mobility, posture support, and recovery after medium-intensity training.',
    rating: 4,
  },
  {
    title: 'Hip-Hop',
    dateLabel: 'October 15, Thursday',
    timeLabel: '11:20 am - 12:20 pm',
    mode: 'studio A',
    trainer: 'Aaron Jones',
    description: 'Dynamic choreography class with rhythm training, fast transitions, and high-energy combinations.',
    rating: 5,
  },
];

const QUICK_SERVICES: QuickServicePayloads['quickService'][] = [
  {
    id: 'limits',
    icon: 'Shield',
    title: 'Card limits',
    subtitle: 'Adjust online and ATM limits',
  },
  {
    id: 'security',
    icon: 'Lock',
    title: 'Security center',
    subtitle: 'Review active devices',
  },
  {
    id: 'statements',
    icon: 'FileText',
    title: 'Statements',
    subtitle: 'Download monthly statements',
  },
];

const bottomSheetStyle = {
  height: '72vh',
  maxHeight: '72vh',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
} as const;

const meta: Meta<typeof DBox> = {
  title: 'Patterns/Mobile/Lists',
  component: DBox,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: `A catalog of mobile list styles for app-like experiences. These examples focus on visual hierarchy, compact readability, and actionable rows.

Open each example in its own Storybook canvas:

- [Cover list](?path=/story/mobile-patterns-mobile-lists--cover-list)
- [Icon list](?path=/story/mobile-patterns-mobile-lists--icon-list)
- [Text only list](?path=/story/mobile-patterns-mobile-lists--text-only-list)
- [Add action list with payload offcanvas](?path=/story/mobile-patterns-mobile-lists--add-action-list-with-payload-offcanvas)
`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

function MobileViewport(
  {
    children,
  }: {
    children: ReactNode;
  },
) {
  return (
    <div
      style={{
        width: '390px',
        maxWidth: '100%',
        height: '760px',
        borderRadius: '1.25rem',
        border: '1px solid var(--df-color-neutral-200)',
        overflow: 'hidden',
        background: 'var(--df-color-neutral-25)',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}

function BottomSheetHandle() {
  return (
    <div className="df-flex df-justify-center df-py-2">
      <span
        style={{
          width: '44px',
          height: '4px',
          borderRadius: '999px',
          background: 'var(--df-color-neutral-300)',
        }}
      />
    </div>
  );
}

function ScheduleDetailSheet({ name, payload }: PortalProps<SchedulePayloads['scheduleDetail']>) {
  const { closePortal } = useDPortalContext<SchedulePayloads>();

  return (
    <DModal
      name={name}
      placement="bottom"
      style={bottomSheetStyle}
    >
      <BottomSheetHandle />
      <DModal.Header onClose={closePortal} showCloseButton>
        <div>
          <h5 className="df-mb-1 df-fw-semibold">{payload.title}</h5>
          <div className="df-flex df-items-center df-gap-2">
            <small className="df-text-muted">{payload.dateLabel}</small>
            <span
              className="df-rounded-pill df-px-2 df-py-1"
              style={{
                fontSize: '11px',
                lineHeight: 1,
                background: 'var(--df-color-neutral-100)',
                color: 'var(--df-color-neutral-700)',
              }}
            >
              {payload.mode}
            </span>
          </div>
        </div>
      </DModal.Header>
      <DModal.Body className="df-flex df-flex-col df-gap-3">
        <div className="df-p-3 df-border-1 df-rounded-control df-bg-surface df-flex df-justify-between df-items-center">
          <div>
            <small className="df-text-muted df-block">Trainer</small>
            <strong>{payload.trainer}</strong>
          </div>
          <DButtonIcon
            variant="link"
            icon="MessageCircle"
            aria-label={`Contact ${payload.trainer}`}
          />
        </div>

        <div className="df-p-3 df-border-1 df-rounded-control df-bg-surface">
          <small className="df-text-muted df-block df-mb-1">Session time</small>
          <strong>{payload.timeLabel}</strong>
        </div>

        <div className="df-p-3 df-border-1 df-rounded-control df-bg-surface">
          <small className="df-text-muted df-block df-mb-1">About this class</small>
          <p className="df-mb-0">{payload.description}</p>
        </div>

        <div className="df-flex df-items-center df-gap-2">
          <small className="df-text-muted">Rating</small>
          <span style={{ color: 'var(--df-role-warning-base)' }}>{'★'.repeat(payload.rating)}</span>
          <span className="df-text-muted">{'☆'.repeat(Math.max(0, 5 - payload.rating))}</span>
        </div>
      </DModal.Body>
      <DModal.Footer actionPlacement="fill">
        <DButton text="Add to my schedule" onClick={closePortal} />
      </DModal.Footer>
    </DModal>
  );
}

function QuickServiceSheet({ name, payload }: PortalProps<QuickServicePayloads['quickService']>) {
  const { closePortal } = useDPortalContext<QuickServicePayloads>();

  return (
    <DModal
      name={name}
      placement="end"
      style={{ width: '360px', maxWidth: '100vw' }}
    >
      <DModal.Header onClose={closePortal} showCloseButton>
        <div className="df-flex df-items-center df-gap-2">
          <DIcon icon={payload.icon} className="df-text-primary" />
          <h5 className="df-mb-0 df-fw-semibold">{payload.title}</h5>
        </div>
      </DModal.Header>
      <DModal.Body className="df-flex df-flex-col df-gap-3">
        <div className="df-p-3 df-border-1 df-rounded-control df-bg-surface">
          <small className="df-text-muted df-block df-mb-1">Description</small>
          <p className="df-mb-0">{payload.subtitle}</p>
        </div>
      </DModal.Body>
      <DModal.Footer actionPlacement="fill">
        <DButton text="Done" onClick={closePortal} />
      </DModal.Footer>
    </DModal>
  );
}

const COVER_LIST_SOURCE = String.raw`function CoverListExample() {
  return (
    <div className="df-h-full df-p-3" style={{ background: 'linear-gradient(180deg, #f4faf7 0%, #ffffff 34%)' }}>
      <h5 className="df-mb-1">Top picks</h5>
      <small className="df-text-muted df-block df-mb-3">Card-style rows with visual emphasis</small>
      <DListGroup className="df-flex df-flex-col df-gap-2 df-border-0 df-bg-transparent">
        {[
          {
            id: '1',
            title: 'Morning reset',
            subtitle: '12 min guided session',
            accent: '#0ea5e9',
          },
          {
            id: '2',
            title: 'Focus sprint',
            subtitle: '25 min deep work timer',
            accent: '#10b981',
          },
          {
            id: '3',
            title: 'Stretch break',
            subtitle: '8 min mobility flow',
            accent: '#f97316',
          },
        ].map((item) => (
          <DListGroup.Item key={item.id} className="df-rounded-control df-border-1 df-bg-surface df-p-3 df-shadow-sm df-block">
            <div className="df-flex df-gap-3 df-items-center">
              <div className="df-rounded-control" style={{ width: '64px', height: '64px', background: item.accent }} />
              <div>
                <strong className="df-block">{item.title}</strong>
                <small className="df-text-muted">{item.subtitle}</small>
              </div>
            </div>
          </DListGroup.Item>
        ))}
      </DListGroup>
    </div>
  );
}`;

const ICON_LIST_SOURCE = String.raw`import {
  DBox,
  DButton,
  DContextProvider,
  DIcon,
  DListGroup,
  DModal,
  type PortalProps,
  useDPortalContext,
} from '../../src';

type QuickServicePayloads = {
  quickService: {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
  };
};

const QUICK_SERVICES: QuickServicePayloads['quickService'][] = [
  { id: 'limits', icon: 'Shield', title: 'Card limits', subtitle: 'Adjust online and ATM limits' },
  { id: 'security', icon: 'Lock', title: 'Security center', subtitle: 'Review active devices' },
  { id: 'statements', icon: 'FileText', title: 'Statements', subtitle: 'Download monthly statements' },
];

function QuickServiceSheet({ name, payload }: PortalProps<QuickServicePayloads['quickService']>) {
  const { closePortal } = useDPortalContext<QuickServicePayloads>();
  return (
    <DModal name={name} placement="end" style={{ width: '360px', maxWidth: '100vw' }}>
      <DModal.Header onClose={closePortal} showCloseButton>
        <div className="df-flex df-items-center df-gap-2">
          <DIcon icon={payload.icon} className="df-text-primary" />
          <h5 className="df-mb-0 df-fw-semibold">{payload.title}</h5>
        </div>
      </DModal.Header>
      <DModal.Body className="df-flex df-flex-col df-gap-3">
        <div className="df-p-3 df-border-1 df-rounded-control df-bg-surface">
          <small className="df-text-muted df-block df-mb-1">Description</small>
          <p className="df-mb-0">{payload.subtitle}</p>
        </div>
      </DModal.Body>
      <DModal.Footer actionPlacement="fill">
        <DButton text="Done" onClick={closePortal} />
      </DModal.Footer>
    </DModal>
  );
}

function IconListExample() {
  const { openPortal } = useDPortalContext<QuickServicePayloads>();

  return (
    <div className="df-h-full df-p-3" style={{ background: 'linear-gradient(180deg, #eef4ff 0%, #ffffff 34%)' }}>
      <h5 className="df-mb-1">Quick services</h5>
      <small className="df-text-muted df-block df-mb-3">Rows with icon, metadata and trailing action</small>
      <DListGroup className="df-rounded-control df-bg-surface df-overflow-hidden">
        {QUICK_SERVICES.map((item) => (
          <DListGroup.Item key={item.id} action onClick={() => openPortal('quickService', item)} className="df-flex df-items-center">
            <DIcon icon={item.icon} className="df-me-3 df-text-primary" size="1.15rem" />
            <div className="df-grow">
              <strong className="df-block">{item.title}</strong>
              <small className="df-text-muted">{item.subtitle}</small>
            </div>
            <DIcon icon="ChevronRight" className="df-text-muted" />
          </DListGroup.Item>
        ))}
      </DListGroup>
    </div>
  );
}

export const IconList = {
  render: () => (
    <DContextProvider<QuickServicePayloads>
      portalName="mobileListQuickServices"
      availablePortals={{ quickService: QuickServiceSheet }}
    >
      <IconListExample />
    </DContextProvider>
  ),
};`;

const TEXT_ONLY_LIST_SOURCE = String.raw`function TextOnlyListExample() {
  return (
    <div className="df-h-full df-p-3" style={{ background: 'linear-gradient(180deg, #fff8ef 0%, #ffffff 34%)' }}>
      <h5 className="df-mb-1">Recent notes</h5>
      <small className="df-text-muted df-block df-mb-3">Minimal typography-first rows</small>
      <DListGroup className="df-rounded-control">
        {[
          { id: '1', title: 'Quarterly review draft', meta: 'Edited 2h ago' },
          { id: '2', title: 'Client onboarding checklist', meta: 'Edited yesterday' },
          { id: '3', title: 'Design tokens migration', meta: 'Edited 2 days ago' },
          { id: '4', title: 'Release notes v3.4', meta: 'Edited 5 days ago' },
        ].map((item) => (
          <DListGroup.Item key={item.id} className="df-px-3 df-py-3 df-border-b-1 df-bg-surface">
            <strong className="df-block" style={{ fontSize: '15px' }}>{item.title}</strong>
            <small className="df-text-muted">{item.meta}</small>
          </DListGroup.Item>
        ))}
      </DListGroup>
    </div>
  );
}`;

const ADD_ACTION_WITH_PAYLOAD_SOURCE = String.raw`import { useMemo } from 'react';
import {
  DAvatar,
  DButton,
  DButtonIcon,
  DContextProvider,
  DIcon,
  DListGroup,
  DModal,
  type PortalProps,
  useDPortalContext,
} from '../../src';

type SchedulePayloads = {
  scheduleDetail: {
    title: string;
    dateLabel: string;
    timeLabel: string;
    mode: string;
    trainer: string;
    description: string;
    rating: number;
  };
};

const SESSIONS: SchedulePayloads['scheduleDetail'][] = [
  {
    title: 'Relax Yoga',
    dateLabel: 'October 15, Thursday',
    timeLabel: '09:00 am - 10:30 am',
    mode: 'online',
    trainer: 'Kaylee Kemp',
    description: 'Gentle flow focused on mindful movement and breathing to release stress and improve flexibility.',
    rating: 5,
  },
  {
    title: 'Boxing for beginners',
    dateLabel: 'October 15, Thursday',
    timeLabel: '07:30 am - 08:30 am',
    mode: 'online',
    trainer: 'Tyler Green',
    description: 'Introductory boxing routine with coordination drills, posture guidance, and controlled cardio rounds.',
    rating: 4,
  },
  {
    title: 'Stretching',
    dateLabel: 'October 15, Thursday',
    timeLabel: '10:00 am - 11:00 am',
    mode: 'big hall',
    trainer: 'Emma Clark',
    description: 'Full body stretching for mobility, posture support, and recovery after medium-intensity training.',
    rating: 4,
  },
  {
    title: 'Hip-Hop',
    dateLabel: 'October 15, Thursday',
    timeLabel: '11:20 am - 12:20 pm',
    mode: 'studio A',
    trainer: 'Aaron Jones',
    description: 'Dynamic choreography class with rhythm training, fast transitions, and high-energy combinations.',
    rating: 5,
  },
];

function AddActionListWithPayloadExample() {
  const { openPortal } = useDPortalContext<SchedulePayloads>();
  const sessionsWithRandomRating = useMemo(
    () => SESSIONS.map((session) => ({
      ...session,
      rating: Math.floor(Math.random() * 5) + 1,
    })),
    [],
  );

  return (
    <div className="df-h-full df-flex df-flex-col" style={{ background: 'linear-gradient(180deg, #8041c3 0%, #f8f1f4 28%, #ffffff00 100%)' }}>
      <div className="df-px-4 df-pt-4 df-pb-3 df-text-on-emphasis">
        <DIcon icon="Dumbbell" size="2rem" hasCircle />
        <h5 className="df-mb-0">Gym schedule</h5>
        <small className="df-opacity-80">Tap plus to open detail with payload</small>
      </div>

      <DListGroup className="df-gap-2 df-mx-3" flush>
        {sessionsWithRandomRating.map((session) => (
          <DListGroup.Item
            key={session.title}
            className="df-flex df-items-center df-justify-between df-rounded-control df-shadow-sm df-bg-surface"
          >
            <div className="df-flex df-items-center df-gap-2">
              <DAvatar name={session.trainer} size="sm" />
              <div>
                <strong className="df-block" style={{ fontSize: '15px', lineHeight: 1.15 }}>{session.title}</strong>
                <small className="df-text-muted">
                  {session.timeLabel}
                  {', '}
                  {session.mode}
                </small>
                <div style={{ fontSize: '11px', lineHeight: 1, color: 'var(--df-role-warning-base)' }}>
                  {'★'.repeat(session.rating)}
                  <span className="df-text-muted">
                    {'☆'.repeat(Math.max(0, 5 - session.rating))}
                  </span>
                </div>
              </div>
            </div>

            <DButtonIcon
              icon="Plus"
              size="sm"
              className="df-rounded-pill"
              color="primary"
              aria-label={'Open details for ' + session.title}
              onClick={() => openPortal('scheduleDetail', session)}
            />
          </DListGroup.Item>
        ))}
      </DListGroup>
    </div>
  );
}`;

function CoverListExample() {
  return (
    <MobileViewport>
      <div className="df-h-full df-p-3" style={{ background: 'linear-gradient(180deg, #f4faf7 0%, #ffffff 34%)' }}>
        <h5 className="df-mb-1">Top picks</h5>
        <small className="df-text-muted df-block df-mb-3">Card-style rows with visual emphasis</small>

        <DListGroup className="df-flex df-flex-col df-gap-2 df-border-0 df-bg-transparent">
          {[
            {
              id: '1',
              title: 'Morning reset',
              subtitle: '12 min guided session',
              accent: '#0ea5e9',
            },
            {
              id: '2',
              title: 'Focus sprint',
              subtitle: '25 min deep work timer',
              accent: '#10b981',
            },
            {
              id: '3',
              title: 'Stretch break',
              subtitle: '8 min mobility flow',
              accent: '#f97316',
            },
          ].map((item) => (
            <DListGroup.Item key={item.id} className="df-rounded-control df-border-1 df-bg-surface df-p-3 df-shadow-sm df-block">
              <div className="df-flex df-gap-3 df-items-center">
                <div className="df-rounded-control" style={{ width: '64px', height: '64px', background: item.accent }} />
                <div>
                  <strong className="df-block">{item.title}</strong>
                  <small className="df-text-muted">{item.subtitle}</small>
                </div>
              </div>
            </DListGroup.Item>
          ))}
        </DListGroup>
      </div>
    </MobileViewport>
  );
}

function IconListExample() {
  const { openPortal } = useDPortalContext<QuickServicePayloads>();

  return (
    <MobileViewport>
      <div className="df-h-full df-p-3" style={{ background: 'linear-gradient(180deg, #eef4ff 0%, #ffffff 34%)' }}>
        <h5 className="df-mb-1">Quick services</h5>
        <small className="df-text-muted df-block df-mb-3">Rows with icon, metadata and trailing action</small>

        <DListGroup className="df-rounded-control df-bg-surface df-overflow-hidden">
          {QUICK_SERVICES.map((item) => (
            <DListGroup.Item key={item.id} action onClick={() => openPortal('quickService', item)} className="df-flex df-items-center">
              <DIcon icon={item.icon} className="df-me-3 df-text-primary" size="1.15rem" />
              <div className="df-grow">
                <strong className="df-block">{item.title}</strong>
                <small className="df-text-muted">{item.subtitle}</small>
              </div>
              <DIcon icon="ChevronRight" className="df-text-muted" />
            </DListGroup.Item>
          ))}
        </DListGroup>
      </div>
    </MobileViewport>
  );
}

function TextOnlyListExample() {
  return (
    <MobileViewport>
      <div className="df-h-full df-p-3" style={{ background: 'linear-gradient(180deg, #fff8ef 0%, #ffffff 34%)' }}>
        <h5 className="df-mb-1">Recent notes</h5>
        <small className="df-text-muted df-block df-mb-3">Minimal typography-first rows</small>

        <DListGroup className="df-rounded-control">
          {[
            { id: '1', title: 'Quarterly review draft', meta: 'Edited 2h ago' },
            { id: '2', title: 'Client onboarding checklist', meta: 'Edited yesterday' },
            { id: '3', title: 'Design tokens migration', meta: 'Edited 2 days ago' },
            { id: '4', title: 'Release notes v3.4', meta: 'Edited 5 days ago' },
          ].map((item) => (
            <DListGroup.Item key={item.id} className="df-px-3 df-py-3 df-border-b-1 df-bg-surface">
              <strong className="df-block" style={{ fontSize: '15px' }}>{item.title}</strong>
              <small className="df-text-muted">{item.meta}</small>
            </DListGroup.Item>
          ))}
        </DListGroup>
      </div>
    </MobileViewport>
  );
}

function AddActionListWithPayloadExample() {
  const { openPortal } = useDPortalContext<SchedulePayloads>();
  const sessionsWithRandomRating = useMemo(
    () => SESSIONS.map((session) => ({
      ...session,
      rating: Math.floor(Math.random() * 5) + 1,
    })),
    [],
  );

  return (
    <MobileViewport>
      <div
        className="df-h-full df-flex df-flex-col"
        style={{
          background: 'linear-gradient(180deg, #8041c3 0%, #f8f1f4 28%, #ffffff00 100%)',
        }}
      >
        <div className="df-px-4 df-pt-4 df-pb-3 df-text-on-emphasis">
          <DIcon icon="Dumbbell" size="2rem" hasCircle />
          <h5 className="df-mb-0">Gym schedule</h5>
          <small className="df-opacity-80">Tap plus to open detail with payload</small>
        </div>

        <DListGroup className="df-gap-2 df-mx-3" flush>
          {sessionsWithRandomRating.map((session) => (
            <DListGroup.Item
              key={session.title}
              className="df-flex df-items-center df-justify-between df-rounded-control df-shadow-sm df-bg-surface"
            >
              <div className="df-flex df-items-center df-gap-2">
                <DAvatar
                  name={session.trainer}
                  size="sm"
                />
                <div>
                  <strong className="df-block" style={{ fontSize: '15px', lineHeight: 1.15 }}>{session.title}</strong>
                  <small className="df-text-muted">
                    {session.timeLabel}
                    {', '}
                    {session.mode}
                  </small>
                  <div style={{ fontSize: '11px', lineHeight: 1, color: 'var(--df-role-warning-base)' }}>
                    {'★'.repeat(session.rating)}
                    <span className="df-text-muted">{'☆'.repeat(Math.max(0, 5 - session.rating))}</span>
                  </div>
                </div>
              </div>

              <DButtonIcon
                icon="Plus"
                size="sm"
                className="df-rounded-pill"
                color="primary"
                aria-label={`Open details for ${session.title}`}
                onClick={() => openPortal('scheduleDetail', session)}
              />
            </DListGroup.Item>
          ))}
        </DListGroup>
      </div>
    </MobileViewport>
  );
}

export const CoverList: Story = {
  parameters: {
    docs: {
      source: {
        code: COVER_LIST_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => <CoverListExample />,
};

export const IconList: Story = {
  parameters: {
    docs: {
      source: {
        code: ICON_LIST_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <DContextProvider<QuickServicePayloads>
      portalName="mobileListQuickServices"
      availablePortals={{
        quickService: QuickServiceSheet,
      }}
    >
      <IconListExample />
    </DContextProvider>
  ),
};

export const TextOnlyList: Story = {
  parameters: {
    docs: {
      source: {
        code: TEXT_ONLY_LIST_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => <TextOnlyListExample />,
};

export const AddActionListWithPayloadOffcanvas: Story = {
  parameters: {
    docs: {
      description: {
        story: 'List rows include a plus button using DButtonIcon. Each tap opens a bottom offcanvas and sends the selected row payload.',
      },
      source: {
        code: ADD_ACTION_WITH_PAYLOAD_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <DContextProvider<SchedulePayloads>
      portalName="mobileListPatternSchedule"
      availablePortals={{
        scheduleDetail: ScheduleDetailSheet,
      }}
    >
      <AddActionListWithPayloadExample />
    </DContextProvider>
  ),
};
