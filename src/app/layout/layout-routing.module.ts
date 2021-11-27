import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {BlogsComponent} from './blogs/blogs.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {CreateOrderComponent} from './create-order/create-order.component';
import {BlogDetailComponent} from './blogs/blog-detail/blog-detail.component';

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
        path: 'blog-detail',
        pathMatch: 'full',
        component: BlogDetailComponent
      },
      {
        path: 'user-info',
        pathMatch: 'full',
        component: UserInfoComponent
      },
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
      },
      {
        path: 'register',
        pathMatch: 'full',
        component: RegisterComponent
      },
      {
        path: 'cart',
        pathMatch: 'full',
        component: ShoppingCartComponent
      },
      {
        path: 'create-order',
        pathMatch: 'full',
        component: CreateOrderComponent
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
