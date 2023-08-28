import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  isFlush?: boolean;
  isNumbered?: boolean;
  isHorizontal?: boolean;
  horizontalBreakpoint?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}>;

export default function DList({
  children,
  className,
  isFlush = false,
  isNumbered = false,
  isHorizontal = false,
  horizontalBreakpoint,
}: Props) {
  if (isFlush && isHorizontal) {
    throw new Error("Horizontal and Flush props don't work together");
  }

  return (
    <div
      className={
        classNames(
          'list-group',
          {
            'list-group-flush': isFlush && !isHorizontal,
            'list-group-numbered': isNumbered,
            'list-group-horizontal': isHorizontal && !horizontalBreakpoint,
          },
          (isHorizontal && horizontalBreakpoint) && `list-group-horizontal-${horizontalBreakpoint}`,
          className,
        )
      }
    >
      {children}
    </div>
  );
}
