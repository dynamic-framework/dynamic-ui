import createCarouselController, { IDLE } from './controller';

import type { DCarouselActions, DCarouselPublishedState } from './controller';

const state = (over: Partial<DCarouselPublishedState> = {}): DCarouselPublishedState => ({
  activeIndex: 0,
  pageCount: 3,
  activePage: 0,
  canPrev: false,
  canNext: true,
  playing: false,
  paused: false,
  ...over,
});

const actions = (): jest.Mocked<DCarouselActions> => ({
  next: jest.fn(),
  prev: jest.fn(),
  goToPage: jest.fn(),
  togglePlay: jest.fn(),
});

describe('createCarouselController', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('before anything connects', () => {
    it('should report itself as disconnected', () => {
      const controller = createCarouselController();
      expect(controller.getSnapshot()).toEqual(IDLE);
      expect(controller.getSnapshot().connected).toBe(false);
    });

    /*
     * A controller exists before its carousel mounts and may outlive it, so
     * every action has to survive that. It warns rather than throwing: a stray
     * click is not worth crashing an app over, and silence is the failure mode
     * an id-based connector would have had.
     */
    it('should warn rather than throw when an action is called', () => {
      const controller = createCarouselController();

      expect(() => controller.next()).not.toThrow();
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('next()'));
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('no <DCarousel> connected'));
    });
  });

  describe('connecting', () => {
    it('should publish the connection and the viewport id', () => {
      const controller = createCarouselController();
      controller.connect({ actions: actions(), viewportId: 'vp-1' });

      expect(controller.getSnapshot().connected).toBe(true);
      expect(controller.getSnapshot().viewportId).toBe('vp-1');
    });

    it('should forward each action to the connected carousel', () => {
      const controller = createCarouselController();
      const link = actions();
      controller.connect({ actions: link, viewportId: 'vp-1' });

      controller.next();
      controller.prev();
      controller.goToPage(2);
      controller.togglePlay();

      expect(link.next).toHaveBeenCalledTimes(1);
      expect(link.prev).toHaveBeenCalledTimes(1);
      expect(link.goToPage).toHaveBeenCalledWith(2);
      expect(link.togglePlay).toHaveBeenCalledTimes(1);
      expect(warn).not.toHaveBeenCalled();
    });

    /* Two carousels on one controller is a programming error, not a feature. */
    it('should warn when a second carousel connects', () => {
      const controller = createCarouselController();
      controller.connect({ actions: actions(), viewportId: 'vp-1' });
      controller.connect({ actions: actions(), viewportId: 'vp-2' });

      expect(warn).toHaveBeenCalledWith(expect.stringContaining('two <DCarousel>s'));
    });

    it('should go back to idle when the carousel disconnects', () => {
      const controller = createCarouselController();
      const disconnect = controller.connect({ actions: actions(), viewportId: 'vp-1' });
      controller.publish(state({ activePage: 2 }));

      disconnect();

      expect(controller.getSnapshot()).toEqual(IDLE);
    });

    /*
     * React can run a new effect before the previous cleanup on a remount, so
     * a blind `link = null` in the teardown would disconnect the carousel that
     * had just connected and leave every control inert.
     */
    it('should ignore a stale teardown after a remount', () => {
      const controller = createCarouselController();
      const disconnectFirst = controller.connect({ actions: actions(), viewportId: 'vp-1' });
      const second = actions();
      controller.connect({ actions: second, viewportId: 'vp-2' });

      disconnectFirst();

      expect(controller.getSnapshot().connected).toBe(true);
      expect(controller.getSnapshot().viewportId).toBe('vp-2');
      controller.next();
      expect(second.next).toHaveBeenCalledTimes(1);
    });
  });

  describe('the snapshot', () => {
    it('should carry what was published', () => {
      const controller = createCarouselController();
      controller.connect({ actions: actions(), viewportId: 'vp-1' });
      controller.publish(state({ activeIndex: 4, activePage: 2, canPrev: true }));

      expect(controller.getSnapshot()).toMatchObject({
        activeIndex: 4, activePage: 2, canPrev: true, pageCount: 3,
      });
    });

    /*
     * `useSyncExternalStore` compares snapshots by IDENTITY. The carousel
     * publishes on every scroll event and most of them change nothing, so a
     * fresh object per publish would re-render every control throughout a
     * single flick.
     */
    it('should keep the same snapshot when nothing changed', () => {
      const controller = createCarouselController();
      controller.connect({ actions: actions(), viewportId: 'vp-1' });
      controller.publish(state());

      const first = controller.getSnapshot();
      controller.publish(state());

      expect(controller.getSnapshot()).toBe(first);
    });

    it('should replace the snapshot when a field changed', () => {
      const controller = createCarouselController();
      controller.connect({ actions: actions(), viewportId: 'vp-1' });
      controller.publish(state());

      const first = controller.getSnapshot();
      controller.publish(state({ activePage: 1 }));

      expect(controller.getSnapshot()).not.toBe(first);
      expect(controller.getSnapshot().activePage).toBe(1);
    });

    it('should be frozen, so a control cannot write to it', () => {
      const controller = createCarouselController();
      controller.connect({ actions: actions(), viewportId: 'vp-1' });
      controller.publish(state());

      expect(Object.isFrozen(controller.getSnapshot())).toBe(true);
    });
  });

  describe('subscribing', () => {
    it('should notify on a change and not on a no-op', () => {
      const controller = createCarouselController();
      controller.connect({ actions: actions(), viewportId: 'vp-1' });
      const listener = jest.fn();
      controller.subscribe(listener);

      controller.publish(state({ activePage: 1 }));
      expect(listener).toHaveBeenCalledTimes(1);

      controller.publish(state({ activePage: 1 }));
      expect(listener).toHaveBeenCalledTimes(1);
    });

    it('should stop notifying once unsubscribed', () => {
      const controller = createCarouselController();
      controller.connect({ actions: actions(), viewportId: 'vp-1' });
      const listener = jest.fn();
      const unsubscribe = controller.subscribe(listener);

      unsubscribe();
      controller.publish(state({ activePage: 1 }));

      expect(listener).not.toHaveBeenCalled();
    });
  });

  /*
   * A consumer can put any of these in a dependency array or hand one to a
   * memoised button. If they changed identity, the hook's returned object —
   * which is new on every move, because that is what re-renders the controls —
   * would take them with it and reconnect the carousel on every scroll.
   */
  describe('stability', () => {
    it('should keep every function identity across publishes', () => {
      const controller = createCarouselController();
      const before = {
        next: controller.next,
        prev: controller.prev,
        goToPage: controller.goToPage,
        togglePlay: controller.togglePlay,
        connect: controller.connect,
        publish: controller.publish,
        subscribe: controller.subscribe,
      };

      controller.connect({ actions: actions(), viewportId: 'vp-1' });
      controller.publish(state({ activePage: 2 }));

      expect(controller.next).toBe(before.next);
      expect(controller.prev).toBe(before.prev);
      expect(controller.goToPage).toBe(before.goToPage);
      expect(controller.togglePlay).toBe(before.togglePlay);
      expect(controller.connect).toBe(before.connect);
      expect(controller.publish).toBe(before.publish);
      expect(controller.subscribe).toBe(before.subscribe);
    });
  });
});
