import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
} from '@stencil/core';

import { InputState } from '../../utils/component-interface';

@Component({
  tag: 'm-shortcut-toggle',
  styleUrl: 'm-shortcut-toggle.scss',
  shadow: false,
})
export class MShortcutToggle implements ComponentInterface {
  /**
   * Id of the input
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
   * Shortcut label
   */
  @Prop() label?: string;

  /**
   * Shortcut text
   */
  @Prop() text?: string;

  /**
   * Shortcut text
   */
  @Prop() subtext?: string = '';

  /**
   * Shortcut icon
   */
  @Prop() icon?: string;

  /**
   * Is checked
   */
  @Prop() isChecked?: boolean;

  /**
   * Input and shortcut state
   */
  @Prop() state?: InputState;

  /**
   * Theme
   */
  @Prop() white = false;

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
        class={{
          shortcut: true,
          [`${this.state}`]: !!this.state,
        }}
        htmlFor={this.mId}
      >
        <input
          id={this.mId}
          type="radio"
          name={this.name}
          value={this.value}
          checked={this.isChecked}
          onChange={this.changeHandler}
          disabled={this.state === 'disabled'}
        />
        {((this.text || this.label) && !this.icon) && (
          <div class={this.white ? 'shortcut-toggle-white' : 'shortcut-toggle'}>
            { this.label && (
              <span class="shortcut-label d-block">
                {this.label}
              </span>
            )}
            {this.text && (
              <div class="d-block small">
                <span class="shortcut-text">
                  {this.text}
                  {' '}
                </span>
                <span class="shortcut-subtext">{this.subtext}</span>
              </div>
            )}
          </div>
        )}
        {this.icon && (
          <div class="shortcut-toggle">
            <m-icon
              class="shortcut-icon"
              icon={this.icon}
            />
          </div>
        )}
      </label>
    );
  }
}
