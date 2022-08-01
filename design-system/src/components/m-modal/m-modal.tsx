import {
  Component,
  h,
  Prop,
} from '@stencil/core';

import { prefixBS, ClassMap } from '../../utils/component-interface';

import { ModalSize, FullScreenSize } from './m-modal-interface';

@Component({
  tag: 'm-modal',
  styleUrl: 'm-modal.scss',
  shadow: false,
})
export class MModal {
  /**
   * Id of the modal
   */
  @Prop() mId!: string;

  /**
   * Close button text
   */
  @Prop() closeText?: string;

  /**
   * Has header
   */
  @Prop() header?: boolean;

  /**
   * Has body
   */
  @Prop() body?: boolean;

  /**
   * Has footer
   */
  @Prop() footer?: boolean;

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
   * Is modal fullscreen or size to apply
   */
  @Prop() fullscreen?: FullScreenSize | boolean;

  /**
   * Modal size
   */
  @Prop() size?: ModalSize;

  /**
   * Background image header
   */
  @Prop() imageHeader?: string;

  private fullScreenClass(): string {
    if (this.fullscreen) {
      if (this.fullscreen === true) {
        return 'modal-fullscreen';
      }
      return `modal-fullscreen-${this.fullscreen}-down`;
    }
    return '';
  }

  private modalClasses(): ClassMap {
    return {
      'modal-dialog': true,
      'modal-dialog-centered': !!this.centered,
      'modal-dialog-scrollable': !!this.scrollable,
      [`modal-${this.size}`]: !!this.size,
      [this.fullScreenClass()]: !!this.fullscreen,
    };
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
          class={this.modalClasses()}
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
