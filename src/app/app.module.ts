import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { EventService } from './shared/events.service'

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [
    EventService
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
