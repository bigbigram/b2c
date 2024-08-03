
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwaitPaymentsRoutingModule } from './await-payments-routing.module';
import { AwaitPaymentsComponent } from './await-payments.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AwaitPaymentsComponent
  ],
  imports: [
    CommonModule,
    AwaitPaymentsRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxPayPalModule,
    NgbModule,
    FormsModule,
    NgxSkeletonLoaderModule
  ]
})
export class AwaitPaymentsModule { }
