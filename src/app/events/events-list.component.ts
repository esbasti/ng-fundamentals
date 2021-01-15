import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/events.service'
import { ToastrService } from '../common/Toastr.Service'
import { ActivatedRoute } from '@angular/router'

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
  
  constructor(private EventServices: EventService, 
              private toastrService: ToastrService,
              private route:ActivatedRoute) { 
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleClickEvent(eventName) {
    this.toastrService.success("",eventName)
  }

}