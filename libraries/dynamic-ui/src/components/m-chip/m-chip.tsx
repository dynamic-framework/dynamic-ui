import {
  Component, Event, EventEmitter,
  h,
  Prop,
} from '@stencil/core';
import type { ComponentInterface } from '@stencil/core';

@Component({ tag: 'm-chip' })
export class MChip implements ComponentInterface {
  /**
   * The theme to use.
   */
  @Prop() theme = 'primary';

  /**
   * The text of badge
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
  @Event() mClose!: EventEmitter;

  private closeHandler = () => {
    this.mClose.emit();
  };

  // eslint-disable-next-line @stencil/own-methods-must-be-private
  generateClasses() {
    return {
      'm-chip': true,
      [`m-chip-${this.theme}`]: !!this.theme,
    };
  }

  render() {
    return (
      <span class={this.generateClasses()}>
        {this.icon && (
          <div class="m-badge-icon-container">
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
            class="m-badge-icon-container"
            onClick={this.closeHandler}
          >
            <d-icon icon="x-lg" />
          </button>
        )}
      </span>
    );
  }
}
