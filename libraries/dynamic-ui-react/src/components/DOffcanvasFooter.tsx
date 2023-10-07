import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  footerActionPlacement?: 'start' | 'end' | 'fill';
}>;

export default function DOffcanvasFooter({
  footerActionPlacement = 'fill',
  children,
}: Props) {
  return (
    <div className={`d-offcanvas-slot d-offcanvas-footer d-offcanvas-action-${footerActionPlacement}`}>
      {children}
    </div>
  );
}
