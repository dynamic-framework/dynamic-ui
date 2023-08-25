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
import { defineCustomElement as defineDInputPin } from '@dynamic-framework/ui/components/d-input-pin.js';
import { defineCustomElement as defineDInputSearch } from '@dynamic-framework/ui/components/d-input-search.js';
import { defineCustomElement as defineDInputSelect } from '@dynamic-framework/ui/components/d-input-select.js';
import { defineCustomElement as defineDInputSwitch } from '@dynamic-framework/ui/components/d-input-switch.js';
import { defineCustomElement as defineDModal } from '@dynamic-framework/ui/components/d-modal.js';
import { defineCustomElement as defineDOffcanvas } from '@dynamic-framework/ui/components/d-offcanvas.js';
import { defineCustomElement as defineDProgress } from '@dynamic-framework/ui/components/d-progress.js';
import { defineCustomElement as defineDQuickActionCheck } from '@dynamic-framework/ui/components/d-quick-action-check.js';
import { defineCustomElement as defineDQuickActionSwitch } from '@dynamic-framework/ui/components/d-quick-action-switch.js';
import { defineCustomElement as defineMQuickActionButton } from '@dynamic-framework/ui/components/m-quick-action-button.js';
import { defineCustomElement as defineMQuickActionSelect } from '@dynamic-framework/ui/components/m-quick-action-select.js';
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
  defineCustomElementFn: defineDInputPin,
  inputs: ['characters', 'hint', 'iconFamilyClass', 'iconFamilyPrefix', 'innerId', 'innerInputMode', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isSecret', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'placeholder', 'type']
})
@Component({
  selector: 'd-input-pin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['characters', 'hint', 'iconFamilyClass', 'iconFamilyPrefix', 'innerId', 'innerInputMode', 'isDisabled', 'isInvalid', 'isLoading', 'isReadOnly', 'isSecret', 'isValid', 'label', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'placeholder', 'type'],
})
export class DInputPin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventChange']);
  }
}


export declare interface DInputPin extends Components.DInputPin {
  /**
   * Emitted when the inputs had changed
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
  defineCustomElementFn: defineDInputSelect,
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'innerId', 'isDisabled', 'isLoading', 'label', 'labelExtractor', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'name', 'options', 'selectedOption', 'valueExtractor']
})
@Component({
  selector: 'd-input-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'iconEnd', 'iconEndFamilyClass', 'iconEndFamilyPrefix', 'iconFamilyClass', 'iconFamilyPrefix', 'iconStart', 'iconStartFamilyClass', 'iconStartFamilyPrefix', 'innerId', 'isDisabled', 'isLoading', 'label', 'labelExtractor', 'labelIcon', 'labelIconFamilyClass', 'labelIconFamilyPrefix', 'name', 'options', 'selectedOption', 'valueExtractor'],
})
export class DInputSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventChange', 'eventBlur', 'eventIconStartClick', 'eventIconEndClick']);
  }
}


export declare interface DInputSelect extends Components.DInputSelect {
  /**
   * Emitted when the select value has changed
   */
  eventChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when blur the input
   */
  eventBlur: EventEmitter<CustomEvent<any>>;
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
  defineCustomElementFn: defineDInputSwitch,
  inputs: ['innerId', 'isChecked', 'isDisabled', 'isReadonly', 'label', 'name']
})
@Component({
  selector: 'd-input-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['innerId', 'isChecked', 'isDisabled', 'isReadonly', 'label', 'name'],
})
export class DInputSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventChange']);
  }
}


export declare interface DInputSwitch extends Components.DInputSwitch {
  /**
   * Emitted when the switch has changed
   */
  eventChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineDModal,
  inputs: ['footerActionPlacement', 'fullScreenFrom', 'isCentered', 'isFullScreen', 'isScrollable', 'isStatic', 'modalSize', 'name', 'showCloseButton']
})
@Component({
  selector: 'd-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['footerActionPlacement', 'fullScreenFrom', 'isCentered', 'isFullScreen', 'isScrollable', 'isStatic', 'modalSize', 'name', 'showCloseButton'],
})
export class DModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventClose']);
  }
}


export declare interface DModal extends Components.DModal {
  /**
   * Emitted when the input value has changed
   */
  eventClose: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineDOffcanvas,
  inputs: ['footerActionPlacement', 'isScrollable', 'isStatic', 'name', 'openFrom', 'showCloseButton']
})
@Component({
  selector: 'd-offcanvas',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['footerActionPlacement', 'isScrollable', 'isStatic', 'name', 'openFrom', 'showCloseButton'],
})
export class DOffcanvas {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventClose']);
  }
}


export declare interface DOffcanvas extends Components.DOffcanvas {
  /**
   * Emitted when the input value has changed
   */
  eventClose: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineDProgress,
  inputs: ['currentValue', 'enableStripedAnimation', 'hideCurrentValue', 'maxValue', 'minValue']
})
@Component({
  selector: 'd-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentValue', 'enableStripedAnimation', 'hideCurrentValue', 'maxValue', 'minValue'],
})
export class DProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DProgress extends Components.DProgress {}


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
  defineCustomElementFn: defineDQuickActionSwitch,
  inputs: ['hint', 'innerId', 'isChecked', 'isDisabled', 'label', 'name']
})
@Component({
  selector: 'd-quick-action-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'innerId', 'isChecked', 'isDisabled', 'label', 'name'],
})
export class DQuickActionSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['eventClick']);
  }
}


export declare interface DQuickActionSwitch extends Components.DQuickActionSwitch {
  /**
   * Emitted when the select value has changed
   */
  eventClick: EventEmitter<CustomEvent<boolean>>;
}


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


