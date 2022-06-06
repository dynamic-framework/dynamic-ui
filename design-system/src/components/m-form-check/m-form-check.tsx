import {
  Component, Host, h, Prop, ComponentInterface,
} from '@stencil/core';

import type { FormCheckType, FormCheckState } from './m-form-check-interface';

@Component({
  tag: 'm-form-check',
  styleUrl: 'm-form-check.scss',
  shadow: false,
})
export class MFormCheck implements ComponentInterface {
  /**
   * The text to display in the Check/Radio.
   */
  @Prop() type!: FormCheckType;
  /**
   * The text to display in the Check/Radio.
   */
  @Prop() name?: string;
  /**
   * The text to display in the Check/Radio.
   */
  @Prop() label?: string;
  /**
   * Checkbox is checked
   */
  @Prop() checked = false;
  /**
   * Form control identifier
   */
  @Prop() mId!: string;
  /**
   * Disabled state
   */
  @Prop() disabled = false;
  /**
   * State of checkbox: Succeess, Error, Warning, Loading
   */
  @Prop() state?: FormCheckState;
  /**
   * If checkbox is indeterminated
   */
  @Prop() indeterminate?: boolean;

  private innerInput = (
    <input
      class={`form-check-input ${this.state ? `form-check-input-${this.state}` : ''}`}
      type={this.type}
      name={this.name}
      id={this.mId}
      checked={this.checked}
      disabled={this.disabled}
      indeterminate={this.indeterminate}
    />
  );

  render() {
    return (
      <Host class="form-check-box">
        {this.label ? (
          <div class="form-check">
            { this.innerInput }
            <label
              class="form-check-label"
              htmlFor={this.mId}
            >
              {this.label}
            </label>
          </div>
        ) : this.innerInput}
      </Host>
    );
  }
}
