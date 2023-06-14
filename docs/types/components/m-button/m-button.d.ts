import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { InputState } from '../../utils/component-interface';
import type { ButtonType, ButtonVariant } from './m-button-interface';
export declare class MButton implements ComponentInterface {
  /**
   * The theme to use.
   */
  theme: string;
  /**
   * The variant to use.
   */
  variant?: ButtonVariant;
  /**
   * Flag to set the button as active.
   */
  state?: InputState;
  /**
   * The text to display.
   */
  text: string;
  /**
   * Icon left to display
   */
  iconStart?: string;
  /**
   * Icon left family class
   */
  iconStartFamilyClass?: string;
  /**
   * Icon left family prefix
   */
  iconStartFamilyPrefix?: string;
  /**
   * Icon right to display
   */
  iconEnd?: string;
  /**
   * Icon right family class
   */
  iconEndFamilyClass?: string;
  /**
   * Icon right family prefix
   */
  iconEndFamilyPrefix?: string;
  /**
   * The value of the button.
   */
  value: string;
  /**
   * The type of the button.
   */
  type: ButtonType;
  /**
   * Flag to switch to pill button border radius.
   */
  isPill: boolean;
  /**
   * Flag for loading state and disable button.
   */
  isLoading: boolean;
  /**
   * Emitted when the button has been clicked.
   */
  mClick: EventEmitter;
  private clickHandler;
  private generateClasses;
  private generateHostClasses;
  render(): any;
}
