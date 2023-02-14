import { Host, h, } from '@stencil/core';
import { setIconSettings } from '../../utils';
export class MApp {
  constructor() {
    this.iconSettings = undefined;
  }
  // eslint-disable-next-line class-methods-use-this
  watchIconSettingsHandler(newValue) {
    setIconSettings({
      familyClass: newValue.familyClass,
      familyPrefix: newValue.familyPrefix,
    });
  }
  componentDidLoad() {
    var _a, _b;
    setIconSettings({
      familyClass: (_a = this.iconSettings) === null || _a === void 0 ? void 0 : _a.familyClass,
      familyPrefix: (_b = this.iconSettings) === null || _b === void 0 ? void 0 : _b.familyPrefix,
    });
  }
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (h(Host, { class: "m-app" }, h("slot", null)));
  }
  static get is() { return "m-app"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-app.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-app.css"]
    };
  }
  static get properties() {
    return {
      "iconSettings": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "IconSettings",
          "resolved": "undefined | { familyClass?: string | undefined; familyPrefix?: string | undefined; }",
          "references": {
            "IconSettings": {
              "location": "import",
              "path": "../../utils"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon settings"
        }
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "iconSettings",
        "methodName": "watchIconSettingsHandler"
      }];
  }
}
