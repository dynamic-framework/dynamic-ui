import { EventEmitter } from '../../stencil-public-runtime';
import { ModalSize, FullScreenFrom } from './d-modal-interface';
export declare class DModal {
  el: HTMLDModalElement;
  /**
   * the name of the modal
   */
  name: string;
  /**
   * Modal class
   */
  innerClass?: string;
  /**
   * Is backdrop static
   */
  isStatic?: boolean;
  /**
   * Is modal scrollable
   */
  isScrollable?: boolean;
  /**
   * Is modal centered
   */
  isCentered?: boolean;
  /**
   * Is fullscreen in all sizes
   */
  isFullScreen?: boolean;
  /**
   * Minimum size to apply the fullscreen
   */
  fullScreenFrom?: FullScreenFrom;
  /**
   * Modal size
   */
  modalSize?: ModalSize;
  /**
   * No display close button
   */
  showCloseButton?: boolean;
  /**
   * Footer action direction
   */
  footerActionPlacement?: 'start' | 'end' | 'fill' | 'center';
  /**
   * Emitted when the input value has changed
   */
  eventClose: EventEmitter<void>;
  componentWillLoad(): void;
  private header;
  private body;
  private footer;
  private closeHandler;
  private fullScreenClass;
  private generateClasses;
  private generateModalDialogClasses;
  render(): any;
}
