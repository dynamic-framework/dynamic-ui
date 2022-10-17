import {
  Component,
  h,
  Prop,
} from '@stencil/core';

import type { ClassMap } from '../../utils/component-interface';
import { prefixBS } from '../../utils/component-interface';

@Component({
  tag: 'm-icon',
  styleUrl: 'm-icon.scss',
})
export class MIcon {
  /**
   * Name of icon to use (in kebab-case)
   * */
  @Prop() icon!: string;
  /**
   * Theme of the icon
   * */
  @Prop() theme?: string;
  /**
   * Font size of the icon
   * */
  @Prop() size?: string = 'inherit';
  /**
   * Is loading
   * */
  @Prop() isLoading = false;
  /**
   * Loading animation duration
   * */
  @Prop() duration = 1.8;
  /**
   * To set css color
   * */
  @Prop() color?: string;
  /**
   * To set background color
   * */
  @Prop() backgroundColor?: string;

  private generateClasses(): ClassMap {
    return {
      'bi m-icon': true,
      [`bi-${this.icon}`]: true,
      [`m-icon-${this.theme}`]: !!this.theme,
      'm-icon-loading': this.isLoading,
    };
  }

  render() {
    return (
      <i
        class={this.generateClasses()}
        style={{
          [`--${prefixBS}m-icon-font-size`]: this.size,
          [`--${prefixBS}m-icon-animation-duration`]: `${this.duration}s`,
          ...this.color && { [`--${prefixBS}m-icon-color`]: this.color },
          ...this.backgroundColor && { [`--${prefixBS}m-icon-bg-color`]: this.backgroundColor },
        }}
      />
    );
  }
}
