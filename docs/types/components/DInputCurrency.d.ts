import type { ComponentProps } from 'react';
import DInputCurrencyBase from './DInputCurrencyBase';
type Props = Omit<ComponentProps<typeof DInputCurrencyBase>, 'currencyOptions'>;
export default function DInputCurrency(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
