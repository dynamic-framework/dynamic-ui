import DBadge from '../DBadge';
import DInputSwitch from '../DInputSwitch';
import { PermissionItemType } from './interface';

type Props = {
  permission: PermissionItemType;
  permissionState: string;
  onChange: (isChecked: boolean) => void;
  onAction?: () => void;
};

export default function DPermissionItem({
  permission,
  permissionState,
  onChange,
  onAction = () => {},
}: Props) {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      className="d-flex permission-item align-items-center"
      onClick={onAction}
    >
      <span className="flex-grow-1 label">{permission.label}</span>
      {permission.type === 'custom' && (
        <DBadge
          theme="tertiary"
          text={permissionState}
        />
      )}
      <DInputSwitch
        id={permission.id}
        isChecked={!!permission.value}
        isDisabled={!permission.enabled}
        onChange={(isChecked) => onChange(isChecked)}
      />
    </div>
  );
}
