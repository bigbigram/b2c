
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePopupRoutingModule } from './manage-popup-routing.module';
import { ManagePopupComponent } from './manage-popup.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    ManagePopupComponent
  ],
  imports: [
    CommonModule,
    ManagePopupRoutingModule,
    FormsModule,
    NgxSpinnerModule,
  ]
})
export class ManagePopupModule { }
