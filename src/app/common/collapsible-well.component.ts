import { Component, Input } from '@angular/core'
import { template } from '@angular/core/src/render3'

@Component({
  selector: 'collapsible-well',
  template:`
    <div (click)="toggleContent()" class="well pointable">
    <ng-content select="[well-title]"></ng-content>
      <ng-content select="[well-body]" *ngIf="visible"></ng-content>
    <div>
  `
})

export class CollapsibleWellComponent {
  visible:boolean = true;

  toggleContent() {
    this.visible = !this.visible
  }
}
