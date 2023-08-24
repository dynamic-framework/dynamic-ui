import {
  Component,
  Prop,
  h,
  EventEmitter,
  Event,
} from '@stencil/core';

import { PREFIX_BS } from '../../utils';
import type { ClassMap } from '../../utils/component-interface';

import { ALERT_TYPE_ICON } from './d-alert-interface';
import type { AlertType } from './d-alert-interface';

@Component({ tag: 'd-alert' })
export class DAlert {
  /**
   * Alert type
   */
  @Prop() type: AlertType = 'light';

  /**
   * Alert icon
   */
  @Prop() icon?: string;

  /**
   * Right icon family class
   */
  @Prop() iconFamilyClass?: string;

  /**
   * Right icon family class
   */
  @Prop() iconFamilyPrefix?: string;

  /**
   * Show alert icon
   */
  @Prop() showIcon = false;

  /**
   * Show close button
   */
  @Prop() showClose?: boolean;

  /**
   * Emitted when the button has been clicked.
   */
  @Event() eventClose!: EventEmitter;

  private clickHandler = () => {
    this.eventClose.emit();
  };

  private generateClasses(): ClassMap {
    return {
      [`alert alert-${this.type}`]: true,
      'fade show': !!this.showClose,
    };
  }

  private getIcon(): string {
    return this.icon || ALERT_TYPE_ICON[this.type] || '';
  }

  private generateStyleVariables() {
    return {
      ...this.type === 'light' ? { [`--${PREFIX_BS}alert-component-icon-color`]: `var(--${PREFIX_BS}secondary)` } : {},
      [`--${PREFIX_BS}alert-component-separator-opacity`]: '0.3',
    };
  }

  render() {
    return (
      <div
        class={this.generateClasses()}
        style={this.generateStyleVariables()}
        role="alert"
      >
        {(this.showIcon || this.icon) && (
          <m-icon
            class="alert-icon"
            icon={this.getIcon()}
            familyClass={this.iconFamilyClass}
            familyPrefix={this.iconFamilyPrefix}
          />
        )}
        <div class="alert-text">
          <slot />
        </div>
        {this.showClose && (
          <div class="alert-separator" />
        )}
        {this.showClose && (
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            onClick={this.clickHandler}
          >
            <m-icon
              class="alert-close-icon"
              icon="x-lg"
              familyClass={this.iconFamilyClass}
              familyPrefix={this.iconFamilyPrefix}
            />
          </button>
        )}
      </div>
    );
  }
}
