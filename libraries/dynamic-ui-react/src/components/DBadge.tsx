import classNames from 'classnames';
import { CSSProperties, useMemo } from 'react';

type Props = {
  text?: string;
  isDot?: boolean;
  theme?: string;
  id?: string;
  className?: string;
  style?: CSSProperties;
};

export default function DBadge({
  text,
  isDot = false,
  theme = 'primary',
  id,
  className,
  style,
}: Props) {
  const generateClasses = useMemo(
    () => ({
      badge: true,
      'badge-dot': isDot,
      [`badge-${theme}`]: !!theme,
    }),
    [isDot, theme],
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
