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

  connectedCallback() {
    // eslint-disable-next-line no-new
    new Alert(this.el);
  }

  private generateClasses(): ClassMap {
    return {
      [`alert alert-${this.theme}`]: true,
      'fade show': !!this.close,
    };
  }

  private iconState(): string {
    return IconState[this.theme] || '';
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
