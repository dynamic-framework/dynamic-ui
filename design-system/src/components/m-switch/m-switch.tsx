import {
  Component, Host, h, ComponentInterface, Prop,
} from '@stencil/core';

@Component({
  tag: 'm-switch',
  shadow: false,
})
export class MSwitch implements ComponentInterface {
  /**
   * The text to display in the switch.
   */
  @Prop() label = '';

  render() {
    return (
      <Host class="m-switch">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            class="form-check-label"
            htmlFor="flexSwitchCheckDefault"
          >
            {this.label}
          </label>
        </div>
      </Host>
    );
  }
}
