import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    loadChildren: () => import('./layout/layout.module').then(resolve => resolve.LayoutModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
