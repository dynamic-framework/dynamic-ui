import { useField } from 'formik';

import type { ComponentProps } from 'react';

import DInput from './DInput';

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
      onChange={({ target }) => helpers.setValue(target.value)}
      onBlur={({ target }) => field.onBlur(target.value)}
      isInvalid={!!meta.error}
      hint={meta.error || hint}
    />
  );
}
