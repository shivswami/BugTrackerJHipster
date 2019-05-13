import { NgModule } from '@angular/core';

import { BugTrackerJHipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [BugTrackerJHipsterSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [BugTrackerJHipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BugTrackerJHipsterSharedCommonModule {}
