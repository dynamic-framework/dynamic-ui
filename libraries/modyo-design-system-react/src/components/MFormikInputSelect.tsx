// eslint-disable-next-line max-len
/* eslint-disable react/jsx-props-no-spreading,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
import { useField } from 'formik';

import type { ComponentProps } from 'react';

import { MInputSelect } from './proxies';

type Props = Omit<
ComponentProps<typeof MInputSelect>,
| 'name'
| 'labelExtractor'
| 'valueExtractor'
| 'selectedOption'
> & {
  name: string;
  labelExtractor?: (item: any) => string;
  valueExtractor?: (item: any) => string | number;
};

export default function MFormikInputSelect(
  {
    name,
    labelExtractor = (item: any) => item?.label as string,
    valueExtractor = (item: any) => item?.value as string,
    ...props
  }: Props,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [field,, helpers] = useField<any>(name);
  return (
    <MInputSelect
      {...props}
      name={field.name}
      selectedOption={field.value}
      labelExtractor={labelExtractor}
      valueExtractor={valueExtractor}
      onMChange={({ detail }) => helpers.setValue(detail)}
      onMBlur={({ detail }) => field.onBlur(detail)}
    />
  );
}
