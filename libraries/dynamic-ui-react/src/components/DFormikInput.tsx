/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik';

import type { ComponentProps } from 'react';

import { DInput } from './proxies';

type Props = Omit<ComponentProps<typeof DInput>, 'name' | 'value'> & {
  name: string;
};

export default function DFormikInput(
  {
    name,
    hint,
    ...props
  }: Props,
) {
  const [field, meta, helpers] = useField<string | number>(name);
  return (
    <DInput
      {...props}
      name={field.name}
      value={field.value}
      onEventChange={({ detail }) => helpers.setValue(detail)}
      onEventBlur={({ detail }) => field.onBlur(detail)}
      isInvalid={!!meta.error}
      hint={meta.error || hint}
    />
  );
}
