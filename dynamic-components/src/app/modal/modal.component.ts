import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="backdrop"></div>
    <div class="modal1">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand px-3" href="#">{{ title }}</a>
      </nav>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quod.
      </p>

      <button class="btn btn-warning" (click)="close.emit()">
        Close modal
      </button>
    </div>
  `,
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title = 'Default title';

  @Output() close = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
