import { Component, OnInit } from '@angular/core';


import {AuthService} from "../auth/auth.service";


//import {TranslateService} from 'ng2-translate';


@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    isLoggedIn : boolean;

    /*constructor(private translate: TranslateService,
                private authService: AuthService) { 
        this.isLoggedIn = this.authService.isAuthenticated();
    }*/

    constructor(private authService: AuthService) { 
        this.isLoggedIn = this.authService.isAuthenticated();
    }


    ngOnInit() {
        this.authService.getAuthNotification()
        .subscribe ( (status: boolean) => {
            this.isLoggedIn = status;
        })
     }

     logout() {
         this.authService.logout();
     }


        changeLang(code : string) {
            //this.translate.use(code);
        }
}