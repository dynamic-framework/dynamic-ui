import {
  Component,
  Prop,
  h,
  EventEmitter,
  Event,
} from '@stencil/core';

import type { ClassMap } from '../../utils/component-interface';
import { ICON_STATE } from '../../utils/component-interface';

@Component({
  tag: 'm-alert',
  styleUrl: 'm-alert.scss',
  shadow: false,
})
export class MAlert {
  /**
   * Theme for the alert
   */
  @Prop() theme = 'warning';
  /**
   * Show icon theme in the alert
   */
  @Prop() icon = false;
  /**
   * Icon font-size class
   */
  @Prop() iconSize?: string = 'small';
  /**
   * Has close button
   */
  @Prop() close?: boolean;
  /**
   * Emitted when the button has been clicked.
   */
  @Event() mClose!: EventEmitter;

  private clickHandler = () => {
    this.mClose.emit();
  };

  private generateClasses(): ClassMap {
    return {
      [`alert alert-${this.theme}`]: true,
      'fade show': !!this.close,
    };
  }

  private iconState(): string {
    return ICON_STATE[this.theme] || '';
  }

  render() {
    return (
      <div
        class={this.generateClasses()}
        role="alert"
      >
        {this.icon && (
          <div class={`alert-icon ${this.iconSize}`}>
            <m-icon
              icon={this.iconState()}
            />
          </div>
        )}
        <div class="alert-text flex-grow-1">
          <slot />
        </div>
        {this.close && (
          <div class="separator" />
        )}
        {this.close && (
          <button
            type="button"
            class="btn-close fs-4"
            aria-label="Close"
            onClick={this.clickHandler}
          >
            <m-icon
              icon="x-lg"
            />
          </button>
        )}
      </div>
    );
  }
}
