
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsComponent } from './chats.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    ChatsComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class ChatsModule { }
