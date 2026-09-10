/**
 * The lucide-react icons Dynamic UI renders on its own, without the consumer
 * asking for them by name.
 *
 * Two sources feed this list:
 *
 * - The `iconMap` defaults of `DContextProvider` (`src/contexts/DContext.tsx`),
 *   used by close buttons, chevrons, alert states, input adornments and the
 *   stepper checkmark.
 * - Names hard-coded in component JSX or in a prop default, such as
 *   `DDropdown`'s toggle or `DVoucher`'s action buttons.
 *
 * Any bundler-level optimisation that narrows lucide-react down to the icons a
 * widget actually uses must keep this set, or Dynamic UI components break for
 * reasons the widget author cannot see in their own source. That is why the
 * list ships in the package as `dist/icons-core.json` and is exported here.
 *
 * `src/icons/coreIcons.spec.ts` scans `src/components/**` and fails when an
 * internally used icon name is missing from this list or absent from
 * lucide-react, so the two cannot drift apart.
 */
export const CORE_LUCIDE_ICONS = [
  // iconMap defaults — src/contexts/DContext.tsx
  'AlertCircle',
  'AlertTriangle',
  'Calendar',
  'Check',
  'CheckCircle',
  'ChevronDown',
  'ChevronLeft',
  'ChevronRight',
  'ChevronUp',
  'Eye',
  'EyeOff',
  'Info',
  'Minus',
  'Plus',
  'Search',
  'Upload',
  'X',
  // Hard-coded in component JSX or in a prop default
  'Circle',
  'CircleCheck',
  'CircleCheckBig',
  'Download',
  'FileText',
  'MoreVertical',
  'Paperclip',
  'RefreshCw',
  'Share2',
  'Trash',
] as const;

/** A name from {@link CORE_LUCIDE_ICONS}. */
export type CoreLucideIcon = typeof CORE_LUCIDE_ICONS[number];
