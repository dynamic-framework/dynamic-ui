import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { NavegableProps } from '../../utils/component-interface';
import type { ListItemVariant, SelectableProps } from './m-list-item-interface';
export declare class MListItem implements ComponentInterface {
  /**
  * The theme to use.
  */
  theme?: string;
  /**
  * Main text of the list.
  */
  text: string;
  /**
  * Subtext of the list.
  */
  subtext: string;
  /**
  * Value of the list
  */
  value?: string | number;
  /**
  * Alternative value
  */
  alternativeValue?: string | number;
  /**
  * Has borders rounded
  */
  isPill: boolean;
  /**
  * The icon to display
  */
  icon?: string;
  /**
   * Icon family class
   */
  iconFamilyClass?: string;
  /**
   * Icon family class
   */
  iconFamilyPrefix?: string;
  /**
  * Url to replace the default icon image
  */
  image: string | null;
  /**
  * Variant for text item list or complete item list
  */
  variant?: ListItemVariant;
  /**
   * Props for the list item selectable variant
   */
  selectableProps?: SelectableProps;
  /**
   * Theme to apply in the list value
   */
  themeValue?: string;
  /**
   * End custom icon
   */
  customActionEndIcon?: string;
  /**
   * Class for button custom action
   */
  customActionClass?: string;
  /**
   * Family class for custom action icon
   */
  customActionEndIconFamilyClass?: string;
  /**
   * Family prefix for custom action icon
   */
  customActionEndIconFamilyPrefix?: string;
  /**
   * Right custom icon clickable
   */
  isLoading?: boolean;
  /**
   * Props for the list item navegable variant
   */
  navegableProps?: NavegableProps;
  /**
   * Emitted when the right custom icon has been clicked.
   */
  mCustomClick?: EventEmitter;
  private clickHandler;
  private getTagType;
  private getTagAttributes;
  private generateHostClasses;
  render(): any;
}
