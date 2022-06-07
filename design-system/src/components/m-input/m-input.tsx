import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
} from '@stencil/core';

@Component({
  tag: 'm-input',
  styleUrl: 'm-input.scss',
  shadow: false,
})
export class MInput implements ComponentInterface {
  /**
   * The id of the input
   */
  @Prop() modId = '';
  /**
   * The label text
   */
  @Prop() label = '';
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
   * Emitted when the input value has changed
   */
  @Event({
    eventName: 'modChange',
  }) modChange!: EventEmitter<string>;

  private changeHandler = (event: Event) => {
    this.modChange.emit((event.target as HTMLInputElement).value);
  };

  render() {
    return (
      <div class="input-group">
        <span
          class="input-group-text"
          id={`${this.modId}-add`}
        >
          @
        </span>
        <input
          type={this.type}
          class="form-control"
          placeholder={this.placeholder}
          aria-label={this.label}
          disabled={this.disabled}
          value={this.value}
          aria-describedby={`${this.modId}-add`}
          onInput={this.changeHandler}
        />
      </div>
    );
  }
}
