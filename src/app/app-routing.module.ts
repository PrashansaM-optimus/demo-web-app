import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingFormComponent } from './meeting-form/meeting-form.component';


const routes: Routes = [
  { path: 'meeting', component: MeetingComponent },
  { path: 'meeting-form', component: MeetingFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
