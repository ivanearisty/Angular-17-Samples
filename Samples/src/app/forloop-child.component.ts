import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forloop-child',
  template: `
  <button class="btn" (click)="addItem()">Add Item</button>
`,
  styles: `.btn { padding: 5px}`,
  standalone: true
})
export class ForloopChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
