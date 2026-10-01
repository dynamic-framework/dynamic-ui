/**
 * The enhancement registry.
 *
 * Every vanilla behaviour is the same shape: find elements carrying an
 * attribute, attach behaviour, hand back a teardown. This file owns finding
 * them — once on load, and again whenever markup arrives later.
 *
 * ## Why a MutationObserver and not just DOMContentLoaded
 *
 * Modyo renders widgets asynchronously. A page that enhanced itself once on
 * load would leave every tab set, modal and collapse that arrived afterwards
 * inert, and the failure is silent: the markup is there, the CSS is there,
 * nothing happens when you click. Watching for additions is not a nicety, it
 * is the difference between working on a real page and working in a demo.
 *
 * ## Why enhancement is idempotent
 *
 * The observer fires for reparenting, for a framework re-rendering a subtree,
 * for anything. Mounting twice would double every event listener, so each
 * element is marked once and skipped thereafter.
 */

export type Teardown = () => void;

export type Behaviour = {
  /** What the behaviour is called, for `DF.enhance` reporting and teardown. */
  name: string;
  /** Which elements it claims. */
  selector: string;
  /** Attaches the behaviour and returns its teardown. */
  mount: (element: HTMLElement) => Teardown;
};

const behaviours = new Map<string, Behaviour>();

/** Elements already enhanced, and how to undo it. */
const mounted = new WeakMap<Element, Map<string, Teardown>>();

export function define(behaviour: Behaviour): void {
  behaviours.set(behaviour.name, behaviour);
}

/** Whether this element already carries this behaviour. */
function has(element: Element, name: string): boolean {
  return mounted.get(element)?.has(name) ?? false;
}

function remember(element: Element, name: string, teardown: Teardown): void {
  const existing = mounted.get(element) ?? new Map<string, Teardown>();
  existing.set(name, teardown);
  mounted.set(element, existing);
}

/**
 * Enhances everything in `root` that is not enhanced yet.
 *
 * `root` itself is checked as well as its descendants: a behaviour's element is
 * often the node that was just inserted, and `querySelectorAll` never returns
 * the node it was called on.
 */
export function enhance(root: ParentNode = document): number {
  let count = 0;

  Array.from(behaviours.values()).forEach((behaviour) => {
    const targets: Element[] = Array.from(root.querySelectorAll(behaviour.selector));
    if (root instanceof Element && root.matches(behaviour.selector)) targets.unshift(root);

    targets
      .filter((target) => !has(target, behaviour.name))
      .forEach((target) => {
        try {
          remember(target, behaviour.name, behaviour.mount(target as HTMLElement));
          count += 1;
        } catch (error) {
          /*
           * One broken element must not stop the rest of the page enhancing.
           * Reported rather than swallowed, because a behaviour that throws on
           * mount is a bug in this library or malformed markup, and both need
           * to be visible.
           */
          // eslint-disable-next-line no-console
          console.error(`[dynamic] ${behaviour.name} failed to mount`, target, error);
        }
      });
  });

  return count;
}

/** Removes every behaviour from an element. For a framework unmounting a subtree. */
export function destroy(root: ParentNode = document): void {
  const descendants = Array.from(root.querySelectorAll('*'));
  const targets = root instanceof Element ? [root].concat(descendants) : descendants;
  targets.forEach((target) => {
    const entries = mounted.get(target);
    if (!entries) return;
    Array.from(entries.values()).forEach((teardown) => teardown());
    mounted.delete(target);
  });
}

let observer: MutationObserver | undefined;

/**
 * Starts enhancing, and keeps enhancing.
 *
 * Safe to call more than once — a second call does nothing, so a page that
 * loads the bundle twice does not end up with two observers.
 */
export function start(): void {
  if (observer) return;

  const run = () => {
    enhance(document);

    observer = new MutationObserver((records) => {
      records.forEach((record) => {
        Array.from(record.addedNodes)
          .filter((node) => node.nodeType === Node.ELEMENT_NODE)
          .forEach((node) => enhance(node as Element));
      });
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
}

export function stop(): void {
  observer?.disconnect();
  observer = undefined;
}
