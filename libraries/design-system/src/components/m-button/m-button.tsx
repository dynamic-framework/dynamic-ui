import {
  Component,
  Event,
  EventEmitter,
  h,
  Prop
} from '@stencil/core';

@Component({
  tag: 'm-button',
  shadow: true
})
export class MButton {
  @Prop() text: string;
  @Prop() type: 'submit' | 'reset' | 'button';
  @Prop() disabled: boolean;

  @Event({ eventName: 'buttonClick' }) buttonClick: EventEmitter;

  buttonClickHandler() {
    this.buttonClick.emit()
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
