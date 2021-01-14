import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetails } from './events/events-detail/events-detail.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/events-detail/event-route-activator.service'

export const appRoutes:Routes = [
    {path: 'events', component: EventsListComponent },
    {path: 'events/:id', component: EventDetails, canActivate: [EventRouteActivator] },
    {path: '404', component: Error404Component},
    {path: '', component: EventsListComponent, pathMatch: 'full'},
    
]