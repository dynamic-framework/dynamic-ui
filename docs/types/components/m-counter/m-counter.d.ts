import { EventEmitter } from '../../stencil-public-runtime';
import type { FormControlLayoutDirection } from '../../utils/component-interface';
export declare class MCounter {
  /**
   * Id of the input
   */
  mId: string;
  /**
   * Label of the input
   */
  label?: string;
  /**
   * Icon for the label text
   * */
  labelIcon: string;
  /**
   * Icon label family class
   */
  labelIconFamilyClass?: string;
  /**
   * Icon label family class
   */
  labelIconFamilyPrefix?: string;
  /**
   * Hint text
   */
  hint?: string;
  /**
   * Left icon of the hint text
   */
  hintIconStart?: string;
  /**
   * Hint left icon family class
   */
  hintIconStartFamilyClass?: string;
  /**
   * Hint left icon family class
   */
  hintIconStartFamilyPrefix?: string;
  /**
   * Right icon of the hint text
   */
  hintIconEnd?: string;
  /**
   * Hint right icon family class
   */
  hintIconEndFamilyClass?: string;
  /**
   * Hint right icon family class
   */
  hintIconEndFamilyPrefix?: string;
  /**
   * Theme of the counter
   */
  theme?: string;
  /**
   * Minimum value for the input
   */
  minValue: number;
  /**
   * Maximum value for the input
   */
  maxValue: number;
  /**
   * Value of the input
   */
  value: number;
  /**
   * Variant of the counter
   */
  variant: 'default' | 'prime';
  /**
   * Change the layout direction to put the label on top or left of input
   */
  layoutDirection: FormControlLayoutDirection;
  /**
   * Is disabled counter
   */
  isDisabled: boolean;
  /**
   * Flag for loading state.
   */
  isLoading: boolean;
  /**
   * Event for input change
   */
  mInput: EventEmitter;
  /**
   * Event for button pressed
   */
  mClick: EventEmitter;
  /**
   * State to show the icon in valid states
   */
  state?: string;
  /**
   * Internal value
   */
  internalValue: number;
  private validStates;
  private inputHandler;
  private clickHandler;
  private generateHostClasses;
  private getTheme;
  watchThemeHandler(newValue: string): void;
  watchValidValueHandler(): void;
  watchValueHandler(): void;
  connectedCallback(): void;
  render(): any;
}
