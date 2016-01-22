import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {Github} from '../../services/github';
import {Dockerhub} from "../../services/dockerhub";

@Component({
  selector: 'repo-detail',
  templateUrl: 'app/components/repo-detail/repo-detail.html',
  styleUrls: ['app/components/repo-detail/repo-detail.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class RepoDetail {
  repoDetails = {};
  constructor(routeParams:RouteParams, dockerhub: Dockerhub) {
    dockerhub.getRepoDetailForOrg(routeParams.get('org'),routeParams.get('name'))
      .subscribe(repoDetails => {
        this.repoDetails = repoDetails;
      });
  }

}
