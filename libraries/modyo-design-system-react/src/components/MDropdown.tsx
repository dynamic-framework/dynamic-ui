import { CSSProperties, Dispatch, SetStateAction } from 'react';
import type { PropsWithChildren } from 'react';
import { MIcon } from './proxies';

type Props = PropsWithChildren<{
  Component: JSX.Element;
  className?: string;
  classNameButton?: string;
  classNameOptions?: string;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  style: CSSProperties;
}>;

export default function MDropdown(
  {
    toggle,
    setToggle,
    children,
    style,
    className = '',
    classNameButton = '',
    classNameOptions = '',
    Component,
  }: Props,
) {
  const handlerToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`dropdown ${className}`}
    >
      <button
        style={style}
        type="button"
        onClick={handlerToggle}
        className={`dropdown-toggle ${toggle ? 'show' : ''} d-flex align-items-center gap-3 ${classNameButton}`}
      >
        {Component}
        <div className="icon-container me-3">
          <MIcon
            size="1rem"
            icon={`${toggle ? 'chevron-up' : 'chevron-down'}`}
          />
        </div>
      </button>
      <div
        className={`dropdown-menu ${toggle ? 'show' : ''} ${classNameOptions}`}
      >
        {children}
      </div>
    </div>
  );
}
