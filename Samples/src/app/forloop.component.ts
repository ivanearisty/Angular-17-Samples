import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForloopChildComponent } from './forloop-child.component';

@Component({
    selector: 'app-forloop',
    standalone: true,
    template: `
    <app-forloop-child (addItemEvent)="addItem($event)"/>

    <p>🐢 all the way down {{ items.length }}</p>
       @for(string of items; track string) {
      {{string}}
      {{$index}}
    }

  `,
    styles: `body{
      padding: 20px;
    }`,
    imports: [CommonModule, ForloopChildComponent]
})
export class ForloopComponent {
  items: string [] = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
