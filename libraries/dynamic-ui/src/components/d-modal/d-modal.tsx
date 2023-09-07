import {
  Component,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
} from '@stencil/core';

import { ClassMap } from '../../utils/component-interface';
import { PREFIX_BS } from '../../utils';

import { ModalSize, FullScreenFrom } from './d-modal-interface';

@Component({ tag: 'd-modal' })
export class DModal {
  @Element() el!: HTMLDModalElement;

  /**
   * the name of the modal
   */
  @Prop() name!: string;

  /**
   * Modal class
   */
  @Prop() innerClass?: string;

  /**
   * Is backdrop static
   */
  @Prop() isStatic?: boolean;

  /**
   * Is modal scrollable
   */
  @Prop() isScrollable?: boolean;

  /**
   * Is modal centered
   */
  @Prop() isCentered?: boolean;

  /**
   * Is fullscreen in all sizes
   */
  @Prop() isFullScreen?: boolean;

  /**
   * Minimum size to apply the fullscreen
   */
  @Prop() fullScreenFrom?: FullScreenFrom;

  /**
   * Modal size
   */
  @Prop() modalSize?: ModalSize;

  /**
   * No display close button
   */
  @Prop() showCloseButton?: boolean;

  /**
   * Footer action direction
   */
  @Prop() footerActionPlacement?: 'start' | 'end' | 'fill' | 'center' = 'fill';

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

  private fullScreenClass(): string {
    if (this.isFullScreen) {
      if (this.fullScreenFrom) {
        return `modal-fullscreen-${this.fullScreenFrom}-down`;
      }
      return 'modal-fullscreen';
    }
    return '';
  }

  private generateClasses(): ClassMap {
    return {
      'modal fade show': true,
      [`${this.innerClass}`]: !!this.innerClass,
    };
  }

  private generateModalDialogClasses(): ClassMap {
    return {
      'modal-dialog': true,
      'modal-dialog-centered': !!this.isCentered,
      'modal-dialog-scrollable': !!this.isScrollable,
      [`modal-${this.modalSize}`]: !!this.modalSize,
      [this.fullScreenClass()]: !!this.isFullScreen,
    };
  }

  render() {
    return (
      <div
        class={this.generateClasses()}
        id={this.name}
        tabindex="-1"
        aria-labelledby={`${this.name}Label`}
        aria-hidden="false"
        {...this.isStatic && ({
          [`data-${PREFIX_BS}backdrop`]: 'static',
          [`data-${PREFIX_BS}keyboard`]: 'false',
        })}
      >
        <div class={this.generateModalDialogClasses()}>
          <div class="modal-content">
            {(this.header || this.showCloseButton) && (
              <div
                class="modal-header"
              >
                {this.showCloseButton && (
                  <button
                    type="button"
                    class="d-modal-close"
                    aria-label="Close"
                    onClick={this.closeHandler}
                  >
                    <d-icon icon="x-lg" />
                  </button>
                )}
                {this.header && (
                  <div class="d-modal-slot">
                    <slot name="header" />
                  </div>
                )}
              </div>
            )}
            {this.body && (
              <div class="d-modal-slot modal-body">
                <slot name="body" />
              </div>
            )}
            {this.footer && (
              <div class="d-modal-separator" />
            )}
            {this.footer && (
              <div class={`d-modal-slot modal-footer d-modal-action-${this.footerActionPlacement}`}>
                <slot name="footer" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
