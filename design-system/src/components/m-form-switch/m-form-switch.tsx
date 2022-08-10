import {
  Component,
  Host,
  h,
  ComponentInterface,
  Prop,
  Event,
  EventEmitter,
  State,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'm-form-switch',
  styleUrl: 'm-form-switch.scss',
  shadow: false,
})
export class MFormSwitch implements ComponentInterface {
  /**
   * The text to display in the switch.
   */
  @Prop() label!: string;
  /**
   * The text to display when the switch is on.
   */
  @Prop() labelOn = 'On';
  /**
   * The text to display when the switch is off.
   */
  @Prop() labelOff = 'Off';
  /**
   * Id
   */
  @Prop() mId! : string;
  /**
   * Flag to change the check state
   */
  @Prop() isChecked?: boolean;
  /**
   * Flag to disable the input
   */
  @Prop() isDisabled = false;

  @State() internalIsChecked?: boolean;

  /**
   * Emitted when the switch has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<boolean>;

  private changeHandler = (event: Event) => {
    const value = (event.target as HTMLInputElement).checked;
    this.internalIsChecked = value;
    this.mChange.emit(value);
  };

  @Watch('isChecked')
  watchIsCheckedHandler(newValue: boolean) {
    this.internalIsChecked = newValue;
  }

  connectedCallback() {
    this.internalIsChecked = this.isChecked;
  }

  render() {
    return (
      <Host class="form-switch-box">
        <div class="d-flex">
          <div class="form-check form-switch form-check-reverse">
            <label
              class="form-check-label me-2"
              htmlFor={this.mId}
            >
              {this.label}
            </label>
            <span class="form-check-label fw-bold">
              {this.internalIsChecked ? this.labelOn : this.labelOff}
            </span>
            <input
              id={this.mId}
              onChange={(event) => this.changeHandler(event)}
              class="form-check-input form-check-switch"
              type="checkbox"
              role="switch"
              checked={this.internalIsChecked}
              disabled={this.isDisabled}
            />
          </div>
        </div>
      </Host>
    );
  }
}
