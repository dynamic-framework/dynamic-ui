import type { ComponentInterface } from '../../stencil-public-runtime';
export declare class DBadge implements ComponentInterface {
  /**
   * The theme to use.
   */
  theme: string;
  /**
   * The text of badge
   */
  text?: string;
  /**
   *  Enable dot mode
   */
  isDot: boolean;
  generateClasses(): {
    [x: string]: boolean;
    badge: boolean;
    'badge-dot': boolean;
  };
  render(): any;
}
