import { NgModule } from '@angular/core';

import { CategoryRoutingModule } from './category-routing.module';
import { ShareModule } from '../share/share.module';
import { CategoryContainerComponent } from './components';



@NgModule({
  declarations: [CategoryContainerComponent],
  imports: [
    ShareModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
