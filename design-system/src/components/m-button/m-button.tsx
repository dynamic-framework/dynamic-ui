import type { ComponentInterface, EventEmitter } from '@stencil/core';
import { Component, Event, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'm-button',
  styleUrl: 'm-button.scss',
  shadow: true
})
export class MButton implements ComponentInterface {
  @Prop() text: string = '';
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';
  @Prop() disabled: boolean = false;

  @Event() modButtonClick!: EventEmitter;

  buttonClickHandler() {
    this.modButtonClick.emit()
  }

  render() {
    return (
      <Host class="m-button">
        <button
          class="btn btn-primary"
          type="button"
          part="button"
          onClick={() => this.buttonClickHandler()}
        >
          {this.text}
        </button>
      </Host>
    );
  }

}
