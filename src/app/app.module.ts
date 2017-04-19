import {NgModule} from "@angular/core";


import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";

import {HomeComponent} from "./home.component";

import {AboutComponent} from "./about.component";
import {ProductModule} from "../product/product.module"

import {routingModule} from "./app.routing";
import * as config from "./app.config";
@NgModule({
    imports:[
        BrowserModule,
        ProductModule,
        routingModule
    ],

    declarations:[
        AppComponent,
        HomeComponent,
        AboutComponent,
    ],
    bootstrap: [
        AppComponent    //Starts at AppComponent hence all of the selectors are placed here
    ],
    providers:[
        {
            provide:"apiEndPoint",
            useValue: config.API_END_POINT
        }
    ]
})

export class AppModule{



}