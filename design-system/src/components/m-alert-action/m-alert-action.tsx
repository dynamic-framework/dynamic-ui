import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Event,
  h,
  Prop,
} from '@stencil/core';
import { AlertAction } from '../m-alert/m-alert-interface';

@Component({
  tag: 'm-alert-action',
  shadow: false,
})
export class MAlertAction implements ComponentInterface {
  /**
   * The action to perform when the button is clicked.
   */
  @Prop() action!: AlertAction;
  /**
   * Emitted when the action button is clicked.
   */
  @Event() modClick!: EventEmitter<AlertAction>;

  private clickHandler = () => {
    this.modClick.emit(this.action);
  };

  render() {
    return (
      <m-button
        onModButtonClick={this.clickHandler}
        text={this.action.text}
      />
    );
  }
}
