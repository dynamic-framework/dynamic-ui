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
  DButtonIcon,
  DDropdown,
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

const ICON_ONLY_DOCK_ITEMS: DockItem[] = [
  { id: 'home', label: 'Home', icon: 'House' },
  { id: 'accounts', label: 'Accounts', icon: 'Wallet' },
  { id: 'transfer', label: 'Transfer', icon: 'ArrowLeftRight' },
  { id: 'cards', label: 'Cards', icon: 'CreditCard' },
  { id: 'profile', label: 'Profile', icon: 'UserRound' },
];

type TextDockItem = {
  id: string;
  label: string;
  notifications?: number;
};

const TEXT_DOCK_ITEMS: TextDockItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'accounts', label: 'Accounts' },
  { id: 'inbox', label: 'Inbox', notifications: 6 },
  { id: 'payments', label: 'Payments' },
  { id: 'more', label: 'More' },
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

function MoreDockDropdownToggle(
  {
    open,
    toggle,
  }: {
    open: boolean;
    toggle: () => void;
  },
) {
  return (
    <DButton
      variant="link"
      onClick={toggle}
      color="secondary"
      size="sm"
      text="More"
      iconEnd="MoreVertical"
      className={open ? 'fw-semibold' : 'fw-normal'}
    />
  );
}

const FIXED_GRID_DOCK_MENU_SOURCE = String.raw`import { DButton, DIcon } from '../../src';

const GRID_DOCK_ITEMS = [
  { id: 'home', label: 'Home', icon: 'House' },
  { id: 'accounts', label: 'Accounts', icon: 'Wallet' },
  { id: 'transfer', label: 'Transfer', icon: 'ArrowLeftRight' },
  { id: 'cards', label: 'Cards', icon: 'CreditCard' },
  { id: 'more', label: 'More', icon: 'Grid' },
];

function FixedGridDockMenuExample() {
  return (
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
        <div className="position-absolute start-0 end-0" style={{ bottom: '12px', paddingInline: '12px' }}>
          <nav aria-label="Fixed grid mobile menu" className="bg-white border rounded-2" style={{ borderColor: 'var(--bs-gray-200)', boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)' }}>
            <div className="d-grid p-1" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
              {GRID_DOCK_ITEMS.map((item) => (
                <DButton key={item.id} variant="link" className="flex-column align-items-center justify-content-center">
                  <DIcon icon={item.icon} size="1.1rem" className="text-gray-700" />
                  <small className="text-gray-700" style={{ fontSize: '11px', lineHeight: 1.1 }}>{item.label}</small>
                </DButton>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </MobileViewport>
  );
}`;

const HORIZONTAL_SCROLL_DOCK_MENU_SOURCE = String.raw`import { DButton, DIcon } from '../../src';

const H_SCROLL_DOCK_ITEMS = [
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

function HorizontalScrollDockMenuExample() {
  return (
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
        <div className="position-absolute start-0 end-0" style={{ bottom: '12px', paddingInline: '12px' }}>
          <nav aria-label="Horizontal scroll mobile menu" className="bg-white border rounded-2 p-1" style={{ borderColor: 'var(--bs-gray-200)', boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)' }}>
            <div className="d-flex p-1 align-items-stretch gap-1 no-visible-scroll">
              {H_SCROLL_DOCK_ITEMS.map((item) => (
                <DButton key={item.id} variant="link" className="flex-column align-items-center justify-content-center">
                  <DIcon icon={item.icon} size="1.1rem" className="text-gray-700" />
                  <small className="text-gray-700" style={{ fontSize: '11px', lineHeight: 1.1 }}>{item.label}</small>
                </DButton>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </MobileViewport>
  );
}`;

const HORIZONTAL_SCROLL_DOCK_MENU_WITH_GRADIENT_MASK_SOURCE = String.raw`import { useEffect, useRef, useState } from 'react';
import { DButton, DIcon } from '../../src';

const H_SCROLL_DOCK_ITEMS = [
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

function HorizontalScrollDockMenuWithGradientMaskExample() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showEndFade, setShowEndFade] = useState(true);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return () => {};

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
        <div className="position-absolute start-0 end-0" style={{ bottom: '12px', paddingInline: '12px' }}>
          <nav aria-label="Horizontal scroll mobile menu with gradient cue" className="bg-white border rounded-2 p-1 position-relative" style={{ borderColor: 'var(--bs-gray-200)', boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)' }}>
            <div ref={scrollRef} className="d-flex p-1 align-items-stretch gap-1 no-visible-scroll" style={{ overflowX: 'auto', overflowY: 'hidden', WebkitOverflowScrolling: 'touch' }}>
              {H_SCROLL_DOCK_ITEMS.map((item) => (
                <DButton key={item.id} variant="link" className="flex-column align-items-center justify-content-center">
                  <DIcon icon={item.icon} size="1.1rem" className="text-gray-700" />
                  <small className="text-gray-700" style={{ fontSize: '11px', lineHeight: 1.1 }}>{item.label}</small>
                </DButton>
              ))}
            </div>
            {showEndFade && (
              <div aria-hidden="true" style={{ position: 'absolute', top: '8px', bottom: '8px', right: '8px', width: '28px', pointerEvents: 'none', background: 'linear-gradient(to left, var(--bs-white), rgba(255, 255, 255, 0))' }} />
            )}
          </nav>
        </div>
      </div>
    </MobileViewport>
  );
}`;

const ACTIVE_STATE_DOCK_MENU_SOURCE = String.raw`import { useState } from 'react';
import { DButton, DIcon } from '../../src';

const GRID_DOCK_ITEMS = [
  { id: 'home', label: 'Home', icon: 'House' },
  { id: 'accounts', label: 'Accounts', icon: 'Wallet' },
  { id: 'transfer', label: 'Transfer', icon: 'ArrowLeftRight' },
  { id: 'cards', label: 'Cards', icon: 'CreditCard' },
  { id: 'more', label: 'More', icon: 'Grid' },
];

function ActiveStateDockMenuExample() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <MobileViewport>
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Navigation</h5>
          <small className="text-muted">Active state with solid for the selected item</small>
          <div className="card p-3 mt-3">
            <small className="text-muted">Current section</small>
            <strong>{GRID_DOCK_ITEMS.find((item) => item.id === activeItem)?.label}</strong>
          </div>
        </div>
        <div className="position-absolute start-0 end-0" style={{ bottom: '12px', paddingInline: '12px' }}>
          <nav aria-label="Active state dock menu" className="bg-white border rounded-2" style={{ borderColor: 'var(--bs-gray-200)', boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)' }}>
            <div className="d-grid p-1" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
              {GRID_DOCK_ITEMS.map((item) => {
                const isActive = item.id === activeItem;
                return (
                  <DButton key={item.id} variant={isActive ? 'solid' : 'link'} color={isActive ? 'primary' : 'secondary'} className="flex-column align-items-center justify-content-center" onClick={() => setActiveItem(item.id)}>
                    <DIcon icon={item.icon} size="1.1rem" className={isActive ? 'text-white' : 'text-gray-700'} />
                    <small className={isActive ? 'text-white' : 'text-gray-700'} style={{ fontSize: '11px', lineHeight: 1.1 }}>{item.label}</small>
                  </DButton>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </MobileViewport>
  );
}`;

const TEXT_ONLY_DOCK_MENU_WITH_NOTIFICATIONS_SOURCE = String.raw`import { useState } from 'react';
import { DButton, DDropdown } from '../../src';

const TEXT_DOCK_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'accounts', label: 'Accounts' },
  { id: 'inbox', label: 'Inbox', notifications: 6 },
  { id: 'payments', label: 'Payments' },
  { id: 'more', label: 'More' },
];

function MoreDockDropdownToggle({ open, toggle }: { open: boolean; toggle: () => void }) {
  return (
    <DButton
      variant="link"
      onClick={toggle}
      color="secondary"
      size="sm"
      text="More"
      iconEnd="MoreVertical"
      className={open ? 'fw-semibold' : 'fw-normal'}
    />
  );
}

function TextOnlyDockMenuWithNotificationsExample() {
  const [activeItem, setActiveItem] = useState('home');
  const moreActions = [
    { label: 'Settings', icon: 'Settings', onClick: () => setActiveItem('more') },
    { label: 'Notifications', icon: 'Bell', onClick: () => setActiveItem('more') },
    { isDivider: true, label: '' },
    { label: 'Sign out', icon: 'LogOut', color: 'danger' as const, onClick: () => setActiveItem('more') },
  ];

  return (
    <MobileViewport>
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Messages</h5>
          <small className="text-muted">Text-only dock: active item in bold, one tab with notification count</small>
          <div className="card p-3 mt-3">
            <small className="text-muted">Current tab</small>
            <strong>{TEXT_DOCK_ITEMS.find((item) => item.id === activeItem)?.label}</strong>
          </div>
        </div>
        <div className="position-absolute start-0 bottom-0">
          <nav aria-label="Text dock menu with notifications" className="bg-white border-top">
            <div className="d-grid p-1" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
              {TEXT_DOCK_ITEMS.map((item) => {
                const isActive = item.id === activeItem;
                if (item.id === 'more') {
                  return (
                    <DDropdown key={item.id} asPortal placement="up" actions={moreActions} dropdownToggle={MoreDockDropdownToggle} />
                  );
                }
                return (
                  <DButton key={item.id} variant="link" size="sm" color="secondary" onClick={() => setActiveItem(item.id)} className={isActive ? 'fw-semibold' : 'fw-normal'}>
                    {item.label}
                    {typeof item.notifications === 'number' && item.notifications > 0 && (
                      <span className="rounded-pill text-white bg-danger d-inline-flex align-items-center justify-content-center" style={{ minWidth: '16px', height: '16px', paddingInline: '4px', fontSize: '8px', lineHeight: 1 }}>
                        {item.notifications}
                      </span>
                    )}
                  </DButton>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </MobileViewport>
  );
}`;

const ICON_ONLY_DOCK_MENU_SOURCE = String.raw`import { DButtonIcon } from '../../src';

const ICON_ONLY_DOCK_ITEMS = [
  { id: 'home', label: 'Home', icon: 'House' },
  { id: 'accounts', label: 'Accounts', icon: 'Wallet' },
  { id: 'transfer', label: 'Transfer', icon: 'ArrowLeftRight' },
  { id: 'cards', label: 'Cards', icon: 'CreditCard' },
  { id: 'profile', label: 'Profile', icon: 'UserRound' },
];

function IconOnlyDockMenuExample() {
  return (
    <MobileViewport>
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Icon shortcuts</h5>
          <small className="text-muted">Icon-only dock with pill style actions</small>
          <div className="card p-3 mt-3">
            <small className="text-muted">Quick access</small>
            <strong>5 main actions</strong>
          </div>
        </div>
        <div className="position-absolute start-0 end-0" style={{ bottom: '12px', paddingInline: '12px' }}>
          <nav aria-label="Icon-only dock menu" className="bg-primary rounded-pill p-2" style={{ boxShadow: '0 10px 24px rgba(13, 110, 253, 0.32)' }}>
            <div className="d-grid" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
              {ICON_ONLY_DOCK_ITEMS.map((item) => (
                <div key={item.id} className="d-flex justify-content-center">
                  <DButtonIcon
                    variant={item.id === 'home' ? 'solid' : 'link'}
                    color="light"
                    className="rounded-pill hover:bg-primary-400 text-white"
                    icon={item.icon}
                    aria-label={item.label}
                  />
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </MobileViewport>
  );
}`;

export const FixedGridDockMenu: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Fixed mobile menu with dynamic columns based on the number of actions. Sober style with border and rounded corners.',
      },
      source: {
        code: FIXED_GRID_DOCK_MENU_SOURCE,
        language: 'tsx',
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
      source: {
        code: HORIZONTAL_SCROLL_DOCK_MENU_SOURCE,
        language: 'tsx',
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
      source: {
        code: HORIZONTAL_SCROLL_DOCK_MENU_WITH_GRADIENT_MASK_SOURCE,
        language: 'tsx',
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
      source: {
        code: ACTIVE_STATE_DOCK_MENU_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => <ActiveStateDock />,
};

function TextOnlyDockWithNotifications() {
  const [activeItem, setActiveItem] = useState<string>('home');
  const moreActions = [
    { label: 'Settings', icon: 'Settings', onClick: () => setActiveItem('more') },
    { label: 'Notifications', icon: 'Bell', onClick: () => setActiveItem('more') },
    { isDivider: true, label: '' },
    {
      label: 'Sign out',
      icon: 'LogOut',
      color: 'danger' as const,
      onClick: () => setActiveItem('more'),
    },
  ];

  return (
    <MobileViewport>
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Messages</h5>
          <small className="text-muted">
            Text-only dock: active item in bold, one tab with notification count
          </small>

          <div className="card p-3 mt-3">
            <small className="text-muted">Current tab</small>
            <strong>{TEXT_DOCK_ITEMS.find((item) => item.id === activeItem)?.label}</strong>
          </div>
        </div>

        <div
          className="position-absolute start-0 bottom-0"
        >
          <nav
            aria-label="Text dock menu with notifications"
            className="bg-white border-top"
          >
            <div
              className="d-grid p-1"
              style={{
                gridTemplateColumns: `repeat(${TEXT_DOCK_ITEMS.length}, minmax(0, 1fr))`,
              }}
            >
              {TEXT_DOCK_ITEMS.map((item) => {
                const isActive = item.id === activeItem;

                if (item.id === 'more') {
                  return (
                    <DDropdown
                      key={item.id}
                      asPortal
                      placement="up"
                      actions={moreActions}
                      dropdownToggle={MoreDockDropdownToggle}
                    />
                  );
                }

                return (
                  <DButton
                    key={item.id}
                    variant="link"
                    size="sm"
                    color="secondary"
                    onClick={() => setActiveItem(item.id)}
                    className={isActive ? 'fw-semibold' : 'fw-normal'}
                  >
                    {item.label}
                    {typeof item.notifications === 'number' && item.notifications > 0 && (
                      <span
                        className="rounded-pill text-white bg-danger d-inline-flex align-items-center justify-content-center"
                        style={{
                          minWidth: '16px',
                          height: '16px',
                          paddingInline: '4px',
                          fontSize: '8px',
                          lineHeight: 1,
                        }}
                      >
                        {item.notifications}
                      </span>
                    )}
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

export const TextOnlyDockMenuWithNotifications: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Text-only dock menu without icons. The active item uses bold text and one tab shows a numeric notification badge.',
      },
      source: {
        code: TEXT_ONLY_DOCK_MENU_WITH_NOTIFICATIONS_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => <TextOnlyDockWithNotifications />,
};

export const IconOnlyDockMenu: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Dock menu with only icons using DButtonIcon in light color and rounded-pill style over a bg-primary rounded-pill container.',
      },
      source: {
        code: ICON_ONLY_DOCK_MENU_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <MobileViewport>
      <div className="h-100 position-relative bg-gray-25">
        <div className="p-4" style={{ paddingBottom: '112px' }}>
          <h5 className="mb-1">Icon shortcuts</h5>
          <small className="text-muted">Icon-only dock with pill style actions</small>

          <div className="card p-3 mt-3">
            <small className="text-muted">Quick access</small>
            <strong>5 main actions</strong>
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
            aria-label="Icon-only dock menu"
            className="bg-primary rounded-pill p-1 shadow-lg"
          >
            <div
              className="d-grid"
              style={{
                gridTemplateColumns: `repeat(${ICON_ONLY_DOCK_ITEMS.length}, minmax(0, 1fr))`,
              }}
            >
              {ICON_ONLY_DOCK_ITEMS.map((item) => (
                <div key={item.id} className="d-flex justify-content-center">
                  <DButtonIcon
                    variant={item.id === 'home' ? 'solid' : 'link'}
                    color="light"
                    className={`border-0 rounded-pill ${item.id === 'home' ? 'bg-primary-400 text-white' : ''}`}
                    icon={item.icon}
                    aria-label={item.label}
                  />
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </MobileViewport>
  ),
};
