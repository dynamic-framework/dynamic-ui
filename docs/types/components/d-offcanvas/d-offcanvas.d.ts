import { EventEmitter } from '../../stencil-public-runtime';
import { PositionToggleFrom } from './d-offcanvas-interface';
export declare class DOffcanvas {
  el: HTMLDOffcanvasElement;
  /**
   * the name of the offcanvas
   */
  name: string;
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
  openFrom?: PositionToggleFrom;
  /**
   * Footer action direction
   */
  footerActionPlacement?: 'start' | 'end' | 'fill';
  /**
   * Emitted when the input value has changed
   */
  eventClose: EventEmitter<void>;
  componentWillLoad(): void;
  private header;
  private body;
  private footer;
  private closeHandler;
  render(): any;
}
