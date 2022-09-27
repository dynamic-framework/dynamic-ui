import { MInput } from '@modyolabs/modyo-design-system-react';
import { useState } from 'react';

export default function Inputs() {
  const [value, setValue] = useState('');
  const onChange = ({ detail }: CustomEvent) => {
    setValue(detail);
  };
  return (
    <div className="d-flex flex-row gap-3">
      <MInput
        mId="input-1"
        label="The label"
        labelIcon="@"
        placeholder="Placeholder"
        layoutDirection="horizontal"
        value={value}
        onMChange={onChange}
        iconStart="@"
        iconEnd="@"
        hint="hint to display, also used to display validity feedback"
        hintIconStart="@"
        hintIconEnd="@"
      />
      <MInput
        mId="input-2"
        label="The label"
        labelIcon="@"
        placeholder="Placeholder"
        value={value}
        onMChange={onChange}
        iconStart="@"
        iconEnd="@"
        hint="hint to display, also used to display validity feedback"
        hintIconStart="@"
        hintIconEnd="@"
      />
    </div>
  )
}
