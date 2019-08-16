import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meeting } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private _http: HttpClient) { }
  baseUri = 'api/'; 

  getAllMeetings(): Observable<Meeting[]> {
    const uri = this.baseUri + 'meeting';
    return this._http.get<Meeting[]>(uri);
  }

  addMeeting(meeting: Meeting): Observable<Meeting> {
    debugger;
    const uri = this.baseUri + 'meeting';
    return this._http.post<Meeting>(uri, meeting);
  }
}
