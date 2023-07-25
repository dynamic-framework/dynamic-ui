import { Trans } from 'react-i18next';
import { ReactElement } from 'react';
import { MIcon } from '../proxies';

type Props = {
  title: string;
  description: string;
  icon: string;
  iconSize: string;
  iconTheme: string;
  Summary: ReactElement<typeof Trans> | string;
};

export default function MSummaryCard({
  title,
  description,
  icon,
  iconSize,
  iconTheme,
  Summary,
}: Props) {
  return (
    <div>
      <h6 className="fw-bold fs-6">{title}</h6>
      <p className="fs-8">{description}</p>
      {/* TODO: Replace with new alert version */}
      <div className="bg-white rounded p-4 d-flex gap-3 shadow-sm text-gray-700 fs-8">
        <MIcon
          icon={icon}
          theme={iconTheme}
          size={iconSize}
        />
        {Summary}
      </div>
    </div>
  );
}
