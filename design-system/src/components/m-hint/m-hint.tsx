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
   * Right icon for the hint
   */
  @Prop() iconEnd?: string;
  /**
   * Hint text
   */
  @Prop() text!: string;
  /**
   * Theme for the hint
   */
  @Prop() theme = 'info';
  /**
   * Size for the icons
   */
  @Prop() iconSize = 'inherit';

  render() {
    return (
      <small class={`m-hint m-hint-${this.theme}`}>
        {this.iconStart && (
          <m-icon
            icon={this.iconStart}
            theme={this.theme}
            size={this.iconSize}
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
          />
        )}
      </small>
    );
  }
}
