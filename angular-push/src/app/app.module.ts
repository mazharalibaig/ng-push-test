import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PushNotificationsModule } from 'ng-push'; //import the module

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PushNotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
