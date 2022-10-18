import type { HTMLInputTypeAttribute } from 'react';
import { useField } from 'formik';

import { MInput } from './proxies';

// TODO: add all props of m-input
type Props = {
  mId: string;
  label: string;
  name: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  iconStart?: string;
};

export default function MFormikInput(
  {
    mId,
    label,
    name,
    type = 'text',
    placeholder,
    iconStart,
  }: Props,
) {
  const [field,, helpers] = useField<string | number>(name);
  return (
    <MInput
      mId={mId}
      label={label}
      name={field.name}
      value={field.value}
      type={type}
      placeholder={placeholder}
      iconStart={iconStart}
      onMChange={({ detail }) => helpers.setValue(detail)}
      onMBlur={({ detail }) => field.onBlur(detail)}
    />
  );
}
