import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendContainerComponent } from './components';


const routes: Routes = [
  { path: 'recommend', component: RecommendContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendRoutingModule { }
