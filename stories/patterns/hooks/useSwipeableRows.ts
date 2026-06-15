import {
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';

type UseSwipeableRowsOptions = {
  actionsWidth: number;
  openThreshold: number;
};

export function useSwipeableRows({
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
