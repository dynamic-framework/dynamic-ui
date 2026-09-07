import type { ReactNode, SVGProps } from 'react';

import DIcon from '../../src/components/DIcon';
import { DContextProvider } from '../../src/contexts/DContext';

function IconLabel({ label, children }: { label: string; children: ReactNode }) {
  const [main, parenthetical] = label.split(/\s*(?=\()/);

  return (
    <div className="d-flex flex-column align-items-center gap-2" style={{ width: 110 }}>
      {children}
      <span className="text-body-secondary text-center" style={{ fontSize: 12 }}>
        {main}
        {parenthetical && (
          <>
            <br />
            {parenthetical}
          </>
        )}
      </span>
    </div>
  );
}

function LogoSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2 L22 20 L2 20 Z" />
      <circle cx="12" cy="15" r="2" />
    </svg>
  );
}

const CUSTOM_ICONS = { Logo: LogoSvg };

export function ExampleLucideIcons() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 p-4 my-3">
      <IconLabel label='icon="User"'>
        <DIcon icon="User" size="32px" />
      </IconLabel>
      <IconLabel label='icon="Home"'>
        <DIcon icon="Home" size="32px" />
      </IconLabel>
      <IconLabel label='icon="Settings"'>
        <DIcon icon="Settings" size="32px" />
      </IconLabel>
      <IconLabel label='icon="Heart"'>
        <DIcon icon="Heart" size="32px" />
      </IconLabel>
    </div>
  );
}

export function ExampleIconRegistry() {
  return (
    <DContextProvider iconRegistry={CUSTOM_ICONS}>
      <div className="d-flex flex-wrap justify-content-center gap-4 p-4 my-3">
        <IconLabel label='icon="Logo" (registry)'>
          <DIcon icon="Logo" size="32px" />
        </IconLabel>
        <IconLabel label='icon="User" (Lucide fallback)'>
          <DIcon icon="User" size="32px" />
        </IconLabel>
      </div>
    </DContextProvider>
  );
}

export function ExampleDirectSvgIcon() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 p-4 my-3">
      <IconLabel label="icon={LogoSvg}">
        <DIcon icon={LogoSvg} size="32px" />
      </IconLabel>
    </div>
  );
}

export function ExampleBootstrapIcons() {
  return (
    <DContextProvider
      icon={{
        familyClass: 'bi',
        familyPrefix: 'bi-',
        materialStyle: false,
      }}
    >
      <div className="d-flex flex-wrap justify-content-center gap-4 p-4 my-3">
        <IconLabel label='icon="alarm" (bi-alarm)'>
          <DIcon icon="alarm" size="32px" />
        </IconLabel>
        <IconLabel label='icon="gear" (bi-gear)'>
          <DIcon icon="gear" size="32px" />
        </IconLabel>
        <IconLabel label='icon="Home" (Lucide still wins)'>
          <DIcon icon="Home" size="32px" />
        </IconLabel>
      </div>
    </DContextProvider>
  );
}

export function ExampleMaterialIcons() {
  return (
    <DContextProvider
      icon={{
        familyClass: 'material-symbols-outlined',
        familyPrefix: '',
        materialStyle: true,
      }}
    >
      <div className="d-flex flex-wrap justify-content-center gap-4 p-4 my-3">
        <IconLabel label='icon="alarm"'>
          <DIcon icon="alarm" size="32px" />
        </IconLabel>
        <IconLabel label='icon="settings"'>
          <DIcon icon="settings" size="32px" />
        </IconLabel>
      </div>
    </DContextProvider>
  );
}
