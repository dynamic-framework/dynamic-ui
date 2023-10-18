import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class DInputSwitch implements ComponentInterface {
  el: HTMLDInputSwitchElement;
  /**
   * The text to display in the switch.
   */
  label?: string;
  /**
   * Id
   */
  innerId: string;
  /**
   * Id
   */
  name?: string;
  /**
   * Flag to change the check state
   */
  isChecked?: boolean;
  /**
   * Flag to disable the input
   */
  isDisabled?: boolean;
  /**
   * Flag to disable the onMChange event
   */
  isReadonly?: boolean;
  /**
   * Emitted when the switch has changed
   */
  eventChange: EventEmitter<boolean>;
  internalIsChecked?: boolean;
  watchIsCheckedHandler(newValue: boolean): void;
  connectedCallback(): void;
  private changeHandler;
  render(): any;
}
