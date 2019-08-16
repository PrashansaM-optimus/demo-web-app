import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingModule } from './meeting/meeting.module';
import { MeetingFormModule } from './meeting-form/meeting-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeetingModule,
    MeetingFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
