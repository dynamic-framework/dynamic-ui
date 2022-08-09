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
   * The variant of the select
   */
  @Prop() variant: SelectLayoutVariant = 'prime';

  /**
   * The select options
   */
  @Prop() options: Array<any> = [];

  /**
   * The theme of the select
   */
  @Prop() theme = 'tertiary';

  /**
   * The label of the select in full variant
   */
  @Prop() label?: string;

  /**
   * The start icon for the select
   */
  @Prop() iconStart?: string;

  /**
   * The middle icon for the select
   */
  @Prop() iconMiddle?: string;

  /**
   * The end icon for the select
   */
  @Prop() iconEnd?: string;

  /**
   * The hint icon for the select in full variant
   */
  @Prop() hintIconStart?: string;

  /**
   * The hint icon for the select in full variant
   */
  @Prop() hintIconEnd?: string;

  /**
   * The hint of the select in full variant
   */
  @Prop() hint?: string;

  /**
   * Change the layout direction to put the label on top or left of select
   */
  @Prop() layoutDirection: FormControlLayoutDirection = 'vertical';

  /**
   * Callback to extract the value from the option
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() valueExtractor: (item: any) => string | number = (item) => item?.value;

  /**
   * Callback to extract the label from the option
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() labelExtractor: (item: any) => string = (item) => item?.label;

  /**
   * Emitted when the select value has changed
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<any>;

  private changeHandler = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    this.mChange.emit(this.options.find((option) => option.value === value));
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
            {/** TODO: Implements popover/tooltip */}
            <m-icon
              class="form-control-icon small"
              icon="info-circle"
            />
          </label>
        )}
        <div class="form-control-input w-100">
          <div
            class="input-group"
          >
            {this.iconStart && (
              <span
                class="input-group-text"
                id={`${this.mId}-start`}
              >
                <m-icon
                  class="form-control-icon"
                  icon={this.iconStart}
                />
              </span>
            )}
            <select
              id={this.mId}
              class={{
                'form-select': true,
                'no-icons': !this.iconStart && !this.iconMiddle && !this.iconEnd,
                [`form-select-${this.theme}`]: this.variant !== 'prime',
              }}
              aria-describedby={`${this.mId}-start`}
              onChange={this.changeHandler}
            >
              {this.options.map((option) => (
                <option value={this.valueExtractor(option)}>
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
                  />
                )}
                {this.hint}
                {this.hintIconEnd && (
                  <m-icon
                    class="form-control-icon"
                    icon={this.hintIconEnd}
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
