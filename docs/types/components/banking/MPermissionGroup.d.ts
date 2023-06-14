/// <reference types="react" />
import { PermissionItemType } from './interface';
declare type Props = {
    title: string;
    description: string;
    permissionState: string;
    permissionList: Array<PermissionItemType>;
    onChangePermission: (permission: PermissionItemType, isChecked: boolean) => void;
    onCustomAction?: (permission: PermissionItemType) => void;
};
export default function MPermissionGroup({ title, description, permissionState, permissionList, onChangePermission, onCustomAction, }: Props): JSX.Element;
export {};
