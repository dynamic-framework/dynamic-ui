import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  h,
  Prop,
} from '@stencil/core';

@Component({ tag: 'm-badge' })
export class MBadge implements ComponentInterface {
  /**
   * The theme to use.
   */
  @Prop() theme = 'primary';

  /**
   * The text of badge
   */
  @Prop() text = '';

  /**
   *  Enable dot mode
   */
  @Prop() isDot = false;

  // eslint-disable-next-line @stencil/own-methods-must-be-private
  generateClasses() {
    return {
      'm-badge badge': true,
      'badge-dot': this.isDot,
      [`badge-${this.theme}`]: !!this.theme,
    };
  }

  render() {
    return (
      <span class={this.generateClasses()}>
        <span>{this.text}</span>
      </span>
    );
  }
}
