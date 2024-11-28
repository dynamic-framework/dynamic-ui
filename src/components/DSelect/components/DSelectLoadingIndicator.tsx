import classNames from 'classnames';

import type { GroupBase, LoadingIndicatorProps } from 'react-select';

export default function DSelectLoadingIndicator<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  {
    innerProps,
  }: LoadingIndicatorProps<Option, IsMulti, Group>,
) {
  return (
    <div
      className={classNames({
        'd-select__indicator': true,
        'd-select__loading-indicator': true,
      })}
      {...innerProps}
    >
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      >
        <span className="visually-hidden">Loading...</span>
      </span>
    </div>
  );
}
