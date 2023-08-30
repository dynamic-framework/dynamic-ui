import type { ComponentProps } from 'react';
import { DInputSelect } from './proxies';
declare type Props = Omit<ComponentProps<typeof DInputSelect>, 'name' | 'labelExtractor' | 'valueExtractor' | 'selectedOption'> & {
    name: string;
    labelExtractor?: (item: any) => string;
    valueExtractor?: (item: any) => string | number;
};
export default function DFormikInputSelect({ name, labelExtractor, valueExtractor, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
