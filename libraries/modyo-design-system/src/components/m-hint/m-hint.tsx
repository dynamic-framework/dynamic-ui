import {
  Component,
  h,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'm-hint',
  styleUrl: 'm-hint.scss',
  shadow: false,
})
export class MHint {
  /**
   * Left icon for the hint
   */
  @Prop() iconStart?: string;

  /**
   * Left icon family class
   */
  @Prop() iconStartFamilyClass?: string;

  /**
   * Left icon family class
   */
  @Prop() iconStartFamilyPrefix?: string;

  /**
   * Right icon for the hint
   */
  @Prop() iconEnd?: string;

  /**
   * Right icon family class
   */
  @Prop() iconEndFamilyClass?: string;

  /**
   * Right icon family class
   */
  @Prop() iconEndFamilyPrefix?: string;

  /**
   * Hint text
   */
  @Prop() text!: string;

  /**
   * Theme for the hint
   */
  @Prop() theme?: string;

  /**
   * Size for the icons
   */
  @Prop() iconSize = 'inherit';

  render() {
    return (
      <small class={{
        'm-hint': true,
        [`m-hint-${this.theme}`]: !!this.theme,
      }}
      >
        {this.iconStart && (
          <m-icon
            icon={this.iconStart}
            theme={this.theme}
            size={this.iconSize}
            familyClass={this.iconStartFamilyClass}
            familyPrefix={this.iconStartFamilyPrefix}
          />
        )}
        <span>
          {this.text}
        </span>
        {this.iconEnd && (
          <m-icon
            icon={this.iconEnd}
            theme={this.theme}
            size={this.iconSize}
            familyClass={this.iconEndFamilyClass}
            familyPrefix={this.iconEndFamilyPrefix}
          />
        )}
      </small>
    );
  }
}
