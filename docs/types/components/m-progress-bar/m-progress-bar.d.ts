import { ComponentInterface } from '../../stencil-public-runtime';
export declare class MProgressBar implements ComponentInterface {
  /**
   * Current progress-bar value
   */
  currentValue: number;
  /**
   * Minimum value of the bar
   */
  minValue: number;
  /**
  * Maximum value of the bar
  */
  maxValue: number;
  /**
  * Additional classes for component container
  */
  classNameContainer?: string;
  /**
  * Additional classes for progress container
  */
  classNameProgress?: string;
  /**
  * Additional classes for progress bar
  */
  classNameBar?: string;
  /**
  * Enable striped animation
  */
  enableStripedAnimation: boolean;
  /**
  * Enable dark mode
  */
  enableDarkMode: boolean;
  private formatProgress;
  private generateHostClasses;
  private generateContainerClasses;
  private generateClasses;
  render(): any;
}
