import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  actionPlacement?: 'start' | 'end' | 'fill' | 'center';
}>;

export default function DModalFooter(
  {
    actionPlacement = 'fill',
    children,
  }: Props,
) {
  return (
    <>
      <div className="d-modal-separator" />
      <div className={`d-modal-slot modal-footer d-modal-action-${actionPlacement}`}>
        {children}
      </div>
    </>
  );
}
