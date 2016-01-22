import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {Dockerhub} from "../../services/dockerhub";

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login.html',
  styleUrls: ['app/components/login/login.css'],
  providers: [Dockerhub],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class Login {

  constructor(private router:Router, private dockerhub: Dockerhub) {}

  submitLogin(username: string, password: string) {
    this.dockerhub.login(username, password);
  }
}
