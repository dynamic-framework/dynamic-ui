/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik';

import type { ComponentProps } from 'react';

import MInputCurrency from './MInputCurrency';

type Props = Omit<ComponentProps<typeof MInputCurrency>, 'name' | 'value'> & {
  name: string;
};

export default function MFormikInput(
  {
    name,
    hint,
    ...props
  }: Props,
) {
  const [field, meta, helpers] = useField<number | undefined>(name);
  return (
    <MInputCurrency
      {...props}
      name={field.name}
      value={field.value}
      onChange={(value) => helpers.setValue(value)}
      onMBlur={({ detail }) => field.onBlur(detail)}
      isInvalid={!!meta.error}
      hint={meta.error || hint}
    />
  );
}
