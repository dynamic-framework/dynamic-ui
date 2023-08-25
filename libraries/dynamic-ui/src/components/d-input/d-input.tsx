import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
  Method,
  Element,
} from '@stencil/core';

import { PREFIX_BS } from '../../utils';

@Component({ tag: 'd-input' })
export class DInput implements ComponentInterface {
  @Element() el!: HTMLDInputElement;
  /**
   * The id of the input
   */
  @Prop() innerId!: string;

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
   * Icon label family prefix
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
   * Input mode
   */
  @Prop() innerInputMode?: string;

  /**
   * Pattern to validate
   */
  @Prop() pattern?: string;

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

  /**
   * Set focus to internal input
   */
  @Method()
  async innerFocus() {
    this.htmlInputElement?.focus();
  }

  /**
   * Set blur to internal input
   */
  @Method()
  async innerBlur() {
    this.htmlInputElement?.blur();
  }

  /**
   * Emitted when the input value has changed
   */
  @Event() eventChange!: EventEmitter<string | number>;

  /**
   * Emitted when blur the input
   */
  @Event() eventBlur!: EventEmitter;

  /**
   * Emitted when blur the input
   */
  @Event() eventFocus!: EventEmitter;

  /**
   * Emitted when blur the input
   */
  @Event() eventWheel!: EventEmitter;

  /**
   * Emitted when click on the left icon
   */
  @Event() eventIconStartClick!: EventEmitter<MouseEvent>;

  /**
   * Emitted when click on the right icon
   */
  @Event() eventIconEndClick!: EventEmitter<MouseEvent>;

  /**
   * HTML d-input element
   */
  private htmlInputElement?: HTMLInputElement;

  private changeHandler = (event: Event) => {
    this.eventChange.emit((event.target as HTMLInputElement).value);
  };

  private blurHandler = (event: Event) => {
    this.eventBlur.emit(event);
  };

  private focusHandler = (event: Event) => {
    this.eventFocus.emit(event);
  };

  private wheelHandler = (event: Event) => {
    this.eventWheel.emit(event);
  };

  private iconStartClickHandler = (event: MouseEvent) => {
    this.eventIconStartClick.emit(event);
  };

  private iconEndClickHandler = (event: MouseEvent) => {
    this.eventIconEndClick.emit(event);
  };

  private inputStart!: HTMLElement | null;
  private inputEnd!: HTMLElement | null;

  componentWillLoad() {
    this.inputStart = this.el.querySelector('[slot="input-start"]');
    this.inputEnd = this.el.querySelector('[slot="input-end"]');
  }

  render() {
    return (
      <div class="d-input">
        {this.label && (
          <label htmlFor={this.innerId}>
            {this.label}
            {this.labelIcon && (
              <d-icon
                class="d-input-icon"
                icon={this.labelIcon}
                size={`var(--${PREFIX_BS}input-label-font-size)`}
                familyClass={this.labelIconFamilyClass}
                familyPrefix={this.labelIconFamilyPrefix}
              />
            )}
          </label>
        )}
        <div class="d-input-control">
          <div
            class={{
              'input-group': true,
              'has-validation': this.isInvalid,
              disabled: this.isDisabled || this.isLoading,
            }}
          >
            {!!this.inputStart && (
              <div class="input-group-text">
                <slot name="input-start" />
              </div>
            )}
            {this.iconStart && (
              <button
                type="button"
                class="input-group-text"
                id={`${this.innerId}Start`}
                onClick={this.iconStartClickHandler}
                disabled={this.isDisabled || this.isLoading}
              >
                {this.iconStart && (
                  <d-icon
                    class="d-input-icon"
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
              id={this.innerId}
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
              aria-describedby={`${this.innerId}Add ${this.innerId}Hint`}
              inputmode={this.innerInputMode}
              pattern={this.pattern}
              onInput={this.changeHandler}
              onBlur={this.blurHandler}
              onFocus={this.focusHandler}
              onWheel={this.wheelHandler}
            />
            {((this.isInvalid || this.isValid) && !this.iconEnd && !this.isLoading) && (
              <span
                class="input-group-text"
                id={`${this.innerId}State`}
              >
                <d-icon
                  class="d-input-validation-icon"
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
                id={`${this.innerId}End`}
                onClick={this.iconEndClickHandler}
                disabled={this.isDisabled || this.isLoading}
              >
                {this.iconEnd && (
                  <d-icon
                    class="d-input-icon"
                    icon={this.iconEnd}
                    familyClass={this.iconEndFamilyClass}
                    familyPrefix={this.iconEndFamilyPrefix}
                  />
                )}
              </button>
            )}
            {!!this.inputEnd && (
              <div class="input-group-text">
                <slot name="input-end" />
              </div>
            )}
            {this.isLoading && (
              <div class="input-group-text d-input-icon">
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
              id={`${this.innerId}Hint`}
            >
              {this.hint}
            </div>
          )}
        </div>
      </div>
    );
  }
}
