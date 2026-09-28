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
  /**
   * Accessible name of the list, so screen readers can tell it apart from
   * other lists on the page (e.g. "Recent movements"). Ignored when
   * `ariaLabelledBy` is set.
   */
  ariaLabel?: string;
  /**
   * Id of a visible element that names the list, such as the heading above
   * it. When set, `aria-label` is not rendered.
   */
  ariaLabelledBy?: string;
}>;

function DListGroup(
  {
    as = 'ul',
    numbered,
    flush,
    horizontal,
    ariaLabel,
    ariaLabelledBy,
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

  const labelProps = useMemo(() => {
    if (!ariaLabelledBy && !ariaLabel) return {};
    return {
      ...ariaLabelledBy
        ? { 'aria-labelledby': ariaLabelledBy }
        : { 'aria-label': ariaLabel },
      // A <div> has the generic role, which can't carry a name, so a named
      // group of links or buttons is exposed as a group.
      ...Tag === 'div' && { role: 'group' },
    };
  }, [ariaLabel, ariaLabelledBy, Tag]);

  return (
    <Tag
      className={classNames(generateClasses, className)}
      style={style}
      {...labelProps}
      {...dataAttributes}
    >
      {children}
    </Tag>
  );
}

export default Object.assign(DListGroup, {
  Item: DListGroupItem,
});
