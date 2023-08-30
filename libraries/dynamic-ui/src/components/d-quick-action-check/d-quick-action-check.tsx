import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
} from '@stencil/core';

@Component({ tag: 'd-quick-action-check' })
export class DQuickActionCheck implements ComponentInterface {
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
  @Event() eventChange!: EventEmitter<string>;

  private changeHandler = (event: CustomEvent) => {
    event.stopPropagation();
    this.eventChange.emit((event.target as HTMLInputElement).value);
  };

  render() {
    return (
      <label
        class="d-quick-action-check"
        htmlFor={this.innerId}
      >
        <d-input-check
          innerId={this.innerId}
          type="radio"
          name={this.name}
          value={this.value}
          isChecked={this.isChecked}
          onEventChange={this.changeHandler}
        />
        <div class="d-quick-action-check-detail">
          <span class="d-quick-action-check-line1">
            {this.line1}
          </span>
          <span class="d-quick-action-check-line2">
            {this.line2}
          </span>
        </div>
        <span class="d-quick-action-check-line3">
          {this.line3}
        </span>
      </label>
    );
  }
}
