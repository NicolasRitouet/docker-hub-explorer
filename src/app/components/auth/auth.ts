import {Component} from 'angular2/core';
import {Router, RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

import {Dockerhub} from '../../services/dockerhub';
import {RepoList} from '../repo-list/repo-list';
import {RepoDetail} from '../repo-detail/repo-detail';

@Component({
  selector: 'auth',
  templateUrl: 'app/components/auth/auth.html',
  styleUrls: ['app/components/auth/auth.css'],
  providers: [Dockerhub],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  new Route({path: '/:org', component: RepoList, name: 'RepoList'}),
  new Route({path: '/:org/:name', component: RepoDetail, name: 'RepoDetail' })
])
export class Auth {

  constructor() {}

}
