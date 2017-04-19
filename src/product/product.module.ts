import {NgModule} from "@angular/core"
import {ProductListComponent} from "./product-list.component";
import {HttpModule} from "@angular/http";
import {ProductWebService} from "./product.service";
import {ProductService} from "../app/interfaces";
import {CommonModule} from "@angular/common";
import {ByYearPipe} from "./product.pipes";
import {FormsModule} from "@angular/forms";
import {routingModule,components} from "./product.routing";
import {ProductLikeWidgetComponent} from "./product-like.component";


@NgModule({
imports:[
CommonModule,
HttpModule,
FormsModule,
routingModule
],
declarations:[
        components,
        ProductLikeWidgetComponent,
        ByYearPipe
    
],
exports :[
    ProductListComponent
]
,
    providers: [
        {
        provide:ProductService,
        useClass:ProductWebService
        }
    ]

})

export class ProductModule{

}