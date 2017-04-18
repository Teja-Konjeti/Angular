import {NgModule} from "@angular/core"
import {ProductListComponent} from "./product-list.component";
import {HttpModule} from "@angular/http";
import {ProductLikeWidgetComponent} from "./product-like.component";

import {ProductService} from "./product.service";
import {CommonModule} from "@angular/common";

import {ByYearPipe} from "./product.pipes";
import {FormsModule} from "@angular/forms";
@NgModule({
imports:[
CommonModule,
HttpModule,
FormsModule
],
declarations:[
            ProductListComponent,
        ProductLikeWidgetComponent,
        ByYearPipe
],
exports :[
    ProductListComponent
]
,
    providers: [
        ProductService    //Service providers.
    ]

})

export class ProductModule{

}