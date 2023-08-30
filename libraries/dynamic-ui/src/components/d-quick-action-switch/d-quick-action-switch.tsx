import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
} from '@stencil/core';

@Component({ tag: 'd-quick-action-switch' })
export class DQuickActionSwitch implements ComponentInterface {
  /**
   * The id of the input
   */
  @Prop() innerId!: string;

  /**
   * The name of the input
   */
  @Prop() name?: string;

  /**
   * The label text
   */
  @Prop() label!: string;

  /**
   * Hint to display
   */
  @Prop() hint!: string;

  /**
   * Is checked
   */
  @Prop() isChecked?: boolean;

  /**
   * Is disabled
   */
  @Prop() isDisabled?: boolean;

  /**
   * Emitted when the select value has changed
   */
  @Event() eventClick!: EventEmitter<boolean>;

  private clickHandler = (event: MouseEvent) => {
    event.stopPropagation();
    this.eventClick.emit(this.isChecked);
  };

  render() {
    return (
      <button
        class="d-quick-action-switch"
        onClick={this.clickHandler}
      >
        <div class="d-quick-action-switch-content">
          <d-input-switch
            innerId={this.innerId}
            name={this.name}
            isDisabled={this.isDisabled}
            isChecked={this.isChecked}
            isReadonly
          />
          <label
            class="d-quick-action-switch-label"
            htmlFor={this.innerId}
          >
            {this.label}
          </label>
        </div>
        <div class="d-quick-action-switch-hint">
          {this.hint}
        </div>
      </button>
    );
  }
}
