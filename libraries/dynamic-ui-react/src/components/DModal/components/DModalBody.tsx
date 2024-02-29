import { CSSProperties, useMemo } from 'react';
import type { ReactNode } from 'react';
import classNames from 'classnames';

import { PREFIX_BS } from '../../config';

import type { BaseProps, CustomStyles } from '../../interface';

type Props = BaseProps & {
  children: ReactNode;
};

export default function DModalBody(
  {
    children,
    className,
    style,
  }: Props,
) {
  const generateStyleVariables = useMemo<CustomStyles | CSSProperties>(() => ({
    ...style,
    [`--${PREFIX_BS}modal-component-body-padding`]: 0,
  }), [style]);

  return (
    <div
      className={classNames('d-modal-slot modal-body', className)}
      style={generateStyleVariables}
    >
      {children}
    </div>
  );
}
