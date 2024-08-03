
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaytmcallbackComponent } from './paytmcallback.component';

const routes: Routes = [
  {
    path: '',
    component: PaytmcallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaytmcallbackRoutingModule { }