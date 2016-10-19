import {Component, OnInit} from "@angular/core";

import {ProductService} from "./product.services";

//TODO: products/edit/1
//TODO: products/create

@Component({
    templateUrl: 'app/product/templates/product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
    product: any = {};

    constructor() {
    }

    ngOnInit() {
        
    }

    //TODO: implement save, create product use cases
    //TODO: implement delete example

    ngOnDestroy() {

    }
}