import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hovering',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section (mouseover)="onMouseOver()" style="margin-top: 20px;">
      There's a secret message for you, hover to reveal: {{ message }}
    </section>
  `,
  styles: ``
})
export class HoveringComponent {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}
