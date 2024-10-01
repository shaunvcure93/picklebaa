import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { SharedModule } from './shared.module';
import { HttpClientModule } from '@angular/common/http';
import { GlobalStore } from './service/global.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('WindowToken', {
  factory: () => {
    if(typeof window !== 'undefined') {
      return window
    }
    return new Window(); // does this work?
  }
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    GlobalStore
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    SharedModule
  ]
})
export class AppModule { }
