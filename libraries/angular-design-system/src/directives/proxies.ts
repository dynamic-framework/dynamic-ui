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
import { defineCustomElement as defineMInput } from '@modyo/design-system/components/m-input.js';
import { defineCustomElement as defineMListItem } from '@modyo/design-system/components/m-list-item.js';
import { defineCustomElement as defineMNav } from '@modyo/design-system/components/m-nav.js';
import { defineCustomElement as defineMNavContent } from '@modyo/design-system/components/m-nav-content.js';
import { defineCustomElement as defineMNavItem } from '@modyo/design-system/components/m-nav-item.js';
import { defineCustomElement as defineMNavLink } from '@modyo/design-system/components/m-nav-link.js';
import { defineCustomElement as defineMNavPane } from '@modyo/design-system/components/m-nav-pane.js';
import { defineCustomElement as defineMSelect } from '@modyo/design-system/components/m-select.js';
import { defineCustomElement as defineMSwitch } from '@modyo/design-system/components/m-switch.js';
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
  mClick: EventEmitter<CustomEvent<any>>;

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
    proxyOutputs(this, this.el, ['mClick']);
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
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'mId', 'name', 'state', 'type', 'value']
})
@Component({
  selector: 'm-form-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'mId', 'name', 'state', 'type', 'value']
})
export class MFormCheck {
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
  mChange: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMInput,
  inputs: ['disabled', 'hint', 'hintIconEnd', 'hintIconStart', 'iconEnd', 'iconStart', 'label', 'labelIcon', 'layoutDirection', 'mId', 'placeholder', 'type', 'value']
})
@Component({
  selector: 'm-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'hint', 'hintIconEnd', 'hintIconStart', 'iconEnd', 'iconStart', 'label', 'labelIcon', 'layoutDirection', 'mId', 'placeholder', 'type', 'value']
})
export class MInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mChange']);
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


export declare interface MNav extends Components.MNav {}

@ProxyCmp({
  defineCustomElementFn: defineMNav,
  inputs: ['isAriaVertical', 'variant']
})
@Component({
  selector: 'm-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isAriaVertical', 'variant']
})
export class MNav {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MNavContent extends Components.MNavContent {}

@ProxyCmp({
  defineCustomElementFn: defineMNavContent
})
@Component({
  selector: 'm-nav-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MNavContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MNavItem extends Components.MNavItem {}

@ProxyCmp({
  defineCustomElementFn: defineMNavItem
})
@Component({
  selector: 'm-nav-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MNavItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MNavLink extends Components.MNavLink {}

@ProxyCmp({
  defineCustomElementFn: defineMNavLink,
  inputs: ['icon', 'isActive', 'isDisabled', 'navegableProps', 'optionProps', 'text', 'variant']
})
@Component({
  selector: 'm-nav-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'isActive', 'isDisabled', 'navegableProps', 'optionProps', 'text', 'variant']
})
export class MNavLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MNavPane extends Components.MNavPane {}

@ProxyCmp({
  defineCustomElementFn: defineMNavPane,
  inputs: ['isActive', 'mId', 'mTabindex', 'role']
})
@Component({
  selector: 'm-nav-pane',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isActive', 'mId', 'mTabindex', 'role']
})
export class MNavPane {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MSelect extends Components.MSelect {}

@ProxyCmp({
  defineCustomElementFn: defineMSelect,
  inputs: ['iconEnd', 'iconMiddle', 'iconStart', 'iconSubLabel', 'label', 'placeholder', 'subLabel', 'theme', 'variant']
})
@Component({
  selector: 'm-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['iconEnd', 'iconMiddle', 'iconStart', 'iconSubLabel', 'label', 'placeholder', 'subLabel', 'theme', 'variant']
})
export class MSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MSwitch extends Components.MSwitch {}

@ProxyCmp({
  defineCustomElementFn: defineMSwitch,
  inputs: ['label']
})
@Component({
  selector: 'm-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label']
})
export class MSwitch {
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
