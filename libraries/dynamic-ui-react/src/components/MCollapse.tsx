import classNames from 'classnames';
import { PREFIX_BS } from '@modyo-dynamic/modyo-design-system';

import {
  PropsWithChildren,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { MIcon } from './proxies';

type Props = PropsWithChildren<{
  id?: string;
  className?: string;
  Component: JSX.Element | ReactNode;
  hasSeparator?: boolean;
  defaultCollapsed?: boolean;
  onChange?: (value: boolean) => void;
}>;

export default function MCollapse({
  id,
  className,
  Component,
  hasSeparator = false,
  defaultCollapsed = false,
  onChange,
  children,
}: Props) {
  const [toggle, setToggle] = useState(defaultCollapsed);

  const onChangeCollapse = () => setToggle((prev) => !prev);

  useEffect(() => {
    if (onChange) {
      onChange(toggle);
    }
  }, [toggle, onChange]);

  useEffect(() => {
    setToggle(defaultCollapsed);
  }, [defaultCollapsed]);

  return (
    <div
      id={id}
      className={classNames('m-collapse collapse-container', className)}
    >
      <button
        className="collapse-button"
        type="button"
        onClick={onChangeCollapse}
      >
        <div className="flex-grow-1">
          {Component}
        </div>
        <MIcon
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
            [`--${PREFIX_BS}m-collapse-separator-display`]: hasSeparator ? 'block' : 'none',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
