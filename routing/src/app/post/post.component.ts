import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private PostService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.post = this.route.snapshot.data['post'];
    // if (!this.post) {
    //   this.router.navigate(['/error']);
    // }
    // this.route.params.subscribe((val) => {
    //   this.post = this.PostService.getById(+val['id']);
    //   if (!this.post) {
    //     this.router.navigate(['/error']);
    //   }
    // });

    this.route.data.subscribe((val) => {
      this.post = val['post'];
    });
  }

  goBack() {
    this.location.back();
  }

  loadPost4() {
    this.router.navigate(['posts', 44]);
  }
}
