/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@modyo/design-system/components';

import { defineCustomElement as defineMAlert } from '@modyo/design-system/components/m-alert.js';
import { defineCustomElement as defineMButton } from '@modyo/design-system/components/m-button.js';
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
  inputs: ['actions', 'body', 'header']
})
@Component({
  selector: 'm-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actions', 'body', 'header']
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


export declare interface MInput extends Components.MInput {
  /**
   *  
   */
  modChange: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMInput,
  inputs: ['disabled', 'id', 'label', 'placeholder', 'type', 'value']
})
@Component({
  selector: 'm-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'id', 'label', 'placeholder', 'type', 'value']
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
  inputs: ['color']
})
@Component({
  selector: 'm-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class MText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
