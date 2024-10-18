import { forwardRef } from 'react';

import type { ComponentPropsWithoutRef, ForwardedRef, RefObject } from 'react';

import DInput from '../DInput';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate';

type Props = ComponentPropsWithoutRef<typeof DInput>;

/**
 * @deprecated
 */
function DInputSearch(
  {
    type,
    iconEnd: iconEndProp,
    iconEndAriaLabel = 'search',
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement>);

  return (
    <DInput
      ref={inputRef}
      type="text"
      iconEnd="search"
      iconEndAriaLabel={iconEndAriaLabel}
      {...props}
    />
  );
}

const ForwardedDInputSearch = forwardRef<HTMLInputElement, Props>(DInputSearch);
ForwardedDInputSearch.displayName = 'DInputSearch';
export default ForwardedDInputSearch;
