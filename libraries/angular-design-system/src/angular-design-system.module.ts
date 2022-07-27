import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MSkeleton } from './components/m-skeleton/m-skeleton.component';
import { ContentLoaderModule } from '@ngneat/content-loader';

import { DIRECTIVES } from './directives/proxies-list';

@NgModule({
  declarations: [...DIRECTIVES, MSkeleton],
  exports: [...DIRECTIVES, MSkeleton],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports: [ContentLoaderModule],
})
export class AngularDesignSystemModule { }
