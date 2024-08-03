
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePopupComponent } from './manage-popup.component';

const routes: Routes = [
  {
    path: '',
    component: ManagePopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePopupRoutingModule { }
