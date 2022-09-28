import {
  createContext,
  useState,
  useCallback,
  useContext,
} from 'react';
import type { PropsWithChildren } from 'react';
import classnames from 'classnames';

export type TabOption = {
  label: string;
  tab: string;
  icon?: string;
};

type Props = PropsWithChildren<{
  onChange: (option: TabOption) => void;
  options: Array<TabOption>;
  defaultSelected: string;
}>;

const TabContext = createContext<string>('');

export default function MTabs(
  {
    onChange,
    options,
    defaultSelected,
    children,
  }: Props,
) {
  const [selected, setSelected] = useState<string>(defaultSelected);

  const onSelect = useCallback((option: TabOption) => {
    if (option.tab) {
      setSelected(option.tab);
    }
    onChange(option);
  }, [onChange]);

  return (
    <TabContext.Provider value={selected}>
      <nav>
        <div
          className="nav nav-tabs"
          role="tablist"
        >
          {options.map((option) => (
            <button
              key={option.label}
              className={classnames(
                'nav-link',
                {
                  active: option.tab === selected,
                },
              )}
              type="button"
              role="tab"
              onClick={() => onSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </nav>
      {children}
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
