import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
  Event,
} from '@stencil/core';

import type { ClassMap, FormControlLayoutDirection } from '../../utils/component-interface';

import type { CouponEvent, CouponInputType } from './m-coupon-interface';

@Component({
  tag: 'm-coupon',
  styleUrl: 'm-coupon.scss',
})
export class MCoupon implements ComponentInterface {
  /**
   * Id for the input
   * */
  @Prop() mId!: string;

  /**
   * Label for the input
   * */
  @Prop() label = '';

  /**
   * Icon for the label text
   * */
  @Prop() labelIcon = 'info-circle';

  /**
   * Icon label family class
   */
  @Prop() labelIconFamilyClass?: string;

  /**
   * Icon label family class
   */
  @Prop() labelIconFamilyPrefix?: string;

  /**
   * Icon of the left
   * */
  @Prop() iconStart?: string;

  /**
   * Left icon family class
   */
  @Prop() iconStartFamilyClass?: string;

  /**
   * Left icon family class
   */
  @Prop() iconStartFamilyPrefix?: string;

  /**
   * Icon of the middle
   * */
  @Prop() iconMiddle?: string;

  /**
   * Middle icon family class
   */
  @Prop() iconMiddleFamilyClass?: string;

  /**
   * Middle icon family class
   */
  @Prop() iconMiddleFamilyPrefix?: string;

  /**
   * Icon of the end
   * */
  @Prop() iconEnd?: string;

  /**
   * Right icon family class
   */
  @Prop() iconEndFamilyClass?: string;

  /**
   * Right icon family class
   */
  @Prop() iconEndFamilyPrefix?: string;

  /**
   * Has a select input
   * */
  @Prop() hasSelect = false;

  /**
   * Placeholder for the input
   * */
  @Prop() placeholder?: string = '';

  /**
   * * The type of the input
  */
  @Prop() type: CouponInputType = 'text';

  /**
   * Text for the coupon button
   * */
  @Prop() buttonText = 'Apply';

  /**
   * Hint for the m-coupon
   * */
  @Prop() hint?: string;

  /**
   * Icon start for the hint text
   * */
  @Prop() hintIconStart?: string;

  /**
   * Hint left icon family class
   */
  @Prop() hintIconStartFamilyClass?: string;

  /**
   * Hint left icon family class
   */
  @Prop() hintIconStartFamilyPrefix?: string;

  /**
   * Icon end for the hint text
   * */
  @Prop() hintIconEnd?: string;

  /**
   * Hint right icon family class
   */
  @Prop() hintIconEndFamilyClass?: string;

  /**
   * Hint right icon family class
   */
  @Prop() hintIconEndFamilyPrefix?: string;

  /**
   * Theme for the m-cupon
   * */
  @Prop() theme? = 'primary';

  /**
   * Change the layout direction to put the label on top or left of input
   */
  @Prop() layoutDirection: FormControlLayoutDirection = 'vertical';

  /**
   * Emitted when the button is clicked
   */
  @Event({ eventName: 'mClick' }) mClick!: EventEmitter<CouponEvent>;

  /**
   * HTML input elemet
   */
  private htmlInput?: HTMLInputElement;

  /**
   * HTML select elemet
   */
  private htmlSelect?: HTMLSelectElement;

  /**
   * Emit input and select values only when the button was clicked
   */
  private clickHandler = () => {
    this.mClick.emit({
      inputValue: this.htmlInput?.value,
      selectValue: this.htmlSelect?.value,
    });
  };

  private generateHostClasses(): ClassMap {
    return {
      'form-control-layout form-control-layout-coupon': true,
      [`form-control-theme-${this.theme}`]: true,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
    };
  }

  render() {
    return (
      <Host class={this.generateHostClasses()}>
        {this.label && (
          <label htmlFor={this.mId}>
            {this.label}
            {this.labelIcon && (
              <m-icon
                class="form-control-icon"
                icon={this.labelIcon}
                familyClass={this.labelIconFamilyClass}
                familyPrefix={this.labelIconFamilyPrefix}
              />
            )}
          </label>
        )}
        <div class="form-control-input">
          <div class="input-group">
            {this.iconStart && (
              <span
                class="input-group-text"
                id={`${this.mId}-start`}
              >
                {this.iconStart && (
                  <m-icon
                    class="form-control-icon"
                    icon={this.iconStart}
                    familyClass={this.iconStartFamilyClass}
                    familyPrefix={this.iconStartFamilyPrefix}
                  />
                )}
              </span>
            )}
            {this.hasSelect && (
              <select
               // eslint-disable-next-line no-return-assign
                ref={(el) => (this.htmlSelect = el as HTMLSelectElement)}
                class="form-select"
              >
                <slot />
              </select>
            )}
            <input
              // eslint-disable-next-line no-return-assign
              ref={(el) => (this.htmlInput = el as HTMLInputElement)}
              id={this.mId}
              type={this.type}
              class="form-control"
              placeholder={this.placeholder}
              aria-label={this.label}
              aria-describedby={`${this.mId}-add`}
            />
            {this.iconMiddle && (
              <span
                class="input-group-text"
                id={`${this.mId}-middle`}
              >
                <m-icon
                  class="form-control-icon"
                  icon={this.iconMiddle}
                  familyClass={this.iconMiddleFamilyClass}
                  familyPrefix={this.iconMiddleFamilyPrefix}
                />
              </span>
            )}
            <button
              class={`btn btn-text-${this.theme} fw-semibold text-uppercase small`}
              onClick={this.clickHandler}
            >
              {this.buttonText}
            </button>
            {this.iconEnd && (
              <span
                class="input-group-text"
                id={`${this.mId}-end`}
              >
                <m-icon
                  class="form-control-icon"
                  icon={this.iconEnd}
                  familyClass={this.iconEndFamilyClass}
                  familyPrefix={this.iconEndFamilyPrefix}
                />
              </span>
            )}
          </div>
          {this.hint && (
            <m-hint
              text={this.hint}
              theme={this.theme === 'danger' || this.theme === 'tertiary' || this.theme === 'warning' ? this.theme : 'info'}
              {...(this.hintIconStart && ({
                iconStart: this.hintIconStart,
                iconStartFamilyClass: this.hintIconStartFamilyClass,
                iconStartFamilyPrefix: this.hintIconStartFamilyPrefix,
              }))}
              {...(this.hintIconEnd && ({
                iconEnd: this.hintIconEnd,
                iconEndFamilyClass: this.hintIconEndFamilyClass,
                iconEndFamilyPrefix: this.hintIconEndFamilyPrefix,
              }))}
            />
          )}
        </div>
      </Host>
    );
  }
}
