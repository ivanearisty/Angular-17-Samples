import {Component} from '@angular/core';
import {LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-pipe',
  template: `
    <p>This is an example of a lowercase pipe were the original input has capital letters </p>
    {{ username             }} -> {{ username | lowercase }}
    <p>This is an example using the decimal pipe to format a nuber</p>
    <li>Number with "decimal" {{ num | number : '3.2-2' }}</li>
    <li>Number without "decimal" {{ num }}</li>
    <br>
    <li>Date with "date" {{ birthday | date : 'medium' }}</li>
    <li>Date without "date" {{ birthday }}</li>
    <br>
    <li>Currency with "currency" {{ cost | currency }}</li>
    <li>Currency without "currency" {{ cost }}</li>
    <br>
    There are even more built-in pipes that you can use in your applications. You can find the list in the <a href="https://angular.dev/guide/pipes">Angular documentation</a>.

`,
  standalone: true,
  imports: [LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe],
})
export class PipeComponent {
  username = 'Hello World';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
