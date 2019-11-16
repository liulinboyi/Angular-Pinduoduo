import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent, ParentComponent } from './components';


const routes: Routes = [
  {
    // 路由
    path: 'home',
    component: HomeContainerComponent,
    data: {
      reuse: true
    },
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
      // 路由参数
      path: ':tabLink',
      component: HomeDetailComponent,
      data: {
        reuse: true
      },
      // children: [{
      //   path: 'grand',
      //   component: HomeGrandComponent
      // }, {
      //   path: 'aux',
      //   component: HomeAuxComponent,
      //   outlet: 'second'
      // }]
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
