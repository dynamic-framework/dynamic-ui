import {
  Component, Host, h, Prop, ComponentInterface,
} from '@stencil/core';

import type { FormCheckType, FormCheckState } from './m-form-check-interface';

@Component({
  tag: 'm-form-check',
  shadow: false,
  styleUrl: 'm-form-check.scss',
})
export class MFormCheck implements ComponentInterface {
  /**
   * The text to display in the switch.
   */
  @Prop() type!: FormCheckType;
  /**
   * The text to display in the switch.
   */
  @Prop() name?: string;
  /**
   * The text to display in the switch.
   */
  @Prop() label = null;
  /**
   * Checkbox is checked
   */
  @Prop() checked = false;
  /**
   * Label identifier
   */
  @Prop() mId!: string;
  /**
   * Disabled state
   */
  @Prop() disabled = false;
  /**
   * State of checkbox: Succeess, Error, Warning, Loading
   */
  @Prop() state?: FormCheckState ;
  /**
   * If checkbox is indeterminated
   */
  @Prop() indeterminate?: boolean ;

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
        { this.label ? (
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
