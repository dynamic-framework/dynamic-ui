import {
  Component,
  h,
  Prop,
  Event,
  State,
  Watch,
} from '@stencil/core';
import type { ComponentInterface, EventEmitter } from '@stencil/core';

import { PREFIX_BS } from '../../utils';

import { PinInputMode, PinInputType } from './d-input-pin-interface';

@Component({ tag: 'd-input-pin' })
export class DInputPin implements ComponentInterface {
  /**
   * Id for the input
   * */
  @Prop() innerId!: string;

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
   * Placeholder of the inputs
   */
  @Prop() placeholder?: string = '•';

  /**
   * Type of the inputs
   */
  @Prop() type: PinInputType = 'text';

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
   * Hide the characters
   */
  @Prop() isSecret = false;

  /**
   * Right icon family class
   */
  @Prop() iconFamilyClass?: string;

  /**
   * Right icon family class
   */
  @Prop() iconFamilyPrefix?: string;

  /**
   * Number of characters of the pin
   */
  @Prop() characters = 4;

  /**
   * Keyboard style
   */
  @Prop() innerInputMode: PinInputMode = 'text';

  /**
   * Hint for the input
   * */
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
   * Emitted when the inputs had changed
   */
  @Event() eventChange!: EventEmitter<string>;

  @State() pattern!: string;

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
    this.eventChange.emit('');
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
    this.eventChange.emit(values);
  };

  // eslint-disable-next-line class-methods-use-this
  private preventDefaultEvents = (e: Event) => {
    e.preventDefault();
  };

  connectedCallback() {
    this.pattern = this.type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$';
  }

  render() {
    return (
      <div class="d-input-pin">
        {this.label && (
          <label htmlFor="pinIndex0">
            {this.label}
            {this.labelIcon && (
              <d-icon
                class="d-input-pin-icon"
                icon={this.labelIcon}
                size={`var(--${PREFIX_BS}input-label-font-size)`}
                familyClass={this.labelIconFamilyClass}
                familyPrefix={this.labelIconFamilyPrefix}
              />
            )}
          </label>
        )}
        <form
          id={this.innerId}
          class="d-input-pin-controls"
          onInput={this.formChange}
          onSubmit={this.preventDefaultEvents}
        >
          {Array.from({ length: this.characters }).map((_, index) => (
            <input
              class={{
                'form-control': true,
                'is-invalid': this.isInvalid,
                'is-valid': this.isValid,
              }}
              type={this.isSecret ? 'password' : this.type}
              aria-describedby={`${this.innerId}State`}
              inputMode={this.innerInputMode}
              id={`pinIndex${index}`}
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
          {((this.isInvalid || this.isValid) && !this.isLoading) && (
            <span
              class="input-group-text"
              id={`${this.innerId}State`}
            >
              <d-icon
                class="d-input-pin-validation-icon"
                icon={this.isInvalid ? 'exclamation-circle' : 'check'}
                familyClass={this.iconFamilyClass}
                familyPrefix={this.iconFamilyPrefix}
              />
            </span>
          )}
          {this.isLoading && (
            <div class="input-group-text d-input-pin-icon">
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
          <div
            class="form-text"
            id={`${this.innerId}Hint`}
          >
            {this.hint}
          </div>
        )}
      </div>
    );
  }
}
