import {
  Component, Host, h, ComponentInterface, Prop, State,
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
   * Id
   */
  @Prop() mId! : string;

  @State() state = 'Off';

  private toggle = () => {
    this.state = this.state === 'On' ? 'Off' : 'On';
  };

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
            <span class="form-check-label fw-bold">{this.state}</span>
            <input
              onChange={() => this.toggle()}
              class="form-check-input form-check-switch"
              type="checkbox"
              role="switch"
              id={this.mId}
            />
          </div>
        </div>
      </Host>
    );
  }
}
