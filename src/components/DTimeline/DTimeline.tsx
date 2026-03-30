import classNames from 'classnames';
import type { BaseProps } from '../interface';
import DIcon from '../DIcon';

export type DTimelineItem = {
  title: string;
  description?: string;
  time?: string;
  icon?: string;
  status?: 'success' | 'warning' | 'danger' | 'info';
  children?: React.ReactNode;
};

type Props = BaseProps & {
  items: DTimelineItem[];
};

export default function DTimeline({
  className,
  style,
  dataAttributes,
  items,
}: Props) {
  return (
    <div
      style={style}
      className={classNames('d-timeline', className)}
      {...dataAttributes}
    >
      {items.map((item, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={classNames('d-timeline-item', {
            [`d-timeline-item-${item.status}`]: item.status,
          })}
        >
          <div className="d-timeline-item-connector" />
          <div className="d-timeline-item-icon">
            <DIcon icon={item.icon || 'check'} size="1rem" />
          </div>
          <div className="d-timeline-item-content">
            <div className="d-timeline-item-title">{item.title}</div>
            {item.description && <div className="d-timeline-item-description">{item.description}</div>}
            {item.time && <div className="d-timeline-item-time">{item.time}</div>}
            {item.children}
          </div>
        </div>
      ))}
    </div>
  );
}
