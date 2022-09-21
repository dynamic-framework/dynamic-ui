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
   * Hint text
   */
  @Prop() hint?: string;

  /**
   * Left icon of the hint text
   */
  @Prop() hintIconStart?: string;

  /**
   * Right icon of the hint text
   */
  @Prop() hintIconEnd?: string;

  /**
   * Theme of the counter
   */
  @Prop() theme = 'info';

  /**
   * Minimum value for the input
   */
  @Prop() min!: number;

  /**
   * Maximum value for the input
   */
  @Prop() max!: number;

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
  @Prop() disabled = false;

  /**
   * Event for input change
   */
  @Event({ eventName: 'mInput' }) mInput!: EventEmitter;

  /**
   * Event for button pressed
   */
  @Event({ eventName: 'mClick' }) mClick?: EventEmitter;

  /**
   * State to show the icon in valid states
   */
  @State() state?: string;

  @Watch('theme')
  watchThemeHandler(newValue: string) {
    this.state = this.validStates.includes(newValue) ? newValue : undefined;
  }

  connectedCallback() {
    this.state = this.validStates.includes(this.theme) ? this.theme : undefined;
  }

  private validStates = Object.keys(ICON_STATE).filter((k) => k !== 'light');

  private htmlInput!: HTMLInputElement;

  private inputHandler = (event: Event) => {
    this.mInput.emit((event.target as HTMLInputElement).value);
  };

  private clickHandler = (action: boolean) => {
    const currentValue = this.htmlInput.value;
    if (action) {
      const temp = Number(currentValue) + 1;
      this.mInput.emit(temp <= this.max ? temp : this.max);
    } else {
      const temp = Number(currentValue) - 1;
      this.mInput.emit(temp >= this.min ? temp : this.min);
    }
  };

  private generateHostClasses(): ClassMap {
    return {
      'form-control-layout form-control-layout-counter': true,
      [`form-control-theme-${this.theme}`]: true,
      [`form-control-layout-counter-${this.variant}`]: !!this.variant,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
      'form-control-layout-counter-disabled': this.disabled,
    };
  }

  render() {
    return (
      <Host class={this.generateHostClasses()}>
        {this.label && (
          <label htmlFor={this.mId}>
            {this.label}
            <m-icon
              class="form-control-icon"
              icon="info-circle"
            />
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
                  disabled={this.disabled}
                >
                  <m-icon
                    icon="dash"
                  />
                </button>
                <input
                  // eslint-disable-next-line no-return-assign
                  ref={(el) => (this.htmlInput = el as HTMLInputElement)}
                  class="form-control-counter-input"
                  type="number"
                  id={this.mId}
                  value={this.value}
                  min={this.min}
                  max={this.max}
                  onInput={this.inputHandler}
                  disabled={this.disabled}
                />
                <button
                  class="form-control-counter-btn"
                  onClick={() => this.clickHandler(true)}
                  disabled={this.disabled}
                >
                  <m-icon
                    icon="plus"
                  />
                </button>
              </div>
              {!this.state && (
                <div class="form-control-spacer" />
              )}
              {this.state && (
                <m-icon
                  class="form-control-icon icon-state"
                  icon={ICON_STATE[this.state]}
                />
              )}
            </div>
          </div>
          {this.hint && (
            <m-hint
              text={this.hint}
              theme={this.theme === 'danger' || this.theme === 'tertiary' || this.theme === 'warning' ? this.theme : 'info'}
              {...(this.hintIconStart && ({ iconStart: this.hintIconStart }))}
              {...(this.hintIconEnd && ({ iconEnd: this.hintIconEnd }))}
            />
          )}
        </div>
      </Host>
    );
  }
}
