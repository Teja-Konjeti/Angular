import {Routes} from "@angular/router";

import {LoginComponent} from "./login.component";
import {ForbiddenComponent} from "./forbidden.component";

export const routes:Routes = [
    {
        path : 'auth/login',
        component:   LoginComponent
    },

    {
        path : 'auth/forbidden',
        component:   ForbiddenComponent
    }
    ]

export const components:any[] = [
    LoginComponent,
    ForbiddenComponent
]