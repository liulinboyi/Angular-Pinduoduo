import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent } from './home';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  //  路由依次解析，上面匹配不到，匹配下面
  // 用户输不存在的路由，显示不存在
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  // 路由事件enableTracing： true
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
