import {
  Component,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
} from '@stencil/core';

import { PREFIX_BS } from '../../utils/component-config';

import { PositionToggleFrom } from './d-offcanvas-interface';

@Component({ tag: 'd-offcanvas' })
export class DOffcanvas {
  @Element() el!: HTMLDOffcanvasElement;

  /**
   * the name of the offcanvas
   */
  @Prop() name!: string;

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
  @Prop() openFrom?: PositionToggleFrom = 'end';

  /**
   * Footer action direction
   */
  @Prop() footerActionPlacement?: 'start' | 'end' | 'fill' = 'fill';

  /**
   * Emitted when the input value has changed
   */
  @Event() eventClose!: EventEmitter<void>;

  componentWillLoad() {
    this.header = !!this.el.querySelector('[slot="header"]');
    this.body = !!this.el.querySelector('[slot="body"]');
    this.footer = !!this.el.querySelector('[slot="footer"]');
  }

  private header!: boolean;
  private body!: boolean;
  private footer!: boolean;

  private closeHandler = () => {
    this.eventClose.emit();
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
        {(this.header || this.showCloseButton) && (
          <div
            class="offcanvas-header"
          >
            {this.header && (
              <div class="d-offcanvas-slot">
                <slot name="header" />
              </div>
            )}
            {this.showCloseButton && (
              <button
                type="button"
                class="d-offcanvas-close"
                aria-label="Close"
                onClick={this.closeHandler}
              >
                <d-icon icon="x-lg" />
              </button>
            )}
          </div>
        )}
        {this.body && (
          <div class="d-offcanvas-slot offcanvas-body">
            <slot name="body" />
          </div>
        )}
        {this.footer && (
          <div class={`d-offcanvas-slot d-offcanvas-footer d-offcanvas-action-${this.footerActionPlacement}`}>
            <slot name="footer" />
          </div>
        )}
      </div>
    );
  }
}