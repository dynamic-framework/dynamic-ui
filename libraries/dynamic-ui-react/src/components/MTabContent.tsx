import type { PropsWithChildren } from 'react';

import { useTabContext } from './MTabs';

type Props = PropsWithChildren<{
  tab: string;
}>;

export default function MTabContent({ tab, children }: Props) {
  const { isSelected } = useTabContext();

  if (!isSelected(tab)) {
    return null;
  }

  return (
    <div
      className="tab-pane fade show active"
      id={`${tab}Pane`}
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={`${tab}Tab`}
    >
      {children}
    </div>
  );
}
