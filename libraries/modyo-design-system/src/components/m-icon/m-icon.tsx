import {
  Component,
  h,
  Prop,
} from '@stencil/core';

import state from '../../utils/store';
import type { ClassMap } from '../../utils/component-interface';
import { PREFIX_BS } from '../../utils';

@Component({ tag: 'm-icon' })
export class MIcon {
  /**
   * Name of icon to use (in kebab-case)
   */
  @Prop() icon!: string;

  /**
   * Theme of the icon
   */
  @Prop() theme?: string;

  /**
   * Size of the icon in css length unit
   */
  @Prop() size?: string = '1.5rem';

  /**
   * Enable loading animation
   */
  @Prop() isLoading = false;

  /**
   * Loading animation duration, in seconds
   */
  @Prop() loadingDuration = 1.8;

  /**
   * Add circle around the icon
   */
  @Prop() hasCircle = false;

  /**
   * Circle size in css length unit
   */
  @Prop() circleSize?: string = `calc(var(--${PREFIX_BS}m-icon-component-size) * 1)`;

  /**
   * Icon color in css color unit or var
   */
  @Prop() color?: string;

  /**
   * Icon background color in css color unit or var
   */
  @Prop() backgroundColor?: string;

  /**
   * Change the family class to use another icon suite
   */
  @Prop() familyClass?: string = state.iconFamilyClass;

  /**
   * Change the family prefix to use another icon suite
   */
  @Prop() familyPrefix?: string = state.iconFamilyPrefix;

  private getColorStyle() {
    if (this.color) {
      return { [`--${PREFIX_BS}m-icon-component-color`]: this.color };
    }

    if (this.theme) {
      return { [`--${PREFIX_BS}m-icon-component-color`]: `var(--${PREFIX_BS}${this.theme})` };
    }

    return {};
  }

  private getBackgroundStyle() {
    if (this.backgroundColor) {
      return { [`--${PREFIX_BS}m-icon-component-bg-color`]: this.backgroundColor };
    }

    if (this.hasCircle) {
      if (this.theme) {
        return { [`--${PREFIX_BS}m-icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}${this.theme}-rgb), 0.1)` };
      }
      return { [`--${PREFIX_BS}m-icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}body-color-rgb), 0.1)` };
    }

    return {};
  }

  private getCircleSizeStyle() {
    if (this.hasCircle) {
      return { [`--${PREFIX_BS}m-icon-component-padding`]: this.circleSize };
    }
    return { [`--${PREFIX_BS}m-icon-component-padding`]: '0' };
  }

  private generateStyleVariables() {
    return {
      [`--${PREFIX_BS}m-icon-component-size`]: this.size,
      [`--${PREFIX_BS}m-icon-component-loading-duration`]: `${this.loadingDuration}s`,
      ...this.getColorStyle(),
      ...this.getBackgroundStyle(),
      ...this.getCircleSizeStyle(),
    };
  }

  private generateClasses(): ClassMap {
    return {
      'm-icon': true,
      [this.familyClass || state.iconFamilyClass]: true,
      [`${this.familyPrefix || state.iconFamilyPrefix}${this.icon}`]: true,
      'm-icon-loading': this.isLoading,
    };
  }

  render() {
    return (
      <i
        class={this.generateClasses()}
        style={this.generateStyleVariables()}
      />
    );
  }
}
