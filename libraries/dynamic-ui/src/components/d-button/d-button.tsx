import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Event,
  h,
  Prop,
} from '@stencil/core';

import { PREFIX_BS } from '../../utils';
import type {
  ClassMap,
  ComponentSize,
  InputState,
} from '../../utils/component-interface';

import type { ButtonType, ButtonVariant } from './d-button-interface';

@Component({ tag: 'd-button' })
export class DButton implements ComponentInterface {
  /**
   * Theme to use.
   */
  @Prop() theme = 'primary';

  /**
   * The size
   */
  @Prop() size?: ComponentSize;

  /**
   * The variant to use.
   */
  @Prop() variant?: ButtonVariant;

  /**
   * Change the state of the button
   */
  @Prop() state?: InputState;

  /**
   * The text to display.
   */
  @Prop() text = '';

  /**
   * Icon left to display
   */
  @Prop() iconStart?: string;

  /**
   * Icon left family class
   */
  @Prop() iconStartFamilyClass?: string;

  /**
   * Icon left family prefix
   */
  @Prop() iconStartFamilyPrefix?: string;

  /**
   * Icon right to display
   */
  @Prop() iconEnd?: string;

  /**
   * Icon right family class
   */
  @Prop() iconEndFamilyClass?: string;

  /**
   * Icon right family prefix
   */
  @Prop() iconEndFamilyPrefix?: string;

  /**
   * The html value of the button.
   */
  @Prop() value?: string;

  /**
   * The html type of the button.
   */
  @Prop() type: ButtonType = 'button';

  /**
   * Flag to switch to pill button border radius.
   */
  @Prop() isPill = false;

  /**
   * Flag to loading state and disable button.
   */
  @Prop() isLoading = false;

  /**
   * Flag to disable the button, alias to state="disable"
   */
  @Prop() isDisabled = false;

  /**
   * Flag to start or stop event propagation
   */
  @Prop() isStopPropagationEnabled = true;

  /**
   * Emitted when the button has been clicked.
   */
  @Event({ bubbles: false }) eventClick!: EventEmitter;

  private clickHandler = (event: MouseEvent) => {
    if (this.isStopPropagationEnabled) {
      event.stopPropagation();
    }
    this.eventClick.emit();
  };

  private generateStyleVariables() {
    if (this.isPill) {
      return { [`--${PREFIX_BS}btn-component-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)` };
    }
    return {};
  }

  private generateClasses(): ClassMap {
    const variantClass = this.variant
      ? `btn-${this.variant}-${this.theme}`
      : `btn-${this.theme}`;
    return {
      btn: true,
      [variantClass]: true,
      [`btn-${this.size}`]: !!this.size,
      ...(this.state && this.state !== 'disabled') && { [this.state]: true },
      loading: this.isLoading,
    };
  }

  render() {
    return (
      <button
        class={this.generateClasses()}
        style={this.generateStyleVariables()}
        type={this.type}
        disabled={this.state === 'disabled' || this.isLoading || this.isDisabled}
        {...this.value && { value: this.value }}
        onClick={this.clickHandler}
      >
        {this.iconStart && (
          <d-icon
            icon={this.iconStart}
            familyClass={this.iconStartFamilyClass}
            familyPrefix={this.iconStartFamilyPrefix}
          />
        )}
        {(this.text && !this.isLoading) && (
          <span>{this.text}</span>
        )}
        {this.isLoading && (
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          >
            <span class="visually-hidden">Loading...</span>
          </span>
        )}
        {(this.iconEnd) && (
          <d-icon
            icon={this.iconEnd}
            familyClass={this.iconEndFamilyClass}
            familyPrefix={this.iconEndFamilyPrefix}
          />
        )}
      </button>
    );
  }
}
