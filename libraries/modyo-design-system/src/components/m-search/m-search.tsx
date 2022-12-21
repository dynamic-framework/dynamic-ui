import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Event,
  Host,
  h,
  Prop,
} from '@stencil/core';

import { ClassMap, FormControlLayoutDirection } from '../../utils/component-interface';

@Component({
  tag: 'm-search',
  styleUrl: 'm-search.scss',
})

export class MSearch implements ComponentInterface {
  /**
   * The id of the input
   */
  @Prop() mId!: string;

  /**
    * The label text
    */
  @Prop() label = '';

  /**
    * Icon to display on label right
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
  @Prop() value = '';

  /**
    * Flag to disable the input
    */
  @Prop() isDisabled = false;

  /**
   * Flag for loading state.
  */
  @Prop() isLoading = false;

  /**
    * Flag to read only the input
    */
  @Prop() isReadOnly = false;

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
    * Theme to use for the search
    */
  @Prop() theme?: string;

  /**
    * Variant to use for the search
    */
  @Prop() variant?: string;

  /**
   * Change the layout direction to put the label on top or left of input
   */
  @Prop() layoutDirection: FormControlLayoutDirection = 'vertical';

  /**
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<string>;

  /**
   * Emitted when the button is clicked
   */
  @Event({ eventName: 'mClick' }) mClick!: EventEmitter<string>;

  /**
   * HTML input elemet
   */
  private htmlInput?: HTMLInputElement;

  private changeHandler = () => {
    this.mChange.emit(this.htmlInput?.value);
  };

  private clickHandler = () => {
    this.mClick.emit(this.htmlInput?.value);
  };

  private generateHostClasses(): ClassMap {
    return {
      'form-control-layout': true,
      'form-control-layout-search': true,
      [`form-control-layout-search-${this.theme}`]: !!this.theme,
      [`form-control-layout-${this.variant}`]: !!this.variant,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
      disabled: this.isDisabled,
      readonly: this.isReadOnly,
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
                class="form-control-icon label-icon"
                icon={this.labelIcon}
                familyClass={this.labelIconFamilyClass}
                familyPrefix={this.labelIconFamilyPrefix}
              />
            )}
          </label>
        )}
        <div class="form-control-input">
          <div class="input-group">
            <input
              // eslint-disable-next-line no-return-assign
              ref={(el) => (this.htmlInput = el as HTMLInputElement)}
              id={this.mId}
              type={this.type}
              class="form-control"
              placeholder={this.placeholder}
              aria-label={this.label}
              disabled={this.isDisabled}
              readOnly={this.isReadOnly}
              value={this.value}
              aria-describedby={`${this.mId}-add`}
              onInput={this.changeHandler}
            />
            {(this.iconEnd && !!this.theme && !this.isLoading) && (
              <span
                class="input-group-text"
                id={`${this.mId}-end`}
              >
                {this.iconEnd && (
                  <m-icon
                    class="form-control-icon search-state"
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
            {!this.isLoading && (
              <button
                class="btn btn-text btn-search"
                disabled={this.isDisabled}
                onClick={this.clickHandler}
              >
                <m-icon
                  icon="search"
                />
              </button>
            )}
          </div>
          {this.hint && (
            <small class="hint">
              {this.hintIconStart && (
                <m-icon
                  class="form-control-icon hint-icon"
                  icon={this.hintIconStart}
                  familyClass={this.hintIconStartFamilyClass}
                  familyPrefix={this.hintIconStartFamilyPrefix}
                />
              )}
              {this.hint}
              {this.hintIconEnd && (
                <m-icon
                  class="form-control-icon hint-icon"
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
