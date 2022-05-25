import type { ComponentInterface } from '@stencil/core';
import {
  Component, h, Prop, Host,
} from '@stencil/core';

@Component({
  tag: 'm-list-item',
  styleUrl: 'm-list-item.scss',
  shadow: false,
})
export class MListItem implements ComponentInterface {
  /**
  * Has Light theme.
  */
  @Prop() light = false;

  /**
  * Main text of the list.
  */
  @Prop() text = '';

  /**
  * Subtext of the list.
  */
  @Prop() subtext = '';

  /**
  * Value of the list
  */
  @Prop() value: number | string | null = null;

  /**
  * Alternative value
  */
  @Prop() alternative: number | string | null = null;

  /**
  * Has borders rounded
  */
  @Prop() pill = false;

  /**
  * Has image
  */
  @Prop() image = false;

  /**
  * Url to replace the default icon image
  */
  @Prop() urlImage: string | null = null;

  /**
  * Has arrow icon
  */
  @Prop() arrow = true;

  /**
  * Has radio button
  */
  @Prop() radio = false;

  /**
  * Variant for text item list or complete item list
  */
  @Prop() variant: 'text' | 'complete' = 'text';

  /**
  * Is active element.
  */
  @Prop() isActive = false;

  render() {
    if (this.variant === 'complete') {
      return (
        <Host
        class={{
          'list-group-item': true,
          'rounded-1 border mb-3': this.pill,
          'border-0 border-bottom': !this.pill,
          'd-flex align-items-center justify-content-between gap-2 p-3': true,
          'list-group-item-light': this.light,
          active: this.isActive,
        }}
        aria-current={this.isActive}>
          {
            this.radio ? <input type="radio" name="list-group-item-radio" id="list-group-item-radio" /> : null
          }
          {
            this.image
              ? <div class={{
                'list-group-item-picture d-inline-flex justify-content-center align-items-center rounded-1': true,
                'bg-tertiary': this.urlImage === null,
              }}>
                  {
                    this.urlImage === null
                      ? <i class="bi bi-heart-fill text-white fs-5"></i>
                      : <img class="list-group-item-img rounded-1" src={this.urlImage} alt="picture item" />
                  }
                </div>
              : null
          }
          <div class={'d-flex flex-column flex-grow-1'}>
            <span class={'d-block fw-bold fs-6 text-dark lh-3'}>{ this.text }</span>
            {
              this.subtext !== '' ? <small class={'d-block text-middledark lh-3'}>{ this.subtext }</small> : null
            }
          </div>
          {
            this.value !== null
              ? <div class={'d-flex flex-column flex-grow-1 text-end'}>
                  <span class={'fw-bold fs-6 text-middledark lh-3'}>{ this.value }</span>
                  {
                    this.alternative !== null ? <small class={'text-middledark lh-3'}>{ this.alternative }</small> : null
                  }
                </div>
              : null
          }
          {
            this.arrow
              ? <div class={'d-flex justify-content-center align-items-center text-middlelight'}>
                  <i class="bi bi-chevron-right"></i>
                </div>
              : null
          }
        </Host>
      );
    }
    return (
      <Host
      class={{
        'list-group-item': true,
        'd-flex align-items-center justify-content-between text-dark gap-3 border-0 p-1': true,
        active: this.isActive,
      }}
      aria-current={this.isActive}>
        <span class="flex-grow-1 opacity-50">{this.text}</span>
        <span class="flex-shrink-1">{this.value}</span>
      </Host>
    );
  }
}
