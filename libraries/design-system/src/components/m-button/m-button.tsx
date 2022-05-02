import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-button',
  shadow: true,
})
export class MButton {
  @Prop() text: string;

  render() {
    return (
      <Host>
        <button type="button">{this.text}</button>
      </Host>
    );
  }

}
