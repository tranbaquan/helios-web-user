import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {BlogsComponent} from './blogs/blogs.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'blogs',
        pathMatch: 'full',
        component: BlogsComponent
      },
      {
        path: 'user-info',
        pathMatch: 'full',
        component: UserInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
