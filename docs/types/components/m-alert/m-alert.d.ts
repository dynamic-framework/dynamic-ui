import { EventEmitter } from '../../stencil-public-runtime';
export declare class MAlert {
  /**
   * Theme for the alert
   */
  theme: string;
  /**
   * Show icon theme in the alert
   */
  showIcon: boolean;
  /**
   * Show close button
   */
  showClose?: boolean;
  /**
   * Emitted when the button has been clicked.
   */
  mClose: EventEmitter;
  private clickHandler;
  private generateClasses;
  private iconState;
  render(): any;
}
