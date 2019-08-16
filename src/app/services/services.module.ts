import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingService } from './meeting.service';
import { HttpClientModule } from '@angular/common/http';
import { ExportExcelService } from './exportExcel.service';

@NgModule({
  declarations: [],
  providers: [
    HttpClientModule,
    MeetingService,
    ExportExcelService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServicesModule { }
