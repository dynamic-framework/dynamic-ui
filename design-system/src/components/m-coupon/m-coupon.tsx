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
  @Prop() iconLabel?: string = 'info-circle';
  /**
   * Icon of the left
   * */
  @Prop() iconStart?: string;
  /**
   * Icon of the middle
   * */
  @Prop() iconMiddle?: string;
  /**
   * Icon of the end
   * */
  @Prop() iconEnd?: string;
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
   * Text for the button
   * */
  @Prop() textButton?: string = 'Apply';
  /**
   * Hint for the m-cupon
   * */
  @Prop() hint?: string;
  /**
   * Icon start for the hint text
   * */
  @Prop() hintIconStart?: string;
  /**
   * Icon end for the hint text
   * */
  @Prop() hintIconEnd?: string;
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
            {/* TODO: use m-icon component */}
            <span class="form-control-icon">
              <i class={`bi bi-${this.iconLabel}`} />
            </span>
          </label>
        )}
        <div class="form-control-input">
          <div class="input-group">
            {this.iconStart && (
              <span
                class="input-group-text"
                id={`${this.mId}-add`}
              >
                {/* TODO: use m-icon component */}
                <span class="form-control-icon">
                  <i class={`bi bi-${this.iconStart}`} />
                </span>
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
                id={`${this.mId}-add`}
              >
                {/* TODO: use m-icon component */}
                <span class="form-control-icon">
                  <i class={`bi bi-${this.iconMiddle}`} />
                </span>
              </span>
            )}
            <button
              class={`btn btn-text-${this.theme} fw-semibold text-uppercase small`}
              onClick={this.clickHandler}
            >
              {this.textButton}
            </button>
            {this.iconEnd && (
              <span
                class="input-group-text"
                id={`${this.mId}-add`}
              >
                {/* TODO: use m-icon component */}
                <span class="form-control-icon">
                  <i class={`bi bi-${this.iconEnd}`} />
                </span>
              </span>
            )}
          </div>
          {this.hint && (
            <small class="hint">
              { this.hintIconStart && (
                <span class="form-control-icon">
                  {/* TODO: use m-icon component */}
                  <i class={`bi bi-${this.hintIconStart}`} />
                </span>
              )}
              {this.hint}
              { this.hintIconEnd && (
                <span class="form-control-icon">
                  {/* TODO: use m-icon component */}
                  <i class={`bi bi-${this.hintIconEnd}`} />
                </span>
              )}
            </small>
          )}
        </div>
      </Host>
    );
  }
}
