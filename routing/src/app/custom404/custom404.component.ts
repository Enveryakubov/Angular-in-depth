import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom404',
  template: ` <p>This page does not exist!</p> `,
  styleUrls: ['./custom404.component.scss'],
})
export class Custom404Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
