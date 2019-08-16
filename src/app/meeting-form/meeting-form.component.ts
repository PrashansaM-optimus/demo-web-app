import { Component, OnInit } from '@angular/core';
import { Meeting } from '../models/models';
import { MeetingService } from '../services/meeting.service';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.scss']
})
export class MeetingFormComponent implements OnInit {
  meeting: Meeting;
  success: string;

  constructor(private _meetingService: MeetingService) {
    this.meeting = new Meeting();
  }

  ngOnInit() {
    
  }

  onSubmit() {
    this._meetingService.addMeeting(this.meeting).subscribe(() => {
      this.success = 'Information saved successfully';
    });
  }

}
