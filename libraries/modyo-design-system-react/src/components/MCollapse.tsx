import classNames from 'classnames';
import {
  PropsWithChildren,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { MIcon } from './proxies';

type Props = PropsWithChildren<{
  id?: string;
  Component: JSX.Element | ReactNode;
  hasSeparator?: boolean;
  defaultCollapsed?: boolean;
  onChange?: (value: boolean) => void;
}>;

export default function MCollapse({
  id,
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
      className="m-collapse collapse-container"
    >
      <div
        className="collapse-button"
        role="button"
        tabIndex={0}
        onClick={onChangeCollapse}
        onKeyDown={({ code }) => (code === 'Enter' ? onChangeCollapse : {})}
      >
        <div className="flex-grow-1">
          {Component}
        </div>
        <MIcon icon={toggle ? 'chevron-up' : 'chevron-down'} />
      </div>
      {toggle && (
        <div
          className={classNames({
            'collapse-body': true,
            separator: hasSeparator,
          })}
        >
          {hasSeparator && (
            <div className="collapse-body-separator" />
          )}
          {children}
        </div>
      )}
    </div>
  );
}
