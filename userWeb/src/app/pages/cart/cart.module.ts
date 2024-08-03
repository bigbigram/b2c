
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    CartRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxPayPalModule,
    NgbModule,
    FormsModule,
    NgxSkeletonLoaderModule
  ]
})
export class CartModule { }