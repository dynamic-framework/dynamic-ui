import { PermissionItemType } from './interface';
type Props = {
    title: string;
    description: string;
    permissionState: string;
    permissionList: Array<PermissionItemType>;
    onChangePermission: (permission: PermissionItemType, checked: boolean) => void;
    onCustomAction?: (permission: PermissionItemType) => void;
};
export default function DPermissionGroup({ title, description, permissionState, permissionList, onChangePermission, onCustomAction, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
