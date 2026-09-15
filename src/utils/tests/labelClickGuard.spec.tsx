import type { MouseEvent } from 'react';

import labelClickGuard from '../labelClickGuard';

/**
 * Builds a label holding `inner`, and a click event whose target is the element
 * marked with `data-probe`.
 *
 * jsdom cannot exercise this through a rendered component: its
 * `isInteractiveContent` counts any element with a `tabindex` as interactive
 * content, so it never forwards the click the guard is there to suppress —
 * unlike browsers, which do. Hence the direct unit test.
 */
function clickInsideLabel(inner: string) {
  const label = document.createElement('label');
  label.innerHTML = `text ${inner}`;
  document.body.appendChild(label);

  const target = label.querySelector('[data-probe]') ?? label;
  const preventDefault = jest.fn();
  const event = {
    target,
    currentTarget: label,
    preventDefault,
  } as unknown as MouseEvent<HTMLLabelElement>;

  labelClickGuard(event);
  label.remove();

  return preventDefault;
}

describe('labelClickGuard', () => {
  it.each([
    ['a[href]', '<a data-probe href="#x">t</a>'],
    ['button', '<button data-probe type="button">t</button>'],
    ['select', '<select data-probe><option>t</option></select>'],
    ['textarea', '<textarea data-probe></textarea>'],
    ['summary', '<details><summary data-probe>t</summary></details>'],
    ['area[href]', '<map><area data-probe href="#x" shape="rect" coords="0,0,1,1"></map>'],
    ['img[usemap]', '<img data-probe usemap="#m" alt="t">'],
    ['object[usemap]', '<object data-probe usemap="#m"></object>'],
    ['img[usemap] with tabindex', '<img data-probe usemap="#m" tabindex="0" alt="t">'],
  ])('should let the browser handle native interactive content: %s', (_name, inner) => {
    expect(clickInsideLabel(inner)).not.toHaveBeenCalled();
  });

  it.each([
    ['span[role=button]', '<span data-probe role="button">t</span>'],
    ['span[role=link]', '<span data-probe role="link">t</span>'],
    ['span[tabindex]', '<span data-probe tabindex="0">t</span>'],
    ['div[role=button][tabindex]', '<div data-probe role="button" tabindex="0">t</div>'],
    ['icon inside a trigger', '<span role="button" tabindex="0"><i data-probe></i></span>'],
  ])('should suppress the forwarded click for a non-native trigger: %s', (_name, inner) => {
    expect(clickInsideLabel(inner)).toHaveBeenCalledTimes(1);
  });

  it('should leave a plain text label alone', () => {
    expect(clickInsideLabel('<span data-probe>t</span>')).not.toHaveBeenCalled();
  });

  it('should not suppress a click on the label itself', () => {
    expect(clickInsideLabel('')).not.toHaveBeenCalled();
  });

  it('should let a link nested inside a trigger navigate', () => {
    expect(clickInsideLabel('<span role="button" tabindex="0"><a data-probe href="#x">t</a></span>'))
      .not.toHaveBeenCalled();
  });
});
