import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalCounterService {
  counter = 0;

  constructor() {}

  increase() {
    return this.counter++;
  }
  decrease() {
    return this.counter--;
  }
}
