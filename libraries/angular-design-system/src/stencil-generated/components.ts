/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@modyo/design-system';



import type { AlertAction as IMAlertAlertAction } from '@modyo/design-system';
export declare interface MAlert extends Components.MAlert {
  /**
   *  
   */
  modActionClick: EventEmitter<CustomEvent<IMAlertAlertAction>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['actions', 'body', 'title']
})
@Component({
  selector: 'm-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actions', 'body', 'title']
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
  defineCustomElementFn: undefined,
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


export declare interface MText extends Components.MText {}

@ProxyCmp({
  defineCustomElementFn: undefined,
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
