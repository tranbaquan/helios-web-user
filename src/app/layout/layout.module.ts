import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {SharedModule} from '../shared/shared.module';
import { BlogsComponent } from './blogs/blogs.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    LayoutComponent,
    BlogsComponent,
    UserInfoComponent,
    HomeComponent
  ],
  imports: [
    LayoutRoutingModule,
    SharedModule,
  ]
})
export class LayoutModule { }
