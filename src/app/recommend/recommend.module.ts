import { NgModule } from '@angular/core';

import { RecommendRoutingModule } from './recommend-routing.module';
import { ShareModule } from '../share/share.module';
import { RecommendContainerComponent } from './components';


@NgModule({
  declarations: [RecommendContainerComponent],
  imports: [
    ShareModule,
    RecommendRoutingModule
  ]
})
export class RecommendModule { }
