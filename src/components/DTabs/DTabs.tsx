import {
  useState,
  useCallback,
  useEffect,
  createRef,
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
  ariaLabel?: string;
  ariaLabelledBy?: string;
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
    ariaLabel,
    ariaLabelledBy,
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

  const tabRefs: React.RefObject<HTMLButtonElement | null>[] = useMemo(
    () => options.map(() => createRef<HTMLButtonElement>()),
    [options],
  );

  // Ensure selected is never disabled
  useEffect(() => {
    if (options.length === 0) return;
    const selectedOption = options.find((opt) => opt.tab === selected);
    if (!selectedOption || selectedOption.disabled) {
      const firstEnabled = options.find((opt) => !opt.disabled);
      if (firstEnabled) setSelected(firstEnabled.tab);
    }
  }, [options, selected]);

  const handleKeyDown = useCallback((idx: number, e: React.KeyboardEvent<HTMLButtonElement>) => {
    const count = options.length;
    if (count === 0) return;
    let next = idx;
    let prev = idx;
    if (e.key === 'ArrowRight' || (vertical && e.key === 'ArrowDown')) {
      e.preventDefault();
      for (let i = 0; i < count; i += 1) {
        next = (next + 1) % count;
        if (!options[next].disabled) {
          tabRefs[next]?.current?.focus();
          break;
        }
      }
    }
    if (e.key === 'ArrowLeft' || (vertical && e.key === 'ArrowUp')) {
      e.preventDefault();
      for (let i = 0; i < count; i += 1) {
        prev = (prev - 1 + count) % count;
        if (!options[prev].disabled) {
          tabRefs[prev]?.current?.focus();
          break;
        }
      }
    }
  }, [options, vertical, tabRefs]);

  let tablistProps = {};
  if (ariaLabelledBy) {
    tablistProps = { 'aria-labelledby': ariaLabelledBy };
  } else if (ariaLabel) {
    tablistProps = { 'aria-label': ariaLabel };
  }

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
        <ul
          className={classNames(generateClasses)}
          role="tablist"
          aria-orientation={vertical ? 'vertical' : undefined}
          {...tablistProps}
        >

          {options.map((option, idx) => (
            <li role="presentation" key={option.tab}>
              <button
                ref={tabRefs[idx]}
                id={`${option.tab}Tab`}
                className={
                  classNames(
                    'nav-link',
                    {
                      active: !!option.tab && option.tab === selected,
                    },
                    classNameTab,
                  )
                }
                type="button"
                role="tab"
                aria-controls={`${option.tab}Pane`}
                aria-selected={option.tab === selected}
                tabIndex={option.tab === selected ? 0 : -1}
                disabled={option.disabled}
                onClick={() => onSelect(option)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
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
