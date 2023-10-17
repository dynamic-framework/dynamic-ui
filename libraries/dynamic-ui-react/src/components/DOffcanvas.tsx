import type { PropsWithChildren } from 'react';

import { PREFIX_BS } from './config';

import type { OffcanvasPositionToggleFrom } from './interface';

type Props = PropsWithChildren<{
  name: string;
  isStatic?: boolean;
  isScrollable?: boolean;
  openFrom?: OffcanvasPositionToggleFrom;
}>;

export default function DOffcanvas(
  {
    name,
    isStatic,
    isScrollable,
    openFrom = 'end',
    children,
  }: Props,
) {
  return (
    <div
      className={`offcanvas offcanvas-${openFrom} show`}
      id={name}
      tabIndex={-1}
      aria-labelledby={`${name}Label`}
      aria-hidden="false"
      {...isStatic && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
      })}
      {...isScrollable && ({
        [`data-${PREFIX_BS}scroll`]: 'true',
        [`data-${PREFIX_BS}keyboard`]: 'false',
      })}
    >
      {children}
    </div>
  );
}
