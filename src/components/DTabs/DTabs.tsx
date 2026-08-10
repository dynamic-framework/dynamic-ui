import {
  useState,
  useCallback,
  useEffect,
  useRef,
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

  const generateClasses = useMemo(
    () => ({
      nav: true,
      'd-tabs-nav-vertical': vertical && variant !== 'tabs',
      [`nav-${variant}`]: true,
      ...className && { [className]: true },
    }),
    [vertical, variant, className],
  );

  const tabRefs = useRef<Array<React.RefObject<HTMLButtonElement>>>([]);

  useEffect(() => {
    tabRefs.current = options.map((_, i) => tabRefs.current[i] || createRef<HTMLButtonElement>());
  }, [options]);

  // Ensure selected is never disabled
  useEffect(() => {
    if (options.length === 0) return;
    const selectedOption = options.find((opt) => opt.tab === selected);
    if (selectedOption && selectedOption.disabled) {
      const firstEnabled = options.find((opt) => !opt.disabled);
      if (firstEnabled) setSelected(firstEnabled.tab);
    }
  }, [options, selected]);

  // Declarative focus management
  const focusTab = (idx: number) => {
    if (tabRefs.current[idx]?.current) {
      tabRefs.current[idx].current.focus();
    }
  };

  // `options` is commonly passed as an inline array literal (e.g.
  // `options={[{ label: 'SMS', tab: 'sms' }, ...]}`), which creates a new
  // array (and new objects) on every parent render even when its content
  // hasn't changed. `optionsSignature` is a primitive string derived from
  // the data that actually matters (tab id + disabled state), memoized with
  // `useMemo`, so it stays equal across renders as long as the tab list
  // itself doesn't change. We use it ONLY as the effect's dependency below
  // (not inside its body) so the effect re-runs when the tabs truly change,
  // instead of on every unrelated re-render that merely creates a new
  // `options` reference with identical content.
  const optionsSignature = useMemo(
    () => options.map((opt) => `${opt.tab}:${opt.disabled ? '1' : '0'}`).join('|'),
    [options],
  );

  // Focus selected tab when selected changes.
  // Depending on `options` here (instead of `optionsSignature`) would steal
  // focus away from unrelated elements on the page (e.g. an OTP input)
  // whenever a parent re-render passes a new `options` array reference,
  // since `focusTab` would then be called again on every such render even
  // though `selected` never changed. The effect still reads the live
  // `options` array from the closure to compute `idx`, it just doesn't
  // re-run because of it.
  useEffect(() => {
    const idx = options.findIndex((opt) => opt.tab === selected && !opt.disabled);
    if (idx !== -1) {
      focusTab(idx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, optionsSignature]);

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
          focusTab(next);
          setSelected(options[next].tab);
          break;
        }
      }
    }
    if (e.key === 'ArrowLeft' || (vertical && e.key === 'ArrowUp')) {
      e.preventDefault();
      for (let i = 0; i < count; i += 1) {
        prev = (prev - 1 + count) % count;
        if (!options[prev].disabled) {
          focusTab(prev);
          setSelected(options[prev].tab);
          break;
        }
      }
    }
  }, [options, vertical]);

  let tablistProps = {};
  if (ariaLabelledBy) {
    tablistProps = { 'aria-labelledby': ariaLabelledBy };
  } else if (ariaLabel) {
    tablistProps = { 'aria-label': ariaLabel };
  }

  const isSelected = useCallback((tab: DTabOption['tab']) => (
    selected === tab
  ), [selected]);

  const value = useMemo(() => ({
    isSelected,
  }), [isSelected]);

  return (
    <TabContext.Provider value={value}>
      <div
        className={classNames({
          'd-tabs': true,
          'd-tabs-column': !vertical || variant === 'tabs',
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
          {options.map((option, idx) => {
            const isTabSelected = !!option.tab && option.tab === selected;
            return (
              <li
                role="presentation"
                key={option.tab}
                className="nav-item"
              >
                <button
                  ref={tabRefs.current[idx]}
                  id={`${option.tab}Tab`}
                  className={classNames(
                    'nav-link',
                    { active: isTabSelected },
                    classNameTab,
                  )}
                  type="button"
                  role="tab"
                  aria-controls={`${option.tab}Pane`}
                  aria-selected={isTabSelected}
                  tabIndex={isTabSelected ? 0 : -1}
                  disabled={option.disabled}
                  onClick={() => onSelect(option)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="d-tabs-content tab-content">
          {children}
        </div>
      </div>
    </TabContext.Provider>
  );
}

export default Object.assign(DTabs, {
  Tab: DTabContent,
});
