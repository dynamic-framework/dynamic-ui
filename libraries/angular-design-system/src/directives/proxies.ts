/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@modyo/design-system/components';

import { defineCustomElement as defineMAlert } from '@modyo/design-system/components/m-alert.js';
import { defineCustomElement as defineMButton } from '@modyo/design-system/components/m-button.js';
import { defineCustomElement as defineMCard } from '@modyo/design-system/components/m-card.js';
import { defineCustomElement as defineMInput } from '@modyo/design-system/components/m-input.js';
import { defineCustomElement as defineMText } from '@modyo/design-system/components/m-text.js';

import type { AlertAction as IMAlertAlertAction } from '@modyo/design-system/components';
export declare interface MAlert extends Components.MAlert {
  /**
   *  
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


export declare interface MButton extends Components.MButton {
  /**
   *  
   */
  modButtonClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMButton,
  inputs: ['disabled', 'text', 'type']
})
@Component({
  selector: 'm-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'text', 'type']
})
export class MButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['modButtonClick']);
  }
}


export declare interface MCard extends Components.MCard {
  /**
   *  
   */
  modButtonClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMCard,
  inputs: ['disabled', 'header', 'theme']
})
@Component({
  selector: 'm-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'header', 'theme']
})
export class MCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['modButtonClick']);
  }
}


export declare interface MInput extends Components.MInput {
  /**
   *  
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
