/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  @Prop() labelOn = '';

  /**
   * The text to display when the switch is off.
   */
  @Prop() labelOff = '';

  /**
   * Id
   */
  @Prop() mId!: string;

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
      <Host class="form-switch-box">
        <div
          class="form-check form-switch form-check-reverse"
          onClick={(e) => e.stopPropagation()}
        >
          <label
            class="form-switch-box-label"
            htmlFor={this.mId}
          >
            <div class="d-flex gap-3 justify-content-between align-items-center flex-grow-1">
              <span class="form-check-label">{this.label}</span>
              <span class="form-check-label fw-bold">
                {this.internalIsChecked ? this.labelOn : this.labelOff}
              </span>
            </div>
            <input
              id={this.mId}
              onChange={(event) => this.changeHandler(event)}
              class="form-check-input form-check-switch"
              type="checkbox"
              role="switch"
              checked={this.internalIsChecked}
              disabled={this.isDisabled}
            />
          </label>
        </div>
      </Host>
    );
  }
}
