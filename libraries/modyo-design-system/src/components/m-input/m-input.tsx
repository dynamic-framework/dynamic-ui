import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
  Host,
} from '@stencil/core';

import { ClassMap, FormControlLayoutDirection } from '../../utils/component-interface';

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
   * Flag for loading state.
  */
  @Prop() isLoading = false;

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
   * Hint to display, also used to display validity feedback
   */
  @Prop() hint?: string;

  /**
   * Icon to display on hint left
   */
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
   * Icon to display on hint right
   */
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
   * Change the layout direction to put the label on top or left of input
   */
  @Prop() layoutDirection: FormControlLayoutDirection = 'vertical';

  /**
   * Add is-invalid class
   */
  @Prop() isInvalid = false;

  /**
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<string | number>;

  /**
   * Emitted when blur the input
   */
  @Event({ eventName: 'mBlur' }) mBlur!: EventEmitter;

  private changeHandler = (event: Event) => {
    this.mChange.emit((event.target as HTMLInputElement).value);
  };

  private blurHandler = (event: Event) => {
    this.mBlur.emit(event);
  };

  private generateHostClasses(): ClassMap {
    return {
      'form-control-layout': true,
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
          <div
            class={{
              'input-group': true,
              'has-validation': this.isInvalid,
            }}
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
            <input
              id={this.mId}
              name={this.name}
              type={this.type}
              class={{
                'form-control': true,
                'is-invalid': this.isInvalid,
              }}
              placeholder={this.placeholder}
              aria-label={this.label}
              disabled={this.isDisabled}
              value={this.value}
              aria-describedby={`${this.mId}-add`}
              onInput={this.changeHandler}
              onBlur={this.blurHandler}
            />
            {(this.iconEnd && !this.isLoading) && (
              <span
                class="input-group-text"
                id={`${this.mId}-end`}
              >
                {this.iconEnd && (
                  <m-icon
                    class="form-control-icon"
                    icon={this.iconEnd}
                    familyClass={this.iconEndFamilyClass}
                    familyPrefix={this.iconEndFamilyPrefix}
                  />
                )}
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
          </div>
          {this.hint && (
            <small class="hint">
              {this.hintIconStart && (
                <m-icon
                  class="form-control-icon"
                  icon={this.hintIconStart}
                  familyClass={this.hintIconStartFamilyClass}
                  familyPrefix={this.hintIconStartFamilyPrefix}
                />
              )}
              {this.hint}
              {this.hintIconEnd && (
                <m-icon
                  class="form-control-icon"
                  icon={this.hintIconEnd}
                  familyClass={this.hintIconEndFamilyClass}
                  familyPrefix={this.hintIconEndFamilyPrefix}
                />
              )}
            </small>
          )}
        </div>
      </Host>
    );
  }
}
