/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access */
import { useField } from 'formik';

import { MInputSelect } from './proxies';

// TODO: add all props of m-input-select
type Props = {
  mId: string;
  name: string;
  options: Array<any>;
  label?: string;
  placeholder: string;
  iconStart?: string;
  labelExtractor?: (item: any) => string;
  valueExtractor?: (item: any) => string | number;
  isLoading?: boolean;
};

export default function MFormikSelect(
  {
    mId,
    name,
    options = [],
    label,
    placeholder,
    iconStart,
    labelExtractor = (item: any) => item?.label as string,
    valueExtractor = (item: any) => item?.value as string,
    isLoading,
  }: Props,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [field,, helpers] = useField<any>(name);
  return (
    <MInputSelect
      mId={mId}
      name={field.name}
      options={options}
      label={label}
      placeholder={placeholder}
      iconStart={iconStart}
      labelExtractor={labelExtractor}
      valueExtractor={valueExtractor}
      onMChange={({ detail }) => helpers.setValue(detail)}
      onMBlur={({ detail }) => field.onBlur(detail)}
      isLoading={isLoading}
    />
  );
}
