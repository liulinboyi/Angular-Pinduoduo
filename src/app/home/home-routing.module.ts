import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent, ParentComponent } from './components';


const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
      path: ':tabLink',
      component: HomeDetailComponent,
      children: [{
        path: 'grand',
        component: HomeGrandComponent
      }, {
        path: 'aux',
        component: HomeAuxComponent,
        outlet: 'second'
      }]
      }
  ]
  }, {
    path: 'change-detection',
    component: ParentComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
