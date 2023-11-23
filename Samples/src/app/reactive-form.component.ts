import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `

  <p>Reactive forms use the FormControl class to represent the form controls (e.g., inputs). <br>
  Angular provides the FormGroup class to serve as a grouping of form controls into a helpful object that makes handling large forms more convenient for developers.</p>
  
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <input type="text" formControlName="name" />
      <input type="email" formControlName="email" />
      <button type="submit" [disabled]="!profileForm.valid"> Submit </button>
    </form>

    <h4>Profile Form</h4>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
    
  `
})
export class ReactiveFormComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required), // Validators allow you to specify when there is a necessary value in the form to be submitted
    email: new FormControl('', Validators.required),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
