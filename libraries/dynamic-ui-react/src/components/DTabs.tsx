import {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import type { PropsWithChildren } from 'react';
import classnames from 'classnames';

export type DTabOption = {
  label: string;
  tab: string;
  isDisabled?: boolean;
};

type Props = PropsWithChildren<{
  onEventChange: (option: DTabOption) => void;
  options: Array<DTabOption>;
  defaultSelected: string;
  className?: string;
  isVertical?: boolean;
}>;

type TabContextState = {
  isSelected: (tab: DTabOption['tab']) => boolean;
};

const TabContext = createContext<TabContextState | undefined>(undefined);

export default function DTabs(
  {
    children,
    defaultSelected,
    onEventChange,
    options,
    className,
    isVertical,
  }: Props,
) {
  const [selected, setSelected] = useState<string>(defaultSelected);

  const onSelect = useCallback((option: DTabOption) => {
    if (option.tab) {
      setSelected(option.tab);
    }
    onEventChange(option);
  }, [onEventChange]);

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
        })}
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

export function useTabContext() {
  const context = useContext(TabContext);

  if (context === undefined) {
    throw new Error('useTabContext was used outside of MTab');
  }

  return context;
}
