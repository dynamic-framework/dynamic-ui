import classNames from 'classnames';
import { useState, PropsWithChildren, ReactNode } from 'react';
import { MIcon } from './proxies';

type CollapseProps = PropsWithChildren<{
  id?: string;
  Component: JSX.Element | ReactNode;
  hasSeparator?: boolean;
  isCollapsed?: boolean;
}>;

export default function MCollapse({
  id,
  Component,
  hasSeparator = false,
  isCollapsed = true,
  children,
}: CollapseProps) {
  const [toggle, setToggle] = useState(isCollapsed);

  return (
    <div
      id={id}
      className="m-collapse collapse-container"
    >
      <div
        className="collapse-button"
        role="button"
        tabIndex={0}
        onClick={() => setToggle((prev) => !prev)}
        onKeyDown={({ code }) => (code === 'Enter' ? setToggle((prev) => !prev) : {})}
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
            <div className="collapse-body__separator" />
          )}
          {children}
        </div>
      )}
    </div>
  );
}
