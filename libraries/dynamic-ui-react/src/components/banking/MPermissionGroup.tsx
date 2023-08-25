import { PermissionItemType } from './interface';
import DPermissionItem from './DPermissionItem';

type Props = {
  title: string;
  description: string;
  permissionState: string;
  permissionList: Array<PermissionItemType>;
  onChangePermission: (permission: PermissionItemType, isChecked: boolean) => void;
  onCustomAction?: (permission: PermissionItemType) => void;
};

export default function MPermissionGroup({
  title,
  description,
  permissionState,
  permissionList,
  onChangePermission,
  onCustomAction = () => {},
}: Props) {
  return (
    <div className="row operation-group g-0 mb-3 mb-lg-0">
      <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
        <h6 className="fw-bold mb-3 mb-lg-2">{title}</h6>
        <p className="fs-8 d-none d-lg-block m-0">{description}</p>
      </div>
      <div className="col-12 offset-lg-1 col-lg-7">
        {permissionList.map((permission) => (
          <DPermissionItem
            key={permission.id}
            permission={permission}
            permissionState={permissionState}
            onChange={(isChecked) => onChangePermission(permission, isChecked)}
            onAction={() => onCustomAction(permission)}
          />
        ))}
      </div>
    </div>
  );
}
