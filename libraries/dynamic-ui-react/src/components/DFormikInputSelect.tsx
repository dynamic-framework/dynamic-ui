/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line max-len
import { useField } from 'formik';

import type { ComponentProps } from 'react';

import DInputSelect from './DInputSelect';

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
    labelExtractor = (item) => item?.label,
    valueExtractor = (item) => item?.value as string,
    ...props
  }: Props,
) {
  const [field,, helpers] = useField<any>(name);
  return (
    <DInputSelect
      {...props}
      name={field.name}
      selectedOption={field.value}
      labelExtractor={labelExtractor}
      valueExtractor={valueExtractor}
      onChange={(selected) => helpers.setValue(selected)}
      onBlur={(selected) => field.onBlur(selected)}
    />
  );
}
