import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryPage } from './history.page';
import { HistoryPageRoutingModule } from './history-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    HistoryPageRoutingModule,
    SharedModule
  ],
  declarations: [
    HistoryPage
  ]
})
export class HistoryPageModule { }
