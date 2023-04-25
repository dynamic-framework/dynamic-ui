import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  title: string;
  description: string;
  permissionList: Array<Record<string, unknown>>
}>;

export default function MPermissionGroup({ title, description, permissionList }: Props) {
  return (
    <div className="row operation g-0 mb-3 mb-lg-0">
      <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
        <h6 className="fw-bold mb-3 mb-lg-2">{title}</h6>
        <p className="fs-8 d-none d-lg-block m-0">{description}</p>
      </div>
      <div className="col-12 offset-lg-1 col-lg-7">
        {/*
          Iterate over permissions and create BankingUI component for SinglePermission?
          Or only with children?
        */}
        {/* {permissions.map((permission) => (
          <RolePermission
            key={permission.id}
            permission={permission}
          />
        ))} */}
      </div>
    </div>
  );
}
