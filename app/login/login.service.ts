import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "../shared/users/user.model";
import { Config } from "../shared/config/config";
import { BackendService } from '../shared/backend/backend.service';

@Injectable()
export class LoginService {
    constructor(private backendService: BackendService) {}

  login(user: User) {
    return this.backendService.post(
        "/users/authenticate",
        {
            email: user.email,
            password: user.password
        }
    )
    .catch (this.handleErrors);
  }

  handleErrors(error: Response){
      console.log(JSON.stringify(error.json()));
      return Observable.throw(error);
  }
}