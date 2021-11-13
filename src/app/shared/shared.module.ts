import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ToastrModule} from 'ngx-toastr';
import {JwtInterceptor} from './interceptor/jwt.interceptor';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        ToastrModule.forRoot(),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ToastrModule,
  ]
})
export class SharedModule {

}
