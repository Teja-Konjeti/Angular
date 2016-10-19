import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {HttpModule} from "@angular/http";

import {FormsModule,
        ReactiveFormsModule} from "@angular/forms";

import {RouterModule} from "@angular/router";

import {BrandService} from "./brand.services";

import {routes, components} from "./brand.routing";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        RouterModule.forRoot(routes)
    ],

    declarations : [
        ...components
    ],

    exports: [
        ...components
    ],

    providers: [
        BrandService
    ]

})
export class BrandModule {
    
}