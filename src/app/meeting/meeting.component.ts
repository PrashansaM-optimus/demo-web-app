import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../services/meeting.service';
import { Meeting } from '../models/models';
import { ExportExcelService } from '../services/exportExcel.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  constructor(private _meetingService: MeetingService,
    private _exportExcelService: ExportExcelService) { }
  meetings: Meeting[];

  ngOnInit() {
    this._meetingService.getAllMeetings().subscribe((data) => {
      this.meetings = data;
    });
  }

  onExportClick() {
    this._exportExcelService.exportAsExcelFile(this.meetings, 'meetingdetails');
  }

}
