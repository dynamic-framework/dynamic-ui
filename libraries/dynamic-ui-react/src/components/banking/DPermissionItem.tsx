import { DBadge, DInputSwitch } from '../proxies';
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
        innerId={permission.id}
        isChecked={!!permission.value}
        isDisabled={!permission.enabled}
        onEventChange={({ detail: checked }) => onChange(checked)}
      />
    </div>
  );
}
