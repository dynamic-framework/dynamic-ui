import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import { PREFIX_BS } from '../config';

import DOffcanvasHeader from './components/DOffcanvasHeader';
import DOffcanvasBody from './components/DOffcanvasBody';
import DOffcanvasFooter from './components/DOffcanvasFooter';

import type { BaseProps, OffcanvasPositionToggleFrom } from '../interface';

type Props = BaseProps & PropsWithChildren<{
  name: string;
  isStatic?: boolean;
  isScrollable?: boolean;
  openFrom?: OffcanvasPositionToggleFrom;
}>;

function DOffcanvas(
  {
    name,
    className,
    style,
    isStatic,
    isScrollable,
    openFrom = 'end',
    children,
  }: Props,
) {
  return (
    <div
      className={classNames(
        'offcanvas show',
        {
          [`offcanvas-${openFrom}`]: openFrom,
        },
        className,
      )}
      style={style}
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

export default Object.assign(DOffcanvas, {
  Header: DOffcanvasHeader,
  Body: DOffcanvasBody,
  Footer: DOffcanvasFooter,
});
