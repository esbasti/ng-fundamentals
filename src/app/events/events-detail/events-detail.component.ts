import { from } from "rxjs";
import { Component, OnInit } from '@angular/core'
import { EventService } from '../../shared/events.service'
import { ActivatedRoute } from '@angular/router'
@Component({
    templateUrl: 'events-detail.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px;}
        .event-image { height: 100px;}
    `]
})

export class EventDetails implements OnInit{

    event:any

    constructor (private eventService: EventService, 
                private route:ActivatedRoute ) {
        
    }
    
    ngOnInit() {
        this.event = this.eventService.getEvent(
        +this.route.snapshot.params['id']
        );
    }

}