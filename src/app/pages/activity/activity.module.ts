import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityPage } from './activity.page';
import { ActivityPageRoutingModule } from './activity-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    ActivityPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ActivityPage
  ]
})
export class ActivityPageModule { }
