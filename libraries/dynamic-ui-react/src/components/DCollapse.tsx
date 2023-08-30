import classNames from 'classnames';
import { PREFIX_BS } from '@dynamic-framework/ui';

import {
  PropsWithChildren,
  ReactNode,
  ReactElement,
  useState,
  useEffect,
} from 'react';
import { DIcon } from './proxies';

type Props = PropsWithChildren<{
  id?: string;
  className?: string;
  Component: ReactElement | ReactNode;
  hasSeparator?: boolean;
  defaultCollapsed?: boolean;
  onEventChange?: (value: boolean) => void;
}>;

export default function DCollapse({
  id,
  className,
  Component,
  hasSeparator = false,
  defaultCollapsed = false,
  onEventChange,
  children,
}: Props) {
  const [toggle, setToggle] = useState(defaultCollapsed);

  const onChangeCollapse = () => setToggle((prev) => !prev);

  useEffect(() => {
    if (onEventChange) {
      onEventChange(toggle);
    }
  }, [toggle, onEventChange]);

  useEffect(() => {
    setToggle(defaultCollapsed);
  }, [defaultCollapsed]);

  return (
    <div
      id={id}
      className={classNames('collapse-container', className)}
    >
      <button
        className="collapse-button"
        type="button"
        onClick={onChangeCollapse}
      >
        <div className="flex-grow-1">
          {Component}
        </div>
        <DIcon
          color={`var(--${PREFIX_BS}gray)`}
          size={`var(--${PREFIX_BS}ref-fs-small)`}
          icon={toggle ? 'chevron-up' : 'chevron-down'}
        />
      </button>
      {toggle && (
        <div
          className={classNames({
            'collapse-body': true,
          })}
          style={{
            [`--${PREFIX_BS}collapse-separator-display`]: hasSeparator ? 'block' : 'none',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
