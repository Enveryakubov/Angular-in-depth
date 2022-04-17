import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<any> {
  constructor(private postService: PostsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.postService.getById(+route.params['id']);
  }
}
