import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import type { BaseProps, BreakpointSize } from '../interface';
import DListItem from './components/DListItem';

type Props = BaseProps & PropsWithChildren<{
  isFlush?: boolean;
  isNumbered?: boolean;
  isHorizontal?: boolean;
  horizontalBreakpoint?: BreakpointSize;
}>;

function DList(
  {
    children,
    className,
    style,
    isFlush = false,
    isNumbered = false,
    isHorizontal = false,
    horizontalBreakpoint,
  }: Props,
) {
  if (isFlush && isHorizontal) {
    throw new Error("Horizontal and Flush props don't work together");
  }

  return (
    <div
      className={classNames(
        'list-group',
        {
          'list-group-flush': isFlush && !isHorizontal,
          'list-group-numbered': isNumbered,
          'list-group-horizontal': isHorizontal && !horizontalBreakpoint,
        },
        (isHorizontal && horizontalBreakpoint) && `list-group-horizontal-${horizontalBreakpoint}`,
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

export default Object.assign(DList, {
  Item: DListItem,
});
