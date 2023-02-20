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
  @Prop() valueCurrent!: number;
  /**
   * Minimum value of the bar
   */
  @Prop() valueMin = 0;
  /**
  * Maximum value of the bar
  */
  @Prop() valueMax = 100;
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
    return `${this.valueCurrent}%`;
  }

  private generateHostClasses(): ClassMap {
    return {
      'm-progress-bar': true,
      [`${this.classNameContainer}`]: !!this.classNameContainer,
    };
  }

  private generateProgressBarContainerClasses(): ClassMap {
    return {
      progress: true,
      'dark-mode': this.enableDarkMode,
    };
  }

  private generateProgressBarClasses(): ClassMap {
    return {
      'progress-bar': true,
      [`${this.classNameBar}`]: !!this.classNameBar,
      'progress-bar-striped progress-bar-animated': this.enableStripedAnimation,
    };
  }

  render() {
    return (
      <Host class={this.generateHostClasses()}>
        <div class={this.generateProgressBarContainerClasses()}>
          <div
            class={this.generateProgressBarClasses()}
            role="progressbar"
            aria-label="Progress bar"
            style={{ width: `${this.valueCurrent}%` }}
            aria-valuenow={this.valueCurrent}
            aria-valuemin={this.valueMin}
            aria-valuemax={this.valueMax}
          />
        </div>
        <span class="progress-text">
          {this.formatProgress()}
        </span>
      </Host>
    );
  }
}
