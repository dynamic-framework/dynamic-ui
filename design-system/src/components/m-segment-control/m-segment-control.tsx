/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Component,
  Prop,
  h,
} from '@stencil/core';

@Component({
  tag: 'm-segment-control',
  styleUrl: 'm-segment-control.scss',
  shadow: false,
})
export class MSegmentControl {
  /**
   * Aria label to describe the segment control
   */
  @Prop() description?: string;
  render() {
    return (
      <div
        class="segment-control"
        role="group"
        {...this.description && ({ 'aria-label': this.description })}
      >
        <slot />
      </div>
    );
  }
}
