
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAppComponent } from './manage-app.component';

const routes: Routes = [
  {
    path: '',
    component: ManageAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAppRoutingModule { }
