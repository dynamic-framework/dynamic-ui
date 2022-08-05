import {
  Component,
  h,
  Prop,
  Element,
} from '@stencil/core';

import { prefixBS, ClassMap } from '../../utils/component-interface';

import { ModalSize, FullScreenFrom } from './m-modal-interface';

@Component({
  tag: 'm-modal',
  styleUrl: 'm-modal.scss',
  shadow: false,
})
export class MModal {
  @Element() el!: HTMLMModalElement;

  /**
   * Id of the modal
   */
  @Prop() mId!: string;

  /**
   * Close button text
   */
  @Prop() closeText?: string;

  /**
   * Is backdrop static
   */
  @Prop() static?: boolean;

  /**
   * Is modal scrollable
   */
  @Prop() scrollable?: boolean;

  /**
   * Is modal centered
   */
  @Prop() centered?: boolean;

  /**
   * Is fullscreen in all sizes
   */
  @Prop() fullScreen?: boolean;

  /**
   * Minimum size to apply the fullscreen
   */
  @Prop() fullScreenFrom?: FullScreenFrom;

  /**
   * Modal size
   */
  @Prop() modalSize?: ModalSize;

  /**
   * Background image header
   */
  @Prop() imageHeader?: string;

  /**
   * No display close button
   */
  @Prop() noCloseButton?: boolean;

  private header!: boolean;
  private body!: boolean;
  private footer!: boolean;

  private fullScreenClass(): string {
    if (this.fullScreen) {
      if (this.fullScreenFrom) {
        return `modal-fullscreen-${this.fullScreenFrom}-down`;
      }
      return 'modal-fullscreen';
    }
    return '';
  }

  private generateModalDialogClasses(): ClassMap {
    return {
      'modal-dialog': true,
      'modal-dialog-centered': !!this.centered,
      'modal-dialog-scrollable': !!this.scrollable,
      [`modal-${this.modalSize}`]: !!this.modalSize,
      [this.fullScreenClass()]: !!this.fullScreen,
    };
  }

  componentWillLoad() {
    this.header = !!this.el.querySelector('[slot="header"]');
    this.body = !!this.el.querySelector('[slot="body"]');
    this.footer = !!this.el.querySelector('[slot="footer"]');
  }

  render() {
    return (
      <div
        class="modal fade"
        id={this.mId}
        tabindex="-1"
        aria-labelledby={`${this.mId}Label`}
        aria-hidden="true"
        {...this.static && ({
          [`data-${prefixBS}backdrop`]: 'static',
          [`data-${prefixBS}keyboard`]: 'false',
        })}
      >
        <div
          class={this.generateModalDialogClasses()}
          {...this.imageHeader && ({ style: { [`--${prefixBS}header-bg-image`]: `url("${this.imageHeader}")` } })}
        >
          <div class="modal-content">
            {this.header && (
              <div
                class={{
                  'modal-header': true,
                  'modal-header-bg-image': !!this.imageHeader,
                }}
              >
                <slot name="header" />
                {!this.noCloseButton && (
                  <button
                    type="button"
                    class={{
                      'btn-close': true,
                      'btn-close-text': !!this.closeText,
                    }}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    {this.closeText && (this.closeText)}
                  </button>
                )}
              </div>
            )}
            {this.body && (
              <div class="modal-body">
                <slot name="body" />
              </div>
            )}
            {this.footer && (
              <div class="modal-footer">
                <slot name="footer" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
