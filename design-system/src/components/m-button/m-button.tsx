import type { ComponentInterface, EventEmitter } from '@stencil/core';
import { Component, Event, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-button',
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
      <button
        class="btn btn-primary"
        type="button"
        onClick={() => this.buttonClickHandler()}
      >
        {this.text}
      </button>
    );
  }

}
