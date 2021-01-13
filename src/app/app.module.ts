import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { EventService } from './shared/events.service'
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes'

import { ToastrService } from './common/Toastr.Service'
import { EventDetails } from './events/events-detail/events-detail.component';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetails,
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
