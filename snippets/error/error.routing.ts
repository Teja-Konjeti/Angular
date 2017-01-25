import {Component} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {ErrorComponent, 
        ForbiddenErrorComponent, 
        PageNotFoundErrorComponent} 
        from "./error.components";

const routes:Routes = [
   
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