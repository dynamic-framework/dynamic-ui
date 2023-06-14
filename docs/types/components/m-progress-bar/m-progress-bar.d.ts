import { ComponentInterface } from '../../stencil-public-runtime';
export declare class MProgressBar implements ComponentInterface {
  /**
   * Current progress value
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
   * Hide current value
   */
  hideCurrentValue?: boolean | undefined;
  /**
  * Enable striped animation
  */
  enableStripedAnimation: boolean;
  private formatProgress;
  private generateClasses;
  render(): any;
}
