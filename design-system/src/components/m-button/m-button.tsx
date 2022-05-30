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
   * The value of the button.
   */
  @Prop() mValue = '';
  /**
   * The type of the button.
   */
  @Prop() mType: ButtonType = 'button';
  /**
   * Flag to switch to pill button border radius.
   */
  @Prop() isPill = false;

  /**
   * Emitted when the button has been clicked.
   */
  @Event() mButtonClick!: EventEmitter;

  private buttonClickHandler = () => {
    this.mButtonClick.emit();
  };

  private generateClasses(): ClassMap {
    const variantClass = this.variant
      ? `btn-${this.variant}-${this.theme}`
      : `btn-${this.theme}`;
    return {
      btn: true,
      [variantClass]: true,
      ...(this.state && this.state !== 'disabled') && {
        [this.state]: true,
      },
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
          type={this.mType}
          disabled={this.state === 'disabled'}
          onClick={this.buttonClickHandler}
        >
          {/* TODO: use m-icon component */}
          <div class="btn-icon btn-left-icon" />
          {this.text}
          {/* TODO: use m-icon component */}
          <div class="btn-icon btn-right-icon" />
        </button>
      </Host>
    );
  }
}
