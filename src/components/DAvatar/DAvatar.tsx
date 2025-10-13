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
};

export default function DAvatar(
  {
    id,
    size,
    image,
    name: nameProp,
    useNameAsInitials = false,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  const generateClasses = useMemo<ClassMap>(() => ({
    'd-avatar': true,
    [`d-avatar-${size}`]: !!size,
  }), [size]);

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
      {image && <img src={image} alt={nameProp} className="d-avatar-img" />}
      {(name && !image) && <span className="d-avatar-name">{name}</span>}
    </div>
  );
}
