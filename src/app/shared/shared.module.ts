import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ToastrModule} from 'ngx-toastr';
import {JwtInterceptor} from './interceptor/jwt.interceptor';
import {IconButtonDirective} from './directive/icon-button.directive';
import {QuantityComponent} from './component/quantity/quantity.component';
import {ModalComponent} from './component/modal/modal.component';
import {ModalHeaderComponent} from './component/modal/modal-header/modal-header.component';
import {ModalBodyComponent} from './component/modal/modal-body/modal-body.component';
import {PaginationComponent} from './component/pagination/pagination.component';
import {ModalFooterComponent} from './component/modal/modal-footer/modal-footer.component';

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
    QuantityComponent,
    IconButtonDirective,
    QuantityComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    PaginationComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ToastrModule,
    IconButtonDirective,
    QuantityComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    PaginationComponent,
  ]
})
export class SharedModule {

}
