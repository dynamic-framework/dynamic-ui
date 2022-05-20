import type { ComponentInterface } from '@stencil/core';
import {
  Component,
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
      <span class={`${this.text !== '' ? 'badge' : 'badge-dot'} bg-${this.theme}`}>{ this.text }</span>
    );
  }
}
