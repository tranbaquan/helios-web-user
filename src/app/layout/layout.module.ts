import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {SharedModule} from '../shared/shared.module';
import { BlogsComponent } from './blogs/blogs.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    LayoutComponent,
    BlogsComponent,
    UserInfoComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingCartComponent,
    CreateOrderComponent,
    BlogDetailComponent,
    CategoryComponent
  ],
  imports: [
    LayoutRoutingModule,
    SharedModule,
  ]
})
export class LayoutModule { }
