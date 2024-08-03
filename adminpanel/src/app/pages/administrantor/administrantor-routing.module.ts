
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrantorComponent } from './administrantor.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrantorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrantorRoutingModule { }
