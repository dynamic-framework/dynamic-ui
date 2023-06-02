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
   * Emitted when the select value has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<string>;

  private changeHandler = (event: CustomEvent) => {
    event.stopPropagation();
    this.mChange.emit((event.target as HTMLInputElement).value);
  };

  render() {
    return (
      <label
        class="m-quick-action-switch"
        htmlFor={this.mId}
      >
        <div class="m-quick-action-switch-content">
          <m-input-switch
            mId={this.mId}
            name={this.name}
            isChecked={this.isChecked}
            onMChange={this.changeHandler}
          />
          <span class="m-quick-action-switch-label">
            {this.label}
          </span>
        </div>
        <div class="m-quick-action-switch-hint">
          {this.hint}
        </div>
      </label>
    );
  }
}
