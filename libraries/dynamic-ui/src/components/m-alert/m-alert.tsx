import {
  Component,
  Prop,
  h,
  EventEmitter,
  Event,
} from '@stencil/core';

import { PREFIX_BS } from '../../utils';
import type { ClassMap } from '../../utils/component-interface';

import { ALERT_TYPE_ICON } from './m-alert-interface';
import type { AlertType } from './m-alert-interface';

@Component({ tag: 'm-alert' })
export class MAlert {
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
  @Event() mClose!: EventEmitter;

  private clickHandler = () => {
    this.mClose.emit();
  };

  private generateClasses(): ClassMap {
    return {
      [`m-alert alert alert-${this.type}`]: true,
      'fade show': !!this.showClose,
    };
  }

  private getIcon(): string {
    return this.icon || ALERT_TYPE_ICON[this.type] || '';
  }

  private generateStyleVariables() {
    return {
      ...this.type === 'light' ? { [`--${PREFIX_BS}m-alert-component-icon-color`]: `var(--${PREFIX_BS}secondary)` } : {},
      [`--${PREFIX_BS}m-alert-component-separator-opacity`]: '0.3',
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
            class="m-alert-icon"
            icon={this.getIcon()}
            familyClass={this.iconFamilyClass}
            familyPrefix={this.iconFamilyPrefix}
          />
        )}
        <div class="m-alert-text">
          <slot />
        </div>
        {this.showClose && (
          <div class="m-alert-separator" />
        )}
        {this.showClose && (
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            onClick={this.clickHandler}
          >
            <m-icon
              class="m-alert-close-icon"
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
