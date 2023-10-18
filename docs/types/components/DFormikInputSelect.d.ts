import type { DefaultOption, Props as DInputSelectProps } from './DInputSelect';
type Props<T> = Omit<DInputSelectProps<T>, 'name'> & {
    name: string;
};
export default function DFormikInputSelect<T extends object = DefaultOption>({ name, ...props }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
