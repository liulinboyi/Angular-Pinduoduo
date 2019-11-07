import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyContainerComponent } from './components';


const routes: Routes = [
  { path: 'my', component: MyContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRoutingModule { }
