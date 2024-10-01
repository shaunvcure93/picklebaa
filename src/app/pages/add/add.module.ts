import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPage } from './add.page';
import { AddPageRoutingModule } from './add-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    AddPageRoutingModule,
    SharedModule
  ],
  declarations: [
    AddPage
  ]
})
export class AddPageModule { }
