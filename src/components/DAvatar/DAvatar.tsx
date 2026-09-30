import { useMemo } from 'react';
import classNames from 'classnames';
import type { AvatarSize, BaseProps } from '../interface';

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
  const dataProps = useMemo(
    () => (size ? { 'data-size': size } : {}),
    [size],
  );

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
      className={classNames('df-avatar', className)}
      style={style}
      id={id}
      {...dataProps}
      {...dataAttributes}
    >
      {image && <img src={image} alt={nameProp} className="df-avatar-img" />}
      {(name && !image) && <span className="df-avatar-name">{name}</span>}
    </div>
  );
}
