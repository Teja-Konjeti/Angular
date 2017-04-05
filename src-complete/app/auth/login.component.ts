import {Component, OnInit} from "@angular/core"; 

import {Router} from "@angular/router";

import {Http, Response, Headers, RequestOptions} from "@angular/http";

import {Observable} from "rxjs/Observable";

import "rxjs/Rx";

import {Inject} from "@angular/core";

import {AuthService} from "./auth.service";

@Component({
    moduleId: module.id,
    templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
    username: string = '';
    password: string = '';

    errorMessage : string = '';

    constructor(
                private router: Router,
                private authService: AuthService
    ) {
    }

    login() {
        console.log("login component ", this.username, this.password);
        
        this.authService.authenticate(this.username, this.password)
        .subscribe((data:any) => {
            console.log(data);

            var redirectUrl = this.authService.getRedirectUrl();

            if (redirectUrl) {
                this.router.navigate([redirectUrl]);
            } else {
                this.router.navigate(["/"]);
            }
        });

     }

     ngOnInit() {

     }

     ngOnDestroy() {
         
     }
}