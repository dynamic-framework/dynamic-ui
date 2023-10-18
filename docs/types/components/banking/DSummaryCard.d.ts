import { Trans } from 'react-i18next';
import { ReactElement } from 'react';
type Props = {
    title: string;
    description: string;
    icon: string;
    iconSize: string;
    iconTheme: string;
    Summary: ReactElement<typeof Trans> | string;
};
export default function DSummaryCard({ title, description, icon, iconSize, iconTheme, Summary, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
