import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  isFlush?: boolean;
  isNumbered?: boolean;
  isHorizontal?: boolean;
  horizontalBreakpoint?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}>;

export default function MList({
  children,
  className,
  isFlush = false,
  isNumbered = false,
  isHorizontal = false,
  horizontalBreakpoint,
}: Props) {
  if (isFlush && isHorizontal) {
    return <b>Horizontal and Flush props not work together</b>;
  }

  return (
    <div
      className={
        classNames(
          'm-list list-group',
          {
            'list-group-flush': isFlush && !isHorizontal,
            'list-group-numbered': isNumbered,
          },
          isHorizontal && !horizontalBreakpoint ? 'list-group-horizontal' : undefined,
          isHorizontal && horizontalBreakpoint ? `list-group-horizontal-${horizontalBreakpoint}` : undefined,
          className,
        )
      }
    >
      {children}
    </div>
  );
}
