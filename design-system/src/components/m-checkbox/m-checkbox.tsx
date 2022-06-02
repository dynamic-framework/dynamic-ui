import {
  Component, Host, h, Prop, ComponentInterface,
} from '@stencil/core';

import type { CheckboxType } from './m-checkbox-interface';

@Component({
  tag: 'm-checkbox',
  shadow: false,
  styleUrl: 'm-checkbox.scss',
})
export class MCheckbox implements ComponentInterface {
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
  @Prop() state?: CheckboxType ;
  /**
   * If checkbox is indeterminated
   */
  @Prop() indeterminate?: boolean ;

  render() {
    return (
      <Host class="checkbox-box">
        <div class="form-check">
          <input
            class={`form-check-input ${this.state ? `form-check-input-${this.state}` : ''}`}
            type="checkbox"
            value=""
            id={this.mId}
            checked={this.checked}
            disabled={this.disabled}
            indeterminate={this.indeterminate}
          />
          {this.label && (
            <label
              class="form-check-label"
              htmlFor={this.mId}
            >
              {this.label}
            </label>
          )}
        </div>
      </Host>
    );
  }
}
