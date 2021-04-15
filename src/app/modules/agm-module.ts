import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    AgmCoreModule,
  ],
  exports: [
    AgmCoreModule
  ],
})
export class MapModule {}
