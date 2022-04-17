import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';
import { LocalCounterService } from './services/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService],
})
export class AppComponent {
  search = '';
  e: number = Math.E;
  str: string = 'Enver Yakubov';
  posts = [
    { title: 'Tea', text: 'The best tea in the world' },
    { title: 'Bread', text: 'The best bread in the world' },
    { title: 'Javascript', text: 'The best language in the world' },
  ];
  constructor(
    public counter: CounterService,
    public localCounter: LocalCounterService
  ) {}

  addPost() {
    this.posts = [{ title: 'Enver', text: 'student' }, ...this.posts];
  }
}
