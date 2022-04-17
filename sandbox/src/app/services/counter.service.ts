import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = 0;

  constructor() {}

  increase() {
    return this.counter++;
  }
  decrease() {
    return this.counter--;
  }
}
