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
  label: string | React.ReactNode;
  tab: string;
  disabled?: boolean;
};

export type TabVariant = 'tabs' | 'pills' | 'underline' | 'toggle-button-group';

type Props = BaseProps & PropsWithChildren<{
  classNameTab?: string;
  onChange?: (option: DTabOption) => void;
  options: Array<DTabOption>;
  defaultSelected: string;
  vertical?: boolean;
  variant?: TabVariant;
}>;

function DTabs(
  {
    children,
    defaultSelected,
    onChange,
    options,
    className,
    classNameTab,
    style,
    vertical,
    variant = 'underline',
    dataAttributes,
  }: Props,
) {
  const [selected, setSelected] = useState<string>(defaultSelected);

  const onSelect = useCallback((option: DTabOption) => {
    if (option.tab) {
      setSelected(option.tab);
    }
    onChange?.(option);
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
      'flex-column align-items-center': vertical && variant !== 'tabs',
      [`nav-${variant}`]: true,
      ...className && { [className]: true },
    }),
    [vertical, variant, className],
  );

  return (
    <TabContext.Provider value={value}>
      <div
        className={classNames({
          'd-flex w-100': true,
          'flex-column': !vertical || variant === 'tabs',
        })}
        style={style}
        {...dataAttributes}
      >
        <nav className={classNames(generateClasses)}>
          {options.map((option) => (
            <button
              key={option.tab}
              id={`${option.tab}Tab`}
              className={
                classNames(
                  'nav-link',
                  {
                    active: option.tab === selected,
                  },
                  classNameTab,
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
        <div className="tab-content w-100">
          {children}
        </div>
      </div>
    </TabContext.Provider>
  );
}

export default Object.assign(DTabs, {
  Tab: DTabContent,
});
