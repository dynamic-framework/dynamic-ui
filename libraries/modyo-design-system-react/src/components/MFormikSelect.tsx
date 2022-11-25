/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access */
import { useField } from 'formik';
import { SelectLayoutVariant } from '@modyo-dynamic/modyo-design-system';

import { MSelect } from './proxies';

// TODO: add all props of m-select
type Props = {
  mId: string;
  name: string;
  options: Array<any>;
  variant?: SelectLayoutVariant;
  theme: string;
  label?: string;
  placeholder: string;
  iconStart?: string;
  labelExtractor?: (item: any) => string;
  valueExtractor?: (item: any) => string | number;
};

export default function MFormikSelect(
  {
    mId,
    name,
    options = [],
    variant = 'prime',
    theme = 'tertiary',
    label,
    placeholder,
    iconStart,
    labelExtractor = (item: any) => item?.label as string,
    valueExtractor = (item: any) => item?.value as string,
  }: Props,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [field,, helpers] = useField<any>(name);
  return (
    <MSelect
      mId={mId}
      name={field.name}
      options={options}
      variant={variant}
      theme={theme}
      label={label}
      placeholder={placeholder}
      iconStart={iconStart}
      labelExtractor={labelExtractor}
      valueExtractor={valueExtractor}
      onMChange={({ detail }) => helpers.setValue(detail)}
      onMBlur={({ detail }) => field.onBlur(detail)}
    />
  );
}
