import {
  createContext,
  useState,
  useCallback,
  useContext,
} from 'react';
import type { PropsWithChildren } from 'react';
import classnames from 'classnames';
import { MIcon } from './proxies';

export type TabOption = {
  label: string;
  tab: string;
  icon?: string;
  disabled?: boolean;
};

type Props = PropsWithChildren<{
  onChange: (option: TabOption) => void;
  options: Array<TabOption>;
  defaultSelected: string;
  variant?: 'pills' | 'group' | undefined;
  className?: string;
}>;

const TabContext = createContext<string>('');

export default function MTabs(
  {
    children,
    className,
    defaultSelected,
    onChange,
    options,
    variant,
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
      <nav className="tabs">
        <div
          className={
            classnames(
              'tab-list',
              {
                [`${variant}`]: !!variant,
              },
              className
            )
          }
          role="tablist"
        >
          {options.map((option) => (
            <button
              key={option.label}
              className={
                classnames(
                  'tab',
                  {
                    selected: option.tab === selected,
                    'tab-icon': !!option.icon,
                  }
                )
              }
              type="button"
              role="tab"
              disabled={option.disabled}
              onClick={() => onSelect(option)}
            >
              {option.icon && (
                <MIcon icon={option.icon} />
              )}
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
