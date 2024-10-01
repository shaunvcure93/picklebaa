import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforePage } from './before.page';
import { BeforePageRoutingModule } from './before-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    BeforePageRoutingModule,
    SharedModule
  ],
  declarations: [
    BeforePage
  ]
})
export class BeforePageModule { }
