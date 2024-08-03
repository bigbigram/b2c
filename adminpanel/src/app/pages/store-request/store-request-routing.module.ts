
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreRequestComponent } from './store-request.component';

const routes: Routes = [
  {
    path: '',
    component: StoreRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRequestRoutingModule { }
