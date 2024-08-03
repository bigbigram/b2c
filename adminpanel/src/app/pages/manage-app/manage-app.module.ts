
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAppRoutingModule } from './manage-app-routing.module';
import { ManageAppComponent } from './manage-app.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    ManageAppComponent
  ],
  imports: [
    CommonModule,
    ManageAppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
  ]
})
export class ManageAppModule { }
