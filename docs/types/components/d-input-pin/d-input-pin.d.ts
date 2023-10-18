import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { PinInputMode, PinInputType } from './d-input-pin-interface';
export declare class DInputPin implements ComponentInterface {
  /**
   * Id for the input
   * */
  innerId: string;
  /**
   * The label text
   */
  label: string;
  /**
   * Icon for the label text
   */
  labelIcon?: string;
  /**
   * Icon label family class
   */
  labelIconFamilyClass?: string;
  /**
   * Icon label family prefix
   */
  labelIconFamilyPrefix?: string;
  /**
   * Placeholder of the inputs
   */
  placeholder?: string;
  /**
   * Type of the inputs
   */
  type: PinInputType;
  /**
   * Flag to disable the input
   */
  isDisabled: boolean;
  /**
   * Flag to read only the input
   */
  isReadOnly: boolean;
  /**
   * Flag for loading state.
   */
  isLoading: boolean;
  /**
   * Hide the characters
   */
  isSecret: boolean;
  /**
   * Right icon family class
   */
  iconFamilyClass?: string;
  /**
   * Right icon family class
   */
  iconFamilyPrefix?: string;
  /**
   * Number of characters of the pin
   */
  characters: number;
  /**
   * Keyboard style
   */
  innerInputMode: PinInputMode;
  /**
   * Hint for the input
   * */
  hint?: string;
  /**
   * Add is-invalid class
   */
  isInvalid: boolean;
  /**
   * Add is-valid class
   */
  isValid: boolean;
  /**
   * Emitted when the inputs had changed
   */
  eventChange: EventEmitter<string>;
  pattern: string;
  watchMTypeHandler(newValue: string): void;
  private nextInput;
  private prevInput;
  private focusInput;
  private wheelInput;
  private formChange;
  private preventDefaultEvents;
  connectedCallback(): void;
  render(): any;
}
