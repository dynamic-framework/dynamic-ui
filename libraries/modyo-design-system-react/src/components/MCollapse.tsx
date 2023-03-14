import classNames from 'classnames';
import {
  PropsWithChildren,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { MIcon } from './proxies';

type Props = PropsWithChildren<{
  id?: string;
  Component: JSX.Element | ReactNode;
  hasSeparator?: boolean;
  isCollapsed?: boolean;
  setCollapse?: Dispatch<SetStateAction<boolean>>;
}>;

export default function MCollapse({
  id,
  Component,
  hasSeparator = false,
  isCollapsed = false,
  children,
  setCollapse,
}: Props) {
  const [toggle, setToggle] = useState(isCollapsed);

  useEffect(() => {
    if (setCollapse) {
      setCollapse(toggle);
    }
  }, [toggle, setCollapse]);

  useEffect(() => {
    setToggle(isCollapsed);
  }, [isCollapsed]);

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
            <div className="collapse-body-separator" />
          )}
          {children}
        </div>
      )}
    </div>
  );
}
