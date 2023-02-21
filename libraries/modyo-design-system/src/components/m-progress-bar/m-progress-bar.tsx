import {
  Component,
  Host,
  h,
  Prop,
  ComponentInterface,
} from '@stencil/core';

import { ClassMap } from '../../utils/component-interface';

@Component({
  tag: 'm-progress-bar',
  styleUrl: 'm-progress-bar.scss',
  shadow: false,
})
export class MProgressBar implements ComponentInterface {
  /**
   * Current progress-bar value
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
  * Additional classes for component container
  */
  @Prop() classNameContainer?: string;
  /**
  * Additional classes for progress container
  */
  @Prop() classNameProgress?: string;
  /**
  * Additional classes for progress bar
  */
  @Prop() classNameBar?: string;
  /**
  * Enable striped animation
  */
  @Prop() enableStripedAnimation = false;
  /**
  * Enable dark mode
  */
  @Prop() enableDarkMode = false;

  private formatProgress() {
    return `${this.currentValue}%`;
  }

  private generateHostClasses(): ClassMap {
    return {
      'm-progress-bar': true,
      [`${this.classNameContainer}`]: !!this.classNameContainer,
    };
  }

  private generateContainerClasses(): ClassMap {
    return {
      progress: true,
      'dark-mode': this.enableDarkMode,
    };
  }

  private generateClasses(): ClassMap {
    return {
      'progress-bar': true,
      [`${this.classNameBar}`]: !!this.classNameBar,
      'progress-bar-striped progress-bar-animated': this.enableStripedAnimation,
    };
  }

  render() {
    return (
      <Host class={this.generateHostClasses()}>
        <div class={this.generateContainerClasses()}>
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
        <span class="progress-text">
          {this.formatProgress()}
        </span>
      </Host>
    );
  }
}
