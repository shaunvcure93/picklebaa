import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogonPage } from './logon.page';
import { LogonPageRoutingModule } from './logon-routing.module';
import { SharedModule } from '../../shared.module';

/* component */

/* module */

@NgModule({
  imports: [
    CommonModule,
    LogonPageRoutingModule,
    SharedModule
  ],
  declarations: [
    LogonPage
  ]
})
export class logonPageModule { }
