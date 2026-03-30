import { ComponentProps } from 'react';
import DInput from '../../DInput';
type Props = Pick<ComponentProps<typeof DInput>, 'id' | 'value' | 'onChange' | 'aria-label'>;
export default function DDatePickerTime({ ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export {};
