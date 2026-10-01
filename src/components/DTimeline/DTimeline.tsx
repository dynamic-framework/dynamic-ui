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
          {/*
            * No icon unless one is given, and an empty marker is a dot.
            *
            * This was `item.icon || 'Check'`, so EVERY event got a tick —
            * including the ones that have not happened. A timeline whose last
            * step reads "Delivered · Pending" beside a completed checkmark
            * says the opposite of the truth, and it looked deliberate.
            *
            * `status` deliberately does not supply one either: a check is
            * right for `success` and wrong for `warning` and `danger`, so the
            * glyph is the caller's to choose.
            */}
          <div className="df-timeline-item-marker">
            {item.icon && <DIcon icon={item.icon} />}
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
