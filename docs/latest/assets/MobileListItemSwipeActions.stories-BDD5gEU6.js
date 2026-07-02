import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as G}from"./Template-D3iTeei6.js";import{r as l}from"./iframe-DkjceUUU.js";import{D as U}from"./DBox-DyjlUDDM.js";import{a as i}from"./DListGroup-DBRngvnK.js";import{D as Y}from"./DIcon-CBkIH7ym.js";import{D as q}from"./DDropdown-DukZd6cv.js";import{D as b}from"./DButtonIcon-CHyF0fNe.js";import"./index-CYNyJDzm.js";import"./blocks-B0SbRRHM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-p6Xuepxi.js";import"./index-DxZ9-uFP.js";import"./index-CtlKHQhD.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-C9viAbpR.js";import"./DContext-BbaizxMa.js";function h({actionsWidth:n,openThreshold:t}){const[s,d]=l.useState(null),[a,R]=l.useState(null),[y,u]=l.useState(0),D=l.useRef(0),w=l.useRef(0),_=o=>a===o?y:s===o?-n:0,A=o=>a===o,m=()=>{d(null)},f=o=>{d(o)},X=(o,r)=>{R(o),D.current=r,w.current=s===o?-n:0,u(w.current),s&&s!==o&&d(null)},K=o=>{if(!a)return;const r=o-D.current,$=Math.max(-n,Math.min(0,w.current+r));u($)},S=()=>{if(!a)return;const o=Math.abs(y)>t;d(o?a:null),R(null),u(0)};return{closeRow:m,getKeyboardHandler:o=>r=>{r.key==="ArrowLeft"&&f(o),(r.key==="ArrowRight"||r.key==="Escape")&&m(),(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),s===o?m():f(o))},getPointerHandlers:o=>({onPointerDown:r=>{r.currentTarget.setPointerCapture(r.pointerId),X(o,r.clientX)},onPointerMove:r=>{r.currentTarget.hasPointerCapture(r.pointerId)&&K(r.clientX)},onPointerUp:r=>{r.currentTarget.hasPointerCapture(r.pointerId)&&r.currentTarget.releasePointerCapture(r.pointerId),S()},onPointerCancel:r=>{r.currentTarget.hasPointerCapture(r.pointerId)&&r.currentTarget.releasePointerCapture(r.pointerId),S()}}),getTranslateX:_,isDragging:A,openRow:f,openRowId:s}}const I=[{id:"tx-1",title:"Netflix subscription",subtitle:"Today, 9:45 AM",amount:"-$17.99"},{id:"tx-2",title:"Coffee Store",subtitle:"Today, 8:02 AM",amount:"-$4.50"},{id:"tx-3",title:"Incoming transfer",subtitle:"Yesterday, 7:31 PM",amount:"+$1,250.00"},{id:"tx-4",title:"Electric bill",subtitle:"Yesterday, 12:14 PM",amount:"-$86.30"}],he={title:"Patterns/Mobile/List Item Swipe Actions",component:U,parameters:{docs:{page:G,description:{component:"Mobile swipe actions pattern for transactional lists. Swipe each row to reveal contextual actions while keeping a single opened row at a time."}}},tags:["autodocs"]};function x({children:n}){return e.jsx("div",{className:"bg-gray-25 border position-relative overflow-hidden rounded-2",style:{width:"390px",maxWidth:"100%",height:"760px"},children:n})}const O=168,v=56,B=String.raw`import {
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
    setDragOffset(dragStartOffsetRef.current);

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

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (openRowId === rowId) {
        closeRow();
      } else {
        openRow(rowId);
      }
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
                    aria-hidden={swipe.openRowId !== item.id}
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
  );
}`,F=String.raw`import {
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
    setDragOffset(dragStartOffsetRef.current);
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
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openRowId === rowId ? closeRow() : openRow(rowId);
    }
  };

  return {
    closeRow,
    getKeyboardHandler,
    getPointerHandlers,
    getTranslateX,
    isDragging,
    openRowId,
  };
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
                    aria-hidden={swipe.openRowId !== item.id}
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
  );
}`,z=String.raw`import {
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
    setDragOffset(dragStartOffsetRef.current);
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
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openRowId === rowId ? closeRow() : openRow(rowId);
    }
  };

  return {
    closeRow,
    getKeyboardHandler,
    getPointerHandlers,
    getTranslateX,
    isDragging,
    openRowId,
  };
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
                    aria-hidden={swipe.openRowId !== item.id}
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
  );
}`;function V(){const n=h({actionsWidth:O,openThreshold:v});return e.jsx(x,{children:e.jsxs("div",{className:"h-100 bg-gray-25 d-flex flex-column",children:[e.jsxs("div",{className:"p-4 pb-2",children:[e.jsx("h5",{className:"mb-1",children:"Recent activity"}),e.jsx("small",{className:"text-muted",children:"Swipe each item left to reveal quick actions"})]}),e.jsx("div",{className:"px-3 pb-3 overflow-auto no-visible-scroll",style:{minHeight:0},children:e.jsx(i,{flush:!0,className:"gap-1",children:I.map(t=>{const s=n.isDragging(t.id);return e.jsxs(i.Item,{className:"position-relative rounded-2 overflow-hidden bg-white border p-0",children:[e.jsxs("div",{"aria-hidden":n.openRowId!==t.id,className:"position-absolute top-0 bottom-0 end-0 d-flex align-items-stretch px-2 bg-gray-50",style:{boxShadow:"12px 0 24px -15px rgba(0,0,0,.3) inset",width:`${O}px`},children:[e.jsx("button",{type:"button",onClick:n.closeRow,style:{width:"56px",border:0,color:"var(--bs-white)",background:"#0d6efd"},children:"Flag"}),e.jsx("button",{type:"button",onClick:n.closeRow,style:{width:"56px",border:0,color:"var(--bs-gray-900)",background:"#ffe69c"},children:"Archive"}),e.jsx("button",{type:"button",onClick:n.closeRow,style:{width:"56px",border:0,color:"var(--bs-white)",background:"#dc3545"},children:"Delete"})]}),e.jsx("div",{role:"button",tabIndex:0,className:"position-relative px-3 py-3 w-100 d-block",style:{transform:`translateX(${n.getTranslateX(t.id)}px)`,transition:s?"none":"transform 180ms ease",background:"var(--bs-white)",cursor:"grab",touchAction:"pan-y",userSelect:"none"},...n.getPointerHandlers(t.id),onKeyDown:n.getKeyboardHandler(t.id),children:e.jsxs("div",{className:"d-flex justify-content-between align-items-start gap-2",children:[e.jsxs("div",{children:[e.jsx("strong",{className:"d-block",children:t.title}),e.jsx("small",{className:"text-muted",children:t.subtitle})]}),e.jsx("strong",{className:t.amount.startsWith("+")?"text-success":"text-gray-800",children:t.amount})]})})]},t.id)})})})]})})}const c={parameters:{docs:{description:{story:"Interactive list item swipe pattern. Drag a row to the left to expose contextual actions (flag, archive, delete). Only one row remains open at a time."},source:{code:B,language:"tsx"}}},render:()=>e.jsx(V,{})},T=144;function J(){const n=h({actionsWidth:T,openThreshold:v});return e.jsx(x,{children:e.jsxs("div",{className:"h-100 bg-gray-25 d-flex flex-column",children:[e.jsxs("div",{className:"p-4 pb-2",children:[e.jsx("h5",{className:"mb-1",children:"Recent activity"}),e.jsx("small",{className:"text-muted",children:"Swipe left to reveal icon-only actions"})]}),e.jsx("div",{className:"px-3 pb-3 overflow-auto no-visible-scroll",style:{minHeight:0},children:e.jsx(i,{flush:!0,className:"gap-1",children:I.map(t=>{const s=n.isDragging(t.id);return e.jsxs(i.Item,{className:"position-relative rounded-2 overflow-hidden bg-white border p-0",children:[e.jsxs("div",{"aria-hidden":n.openRowId!==t.id,className:"position-absolute top-0 bottom-0 end-0 d-flex align-items-center justify-content-around px-2 bg-gray-50",style:{boxShadow:"12px 0 24px -15px rgba(0,0,0,.3) inset",width:`${T}px`},children:[e.jsx(b,{icon:"Flag",color:"primary",variant:"link","aria-label":`Flag ${t.title}`,onClick:n.closeRow}),e.jsx(b,{icon:"Archive",color:"warning",variant:"link","aria-label":`Archive ${t.title}`,onClick:n.closeRow}),e.jsx(b,{icon:"Trash2",color:"danger",variant:"link","aria-label":`Delete ${t.title}`,onClick:n.closeRow})]}),e.jsx("div",{role:"button",tabIndex:0,className:"position-relative px-3 py-3 w-100 d-block",style:{transform:`translateX(${n.getTranslateX(t.id)}px)`,transition:s?"none":"transform 180ms ease",background:"var(--bs-white)",cursor:"grab",touchAction:"pan-y",userSelect:"none"},...n.getPointerHandlers(t.id),onKeyDown:n.getKeyboardHandler(t.id),children:e.jsxs("div",{className:"d-flex justify-content-between align-items-start gap-2",children:[e.jsxs("div",{children:[e.jsx("strong",{className:"d-block",children:t.title}),e.jsx("small",{className:"text-muted",children:t.subtitle})]}),e.jsx("strong",{className:t.amount.startsWith("+")?"text-success":"text-gray-800",children:t.amount})]})})]},t.id)})})})]})})}const N=172;function Q(){const n=h({actionsWidth:N,openThreshold:v});return e.jsx(x,{children:e.jsxs("div",{className:"h-100 bg-gray-25 d-flex flex-column",children:[e.jsxs("div",{className:"p-4 pb-2",children:[e.jsx("h5",{className:"mb-1",children:"Recent activity"}),e.jsx("small",{className:"text-muted",children:"Swipe left to reveal quick actions and a dropdown menu"})]}),e.jsx("div",{className:"px-3 pb-3 overflow-auto no-visible-scroll",style:{minHeight:0},children:e.jsx(i,{children:I.map(t=>{const s=n.isDragging(t.id);return e.jsxs(i.Item,{className:"position-relative overflow-hidden p-0",children:[e.jsxs("div",{"aria-hidden":n.openRowId!==t.id,className:"position-absolute top-0 bottom-0 end-0 d-flex align-items-center justify-content-between px-2 bg-gray-50",style:{boxShadow:"12px 0 24px -15px rgba(0,0,0,.3) inset",width:`${N}px`},children:[e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:n.closeRow,children:e.jsxs("span",{className:"d-inline-flex align-items-center gap-1",children:[e.jsx(Y,{icon:"Check",size:"0.9rem"}),"Done"]})}),e.jsx(q,{asPortal:!0,className:"d-flex align-items-center",classNameMenu:"shadow-sm",actions:[{label:"Schedule",icon:"CalendarClock",onClick:n.closeRow},{label:"Mark as reviewed",icon:"BadgeCheck",onClick:n.closeRow},{isDivider:!0,label:""},{label:"Delete",icon:"Trash2",color:"danger",onClick:n.closeRow}]})]}),e.jsx("div",{role:"button",tabIndex:0,className:"position-relative px-3 py-3 w-100 d-block",style:{transform:`translateX(${n.getTranslateX(t.id)}px)`,transition:s?"none":"transform 180ms ease",background:"var(--bs-white)",cursor:"grab",touchAction:"pan-y",userSelect:"none"},...n.getPointerHandlers(t.id),onKeyDown:n.getKeyboardHandler(t.id),children:e.jsxs("div",{className:"d-flex justify-content-between align-items-start gap-2",children:[e.jsxs("div",{children:[e.jsx("strong",{className:"d-block",children:t.title}),e.jsx("small",{className:"text-muted",children:t.subtitle})]}),e.jsx("strong",{className:t.amount.startsWith("+")?"text-success":"text-gray-800",children:t.amount})]})})]},t.id)})})})]})})}const g={parameters:{docs:{description:{story:"Swipe actions variant using only icons. This reduces visual noise and supports compact quick actions."},source:{code:F,language:"tsx"}}},render:()=>e.jsx(J,{})},p={parameters:{docs:{description:{story:"Swipe actions variant with a primary quick action plus a DDropdown button for secondary actions."},source:{code:z,language:"tsx"}}},render:()=>e.jsx(Q,{})};var P,E,k;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interactive list item swipe pattern. Drag a row to the left to expose contextual actions (flag, archive, delete). Only one row remains open at a time.'
      },
      source: {
        code: SWIPE_ACTIONS_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <SwipeActionsList />
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var C,H,j;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Swipe actions variant using only icons. This reduces visual noise and supports compact quick actions.'
      },
      source: {
        code: ICON_ONLY_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <IconOnlySwipeActionsList />
}`,...(j=(H=g.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var L,W,M;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Swipe actions variant with a primary quick action plus a DDropdown button for secondary actions.'
      },
      source: {
        code: DROPDOWN_SOURCE,
        language: 'tsx'
      }
    }
  },
  render: () => <SwipeActionsWithDropdownList />
}`,...(M=(W=p.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};const Ie=["Default","IconOnlyActions","ActionsWithDropdown"];export{p as ActionsWithDropdown,c as Default,g as IconOnlyActions,Ie as __namedExportsOrder,he as default};
