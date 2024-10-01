import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePage } from './game.page';
import { GamePageRoutingModule } from './game-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    GamePageRoutingModule,
    SharedModule
  ],
  declarations: [
    GamePage
  ]
})
export class GamePageModule { }
