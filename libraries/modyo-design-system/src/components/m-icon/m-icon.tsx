import {
  Component,
  h,
  Prop,
  Host,
} from '@stencil/core';

import state from '../../utils/store';
import type { ClassMap } from '../../utils/component-interface';
import { prefixBS } from '../../utils/component-config';

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
   * Size of the icon
   * */
  @Prop() size?: string = '1rem';

  /**
   * Is loading
   * */
  @Prop() isLoading = false;

  /**
   * Has circle
   */
  @Prop() hasCircle = false;

  /**
   * Circle size
   */
  @Prop() circleSize?: string = `calc(${this.size} * 3)`;

  /**
   * Loading animation duration
   * */
  @Prop() loadingDuration = 1.8;

  /**
   * To set css color
   * */
  @Prop() color?: string;

  /**
   * To set background color
   * */
  @Prop() backgroundColor?: string;

  /**
   * Family class
   * */
  @Prop() familyClass: string = state.iconFamilyClass;

  /**
   * Family prefix
   * */
  @Prop() familyPrefix: string = state.iconFamilyPrefix;

  private getColorStyle() {
    if (this.color) {
      return { [`--${prefixBS}m-icon-component-color`]: this.color };
    }

    if (this.theme) {
      return { [`--${prefixBS}m-icon-component-color`]: `var(--${prefixBS}${this.theme})` };
    }

    return {};
  }

  private getBackgroundStyle() {
    if (this.backgroundColor) {
      return { [`--${prefixBS}m-icon-component-bg-color`]: this.backgroundColor };
    }

    if (this.hasCircle) {
      if (this.theme) {
        return { [`--${prefixBS}m-icon-component-bg-color`]: `rgba(var(--${prefixBS}${this.theme}-rgb), 0.1)` };
      }
      return { [`--${prefixBS}m-icon-component-bg-color`]: `rgba(var(--${prefixBS}body-color-rgb), 0.1)` };
    }

    return {};
  }

  private getCircleSizeStyle() {
    if (this.hasCircle) {
      return { [`--${prefixBS}m-icon-component-host-size`]: this.circleSize };
    }
    return { [`--${prefixBS}m-icon-component-host-size`]: this.size };
  }

  private generateHostStyleVariables() {
    return {
      [`--${prefixBS}m-icon-component-size`]: this.size,
      [`--${prefixBS}m-icon-component-loading-duration`]: `${this.loadingDuration}s`,
      ...this.getColorStyle(),
      ...this.getBackgroundStyle(),
      ...this.getCircleSizeStyle(),
    };
  }

  private generateClasses(): ClassMap {
    return {
      'm-icon': true,
      [this.familyClass]: true,
      [`${this.familyPrefix}${this.icon}`]: true,
      'm-icon-loading': this.isLoading,
    };
  }

  render() {
    return (
      <Host
        class="m-icon-host"
        style={this.generateHostStyleVariables()}
      >
        <i class={this.generateClasses()} />
      </Host>
    );
  }
}
