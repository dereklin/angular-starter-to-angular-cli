import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

import { TOKEN_NAME } from '../services/auth.constant';

@Injectable()
export class UserService {
  public jwtHelper: JwtHelper = new JwtHelper();
  public accessToken: string;
  public isAdmin: boolean;

  public login(accessToken: string) {
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    console.log(decodedToken);

    this.isAdmin = decodedToken.authorities.some((el) => el === 'ADMIN_USER');
    this.accessToken = accessToken;

    localStorage.setItem(TOKEN_NAME, accessToken);
  }

  public logout() {
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.removeItem(TOKEN_NAME);
  }

  public isAdminUser(): boolean {
    return this.isAdmin;
  }

  public isUser(): boolean {
    return this.accessToken && !this.isAdmin;
  }
}
