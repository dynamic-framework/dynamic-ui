import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ContentLoaderModule } from '@ngneat/content-loader';

import { DSkeleton } from './components/d-skeleton/d-skeleton.component';

import { DIRECTIVES } from './directives/proxies-list';

@NgModule({
  declarations: [...DIRECTIVES, DSkeleton],
  exports: [...DIRECTIVES, DSkeleton],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports: [ContentLoaderModule],
})
export class AngularDesignSystemModule { }
