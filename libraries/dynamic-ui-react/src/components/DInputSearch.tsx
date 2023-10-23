import { forwardRef } from 'react';

import type { ComponentPropsWithoutRef, ForwardedRef, RefObject } from 'react';

import DInput from './DInput';
import useProvidedRefOrCreate from '../hooks/useProvidedRefOrCreate';

import type { Merge } from '../types';

type NonDInputProps = {
  onClick: (value: string | undefined) => void;
};

type Props = Merge<Omit<ComponentPropsWithoutRef<typeof DInput>, 'iconEnd' | 'onIconEndClick'>, NonDInputProps>;

function DInputSearch(
  {
    onClick,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement>);

  return (
    <DInput
      ref={inputRef}
      onIconEndClick={onClick}
      iconEnd="search"
      {...props}
    />
  );
}

const ForwardedDInputSearch = forwardRef<HTMLInputElement, Props>(DInputSearch);
ForwardedDInputSearch.displayName = 'DInputSearch';
export default ForwardedDInputSearch;
