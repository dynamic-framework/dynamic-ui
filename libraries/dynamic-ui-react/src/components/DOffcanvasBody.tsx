import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function DOffcanvasBody({
  children,
}: Props) {
  return (
    <div className="d-offcanvas-slot offcanvas-body">
      {children}
    </div>
  );
}
