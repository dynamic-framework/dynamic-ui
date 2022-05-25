import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Event,
  h,
  Prop,
  Host,
} from '@stencil/core';

import type { ClassMap } from '../../utils/component-interface';

const BTN_CLASS_VARIANT = {
  block: undefined,
  pill: 'rounded-pill',
  text: 'btn-link',
  ghost: 'btn-link btn-ghost',
};

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
  @Prop() variant: 'pill' | 'block' | 'text' | 'ghost' = 'pill';
  /**
   * Flag to set the button as active.
   */
  @Prop() state?: 'focus' | 'hover' | 'active' | 'disabled';
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
  @Prop() mType: 'submit' | 'reset' | 'button' = 'button';
  /**
   * Flag to display outline button.
   */
  @Prop() outline = false;

  /**
   * Emitted when the button has been clicked.
   */
  @Event() mButtonClick!: EventEmitter;

  private buttonClickHandler = () => {
    this.mButtonClick.emit();
  };

  private generateClasses(): ClassMap {
    const variant = BTN_CLASS_VARIANT[this.variant];
    return {
      btn: true,
      [`btn-${this.outline ? 'outline-' : ''}${this.theme}`]: true,
      ...(variant && { [variant]: true }),
      ...(this.state && this.state !== 'disabled') && {
        [this.state]: true,
      },
    };
  }

  private generateHostClasses(): ClassMap {
    return {
      'btn-box': true,
      focus: this.state === 'focus',
      'rounded-pill': this.variant === 'pill',
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
          <div class="btn-icon btn-right-icon"/>
        </button>
      </Host>
    );
  }
}
