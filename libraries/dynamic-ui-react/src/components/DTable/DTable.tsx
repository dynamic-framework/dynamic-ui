import classNames from 'classnames';
import { PropsWithChildren, useMemo } from 'react';
import DTableHeader from './components/DTableHeader';
import DTableBody from './components/DTableBody';
import DTableFooter from './components/DTableFooter';

import type { BaseProps, BreakpointSize } from '../interface';

type Props =
& BaseProps
& PropsWithChildren<{
  theme?: string;
  striped?: 'rows' | 'columns';
  hoverableRow?: boolean;
  borderType?: 'bordered' | 'borderless';
  borderTheme?: string;
  small?: boolean;
  responsive?: BreakpointSize;
  id?: string;
}>;

function DTable({
  theme,
  striped,
  hoverableRow,
  borderType,
  borderTheme,
  small,
  responsive,
  className,
  style,
  id,
  children,
}: Props) {
  const tableClasses = useMemo(
    () => ({
      table: true,
      [`table-${theme}`]: !!theme,
      'table-striped': striped === 'rows',
      'table-striped-columns': striped === 'columns',
      'table-hover': hoverableRow,
      'table-bordered': borderType === 'bordered',
      'table-borderless': borderType === 'borderless',
      [`border-${borderTheme}`]: !!borderTheme,
      'table-sm': small,
      ...className && { [className]: true },
    }),
    [
      theme,
      striped,
      hoverableRow,
      borderType,
      borderTheme,
      small,
      className,
    ],
  );

  const tableElement = (
    <table
      {...id && { id }}
      className={classNames(tableClasses, className)}
      style={style}
    >
      {children}
    </table>
  );

  return responsive ? (
    <div className={`table-responsive-${responsive}`}>
      {tableElement}
    </div>
  ) : (
    tableElement
  );
}

export default Object.assign(DTable, {
  Header: DTableHeader,
  Body: DTableBody,
  Footer: DTableFooter,
});
