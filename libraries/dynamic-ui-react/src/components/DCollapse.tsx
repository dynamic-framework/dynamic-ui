import classNames from 'classnames';
import {
  PropsWithChildren,
  ReactNode,
  ReactElement,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { PREFIX_BS } from '../interfaces/component-config';

import { CustomStyles } from '../interfaces/component-interface';
import DIcon from './DIcon';

type Props = PropsWithChildren<{
  id?: string;
  className?: string;
  Component: ReactElement | ReactNode;
  hasSeparator?: boolean;
  defaultCollapsed?: boolean;
  onChange?: (value: boolean) => void;
}>;

export default function DCollapse({
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

  const generateStyles = useMemo<CustomStyles>(() => ({
    [`--${PREFIX_BS}collapse-separator-display`]: hasSeparator ? 'block' : 'none',
  }), [hasSeparator]);

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
          style={generateStyles}
        >
          {children}
        </div>
      )}
    </div>
  );
}
