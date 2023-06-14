import { EventEmitter } from '../../stencil-public-runtime';
import { ModalSize, FullScreenFrom } from './m-modal-interface';
export declare class MModal {
  el: HTMLMModalElement;
  /**
   * the name of the modal
   */
  name: string;
  /**
   * Close button text
   */
  closeText?: string;
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
   * Background image header
   */
  imageHeader?: string;
  /**
   * No display close button
   */
  showCloseButton?: boolean;
  /**
   * Emitted when the input value has changed
   */
  mClose: EventEmitter<void>;
  componentWillLoad(): void;
  private header;
  private body;
  private footer;
  private closeHandler;
  private fullScreenClass;
  private generateModalDialogClasses;
  render(): any;
}
