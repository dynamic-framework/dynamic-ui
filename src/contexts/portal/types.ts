/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react';

export type PortalStackProps = {
  stack: Array<{
    name: string;
    Component: FC<{ name: string; payload: any }>;
    payload: unknown;
  }>;
};

export type PortalStackRenderer = FC<PortalStackProps>;
