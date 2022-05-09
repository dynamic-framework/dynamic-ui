import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { AlertAction } from '../../utils/types';

@Component({
  tag: 'm-alert',
  shadow: true,
})
export class MAlert {
  @Prop() title: string;
  @Prop() body: string;
  @Prop() actions: AlertAction[] = [];

  @Event({ eventName: 'actionClick' }) actionClick: EventEmitter<AlertAction>;

  actionClickHandler(action) {
    this.actionClick.emit(action);
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
            onButtonClick={() => this.actionClickHandler(action)}
            text={action.text}
          />
        ))}
      </Host>
    );
  }
}
