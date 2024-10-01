import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPage } from './event.page';
import { EventPageRoutingModule } from './event-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    EventPageRoutingModule,
    SharedModule
  ],
  declarations: [
    EventPage
  ]
})
export class EventPageModule { }
