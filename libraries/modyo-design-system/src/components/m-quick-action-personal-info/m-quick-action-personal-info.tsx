/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Event,
  h,
  Prop,
} from '@stencil/core';

@Component({ tag: 'm-quick-action-personal-info' })
export class MQuickActionPersonalInfo implements ComponentInterface {
  /**
   * The person name
   */
  @Prop() name!: string;

  /**
   * The person bank name
   */
  @Prop() bank!: string;

  /**
   * The person account number
   */
  @Prop() account!: string;

  /**
   * The icon to indicate the action
   */
  @Prop() icon = 'chevron-right';

  /**
   * Icon family class
   */
  @Prop() iconFamilyClass?: string;

  /**
   * Icon family class
   */
  @Prop() iconFamilyPrefix?: string;

  /**
   * The person profile image
   */
  @Prop() image!: string;

  /**
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mClick' }) mClick!: EventEmitter;

  private clickHandler = () => {
    this.mClick.emit();
  };

  render() {
    return (
      <button
        class="quick-action"
        onClick={this.clickHandler}
      >
        <img
          class="quick-action-picture"
          src={this.image}
          alt=""
        />
        <div class="quick-action-content">
          <div class="quick-action-text">
            <span class="quick-action-title">
              {this.name}
            </span>
            <small class="quick-action-subtitle">
              {`${this.bank} ${this.account}`}
            </small>
          </div>
        </div>
        <m-icon
          class="quick-action-action-icon"
          icon={this.icon}
          familyClass={this.iconFamilyClass}
          familyPrefix={this.iconFamilyPrefix}
        />
      </button>
    );
  }
}
