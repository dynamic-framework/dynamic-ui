/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@dynamic-framework/ui/components';

import { defineCustomElement as defineDAlert } from '@dynamic-framework/ui/components/d-alert.js';
import { defineCustomElement as defineDBadge } from '@dynamic-framework/ui/components/d-badge.js';
import { defineCustomElement as defineDButton } from '@dynamic-framework/ui/components/d-button.js';
import { defineCustomElement as defineDChip } from '@dynamic-framework/ui/components/d-chip.js';
import { defineCustomElement as defineDIcon } from '@dynamic-framework/ui/components/d-icon.js';
import { defineCustomElement as defineDInput } from '@dynamic-framework/ui/components/d-input.js';
import { defineCustomElement as defineDInputCheck } from '@dynamic-framework/ui/components/d-input-check.js';
import { defineCustomElement as defineDInputCounter } from '@dynamic-framework/ui/components/d-input-counter.js';
import { defineCustomElement as defineDInputCurrencyBase } from '@dynamic-framework/ui/components/d-input-currency-base.js';
import { defineCustomElement as defineDInputPassword } from '@dynamic-framework/ui/components/d-input-password.js';
import { defineCustomElement as defineDInputSearch } from '@dynamic-framework/ui/components/d-input-search.js';
import { defineCustomElement as defineDQuickActionCheck } from '@dynamic-framework/ui/components/d-quick-action-check.js';
import { defineCustomElement as defineMInputPin } from '@dynamic-framework/ui/components/m-input-pin.js';
import { defineCustomElement as defineMInputSelect } from '@dynamic-framework/ui/components/m-input-select.js';
import { defineCustomElement as defineMInputSwitch } from '@dynamic-framework/ui/components/m-input-switch.js';
import { defineCustomElement as defineMModal } from '@dynamic-framework/ui/components/m-modal.js';
import { defineCustomElement as defineMOffcanvas } from '@dynamic-framework/ui/components/m-offcanvas.js';
import { defineCustomElement as defineMProgressBar } from '@dynamic-framework/ui/components/m-progress-bar.js';
import { defineCustomElement as defineMQuickActionButton } from '@dynamic-framework/ui/components/m-quick-action-button.js';
import { defineCustomElement as defineMQuickActionSelect } from '@dynamic-framework/ui/components/m-quick-action-select.js';
import { defineCustomElement as defineMQuickActionSwitch } from '@dynamic-framework/ui/components/m-quick-action-switch.js';
@ProxyCmp({
  defineCustomElementFn: defineDAlert,
  inputs: ['icon', 'iconFamilyClass', 'iconFamilyPrefix', 'showClose', 'showIcon', 'type']
})
@Component({
  selector: 'd-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'iconFamilyClass', 'iconFamilyPrefix', 'showClose', 'showIcon', 'type'],
})
export class DAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventClose']);
  }
}


export declare interface DAlert extends Components.DAlert {
  /**
   * Emitted when the button has been clicked.
   */
  eventClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineDBadge,
  inputs: ['isDot', 'text', 'theme']
})
@Component({
  selector: 'd-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isDot', 'text', 'theme'],
})
export class DBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DBadge extends Components.DBadge {}


@ProxyCmp({
  defineCustomElementFn: defineDButton,
  inputs: ['iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isLoading', 'isPill', 'size', 'state', 'text', 'theme', 'type', 'value', 'variant']
})
@Component({
  selector: 'd-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'isDisabled', 'isLoading', 'isPill', 'size', 'state', 'text', 'theme', 'type', 'value', 'variant'],
})
export class DButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventClick']);
  }
}


export declare interface DButton extends Components.DButton {
  /**
   * Emitted when the button has been clicked.
   */
  eventClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineDChip,
  inputs: ['icon', 'iconFamilyClass', 'iconFamilyPrefix', 'showClose', 'text', 'theme']
})
@Component({
  selector: 'd-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'iconFamilyClass', 'iconFamilyPrefix', 'showClose', 'text', 'theme'],
})
export class DChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventClose']);
  }
}


export declare interface DChip extends Components.DChip {
  /**
   * Emitted when the close button has been clicked.
   */
  eventClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineDIcon,
  inputs: ['backgroundColor', 'circleSize', 'color', 'familyClass', 'familyPrefix', 'hasCircle', 'icon', 'innerClass', 'isLoading', 'loadingDuration', 'size', 'theme']
})
@Component({
  selector: 'd-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backgroundColor', 'circleSize', 'color', 'familyClass', 'familyPrefix', 'hasCircle', 'icon', 'innerClass', 'isLoading', 'loadingDuration', 'size', 'theme'],
})
export class DIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DIcon extends Components.DIcon {}


@ProxyCmp({
  defineCustomElementFn: defineDInput,
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'innerId', 'innerInputMode', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'name', 'pattern', 'placeholder', 'type', 'value'],
  methods: ['innerFocus', 'innerBlur']
})
@Component({
  selector: 'd-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'innerId', 'innerInputMode', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'name', 'pattern', 'placeholder', 'type', 'value'],
})
export class DInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventChange', 'eventBlur', 'eventFocus', 'eventWheel', 'eventIconStartClick', 'eventIconEndClick']);
  }
}


export declare interface DInput extends Components.DInput {
  /**
   * Emitted when the input value has changed
   */
  eventChange: EventEmitter<CustomEvent<string | number>>;
  /**
   * Emitted when blur the input
   */
  eventBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when blur the input
   */
  eventFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when blur the input
   */
  eventWheel: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when click on the left icon
   */
  eventIconStartClick: EventEmitter<CustomEvent<MouseEvent>>;
  /**
   * Emitted when click on the right icon
   */
  eventIconEndClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineDInputCheck,
  inputs: ['innerId', 'isChecked', 'isDisabled', 'isIndeterminate', 'label', 'name', 'type', 'value']
})
@Component({
  selector: 'd-input-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['innerId', 'isChecked', 'isDisabled', 'isIndeterminate', 'label', 'name', 'type', 'value'],
})
export class DInputCheck {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventChange']);
  }
}


export declare interface DInputCheck extends Components.DInputCheck {
  /**
   * Emitted when the switch has changed
   */
  eventChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineDInputCounter,
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'innerId', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'maxValue', 'minValue', 'name', 'value']
})
@Component({
  selector: 'd-input-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'innerId', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'maxValue', 'minValue', 'name', 'value'],
})
export class DInputCounter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventChange', 'eventClick']);
  }
}


export declare interface DInputCounter extends Components.DInputCounter {
  /**
   * Event for input change
   */
  eventChange: EventEmitter<CustomEvent<number>>;
  /**
   * Event for button pressed
   */
  eventClick: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  defineCustomElementFn: defineDInputCurrencyBase,
  inputs: ['currencyCode', 'currencyOptions', 'hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'innerId', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'maxValue', 'minValue', 'name', 'placeholder', 'value']
})
@Component({
  selector: 'd-input-currency-base',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currencyCode', 'currencyOptions', 'hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'innerId', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'maxValue', 'minValue', 'name', 'placeholder', 'value'],
})
export class DInputCurrencyBase {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventChange', 'eventBlur', 'eventFocus']);
  }
}


export declare interface DInputCurrencyBase extends Components.DInputCurrencyBase {
  /**
   * Emitted when the inputs change
   */
  eventChange: EventEmitter<CustomEvent<number>>;
  /**
   * Emitted when the inputs bur
   */
  eventBlur: EventEmitter<CustomEvent<number>>;
  /**
   * Emitted when the inputs focus
   */
  eventFocus: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  defineCustomElementFn: defineDInputPassword,
  inputs: ['hint', 'innerId', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'name', 'placeholder', 'value']
})
@Component({
  selector: 'd-input-password',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'innerId', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'name', 'placeholder', 'value'],
})
export class DInputPassword {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventChange']);
  }
}


export declare interface DInputPassword extends Components.DInputPassword {
  /**
   * Emitted when the input value has changed
   */
  eventChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineDInputSearch,
  inputs: ['hint', 'innerId', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'name', 'placeholder', 'value']
})
@Component({
  selector: 'd-input-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'innerId', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'name', 'placeholder', 'value'],
})
export class DInputSearch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventChange', 'eventClick']);
  }
}


export declare interface DInputSearch extends Components.DInputSearch {
  /**
   * Emitted when the input value has changed
   */
  eventChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the button is clicked
   */
  eventClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineDQuickActionCheck,
  inputs: ['innerId', 'isChecked', 'line1', 'line2', 'line3', 'name', 'value']
})
@Component({
  selector: 'd-quick-action-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['innerId', 'isChecked', 'line1', 'line2', 'line3', 'name', 'value'],
})
export class DQuickActionCheck {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventChange']);
  }
}


export declare interface DQuickActionCheck extends Components.DQuickActionCheck {
  /**
   * Emitted when the select value has changed
   */
  eventChange: EventEmitter<CustomEvent<string>>;
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


