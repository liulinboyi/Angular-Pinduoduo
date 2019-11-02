import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
