import { NgModule } from '@angular/core';

import { RecommendRoutingModule } from './recommend-routing.module';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    RecommendRoutingModule
  ]
})
export class RecommendModule { }
