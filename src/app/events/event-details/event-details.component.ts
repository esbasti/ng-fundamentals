import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent, ISession } from '../shared/index'

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height: 100px; }
    a {cursor:pointer}
  `]
})
export class EventDetailsComponent {
  event:IEvent
  addMode:boolean
  filterBy: string = 'all'
  sortBy: string = 'name'

  constructor(private eventService:EventService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session:ISession){
    const newtId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = newtId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.eventService)
    this.addMode = false
  }

  cancelAddSession(){
    this.addMode = false
  }

}
