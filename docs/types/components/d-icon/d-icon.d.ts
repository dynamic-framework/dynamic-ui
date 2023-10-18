export declare class DIcon {
  /**
   * Name of icon to use (in kebab-case)
   */
  icon: string;
  /**
   * Theme of the icon
   */
  theme?: string;
  /**
   * Icon class
   */
  innerClass?: string;
  /**
   * Size of the icon in css length unit
   */
  size?: string;
  /**
   * Enable loading animation
   */
  isLoading: boolean;
  /**
   * Loading animation duration, in seconds
   */
  loadingDuration: number;
  /**
   * Add circle around the icon
   */
  hasCircle: boolean;
  /**
   * Circle size in css length unit
   */
  circleSize?: string;
  /**
   * Icon color in css color unit or var
   */
  color?: string;
  /**
   * Icon background color in css color unit or var
   */
  backgroundColor?: string;
  /**
   * Change the family class to use another icon suite
   */
  familyClass?: string;
  /**
   * Change the family prefix to use another icon suite
   */
  familyPrefix?: string;
  private getColorStyle;
  private getBackgroundStyle;
  private getCircleSizeStyle;
  private generateStyleVariables;
  private generateClasses;
  render(): any;
}
