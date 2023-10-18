import { useField } from 'formik';

import type { ComponentProps } from 'react';

import DInputCurrency from './DInputCurrency';

type Props = Omit<ComponentProps<typeof DInputCurrency>, 'name' | 'value'> & {
  name: string;
};

export default function DFormikInputCurrency(
  {
    name,
    hint,
    ...props
  }: Props,
) {
  const [field, meta, helpers] = useField<number | undefined>(name);
  return (
    <DInputCurrency
      {...props}
      name={field.name}
      value={field.value}
      onChange={(value) => helpers.setValue(value)}
      onBlur={(value) => field.onBlur(value)}
      isInvalid={!!meta.error}
      hint={meta?.error || hint}
    />
  );
}
