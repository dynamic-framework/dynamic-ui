import type { ComponentInterface, EventEmitter } from '@stencil/core';
import { Component, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'm-input',
  styleUrl: 'm-input.scss',
  shadow: false
})
export class MInput implements ComponentInterface {
  @Prop() modId: string = '';
  @Prop() label: string = '';
  @Prop() placeholder: string = '';
  @Prop() type: string = 'text';
  @Prop({ mutable: true }) value: string = '';
  @Prop() disabled: boolean = false;

  @Event({ eventName: 'modChange' }) modChange!: EventEmitter<string>;

  changeHandler(event: Event) {
    this.modChange.emit((event.target as HTMLInputElement).value);
  }

  render() {
    return (
      <div class="input-group">
        <span
          class="input-group-text"
          id={`${this.modId}-add`}
        >
          @
        </span>
        <input
          type={this.type}
          class="form-control"
          placeholder={this.placeholder}
          aria-label={this.label}
          disabled={this.disabled}
          value={this.value}
          aria-describedby={`${this.modId}-add`}
          onInput={(event) => this.changeHandler(event)}
        />
      </div>
    );
  }

}
