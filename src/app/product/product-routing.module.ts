import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductContainerComponent, ConfirmOrderComponent } from '.';


const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: ':productId',
        data: {
          reuse: true
        },
        component: ProductContainerComponent
      }
    ]
  }, {
    path: 'orders/confirm',
    component: ConfirmOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
