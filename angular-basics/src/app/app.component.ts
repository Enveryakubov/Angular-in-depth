import { Component } from '@angular/core';
import { Post } from './models/Post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Post[] = [
    { id: 1, title: 'Пост', text: 'Пройти курс Angular' },
    { id: 2, text: 'Прочесть книгу', title: 'Пост' },
    { id: 3, text: 'Прогулять собаку', title: 'Пост' },
    { id: 4, text: 'Короткий', title: 'Пост' },
  ];

  get shorts() {
    return this.posts.filter((p) => !(p.text.length > 10)).length;
  }
  get longs() {
    return this.posts.filter((p) => p.text.length > 10).length;
  }

  handleSubmit(data: Post) {
    this.posts = [data, ...this.posts];
  }

  deletePost(post: Post) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }
}
