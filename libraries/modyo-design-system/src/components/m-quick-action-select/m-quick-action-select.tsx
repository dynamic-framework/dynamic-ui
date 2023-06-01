import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
} from '@stencil/core';

@Component({ tag: 'm-quick-action-select' })
export class MQuickActionSelect implements ComponentInterface {
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
   * Is selected
   */
  @Prop() isSelected?: boolean;

  /**
   * Emitted when the select value has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<string>;

  private changeHandler = (event: Event) => {
    this.mChange.emit((event.target as HTMLInputElement).value);
  };

  render() {
    return (
      <label
        class="m-quick-action-select"
        htmlFor={this.mId}
      >
        <input
          id={this.mId}
          type="radio"
          name={this.name}
          value={this.value}
          checked={this.isSelected}
          onChange={this.changeHandler}
        />
        <span class="quick-action-select-line1">
          {this.line1}
        </span>
        <span class="quick-action-select-line2">
          {this.line2}
        </span>
      </label>
    );
  }
}
