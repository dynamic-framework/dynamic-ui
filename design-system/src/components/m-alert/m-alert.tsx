import type { ComponentInterface, EventEmitter } from '@stencil/core';
import { Component, Host, h, Prop, Event } from '@stencil/core';
import { AlertAction } from './m-alert-interface';

@Component({
  tag: 'm-alert',
  shadow: true,
})
export class MAlert implements ComponentInterface{
  @Prop() title: string = '';
  @Prop() body: string = '';
  @Prop() actions: AlertAction[] = [];

  @Event() modActionClick!: EventEmitter<AlertAction>;

  actionClickHandler(action: AlertAction) {
    this.modActionClick.emit(action);
  }

  render() {
    return (
      <Host>
        <m-text>
          <h1>{this.title}</h1>
        </m-text>
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
      </Host>
    );
  }
}
