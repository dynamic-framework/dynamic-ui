import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Event,
  h,
  Prop,
} from '@stencil/core';

@Component({ tag: 'm-input-search' })
export class MInputSearch implements ComponentInterface {
  /**
   * The id of the input
   */
  @Prop() mId!: string;

  /**
   * The name of the input
   */
  @Prop() name?: string;

  /**
    * The label text
    */
  @Prop() label = '';

  /**
    * Icon to display on label right
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
    * The placeholder text
    */
  @Prop() placeholder = '';

  /**
    * The value of the input
    */
  @Prop() value = '';

  /**
    * Flag to disable the input
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
    * Hint to display, also used to display validity feedback
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
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<string>;

  /**
   * Emitted when the button is clicked
   */
  @Event({ eventName: 'mClick' }) mClick!: EventEmitter<string>;

  /**
   * HTML m-input element
   */
  private htmlMInputElement?: HTMLMInputElement;

  private changeHandler = (event: CustomEvent<string | number>) => {
    event.stopPropagation();
    this.mChange.emit(event.detail.toString());
  };

  private clickHandler = (event: CustomEvent) => {
    event.stopPropagation();
    this.mClick.emit(this.htmlMInputElement?.value.toString());
  };

  render() {
    return (
      <m-input
        // eslint-disable-next-line no-return-assign
        ref={(el) => (this.htmlMInputElement = el)}
        mId={this.mId}
        name={this.name}
        label={this.label}
        labelIcon={this.labelIcon}
        labelIconFamilyClass={this.labelIconFamilyClass}
        labelIconFamilyPrefix={this.labelIconFamilyPrefix}
        placeholder={this.placeholder}
        value={this.value}
        iconEnd="search"
        isDisabled={this.isDisabled}
        isReadOnly={this.isReadOnly}
        isLoading={this.isLoading}
        hint={this.hint}
        isInvalid={this.isInvalid}
        isValid={this.isValid}
        onMChange={this.changeHandler}
        onMIconEndClick={this.clickHandler}
      />
    );
  }
}
