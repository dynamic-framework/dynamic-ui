import {
  Component,
  Host,
  h,
  Prop,
  ComponentInterface,
  Event,
  EventEmitter,
} from '@stencil/core';

import { ClassMap } from '../../utils/component-interface';

import type { FormCheckType, FormCheckState } from './m-form-check-interface';

@Component({
  tag: 'm-form-check',
  styleUrl: 'm-form-check.scss',
  shadow: false,
})
export class MFormCheck implements ComponentInterface {
  /**
   * Set whether is a checkbox input or a radio input
   */
  @Prop() type!: FormCheckType;

  /**
   * HTML Name to use within a form or JS reference
   */
  @Prop() name?: string;

  /**
   * Text that will be displayed beside Check input or Radio input
   */
  @Prop() label?: string;

  /**
   * Set checkbox or radio button marked as selected or not
   */
  @Prop() isChecked = false;

  /**
   * Form control identifier
   */
  @Prop() mId!: string;

  /**
   * Set input as disabled
   */
  @Prop() isDisabled = false;

  /**
   * State of checkbox or radio. The states could be:
   * Success state
   * Error state
   * Warning state
   * Loading state
   */
  @Prop() state?: FormCheckState;

  /**
   * Set view of checkbox as indeterminated
   */
  @Prop() isIndeterminate?: boolean;

  /**
   * A string representing the value of the checkbox or radio
   */
  @Prop() value?: string;

  /**
   * Set checkbox as toggle button
   */
  @Prop() isButton = false;

  /**
   * Emitted when the switch has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter;

  private changeHandler = (event: Event) => {
    const { checked, value } = (event.target as HTMLInputElement);
    this.mChange.emit({
      isChecked: checked,
      value,
    });
  };

  private generateClasses(): ClassMap {
    return {
      'form-check-input': !this.isButton,
      [`form-check-input-${this.state}`]: !!this.state && !this.isButton,
      'form-check-box-input': this.isButton,
    };
  }

  render() {
    return (
      <Host class="form-check-box">
        {this.label ? (
          <div class={this.isButton ? '' : 'form-check'}>
            <input
              onChange={(event) => this.changeHandler(event)}
              class={this.generateClasses()}
              type={this.type}
              name={this.name}
              id={this.mId}
              value={this.value}
              checked={this.isChecked}
              disabled={this.isDisabled}
              indeterminate={this.isIndeterminate}
            />
            <label
              class={this.isButton ? 'form-check-box-label' : 'form-check-label'}
              htmlFor={this.mId}
            >
              {this.label}
            </label>
          </div>
        ) : (
          <input
            onChange={(event) => this.changeHandler(event)}
            class={this.generateClasses()}
            type={this.type}
            name={this.name}
            id={this.mId}
            value={this.value}
            checked={this.isChecked}
            disabled={this.isDisabled}
            indeterminate={this.isIndeterminate}
          />
        )}
      </Host>
    );
  }
}
