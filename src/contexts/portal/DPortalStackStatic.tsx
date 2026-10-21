import type { PortalStackProps } from './types';

/**
 * Portal stack without animations. Default renderer until an overlay component
 * registers the animated `DPortalStack`.
 */
export default function DPortalStackStatic({ stack }: PortalStackProps) {
  return (
    <>
      {stack.flatMap((
        {
          Component,
          name,
          payload,
        },
      ) => [
        <div
          key={`${name}-backdrop`}
          className="backdrop show"
        />,
        <Component
          key={name}
          name={name}
          payload={payload}
        />,
      ])}
    </>
  );
}
