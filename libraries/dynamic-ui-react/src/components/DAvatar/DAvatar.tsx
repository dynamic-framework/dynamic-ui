import { useMemo } from 'react';
import classNames from 'classnames';
import type { AvatarSize, BaseProps, ClassMap } from '../interface';

type Props =
& BaseProps
& {
  id?: string;
  size?: AvatarSize;
  image?: string;
  name?: string;
  useNameAsInitials?: boolean;
  theme?: string;
  variant?: 'light' | 'dark';
};

export default function DAvatar(
  {
    id,
    size,
    image,
    name: nameProp,
    useNameAsInitials = false,
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

  const name = useMemo(() => {
    if (!nameProp) {
      return undefined;
    }

    if (useNameAsInitials) {
      return nameProp;
    }

    return nameProp.split(/\s+/).map((word) => word.charAt(0)).join('').toUpperCase();
  }, [nameProp, useNameAsInitials]);

  return (
    <div
      className={classNames(generateClasses, className)}
      style={style}
      id={id}
      {...dataAttributes}
    >
      {image && <img src={image} alt="" className="d-avatar-img" />}
      {(name && !image) && <span className="d-avatar-name">{name}</span>}
    </div>
  );
}
