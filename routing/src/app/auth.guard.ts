import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    // @ts-ignore: Unreachable code error
    return this.auth.isAuthenticated().then((isAuth) => {
      if (isAuth) {
        return true;
      } else {
        this.router.navigate(['/'], {
          queryParams: {
            auth: false,
          },
        });
      }
    });
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    return this.canActivate(childRoute, state);
  }
}
