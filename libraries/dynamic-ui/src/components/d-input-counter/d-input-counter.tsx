import {
  Component,
  h,
  Prop,
  EventEmitter,
  Event,
  State,
  Watch,
} from '@stencil/core';

import { PREFIX_BS } from '../../utils';

@Component({ tag: 'd-input-counter' })
export class DInputCounter {
  /**
   * The id of the input
   */
  @Prop() innerId!: string;

  /**
   * The name of the input
   */
  @Prop() name?: string;

  /**
   * The label text
   */
  @Prop() label = '';

  /**
   * Icon for the label text
   */
  @Prop() labelIcon?: string;

  /**
   * Icon label family class
   */
  @Prop() labelIconFamilyClass?: string;

  /**
   * Icon label family class
   */
  @Prop() labelIconFamilyPrefix?: string;

  /**
   * The value of the input
   */
  @Prop() value!: number;

  /**
   * The input is disabled
   */
  @Prop() isDisabled = false;

  /**
   * Flag to read only the input
   */
  @Prop() isReadOnly = false;

  /**
   * Flag for loading state.
   */
  @Prop() isLoading = false;

  /**
   * Right icon family class
   */
  @Prop() iconFamilyClass?: string;

  /**
   * Right icon family class
   */
  @Prop() iconFamilyPrefix?: string;

  /**
   * Icon for the left
   * */
  @Prop() iconStart = 'dash-square';

  /**
   * Left icon family class
   */
  @Prop() iconStartFamilyClass?: string;

  /**
   * Left icon family class
   */
  @Prop() iconStartFamilyPrefix?: string;

  /**
   * Icon for the end
   * */
  @Prop() iconEnd = 'plus-square';

  /**
   * Right icon family class
   */
  @Prop() iconEndFamilyClass?: string;

  /**
   * Right icon family class
   */
  @Prop() iconEndFamilyPrefix?: string;

  /**
   * Hint to display
   */
  @Prop() hint?: string;

  /**
   * Add is-invalid class
   */
  @Prop() isInvalid = false;

  /**
   * Add is-valid class
   */
  @Prop() isValid = false;

  /**
   * * The min value of the input
   */
  @Prop() minValue!: number;

  /**
   * * The max value of the input
   */
  @Prop() maxValue!: number;

  /**
   * Event for input change
   */
  @Event() eventChange!: EventEmitter<number>;

  /**
   * Event for button pressed
   */
  @Event() eventClick!: EventEmitter<number>;

  @State() internalIsInvalid = false;

  @State() internalValue = 0;

  private changeHandler = (event: CustomEvent<string | number>) => {
    event.stopPropagation();
    this.internalValue = (event.detail !== '' && typeof event.detail === 'string')
      ? parseInt(event.detail, 10)
      : 0;
    this.eventChange.emit(this.internalValue);
  };

  private clickHandler = (action: boolean) => {
    const currentValue = this.internalValue;
    if (action) {
      const temp = Number(currentValue) + 1;
      this.internalValue = temp <= this.maxValue ? temp : this.maxValue;
    } else {
      const temp = Number(currentValue) - 1;
      this.internalValue = temp >= this.minValue ? temp : this.minValue;
    }
    this.eventClick.emit(this.internalValue);
  };

  @Watch('internalValue')
  watchValidValueHandler() {
    this.internalIsInvalid = !(
      this.internalValue >= this.minValue
        && this.internalValue <= this.maxValue
    );
  }

  @Watch('value')
  watchValueHandler() {
    this.internalValue = this.value;
  }

  connectedCallback() {
    this.internalValue = this.value;
  }

  // eslint-disable-next-line class-methods-use-this
  private generateStyleVariables() {
    return { [`--${PREFIX_BS}input-component-form-control-text-align`]: 'center' };
  }

  render() {
    return (
      <d-input
        style={this.generateStyleVariables()}
        innerId={this.innerId}
        name={this.name}
        label={this.label}
        labelIcon={this.labelIcon}
        labelIconFamilyClass={this.labelIconFamilyClass}
        labelIconFamilyPrefix={this.labelIconFamilyPrefix}
        value={this.internalValue}
        iconStart={this.iconStart}
        iconStartFamilyClass={this.iconStartFamilyClass}
        iconStartFamilyPrefix={this.iconStartFamilyPrefix}
        iconEnd={this.iconEnd}
        iconEndFamilyClass={this.iconStartFamilyClass}
        iconEndFamilyPrefix={this.iconStartFamilyPrefix}
        isDisabled={this.isDisabled}
        isReadOnly={this.isReadOnly}
        isLoading={this.isLoading}
        hint={this.hint}
        isInvalid={this.internalIsInvalid || this.isInvalid}
        isValid={this.isValid}
        type="number"
        onEventChange={this.changeHandler}
        onEventIconStartClick={(event) => {
          event.stopPropagation();
          this.clickHandler(false);
        }}
        onEventIconEndClick={(event) => {
          event.stopPropagation();
          this.clickHandler(true);
        }}
      />
    );
  }
}
