import type { ComponentProps } from 'react';
import { MInputSelect } from './proxies';
declare type Props = Omit<ComponentProps<typeof MInputSelect>, 'name' | 'labelExtractor' | 'valueExtractor' | 'selectedOption'> & {
    name: string;
    labelExtractor?: (item: any) => string;
    valueExtractor?: (item: any) => string | number;
};
export default function MFormikInputSelect({ name, labelExtractor, valueExtractor, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
