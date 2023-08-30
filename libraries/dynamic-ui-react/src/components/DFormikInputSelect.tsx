// eslint-disable-next-line max-len
/* eslint-disable @typescript-eslint/no-explicit-any,react/jsx-props-no-spreading,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
import { useField } from 'formik';

import type { ComponentProps } from 'react';

import { DInputSelect } from './proxies';

type Props = Omit<
ComponentProps<typeof DInputSelect>,
| 'name'
| 'labelExtractor'
| 'valueExtractor'
| 'selectedOption'
> & {
  name: string;
  labelExtractor?: (item: any) => string;
  valueExtractor?: (item: any) => string | number;
};

export default function DFormikInputSelect(
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
    <DInputSelect
      {...props}
      name={field.name}
      selectedOption={field.value}
      labelExtractor={labelExtractor}
      valueExtractor={valueExtractor}
      onEventChange={({ detail }) => helpers.setValue(detail)}
      onEventBlur={({ detail }) => field.onBlur(detail)}
    />
  );
}
