import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
  Method,
} from '@stencil/core';

@Component({
  tag: 'm-input',
  shadow: false,
})
export class MInput implements ComponentInterface {
  /**
   * The id of the input
   */
  @Prop() mId!: string;

  /**
   * The name of the input
   */
  @Prop() name?: string;

  /**
   * The label text
   */
  @Prop() label = '';

  /**
   * Icon for the label text
   */
  @Prop() labelIcon?: string;

  /**
   * Icon label family class
   */
  @Prop() labelIconFamilyClass?: string;

  /**
   * Icon label family class
   */
  @Prop() labelIconFamilyPrefix?: string;

  /**
   * The placeholder text
   */
  @Prop() placeholder = '';

  /**
   * The type of the input
   */
  @Prop() type = 'text';

  /**
   * The value of the input
   */
  @Prop() value: string | number = '';

  /**
   * Flag to disable the input
   */
  @Prop() isDisabled = false;

  /**
   * Flag to read only the input
   */
  @Prop() isReadOnly = false;

  /**
   * Flag for loading state.
  */
  @Prop() isLoading = false;

  /**
   * Right icon family class
   */
  @Prop() iconFamilyClass?: string;

  /**
   * Right icon family class
   */
  @Prop() iconFamilyPrefix?: string;

  /**
   * Icon to display on input left
   */
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
   * Icon to display on input right
   */
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
   * Hint to display
   */
  @Prop() hint?: string;

  /**
   * Add is-invalid class
   */
  @Prop() isInvalid = false;

  /**
   * Add is-valid class
   */
  @Prop() isValid = false;

  @Method()
  async focusInput() {
    this.htmlInputElement?.focus();
  }

  @Method()
  async blurInput() {
    this.htmlInputElement?.blur();
  }

  /**
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<string | number>;

  /**
   * Emitted when blur the input
   */
  @Event({ eventName: 'mBlur' }) mBlur!: EventEmitter;

  /**
   * Emitted when blur the input
   */
  @Event({ eventName: 'mFocus' }) mFocus!: EventEmitter;

  /**
   * Emitted when blur the input
   */
  @Event({ eventName: 'mWheel' }) mWheel!: EventEmitter;

  /**
   * Emitted when click on the left icon
   */
  @Event({ eventName: 'mIconStartClick' }) mIconStartClick!: EventEmitter<MouseEvent>;

  /**
   * Emitted when click on the right icon
   */
  @Event({ eventName: 'mIconEndClick' }) mIconEndClick!: EventEmitter<MouseEvent>;

  /**
   * HTML m-input element
   */
  private htmlInputElement?: HTMLInputElement;

  private changeHandler = (event: Event) => {
    this.mChange.emit((event.target as HTMLInputElement).value);
  };

  private blurHandler = (event: Event) => {
    this.mBlur.emit(event);
  };

  private focusHandler = (event: Event) => {
    this.mFocus.emit(event);
  };

  private wheelHandler = (event: Event) => {
    this.mWheel.emit(event);
  };

  private iconStartClickHandler = (event: MouseEvent) => {
    this.mIconStartClick.emit(event);
  };

  private iconEndClickHandler = (event: MouseEvent) => {
    this.mIconEndClick.emit(event);
  };

  render() {
    return (
      <div class="m-input">
        {this.label && (
          <label htmlFor={this.mId}>
            {this.label}
            {this.labelIcon && (
              <m-icon
                class="m-input-icon"
                icon={this.labelIcon}
                familyClass={this.labelIconFamilyClass}
                familyPrefix={this.labelIconFamilyPrefix}
              />
            )}
          </label>
        )}
        <div class="m-input-control">
          <div
            class={{
              'input-group': true,
              'has-validation': this.isInvalid,
              disabled: this.isDisabled || this.isLoading,
            }}
          >
            {this.iconStart && (
              <button
                type="button"
                class="input-group-text"
                id={`${this.mId}Start`}
                onClick={this.iconStartClickHandler}
              >
                {this.iconStart && (
                  <m-icon
                    class="m-input-icon"
                    icon={this.iconStart}
                    familyClass={this.iconStartFamilyClass}
                    familyPrefix={this.iconStartFamilyPrefix}
                  />
                )}
              </button>
            )}
            <input
              // eslint-disable-next-line no-return-assign
              ref={(el) => (this.htmlInputElement = el)}
              id={this.mId}
              name={this.name}
              type={this.type}
              class={{
                'form-control': true,
                'is-invalid': this.isInvalid,
                'is-valid': this.isValid,
              }}
              placeholder={this.placeholder}
              aria-label={this.label}
              disabled={this.isDisabled || this.isLoading}
              readOnly={this.isReadOnly}
              value={this.value}
              aria-describedby={`${this.mId}Add ${this.mId}Hint`}
              onInput={this.changeHandler}
              onBlur={this.blurHandler}
              onFocus={this.focusHandler}
              onWheel={this.wheelHandler}
            />
            {((this.isInvalid || this.isValid) && !this.iconEnd && !this.isLoading) && (
              <span
                class="input-group-text"
                id={`${this.mId}State`}
              >
                <m-icon
                  class="m-input-validation-icon"
                  icon={this.isInvalid ? 'exclamation-circle' : 'check'}
                  familyClass={this.iconFamilyClass}
                  familyPrefix={this.iconFamilyPrefix}
                />
              </span>
            )}
            {(this.iconEnd && !this.isLoading) && (
              <button
                type="button"
                class="input-group-text"
                id={`${this.mId}End`}
                onClick={this.iconEndClickHandler}
              >
                {this.iconEnd && (
                  <m-icon
                    class="m-input-icon"
                    icon={this.iconEnd}
                    familyClass={this.iconEndFamilyClass}
                    familyPrefix={this.iconEndFamilyPrefix}
                  />
                )}
              </button>
            )}
            {this.isLoading && (
              <div class="input-group-text m-input-icon">
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                >
                  <span class="visually-hidden">Loading...</span>
                </span>
              </div>
            )}
          </div>
          {this.hint && (
            <div
              class="form-text"
              id={`${this.mId}Hint`}
            >
              {this.hint}
            </div>
          )}
        </div>
      </div>
    );
  }
}
