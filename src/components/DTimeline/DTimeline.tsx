import classNames from 'classnames';
import type { BaseProps } from '../interface';
import { resolveRole } from '../roles';
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
      className={classNames('df-timeline', className)}
      {...dataAttributes}
    >
      {items.map((item, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="df-timeline-item"
          {...item.status && { 'data-color': resolveRole(item.status) }}
        >
          {/* The connector is a pseudo-element on the item now, so there is no
              node here whose only job is to sometimes be invisible. */}
          <div className="df-timeline-item-marker">
            <DIcon icon={item.icon || 'Check'} size="16px" />
          </div>
          <div className="df-timeline-item-content">
            <div className="df-timeline-item-title">{item.title}</div>
            {item.description && (
              <div className="df-timeline-item-description">{item.description}</div>
            )}
            {item.time && <div className="df-timeline-item-time">{item.time}</div>}
            {item.children}
          </div>
        </div>
      ))}
    </div>
  );
}
