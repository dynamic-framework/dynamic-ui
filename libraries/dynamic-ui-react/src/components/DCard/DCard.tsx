import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DCardHeader from './components/DCardHeader';
import DCardBody from './components/DCardBody';
import DCardFooter from './components/DCardFooter';

import type { BaseProps } from '../interface';

type Props = PropsWithChildren<BaseProps>;

function DCard(
  {
    className,
    style,
    children,
  }: Props,
) {
  return (
    <div
      style={style}
      className={classNames(
        'card',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Object.assign(DCard, {
  Header: DCardHeader,
  Body: DCardBody,
  Footer: DCardFooter,
});
