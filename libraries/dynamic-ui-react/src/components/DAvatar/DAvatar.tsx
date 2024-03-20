import classNames from 'classnames';
import type { AvatarSize, BaseProps } from '../interface';

type Props =
& BaseProps
& {
  id?: string;
  size?: AvatarSize;
  image: string;
};

export default function DAvatar(
  {
    id,
    size,
    image,
    className,
    style,
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
    >
      <img src={image} alt="avatar" className="avatar-img" />
    </div>
  );
}
