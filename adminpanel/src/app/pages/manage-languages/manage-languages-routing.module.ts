
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageLanguagesComponent } from './manage-languages.component';

const routes: Routes = [
  {
    path: '',
    component: ManageLanguagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLanguagesRoutingModule { }
