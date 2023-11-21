import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DListItem from './components/DListItem';

import type { BaseProps, BreakpointSize } from '../interface';

type Props = BaseProps & PropsWithChildren<{
  flush?: boolean;
  numbered?: boolean;
  horizontal?: boolean;
  horizontalBreakpoint?: BreakpointSize;
}>;

function DList(
  {
    children,
    className,
    style,
    flush = false,
    numbered = false,
    horizontal = false,
    horizontalBreakpoint,
  }: Props,
) {
  if (flush && horizontal) {
    throw new Error("Horizontal and Flush props don't work together");
  }

  return (
    <div
      className={classNames(
        'list-group',
        {
          'list-group-flush': flush && !horizontal,
          'list-group-numbered': numbered,
          'list-group-horizontal': horizontal && !horizontalBreakpoint,
        },
        (horizontal && horizontalBreakpoint) && `list-group-horizontal-${horizontalBreakpoint}`,
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
