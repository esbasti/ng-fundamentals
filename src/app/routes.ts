import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetails } from './events/events-detail/events-detail.component'

export const appRoutes:Routes = [
    {path: 'events', component: EventsListComponent },
    {path: 'events/:id', component: EventDetails },
    {path: '', component: EventsListComponent, pathMatch: 'full'}
]