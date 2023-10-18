import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class DQuickActionButton implements ComponentInterface {
  /**
   * The title
   */
  line1: string;
  /**
   * The subtitle
   */
  line2: string;
  /**
   * Action link text, displayed when the icon is not set
   */
  actionLinkText?: string;
  /**
   * Action link theme
   */
  actionLinkTheme: string;
  /**
   * The icon to indicate the action
   */
  actionIcon?: string;
  /**
   * Second action icon
   */
  secondaryActionIcon?: string;
  /**
   * Icon family class
   */
  actionIconFamilyClass?: string;
  /**
   * Icon family class
   */
  actionIconFamilyPrefix?: string;
  /**
   * Representative image
   */
  representativeImage?: string;
  /**
   * Representative icon, displayed when the representativeImage is not set
   */
  representativeIcon?: string;
  /**
   * Representative icon theme
   */
  representativeIconTheme: string;
  /**
   * Representative icon circle
   */
  representativeIconHasCircle?: boolean | undefined;
  /**
   * Icon family class
   */
  representativeIconFamilyClass?: string;
  /**
   * Icon family class
   */
  representativeIconFamilyPrefix?: string;
  /**
   * Emitted when the input value has changed
   */
  eventClick: EventEmitter;
  /**
   * Emitted when the input value has changed
   */
  eventClickSecondary: EventEmitter;
  private globalClickHandler;
  private actionLinkClickHandler;
  private secondActionLinkClickHandler;
  private getTag;
  render(): any;
}
