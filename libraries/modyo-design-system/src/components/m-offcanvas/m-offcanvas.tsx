import {
  Component,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
} from '@stencil/core';

import { PREFIX_BS } from '../../utils/component-config';

import { PositionToggleFrom } from './m-offcanvas-interface';

@Component({
  tag: 'm-offcanvas',
  styleUrl: 'm-offcanvas.scss',
  shadow: false,
})
export class MOffcanvas {
  @Element() el!: HTMLMOffcanvasElement;

  /**
   * the name of the offcanvas
   */
  @Prop() name!: string;

  /**
   * Close button text
   */
  @Prop() closeText?: string;

  /**
   * Is backdrop static
   */
  @Prop() isStatic?: boolean;

  /**
   * Is body scrollable while offcanvas is active
   */
  @Prop() isScrollable?: boolean;

  /**
   * No display close button
   */
  @Prop() showCloseButton?: boolean;

  /**
   * Position to show offcanvas from
   */
  @Prop() openFrom: PositionToggleFrom = 'start';

  /**
   * Emitted when the input value has changed
   */
  @Event({ eventName: 'mClose' }) mClose!: EventEmitter<void>;

  componentWillLoad() {
    this.header = !!this.el.querySelector('[slot="header"]');
    this.body = !!this.el.querySelector('[slot="body"]');
    this.footer = !!this.el.querySelector('[slot="footer"]');
  }

  private header!: boolean;
  private body!: boolean;
  private footer!: boolean;

  private closeHandler = () => {
    this.mClose.emit();
  };

  render() {
    return (
      <div
        class={`offcanvas offcanvas-${this.openFrom} show`}
        id={this.name}
        tabindex="-1"
        aria-labelledby={`${this.name}Label`}
        aria-hidden="false"
        {...this.isStatic && ({
          [`data-${PREFIX_BS}backdrop`]: 'static',
          [`data-${PREFIX_BS}keyboard`]: 'false',
        })}
        {...this.isScrollable && ({
          [`data-${PREFIX_BS}scroll`]: 'true',
          [`data-${PREFIX_BS}keyboard`]: 'false',
        })}
      >

        {this.header && (
        <div
          class="offcanvas-header"
        >
          <slot name="header" />
          {this.showCloseButton && (
          <button
            type="button"
            class={{
              'btn-close': !this.closeText,
              'btn-close-text': !!this.closeText,
            }}
            aria-label="Close"
            onClick={this.closeHandler}
          >
            {this.closeText && (this.closeText)}
          </button>
          )}
        </div>
        )}
        {this.body && (
        <div class="offcanvas-body">
          <slot name="body" />
        </div>
        )}
        {this.footer && (
        <div class="offcanvas-footer">
          <slot name="footer" />
        </div>
        )}
      </div>
    );
  }
}
