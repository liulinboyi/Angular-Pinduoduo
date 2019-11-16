import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ShareModule } from '../share/share.module';
import { ProductContainerComponent, GroupItemComponent, GroupShortListComponent } from '.';


@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent],
  imports: [
    ShareModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
