import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  type ReactNode,
} from 'react';

import {
  DBox,
  DButtonIcon,
  DDropdown,
  DIcon,
  DListGroup,
} from '../../src';

import DocsTemplate from './docs/Template.mdx';
import { useSwipeableRows } from './hooks/useSwipeableRows';

type SwipeListItem = {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
};

const SWIPE_LIST_ITEMS: SwipeListItem[] = [
  {
    id: 'tx-1',
    title: 'Netflix subscription',
    subtitle: 'Today, 9:45 AM',
    amount: '-$17.99',
  },
  {
    id: 'tx-2',
    title: 'Coffee Store',
    subtitle: 'Today, 8:02 AM',
    amount: '-$4.50',
  },
  {
    id: 'tx-3',
    title: 'Incoming transfer',
    subtitle: 'Yesterday, 7:31 PM',
    amount: '+$1,250.00',
  },
  {
    id: 'tx-4',
    title: 'Electric bill',
    subtitle: 'Yesterday, 12:14 PM',
    amount: '-$86.30',
  },
];

const meta: Meta<typeof DBox> = {
  title: 'Mobile Patterns/List Item Swipe Actions',
  component: DBox,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: 'Mobile swipe actions pattern for transactional lists. Swipe each row to reveal contextual actions while keeping a single opened row at a time.',
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

const SWIPE_ACTIONS_WIDTH = 168;
const SWIPE_OPEN_THRESHOLD = 56;

const SWIPE_ACTIONS_SOURCE = String.raw`import {
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import { DListGroup } from '../../src';

type UseSwipeableRowsOptions = {
  actionsWidth: number;
  openThreshold: number;
};

function useSwipeableRows({
  actionsWidth,
  openThreshold,
}: UseSwipeableRowsOptions) {
  const [openRowId, setOpenRowId] = useState<string | null>(null);
  const [draggingRowId, setDraggingRowId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const dragOriginXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  const getTranslateX = (rowId: string) => {
    if (draggingRowId === rowId) {
      return dragOffset;
    }

    if (openRowId === rowId) {
      return -actionsWidth;
    }

    return 0;
  };

  const isDragging = (rowId: string) => draggingRowId === rowId;

  const closeRow = () => {
    setOpenRowId(null);
  };

  const openRow = (rowId: string) => {
    setOpenRowId(rowId);
  };

  const startDrag = (rowId: string, clientX: number) => {
    setDraggingRowId(rowId);
    dragOriginXRef.current = clientX;
    dragStartOffsetRef.current = openRowId === rowId ? -actionsWidth : 0;

    if (openRowId && openRowId !== rowId) {
      setOpenRowId(null);
    }
  };

  const updateDrag = (clientX: number) => {
    if (!draggingRowId) {
      return;
    }

    const delta = clientX - dragOriginXRef.current;
    const nextOffset = Math.max(
      -actionsWidth,
      Math.min(0, dragStartOffsetRef.current + delta),
    );
    setDragOffset(nextOffset);
  };

  const endDrag = () => {
    if (!draggingRowId) {
      return;
    }

    const shouldOpen = Math.abs(dragOffset) > openThreshold;
    setOpenRowId(shouldOpen ? draggingRowId : null);
    setDraggingRowId(null);
    setDragOffset(0);
  };

  const getPointerHandlers = (rowId: string) => ({
    onPointerDown: (event: PointerEvent<HTMLDivElement>) => {
      event.currentTarget.setPointerCapture(event.pointerId);
      startDrag(rowId, event.clientX);
    },
    onPointerMove: (event: PointerEvent<HTMLDivElement>) => {
      if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
        return;
      }

      updateDrag(event.clientX);
    },
    onPointerUp: (event: PointerEvent<HTMLDivElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      endDrag();
    },
    onPointerCancel: (event: PointerEvent<HTMLDivElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      endDrag();
    },
  });

  const getKeyboardHandler = (rowId: string) => (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      openRow(rowId);
    }

    if (event.key === 'ArrowRight' || event.key === 'Escape') {
      closeRow();
    }
  };

  return {
    closeRow,
    getKeyboardHandler,
    getPointerHandlers,
    getTranslateX,
    isDragging,
    openRow,
    openRowId,
  };
}

type SwipeListItem = {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
};

const SWIPE_LIST_ITEMS: SwipeListItem[] = [
  {
    id: 'tx-1',
    title: 'Netflix subscription',
    subtitle: 'Today, 9:45 AM',
    amount: '-$17.99',
  },
  {
    id: 'tx-2',
    title: 'Coffee Store',
    subtitle: 'Today, 8:02 AM',
    amount: '-$4.50',
  },
  {
    id: 'tx-3',
    title: 'Incoming transfer',
    subtitle: 'Yesterday, 7:31 PM',
    amount: '+$1,250.00',
  },
  {
    id: 'tx-4',
    title: 'Electric bill',
    subtitle: 'Yesterday, 12:14 PM',
    amount: '-$86.30',
  },
];

const SWIPE_ACTIONS_WIDTH = 168;
const SWIPE_OPEN_THRESHOLD = 56;

function SwipeActionsList() {
  const swipe = useSwipeableRows({
    actionsWidth: SWIPE_ACTIONS_WIDTH,
    openThreshold: SWIPE_OPEN_THRESHOLD,
  });

  return (
    <MobileViewport>
      <div className="h-100 bg-gray-25 d-flex flex-column">
        <div className="p-4 pb-2">
          <h5 className="mb-1">Recent activity</h5>
          <small className="text-muted">Swipe each item left to reveal quick actions</small>
        </div>

        <div className="px-3 pb-3 overflow-auto no-visible-scroll" style={{ minHeight: 0 }}>
          <DListGroup flush className="gap-1">
            {SWIPE_LIST_ITEMS.map((item) => {
              const isDragging = swipe.isDragging(item.id);

              return (
                <DListGroup.Item
                  key={item.id}
                  className="position-relative rounded-2 overflow-hidden bg-white border p-0"
                >
                  <div
                    aria-hidden="true"
                    className="position-absolute top-0 bottom-0 end-0 d-flex align-items-stretch px-2 bg-gray-50"
                    style={{
                      boxShadow: '12px 0 24px -15px rgba(0,0,0,.3) inset',
                      width: String(SWIPE_ACTIONS_WIDTH) + 'px',
                    }}
                  >
                    <button type="button" onClick={swipe.closeRow} style={{ width: '56px', border: 0, color: 'var(--bs-white)', background: '#0d6efd' }}>
                      Flag
                    </button>
                    <button type="button" onClick={swipe.closeRow} style={{ width: '56px', border: 0, color: 'var(--bs-gray-900)', background: '#ffe69c' }}>
                      Archive
                    </button>
                    <button type="button" onClick={swipe.closeRow} style={{ width: '56px', border: 0, color: 'var(--bs-white)', background: '#dc3545' }}>
                      Delete
                    </button>
                  </div>

                  <div
                    role="button"
                    tabIndex={0}
                    className="position-relative px-3 py-3 w-100 d-block"
                    style={{
                      transform: 'translateX(' + swipe.getTranslateX(item.id) + 'px)',
                      transition: isDragging ? 'none' : 'transform 180ms ease',
                      background: 'var(--bs-white)',
                      cursor: 'grab',
                      touchAction: 'pan-y',
                      userSelect: 'none',
                    }}
                    {...swipe.getPointerHandlers(item.id)}
                    onKeyDown={swipe.getKeyboardHandler(item.id)}
                  >
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div>
                        <strong className="d-block">{item.title}</strong>
                        <small className="text-muted">{item.subtitle}</small>
                      </div>
                      <strong className={item.amount.startsWith('+') ? 'text-success' : 'text-gray-800'}>
                        {item.amount}
                      </strong>
                    </div>
                  </div>
                </DListGroup.Item>
              );
            })}
          </DListGroup>
        </div>
      </div>
    </MobileViewport>
  );
}`;

const ICON_ONLY_SOURCE = String.raw`import {
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import { DButtonIcon, DListGroup } from '../../src';

type UseSwipeableRowsOptions = { actionsWidth: number; openThreshold: number; };
type SwipeListItem = { id: string; title: string; subtitle: string; amount: string; };

function useSwipeableRows({ actionsWidth, openThreshold }: UseSwipeableRowsOptions) {
  const [openRowId, setOpenRowId] = useState<string | null>(null);
  const [draggingRowId, setDraggingRowId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const dragOriginXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  const getTranslateX = (rowId: string) => {
    if (draggingRowId === rowId) return dragOffset;
    if (openRowId === rowId) return -actionsWidth;
    return 0;
  };
  const isDragging = (rowId: string) => draggingRowId === rowId;
  const closeRow = () => setOpenRowId(null);
  const openRow = (rowId: string) => setOpenRowId(rowId);

  const startDrag = (rowId: string, clientX: number) => {
    setDraggingRowId(rowId);
    dragOriginXRef.current = clientX;
    dragStartOffsetRef.current = openRowId === rowId ? -actionsWidth : 0;
    if (openRowId && openRowId !== rowId) setOpenRowId(null);
  };

  const updateDrag = (clientX: number) => {
    if (!draggingRowId) return;
    const delta = clientX - dragOriginXRef.current;
    setDragOffset(Math.max(-actionsWidth, Math.min(0, dragStartOffsetRef.current + delta)));
  };

  const endDrag = () => {
    if (!draggingRowId) return;
    setOpenRowId(Math.abs(dragOffset) > openThreshold ? draggingRowId : null);
    setDraggingRowId(null);
    setDragOffset(0);
  };

  const getPointerHandlers = (rowId: string) => ({
    onPointerDown: (e: PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      startDrag(rowId, e.clientX);
    },
    onPointerMove: (e: PointerEvent<HTMLDivElement>) => {
      if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
      updateDrag(e.clientX);
    },
    onPointerUp: (e: PointerEvent<HTMLDivElement>) => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
      endDrag();
    },
    onPointerCancel: (e: PointerEvent<HTMLDivElement>) => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
      endDrag();
    },
  });

  const getKeyboardHandler = (rowId: string) => (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') openRow(rowId);
    if (e.key === 'ArrowRight' || e.key === 'Escape') closeRow();
  };

  return { closeRow, getKeyboardHandler, getPointerHandlers, getTranslateX, isDragging };
}

const SWIPE_LIST_ITEMS: SwipeListItem[] = [
  { id: 'tx-1', title: 'Netflix subscription', subtitle: 'Today, 9:45 AM', amount: '-$17.99' },
  { id: 'tx-2', title: 'Coffee Store', subtitle: 'Today, 8:02 AM', amount: '-$4.50' },
  { id: 'tx-3', title: 'Incoming transfer', subtitle: 'Yesterday, 7:31 PM', amount: '+$1,250.00' },
  { id: 'tx-4', title: 'Electric bill', subtitle: 'Yesterday, 12:14 PM', amount: '-$86.30' },
];

const ICON_ONLY_ACTIONS_WIDTH = 144;
const SWIPE_OPEN_THRESHOLD = 56;

function IconOnlySwipeActionsList() {
  const swipe = useSwipeableRows({
    actionsWidth: ICON_ONLY_ACTIONS_WIDTH,
    openThreshold: SWIPE_OPEN_THRESHOLD,
  });

  return (
    <MobileViewport>
      <div className="h-100 bg-gray-25 d-flex flex-column">
        <div className="p-4 pb-2">
          <h5 className="mb-1">Recent activity</h5>
          <small className="text-muted">Swipe left to reveal icon-only actions</small>
        </div>
        <div className="px-3 pb-3 overflow-auto no-visible-scroll" style={{ minHeight: 0 }}>
          <DListGroup flush className="gap-1">
            {SWIPE_LIST_ITEMS.map((item) => {
              const isDragging = swipe.isDragging(item.id);
              return (
                <DListGroup.Item
                  key={item.id}
                  className="position-relative rounded-2 overflow-hidden bg-white border p-0"
                >
                  <div
                    aria-hidden="true"
                    className="position-absolute top-0 bottom-0 end-0 d-flex align-items-center justify-content-around px-2 bg-gray-50"
                    style={{
                      boxShadow: '12px 0 24px -15px rgba(0,0,0,.3) inset',
                      width: '144px',
                    }}
                  >
                    <DButtonIcon
                      icon="Flag"
                      color="primary"
                      variant="link"
                      aria-label={'Flag ' + item.title}
                      onClick={swipe.closeRow}
                    />
                    <DButtonIcon
                      icon="Archive"
                      color="warning"
                      variant="link"
                      aria-label={'Archive ' + item.title}
                      onClick={swipe.closeRow}
                    />
                    <DButtonIcon
                      icon="Trash2"
                      color="danger"
                      variant="link"
                      aria-label={'Delete ' + item.title}
                      onClick={swipe.closeRow}
                    />
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    className="position-relative px-3 py-3 w-100 d-block"
                    style={{
                      transform: 'translateX(' + swipe.getTranslateX(item.id) + 'px)',
                      transition: isDragging ? 'none' : 'transform 180ms ease',
                      background: 'var(--bs-white)',
                      cursor: 'grab',
                      touchAction: 'pan-y',
                      userSelect: 'none',
                    }}
                    {...swipe.getPointerHandlers(item.id)}
                    onKeyDown={swipe.getKeyboardHandler(item.id)}
                  >
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div>
                        <strong className="d-block">{item.title}</strong>
                        <small className="text-muted">{item.subtitle}</small>
                      </div>
                      <strong className={item.amount.startsWith('+') ? 'text-success' : 'text-gray-800'}>
                        {item.amount}
                      </strong>
                    </div>
                  </div>
                </DListGroup.Item>
              );
            })}
          </DListGroup>
        </div>
      </div>
    </MobileViewport>
  );
}`;

const DROPDOWN_SOURCE = String.raw`import {
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import {
  DDropdown,
  DIcon,
  DListGroup,
} from '../../src';

type UseSwipeableRowsOptions = { actionsWidth: number; openThreshold: number; };
type SwipeListItem = { id: string; title: string; subtitle: string; amount: string; };

function useSwipeableRows({ actionsWidth, openThreshold }: UseSwipeableRowsOptions) {
  const [openRowId, setOpenRowId] = useState<string | null>(null);
  const [draggingRowId, setDraggingRowId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const dragOriginXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  const getTranslateX = (rowId: string) => {
    if (draggingRowId === rowId) return dragOffset;
    if (openRowId === rowId) return -actionsWidth;
    return 0;
  };
  const isDragging = (rowId: string) => draggingRowId === rowId;
  const closeRow = () => setOpenRowId(null);
  const openRow = (rowId: string) => setOpenRowId(rowId);

  const startDrag = (rowId: string, clientX: number) => {
    setDraggingRowId(rowId);
    dragOriginXRef.current = clientX;
    dragStartOffsetRef.current = openRowId === rowId ? -actionsWidth : 0;
    if (openRowId && openRowId !== rowId) setOpenRowId(null);
  };

  const updateDrag = (clientX: number) => {
    if (!draggingRowId) return;
    const delta = clientX - dragOriginXRef.current;
    setDragOffset(Math.max(-actionsWidth, Math.min(0, dragStartOffsetRef.current + delta)));
  };

  const endDrag = () => {
    if (!draggingRowId) return;
    setOpenRowId(Math.abs(dragOffset) > openThreshold ? draggingRowId : null);
    setDraggingRowId(null);
    setDragOffset(0);
  };

  const getPointerHandlers = (rowId: string) => ({
    onPointerDown: (e: PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      startDrag(rowId, e.clientX);
    },
    onPointerMove: (e: PointerEvent<HTMLDivElement>) => {
      if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
      updateDrag(e.clientX);
    },
    onPointerUp: (e: PointerEvent<HTMLDivElement>) => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
      endDrag();
    },
    onPointerCancel: (e: PointerEvent<HTMLDivElement>) => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
      endDrag();
    },
  });

  const getKeyboardHandler = (rowId: string) => (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') openRow(rowId);
    if (e.key === 'ArrowRight' || e.key === 'Escape') closeRow();
  };

  return { closeRow, getKeyboardHandler, getPointerHandlers, getTranslateX, isDragging };
}

const SWIPE_LIST_ITEMS: SwipeListItem[] = [
  { id: 'tx-1', title: 'Netflix subscription', subtitle: 'Today, 9:45 AM', amount: '-$17.99' },
  { id: 'tx-2', title: 'Coffee Store', subtitle: 'Today, 8:02 AM', amount: '-$4.50' },
  { id: 'tx-3', title: 'Incoming transfer', subtitle: 'Yesterday, 7:31 PM', amount: '+$1,250.00' },
  { id: 'tx-4', title: 'Electric bill', subtitle: 'Yesterday, 12:14 PM', amount: '-$86.30' },
];

const DROPDOWN_ACTIONS_WIDTH = 172;
const SWIPE_OPEN_THRESHOLD = 56;

function SwipeActionsWithDropdownList() {
  const swipe = useSwipeableRows({
    actionsWidth: DROPDOWN_ACTIONS_WIDTH,
    openThreshold: SWIPE_OPEN_THRESHOLD,
  });

  return (
    <MobileViewport>
      <div className="h-100 bg-gray-25 d-flex flex-column">
        <div className="p-4 pb-2">
          <h5 className="mb-1">Recent activity</h5>
          <small className="text-muted">Swipe left to reveal quick actions and a dropdown menu</small>
        </div>
        <div className="px-3 pb-3 overflow-auto no-visible-scroll" style={{ minHeight: 0 }}>
          <DListGroup>
            {SWIPE_LIST_ITEMS.map((item) => {
              const isDragging = swipe.isDragging(item.id);
              return (
                <DListGroup.Item
                  key={item.id}
                  className="position-relative overflow-hidden p-0"
                >
                  <div
                    aria-hidden="true"
                    className="position-absolute top-0 bottom-0 end-0 d-flex align-items-center justify-content-between px-2 bg-gray-50"
                    style={{
                      boxShadow: '12px 0 24px -15px rgba(0,0,0,.3) inset',
                      width: '172px',
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={swipe.closeRow}
                    >
                      <span className="d-inline-flex align-items-center gap-1">
                        <DIcon icon="Check" size="0.9rem" />
                        Done
                      </span>
                    </button>
                    <DDropdown
                      asPortal
                      className="d-flex align-items-center"
                      classNameMenu="shadow-sm"
                      actions={[
                        { label: 'Schedule', icon: 'CalendarClock', onClick: swipe.closeRow },
                        { label: 'Mark as reviewed', icon: 'BadgeCheck', onClick: swipe.closeRow },
                        { isDivider: true, label: '' },
                        { label: 'Delete', icon: 'Trash2', color: 'danger', onClick: swipe.closeRow },
                      ]}
                    />
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    className="position-relative px-3 py-3 w-100 d-block"
                    style={{
                      transform: 'translateX(' + swipe.getTranslateX(item.id) + 'px)',
                      transition: isDragging ? 'none' : 'transform 180ms ease',
                      background: 'var(--bs-white)',
                      cursor: 'grab',
                      touchAction: 'pan-y',
                      userSelect: 'none',
                    }}
                    {...swipe.getPointerHandlers(item.id)}
                    onKeyDown={swipe.getKeyboardHandler(item.id)}
                  >
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div>
                        <strong className="d-block">{item.title}</strong>
                        <small className="text-muted">{item.subtitle}</small>
                      </div>
                      <strong className={item.amount.startsWith('+') ? 'text-success' : 'text-gray-800'}>
                        {item.amount}
                      </strong>
                    </div>
                  </div>
                </DListGroup.Item>
              );
            })}
          </DListGroup>
        </div>
      </div>
    </MobileViewport>
  );
}`;

function SwipeActionsList() {
  const swipe = useSwipeableRows({
    actionsWidth: SWIPE_ACTIONS_WIDTH,
    openThreshold: SWIPE_OPEN_THRESHOLD,
  });

  return (
    <MobileViewport>
      <div className="h-100 bg-gray-25 d-flex flex-column">
        <div className="p-4 pb-2">
          <h5 className="mb-1">Recent activity</h5>
          <small className="text-muted">Swipe each item left to reveal quick actions</small>
        </div>

        <div className="px-3 pb-3 overflow-auto no-visible-scroll" style={{ minHeight: 0 }}>
          <DListGroup flush className="gap-1">
            {SWIPE_LIST_ITEMS.map((item) => {
              const isDragging = swipe.isDragging(item.id);

              return (
                <DListGroup.Item
                  key={item.id}
                  className="position-relative rounded-2 overflow-hidden bg-white border p-0"
                >
                  <div
                    aria-hidden="true"
                    className="position-absolute top-0 bottom-0 end-0 d-flex align-items-stretch px-2 bg-gray-50"
                    style={{
                      boxShadow: '12px 0 24px -15px rgba(0,0,0,.3) inset',
                      width: `${SWIPE_ACTIONS_WIDTH}px`,
                    }}
                  >
                    <button
                      type="button"
                      onClick={swipe.closeRow}
                      style={{
                        width: '56px',
                        border: 0,
                        color: 'var(--bs-white)',
                        background: '#0d6efd',
                      }}
                    >
                      Flag
                    </button>
                    <button
                      type="button"
                      onClick={swipe.closeRow}
                      style={{
                        width: '56px',
                        border: 0,
                        color: 'var(--bs-gray-900)',
                        background: '#ffe69c',
                      }}
                    >
                      Archive
                    </button>
                    <button
                      type="button"
                      onClick={swipe.closeRow}
                      style={{
                        width: '56px',
                        border: 0,
                        color: 'var(--bs-white)',
                        background: '#dc3545',
                      }}
                    >
                      Delete
                    </button>
                  </div>

                  <div
                    role="button"
                    tabIndex={0}
                    className="position-relative px-3 py-3 w-100 d-block"
                    style={{
                      transform: `translateX(${swipe.getTranslateX(item.id)}px)`,
                      transition: isDragging ? 'none' : 'transform 180ms ease',
                      background: 'var(--bs-white)',
                      cursor: 'grab',
                      touchAction: 'pan-y',
                      userSelect: 'none',
                    }}
                    {...swipe.getPointerHandlers(item.id)}
                    onKeyDown={swipe.getKeyboardHandler(item.id)}
                  >
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div>
                        <strong className="d-block">{item.title}</strong>
                        <small className="text-muted">{item.subtitle}</small>
                      </div>
                      <strong className={item.amount.startsWith('+') ? 'text-success' : 'text-gray-800'}>
                        {item.amount}
                      </strong>
                    </div>
                  </div>
                </DListGroup.Item>
              );
            })}
          </DListGroup>
        </div>
      </div>
    </MobileViewport>
  );
}

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive list item swipe pattern. Drag a row to the left to expose contextual actions (flag, archive, delete). Only one row remains open at a time.',
      },
      source: {
        code: SWIPE_ACTIONS_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => <SwipeActionsList />,
};

const ICON_ONLY_ACTIONS_WIDTH = 144;

function IconOnlySwipeActionsList() {
  const swipe = useSwipeableRows({
    actionsWidth: ICON_ONLY_ACTIONS_WIDTH,
    openThreshold: SWIPE_OPEN_THRESHOLD,
  });

  return (
    <MobileViewport>
      <div className="h-100 bg-gray-25 d-flex flex-column">
        <div className="p-4 pb-2">
          <h5 className="mb-1">Recent activity</h5>
          <small className="text-muted">Swipe left to reveal icon-only actions</small>
        </div>

        <div className="px-3 pb-3 overflow-auto no-visible-scroll" style={{ minHeight: 0 }}>
          <DListGroup flush className="gap-1">
            {SWIPE_LIST_ITEMS.map((item) => {
              const isDragging = swipe.isDragging(item.id);

              return (
                <DListGroup.Item
                  key={item.id}
                  className="position-relative rounded-2 overflow-hidden bg-white border p-0"
                >
                  <div
                    aria-hidden="true"
                    className="position-absolute top-0 bottom-0 end-0 d-flex align-items-center justify-content-around px-2 bg-gray-50"
                    style={{
                      boxShadow: '12px 0 24px -15px rgba(0,0,0,.3) inset',
                      width: `${ICON_ONLY_ACTIONS_WIDTH}px`,
                    }}
                  >
                    <DButtonIcon
                      icon="Flag"
                      color="primary"
                      variant="link"
                      aria-label={`Flag ${item.title}`}
                      onClick={swipe.closeRow}
                    />
                    <DButtonIcon
                      icon="Archive"
                      color="warning"
                      variant="link"
                      aria-label={`Archive ${item.title}`}
                      onClick={swipe.closeRow}
                    />
                    <DButtonIcon
                      icon="Trash2"
                      color="danger"
                      variant="link"
                      aria-label={`Delete ${item.title}`}
                      onClick={swipe.closeRow}
                    />
                  </div>

                  <div
                    role="button"
                    tabIndex={0}
                    className="position-relative px-3 py-3 w-100 d-block"
                    style={{
                      transform: `translateX(${swipe.getTranslateX(item.id)}px)`,
                      transition: isDragging ? 'none' : 'transform 180ms ease',
                      background: 'var(--bs-white)',
                      cursor: 'grab',
                      touchAction: 'pan-y',
                      userSelect: 'none',
                    }}
                    {...swipe.getPointerHandlers(item.id)}
                    onKeyDown={swipe.getKeyboardHandler(item.id)}
                  >
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div>
                        <strong className="d-block">{item.title}</strong>
                        <small className="text-muted">{item.subtitle}</small>
                      </div>
                      <strong className={item.amount.startsWith('+') ? 'text-success' : 'text-gray-800'}>
                        {item.amount}
                      </strong>
                    </div>
                  </div>
                </DListGroup.Item>
              );
            })}
          </DListGroup>
        </div>
      </div>
    </MobileViewport>
  );
}

const DROPDOWN_ACTIONS_WIDTH = 172;

function SwipeActionsWithDropdownList() {
  const swipe = useSwipeableRows({
    actionsWidth: DROPDOWN_ACTIONS_WIDTH,
    openThreshold: SWIPE_OPEN_THRESHOLD,
  });

  return (
    <MobileViewport>
      <div className="h-100 bg-gray-25 d-flex flex-column">
        <div className="p-4 pb-2">
          <h5 className="mb-1">Recent activity</h5>
          <small className="text-muted">Swipe left to reveal quick actions and a dropdown menu</small>
        </div>

        <div className="px-3 pb-3 overflow-auto no-visible-scroll" style={{ minHeight: 0 }}>
          <DListGroup>
            {SWIPE_LIST_ITEMS.map((item) => {
              const isDragging = swipe.isDragging(item.id);

              return (
                <DListGroup.Item
                  key={item.id}
                  className="position-relative overflow-hidden p-0"
                >
                  <div
                    aria-hidden="true"
                    className="position-absolute top-0 bottom-0 end-0 d-flex align-items-center justify-content-between px-2 bg-gray-50"
                    style={{
                      boxShadow: '12px 0 24px -15px rgba(0,0,0,.3) inset',
                      width: `${DROPDOWN_ACTIONS_WIDTH}px`,
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={swipe.closeRow}
                    >
                      <span className="d-inline-flex align-items-center gap-1">
                        <DIcon icon="Check" size="0.9rem" />
                        Done
                      </span>
                    </button>

                    <DDropdown
                      asPortal
                      className="d-flex align-items-center"
                      classNameMenu="shadow-sm"
                      actions={[
                        {
                          label: 'Schedule',
                          icon: 'CalendarClock',
                          onClick: swipe.closeRow,
                        },
                        {
                          label: 'Mark as reviewed',
                          icon: 'BadgeCheck',
                          onClick: swipe.closeRow,
                        },
                        { isDivider: true, label: '' },
                        {
                          label: 'Delete',
                          icon: 'Trash2',
                          color: 'danger',
                          onClick: swipe.closeRow,
                        },
                      ]}
                    />
                  </div>

                  <div
                    role="button"
                    tabIndex={0}
                    className="position-relative px-3 py-3 w-100 d-block"
                    style={{
                      transform: `translateX(${swipe.getTranslateX(item.id)}px)`,
                      transition: isDragging ? 'none' : 'transform 180ms ease',
                      background: 'var(--bs-white)',
                      cursor: 'grab',
                      touchAction: 'pan-y',
                      userSelect: 'none',
                    }}
                    {...swipe.getPointerHandlers(item.id)}
                    onKeyDown={swipe.getKeyboardHandler(item.id)}
                  >
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div>
                        <strong className="d-block">{item.title}</strong>
                        <small className="text-muted">{item.subtitle}</small>
                      </div>
                      <strong className={item.amount.startsWith('+') ? 'text-success' : 'text-gray-800'}>
                        {item.amount}
                      </strong>
                    </div>
                  </div>
                </DListGroup.Item>
              );
            })}
          </DListGroup>
        </div>
      </div>
    </MobileViewport>
  );
}

export const IconOnlyActions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Swipe actions variant using only icons. This reduces visual noise and supports compact quick actions.',
      },
      source: {
        code: ICON_ONLY_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => <IconOnlySwipeActionsList />,
};

export const ActionsWithDropdown: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Swipe actions variant with a primary quick action plus a DDropdown button for secondary actions.',
      },
      source: {
        code: DROPDOWN_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => <SwipeActionsWithDropdownList />,
};
