import { EventEmitter } from '../../stencil-public-runtime';
import { PositionToggleFrom } from './m-offcanvas-interface';
export declare class MOffcanvas {
  el: HTMLMOffcanvasElement;
  /**
   * the name of the offcanvas
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
   * Is body scrollable while offcanvas is active
   */
  isScrollable?: boolean;
  /**
   * No display close button
   */
  showCloseButton?: boolean;
  /**
   * Position to show offcanvas from
   */
  openFrom: PositionToggleFrom;
  /**
   * Emitted when the input value has changed
   */
  mClose: EventEmitter<void>;
  componentWillLoad(): void;
  private header;
  private body;
  private footer;
  private closeHandler;
  render(): any;
}
