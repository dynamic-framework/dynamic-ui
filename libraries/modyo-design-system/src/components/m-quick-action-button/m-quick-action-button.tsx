import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Event,
  h,
  Prop,
} from '@stencil/core';

import { PREFIX_BS } from '../../utils';

@Component({ tag: 'm-quick-action-button' })
export class MQuickActionButton implements ComponentInterface {
  /**
   * The title
   */
  @Prop() line1!: string;

  /**
   * The subtitle
   */
  @Prop() line2!: string;

  /**
   * Action link text, displayed when the icon is not set
   */
  @Prop() actionLinkText?: string;

  /**
   * Second action icon
   */
  @Prop() secondActionIcon?: string;

  /**
   * Action link theme
   */
  @Prop() actionLinkTheme = 'secondary';

  /**
   * The icon to indicate the action
   */
  @Prop() actionIcon = 'chevron-right';

  /**
   * Icon family class
   */
  @Prop() actionIconFamilyClass?: string;

  /**
   * Icon family class
   */
  @Prop() actionIconFamilyPrefix?: string;

  /**
   * Representative image
   */
  @Prop() representativeImage?: string;

  /**
   * Representative icon, displayed when the representativeImage is not set
   */
  @Prop() representativeIcon?: string;

  /**
   * Representative icon theme
   */
  @Prop() representativeIconTheme = 'secondary';

  /**
   * Representative icon circle
   */
  @Prop() representativeIconHasCircle? = false;

  /**
   * Icon family class
   */
  @Prop() representativeIconFamilyClass?: string;

  /**
   * Icon family class
   */
  @Prop() representativeIconFamilyPrefix?: string;

  /**
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mClick' }) mClick!: EventEmitter;

  /**
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mClickSecondary' }) mClickSecondary!: EventEmitter;

  private globalClickHandler = () => {
    if (this.actionLinkText) {
      return;
    }
    this.mClick.emit();
  };

  private actionLinkClickHandler = (event: CustomEvent) => {
    event.stopPropagation();

    if (!this.actionLinkText) {
      return;
    }
    this.mClick.emit();
  };

  private secondActionLinkClickHandler = (event: MouseEvent) => {
    event.stopPropagation();
    this.mClickSecondary.emit();
  };

  private getTag() {
    return this.actionLinkText ? 'div' : 'button';
  }

  render() {
    const Tag = this.getTag();
    return (
      <Tag
        class="m-quick-action-button"
        {...!this.actionLinkText && { onClick: this.globalClickHandler }}
      >
        {this.representativeIcon && (
          <m-icon
            class="m-quick-action-button-representative-icon"
            size={(
              this.representativeIconHasCircle
                ? `var(--${PREFIX_BS}m-quick-action-button-representative-icon-size)`
                : `var(--${PREFIX_BS}m-quick-action-button-representative-image-size)`
            )}
            icon={this.representativeIcon}
            has-circle={this.representativeIconHasCircle}
            theme={this.representativeIconTheme}
            family-class={this.representativeIconFamilyClass}
            family-prefix={this.representativeIconFamilyPrefix}
          />
        )}
        {this.representativeImage && (
          <img
            class="m-quick-action-button-representative-image"
            src={this.representativeImage}
            alt=""
          />
        )}
        <div class="m-quick-action-button-content">
          <div class="m-quick-action-button-text">
            <span class="m-quick-action-button-line1">
              {this.line1}
            </span>
            <small class="m-quick-action-button-line2">
              {this.line2}
            </small>
          </div>
        </div>
        {this.secondActionIcon && (
          <m-button
            class="m-quick-action-button-second-action-link"
            type="button"
            variant="link"
            iconStart={this.secondActionIcon}
            family-iconStartFamilyClass={this.actionIconFamilyClass}
            family-iconStartFamilyPrefix={this.actionIconFamilyPrefix}
            size="sm"
            theme={this.actionLinkTheme}
            onClick={this.secondActionLinkClickHandler}
          />
        )}
        {this.actionLinkText ? (
          <m-button
            class="m-quick-action-button-action-link"
            type="button"
            variant="link"
            size="sm"
            theme={this.actionLinkTheme}
            text={this.actionLinkText}
            on-m-click={this.actionLinkClickHandler}
          />
        ) : (
          <m-icon
            class="m-quick-action-button-action-icon"
            icon={this.actionIcon}
            size={`var(--${PREFIX_BS}m-quick-action-button-action-icon-size)`}
            family-class={this.actionIconFamilyClass}
            family-prefix={this.actionIconFamilyPrefix}
          />
        )}
      </Tag>
    );
  }
}
