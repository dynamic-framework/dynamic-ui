import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { FormControlLayoutDirection } from '../../utils/component-interface';
import type { CouponEvent, CouponInputType } from './m-coupon-interface';
export declare class MCoupon implements ComponentInterface {
  /**
   * Id for the input
   * */
  mId: string;
  /**
   * Label for the input
   * */
  label: string;
  /**
   * Icon for the label text
   * */
  labelIcon: string;
  /**
   * Icon label family class
   */
  labelIconFamilyClass?: string;
  /**
   * Icon label family class
   */
  labelIconFamilyPrefix?: string;
  /**
   * Icon of the left
   * */
  iconStart?: string;
  /**
   * Left icon family class
   */
  iconStartFamilyClass?: string;
  /**
   * Left icon family class
   */
  iconStartFamilyPrefix?: string;
  /**
   * Icon of the middle
   * */
  iconMiddle?: string;
  /**
   * Middle icon family class
   */
  iconMiddleFamilyClass?: string;
  /**
   * Middle icon family class
   */
  iconMiddleFamilyPrefix?: string;
  /**
   * Icon of the end
   * */
  iconEnd?: string;
  /**
   * Right icon family class
   */
  iconEndFamilyClass?: string;
  /**
   * Right icon family class
   */
  iconEndFamilyPrefix?: string;
  /**
   * Has a select input
   * */
  hasSelect: boolean;
  /**
   * Flag for loading state.
  */
  isLoading: boolean;
  /**
   * Placeholder for the input
   * */
  placeholder?: string;
  /**
   * * The type of the input
  */
  type: CouponInputType;
  /**
   * Text for the coupon button
   * */
  buttonText: string;
  /**
   * Hint for the m-coupon
   * */
  hint?: string;
  /**
   * Icon start for the hint text
   * */
  hintIconStart?: string;
  /**
   * Hint left icon family class
   */
  hintIconStartFamilyClass?: string;
  /**
   * Hint left icon family class
   */
  hintIconStartFamilyPrefix?: string;
  /**
   * Icon end for the hint text
   * */
  hintIconEnd?: string;
  /**
   * Hint right icon family class
   */
  hintIconEndFamilyClass?: string;
  /**
   * Hint right icon family class
   */
  hintIconEndFamilyPrefix?: string;
  /**
   * Theme for the m-cupon
   * */
  theme?: string;
  /**
   * Change the layout direction to put the label on top or left of input
   */
  layoutDirection: FormControlLayoutDirection;
  /**
   * Emitted when the button is clicked
   */
  mClick: EventEmitter<CouponEvent>;
  /**
   * HTML input elemet
   */
  private htmlInput?;
  /**
   * HTML select elemet
   */
  private htmlSelect?;
  /**
   * Emit input and select values only when the button was clicked
   */
  private clickHandler;
  private generateHostClasses;
  render(): any;
}
