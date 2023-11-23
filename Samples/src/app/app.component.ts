import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ForloopComponent } from './forloop.component';
import { HoveringComponent } from './hovering.component';
import { LoaddeferalsComponent } from './loaddeferals.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    ForloopComponent,
    HoveringComponent,
    LoaddeferalsComponent
  ],
  template: `
  <router-outlet>
  <div>
    For loop using output example:
  <app-forloop></app-forloop>
  </div>  
  <hr /> <!-- Horizontal line as a divisor -->
  <div style="margin-top: 20px;">
    On mouse hover example:
    <app-hovering></app-hovering>
  </div>
  <hr /> <!-- Horizontal line as a divisor -->
  <div style="margin-top: 20px;">
    This is an example of a component that has deffered loading:
    <app-loaddeferals/>
  </div>
  </router-outlet>
  `,
  styles:``
})
export class AppComponent {
  title = 'Samples';
}
