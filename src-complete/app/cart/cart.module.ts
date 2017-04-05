import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, 
        ReactiveFormsModule} from "@angular/forms";

import {routes, components} from "./cart.routing";

import {
    CartStorageService, 
    CartLocalStorageService, 
    CartSessionStorageService}  from "./cart.services"

//TODO: SaveAlertGuard

import {SaveAlertGuard} from "./cart.guards";

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
        ],

    declarations: [
            ...components
        ],

    providers: [
           {
               provide: CartStorageService,
               useClass: CartLocalStorageService
           },

           SaveAlertGuard

           //TODO: SaveAlertGuard
        ]
})
export class CartModule {

}