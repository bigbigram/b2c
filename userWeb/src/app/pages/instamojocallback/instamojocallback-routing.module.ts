
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstamojocallbackComponent } from './instamojocallback.component';

const routes: Routes = [
  {
    path: '',
    component: InstamojocallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstamojocallbackRoutingModule { }
