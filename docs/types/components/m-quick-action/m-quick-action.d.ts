import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { QuickActionVariant, QuickActionState } from './m-quick-action-interface';
export declare class MQuickAction implements ComponentInterface {
  /**
   * The main text of the quick action
   */
  text: string;
  /**
   * The subtext of the quick action
   */
  subtext?: string;
  /**
   * The extra info of the quick action
   */
  extraInfo?: string;
  /**
   * The icon of the quick action
   */
  icon?: string;
  /**
   * Icon family class
   */
  iconFamilyClass?: string;
  /**
   * Icon family class
   */
  iconFamilyPrefix?: string;
  /**
   * The image of the quick action
   */
  image?: string;
  /**
   * The variant of the quick action
   */
  variant?: QuickActionVariant;
  /**
   * The action word for the quick action
   */
  actionWord?: string;
  /**
   * The action icon for the quick action
   */
  actionIcon?: string;
  /**
   * The state of the quick action
   */
  state?: QuickActionState;
  /**
   * Emitted when the input value has changed
   */
  mClick: EventEmitter;
  private clickHandler;
  private generateHostClasses;
  private generateButtonClasses;
  render(): any;
}
