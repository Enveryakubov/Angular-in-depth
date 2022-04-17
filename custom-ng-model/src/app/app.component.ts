import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appState = 'off';

  handleChange() {
    console.log('Model changed its value');
  }
}
