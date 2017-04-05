import {Injectable} from "@angular/core";

import {Router, 
        ActivatedRouteSnapshot, 
        RouterStateSnapshot,
        CanActivate
        } from '@angular/router';

import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard {
    constructor(private router: Router,
                private authService: AuthService) {

        console.log("AuthGuard::constructor");

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(route.data);

        if (this.authService.isAuthenticated()) {
            return true;
        }
        

         this.authService.setRedirectUrl(state.url);
        this.router.navigate(['/auth/login']);
       

        return false;
    }

}

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router,
                private authService: AuthService) {
         console.log("AdminGuard::constructor");
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(route.data);

        if (this.authService.isAdmin()) {
            return true;
        }
        
        this.router.navigate(['/auth/forbidden']);

        return false;
    }
}

@Injectable()
export class RoleBasedAccessGuard implements CanActivate {
    constructor(private router: Router,
                private authService: AuthService) {
         console.log("AdminGuard::constructor");
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //state.data with roles and authService.getRoles match it
        
        this.authService.setRedirectUrl(state.url);
        this.router.navigate(['/auth/login']);

        return false;
    }
}