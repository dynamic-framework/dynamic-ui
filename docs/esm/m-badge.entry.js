import { r as registerInstance, h } from './index-a19c3827.js';

const MBadge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("span", { class: this.generateClasses() }, h("span", null, this.text)));
  }
};

export { MBadge as m_badge };

//# sourceMappingURL=m-badge.entry.js.map