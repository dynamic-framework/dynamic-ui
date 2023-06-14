import { MBadge, MInputSwitch } from '../proxies';
import { PermissionItemType } from './interface';

type Props = {
  permission: PermissionItemType;
  permissionState: string;
  onChange: (isChecked: boolean) => void;
  onAction?: () => void;
};

export default function MPermissionItem({
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
        <MBadge
          theme="tertiary"
          text={permissionState}
        />
      )}
      <MInputSwitch
        mId={permission.id}
        isChecked={!!permission.value}
        isDisabled={!permission.enabled}
        onMChange={({ detail: checked }) => onChange(checked)}
      />
    </div>
  );
}
