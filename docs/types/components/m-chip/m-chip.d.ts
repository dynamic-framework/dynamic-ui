import { EventEmitter } from '../../stencil-public-runtime';
import type { ComponentInterface } from '../../stencil-public-runtime';
export declare class MChip implements ComponentInterface {
  /**
   * The theme to use.
   */
  theme: string;
  /**
   * The text of badge
   */
  text?: string;
  /**
   * Name of icon to use (in kebab-case)
   */
  icon?: string;
  /**
   * Change the family class to use another icon suite
   */
  iconFamilyClass?: string;
  /**
   * Change the family prefix to use another icon suite
   */
  iconFamilyPrefix?: string;
  /**
   * Show close icon
   */
  showClose?: boolean;
  /**
   * Emitted when the close button has been clicked.
   */
  mClose: EventEmitter;
  private closeHandler;
  generateClasses(): {
    [x: string]: boolean;
    'm-chip': boolean;
  };
  render(): any;
}
