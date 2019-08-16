import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingComponent } from './meeting.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [MeetingComponent],
  imports: [
    CommonModule,
    ServicesModule
  ],
  exports: [MeetingComponent]
})
export class MeetingModule { }
