import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;

  logIn() {
    this.isAuth = true;
  }
  logOut() {
    this.isAuth = false;
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
