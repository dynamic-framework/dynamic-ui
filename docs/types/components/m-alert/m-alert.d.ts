import { EventEmitter } from '../../stencil-public-runtime';
import type { AlertType } from './m-alert-interface';
export declare class MAlert {
  /**
   * Alert type
   */
  type: AlertType;
  /**
   * Alert icon
   */
  icon?: string;
  /**
   * Right icon family class
   */
  iconFamilyClass?: string;
  /**
   * Right icon family class
   */
  iconFamilyPrefix?: string;
  /**
   * Show alert icon
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
  private getIcon;
  private generateStyleVariables;
  render(): any;
}
