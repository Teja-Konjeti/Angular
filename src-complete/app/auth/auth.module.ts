import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {routes, components} from "./auth.routing";

import {AuthService} from "./auth.service";

import {HttpClient} from "./auth.http-client";

import {AuthGuard, 
        AdminGuard, 
        RoleBasedAccessGuard} from "../auth/auth.guards";

@NgModule({
    imports: [  
        CommonModule, 
        RouterModule, 
        FormsModule, 
        RouterModule.forRoot(routes)
    ],

    declarations: [
        ...components
    ],
    
    providers: [
           AuthService,
           
           HttpClient,

           AuthGuard,
           AdminGuard,
           RoleBasedAccessGuard
    ]
})
export class AuthModule {

}