import type { ComponentPropsWithoutRef } from 'react';
import DInput from '../DInput';
type Props = Omit<ComponentPropsWithoutRef<typeof DInput>, 'iconEnd' | 'type'>;
declare const ForwardedDInputPassword: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInputPassword;
