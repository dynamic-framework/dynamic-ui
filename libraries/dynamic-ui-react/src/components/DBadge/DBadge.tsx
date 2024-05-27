import classNames from 'classnames';
import { useMemo } from 'react';

import type { BaseProps } from '../interface';

type Props =
& BaseProps
& {
  text?: string;
  dot?: boolean;
  soft?: boolean;
  theme?: string;
  id?: string;
};

export default function DBadge(
  {
    text,
    dot = false,
    soft = false,
    theme = 'primary',
    id,
    className,
    style,
  }: Props,
) {
  const generateClasses = useMemo(
    () => ({
      badge: true,
      'rounded-circle p-2': dot,
      [`text-bg-${theme}`]: !!theme && !soft,
      [`text-${theme}-bg-color`]: !!theme && soft,
    }),
    [dot, soft, theme],
  );

  return (
    <span
      className={classNames(generateClasses, className)}
      style={style}
      {...id && { id }}
    >
      <span>{text}</span>
    </span>
  );
}
