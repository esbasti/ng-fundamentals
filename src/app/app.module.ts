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
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/events-detail/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { TestComponent } from './shared/test/test.component'



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetails,
    Error404Component,
    TestComponent
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
