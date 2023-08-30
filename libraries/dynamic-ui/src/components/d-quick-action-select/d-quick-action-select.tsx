import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
} from '@stencil/core';

@Component({ tag: 'd-quick-action-select' })
export class DQuickActionSelect implements ComponentInterface {
  /**
   * The id of the input
   */
  @Prop() innerId!: string;

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
  @Event() eventChange!: EventEmitter<string>;

  private changeHandler = (event: Event) => {
    this.eventChange.emit((event.target as HTMLInputElement).value);
  };

  render() {
    return (
      <label
        class="d-quick-action-select"
        htmlFor={this.innerId}
      >
        <input
          id={this.innerId}
          type="radio"
          name={this.name}
          value={this.value}
          checked={this.isSelected}
          onChange={this.changeHandler}
        />
        <span class="d-quick-action-select-line1">
          {this.line1}
        </span>
        <span class="d-quick-action-select-line2">
          {this.line2}
        </span>
      </label>
    );
  }
}
