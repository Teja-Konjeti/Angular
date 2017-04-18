import {NgModule} from "@angular/core";


import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";

import {HomeComponent} from "./home.component";

import {AboutComponent} from "./about.component";

import {ProductListComponent} from "./product/product-list.component";


import {ProductService} from "./product/product.service";
@NgModule({
    imports:[
        BrowserModule
    ],

    declarations:[
        AppComponent,
        HomeComponent,
        AboutComponent,
        ProductListComponent
    ],

    bootstrap: [
        AppComponent
    ],

    providers: [
        ProductService
    ]

})

export class AppModule{



}