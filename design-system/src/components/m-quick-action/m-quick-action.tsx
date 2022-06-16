/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  // Host,
  h,
  Prop,
} from '@stencil/core';

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

  render() {
    return (
      <div
        class={{
          'quick-action d-flex align-items-center gap-2': true,
          [`quick-action-state-${this.state}`]: !!this.state,
        }}
        tabindex="0"
      >
        <div class="quick-action-picture">
          {(this.icon && !this.image) && (
            <span class="quick-action-icon">
              <i class={`bi bi-${this.icon}`} />
            </span>
          )}
          {this.image && (
            <img
              class="quick-action-img overflow-hidden"
              src={this.image}
              alt="Quick action"
            />
          )}
        </div>
        <div class={{
          'quick-action-content d-flex w-100': true,
          'flex-column': this.variant === 'compact',
          'gap-2': this.variant === 'extended',
        }}
        >
          <div class={{
            'quick-action-text d-flex flex-grow-1': true,
            'flex-column': this.variant === 'extended',
            'align-items-center gap-2': this.variant === 'compact',
          }}
          >
            <span class="quick-action-title fw-bold lh-base">
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
            <small class={{ 'align-self-center': this.variant === 'extended', 'quick-action-link': true }}>
              <i class={`bi bi-${this.actionIcon}`} />
            </small>
          )}
          {this.actionWord && (
            <small class={{
              'quick-action-link': true,
              'align-self-center': this.variant === 'extended',
            }}
            >
              {this.actionWord}
            </small>
          )}
        </div>
      </div>
    );
  }
}
