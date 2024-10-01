import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPage } from './setting.page';
import { SettingPageRoutingModule } from './setting-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    SettingPageRoutingModule,
    SharedModule
  ],
  declarations: [
    SettingPage
  ]
})
export class SettingPageModule { }
