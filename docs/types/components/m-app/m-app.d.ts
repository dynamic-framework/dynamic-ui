import type { ComponentInterface } from '../../stencil-public-runtime';
import type { IconSettings } from '../../utils';
export declare class MApp implements ComponentInterface {
  /**
   * Icon settings
   * */
  iconSettings?: IconSettings;
  watchIconSettingsHandler(newValue: IconSettings): void;
  componentDidLoad(): void;
  render(): any;
}
