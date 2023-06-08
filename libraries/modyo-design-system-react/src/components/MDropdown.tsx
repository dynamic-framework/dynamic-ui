import { useEffect, useState } from 'react';

import type { PropsWithChildren, CSSProperties } from 'react';

type Props = PropsWithChildren<{
  renderComponent: (toggle: boolean) => JSX.Element;
  className?: string;
  classNameButton?: string;
  classNameOptions?: string;
  toggle: boolean;
  setToggle?: (toggle: boolean) => void;
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
    renderComponent,
  }: Props,
) {
  const [innerToggle, setInnerToggle] = useState<boolean>(toggle);

  const handlerToggle = () => {
    setInnerToggle((prevInnerToggle) => !prevInnerToggle);
  };

  useEffect(() => {
    if (setToggle) {
      setToggle(innerToggle);
    }
  }, [innerToggle, setToggle]);

  return (
    <div
      className={`m-dropdown dropdown ${className}`}
    >
      <button
        style={style}
        type="button"
        onClick={handlerToggle}
        className={`dropdown-toggle ${innerToggle ? 'show' : ''} ${classNameButton}`}
      >
        {renderComponent(innerToggle)}
      </button>
      <div
        className={`dropdown-menu ${innerToggle ? 'show' : ''} ${classNameOptions}`}
      >
        {children}
      </div>
    </div>
  );
}
