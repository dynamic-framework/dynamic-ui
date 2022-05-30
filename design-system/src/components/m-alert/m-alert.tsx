import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Host,
  h,
  Prop,
  Event,
} from '@stencil/core';

import { AlertAction } from './m-alert-interface';

@Component({
  tag: 'm-alert',
  shadow: false,
})
export class MAlert implements ComponentInterface {
  /**
   * The theme to use.
   */
  @Prop() theme = 'primary';
  /**
   * The header text
   */
  @Prop() header = '';
  /**
   * the body of alert
   * render on top of the slot
   */
  @Prop() body = '';
  /**
   * the action buttons
   */
  @Prop() actions: AlertAction[] = [];

  /**
   * Emitted when the action button is clicked.
   */
  @Event() modActionClick!: EventEmitter<AlertAction>;

  private actionClickHandler = (action: CustomEvent<AlertAction>) => {
    this.modActionClick.emit(action.detail);
  };

  private renderAction = (action: AlertAction) => (
    <m-alert-action
      action={action}
      onModClick={this.actionClickHandler}
    />
  );

  render() {
    return (
      <Host>
        <m-card
          part="card"
          theme={this.theme}
          header={this.header}
        >
          <m-text>
            <p>
              {this.body}
            </p>
          </m-text>
          <m-text>
            <p>
              <slot />
            </p>
          </m-text>
          {this.actions.map(this.renderAction)}
        </m-card>
      </Host>
    );
  }
}
