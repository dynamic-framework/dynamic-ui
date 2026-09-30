import { useMemo } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DListGroupItem from './components/DListGroupItem';

import type { BaseProps } from '../interface';

type Props =
& BaseProps
& PropsWithChildren<{
  as?: 'ul' | 'ol' | 'div';
  numbered?: boolean;
  flush?: boolean;
  horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}>;

function DListGroup(
  {
    as = 'ul',
    numbered,
    flush,
    horizontal,
    children,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  const Tag = useMemo(() => {
    if (numbered) {
      return 'ol';
    }
    return as;
  }, [numbered, as]);

  /**
   * `horizontal` was six class names in 2.x — one plain plus one per
   * breakpoint — all shipped whether used or not. Here it is one attribute
   * whose value is the breakpoint, or the empty string for "at every width",
   * and the media queries live in the stylesheet.
   */
  const dataProps = useMemo(() => ({
    ...numbered && { 'data-numbered': '' },
    ...flush && { 'data-flush': '' },
    ...horizontal && { 'data-horizontal': typeof horizontal === 'string' ? horizontal : '' },
  }), [flush, horizontal, numbered]);

  return (
    <Tag
      className={classNames('df-list', className)}
      style={style}
      {...dataProps}
      {...dataAttributes}
    >
      {children}
    </Tag>
  );
}

export default Object.assign(DListGroup, {
  Item: DListGroupItem,
});
