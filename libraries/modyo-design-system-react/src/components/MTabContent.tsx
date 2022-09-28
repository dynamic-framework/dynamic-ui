import type { PropsWithChildren } from 'react';

import { useTabContext } from './MTabs';

type Props = PropsWithChildren<{
  tab: string;
}>;

export default function MTabContent({ tab, children }: Props) {
  const selected = useTabContext();

  if (tab !== selected) {
    return null;
  }

  return (
    <div
      className="tab-pane fade show active"
      id="nav-home"
      role="tabpanel"
      tabIndex={0}
    >
      {children}
    </div>
  );
}
