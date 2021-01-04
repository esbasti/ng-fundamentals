import { from } from "rxjs";
import { Component, Input } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
  <div>
    <div class="wll hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span>Location: {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
      </div>
    </div>
  </div>
  `
})

export class EventThumbNailComponent{
  @Input() event: any
}
