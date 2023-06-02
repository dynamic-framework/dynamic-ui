import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
} from '@stencil/core';

@Component({ tag: 'm-quick-action-check' })
export class MQuickActionCheck implements ComponentInterface {
  /**
   * The id of the input
   */
  @Prop() mId!: string;

  /**
   * Name of the input
   */
  @Prop() name!: string;

  /**
   * Input value
   */
  @Prop() value!: string;

  /**
   * Line 1 text
   */
  @Prop() line1!: string;

  /**
   * Line 2 text
   */
  @Prop() line2!: string;

  /**
   * Line 3 text
   */
  @Prop() line3!: string;

  /**
   * Is selected
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
        class="m-quick-action-check"
        htmlFor={this.mId}
      >
        <m-input-check
          mId={this.mId}
          type="radio"
          name={this.name}
          value={this.value}
          isChecked={this.isChecked}
          onMChange={this.changeHandler}
        />
        <div class="quick-action-check-detail">
          <span class="quick-action-check-line1">
            {this.line1}
          </span>
          <span class="quick-action-check-line2">
            {this.line2}
          </span>
        </div>
        <span class="quick-action-check-line3">
          {this.line2}
        </span>
      </label>
    );
  }
}
