import { PermissionItemType } from './interface';
declare type Props = {
    permission: PermissionItemType;
    permissionState: string;
    onChange: (isChecked: boolean) => void;
    onAction?: () => void;
};
export default function MPermissionItem({ permission, permissionState, onChange, onAction, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
