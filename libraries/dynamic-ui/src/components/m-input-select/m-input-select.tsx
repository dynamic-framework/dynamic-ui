import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
} from '@stencil/core';

import { PREFIX_BS } from '../../utils';

@Component({ tag: 'm-input-select' })
export class MInputSelect implements ComponentInterface {
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
   * The select options
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() options: Array<Record<string, unknown>> = [];

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
   * Flag to disable the input
   */
  @Prop() isDisabled = false;

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
   * The start icon for the select
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
   * The end icon for the select
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
   * The value selected of the component
   */
  @Prop() selectedOption?: Record<string, unknown>;

  /**
   * Callback to extract the value from the option
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,class-methods-use-this
  @Prop() valueExtractor: (item: any) => string | number = (item) => item?.value;

  /**
   * Callback to extract the label from the option
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,class-methods-use-this
  @Prop() labelExtractor: (item: any) => string = (item) => item?.label;

  /**
   * Emitted when the select value has changed
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter;

  /**
   * Emitted when blur the input
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Event({ eventName: 'mBlur' }) mBlur!: EventEmitter;

  /**
   * Emitted when click on the left icon
   */
  @Event({ eventName: 'mIconStartClick' }) mIconStartClick!: EventEmitter<MouseEvent>;

  /**
   * Emitted when click on the right icon
   */
  @Event({ eventName: 'mIconEndClick' }) mIconEndClick!: EventEmitter<MouseEvent>;

  private changeHandler = (event: Event) => {
    const { value } = event.target as HTMLSelectElement;
    this.mChange.emit(
      this.options.find((option) => this.valueExtractor(option).toString() === value),
    );
  };

  private blurHandler = (event: Event) => {
    this.mBlur.emit(event);
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
        {(this.label) && (
          <label htmlFor={this.mId}>
            {this.label}
            {this.labelIcon && (
              <m-icon
                class="m-input-icon"
                icon={this.labelIcon}
                size={`var(--${PREFIX_BS}m-input-label-font-size)`}
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
              disabled: this.isDisabled || this.isLoading,
            }}
          >
            {this.iconStart && (
              <button
                type="button"
                class="input-group-text"
                id={`${this.mId}Start`}
                onClick={this.iconStartClickHandler}
                disabled={this.isDisabled || this.isLoading}
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
            <select
              id={this.mId}
              name={this.name}
              class={{ 'form-select': true }}
              aria-label={this.label}
              disabled={this.isDisabled || this.isLoading}
              aria-describedby={`${this.mId}Add ${this.mId}Hint`}
              onChange={this.changeHandler}
              onBlur={this.blurHandler}
            >
              {this.options.map((option) => (
                <option
                  value={this.valueExtractor(option)}
                  selected={
                    this.selectedOption
                      && this.valueExtractor(option) === this.valueExtractor(this.selectedOption)
                  }
                >
                  {this.labelExtractor(option)}
                </option>
              ))}
            </select>
            {(this.iconEnd && !this.isLoading) && (
              <button
                type="button"
                class="input-group-text"
                id={`${this.mId}End`}
                onClick={this.iconEndClickHandler}
                disabled={this.isDisabled || this.isLoading}
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
              <div class="input-group-text form-control-icon loading">
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
