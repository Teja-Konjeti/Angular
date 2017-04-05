import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ProductListComponent} from "./product-list.component";
import {ByYearPipe} from "./product.pipes";
import {productRouting} from "./product.routing";
import {ProductWidgetComponent, CountComponent} from "./product-widget.component";

import {ProductService} from "./product.services";

import {ProductHomeComponent} from "./product-home.component";
import {ProductEditComponent} from "./product-edit.component";

import {ProductSearchComponent} from "./product-search.component";
import {SearchProductPipe} from "./product.pipes";

 

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
 
        
        productRouting
    ],

    declarations: [
        ProductListComponent,
        ByYearPipe,
        ProductWidgetComponent,
        ProductHomeComponent,
        ProductEditComponent,
        SearchProductPipe,
        ProductSearchComponent,
        CountComponent
    ],

    providers: [
        ProductService
    ],

    exports: [
        
    ]
})
export class ProductModule {

}