import {
  Component,
  h,
  Prop,
  ComponentInterface,
  Event,
  EventEmitter,
} from '@stencil/core';

import type { FormCheckType } from './m-input-check-interface';

@Component({ tag: 'm-input-check' })
export class MInputCheck implements ComponentInterface {
  /**
   * Set whether is a checkbox input or a radio input
   */
  @Prop() type!: FormCheckType;

  /**
   * HTML Name to use within a form or JS reference
   */
  @Prop() name?: string;

  /**
   * Text that will be displayed beside Check input or Radio input
   */
  @Prop() label?: string;

  /**
   * Set checkbox or radio button marked as selected or not
   */
  @Prop() isChecked = false;

  /**
   * Form control identifier
   */
  @Prop() mId!: string;

  /**
   * Set input as disabled
   */
  @Prop() isDisabled = false;

  /**
   * Set view of checkbox as indeterminated
   */
  @Prop() isIndeterminate?: boolean;

  /**
   * A string representing the value of the checkbox or radio
   */
  @Prop() value?: string;

  /**
   * Emitted when the switch has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter;

  private changeHandler = (event: Event) => {
    const { checked, value } = (event.target as HTMLInputElement);
    this.mChange.emit({
      isChecked: checked,
      value,
    });
  };

  render() {
    if (!this.label) {
      return (
        <input
          onChange={this.changeHandler}
          class="m-input-check form-check-input"
          type={this.type}
          name={this.name}
          id={this.mId}
          value={this.value}
          checked={this.isChecked}
          disabled={this.isDisabled}
          indeterminate={this.isIndeterminate}
        />
      );
    }

    return (
      <div class="m-input-check form-check">
        <input
          onChange={this.changeHandler}
          class="form-check-input"
          type={this.type}
          name={this.name}
          id={this.mId}
          value={this.value}
          checked={this.isChecked}
          disabled={this.isDisabled}
          indeterminate={this.isIndeterminate}
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
