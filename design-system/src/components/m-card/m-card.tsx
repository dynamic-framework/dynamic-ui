import type { ComponentInterface, EventEmitter } from '@stencil/core';
import { Component, Event, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'm-card',
  styleUrl: 'm-card.scss',
  shadow: false
})
export class MCard implements ComponentInterface {
  @Prop() theme: string = 'primary';
  @Prop() header?: string = undefined;
  @Prop() disabled: boolean = false;

  @Event() modButtonClick!: EventEmitter;

  buttonClickHandler() {
    this.modButtonClick.emit()
  }

  render() {
    return (
      <Host class="m-card">
        <div
          class={`card bg-${this.theme}`}
          part="card"
        >
          {this.header && (
            <div
              class="card-header"
              part="card-header"
            >
              {this.header}
            </div>
          )}
          <div
            class="card-body"
            part="card-body"
          >
            <slot />
          </div>
        </div>
      </Host>
    );
  }

}
