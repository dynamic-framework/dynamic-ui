export declare class MIcon {
  /**
   * Name of icon to use (in kebab-case)
   * */
  icon: string;
  /**
   * Theme of the icon
   * */
  theme?: string;
  /**
   * Font size of the icon
   * */
  size?: string;
  /**
   * Is loading
   * */
  isLoading: boolean;
  /**
   * Loading animation duration
   * */
  duration: number;
  /**
   * To set css color
   * */
  color?: string;
  /**
   * To set background color
   * */
  backgroundColor?: string;
  /**
   * Family class
   * */
  familyClass: string;
  /**
   * Family prefix
   * */
  familyPrefix: string;
  private generateClasses;
  render(): any;
}
