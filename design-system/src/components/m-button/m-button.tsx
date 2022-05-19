import type { ComponentInterface, EventEmitter } from '@stencil/core';
import { Component, Event, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'm-button',
  styleUrl: 'm-button.scss',
  shadow: false
})
export class MButton implements ComponentInterface {
  /**
   * The text to display in the button.
   */
  @Prop() text: string = '';
  /**
   * The type of the button.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';
  /**
   * Flag to disable the button.
   */
  @Prop() disabled: boolean = false;

  /**
   * Emitted when the button has been clicked.
   */
  @Event() modButtonClick!: EventEmitter;

  private buttonClickHandler = () => {
    this.modButtonClick.emit()
  }

  render() {
    return (
      <Host class="m-button">
        <button
          class="btn btn-primary"
          type="button"
          part="button"
          onClick={this.buttonClickHandler}
        >
          {this.text}
        </button>
      </Host>
    );
  }

}
