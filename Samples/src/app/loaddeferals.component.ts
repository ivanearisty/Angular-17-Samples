import { Component } from '@angular/core';
import { LoaddeferalsHelperComponent } from './loaddeferals-helper.component';
@Component({
  selector: 'app-loaddeferals',
  standalone: true,
  imports: [LoaddeferalsHelperComponent],
  template: `
    @defer {
        <app-loaddeferals-helper/>
      } @placeholder{
          <p>FUUUUUuuture</p>
      } @loading (minimum 2s) {
          <p>Loading future</p>
      }
  `,
  styles: ``
})
export class LoaddeferalsComponent {

}
