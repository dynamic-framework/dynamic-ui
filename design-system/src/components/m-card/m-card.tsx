import type { ComponentInterface } from '@stencil/core';
import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'm-card',
  styleUrl: 'm-card.scss',
  shadow: false
})
export class MCard implements ComponentInterface {
  /**
   * The theme to use
   */
  @Prop() theme: string = 'primary';
  /**
   * The header text
   */
  @Prop() header?: string = undefined;


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
