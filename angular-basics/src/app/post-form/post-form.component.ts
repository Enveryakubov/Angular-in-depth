import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Post } from '../models/Post.interface';

@Component({
  selector: 'post-form',
  template: `
    <div class="form">
      <input
        class="form-control mb-3"
        type="text"
        placeholder="Title..."
        [(ngModel)]="title"
        #formInput
      />
      <input
        class="form-control mb-3"
        type="text"
        placeholder="Text..."
        [(ngModel)]="text"
      />
      <button (click)="onClick()" class="btn btn-success">Добавить пост</button>
      <button (click)="onClick1()" class="btn btn-secondary">Сфокусируй</button>
    </div>
  `,
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @ViewChild('formInput') inputRef!: ElementRef;
  @Output() onFormSubmit: EventEmitter<Post> = new EventEmitter<Post>();
  title: string = '';
  text: string = '';
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    const post: Post = {
      id: Date.now(),
      title: this.title,
      text: this.text,
    };
    if (this.title.trim() && this.text.trim()) {
      this.onFormSubmit.emit(post);
      this.text = this.title = '';
    }
  }
  onClick1() {
    if (this.inputRef.nativeElement.classList.contains('focused')) {
      this.inputRef.nativeElement.classList.remove('focused');
      this.inputRef.nativeElement.blur();
    } else {
      this.inputRef.nativeElement.classList.add('focused');
      this.inputRef.nativeElement.focus();
    }
  }
}
