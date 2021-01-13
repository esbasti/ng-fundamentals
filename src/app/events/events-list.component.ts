import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/events.service'
import { ToastrService } from '../common/Toastr.Service'

@Component({
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
      <event-thumbnail (click)="handleClickEvent(event.name)" [event]="event"></event-thumbnail>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {

  events:any[]
  
  constructor(private EventServices: EventService, private toastrService: ToastrService) { 

  }

  ngOnInit() {
    this.events = this.EventServices.getEvents()
  }

  handleClickEvent(eventName) {
    this.toastrService.success("",eventName)
  }

}