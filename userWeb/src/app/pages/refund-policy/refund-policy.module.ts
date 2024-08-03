
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundPolicyRoutingModule } from './refund-policy-routing.module';
import { RefundPolicyComponent } from './refund-policy.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    RefundPolicyComponent
  ],
  imports: [
    CommonModule,
    RefundPolicyRoutingModule,
    NgxSkeletonLoaderModule
  ]
})
export class RefundPolicyModule { }
