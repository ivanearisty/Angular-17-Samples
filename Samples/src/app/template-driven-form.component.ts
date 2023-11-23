import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'; // Import the forms module to creating a forms component


@Component({
  selector: 'app-template-driven-form',
  template: `
    <p>Username: {{ username }}</p> 
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
      <! -- Note: The syntax [()] is known as "banana in a box" but it represents two-way binding: property binding and event binding. Learn more in the Angular docs about two-way data binding. -->
    </label>
    <p>There is a reference to a variable called favoriteFramework exported in the class description. </p>
    <p>Afterwards, we use ngModel to keep track of it's value with the input property</p>

    <button (click)="showFramework()">This button accesses a method showFramework that displays the value of favoriteFramework in an alert</button>

  `,
  standalone: true,
  imports: [FormsModule],
})
export class TemplateDrivenFormComponent {
  favoriteFramework = '';
  username = 'Sample';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
