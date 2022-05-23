import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  Host,
  h,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'm-badge',
  styleUrl: 'm-badge.scss',
  shadow: false,
})
export class MBadge implements ComponentInterface {
  /**
   * The theme to use.
   */
  @Prop() theme = 'primary';
  /**
   * The text of badge
   */
  @Prop() text = '';

  render() {
    return (
      <Host class="d-inline-block">
        <span class={`badge ${this.text === '' ? 'badge-dot' : ''} bg-${this.theme}`}>{ this.text }</span>
      </Host>
    );
  }
}
