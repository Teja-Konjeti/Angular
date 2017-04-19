import {RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";

const routes:Routes = [
{
    path:'',//Base
    component:HomeComponent
},
{
    path:'about', //localhost:3000/about
    component:AboutComponent
}    
]

import {ModuleWithProviders} from "@angular/core";

export const routingModule:ModuleWithProviders = RouterModule.forRoot(routes); //W pass our route to get a routing module created for us


