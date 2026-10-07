import { action } from 'storybook/actions';

/** What is left of an event once the DOM references are taken out. */
type EventSummary = {
  type: string;
  id?: string;
  name?: string;
  value?: string;
};

/**
 * An object carrying a `type`, a `target` and a `nativeEvent` is a React
 * synthetic event, whatever its constructor is called. Checked by shape rather
 * than by `instanceof` because the addon's own detection walks the prototype
 * chain for `SyntheticEvent` / `SyntheticBaseEvent`, and those names come from
 * React's build — a shape test does not go stale when they change.
 */
function isEventLike(value: unknown): value is {
  type: string;
  target: unknown;
  nativeEvent: unknown;
} {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return typeof candidate.type === 'string'
    && 'target' in candidate
    && 'nativeEvent' in candidate;
}

function summarise(event: {
  type: string;
  target: unknown;
}): EventSummary {
  const target = event.target as Partial<HTMLInputElement> | null;

  return {
    type: event.type,
    /*
     * Named by `id` and `name` rather than by the element: both are strings
     * the story author chose, and they are enough to tell two fields apart in
     * the panel, which is the only thing the log was being read for.
     */
    id: target?.id || undefined,
    name: target?.name || undefined,
    value: target?.value,
  };
}

/**
 * Logs a handler's arguments to the actions panel, with events flattened.
 *
 * ## Why this exists
 *
 * `argTypes: { onFocus: { action: 'onFocus' } }` reads like a free log line.
 * It is not. The addon's `action()` recognises a React synthetic event and,
 * before emitting it:
 *
 * ```js
 * Object.create(a.constructor.prototype, Object.getOwnPropertyDescriptors(a))
 * e.persist()
 * channel.emit(EVENT_ID, { …, options: { maxDepth: 5 + depth } })  // 15
 * ```
 *
 * — it clones the event, then serialises the clone fifteen levels deep over
 * the channel. `view` is replaced with an empty object, but `target`,
 * `currentTarget` and `nativeEvent` are left pointing at live DOM, so the walk
 * descends into the neighbourhood of the node that fired. It runs
 * synchronously inside the handler, which means the browser cannot paint the
 * focus ring until it returns: the field took about half a second to look
 * focused, and the heavier the surrounding DOM, the longer it took. On
 * `DInputPhone` that neighbourhood holds a `<select>` with 217 `<option>`
 * children.
 *
 * Typing never showed it, because `onChange` hands over our own plain object
 * rather than an event — which is also the shape this restores.
 *
 * `onWheel` was the worst of the set: one scroll gesture fires it repeatedly,
 * so each turn of the wheel paid the walk again.
 *
 * ## What it logs instead
 *
 * Every argument, in order, with any event replaced by the fields a reader of
 * the panel can act on. Non-event arguments pass through untouched, so
 * `onDrop(acceptedFiles, rejectedFiles, event)` still logs both file lists —
 * those are the payload, and they are what the log was for.
 */
export default function domEventAction(name: string) {
  const log = action(name);

  return (...args: unknown[]) => {
    const flattened = args.map((arg) => (isEventLike(arg) ? summarise(arg) : arg));
    /*
     * One argument is logged bare rather than wrapped in a one-item array,
     * matching what the addon does with `args.length > 1`: a focus log that
     * read `[{ type: 'focus' }]` would put a bracket between the reader and
     * every value.
     */
    log(...flattened);
  };
}
