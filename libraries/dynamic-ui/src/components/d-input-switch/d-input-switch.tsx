import {
  Component,
  h,
  ComponentInterface,
  Prop,
  Event,
  EventEmitter,
  State,
  Watch,
  Element,
} from '@stencil/core';

@Component({ tag: 'd-input-switch' })
export class DInputSwitch implements ComponentInterface {
  @Element() el!: HTMLDInputSwitchElement;

  /**
   * The text to display in the switch.
   */
  @Prop() label?: string;

  /**
   * Id
   */
  @Prop() innerId!: string;

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
  @Prop() isDisabled?: boolean;

  /**
   * Flag to disable the onMChange event
   */
  @Prop() isReadonly?: boolean;

  /**
   * Emitted when the switch has changed
   */
  @Event() eventChange!: EventEmitter<boolean>;

  @State() internalIsChecked?: boolean;

  @Watch('isChecked')
  watchIsCheckedHandler(newValue: boolean) {
    this.internalIsChecked = newValue;
  }

  connectedCallback() {
    this.internalIsChecked = this.isChecked;

    if (this.isReadonly) {
      this.el.onclick = () => false;
    }
  }

  private changeHandler = (event: Event) => {
    const value = (event.target as HTMLInputElement).checked;
    this.internalIsChecked = value;
    this.eventChange.emit(value);
  };

  render() {
    return (
      <div class="form-check form-switch">
        <input
          id={this.innerId}
          name={this.name}
          onChange={this.changeHandler}
          class="form-check-input"
          type="checkbox"
          role="switch"
          checked={this.internalIsChecked}
          disabled={this.isDisabled}
        />
        {!!this.label && (
          <label
            class="form-check-label"
            htmlFor={this.innerId}
          >
            {this.label}
          </label>
        )}
      </div>
    );
  }
}
