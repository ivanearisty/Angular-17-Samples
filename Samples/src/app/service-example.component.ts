import {Component, inject} from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-service-example',
  template: '<p> {{ exampleService.getCars() }} </p>',
  standalone: true,
})
export class ServiceExample {
  exampleService = inject(ExampleService);

  //this is also a way to inject that is more Java-esque and probably better imo
  /*
  constructor(private serviceExample: ExampleService) {
    some code...
  }
  */
}