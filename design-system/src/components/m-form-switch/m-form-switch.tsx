import {
  Component, Host, h, ComponentInterface, Prop,
} from '@stencil/core';

@Component({
  tag: 'm-form-switch',
  styleUrl: 'm-switch.scss',
  shadow: false,
})
export class MFormSwitch implements ComponentInterface {
  /**
   * The text to display in the switch.
   */
  @Prop() label = '';
  /**
   * Id
   */
  @Prop() mId! : string;

  render() {
    return (
      <Host class="m-switch">
        <div class="">
          <label
            class="form-check-label"
            htmlFor={this.mId}
          >
            {this.label}
          </label>
          <span class="mx-2">s</span>
          <input
            class="custom-switch"
            type="checkbox"
            role="switch"
            id={this.mId}
          />
        </div>
      </Host>
    );
  }
}
