import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  showIds = false;
  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((val) => {
      this.showIds = !!val['showIds'];
    });
  }

  showIdsProgrammatically() {
    this.router.navigate(['posts'], { queryParams: { showIds: true } });
  }
}
