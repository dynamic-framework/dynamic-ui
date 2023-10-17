import { useField } from 'formik';

import DInputSelect from './DInputSelect';

import type { DefaultOption, Props as DInputSelectProps } from './DInputSelect';

type Props<T> = Omit<DInputSelectProps<T>, | 'name'> & {
  name: string;
};

export default function DFormikInputSelect<T extends object = DefaultOption>(
  {
    name,
    ...props
  }: Props<T>,
) {
  const [field,, helpers] = useField<T | undefined>(name);
  return (
    <DInputSelect<T>
      {...props}
      name={field.name}
      selectedOption={field.value}
      onChange={(selected) => helpers.setValue(selected)}
      onBlur={(selected) => field.onBlur(selected)}
    />
  );
}
