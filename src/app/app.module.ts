import {NgModule} from "@angular/core";


import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";

import {HomeComponent} from "./home.component";

import {AboutComponent} from "./about.component";
import {ProductModule} from "../product/product.module"

@NgModule({
    imports:[
        BrowserModule,
        ProductModule
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
    ]
})

export class AppModule{



}