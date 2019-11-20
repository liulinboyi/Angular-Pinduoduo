import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ShareModule } from '../share/share.module';
import { ProductContainerComponent, GroupItemComponent, GroupShortListComponent, ProductAmountComponent } from '.';
import { ProductVariantDialogComponent } from './components/product-variant-dialog';


@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent
  ],
  imports: [
    ShareModule,
    ProductRoutingModule
  ],
  entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule { }
