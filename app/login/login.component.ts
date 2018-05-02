import { Component, OnInit } from "@angular/core";
import { User } from '../shared/users/user.model';
import { UserService } from "../shared/users/user.service";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";
import { LocalStorageService } from '../shared/local-storage/local-storage.service';

@Component({
    selector: "ns-login",
    templateUrl: "login/login.component.html",
    styleUrls: ["login/login.component.css"]

})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;

    constructor(private router: Router,
                private loginService: LoginService,
                private userService: UserService,
                private localStorageService: LocalStorageService) {
        this.user = new User();
    }

    ngOnInit(): void {
        let localStorageUser: User = this.localStorageService.getItem('user');
        if (!localStorageUser) {
            this.user = new User()
        } else {
            this.user = localStorageUser;
            if (localStorageUser.email && localStorageUser.password) {
                this.login();
            }
        }
    }

    submit() {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    }

    login() {
        this.loginService.login(this.user)
            .subscribe(() => {
                this.localStorageService.setItem('user', this.user);
                this.router.navigate(["/overview"]);
            }), (error) => {
            alert('An error occured');
        }
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

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }


}

