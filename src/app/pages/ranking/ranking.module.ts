import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingPage } from './ranking.page';
import { RankingPageRoutingModule } from './ranking-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    RankingPageRoutingModule,
    SharedModule
  ],
  declarations: [
    RankingPage
  ]
})
export class RankingPageModule { }
