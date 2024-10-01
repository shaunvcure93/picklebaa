import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { SharedModule } from './shared.module';
import { HttpClientModule } from '@angular/common/http';
import { GlobalStore } from './service/global.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InjectionToken, isDevMode } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
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
