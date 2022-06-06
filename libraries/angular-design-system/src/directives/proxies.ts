/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@modyo/design-system/components';

import { defineCustomElement as defineMAlert } from '@modyo/design-system/components/m-alert.js';
import { defineCustomElement as defineMAlertAction } from '@modyo/design-system/components/m-alert-action.js';
import { defineCustomElement as defineMApp } from '@modyo/design-system/components/m-app.js';
import { defineCustomElement as defineMBadge } from '@modyo/design-system/components/m-badge.js';
import { defineCustomElement as defineMButton } from '@modyo/design-system/components/m-button.js';
import { defineCustomElement as defineMCard } from '@modyo/design-system/components/m-card.js';
import { defineCustomElement as defineMFormCheck } from '@modyo/design-system/components/m-form-check.js';
import { defineCustomElement as defineMFormSwitch } from '@modyo/design-system/components/m-form-switch.js';
import { defineCustomElement as defineMInput } from '@modyo/design-system/components/m-input.js';
import { defineCustomElement as defineMListItem } from '@modyo/design-system/components/m-list-item.js';
import { defineCustomElement as defineMText } from '@modyo/design-system/components/m-text.js';

import type { AlertAction as IMAlertAlertAction } from '@modyo/design-system/components';
export declare interface MAlert extends Components.MAlert {
  /**
   * Emitted when the action button is clicked. 
   */
  modActionClick: EventEmitter<CustomEvent<IMAlertAlertAction>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMAlert,
  inputs: ['actions', 'body', 'header', 'theme']
})
@Component({
  selector: 'm-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actions', 'body', 'header', 'theme']
})
export class MAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['modActionClick']);
  }
}

import type { AlertAction as IMAlertActionAlertAction } from '@modyo/design-system/components';
export declare interface MAlertAction extends Components.MAlertAction {
  /**
   * Emitted when the action button is clicked. 
   */
  modClick: EventEmitter<CustomEvent<IMAlertActionAlertAction>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMAlertAction,
  inputs: ['action']
})
@Component({
  selector: 'm-alert-action',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['action']
})
export class MAlertAction {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['modClick']);
  }
}


export declare interface MApp extends Components.MApp {}

@ProxyCmp({
  defineCustomElementFn: defineMApp
})
@Component({
  selector: 'm-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MBadge extends Components.MBadge {}

@ProxyCmp({
  defineCustomElementFn: defineMBadge,
  inputs: ['text', 'theme']
})
@Component({
  selector: 'm-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['text', 'theme']
})
export class MBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MButton extends Components.MButton {
  /**
   * Emitted when the button has been clicked. 
   */
  mButtonClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMButton,
  inputs: ['isPill', 'state', 'text', 'theme', 'type', 'value', 'variant']
})
@Component({
  selector: 'm-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isPill', 'state', 'text', 'theme', 'type', 'value', 'variant']
})
export class MButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mButtonClick']);
  }
}


export declare interface MCard extends Components.MCard {}

@ProxyCmp({
  defineCustomElementFn: defineMCard,
  inputs: ['header', 'theme']
})
@Component({
  selector: 'm-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['header', 'theme']
})
export class MCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MFormCheck extends Components.MFormCheck {}

@ProxyCmp({
  defineCustomElementFn: defineMFormCheck,
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'mId', 'name', 'state', 'type']
})
@Component({
  selector: 'm-form-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'mId', 'name', 'state', 'type']
})
export class MFormCheck {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MFormSwitch extends Components.MFormSwitch {}

@ProxyCmp({
  defineCustomElementFn: defineMFormSwitch,
  inputs: ['label', 'mId']
})
@Component({
  selector: 'm-form-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'mId']
})
export class MFormSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MInput extends Components.MInput {
  /**
   * Emitted when the input value has changed 
   */
  modChange: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMInput,
  inputs: ['disabled', 'label', 'modId', 'placeholder', 'type', 'value']
})
@Component({
  selector: 'm-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'label', 'modId', 'placeholder', 'type', 'value']
})
export class MInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['modChange']);
  }
}


export declare interface MListItem extends Components.MListItem {}

@ProxyCmp({
  defineCustomElementFn: defineMListItem,
  inputs: ['alternativeValue', 'icon', 'image', 'isPill', 'navegableProps', 'selectableProps', 'subtext', 'text', 'theme', 'value', 'variant']
})
@Component({
  selector: 'm-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alternativeValue', 'icon', 'image', 'isPill', 'navegableProps', 'selectableProps', 'subtext', 'text', 'theme', 'value', 'variant']
})
export class MListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MText extends Components.MText {}

@ProxyCmp({
  defineCustomElementFn: defineMText,
  inputs: ['theme']
})
@Component({
  selector: 'm-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['theme']
})
export class MText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
