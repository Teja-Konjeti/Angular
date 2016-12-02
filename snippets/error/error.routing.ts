import {Component} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {ThrowErrorComponent, ErrorComponent, ForbiddenErrorComponent, PageNotFoundErrorComponent} from "./error.component";

const routes:Routes = [
    {
        path: "throwerror",
        component: ThrowErrorComponent
    },

    {
        path: "error",
        component: ErrorComponent

    },

    {
        path: "forbidden",
        component: ForbiddenErrorComponent
    }
    
    /*,

    {
        path: "**",
        component: PageNotFoundErrorComponent
    }*/
]

export const errorRouting = RouterModule.forRoot(routes);