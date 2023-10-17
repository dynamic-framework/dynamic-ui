import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function DModalBody({ children }: Props) {
  return (
    <div className="d-modal-slot modal-body">
      {children}
    </div>
  );
}
