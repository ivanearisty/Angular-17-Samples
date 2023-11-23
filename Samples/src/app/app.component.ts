import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ForloopComponent } from './forloop.component';
import { HoveringComponent } from './hovering.component';
import { LoaddeferalsComponent } from './loaddeferals.component';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { ServiceExample } from './service-example.component';
import { PipeComponent } from './pipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    ForloopComponent,
    HoveringComponent,
    LoaddeferalsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ServiceExample,
    PipeComponent
  ],
  templateUrl: "./app.component.html",
  styles:``
})
export class AppComponent {
  title = 'Samples';
}
