import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class MFormSwitch implements ComponentInterface {
  /**
   * The text to display in the switch.
   */
  label: string;
  /**
   * The text to display when the switch is on.
   */
  labelOn: string;
  /**
   * The text to display when the switch is off.
   */
  labelOff: string;
  /**
   * Id
   */
  mId: string;
  /**
   * Flag to change the check state
   */
  isChecked?: boolean;
  /**
   * Flag to disable the input
   */
  isDisabled: boolean;
  /**
   * Emitted when the switch has changed
   */
  mChange: EventEmitter<boolean>;
  internalIsChecked?: boolean;
  watchIsCheckedHandler(newValue: boolean): void;
  connectedCallback(): void;
  private changeHandler;
  render(): any;
}
