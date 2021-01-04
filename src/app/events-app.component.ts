import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <app-navbar></app-navbar>
  <event-list></event-list>
  `
})
export class EventsAppComponent {
  title = 'app';
}
