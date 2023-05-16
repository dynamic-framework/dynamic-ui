import {
  Component,
  h,
  ComponentInterface,
  Prop,
  Event,
  EventEmitter,
  State,
  Watch,
} from '@stencil/core';

@Component({ tag: 'm-input-switch' })
export class MInputSwitch implements ComponentInterface {
  /**
   * The text to display in the switch.
   */
  @Prop() label?: string;

  /**
   * Id
   */
  @Prop() mId!: string;

  /**
   * Id
   */
  @Prop() name?: string;

  /**
   * Flag to change the check state
   */
  @Prop() isChecked?: boolean;

  /**
   * Flag to disable the input
   */
  @Prop() isDisabled = false;

  /**
   * Emitted when the switch has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<boolean>;

  @State() internalIsChecked?: boolean;

  @Watch('isChecked')
  watchIsCheckedHandler(newValue: boolean) {
    this.internalIsChecked = newValue;
  }

  connectedCallback() {
    this.internalIsChecked = this.isChecked;
  }

  private changeHandler = (event: Event) => {
    const value = (event.target as HTMLInputElement).checked;
    this.internalIsChecked = value;
    this.mChange.emit(value);
  };

  render() {
    return (
      <div class="m-input-switch form-check form-switch">
        <input
          id={this.mId}
          name={this.name}
          onChange={this.changeHandler}
          class="form-check-input"
          type="checkbox"
          role="switch"
          checked={this.internalIsChecked}
          disabled={this.isDisabled}
        />
        <label
          class="form-check-label"
          htmlFor={this.mId}
        >
          {this.label}
        </label>
      </div>
    );
  }
}
