/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Event,
  h,
  Prop,
  Host,
} from '@stencil/core';

import { ClassMap } from '../../utils/component-interface';

import { QuickActionVariant, QuickActionState } from './m-quick-action-interface';

@Component({
  tag: 'm-quick-action',
  styleUrl: 'm-quick-action.scss',
})

export class MQuickAction implements ComponentInterface {
  /**
   * The main text of the quick action
   */
  @Prop() text!: string;
  /**
   * The subtext of the quick action
   */
  @Prop() subtext?: string;
  /**
   * The extra info of the quick action
   */
  @Prop() extraInfo?: string;
  /**
   * The icon of the quick action
   */
  @Prop() icon?: string = 'heart-fill';
  /**
   * The image of the quick action
   */
  @Prop() image?: string;
  /**
   * The variant of the quick action
   */
  @Prop() variant?: QuickActionVariant = 'extended';
  /**
   * The action word for the quick action
   */
  @Prop() actionWord?: string;
  /**
   * The action icon for the quick action
   */
  @Prop() actionIcon?: string = 'chevron-right';
  /**
   * The state of the quick action
   */
  @Prop() state?: QuickActionState;
  /**
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mClick' }) mClick!: EventEmitter;

  private clickHandler = () => {
    this.mClick.emit();
  };

  private generateHostClasses(): ClassMap {
    return {
      'quick-action-host': true,
      disabled: this.state === 'disabled',
    };
  }

  private generateButtonClasses(): ClassMap {
    return {
      'quick-action': true,
      [`quick-action-variant-${this.variant}`]: !!this.variant,
      [`quick-action-state-${this.state}`]: !!this.state,
    };
  }

  render() {
    return (
      <Host class={this.generateHostClasses()}>
        <button
          class={this.generateButtonClasses()}
          onClick={this.clickHandler}
          disabled={this.state === 'disabled'}
        >
          <div class="quick-action-picture">
            {(this.icon && !this.image) && (
              <span class="quick-action-icon">
                <i class={`bi bi-${this.icon}`} />
              </span>
            )}
            {this.image && (
              <img
                class="quick-action-img"
                src={this.image}
                alt="Quick action"
              />
            )}
          </div>
          <div class="quick-action-content">
            <div class="quick-action-text">
              <span class="quick-action-title">
                {this.text}
              </span>
              {this.subtext && (
                <small class="quick-action-subtitle">
                  {this.subtext}
                  {this.extraInfo && (` - ${this.extraInfo}`)}
                </small>
              )}
            </div>
            {(this.actionIcon && !this.actionWord) && (
              <small class="quick-action-link">
                <i class={`bi bi-${this.actionIcon}`} />
              </small>
            )}
            {this.actionWord && (
              <small class="quick-action-link">
                {this.actionWord}
              </small>
            )}
          </div>
        </button>
      </Host>
    );
  }
}
