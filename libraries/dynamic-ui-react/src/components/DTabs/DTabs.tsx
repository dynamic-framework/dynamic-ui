import {
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import TabContext from './TabContext';
import DTabContent from './components/DTabContent';

import type { BaseProps } from '../interface';

export type DTabOption = {
  label: string;
  tab: string;
  disabled?: boolean;
};

type Props = BaseProps & PropsWithChildren<{
  onChange: (option: DTabOption) => void;
  options: Array<DTabOption>;
  defaultSelected: string;
  vertical?: boolean;
  pill?: boolean;
}>;

function DTabs(
  {
    children,
    defaultSelected,
    onChange,
    options,
    className,
    style,
    vertical,
    pill,
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

  const generateClasses = useMemo(
    () => ({
      nav: true,
      'flex-column align-items-center': vertical,
      'nav-pills': pill,
      'nav-tabs': !pill,
      ...className && { [className]: true },
    }),
    [vertical, pill, className],
  );

  return (
    <TabContext.Provider value={value}>
      <div
        className={classNames({
          'd-flex': true,
          'flex-column': !vertical,
        }, className)}
        style={style}
      >
        <nav className={classNames(generateClasses)}>
          {options.map((option) => (
            <button
              key={option.label}
              id={`${option.tab}Tab`}
              className={
                classNames(
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
              disabled={option.disabled}
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
