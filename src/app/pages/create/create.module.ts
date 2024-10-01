import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePage } from './create.page';
import { CreatePageRoutingModule } from './create-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    CreatePageRoutingModule,
    SharedModule
  ],
  declarations: [
    CreatePage
  ]
})
export class CreatePageModule { }
