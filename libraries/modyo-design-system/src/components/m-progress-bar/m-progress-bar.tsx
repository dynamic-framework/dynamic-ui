import {
  Component,
  h,
  Prop,
  ComponentInterface,
} from '@stencil/core';

import { ClassMap } from '../../utils/component-interface';

@Component({ tag: 'm-progress-bar' })
export class MProgressBar implements ComponentInterface {
  /**
   * Current progress value
   */
  @Prop() currentValue!: number;

  /**
   * Minimum value of the bar
   */
  @Prop() minValue = 0;

  /**
  * Maximum value of the bar
  */
  @Prop() maxValue = 100;

  /**
  * Enable striped animation
  */
  @Prop() enableStripedAnimation = false;

  private formatProgress() {
    return `${this.currentValue}%`;
  }

  private generateClasses(): ClassMap {
    return {
      'progress-bar': true,
      'progress-bar-striped progress-bar-animated': this.enableStripedAnimation,
    };
  }

  render() {
    return (
      <div class="m-progress-bar">
        <div class="progress">
          <div
            class={this.generateClasses()}
            role="progressbar"
            aria-label="Progress bar"
            style={{ width: `${this.currentValue}%` }}
            aria-valuenow={this.currentValue}
            aria-valuemin={this.minValue}
            aria-valuemax={this.maxValue}
          />
        </div>
        <span class="m-progress-text">
          {this.formatProgress()}
        </span>
      </div>
    );
  }
}
