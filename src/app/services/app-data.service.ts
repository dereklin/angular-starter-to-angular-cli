import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class AppDataService {
  constructor(private http: AuthHttp) {
  }

  public getCities() {
    return this.http.get('https://infinite-tundra-6984.herokuapp.com/springjwt/cities')
      .map((res) => res.json());
  }

  public getUsers() {
    return this.http.get('https://infinite-tundra-6984.herokuapp.com/springjwt/users')
      .map((res) => res.json());
  }
}
