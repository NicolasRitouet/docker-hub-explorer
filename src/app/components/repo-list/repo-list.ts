import {Component} from 'angular2/core';
import {Github} from '../../services/github';
import {Observable} from 'rxjs/Observable';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Dockerhub} from "../../services/dockerhub";

@Component({
  selector: 'repo-list',
  templateUrl: 'app/components/repo-list/repo-list.html',
  styleUrls: ['app/components/repo-list/repo-list.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class RepoList {
  private repos: Observable<any>;
  constructor(dockerhub: Dockerhub, params:RouteParams) {
    this.repos = dockerhub.getReposForOrg(params.get('org'));
  }
}
