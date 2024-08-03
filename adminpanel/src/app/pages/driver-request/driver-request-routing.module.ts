
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverRequestComponent } from './driver-request.component';

const routes: Routes = [
  {
    path: '',
    component: DriverRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRequestRoutingModule { }
