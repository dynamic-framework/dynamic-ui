import {
  Component,
  Prop,
  Element,
  h,
} from '@stencil/core';
import { Alert } from 'bootstrap';

import type { ClassMap } from '../../utils/component-interface';
import { IconState } from '../../utils/component-interface';

@Component({
  tag: 'm-alert',
  styleUrl: 'm-alert.scss',
  shadow: false,
})
export class MAlert {
  @Element() el!: HTMLMAlertElement;
  /**
   * Theme for the alert
   */
  @Prop() theme?: string = 'warning';
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

  connectedCallback() {
    // eslint-disable-next-line no-new
    new Alert(this.el);
  }

  private generateClasses(): ClassMap {
    return {
      'alert d-flex align-items-center justify-content-center gap-3': true,
      [`alert-${this.theme}`]: true,
      'fade show': !!this.close,
    };
  }

  private iconState(): string {
    switch (this.theme) {
      case 'warning':
        return IconState.warning;
      case 'danger':
        return IconState.danger;
      case 'success':
        return IconState.success;
      case 'info':
        return IconState.info;
      case 'light':
        return IconState.light;
      default:
        return '';
    }
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
            data-bs-dismiss="alert"
            aria-label="Close"
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
