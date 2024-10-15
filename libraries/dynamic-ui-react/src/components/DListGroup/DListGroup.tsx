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

  const generateClasses = useMemo(
    () => {
      const listGroupHorizontalClass = typeof horizontal === 'string'
        ? `list-group-horizontal-${horizontal}`
        : 'list-group-horizontal';

      return {
        'list-group': true,
        'list-group-numbered': numbered,
        'list-group-flush': flush,
        [listGroupHorizontalClass]: !!horizontal,
      };
    },
    [flush, horizontal, numbered],
  );

  return (
    <Tag
      className={classNames(generateClasses, className)}
      style={style}
      {...dataAttributes}
    >
      {children}
    </Tag>
  );
}

export default Object.assign(DListGroup, {
  Item: DListGroupItem,
});
