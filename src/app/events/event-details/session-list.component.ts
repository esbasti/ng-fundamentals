import { Component, Input } from '@angular/core'
import { ISession } from '../shared/index'

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionList {
  @Input() sessions:ISession[]
}
