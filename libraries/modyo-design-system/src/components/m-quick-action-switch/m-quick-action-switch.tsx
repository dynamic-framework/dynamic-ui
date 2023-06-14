import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
} from '@stencil/core';

@Component({ tag: 'm-quick-action-switch' })
export class MQuickActionSwitch implements ComponentInterface {
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
  @Event({ eventName: 'mClick' }) mClick!: EventEmitter<boolean>;

  private clickHandler = (event: MouseEvent) => {
    event.stopPropagation();
    this.mClick.emit(this.isChecked);
  };

  render() {
    return (
      <button
        class="m-quick-action-switch"
        onClick={this.clickHandler}
      >
        <div class="m-quick-action-switch-content">
          <m-input-switch
            mId={this.mId}
            name={this.name}
            isDisabled={this.isDisabled}
            isChecked={this.isChecked}
            isReadonly
          />
          <label
            class="m-quick-action-switch-label"
            htmlFor={this.mId}
          >
            {this.label}
          </label>
        </div>
        <div class="m-quick-action-switch-hint">
          {this.hint}
        </div>
      </button>
    );
  }
}
