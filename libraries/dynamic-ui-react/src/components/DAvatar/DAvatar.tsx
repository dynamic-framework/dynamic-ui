import classNames from 'classnames';
import type { AvatarSize, BaseProps } from '../interface';

type Props =
& BaseProps
& {
  id?: string;
  size?: AvatarSize;
  image?: string;
  title?: string;
};

export default function DAvatar(
  {
    id,
    size,
    image,
    title,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  return (
    <div
      className={classNames({
        avatar: true,
        [`avatar-${size}`]: !!size,
      }, className)}
      style={style}
      id={id}
      {...dataAttributes}
    >
      {image && <img src={image} alt="avatar" className="avatar-img" />}
      {title && <span className="avatar-title">{title}</span>}
    </div>
  );
}
