import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Event,
  h,
  Prop,
} from '@stencil/core';

import { PREFIX_BS } from '../../utils';

@Component({ tag: 'd-quick-action-button' })
export class DQuickActionButton implements ComponentInterface {
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
   * Action link theme
   */
  @Prop() actionLinkTheme = 'secondary';

  /**
   * The icon to indicate the action
   */
  @Prop() actionIcon?: string;

  /**
   * Second action icon
   */
  @Prop() secondaryActionIcon?: string;

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
  @Event() eventClick!: EventEmitter;

  /**
   * Emitted when the input value has changed
   */
  @Event() eventClickSecondary!: EventEmitter;

  private globalClickHandler = () => {
    if (this.actionLinkText) {
      return;
    }
    this.eventClick.emit();
  };

  private actionLinkClickHandler = (event: CustomEvent) => {
    event.stopPropagation();
    if (!this.actionLinkText) {
      return;
    }
    this.eventClick.emit();
  };

  private secondActionLinkClickHandler = (event: CustomEvent) => {
    event.stopPropagation();
    this.eventClickSecondary.emit();
  };

  private getTag() {
    return this.actionLinkText ? 'div' : 'button';
  }

  render() {
    const Tag = this.getTag();
    return (
      <Tag
        class="d-quick-action-button"
        {...!this.actionLinkText && { onClick: this.globalClickHandler }}
      >
        {this.representativeIcon && (
          <d-icon
            class="d-quick-action-button-representative-icon"
            size={(
              this.representativeIconHasCircle
                ? `var(--${PREFIX_BS}quick-action-button-representative-icon-size)`
                : `var(--${PREFIX_BS}quick-action-button-representative-image-size)`
            )}
            icon={this.representativeIcon}
            hasCircle={this.representativeIconHasCircle}
            theme={this.representativeIconTheme}
            familyClass={this.representativeIconFamilyClass}
            familyPrefix={this.representativeIconFamilyPrefix}
          />
        )}
        {this.representativeImage && (
          <img
            class="d-quick-action-button-representative-image"
            src={this.representativeImage}
            alt=""
          />
        )}
        <div class="d-quick-action-button-content">
          <div class="d-quick-action-button-text">
            <span class="d-quick-action-button-line1">
              {this.line1}
            </span>
            <small class="d-quick-action-button-line2">
              {this.line2}
            </small>
          </div>
        </div>
        {this.secondaryActionIcon && (
          <d-button
            class="d-quick-action-button-secondary-action-link"
            type="button"
            variant="link"
            iconStart={this.secondaryActionIcon}
            iconStartFamilyClass={this.actionIconFamilyClass}
            iconStartFamilyPrefix={this.actionIconFamilyPrefix}
            theme={this.actionLinkTheme}
            onEventClick={this.secondActionLinkClickHandler}
          />
        )}
        {(this.actionLinkText && !this.actionIcon) && (
          <d-button
            class="d-quick-action-button-action-link"
            type="button"
            variant="link"
            theme={this.actionLinkTheme}
            text={this.actionLinkText}
            onEventClick={this.actionLinkClickHandler}
          />
        )}
        {(this.actionIcon && !this.actionLinkText) && (
          <d-icon
            class="d-quick-action-button-action-icon"
            icon={this.actionIcon}
            size={`var(--${PREFIX_BS}quick-action-button-action-icon-size)`}
            familyClass={this.actionIconFamilyClass}
            familyPrefix={this.actionIconFamilyPrefix}
          />
        )}
      </Tag>
    );
  }
}
