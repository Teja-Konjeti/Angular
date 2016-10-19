import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
 
import {routes, components} from "./product.routing";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
        FormsModule,

        RouterModule.forRoot(routes)
    ],

    declarations: [
         ...components
    ],

    providers: [
         
    ],

    exports: [
        
    ]
})
export class ProductModule {

}