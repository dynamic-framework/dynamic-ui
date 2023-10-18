'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const DBadge = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.theme = 'primary';
    this.text = undefined;
    this.isDot = false;
  }
  // eslint-disable-next-line @stencil/own-methods-must-be-private
  generateClasses() {
    return {
      badge: true,
      'badge-dot': this.isDot,
      [`badge-${this.theme}`]: !!this.theme,
    };
  }
  render() {
    return (index.h("span", { class: this.generateClasses() }, index.h("span", null, this.text)));
  }
};

exports.d_badge = DBadge;

//# sourceMappingURL=d-badge.cjs.entry.js.map