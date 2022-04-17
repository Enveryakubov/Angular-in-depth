import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('box', [
      state('start', style({ background: 'blue', transition: '1s' })),
      state(
        'end',
        style({ background: 'red', transform: 'scale(1.2)', transition: '1s' })
      ),
    ]),
  ],
})
export class AppComponent {
  boxState = 'start';

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }
}
