import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../models/Post.interface';

@Component({
  selector: 'post',
  template: `
    <div class="card post">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="card-title d-inline-block">{{ post.title }}</h5>
          <span
            [ngClass]="{
              'bg-primary': post.text.length >= 10,
              'bg-info': post.text.length < 10
            }"
            class="badge badge-pill p-2"
            >{{ showLengthOf(post) }}</span
          >
        </div>
        <p class="card-text">
          {{ post.text }}
        </p>
        <button (click)="deletePost()" class="btn btn-danger">
          <i class="bi bi-trash3"></i>
        </button>
        <button class="btn btn-info">
          <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-secondary">
          <i class="bi bi-book"></i>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  @Output() onPostDelete: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() {}

  ngOnInit(): void {}

  showLengthOf(post: Post) {
    return post.text.length > 10 ? 'Длинный пост' : 'Короткий пост';
  }
  deletePost() {
    this.onPostDelete.emit(this.post);
  }
}
