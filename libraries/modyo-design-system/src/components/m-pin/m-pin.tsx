import {
  Component,
  Host,
  h,
  Prop,
  Event,
  State,
  Watch,
} from '@stencil/core';
import type { ComponentInterface, EventEmitter } from '@stencil/core';

import { ClassMap } from '../../utils/component-interface';

import { PinInputMode, PinInputType } from './m-pin-interface';

@Component({
  tag: 'm-pin',
  styleUrl: 'm-pin.scss',
  shadow: false,
})

export class MPin implements ComponentInterface {
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
  @Prop() labelIcon?: string = 'info-circle';

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
   * Flag for loading state.
  */
  @Prop() isLoading = false;

  /**
   * Number of characters of the pin
   */
  @Prop() characters = 4;

  /**
   * Hide the characters
   */
  @Prop() isSecret = false;

  /**
   * Disable the inputs
   */
  @Prop() isDisabled = false;

  /**
   * Keyboard style
   */
  @Prop() mInputMode: PinInputMode = 'text';

  /**
   * Type of the inputs
   */
  @Prop() type: PinInputType = 'text';

  /**
   * Placeholder of the inputs
   */
  @Prop() placeholder?: string = '•';

  /**
   * Theme for inputs
   * */
  @Prop() theme?: string;

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
   * Emitted when the inputs had changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<string>;

  @State() internalTheme?: string;

  @State() pattern!: string;

  @Watch('theme')
  watchThemeHandler(newValue: string) {
    this.internalTheme = newValue;
  }

  @Watch('type')
  watchMTypeHandler(newValue: string) {
    this.pattern = newValue === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$';
  }

  // eslint-disable-next-line class-methods-use-this
  private nextInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const regex = new RegExp(this.pattern);

    if (!regex.test(input.value)) {
      input.value = '';
    }

    if (input.value !== '') {
      if (input.nextSibling) {
        (input.nextSibling as HTMLElement)?.focus();
      } else {
        input.blur();
      }
    }
  };

  // eslint-disable-next-line class-methods-use-this
  private prevInput = (e: KeyboardEvent) => {
    if (e.key === 'Backspace') {
      const { value } = e.currentTarget as HTMLInputElement;
      const input = e.target as HTMLInputElement;

      if (input.previousSibling && value === '') {
        (input.previousSibling as HTMLElement)?.focus();
      } else {
        input.blur();
        input.focus();
      }
    }
  };

  // eslint-disable-next-line class-methods-use-this
  private focusInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    input.value = '';
    this.mChange.emit('');
  };

  // eslint-disable-next-line class-methods-use-this
  private wheelInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    // prevent change the value with the scroll
    input.blur();
  };

  private formChange = (e: Event) => {
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const values = Array.from(formData.values()).join('');
    this.mChange.emit(values);
  };

  // eslint-disable-next-line class-methods-use-this
  private preventDefaultEvents = (e: Event) => {
    e.preventDefault();
  };

  private generateHostClasses(): ClassMap {
    return {
      'form-control-layout form-control-layout-pin': true,
      [`form-control-theme-${this.internalTheme}`]: !!this.internalTheme,
    };
  }

  connectedCallback() {
    this.internalTheme = this.theme;
    this.pattern = this.type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$';
  }

  render() {
    return (
      <Host class={this.generateHostClasses()}>
        {this.label && (
          <label htmlFor="pin-index-0">
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
        <form
          id={this.mId}
          class="form-control-input"
          onInput={this.formChange}
          onSubmit={this.preventDefaultEvents}
        >
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
          {Array.from({ length: this.characters }).map((_, index) => (
            <input
              class="pin-item"
              type={this.isSecret ? 'password' : this.type}
              inputMode={this.mInputMode}
              id={`pin-index-${index}`}
              name={`pin-${index}`}
              maxLength={1}
              onInput={this.nextInput}
              onKeyDown={this.prevInput}
              onFocus={this.focusInput}
              onWheel={this.wheelInput}
              onClick={this.preventDefaultEvents}
              autocomplete="off"
              placeholder={this.placeholder}
              disabled={this.isDisabled || this.isLoading}
              required
              {...this.type === 'number' && (
                {
                  min: 0,
                  max: 9,
                }
              )}
            />
          ))}
          {(this.iconEnd && !this.isLoading) && (
            <span
              class="input-group-text"
              id={`${this.mId}-end`}
            >
              <m-icon
                class="form-control-icon icon-end"
                icon={this.iconEnd}
                familyClass={this.iconEndFamilyClass}
                familyPrefix={this.iconEndFamilyPrefix}
              />
            </span>
          )}
          {this.isLoading && (
            <div class="input-group-text form-control-icon">
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              >
                <span class="visually-hidden">Loading...</span>
              </span>
            </div>
          )}
        </form>
        {this.hint && (
          <m-hint
            text={this.hint}
            theme={this.theme === 'danger' || this.theme === 'tertiary' || this.theme === 'warning' ? this.theme : undefined}
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
      </Host>
    );
  }
}
