import { Component } from "@angular/core";
import {User} from '../shared/users/user.model';
import { UserService } from "../shared/users/user.service";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

@Component({
  selector: "ns-login",
  templateUrl: "login/login.component.html",
  styleUrls: ["login/login.component.css"]
  
})
export class LoginComponent {
  user: User;
  isLoggingIn = true;

  constructor(private router: Router, private loginService: LoginService, private userService: UserService) {
    this.user = new User();
    this.user.email = "wayna@pawiasek.at";
    this.user.password = "passwowd";
  }
  submit(){
    if (this.isLoggingIn){
      this.login();
    }
    else {
      this.signUp();
    }
  }
  login() {
    this.loginService.login(this.user)
      .subscribe(
        () => this.router.navigate(["/overview"]),
        (error) => alert("Unfortunately we could not find your account.")
      );
  }
  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );
  }
  toggleDisplay(){
    this.isLoggingIn = !this.isLoggingIn;
  }
}

