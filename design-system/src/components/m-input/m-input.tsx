import type { ComponentInterface, EventEmitter } from '@stencil/core';
import { Component, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'm-input',
  shadow: true,
})
export class MInput implements ComponentInterface {
  @Prop() id: string = '';
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
          id={`${this.id}-add`}
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
          aria-describedby={`${this.id}-add`}
          onInput={(event) => this.changeHandler(event)}
        />
      </div>
    );
  }

}
