import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
  Host,
} from '@stencil/core';

import { ClassMap } from '../../utils/component-interface';

import { FormControlLayoutDirection } from './m-input-interface';

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
   * The label text
   */
  @Prop() label = '';
  /**
   * Icon to display on label right
   */
  @Prop() labelIcon?: string;
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
  @Prop() disabled = false;
  /**
   * Icon to display on input left
   */
  @Prop() iconStart?: string;
  /**
   * Icon to display on input right
   */
  @Prop() iconEnd?: string;
  /**
   * Hint to display, also used to display validity feedback
   */
  @Prop() hint?: string;
  /**
   * Icon to display on hint left
   */
  @Prop() hintIconStart?: string;
  /**
   * Icon to display on hint right
   */
  @Prop() hintIconEnd?: string;
  /**
   * Change the layout direction to put the label on top or left of input
   */
  @Prop() layoutDirection: FormControlLayoutDirection = 'vertical';

  /**
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<string>;

  private changeHandler = (event: Event) => {
    this.mChange.emit((event.target as HTMLInputElement).value);
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
            {/* TODO: use m-icon component */}
            <span class="form-control-icon">{this.labelIcon}</span>
          </label>
        )}
        <div class="form-control-input">
          <div class="input-group">
            {this.iconStart && (
              <span
                class="input-group-text"
                id={`${this.mId}-add`}
              >
                {/* TODO: use m-icon component */}
                <span class="form-control-icon">{this.iconStart}</span>
              </span>
            )}
            <input
              type={this.type}
              class="form-control"
              placeholder={this.placeholder}
              aria-label={this.label}
              disabled={this.disabled}
              value={this.value}
              aria-describedby={`${this.mId}-add`}
              onInput={this.changeHandler}
            />
            {this.iconEnd && (
              <span
                class="input-group-text"
                id={`${this.mId}-add`}
              >
                {/* TODO: use m-icon component */}
                <span class="form-control-icon">{this.iconEnd}</span>
              </span>
            )}
          </div>
          {this.hint && (
            <small class="hint">
              {/* TODO: use m-icon component */}
              <span class="form-control-icon">{this.hintIconStart}</span>
              {this.hint}
              {/* TODO: use m-icon component */}
              <span class="form-control-icon">{this.hintIconEnd}</span>
            </small>
          )}
        </div>
      </Host>
    );
  }
}
