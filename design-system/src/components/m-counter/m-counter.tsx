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
   * Id of the input
   */
  @Prop() label?: string;

  /**
  * Id of the input
  */
  @Prop() hint?: string;

  /**
   * Id of the input
   */
  @Prop() hintIconStart?: string;

  /**
  * Id of the input
  */
  @Prop() hintIconEnd?: string;

  /**
   * Id of the input
   */
  @Prop() theme = 'info';

  /**
   * Id of the input
   */
  @Prop() min!: number;

  /**
   * Id of the input
   */
  @Prop() max!: number;

  /**
   * Id of the input
   */
  @Prop() value!: number;

  /**
   * Id of the input
   */
  @Prop() variant: 'default' | 'prime' = 'default';

  /**
   * Change the layout direction to put the label on top or left of input
   */
  @Prop() layoutDirection: FormControlLayoutDirection = 'vertical';

  /**
   * Change the layout direction to put the label on top or left of input
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
   * Id of the input
   */
  @State() state?: string;

  private validStates = Object.keys(ICON_STATE).filter((k) => k !== 'light');

  @Watch('theme')
  watchThemeHandler(newValue: string) {
    this.state = this.validStates.includes(newValue) ? newValue : undefined;
  }

  private htmlInput!: HTMLInputElement;

  // Events

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

  connectedCallback() {
    this.state = this.validStates.includes(this.theme) ? this.theme : undefined;
  }

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
