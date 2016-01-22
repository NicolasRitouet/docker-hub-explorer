import {Injectable} from 'angular2/core';
import {Http, Request, RequestMethod, Headers, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Dockerhub {

  private apiVersion:number = 2;

  constructor(private http: Http) {}

  login(username:string, password:string) {
    return this.makeRequest('post', 'users/login/', { username, password }).subscribe(
      data => {
        console.log(data);
        if (localStorage) {
          localStorage.setItem('loggedInToken', data.token);
        }
      },
      err => console.log(err)
    );
  }

  getOrg(org:string) {
    return this.makeRequest('get', `users/${org}`);
  }

  getReposForOrg(org:string) {
    return this.makeRequest('get', `users/${org}/repositories`);
  }

  getRepoDetailForOrg(org:string, repo:string) {
    return this.makeRequest('get', `repositories/${org}/${repo}`);
  }

  getRepoTagsForOrg(org:string, repo:string) {
    return this.makeRequest('get', `repositories/${org}/${repo}/tags`)
  }

  private buildRequestParams(method:string, path:string, data?) : Request {
    // Normalize the path so it doesn't start with a slash
    if (path.substr(0, 1) === '/') {
      path = path.substr(1);
    }
    // Also add a slash to the end of the path unless there is a ? in the path
    if (path.substr(-1) !== '/' && path.indexOf('?') === -1) {
      path = path + '/';
    }
    let url = `http://127.0.0.1:3001/https://hub.docker.com/v${this.apiVersion}/${path}`;

    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    if (localStorage && localStorage.getItem('loggedInToken')) {
      headers.set('Authorization', `JWT ${localStorage.getItem('loggedInToken')}`);
    }

    let requestParams = new Request({
      method: method,
      url: url,
      body: JSON.stringify(data),
      headers: headers,

    });
    console.log(requestParams);
    return requestParams;
  }

  private makeRequest(method:string, path: string, data?) {
    let requestParams = this.buildRequestParams(method, path, data);

    return this.http.request(requestParams)
      .map((res) => res.json());
  }
}
