import {
  Component,
  Host,
  h,
  Prop,
  EventEmitter,
  Event,
  State,
  Watch,
} from '@stencil/core';

import { ICON_STATE } from '../../utils/component-interface';
import type { ClassMap, FormControlLayoutDirection } from '../../utils/component-interface';

@Component({
  tag: 'm-counter',
  styleUrl: 'm-counter.scss',
  shadow: false,
})
export class MCounter {
  /**
   * Id of the input
   */
  @Prop() mId!: string;

  /**
   * Label of the input
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
   * Hint text
   */
  @Prop() hint?: string;

  /**
   * Left icon of the hint text
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
   * Right icon of the hint text
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
   * Theme of the counter
   */
  @Prop() theme?: string;

  /**
   * Minimum value for the input
   */
  @Prop() minValue!: number;

  /**
   * Maximum value for the input
   */
  @Prop() maxValue!: number;

  /**
   * Value of the input
   */
  @Prop() value!: number;

  /**
   * Variant of the counter
   */
  @Prop() variant: 'default' | 'prime' = 'default';

  /**
   * Change the layout direction to put the label on top or left of input
   */
  @Prop() layoutDirection: FormControlLayoutDirection = 'vertical';

  /**
   * Is disabled counter
   */
  @Prop() isDisabled = false;

  /**
   * Flag for loading state.
   */
  @Prop() isLoading = false;

  /**
   * Event for input change
   */
  @Event({ eventName: 'mInput' }) mInput!: EventEmitter;

  /**
   * Event for button pressed
   */
  @Event({ eventName: 'mClick' }) mClick!: EventEmitter;

  /**
   * State to show the icon in valid states
   */
  @State() state?: string;

  /**
   * Internal value
   */
  @State() internalValue = 0;

  private validStates = Object.keys(ICON_STATE).filter((k) => !['light', 'info'].includes(k));

  private inputHandler = (event: Event) => {
    const newValue = (event.target as HTMLInputElement).value;
    this.internalValue = Number(newValue);
    this.mInput.emit(newValue);
  };

  private clickHandler = (action: boolean) => {
    const currentValue = this.internalValue;
    if (action) {
      const temp = Number(currentValue) + 1;
      this.internalValue = temp <= this.maxValue ? temp : this.maxValue;
    } else {
      const temp = Number(currentValue) - 1;
      this.internalValue = temp >= this.minValue ? temp : this.minValue;
    }
    this.mClick.emit(this.internalValue);
  };

  private generateHostClasses(): ClassMap {
    return {
      'form-control-layout form-control-layout-counter': true,
      [`form-control-theme-${this.state}`]: !!this.state,
      [`form-control-layout-counter-${this.variant}`]: !!this.variant,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
      'form-control-layout-counter-disabled': this.isDisabled || this.isLoading,
    };
  }

  private getTheme(theme: string) {
    return this.validStates.includes(theme) ? theme : undefined;
  }

  @Watch('theme')
  watchThemeHandler(newValue: string) {
    this.state = this.validStates.includes(newValue) ? newValue : undefined;
  }

  @Watch('internalValue')
  watchValidValueHandler() {
    if (this.internalValue >= this.minValue && this.internalValue <= this.maxValue) {
      this.state = this.theme ? this.getTheme(this.theme) : undefined;
    } else {
      this.state = 'danger';
    }
  }

  @Watch('value')
  watchValueHandler() {
    this.internalValue = this.value;
  }

  connectedCallback() {
    this.state = this.theme ? this.getTheme(this.theme) : undefined;
    this.internalValue = this.value;
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
          <div class="input-group">
            <div class="form-control">
              <div class="form-control-spacer" />
              <div class="form-control-counter">
                <button
                  class="form-control-counter-btn"
                  onClick={() => this.clickHandler(false)}
                  disabled={this.isDisabled}
                >
                  <m-icon
                    icon="dash"
                  />
                </button>
                <input
                  class="form-control-counter-input"
                  type="number"
                  id={this.mId}
                  min={this.minValue}
                  max={this.maxValue}
                  value={this.internalValue}
                  onInput={this.inputHandler}
                  disabled={this.isDisabled}
                />
                <button
                  class="form-control-counter-btn"
                  onClick={() => this.clickHandler(true)}
                  disabled={this.isDisabled}
                >
                  <m-icon
                    icon="plus"
                  />
                </button>
              </div>
              {(!this.state && !this.isLoading) && (
                <div class="form-control-spacer" />
              )}
              {(this.state && !this.isLoading) && (
                <m-icon
                  class="form-control-icon icon-state"
                  icon={ICON_STATE[this.state]}
                />
              )}
              {this.isLoading && (
                <div class="form-control-icon">
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
          </div>
          {this.hint && (
            <m-hint
              text={this.hint}
              theme={this.state ? this.getTheme(this.state) : undefined}
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
        </div>
      </Host>
    );
  }
}
