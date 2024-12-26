import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPage } from './search.page';
import { SearchPageRoutingModule } from './search-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    SharedModule
  ],
  declarations: [
    SearchPage
  ]
})
export class SearchPageModule { }
