import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubServiceProvider {
  baseUrl: String;

  constructor(public http: Http) {
    this.baseUrl = 'https://api.github.com/users/';
    console.log('Hello GithubServiceProvider Provider');
  }

  getProfile(username) {
    let result = this.http.get(this.baseUrl + username);
    return result.map(res => res.json());
  }

  getRepos(username) {
    return this.http.get(this.baseUrl + username + '/repos')
      .map(res => res.json());
  }

  getFollowers(username) {
    return this.http.get(this.baseUrl + username + '/followers')
      .map(res => res.json());
  }

}
