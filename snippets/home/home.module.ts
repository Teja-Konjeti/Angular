import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {routes, components} from "./home.routing";
 
@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        RouterModule.forRoot(routes)
    ],

    declarations: [
        ...components
    ]

})
export class HomeModule {

}