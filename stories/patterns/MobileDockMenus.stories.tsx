import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

import {
  DBox,
  DButton,
  DIcon,
} from '../../src';

import DocsTemplate from './docs/Template.mdx';

type DockItem = {
  id: string;
  label: string;
  icon: string;
};

const GRID_DOCK_ITEMS: DockItem[] = [
  { id: 'home', label: 'Home', icon: 'House' },
  { id: 'accounts', label: 'Accounts', icon: 'Wallet' },
  { id: 'transfer', label: 'Transfer', icon: 'ArrowLeftRight' },
  { id: 'cards', label: 'Cards', icon: 'CreditCard' },
  { id: 'more', label: 'More', icon: 'Grid' },
];

const H_SCROLL_DOCK_ITEMS: DockItem[] = [
  { id: 'home', label: 'Home', icon: 'House' },
  { id: 'accounts', label: 'Accounts', icon: 'Wallet' },
  { id: 'transfer', label: 'Transfer', icon: 'ArrowLeftRight' },
  { id: 'payments', label: 'Pay', icon: 'Receipt' },
  { id: 'cards', label: 'Cards', icon: 'CreditCard' },
  { id: 'invest', label: 'Invest', icon: 'TrendingUp' },
  { id: 'insurance', label: 'Insurance', icon: 'Shield' },
  { id: 'support', label: 'Support', icon: 'Headset' },
  { id: 'profile', label: 'Profile', icon: 'UserRound' },
];

const meta: Meta<typeof DBox> = {
  title: 'Mobile Patterns/Mobile Dock Menus',
  component: DBox,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: 'Fixed mobile dock menus with sober visual style: rounded border container, icon + label items, and variants for adaptive grid or internal horizontal scroll.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DBox>;

function MobileViewport(
  {
    children,
  }: {
    children: ReactNode;
  },
) {
  return (
    <div
      className="bg-gray-25 border position-relative overflow-hidden rounded-2"
      style={{
        width: '390px',
        maxWidth: '100%',
        height: '760px',
      }}
    >
      {children}
    </div>
  );
}

export const FixedGridDockMenu: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Fixed mobile menu with dynamic columns based on the number of actions. Sober style with border and rounded corners.',
      },
    },
  },
  render: () => (
    <MobileViewport>
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '104px' }}>
          <h5 className="mb-1">Overview</h5>
          <small className="text-muted">Fixed menu in mobile app style</small>

          <div className="card p-3 mt-3">
            <small className="text-muted">Available</small>
            <h3 className="mb-0">$8,430.20</h3>
          </div>
        </div>

        <div
          className="position-absolute start-0 end-0"
          style={{
            bottom: '12px',
            paddingInline: '12px',
          }}
        >
          <nav
            aria-label="Fixed grid mobile menu"
            className="bg-white border rounded-2"
            style={{
              borderColor: 'var(--bs-gray-200)',
              boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)',
            }}
          >
            <div
              className="d-grid p-1"
              style={{
                gridTemplateColumns: `repeat(${GRID_DOCK_ITEMS.length}, minmax(0, 1fr))`,
              }}
            >
              {GRID_DOCK_ITEMS.map((item) => (
                <DButton
                  key={item.id}
                  variant="link"
                  className="flex-column align-items-center justify-content-center"
                >
                  <DIcon icon={item.icon} size="1.1rem" className="text-gray-700" />
                  <small className="text-gray-700" style={{ fontSize: '11px', lineHeight: 1.1 }}>{item.label}</small>
                </DButton>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </MobileViewport>
  ),
};

export const HorizontalScrollDockMenu: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Fixed mobile menu with internal horizontal overflow for scenarios with many actions. Scrolling happens only inside the dock.',
      },
    },
  },
  render: () => (
    <MobileViewport>
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Services</h5>
          <small className="text-muted">Quick shortcuts with horizontal scroll</small>

          <div className="card p-3 mt-3">
            <small className="text-muted">Active products</small>
            <strong>7 products</strong>
          </div>
        </div>

        <div
          className="position-absolute start-0 end-0"
          style={{
            bottom: '12px',
            paddingInline: '12px',
          }}
        >
          <nav
            aria-label="Horizontal scroll mobile menu"
            className="bg-white border rounded-2 p-1"
            style={{
              borderColor: 'var(--bs-gray-200)',
              boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)',
            }}
          >
            <div
              className="d-flex p-1 align-items-stretch gap-1 no-visible-scroll"
            >
              {H_SCROLL_DOCK_ITEMS.map((item) => (
                <DButton
                  key={item.id}
                  variant="link"
                  className="flex-column align-items-center justify-content-center"
                >
                  <DIcon icon={item.icon} size="1.1rem" className="text-gray-700" />
                  <small className="text-gray-700" style={{ fontSize: '11px', lineHeight: 1.1 }}>{item.label}</small>
                </DButton>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </MobileViewport>
  ),
};

function ScrollDockWithGradient() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showEndFade, setShowEndFade] = useState(true);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) {
      return () => {};
    }

    const updateFadeState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 2;
      setShowEndFade(!atEnd);
    };

    updateFadeState();
    element.addEventListener('scroll', updateFadeState, { passive: true });
    window.addEventListener('resize', updateFadeState);

    return () => {
      element.removeEventListener('scroll', updateFadeState);
      window.removeEventListener('resize', updateFadeState);
    };
  }, []);

  return (
    <MobileViewport>
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Quick actions</h5>
          <small className="text-muted">Swipe to reveal more options</small>

          <div className="card p-3 mt-3">
            <small className="text-muted">Active products</small>
            <strong>9 products</strong>
          </div>
        </div>

        <div
          className="position-absolute start-0 end-0"
          style={{
            bottom: '12px',
            paddingInline: '12px',
          }}
        >
          <nav
            aria-label="Horizontal scroll mobile menu with gradient cue"
            className="bg-white border rounded-2 p-1 position-relative"
            style={{
              borderColor: 'var(--bs-gray-200)',
              boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)',
            }}
          >
            <div
              ref={scrollRef}
              className="d-flex p-1 align-items-stretch gap-1 no-visible-scroll"
              style={{
                overflowX: 'auto',
                overflowY: 'hidden',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {H_SCROLL_DOCK_ITEMS.map((item) => (
                <DButton
                  key={item.id}
                  variant="link"
                  className="flex-column align-items-center justify-content-center"
                >
                  <DIcon icon={item.icon} size="1.1rem" className="text-gray-700" />
                  <small className="text-gray-700" style={{ fontSize: '11px', lineHeight: 1.1 }}>{item.label}</small>
                </DButton>
              ))}
            </div>

            {showEndFade && (
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '8px',
                  bottom: '8px',
                  right: '8px',
                  width: '28px',
                  pointerEvents: 'none',
                  background: 'linear-gradient(to left, var(--bs-white), rgba(255, 255, 255, 0))',
                }}
              />
            )}
          </nav>
        </div>
      </div>
    </MobileViewport>
  );
}

export const HorizontalScrollDockMenuWithGradientMask: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Menu with horizontal scroll and a gradient mask at the edge to indicate continuity. The mask disappears automatically when reaching the end.',
      },
    },
  },
  render: () => <ScrollDockWithGradient />,
};

function ActiveStateDock() {
  const [activeItem, setActiveItem] = useState<string>('home');

  return (
    <MobileViewport>
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Navigation</h5>
          <small className="text-muted">
            Active state with solid for the selected item
          </small>

          <div className="card p-3 mt-3">
            <small className="text-muted">Current section</small>
            <strong>{GRID_DOCK_ITEMS.find((item) => item.id === activeItem)?.label}</strong>
          </div>
        </div>

        <div
          className="position-absolute start-0 end-0"
          style={{
            bottom: '12px',
            paddingInline: '12px',
          }}
        >
          <nav
            aria-label="Active state dock menu"
            className="bg-white border rounded-2"
            style={{
              borderColor: 'var(--bs-gray-200)',
              boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)',
            }}
          >
            <div
              className="d-grid p-1"
              style={{
                gridTemplateColumns: `repeat(${GRID_DOCK_ITEMS.length}, minmax(0, 1fr))`,
              }}
            >
              {GRID_DOCK_ITEMS.map((item) => {
                const isActive = item.id === activeItem;

                return (
                  <DButton
                    key={item.id}
                    variant={isActive ? 'solid' : 'link'}
                    color={isActive ? 'primary' : 'secondary'}
                    className="flex-column align-items-center justify-content-center"
                    onClick={() => setActiveItem(item.id)}
                  >
                    <DIcon
                      icon={item.icon}
                      size="1.1rem"
                      className={isActive ? 'text-white' : 'text-gray-700'}
                    />
                    <small
                      className={isActive ? 'text-white' : 'text-gray-700'}
                      style={{ fontSize: '11px', lineHeight: 1.1 }}
                    >
                      {item.label}
                    </small>
                  </DButton>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </MobileViewport>
  );
}

export const ActiveStateDockMenu: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive dock menu with active state. The selected item uses variant="solid" and the rest use variant="link".',
      },
    },
  },
  render: () => <ActiveStateDock />,
};
