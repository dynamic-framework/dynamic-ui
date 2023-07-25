/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@dynamic-framework/ui/components';

import { defineCustomElement as defineMAlert } from '@dynamic-framework/ui/components/m-alert.js';
import { defineCustomElement as defineMBadge } from '@dynamic-framework/ui/components/m-badge.js';
import { defineCustomElement as defineMButton } from '@dynamic-framework/ui/components/m-button.js';
import { defineCustomElement as defineMChip } from '@dynamic-framework/ui/components/m-chip.js';
import { defineCustomElement as defineMIcon } from '@dynamic-framework/ui/components/m-icon.js';
import { defineCustomElement as defineMInput } from '@dynamic-framework/ui/components/m-input.js';
import { defineCustomElement as defineMInputCheck } from '@dynamic-framework/ui/components/m-input-check.js';
import { defineCustomElement as defineMInputCounter } from '@dynamic-framework/ui/components/m-input-counter.js';
import { defineCustomElement as defineMInputCurrencyBase } from '@dynamic-framework/ui/components/m-input-currency-base.js';
import { defineCustomElement as defineMInputPassword } from '@dynamic-framework/ui/components/m-input-password.js';
import { defineCustomElement as defineMInputPin } from '@dynamic-framework/ui/components/m-input-pin.js';
import { defineCustomElement as defineMInputSearch } from '@dynamic-framework/ui/components/m-input-search.js';
import { defineCustomElement as defineMInputSelect } from '@dynamic-framework/ui/components/m-input-select.js';
import { defineCustomElement as defineMInputSwitch } from '@dynamic-framework/ui/components/m-input-switch.js';
import { defineCustomElement as defineMModal } from '@dynamic-framework/ui/components/m-modal.js';
import { defineCustomElement as defineMOffcanvas } from '@dynamic-framework/ui/components/m-offcanvas.js';
import { defineCustomElement as defineMProgressBar } from '@dynamic-framework/ui/components/m-progress-bar.js';
import { defineCustomElement as defineMQuickActionButton } from '@dynamic-framework/ui/components/m-quick-action-button.js';
import { defineCustomElement as defineMQuickActionCheck } from '@dynamic-framework/ui/components/m-quick-action-check.js';
import { defineCustomElement as defineMQuickActionSelect } from '@dynamic-framework/ui/components/m-quick-action-select.js';
import { defineCustomElement as defineMQuickActionSwitch } from '@dynamic-framework/ui/components/m-quick-action-switch.js';
@ProxyCmp({
  defineCustomElementFn: defineMAlert,
  inputs: ['icon', 'iconFamilyClass', 'iconFamilyPrefix', 'showClose', 'showIcon', 'type']
})
@Component({
  selector: 'm-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'iconFamilyClass', 'iconFamilyPrefix', 'showClose', 'showIcon', 'type'],
})
export class MAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClose']);
  }
}


export declare interface MAlert extends Components.MAlert {
  /**
   * Emitted when the button has been clicked.
   */
  mClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMBadge,
  inputs: ['isDot', 'text', 'theme']
})
@Component({
  selector: 'm-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isDot', 'text', 'theme'],
})
export class MBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MBadge extends Components.MBadge {}


@ProxyCmp({
  defineCustomElementFn: defineMButton,
  inputs: ['iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isLoading', 'isPill', 'size', 'state', 'text', 'theme', 'type', 'value', 'variant']
})
@Component({
  selector: 'm-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isLoading', 'isPill', 'size', 'state', 'text', 'theme', 'type', 'value', 'variant'],
})
export class MButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClick']);
  }
}


export declare interface MButton extends Components.MButton {
  /**
   * Emitted when the button has been clicked.
   */
  mClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMChip,
  inputs: ['icon', 'iconFamilyClass', 'iconFamilyPrefix', 'showClose', 'text', 'theme']
})
@Component({
  selector: 'm-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'iconFamilyClass', 'iconFamilyPrefix', 'showClose', 'text', 'theme'],
})
export class MChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClose']);
  }
}


export declare interface MChip extends Components.MChip {
  /**
   * Emitted when the close button has been clicked.
   */
  mClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMIcon,
  inputs: ['backgroundColor', 'circleSize', 'color', 'familyClass', 'familyPrefix', 'hasCircle', 'icon', 'isLoading', 'loadingDuration', 'size', 'theme']
})
@Component({
  selector: 'm-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backgroundColor', 'circleSize', 'color', 'familyClass', 'familyPrefix', 'hasCircle', 'icon', 'isLoading', 'loadingDuration', 'size', 'theme'],
})
export class MIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MIcon extends Components.MIcon {}


@ProxyCmp({
  defineCustomElementFn: defineMInput,
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'mInputMode', 'name', 'pattern', 'placeholder', 'type', 'value'],
  methods: ['focusInput', 'blurInput']
})
@Component({
  selector: 'm-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'mInputMode', 'name', 'pattern', 'placeholder', 'type', 'value'],
})
export class MInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange', 'mBlur', 'mFocus', 'mWheel', 'mIconStartClick', 'mIconEndClick']);
  }
}


export declare interface MInput extends Components.MInput {
  /**
   * Emitted when the input value has changed
   */
  mChange: EventEmitter<CustomEvent<string | number>>;
  /**
   * Emitted when blur the input
   */
  mBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when blur the input
   */
  mFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when blur the input
   */
  mWheel: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when click on the left icon
   */
  mIconStartClick: EventEmitter<CustomEvent<MouseEvent>>;
  /**
   * Emitted when click on the right icon
   */
  mIconEndClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMInputCheck,
  inputs: ['isChecked', 'isDisabled', 'isIndeterminate', 'label', 'mId', 'name', 'type', 'value']
})
@Component({
  selector: 'm-input-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isChecked', 'isDisabled', 'isIndeterminate', 'label', 'mId', 'name', 'type', 'value'],
})
export class MInputCheck {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MInputCheck extends Components.MInputCheck {
  /**
   * Emitted when the switch has changed
   */
  mChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMInputCounter,
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'maxValue', 'minValue', 'name', 'value']
})
@Component({
  selector: 'm-input-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'maxValue', 'minValue', 'name', 'value'],
})
export class MInputCounter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange', 'mClick']);
  }
}


export declare interface MInputCounter extends Components.MInputCounter {
  /**
   * Event for input change
   */
  mChange: EventEmitter<CustomEvent<number>>;
  /**
   * Event for button pressed
   */
  mClick: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMInputCurrencyBase,
  inputs: ['currencyCode', 'currencyOptions', 'hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'maxValue', 'minValue', 'name', 'placeholder', 'value']
})
@Component({
  selector: 'm-input-currency-base',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currencyCode', 'currencyOptions', 'hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'maxValue', 'minValue', 'name', 'placeholder', 'value'],
})
export class MInputCurrencyBase {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MInputCurrencyBase extends Components.MInputCurrencyBase {
  /**
   * Emitted when the inputs change
   */
  mChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMInputPassword,
  inputs: ['hint', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'name', 'placeholder', 'value']
})
@Component({
  selector: 'm-input-password',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'name', 'placeholder', 'value'],
})
export class MInputPassword {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MInputPassword extends Components.MInputPassword {
  /**
   * Emitted when the input value has changed
   */
  mChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMInputPin,
  inputs: ['characters', 'hint', 'iconFamilyClass', 'iconFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isSecret', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'mInputMode', 'placeholder', 'type']
})
@Component({
  selector: 'm-input-pin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['characters', 'hint', 'iconFamilyClass', 'iconFamilyPrefix', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isSecret', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'mInputMode', 'placeholder', 'type'],
})
export class MInputPin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MInputPin extends Components.MInputPin {
  /**
   * Emitted when the inputs had changed
   */
  mChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMInputSearch,
  inputs: ['hint', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'name', 'placeholder', 'value']
})
@Component({
  selector: 'm-input-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'name', 'placeholder', 'value'],
})
export class MInputSearch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange', 'mClick']);
  }
}


export declare interface MInputSearch extends Components.MInputSearch {
  /**
   * Emitted when the input value has changed
   */
  mChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the button is clicked
   */
  mClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMInputSelect,
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isLoading', 'label', 'labelExtractor', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'name', 'options', 'selectedOption', 'valueExtractor']
})
@Component({
  selector: 'm-input-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isLoading', 'label', 'labelExtractor', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'mId', 'name', 'options', 'selectedOption', 'valueExtractor'],
})
export class MInputSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange', 'mBlur', 'mIconStartClick', 'mIconEndClick']);
  }
}


export declare interface MInputSelect extends Components.MInputSelect {
  /**
   * Emitted when the select value has changed
   */
  mChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when blur the input
   */
  mBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when click on the left icon
   */
  mIconStartClick: EventEmitter<CustomEvent<MouseEvent>>;
  /**
   * Emitted when click on the right icon
   */
  mIconEndClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMInputSwitch,
  inputs: ['isChecked', 'isDisabled', 'isReadonly', 'label', 'mId', 'name']
})
@Component({
  selector: 'm-input-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isChecked', 'isDisabled', 'isReadonly', 'label', 'mId', 'name'],
})
export class MInputSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MInputSwitch extends Components.MInputSwitch {
  /**
   * Emitted when the switch has changed
   */
  mChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMModal,
  inputs: ['footerActionPlacement', 'fullScreenFrom', 'isCentered', 'isFullScreen', 'isScrollable', 'isStatic', 'modalSize', 'name', 'showCloseButton']
})
@Component({
  selector: 'm-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['footerActionPlacement', 'fullScreenFrom', 'isCentered', 'isFullScreen', 'isScrollable', 'isStatic', 'modalSize', 'name', 'showCloseButton'],
})
export class MModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClose']);
  }
}


export declare interface MModal extends Components.MModal {
  /**
   * Emitted when the input value has changed
   */
  mClose: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMOffcanvas,
  inputs: ['footerActionPlacement', 'isScrollable', 'isStatic', 'name', 'openFrom', 'showCloseButton']
})
@Component({
  selector: 'm-offcanvas',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['footerActionPlacement', 'isScrollable', 'isStatic', 'name', 'openFrom', 'showCloseButton'],
})
export class MOffcanvas {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClose']);
  }
}


export declare interface MOffcanvas extends Components.MOffcanvas {
  /**
   * Emitted when the input value has changed
   */
  mClose: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMProgressBar,
  inputs: ['currentValue', 'enableStripedAnimation', 'hideCurrentValue', 'maxValue', 'minValue']
})
@Component({
  selector: 'm-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentValue', 'enableStripedAnimation', 'hideCurrentValue', 'maxValue', 'minValue'],
})
export class MProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MProgressBar extends Components.MProgressBar {}


@ProxyCmp({
  defineCustomElementFn: defineMQuickActionButton,
  inputs: ['actionIcon', 'actionIconFamilyClass', 'actionIconFamilyPrefix', 'actionLinkText', 'actionLinkTheme', 'line1', 'line2', 'representativeIcon', 'representativeIconFamilyClass', 'representativeIconFamilyPrefix', 'representativeIconHasCircle', 'representativeIconTheme', 'representativeImage', 'secondaryActionIcon']
})
@Component({
  selector: 'm-quick-action-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['actionIcon', 'actionIconFamilyClass', 'actionIconFamilyPrefix', 'actionLinkText', 'actionLinkTheme', 'line1', 'line2', 'representativeIcon', 'representativeIconFamilyClass', 'representativeIconFamilyPrefix', 'representativeIconHasCircle', 'representativeIconTheme', 'representativeImage', 'secondaryActionIcon'],
})
export class MQuickActionButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClick', 'mClickSecondary']);
  }
}


export declare interface MQuickActionButton extends Components.MQuickActionButton {
  /**
   * Emitted when the input value has changed
   */
  mClick: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the input value has changed
   */
  mClickSecondary: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMQuickActionCheck,
  inputs: ['isChecked', 'line1', 'line2', 'line3', 'mId', 'name', 'value']
})
@Component({
  selector: 'm-quick-action-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isChecked', 'line1', 'line2', 'line3', 'mId', 'name', 'value'],
})
export class MQuickActionCheck {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MQuickActionCheck extends Components.MQuickActionCheck {
  /**
   * Emitted when the select value has changed
   */
  mChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMQuickActionSelect,
  inputs: ['isSelected', 'line1', 'line2', 'mId', 'name', 'value']
})
@Component({
  selector: 'm-quick-action-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isSelected', 'line1', 'line2', 'mId', 'name', 'value'],
})
export class MQuickActionSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
  }
}


export declare interface MQuickActionSelect extends Components.MQuickActionSelect {
  /**
   * Emitted when the select value has changed
   */
  mChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineMQuickActionSwitch,
  inputs: ['hint', 'isChecked', 'isDisabled', 'label', 'mId', 'name']
})
@Component({
  selector: 'm-quick-action-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'isChecked', 'isDisabled', 'label', 'mId', 'name'],
})
export class MQuickActionSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mClick']);
  }
}


export declare interface MQuickActionSwitch extends Components.MQuickActionSwitch {
  /**
   * Emitted when the select value has changed
   */
  mClick: EventEmitter<CustomEvent<boolean>>;
}


