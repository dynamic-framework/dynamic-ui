/// <reference types="@testing-library/jest-dom" />

import loadDeferredMedia from './lazyMedia';

const host = (markup: string) => {
  const root = document.createElement('div');
  root.innerHTML = markup;
  return root;
};

describe('loadDeferredMedia', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => warn.mockRestore());

  it('should move data-src onto src', () => {
    const root = host('<img data-src="hero.jpg" width="8" height="4" alt="">');
    expect(loadDeferredMedia(root)).toBe(1);

    const image = root.querySelector('img');
    expect(image).toHaveAttribute('src', 'hero.jpg');
    expect(image).not.toHaveAttribute('data-src');
  });

  it('should move srcset and sizes as well', () => {
    const root = host(
      '<img data-src="a.jpg" data-srcset="a@2x.jpg 2x" data-sizes="50vw" width="8" height="4" alt="">',
    );
    loadDeferredMedia(root);

    const image = root.querySelector('img');
    expect(image).toHaveAttribute('srcset', 'a@2x.jpg 2x');
    expect(image).toHaveAttribute('sizes', '50vw');
  });

  /*
   * A browser picks from `srcset` when both are present, so setting `src`
   * first can start a download it then throws away.
   */
  it('should set srcset before src', () => {
    const root = host('<img data-src="a.jpg" data-srcset="a@2x.jpg 2x" width="8" height="4" alt="">');
    const image = root.querySelector('img') as HTMLImageElement;
    const order: string[] = [];
    jest.spyOn(image, 'setAttribute').mockImplementation((name) => { order.push(name); });

    loadDeferredMedia(root);

    expect(order.indexOf('srcset')).toBeLessThan(order.indexOf('src'));
  });

  /* Not just images: an iframe's cost is its `src` too. */
  it('should work on anything with a deferred attribute', () => {
    const root = host('<iframe data-src="map.html" title="Map"></iframe>');
    loadDeferredMedia(root);

    expect(root.querySelector('iframe')).toHaveAttribute('src', 'map.html');
  });

  it('should move a video poster', () => {
    const root = host('<video data-poster="still.jpg"></video>');
    loadDeferredMedia(root);

    expect(root.querySelector('video')).toHaveAttribute('poster', 'still.jpg');
  });

  /*
   * Idempotent by construction: the attribute is removed as it is moved, so
   * the selector stops matching rather than a flag nobody can see.
   */
  it('should do nothing the second time', () => {
    const root = host('<img data-src="hero.jpg" width="8" height="4" alt="">');

    expect(loadDeferredMedia(root)).toBe(1);
    expect(loadDeferredMedia(root)).toBe(0);
  });

  it('should leave an ordinary image alone', () => {
    const root = host('<img src="hero.jpg" loading="lazy" alt="">');

    expect(loadDeferredMedia(root)).toBe(0);
    expect(root.querySelector('img')).toHaveAttribute('src', 'hero.jpg');
  });

  /*
   * The trap this feature brings: an image with no reserved space pushes the
   * slide around when the bytes arrive. Nothing throws, and the jump looks
   * like a styling bug rather than a missing attribute.
   */
  describe('the layout-shift warning', () => {
    it('should warn when a deferred image has no dimensions', () => {
      loadDeferredMedia(host('<img data-src="hero.jpg" alt="">'));

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('no width/height'),
        expect.anything(),
      );
    });

    it('should stay quiet when width and height are given', () => {
      loadDeferredMedia(host('<img data-src="hero.jpg" width="8" height="4" alt="">'));
      expect(warn).not.toHaveBeenCalled();
    });

    it('should stay quiet when an aspect-ratio reserves the space', () => {
      loadDeferredMedia(host('<img data-src="hero.jpg" style="aspect-ratio: 16/9" alt="">'));
      expect(warn).not.toHaveBeenCalled();
    });

    /* Only images shift; an iframe has a box already. */
    it('should not warn about an iframe', () => {
      loadDeferredMedia(host('<iframe data-src="map.html" title="Map"></iframe>'));
      expect(warn).not.toHaveBeenCalled();
    });
  });
});
