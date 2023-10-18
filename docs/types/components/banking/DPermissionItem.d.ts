import { PermissionItemType } from './interface';
type Props = {
    permission: PermissionItemType;
    permissionState: string;
    onChange: (isChecked: boolean) => void;
    onAction?: () => void;
};
export default function DPermissionItem({ permission, permissionState, onChange, onAction, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
