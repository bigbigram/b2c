
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLanguagesRoutingModule } from './manage-languages-routing.module';
import { ManageLanguagesComponent } from './manage-languages.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    ManageLanguagesComponent
  ],
  imports: [
    CommonModule,
    ManageLanguagesRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    NgxSpinnerModule
  ]
})
export class ManageLanguagesModule { }
