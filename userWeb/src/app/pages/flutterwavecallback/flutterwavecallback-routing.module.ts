
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlutterwavecallbackComponent } from './flutterwavecallback.component';

const routes: Routes = [
  {
    path: '',
    component: FlutterwavecallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlutterwavecallbackRoutingModule { }
