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
    * Flag to read only the input
    */
  @Prop() isReadOnly = false;
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
            {/* TODO: use m-icon component */}
            <span class="form-control-icon label-icon">
              <i class={`bi bi-${this.labelIcon}`} />
            </span>
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
            {(this.iconEnd && !!this.theme) && (
              <span
                class="input-group-text"
                id={`${this.mId}-add`}
              >
                {/* TODO: use m-icon component */}
                <span class="form-control-icon search-state">
                  <i class={`bi bi-${this.iconEnd}`} />
                </span>
              </span>
            )}
            <button
              class="btn btn-text btn-search"
              disabled={this.isDisabled}
              onClick={this.clickHandler}
              tabIndex={-1}
            >
              <i class="bi bi-search" />
            </button>
          </div>
          {this.hint && (
            <small class="hint">
              {/* TODO: use m-icon component */}
              { this.hintIconStart && (
                <span class="form-control-icon hint-icon">
                  <i class={`bi bi-${this.hintIconStart}`} />
                </span>
              )}
              {this.hint}
              {/* TODO: use m-icon component */}
              { this.hintIconEnd && (
                <span class="form-control-icon hint-icon">
                  <i class={`bi bi-${this.hintIconEnd}`} />
                </span>
              )}
            </small>
          )}
        </div>
      </Host>
    );
  }
}
