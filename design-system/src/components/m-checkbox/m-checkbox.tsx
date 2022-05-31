import {
  Component, Host, h, Prop, ComponentInterface,
} from '@stencil/core';

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
   * Checked
   */
  @Prop() idLabel = 'label';

  render() {
    return (
      <Host class="m-checkbox">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id={this.idLabel}
            checked={this.checked}
          />
          {this.label && (
            <label
              class="form-check-label"
              htmlFor={this.idLabel}
            >
              {this.label}
            </label>
          )}
        </div>
      </Host>
    );
  }
}
