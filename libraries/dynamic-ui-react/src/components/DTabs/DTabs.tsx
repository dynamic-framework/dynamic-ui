import {
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import classnames from 'classnames';

import type { PropsWithChildren } from 'react';

import TabContext from './TabContext';
import DTabContent from './components/DTabContent';

import type { BaseProps } from '../interface';

export type DTabOption = {
  label: string;
  tab: string;
  isDisabled?: boolean;
};

type Props = BaseProps & PropsWithChildren<{
  onChange: (option: DTabOption) => void;
  options: Array<DTabOption>;
  defaultSelected: string;
  isVertical?: boolean;
}>;

function DTabs(
  {
    children,
    defaultSelected,
    onChange,
    options,
    className,
    style,
    isVertical,
  }: Props,
) {
  const [selected, setSelected] = useState<string>(defaultSelected);

  const onSelect = useCallback((option: DTabOption) => {
    if (option.tab) {
      setSelected(option.tab);
    }
    onChange(option);
  }, [onChange]);

  useEffect(() => {
    setSelected(defaultSelected);
  }, [defaultSelected]);

  const isSelected = useCallback((tab: DTabOption['tab']) => (
    selected === tab
  ), [selected]);

  const value = useMemo(() => ({
    isSelected,
  }), [isSelected]);

  return (
    <TabContext.Provider value={value}>
      <div
        className={classnames({
          'd-tabs': true,
          'd-tabs-vertical': isVertical,
        }, className)}
        style={style}
      >
        <nav className="nav">
          {options.map((option) => (
            <button
              key={option.label}
              id={`${option.tab}Tab`}
              className={
                classnames(
                  'nav-link',
                  {
                    active: option.tab === selected,
                  },
                  className,
                )
              }
              type="button"
              role="tab"
              aria-controls={`${option.tab}Pane`}
              aria-selected={option.tab === selected}
              disabled={option.isDisabled}
              onClick={() => onSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </nav>
        <div className="tab-content">
          {children}
        </div>
      </div>
    </TabContext.Provider>
  );
}

export default Object.assign(DTabs, {
  Tab: DTabContent,
});
