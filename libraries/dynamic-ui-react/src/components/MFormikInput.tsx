/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik';

import type { ComponentProps } from 'react';

import { MInput } from './proxies';

type Props = Omit<ComponentProps<typeof MInput>, 'name' | 'value'> & {
  name: string;
};

export default function MFormikInput(
  {
    name,
    ...props
  }: Props,
) {
  const [field, meta, helpers] = useField<string | number>(name);
  return (
    <MInput
      {...props}
      name={field.name}
      value={field.value}
      onMChange={({ detail }) => helpers.setValue(detail)}
      onMBlur={({ detail }) => field.onBlur(detail)}
      isInvalid={!!meta.error}
    />
  );
}
