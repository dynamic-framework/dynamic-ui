import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { ComponentSize, InputState } from '../../utils/component-interface';
import type { ButtonType, ButtonVariant } from './m-button-interface';
export declare class MButton implements ComponentInterface {
  /**
   * Theme to use.
   */
  theme: string;
  /**
   * The size
   */
  size?: ComponentSize;
  /**
   * The variant to use.
   */
  variant?: ButtonVariant;
  /**
   * Change the state of the button
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
   * The html value of the button.
   */
  value?: string;
  /**
   * The html type of the button.
   */
  type: ButtonType;
  /**
   * Flag to switch to pill button border radius.
   */
  isPill: boolean;
  /**
   * Flag to loading state and disable button.
   */
  isLoading: boolean;
  /**
   * Flag to disable the button, alias to state="disable"
   */
  isDisabled: boolean;
  /**
   * Emitted when the button has been clicked.
   */
  mClick: EventEmitter;
  private clickHandler;
  private generateClasses;
  render(): any;
}
