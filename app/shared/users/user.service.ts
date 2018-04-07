import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user.model";
import { Config } from "../config/config";
import { BackendService } from '../backend/backend.service';

@Injectable()
export class UserService {
    constructor(private backendService: BackendService) {}

  register(user: User) {
    return this.backendService.post(
        "/users",
        {
            username: user.email,
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