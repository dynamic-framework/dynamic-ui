import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import type { BaseProps } from '../../interface';

type Props = PropsWithChildren<BaseProps & {
  cols?: string | number;
  colsXs?: string | number;
  colsSm?: string | number;
  colsMd?: string | number;
  colsLg?: string | number;
  colsXl?: string | number;
  colsXxl?: string | number;
}>;

export default function DLayoutPane(
  {
    className,
    style,
    children,
    cols,
    colsXs,
    colsSm,
    colsMd,
    colsLg,
    colsXl,
    colsXxl,
    dataAttributes,
  }: Props,
) {
  const colsClass = cols ? `g-col-${cols}` : undefined;
  const colsXsClass = colsXs ? `g-col-${colsXs}` : undefined;
  const colsSmClass = colsSm ? `g-col-sm-${colsSm}` : undefined;
  const colsMdClass = colsMd ? `g-col-md-${colsMd}` : undefined;
  const colsLgClass = colsLg ? `g-col-lg-${colsLg}` : undefined;
  const colsXlClass = colsXl ? `g-col-xl-${colsXl}` : undefined;
  const colsXxlClass = colsXxl ? `g-col-xxl-${colsXxl}` : undefined;

  return (
    <div
      className={classNames(
        colsClass,
        colsXsClass,
        colsSmClass,
        colsMdClass,
        colsLgClass,
        colsXlClass,
        colsXxlClass,
        className,
      )}
      style={style}
      {...dataAttributes}
    >
      {children}
    </div>
  );
}
