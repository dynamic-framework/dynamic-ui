import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Event,
  h,
  Prop,
  Host,
} from '@stencil/core';

import type { ClassMap, InputState } from '../../utils/component-interface';

import type { ButtonType, ButtonVariant } from './m-button-interface';

@Component({
  tag: 'm-button',
  styleUrl: 'm-button.scss',
  shadow: false,
})
export class MButton implements ComponentInterface {
  /**
   * The theme to use.
   */
  @Prop() theme = 'primary';
  /**
   * The variant to use.
   */
  @Prop() variant?: ButtonVariant;
  /**
   * Flag to set the button as active.
   */
  @Prop() state?: InputState;
  /**
   * The text to display.
   */
  @Prop() text = '';
  /**
   * Icon left to display
   */
  @Prop() iconLeft?: string;
  /**
   * Icon right to display
   */
  @Prop() iconRight?: string;
  /**
   * The value of the button.
   */
  @Prop() value = '';
  /**
   * The type of the button.
   */
  @Prop() type: ButtonType = 'button';
  /**
   * Flag to switch to pill button border radius.
   */
  @Prop() isPill = false;

  /**
   * Emitted when the button has been clicked.
   */
  @Event() mClick!: EventEmitter;

  private clickHandler = () => {
    this.mClick.emit();
  };

  private generateClasses(): ClassMap {
    const variantClass = this.variant
      ? `btn-${this.variant}-${this.theme}`
      : `btn-${this.theme}`;
    return {
      btn: true,
      [variantClass]: true,
      ...(this.state && this.state !== 'disabled') && { [this.state]: true },
      'rounded-pill': this.isPill,
    };
  }

  private generateHostClasses(): ClassMap {
    return {
      'btn-box': true,
      focus: this.state === 'focus',
      'rounded-pill': this.isPill,
    };
  }

  render() {
    return (
      <Host class={this.generateHostClasses()}>
        <button
          class={this.generateClasses()}
          type={this.type}
          disabled={this.state === 'disabled'}
          {...this.value && { value: this.value }}
          onClick={this.clickHandler}
        >
          {this.iconLeft && (
            <m-icon
              class="btn-icon btn-left-icon"
              icon={this.iconLeft}
            />
          )}
          {this.text && (
            <span>{this.text}</span>
          )}
          {this.iconRight && (
            <m-icon
              class="btn-icon btn-right-icon"
              icon={this.iconRight}
            />
          )}
        </button>
      </Host>
    );
  }
}
