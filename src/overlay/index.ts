/**
 * Overlay components: the only entry point of the package that depends on
 * `framer-motion`. Import them from `@dynamic-framework/ui-react/overlay` so
 * widgets that do not use them never bundle the animation library.
 */
export {
  default as DModal,
  DModalHeader,
  DModalBody,
  DModalFooter,
} from '../components/DModal';
export {
  default as DOffcanvas,
  DOffcanvasHeader,
  DOffcanvasBody,
  DOffcanvasFooter,
} from '../components/DOffcanvas';
export { default as DConfirmModalContainer } from '../components/DConfirmModal/DConfirmModalContainer';
export type { ConfirmModalEntry, ConfirmModalStore } from '../components/DConfirmModal/types';
export { default as useConfirmModal } from '../hooks/useConfirmModal';
export type {
  UseConfirmModalConfig,
  UseConfirmModalReturn,
  ConfirmModalColor,
  CriticalConfirmConfig,
} from '../hooks/useConfirmModal';
