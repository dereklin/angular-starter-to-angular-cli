import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME } from '../services/auth.constant';

@Injectable()
export class AuthenticationService {
  public static AUTH_TOKEN = 'https://infinite-tundra-6984.herokuapp.com/oauth/token';

  constructor(private http: Http) {
  }

  public login(username: string, password: string) {
    const body =
      `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const authorization = 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD);
    headers.append('Authorization', authorization);

    return this.http.post(AuthenticationService.AUTH_TOKEN, body, { headers })
      .map(
      (res) => {
        return res.json();
      })
      .map((res: any) => {
        if (res.access_token) {
          return res.access_token;
        }
        return null;
      });
  }
}
