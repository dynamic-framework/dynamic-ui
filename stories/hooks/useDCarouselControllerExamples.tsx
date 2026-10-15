import { useRef, useState } from 'react';

import {
  DButton,
  DCarousel,
  DContextProvider,
} from '../../src';
import useDCarouselController from '../../src/components/DCarousel/useDCarouselController';

import type { DCarouselHandle } from '../../src/components/DCarousel/DCarousel';

const SLIDES = ['Summary', 'Movements', 'Statements', 'Settings'];

function slides() {
  return SLIDES.map((title) => (
    <DCarousel.Slide key={title}>
      <div
        className="d-flex align-items-center justify-content-center rounded bg-primary-subtle text-primary fw-semibold h-100"
        style={{ minHeight: 140 }}
      >
        {title}
      </div>
    </DCarousel.Slide>
  ));
}

/**
 * The controller, with the controls the library ships.
 *
 * `DCarousel.Prev`, `.Next`, `.Pagination` and `.Autoplay` all take a
 * controller, so moving them out of the carousel costs no styling and no
 * accessibility work.
 */
export function ExampleBuiltInControls() {
  const controller = useDCarouselController();

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="m-0">Account</h5>
        <div className="d-flex align-items-center gap-2">
          <DCarousel.Prev controller={controller} />
          <DCarousel.Next controller={controller} />
        </div>
      </div>

      <DCarousel
        label="Account sections"
        controller={controller}
        perPage={{ xs: 1, md: 2 }}
        gap={4}
        arrows={false}
        pagination={false}
      >
        {slides()}
      </DCarousel>

      <DCarousel.Pagination controller={controller} />
    </div>
  );
}

/**
 * The controller's state, driving markup the consumer owns.
 *
 * Everything the built-in controls read is published: `canPrev`, `canNext`,
 * `activeIndex`, `activePage`, `pageCount`, `connected`.
 */
export function ExampleOwnMarkup() {
  const controller = useDCarouselController();

  return (
    <div className="d-flex flex-column gap-3">
      <DCarousel
        label="Account sections"
        controller={controller}
        perPage={1}
        gap={4}
        arrows={false}
        pagination={false}
      >
        {slides()}
      </DCarousel>

      <div className="d-flex align-items-center gap-2">
        <DButton
          text="Back"
          variant="outline"
          color="secondary"
          disabled={!controller.canPrev}
          onClick={controller.prev}
        />
        <DButton
          text="Forward"
          color="primary"
          disabled={!controller.canNext}
          onClick={controller.next}
        />
        <span className="text-muted small ms-auto">
          {controller.connected
            ? `${SLIDES[controller.activeIndex]} — ${controller.activePage + 1} of ${controller.pageCount}`
            : 'No carousel attached'}
        </span>
      </div>
    </div>
  );
}

/**
 * A thumbnail strip driving a main carousel.
 *
 * `goToSlide` takes an index among the REAL slides — clones are not counted —
 * so the number passed is the one written in the JSX.
 */
export function ExampleThumbnails() {
  const controller = useDCarouselController();

  return (
    <div className="d-flex flex-column gap-3">
      <DCarousel
        label="Account sections"
        controller={controller}
        perPage={1}
        gap={4}
        arrows={false}
        pagination={false}
      >
        {slides()}
      </DCarousel>

      <div className="d-flex gap-2">
        {SLIDES.map((title, index) => (
          <DButton
            key={title}
            text={title}
            size="sm"
            variant={controller.activeIndex === index ? undefined : 'outline'}
            color={controller.activeIndex === index ? 'primary' : 'secondary'}
            onClick={() => controller.goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * The `ref` handle, for a one-off imperative nudge.
 *
 * Enough when nothing needs to RENDER from the carousel's state. A ref carries
 * no state and never re-renders its holder, so a button that has to disable
 * itself at the end of the strip needs the controller instead.
 */
export function ExampleRefHandle() {
  const ref = useRef<DCarouselHandle>(null);
  const [log, setLog] = useState('');

  return (
    <div className="d-flex flex-column gap-3">
      <DCarousel
        ref={ref}
        label="Account sections"
        perPage={1}
        gap={4}
        onSlideChange={(index) => setLog(SLIDES[index] ?? '')}
      >
        {slides()}
      </DCarousel>

      <div className="d-flex align-items-center gap-2">
        <DButton text="Jump to the last" variant="outline" color="secondary" onClick={() => ref.current?.goToSlide(SLIDES.length - 1)} />
        <DButton text="Back to the first" variant="outline" color="secondary" onClick={() => ref.current?.goToSlide(0)} />
        <span className="text-muted small ms-auto">{log && `onSlideChange: ${log}`}</span>
      </div>
    </div>
  );
}

export function ExampleRoot() {
  return (
    <DContextProvider>
      <div className="d-flex flex-column gap-5 p-3">
        <ExampleBuiltInControls />
        <ExampleOwnMarkup />
        <ExampleThumbnails />
        <ExampleRefHandle />
      </div>
    </DContextProvider>
  );
}
