/// <reference types="react" />
import type { PortalStackProps } from './types';
/**
 * Portal stack without animations. Default renderer until an overlay component
 * registers the animated `DPortalStack`.
 */
export default function DPortalStackStatic({ stack }: PortalStackProps): import("react").JSX.Element;
