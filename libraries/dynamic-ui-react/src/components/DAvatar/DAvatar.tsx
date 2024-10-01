import { useMemo } from 'react';
import classNames from 'classnames';
import type { AvatarSize, BaseProps, ClassMap } from '../interface';

type Props =
& BaseProps
& {
  id?: string;
  size?: AvatarSize;
  image?: string;
  text?: string;
  theme?: string;
  variant?: 'light' | 'dark';
};

export default function DAvatar(
  {
    id,
    size,
    image,
    text,
    theme = 'secondary',
    variant,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  const generateClasses = useMemo<ClassMap>(() => {
    const variantClass = variant
      ? `d-avatar-${variant}-${theme}`
      : `d-avatar-${theme}`;

    return {
      'd-avatar': true,
      [variantClass]: true,
      [`d-avatar-${size}`]: !!size,
    };
  }, [variant, theme, size]);

  return (
    <div
      className={classNames(generateClasses, className)}
      style={style}
      id={id}
      {...dataAttributes}
    >
      {image && <img src={image} alt="" className="d-avatar-img" />}
      {(text && !image) && <span className="d-avatar-text">{text}</span>}
    </div>
  );
}
