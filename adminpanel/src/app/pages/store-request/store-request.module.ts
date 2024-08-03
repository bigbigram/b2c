
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRequestRoutingModule } from './store-request-routing.module';
import { StoreRequestComponent } from './store-request.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    StoreRequestComponent
  ],
  imports: [
    CommonModule,
    StoreRequestRoutingModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    NgxSpinnerModule,
    CKEditorModule
  ]
})
export class StoreRequestModule { }
