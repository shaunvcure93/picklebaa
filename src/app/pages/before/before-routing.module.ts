import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeforePage } from './before.page';

const routes: Routes = [
  {
    path: '',
    component: BeforePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeforePageRoutingModule { }


