import {Component} from 'angular2/core';
import {Router, RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

import {RepoList} from '../repo-list/repo-list';
import {RepoDetail} from '../repo-detail/repo-detail';
import {Dockerhub} from "../../services/dockerhub";

@Component({
  selector: 'repo-browser',
  templateUrl: 'app/components/repo-browser/repo-browser.html',
  styleUrls: ['app/components/repo-browser/repo-browser.css'],
  providers: [Dockerhub],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
	new Route({path: '/:org', component: RepoList, name: 'RepoList'}),
	new Route({path: '/:org/:name', component: RepoDetail, name: 'RepoDetail' })
])
export class RepoBrowser {

  constructor(private router:Router, private dockerhub: Dockerhub) {}

  searchForOrg(orgName: string) {
    this.dockerhub.getOrg(orgName)
      .subscribe(() => {
        this.router.navigate(['RepoList', {org: orgName}])
      });
  }

}
