'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e8a8a10.js');

const MBadge = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.theme = 'primary';
    this.text = undefined;
    this.isDot = false;
  }
  // eslint-disable-next-line @stencil/own-methods-must-be-private
  generateClasses() {
    return {
      'm-badge badge': true,
      'badge-dot': this.isDot,
      [`badge-${this.theme}`]: !!this.theme,
    };
  }
  render() {
    return (index.h("span", { class: this.generateClasses() }, index.h("span", null, this.text)));
  }
};

exports.m_badge = MBadge;

//# sourceMappingURL=m-badge.cjs.entry.js.map