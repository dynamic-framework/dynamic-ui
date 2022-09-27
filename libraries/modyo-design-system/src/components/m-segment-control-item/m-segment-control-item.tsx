/* eslint-disable jsx-a11y/label-has-associated-control */
import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Host,
  Prop,
  Event,
  h,
} from '@stencil/core';

import type { InputState } from '../../utils/component-interface';

@Component({
  tag: 'm-segment-control-item',
  shadow: false,
})
export class MSegmentControlItem implements ComponentInterface{
  /**
   * Id of the radio
   */
  @Prop() mId!: string;

  /**
   * Name of the radio
   */
  @Prop() name!: string;

  /**
   * Label of the radio
   */
  @Prop() label!: string;

  /**
   * Value of the radio
   */
  @Prop() value!: string;

  /**
   * Is disabled
   */
  @Prop() disabled?: boolean;

  /**
   * Is checked
   */
  @Prop() checked?: boolean;

  /**
   * State of the input
   */
  @Prop() state?: InputState;

  /**
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<string>;

  private changeHandler = (event: Event) => {
    this.mChange.emit((event.target as HTMLInputElement).value);
  };

  render() {
    return (
      <Host>
        <input
          type="radio"
          class={{
            'btn-check': true,
            [`${this.state}`]: !!this.state,
          }}
          name={this.name}
          id={this.mId}
          value={this.value}
          autocomplete="off"
          onChange={this.changeHandler}
          disabled={this.disabled || this.state === 'disabled'}
          checked={this.checked}
        />
        <label
          class="segment-control-item"
          htmlFor={this.mId}
        >
          {this.label}
        </label>
      </Host>
    );
  }
}
