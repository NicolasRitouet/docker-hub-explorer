import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {Login} from './components/login/login';
import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'dockerhub-app',
  providers: [],
  templateUrl: 'app/dockerhub-app.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  new Route({ path: '/home', component: Home, name: 'Home', useAsDefault: true}),
  new Route({ path: '/about', component: About, name: 'About'}),
  new Route({ path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'}),
  new Route({ path: '/login', component: Login, name: 'Login'})
])
export class DockerhubApp {

  constructor() {}

}
