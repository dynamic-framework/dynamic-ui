import type { ComponentInterface, EventEmitter } from '@stencil/core';
import { Component, Host, h, Prop, Event } from '@stencil/core';
import { AlertAction } from './m-alert-interface';

@Component({
  tag: 'm-alert',
  shadow: true,
})
export class MAlert implements ComponentInterface {
  @Prop() theme: string = 'primary';
  @Prop() header: string = '';
  @Prop() body: string = '';
  @Prop() actions: AlertAction[] = [];

  @Event() modActionClick!: EventEmitter<AlertAction>;

  actionClickHandler(action: AlertAction) {
    this.modActionClick.emit(action);
  }

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
              <slot></slot>
            </p>
          </m-text>
          {this.actions.map((action) => (
            <m-button
              onModButtonClick={() => this.actionClickHandler(action)}
              text={action.text}
            />
          ))}
        </m-card>
      </Host>
    );
  }
}
