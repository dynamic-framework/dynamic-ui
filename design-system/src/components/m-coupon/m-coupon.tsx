import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
  Event,
} from '@stencil/core';

import { InputState, InputThemes } from '../../utils/component-interface';

@Component({
  tag: 'm-coupon',
  styleUrl: 'm-coupon.scss',
})
export class MCoupon implements ComponentInterface {
  /**
   * Id for the m-cupon
   * */
  @Prop() mId!: string;
  /**
   * Label for the m-cupon
   * */
  @Prop() label!: string;
  /**
   * Icon for the label text
   * */
  @Prop() iconLabel? = 'info-circle';
  /**
   * Icon of the left side
   * */
  @Prop() iconStart?: string;
  /**
   * Has a button select
   * */
  @Prop() hasSelect = false;
  /**
   * The type of the input
   */
  @Prop() type = 'text';
  /**
   * Placeholder for input
   * */
  @Prop() placeholder?: string = 'placeholder';
  /**
   * Icon of the middle side
   * */
  @Prop() iconMiddle?: string;
  /**
   * Text for the button
   * */
  @Prop() textButton?: string = 'Apply';
  /**
   * Icon of the end side
   * */
  @Prop() iconEnd?: string;
  /**
   * Icon for the hint text
   * */
  @Prop() iconHint?: string;
  /**
   * Hint for the m-cupon
   * */
  @Prop() hint?: string;
  /**
   * State for the m-cupon
   * */
  @Prop() state?: InputState;
  /**
   * Theme for the m-cupon
   * */
  @Prop() theme?: InputThemes = 'primary';

  /**
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mClick' }) mClick!: EventEmitter<string>;

  /**
   * HTML input elemet
   */
  private htmlInput?: HTMLInputElement;

  /**
   * HTML select elemet
   */
  private htmlSelect?: HTMLSelectElement;

  private clickHandler = () => {
    this.mClick.emit(JSON.stringify({
      inputValue: this.htmlInput?.value,
      selectValue: this.htmlSelect?.value,
    }));
  };

  render() {
    return (
      <Host class={`form-control-layout form-control-layout-coupon form-control-theme-${this.theme}`}>
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
              { this.iconHint && (
                <span class="form-control-icon">
                  {/* TODO: use m-icon component */}
                  <i class={`bi bi-${this.iconHint}`} />
                </span>
              )}
              {this.hint}
            </small>
          )}
        </div>
      </Host>
    );
  }
}
