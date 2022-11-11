import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Host,
  h,
  Prop,
  Event,
} from '@stencil/core';

import type { FormControlLayoutDirection, ClassMap } from '../../utils/component-interface';

import type { SelectLayoutVariant } from './m-select-interface';

@Component({
  tag: 'm-select',
  styleUrl: 'm-select.scss',
  shadow: false,
})

export class MSelect implements ComponentInterface {
  /**
   * Id of the select
   */
  @Prop() mId!: string;

  /**
   * The name of the input
   */
  @Prop() name?: string;

  /**
   * The variant of the select
   */
  @Prop() variant?: SelectLayoutVariant = 'prime';

  /**
   * The select options
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() options: Array<Record<string, unknown>> = [];

  /**
   * The theme of the select
   */
  @Prop() theme = 'tertiary';

  /**
   * The label of the select in full variant
   */
  @Prop() label?: string;

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
   * The middle icon for the select
   */
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
   * The hint icon for the select in full variant
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
   * The hint icon for the select in full variant
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
   * The hint of the select in full variant
   */
  @Prop() hint?: string;

  /**
   * The value selected of the component
   */
  @Prop() selectedOption?: Record<string, unknown>;

  /**
   * Change the layout direction to put the label on top or left of select
   */
  @Prop() layoutDirection: FormControlLayoutDirection = 'vertical';

  /**
   * The select is disabled
   */
  @Prop() isDisabled = false;

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

  private changeHandler = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    this.mChange.emit(
      this.options.find((option) => this.valueExtractor(option).toString() === value),
    );
  };

  private blurHandler = (event: Event) => {
    this.mBlur.emit(event);
  };

  private generateHostClasses(): ClassMap {
    return {
      'form-control-layout': true,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
      [`form-control-layout-${this.variant}`]: !!this.variant,
      'form-control-layout-pill': this.variant !== 'full',
      [`form-control-theme-${this.theme}`]: this.variant !== 'prime',
    };
  }

  render() {
    return (
      <Host class={this.generateHostClasses()}>
        {(this.label) && (
          <label htmlFor={this.mId}>
            {this.label}
            {this.labelIcon && (
              <m-icon
                class="form-control-icon small"
                icon={this.labelIcon}
                familyClass={this.labelIconFamilyClass}
                familyPrefix={this.labelIconFamilyPrefix}
              />
            )}
          </label>
        )}
        <div class="form-control-input w-100">
          <div
            class={{
              'input-group': true,
              disabled: this.isDisabled,
            }}
          >
            {this.iconStart && (
              <span
                class="input-group-text"
                id={`${this.mId}-start`}
              >
                <m-icon
                  class="form-control-icon"
                  icon={this.iconStart}
                  familyClass={this.iconStartFamilyClass}
                  familyPrefix={this.iconStartFamilyPrefix}
                />
              </span>
            )}
            <select
              id={this.mId}
              name={this.name}
              class={{
                'form-select': true,
                'no-icons': !this.iconStart && !this.iconMiddle && !this.iconEnd,
                [`form-select-${this.theme}`]: this.variant !== 'prime',
              }}
              aria-describedby={`${this.mId}-start`}
              disabled={this.isDisabled}
              onChange={this.changeHandler}
              onBlur={this.blurHandler}
            >
              {this.options.map((option) => (
                <option
                  value={this.valueExtractor(option)}
                  selected={
                    this.valueExtractor(option) === this.valueExtractor(this.selectedOption)
                  }
                >
                  {this.labelExtractor(option)}
                </option>
              ))}
            </select>
            {(this.iconMiddle) && (
              <span
                class="input-group-text"
                id={`${this.mId}-middle`}
              >
                {this.iconMiddle && (
                  <m-icon
                    class="form-control-icon"
                    icon={this.iconMiddle}
                    familyClass={this.iconMiddleFamilyClass}
                    familyPrefix={this.iconMiddleFamilyPrefix}
                  />
                )}
              </span>
            )}
            {(this.iconEnd) && (
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
          </div>
          {(this.hint) && (
            <div class="d-flex gap-2 hint text-start">
              <small>
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
            </div>
          )}
        </div>
      </Host>
    );
  }
}
