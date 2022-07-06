import {
  Component,
  Host,
  h,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'm-icon',
  styleUrl: 'm-icon.scss',
})
export class MIcon {
  /**
   * Name of icon to use (in kebab-case)
   * */
  @Prop() icon!: string;
  /**
   * Theme of the icon
   * */
  @Prop() theme?: string;
  /**
   * Font size of the icon
   * */
  @Prop() size?: string = '1rem';

  render() {
    return (
      <Host>
        <i
          class={`bi bi-${this.icon} m-icon-${this.theme}`}
          style={{ 'font-size': this.size }}
        />
      </Host>
    );
  }
}
