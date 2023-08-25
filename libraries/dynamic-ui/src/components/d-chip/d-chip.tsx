import {
  Component, Event, EventEmitter,
  h,
  Prop,
} from '@stencil/core';
import type { ComponentInterface } from '@stencil/core';

@Component({ tag: 'd-chip' })
export class DChip implements ComponentInterface {
  /**
   * The theme to use.
   */
  @Prop() theme = 'primary';

  /**
   * The text of chip
   */
  @Prop() text?: string;

  /**
   * Name of icon to use (in kebab-case)
   */
  @Prop() icon?: string;

  /**
   * Change the family class to use another icon suite
   */
  @Prop() iconFamilyClass?: string;

  /**
   * Change the family prefix to use another icon suite
   */
  @Prop() iconFamilyPrefix?: string;

  /**
   * Show close icon
   */
  @Prop() showClose?: boolean = false;

  /**
   * Emitted when the close button has been clicked.
   */
  @Event() eventClose!: EventEmitter;

  private closeHandler = () => {
    this.eventClose.emit();
  };

  // eslint-disable-next-line @stencil/own-methods-must-be-private
  generateClasses() {
    return {
      'd-chip': true,
      [`d-chip-${this.theme}`]: !!this.theme,
    };
  }

  render() {
    return (
      <span class={this.generateClasses()}>
        {this.icon && (
          <div class="d-chip-icon-container">
            <d-icon
              icon={this.icon}
              familyClass={this.iconFamilyClass}
              familyPrefix={this.iconFamilyPrefix}
            />
          </div>
        )}
        <span>{this.text}</span>
        {this.showClose && (
          <button
            type="button"
            class="d-chip-icon-container"
            onClick={this.closeHandler}
          >
            <d-icon icon="x-lg" />
          </button>
        )}
      </span>
    );
  }
}
