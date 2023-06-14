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

export type TabOption = {
  label: string;
  tab: string;
  isDisabled?: boolean;
};

type Props = PropsWithChildren<{
  onChange: (option: TabOption) => void;
  options: Array<TabOption>;
  defaultSelected: string;
  className?: string;
  isVertical?: boolean;
}>;

type TabContextState = {
  isSelected: (tab: TabOption['tab']) => boolean;
};

const TabContext = createContext<TabContextState | undefined>(undefined);

export default function MTabs(
  {
    children,
    defaultSelected,
    onChange,
    options,
    className,
    isVertical,
  }: Props,
) {
  const [selected, setSelected] = useState<string>(defaultSelected);

  const onSelect = useCallback((option: TabOption) => {
    if (option.tab) {
      setSelected(option.tab);
    }
    onChange(option);
  }, [onChange]);

  useEffect(() => {
    setSelected(defaultSelected);
  }, [defaultSelected]);

  const isSelected = useCallback((tab: TabOption['tab']) => (
    selected === tab
  ), [selected]);

  const value = useMemo(() => ({
    isSelected,
  }), [isSelected]);

  return (
    <TabContext.Provider value={value}>
      <div
        className={classnames({
          'm-tabs': true,
          'm-tabs-vertical': isVertical,
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
